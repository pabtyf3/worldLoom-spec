# Runtime Execution Flow (v1.3) – Implementation-Proof

This document defines **exactly how the runtime should execute** a StoryBundle + (optional) LoreBundle(s).
It is written to be followed by Claude or a developer without inventing missing systems.

---

## 0) Definitions

- **Content**: StoryBundle + optional LoreBundle(s), plus Assets.
- **Runtime State**: GameState (current scene, flags, vars, character, etc.).
- **RuleModules**: Plug-ins that evaluate conditions and resolve actions/hooks.
- **Engine Core**: Deterministic executor that:
  - loads bundles
  - validates references
  - manages state
  - invokes rule modules
  - applies effects
  - emits a “render model” for the UI

---

## 1) Startup Sequence

### 1.1 Load bundles
Input:
- StoryBundle JSON
- 0..N LoreBundle JSON
- Assets manifest(s) (optional)

Steps:
1. Parse StoryBundle JSON.
2. Parse LoreBundle JSON(s) if provided.
3. Build in-memory indices:
   - sceneById: Map<SceneID, Scene>
   - locationById: Map<LocationID, Location>
   - (optional) lore indices: raceById, factionById, etc.
4. Validate bundle structure (see §2). If validation fails (errors), stop and return errors.

### 1.2 Initialize RuleModules
Input:
- StoryBundle.ruleModules[] references
- Installed module implementations (runtime-provided)

Steps:
1. For each RuleModuleRef in StoryBundle.ruleModules:
   - find implementation by id
   - verify system matches (or allow if implementation declares compatibility)
   - pass config if present
2. Store modules in moduleRegistry: Map<RuleModuleID, RuleModule>

Failure modes:
- If module missing: hard error (unless story declares it optional; not in v1.3).
- If module refuses config: hard error.

### 1.3 Create initial GameState (new game)
If loading a save, skip to §6.

Steps:
1. Set GameState.storyBundleId.
2. Set GameState.loreBundleIds if present.
3. Set currentSceneId = StoryBundle.story.startScene
4. Optionally set currentLocationId if the start scene includes locationId.
5. Initialize:
   - flags = {}
   - vars = {}
   - character = { name, stats, inventory } (from character creation flow)
   - history = []

Character creation (Phase 1):
- Can be as simple as choosing name and a starter stat set.
- RuleModules may own advanced creation flows, but the engine must at least support:
  - name
  - stats Record<string, number>
  - inventory []

---

## 2) Validation (Required)

Validation must run on load (StoryBundle and LoreBundle).

### 2.1 Structural validation
- Required fields exist: StoryBundle.id, version, world.locations, story.scenes, story.startScene, ruleModules.
- IDs are non-empty strings.

### 2.2 Referential integrity
- story.startScene exists in story.scenes
- Exit.targetScene exists
- Scene.locationId (if present) exists in world.locations
- Location.entryScene exists
- Location.layout nodes reference valid sceneIds
- Location.layout connections reference valid node ids
- AssetRef.id references an Asset in StoryBundle.assets (or is resolvable by asset loader)

### 2.3 Lore integrity (if present)
- LoreRef.id exists in the referenced category index.
- Character.raceId exists if set.
- Character.factionIds exist if set.

### 2.4 Warnings vs errors
- Missing optional references => warning
- Broken required references => error

Return:
- ValidationResult { ok, errors[] }

---

## 3) Core Loop Overview

The engine runs as a loop of “present scene -> accept input -> resolve -> transition -> present next scene”.

At any moment, the engine should be able to provide a **RenderModel** to the UI:

RenderModel:
- narrativeText (resolved)
- ambience (asset refs)
- availableExits (filtered by condition)
- availableActions (filtered by condition)
- debug info (optional)

The UI never mutates state directly. It sends intents:
- Move via exit
- Choose action
- System: save/load, inspect inventory, etc.

---

## 4) Scene Entry

Function: `enterScene(sceneId)`

Steps:
1. Lookup scene = sceneById.get(sceneId); if missing => hard error.
2. Update GameState.currentSceneId = sceneId
3. If scene.locationId present => GameState.currentLocationId = scene.locationId
4. Append HistoryEvent(type="sceneEnter").

### 4.1 Run entryRules (if any)
For each RuleHook in scene.entryRules:
1. Build RuleContext { state, scene, hook, rng }
2. Route hook to module:
   - if hook.moduleId is set: send to that module
   - else: broadcast to all modules until one returns meaningful result (implementation choice)
3. Apply RuleResult:
   - if result.effects: apply via §5
   - if result.narrative: store as “scene entry overlay” text (see §4.2)

### 4.2 Resolve narrative text
Scene narrative may be:
- string
- TextVariant[]
- LocalizedText[]

Resolution rules:
- If LocalizedText[]: select best match for UI locale (fallback first entry)
- If TextVariant[]: filter by variant.condition (if any), then weighted pick using RNG
- If string: use as-is

If entryRules produced narrative overlays:
- default behavior: append overlay after base text
- alternative: replace base text if module indicates it (not defined in v1.3; default to append)

### 4.3 Evaluate conditions for exits/actions
Available exits:
- If scene.exits missing => []
- Else include each exit where (exit.condition == null) OR evaluateCondition(exit.condition) is true

Available actions:
- Same approach.

Condition evaluation routing:
- If condition.type is one of (flag/stat/inventory/lore): engine may evaluate directly
- If condition.type == expression: engine uses built-in expression evaluator (see §7)
- Additionally, RuleModules may override evaluation:
  - engine first evaluates directly where possible
  - then allows modules to veto/affirm if configured (optional; not required in v1.3)
