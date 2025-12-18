# worldLoom-engine Task List

Complete list of implementation tasks in execution order.

---

## Phase 1.1: Project Setup (Week 1)

### ✅ Task 00: Initialize TypeScript Project
**File:** [task-00-initialize-project.md](task-00-initialize-project.md)
**Time:** 2-4 hours
- Set up TypeScript with ESM
- Configure linting and formatting
- Create project structure
- Initialize git

### ✅ Task 01: Set Up Testing Infrastructure
**File:** [task-01-testing-setup.md](task-01-testing-setup.md)
**Time:** 2-3 hours
- Configure Jest with ESM support
- Create test utilities
- Set up fixtures
- Establish testing patterns

---

## Phase 1.2: Type System (Week 1-2)

### Task 02: Implement Core Types
**Time:** 6-8 hours
**Implements:** StoryBundle, LoreBundle, GameState, Scene, Location, Character, Item

Create TypeScript interfaces matching the canonical schema:
- `src/types/story-bundle.ts` - StoryBundle and related types
- `src/types/lore-bundle.ts` - LoreBundle and lore entities
- `src/types/game-state.ts` - Runtime state types
- `src/types/rule-module.ts` - Rule module interfaces
- `src/types/common.ts` - Shared types and utilities

**References:**
- [Schema Examples](../../../worldloom-engine-spec/schemas/examples.md)
- [Schemas and Types](../../../worldloom-engine-spec/schemas/03_Schemas_and_Types.md)

### Task 03: Implement Validation System
**Time:** 6-8 hours
**Implements:** Schema validation, type guards, validation errors

- `src/validation/validator.ts` - Core validation engine
- `src/validation/type-guards.ts` - Runtime type checking
- `src/validation/errors.ts` - Validation error types
- Validate structure and types
- Clear error messages

### Task 04: Implement Schema Utilities
**Time:** 4-6 hours
**Implements:** Helper functions for working with schemas

- `src/validation/schema-utils.ts` - Schema traversal and queries
- ID validation and uniqueness checking
- Reference extraction
- Schema versioning utilities

---

## Phase 1.3: Bundle Loading (Week 2-3)

### Task 05: Bundle Loader
**Time:** 6-8 hours
**Implements:** Load StoryBundle and LoreBundle from JSON

- `src/loader/bundle-loader.ts` - Main loader
- `src/loader/json-parser.ts` - JSON parsing with error handling
- Load from file, string, or object
- Handle malformed JSON gracefully

**References:**
- [Runtime Execution Flow §1](../../../worldloom-engine-spec/runtime/runtime_execution_flow.md)

### Task 06: Bundle Validator
**Time:** 8-10 hours
**Implements:** Structural and referential validation

- `src/validation/bundle-validator.ts` - Bundle-level validation
- Structural validation (all required fields present)
- Type validation (correct types for all fields)
- Cross-bundle validation (StoryBundle + LoreBundles)
- Clear, actionable error messages

### Task 07: Reference Resolution
**Time:** 6-8 hours
**Implements:** Resolve and validate all ID references

- `src/validation/reference-resolver.ts` - Reference resolution
- Build indices (sceneById, locationById, etc.)
- Validate all references resolve
- Detect circular references
- Report dangling references

---

## Phase 1.4: Core Runtime (Week 3-5)

### Task 08: Game State Manager
**Time:** 6-8 hours
**Implements:** Game state creation and mutation

- `src/runtime/game-state.ts` - State management
- Create new game state
- Immutable state updates
- State validation
- Deep cloning utilities

**References:**
- [Runtime Execution Flow §3](../../../worldloom-engine-spec/runtime/runtime_execution_flow.md)

### Task 09: Scene Executor
**Time:** 8-10 hours
**Implements:** Scene rendering and execution

- `src/runtime/scene-executor.ts` - Scene execution
- Render scene to RenderModel
- Evaluate exit conditions
- Filter available actions
- Apply scene effects

