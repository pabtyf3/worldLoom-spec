# Implementation Notes (v1.3)

## 1) Systems and Integration (How the parts fit)

### Content layer
- **StoryBundle** contains:
  - WorldDefinition (locations + layouts)
  - StoryGraph (scenes + start scene)
  - RuleModule refs
  - Assets
- **LoreBundle** contains:
  - Races / Factions / Traits / Deities / History / Canon items/places
  - No executable logic

### Engine core responsibilities
- Load + validate bundles (structural + referential)
- Maintain GameState (single source of truth during play)
- Render current scene into a UI-ready RenderModel
- Accept player input (exit/action intents)
- Evaluate conditions
- Apply effects
- Invoke RuleModules for hooks and complex rule resolution
- Save/load GameState as JSON

### RuleModule responsibilities
- Adjudicate checks/rolls/combat-ish logic when requested via hooks
- Provide narrative overlays (optional) and state-change proposals (effects)
- Evaluate conditions if the engine cannot (or if you decide to delegate)

### Presentation responsibilities (Web/Mobile)
- Display narrative, options, and ambience
- Play assets (audio/music/voice) when present
- Capture player choice and send to engine as intent
- Never mutate state directly

## 2) Validation rules (minimum)
- Unique IDs for scenes/locations/assets
- All references must resolve (or warn if optional)
- No dangling scene transitions
- Layout connections must reference valid nodes

## 3) Forward compatibility
- Unknown fields should be ignored (do not crash)
- Version fields must be preserved on save/load
- Prefer additive changes to schemas

## 4) Recommended directory layout (repo)
/packages
  /engine-core
    src/
      engine.ts
      validation.ts
      expression.ts
      modules/
  /schemas
    types.ts
  /ui-web (optional)
  /ui-mobile (future)

## 5) Test strategy
- Fixture load tests using `schema_examples.md`
- Validation negative tests (broken references)
- Deterministic RNG seeded tests for variant selection