To keep v1.3 deterministic: use direct evaluation for built-in types and call modules only if engine cannot evaluate.

Output RenderModel.

---

## 5) Applying Effects (State Mutation)

All effects are applied by the engine in order.

Function: `applyEffects(effects: Effect[])`

Rules:
1. Effects apply sequentially.
2. Each effect appends HistoryEvent(type="effect").
3. After applying all effects, engine may clamp stats using min/max if provided.

Effect semantics:
- setFlag: GameState.flags[key] = value
- modifyStat: GameState.character.stats[key] += delta (default 0 if missing)
- addItem: merge counts by item.id
- removeItem: decrement and remove entry if count <= 0
- setVar: GameState.vars[key] = value
- modifyVar: if number => add; if string => concat; else module-defined (safe default: replace)
- teleport: triggers scene transition to targetScene (see §5.1)
- setReputation: GameState.reputation[factionId] = value

### 5.1 Teleport as control flow
If an effect of type "teleport" is applied:
- the engine should record it
- once all effects have applied, perform `enterScene(targetScene)` immediately
- teleport overrides normal exit/action transitions for that tick

---

## 6) Player Input Resolution

Two main input types in v1.3:
- Choose Exit (movement/transition)
- Choose Action (interaction)

### 6.1 Choosing an Exit
Function: `selectExit(exit)`

Steps:
1. Verify exit is currently available (condition passes).
2. Append HistoryEvent(type="action", data={kind:"exit", label:exit.label})
3. Run scene.exitRules (optional, same pattern as entryRules)
4. Transition: `enterScene(exit.targetScene)`

### 6.2 Choosing an Action
Function: `selectAction(actionId)`

Steps:
1. Find action in current scene actions.
2. Verify condition passes.
3. Append HistoryEvent(type="action", actionId)

4. Apply action.effects (if any) via §5.
5. For each action.ruleHooks:
   - call RuleModule.resolve() with RuleContext {state, scene, action, hook, rng}
   - apply RuleResult.effects
   - if RuleResult.narrative => append as “action result text” to be shown immediately

6. Determine next scene:
   - If teleport effect occurred => handled in §5.1
   - Else remain in same scene unless action explicitly changes it (via teleport)

7. Return updated RenderModel:
   - base narrative (scene narrative) plus “action result text” appended in UI layer
   - (optionally) the engine can provide `recentNarrative` separate from base narrative

---

## 7) Expression Evaluator (Required)

Expression conditions allow authors to write simple gates without custom modules.

ExpressionCondition:
- { type: "expression", expr: string }

### 7.1 Supported syntax (v1.3)
- Literals: numbers, strings in quotes, booleans true/false
- Operators:
  - Comparisons: ==, !=, >, >=, <, <=
  - Boolean: &&, ||, !
- Parentheses: ( )
- Identifiers:
  - flag.<key> => GameState.flags[key] (missing => false)
  - stat.<key> => GameState.character.stats[key] (missing => 0)
  - var.<key>  => GameState.vars[key] (missing => null)
  - rep.<factionId> => reputation value (missing => 0)
- Functions (optional but recommended):
  - hasItem("itemId") => boolean
  - itemCount("itemId") => number

### 7.2 Safety rules
- No arbitrary code execution
- No loops
- No property traversal beyond the prefixes above

If expression parsing fails:
- treat as false
- emit a warning in validation/runtime logs

---

## 8) Save / Load

### 8.1 Save
Serialize GameState as JSON:
- include version + schemaVersion fields
- include storyBundleId

### 8.2 Load
Steps:
1. Parse save JSON to GameState.
2. Ensure referenced story bundle matches storyBundleId.
3. Run light validation:
   - currentSceneId exists
   - item ids valid (optional warning)
4. Resume at `enterScene(currentSceneId)` but do NOT re-run entryRules unless you explicitly want it.
   - Default: do not re-run entryRules on load (prevents double effects).
   - Provide an option: `replayEntryRulesOnLoad` for debugging.

---

## 9) Integrating Lore at Runtime

LoreBundle informs:
- character creation options (races/factions)
- narrative validation via LoreRefs
- lore conditions (Condition.type="lore")

### 9.1 Lore conditions (v1.3 baseline)
Implement minimal keys:
- "race:<raceId>" matches character.raceId
- "faction:<factionId>" matches character.factionIds contains it
- "knows:<eventId>" matches vars["knows.<eventId>"] == true (or flags["knows.<eventId>"])

If you need a richer knowledge system later, extend without breaking this baseline.

---

## 10) Minimal Engine APIs (Suggested)

These are not required types, but recommended structure.

- `loadStoryBundle(json): StoryBundle`
- `loadLoreBundle(json): LoreBundle`
- `validate(bundle(s)): ValidationResult`
- `createNewGame(story, lore?, characterSeed?): GameState`
- `loadGame(saveJson): GameState`
- `getRenderModel(state): RenderModel`
- `enterScene(state, sceneId): GameState`
- `selectExit(state, exitIndex|id): GameState`
- `selectAction(state, actionId): GameState`
- `saveGame(state): string`

RenderModel should be pure and derived from state + content.

---

## 11) Non-Goals (v1.3 spec scope)

Not in scope for Phase 1 implementation-proof build:
- Real-time combat simulation
- Multiplayer
- Procedural map generation
- AI DM runtime
- Full editor implementation (only requirements exist)

---