**References:**
- [Scene System](../../../worldloom-engine-spec/world-and-narrative/05_Scene_System.md)
- [Runtime Execution Flow §4](../../../worldloom-engine-spec/runtime/runtime_execution_flow.md)

### Task 10: Condition Evaluator
**Time:** 6-8 hours
**Implements:** Evaluate conditions against game state

- `src/runtime/condition-evaluator.ts` - Condition evaluation
- Evaluate flag conditions
- Evaluate variable conditions
- Evaluate compound conditions (AND, OR, NOT)
- Evaluate lore conditions

**References:**
- [Rules and Conditions](../../../worldloom-engine-spec/rules-and-mechanics/06_Rules_and_Conditions.md)

### Task 11: Effect Applicator
**Time:** 6-8 hours
**Implements:** Apply effects to game state

- `src/runtime/effect-applicator.ts` - Effect application
- Set/unset flags
- Modify variables
- Add/remove inventory items
- Reveal lore
- Validate effects before applying

### Task 12: Runtime Loop
**Time:** 8-10 hours
**Implements:** Main execution loop

- `src/runtime/runtime-loop.ts` - Core runtime
- Initialize game
- Get current scene
- Take action
- Transition scenes
- Event emission

**References:**
- [Runtime Execution Flow](../../../worldloom-engine-spec/runtime/runtime_execution_flow.md) (complete document)

---

## Phase 1.5: Rule Modules (Week 5-6)

### Task 13: Rule Module Interface
**Time:** 4-6 hours
**Implements:** Rule module contract

- `src/rules/rule-module.ts` - Interface definition
- Hook points (onAction, onSceneEnter, etc.)
- Resolution contracts
- Module registration

**References:**
- [Rules and Conditions](../../../worldloom-engine-spec/rules-and-mechanics/06_Rules_and_Conditions.md)

### Task 14: Example Rule Module
**Time:** 8-10 hours
**Implements:** Reference rule module implementation

- `src/rules/examples/core-rules.ts` - Core rule module
- Basic attribute checks
- Simple roll mechanics
- Combat simulation (optional)
- Example of all hook points

### Task 15: Rule Module Integration
**Time:** 6-8 hours
**Implements:** Integrate rule modules into runtime

- `src/rules/rule-registry.ts` - Module registry
- Load modules from bundle references
- Invoke module hooks
- Handle module errors gracefully
- Module versioning

---

## Phase 1.6: Persistence (Week 6-7)

### Task 16: Save System
**Time:** 6-8 hours
**Implements:** Save game state to JSON

- `src/persistence/save-manager.ts` - Save functionality
- Serialize game state
- Include metadata (timestamp, version, etc.)
- Compress if needed
- Validate save data

**References:**
- [Save Game Model](../../../worldloom-engine-spec/runtime/09_Save_Game_Model.md)

### Task 17: Load System and Versioning
**Time:** 6-8 hours
**Implements:** Load game state and handle version migration

- `src/persistence/load-manager.ts` - Load functionality
- `src/persistence/version-migrator.ts` - Version migration
- Deserialize save data
- Validate compatibility
- Migrate old saves
- Handle corrupted saves gracefully

---

## Phase 1.7: Testing & Polish (Week 7-8)

### Task 18: Integration Tests
**Time:** 8-10 hours
**Implements:** End-to-end testing

- `tests/integration/full-playthrough.test.ts` - Complete game flow
- `tests/integration/save-load-roundtrip.test.ts` - Persistence
- `tests/integration/multi-scene-narrative.test.ts` - Complex scenarios
- Test all features together
- Edge case coverage

### Task 19: Sample Content Execution
**Time:** 6-8 hours
**Implements:** Create and test sample content

- `examples/sample-bundles/tutorial-bundle.json` - Tutorial story
- `examples/sample-bundles/complex-bundle.json` - Feature showcase
- `examples/run-example.ts` - CLI runner
- Verify all examples execute correctly

### Task 20: CLI Testing Tool
**Time:** 6-8 hours
**Implements:** Command-line interface for testing stories

- `src/cli/index.ts` - CLI entry point
- `src/cli/commands.ts` - Command handlers (load, play, inspect)
- Interactive story playback in terminal
- Load bundle from file
- Display narrative and choices
- Execute actions
- Show game state
- Save/load functionality

**Features:**
- `worldloom play <bundle.json>` - Play a story
- `worldloom validate <bundle.json>` - Validate without playing
- `worldloom inspect <bundle.json>` - Show bundle structure
- Interactive prompt for choices
- Colored terminal output (chalk)

**New Dependencies:**
```json
{
  "dependencies": {
    "commander": "^11.1.0",
    "chalk": "^5.3.0",
    "inquirer": "^9.2.0"
  }
}
```

**Bin Configuration (package.json):**
```json
{
  "bin": {
    "worldloom": "./dist/cli/index.js"
  }
}
```

### Task 21: Documentation and Examples
**Time:** 8-10 hours
**Implements:** Complete documentation

- `docs/API.md` - Public API documentation
- `docs/ARCHITECTURE.md` - Internal architecture
- `docs/CONTRIBUTING.md` - Contribution guide
- `docs/EXAMPLES.md` - Usage examples
- `docs/CLI.md` - CLI usage guide
- README updates
- Inline code documentation
- JSDoc comments for all public APIs

---

## Total Estimates

### By Phase
- Phase 1.1 (Setup): 4-7 hours
- Phase 1.2 (Types): 16-22 hours
- Phase 1.3 (Loading): 20-26 hours
- Phase 1.4 (Runtime): 34-44 hours
- Phase 1.5 (Rules): 18-24 hours
- Phase 1.6 (Persistence): 12-16 hours
- Phase 1.7 (Polish): 28-36 hours

**Total: 132-175 hours (3-4 weeks full-time)**

### With LLM Assistance
Reduce by ~40%: **80-105 hours (2-2.5 weeks full-time)**

---

## Dependencies Between Tasks

```
00 → 01 → 02 → 03 → 04 → 05 → 06 → 07
                            ↓
                            08 → 09 → 10 → 11 → 12
                                               ↓
                                               13 → 14 → 15
                                                         ↓
                                                         16 → 17
                                                               ↓
                                                               18 → 19 → 20
```

**Critical Path:** 00 → 01 → 02 → 05 → 06 → 08 → 09 → 12 → 18 → 20

---

## Task Status Tracking

Use this checklist to track progress:

### Setup
- [x] Task 00 - Initialize Project
- [x] Task 01 - Testing Setup

### Types
- [ ] Task 02 - Core Types
- [ ] Task 03 - Validation System
- [ ] Task 04 - Schema Utilities

### Loading
- [ ] Task 05 - Bundle Loader
- [ ] Task 06 - Bundle Validator
- [ ] Task 07 - Reference Resolution

### Runtime
- [ ] Task 08 - Game State Manager
- [ ] Task 09 - Scene Executor
- [ ] Task 10 - Condition Evaluator
- [ ] Task 11 - Effect Applicator
- [ ] Task 12 - Runtime Loop

### Rules
- [ ] Task 13 - Rule Module Interface
- [ ] Task 14 - Example Rule Module
- [ ] Task 15 - Rule Module Integration

### Persistence
- [ ] Task 16 - Save System
- [ ] Task 17 - Load System

### Polish
- [ ] Task 18 - Integration Tests
- [ ] Task 19 - Sample Content
- [ ] Task 20 - CLI Testing Tool
- [ ] Task 21 - Documentation

---

## Next Steps

1. **If just starting:** Begin with [Task 00](task-00-initialize-project.md)
2. **If setup complete:** Continue with [Task 02](task-02-core-types.md)
3. **If stuck:** Review related specifications and prompt files

For LLM assistance, use corresponding prompts in [../prompts/](../prompts/)
