# worldLoom-engine Implementation Guide

**Phase:** 1 (Foundation)
**Priority:** CRITICAL
**Estimated Duration:** 6-8 weeks (4 weeks with LLM assistance)

---

## Overview

The worldLoom-engine is the core runtime that executes StoryBundles deterministically. It's the foundation for all other components and must be implemented first.

**Repository:** worldloom-engine
**Tech Stack:** TypeScript (ESM), Node.js 22, Jest
**Dependencies:** None (this is the foundation)

---

## What This Repository Does

The engine is a **headless runtime** that:
- Loads and validates StoryBundles and LoreBundles
- Executes scenes deterministically
- Manages game state
- Evaluates conditions and applies effects
- Integrates pluggable rule modules
- Handles save/load functionality
- Emits events for observability
- **Includes CLI tool for testing stories in terminal**

**This is NOT:**
- A graphical UI or frontend (that's worldloom-frontend)
- An authoring tool (that's Studio)
- A content generator (that's in AI)

---

## Implementation Order

### Phase 1.1: Project Setup (Week 1)
**Tasks 00-01:** Initialize repository, set up TypeScript + Jest

### Phase 1.2: Type System (Week 1-2)
**Tasks 02-04:** Implement canonical types, validation system

### Phase 1.3: Bundle Loading (Week 2-3)
**Tasks 05-07:** Bundle parser, validator, reference resolution

### Phase 1.4: Core Runtime (Week 3-5)
**Tasks 08-12:** Game state, scene execution, condition evaluation, effect application

### Phase 1.5: Rule Modules (Week 5-6)
**Tasks 13-15:** Rule module interface, example implementation, integration

### Phase 1.6: Persistence (Week 6-7)
**Tasks 16-17:** Save/load system, versioning

### Phase 1.7: Testing & Polish (Week 7-8)
**Tasks 18-21:** Integration tests, sample content, CLI tool, documentation

---

## Task List

All tasks are in the [tasks/](tasks/) directory. Execute them in order.

### Foundation Tasks (Week 1)
- [x] **Task 00:** [Initialize TypeScript Project](tasks/task-00-initialize-project.md)
- [x] **Task 01:** [Set Up Testing Infrastructure](tasks/task-01-testing-setup.md)

### Type System (Week 1-2)
- [ ] **Task 02:** [Implement Core Types](tasks/task-02-core-types.md)
- [ ] **Task 03:** [Implement Validation System](tasks/task-03-validation-system.md)
- [ ] **Task 04:** [Implement Schema Utilities](tasks/task-04-schema-utilities.md)

### Bundle Loading (Week 2-3)
- [ ] **Task 05:** [Bundle Loader](tasks/task-05-bundle-loader.md)
- [ ] **Task 06:** [Bundle Validator](tasks/task-06-bundle-validator.md)
- [ ] **Task 07:** [Reference Resolution](tasks/task-07-reference-resolution.md)

### Core Runtime (Week 3-5)
- [ ] **Task 08:** [Game State Manager](tasks/task-08-game-state.md)
- [ ] **Task 09:** [Scene Executor](tasks/task-09-scene-executor.md)
- [ ] **Task 10:** [Condition Evaluator](tasks/task-10-condition-evaluator.md)
- [ ] **Task 11:** [Effect Applicator](tasks/task-11-effect-applicator.md)
- [ ] **Task 12:** [Runtime Loop](tasks/task-12-runtime-loop.md)

### Rule Modules (Week 5-6)
- [ ] **Task 13:** [Rule Module Interface](tasks/task-13-rule-module-interface.md)
- [ ] **Task 14:** [Example Rule Module](tasks/task-14-example-rule-module.md)
- [ ] **Task 15:** [Rule Module Integration](tasks/task-15-rule-module-integration.md)

### Persistence (Week 6-7)
- [ ] **Task 16:** [Save System](tasks/task-16-save-system.md)
- [ ] **Task 17:** [Load System and Versioning](tasks/task-17-load-system.md)

### Polish (Week 7-8)
- [ ] **Task 18:** [Integration Tests](tasks/task-18-integration-tests.md)
- [ ] **Task 19:** [Sample Content Execution](tasks/task-19-sample-content.md)
- [ ] **Task 20:** [Documentation and Examples](tasks/task-20-documentation.md)

---

## Success Criteria

### Milestone 1: Foundation (After Task 04)
- [x] TypeScript project initialized with ESM
- [x] Jest running successfully
- [ ] All core types implemented
- [ ] Validation system functional
- [ ] Tests passing (>80% coverage)

### Milestone 2: Loading (After Task 07)
- [ ] Can load StoryBundle JSON
- [ ] Can load LoreBundle JSON
- [ ] All references validate
- [ ] Structural validation working
- [ ] Error messages clear and helpful

### Milestone 3: Runtime (After Task 12)
- [ ] Game state management working
- [ ] Scenes execute deterministically
- [ ] Conditions evaluate correctly
- [ ] Effects apply properly
- [ ] Runtime loop functional

### Milestone 4: Complete (After Task 20)
- [ ] Full engine operational
- [ ] Rule modules pluggable
- [ ] Save/load working
- [ ] Sample content executes successfully
- [ ] Documentation complete
- [ ] Test coverage >80%
- [ ] Ready for Studio integration

---

## Technical Architecture

### Module Structure

```
worldloom-engine/
├── src/
│   ├── types/              # Canonical TypeScript types
│   │   ├── index.ts
│   │   ├── story-bundle.ts
│   │   ├── lore-bundle.ts
│   │   ├── game-state.ts
│   │   └── rule-module.ts
│   ├── validation/         # Schema validation
│   │   ├── validator.ts
│   │   ├── bundle-validator.ts
│   │   └── reference-resolver.ts
│   ├── loader/             # Bundle loading
│   │   ├── bundle-loader.ts
│   │   └── asset-loader.ts
│   ├── runtime/            # Core execution
│   │   ├── game-state.ts
│   │   ├── scene-executor.ts
│   │   ├── condition-evaluator.ts
│   │   ├── effect-applicator.ts
│   │   └── runtime-loop.ts
│   ├── rules/              # Rule module system
│   │   ├── rule-module.ts
│   │   ├── rule-registry.ts
│   │   └── examples/
│   │       └── core-rules.ts
│   ├── persistence/        # Save/load
│   │   ├── save-manager.ts
│   │   └── version-manager.ts
│   ├── events/             # Event emission
│   │   └── event-emitter.ts
│   └── index.ts            # Public API
├── tests/
│   ├── unit/
│   ├── integration/
│   └── fixtures/
├── examples/
│   └── sample-bundles/
├── package.json
├── tsconfig.json
├── jest.config.js
└── README.md
```

### Key Design Patterns

1. **Dependency Injection** - Rule modules injected, not hardcoded
2. **Event-Driven** - Runtime emits events for observability
3. **Immutable State** - State mutations create new state objects
4. **Validation-First** - Nothing executes without validation
5. **Plugin Architecture** - Rule modules are pluggable

---

## Testing Strategy

### Unit Tests (>70% coverage)
- Every function has unit tests
- Edge cases covered
- Error conditions tested

### Integration Tests (>80% overall)
- Full StoryBundle execution
- Multi-scene narratives
- Complex condition chains
- Rule module integration
- Save/load round-trips

### Fixtures
- Minimal StoryBundle (simplest valid bundle)
- Complete StoryBundle (all features)
- Edge case bundles (stress tests)
- Invalid bundles (validation tests)

---

## Dependencies

### Runtime Dependencies
```json
{
  "dependencies": {
    "@types/node": "^22.0.0"
  }
}
```

### Dev Dependencies
```json
{
  "devDependencies": {
    "typescript": "^5.3.0",
    "jest": "^29.7.0",
    "@types/jest": "^29.5.0",
    "ts-jest": "^29.1.0",
    "eslint": "^8.55.0",
    "@typescript-eslint/eslint-plugin": "^6.15.0",
    "@typescript-eslint/parser": "^6.15.0",
    "prettier": "^3.1.0"
  }
}
```

---

## API Design

### Public API

```typescript
// Load a bundle
const engine = await Engine.load(storyBundleJSON, loreBundlesJSON);

// Start a new game
const gameState = engine.newGame(characterData);

// Execute the current scene
const renderModel = engine.getCurrentScene(gameState);

// Take an action
const newState = await engine.takeAction(gameState, actionId, params);

// Save game
const saveData = engine.save(gameState);

// Load game
const loadedState = engine.load(saveData);
```

### Internal Modules

Each major system has a clean interface that other systems depend on.

---

## Common Pitfalls

### ❌ Don't Do This
1. **Skip validation** - Always validate bundles on load
2. **Mutate state directly** - Create new state objects
3. **Hardcode rules** - Use the rule module system
4. **Skip tests** - Every feature needs tests
5. **Use CommonJS** - This is ESM only

### ✅ Do This
1. **Validate early** - Fail fast on invalid data
2. **Immutable patterns** - Use spread operators, Object.freeze
3. **Plugin architecture** - Dependency injection for rules
4. **TDD approach** - Write tests first
5. **ESM modules** - Use `import/export`, not `require`

---

## LLM Prompts

All prompts are in the [prompts/](prompts/) directory, named to match tasks:
- `prompt-00-initialize-project.md`
- `prompt-01-testing-setup.md`
- etc.

Each prompt includes:
- Full context from specifications
- Specific requirements
- Code examples
- Success criteria
- Testing requirements

---

## Getting Started

### Step 1: Read the Specifications
- [Core Vision](../../worldloom-engine-spec/core-systems/01_Core_Vision_and_Principles.md)
- [System Architecture](../../worldloom-engine-spec/core-systems/02_System_Architecture.md)
- [Runtime Execution Flow](../../worldloom-engine-spec/runtime/runtime_execution_flow.md) ← **CRITICAL**
- [Schema Examples](../../worldloom-engine-spec/schemas/examples.md)

### Step 2: Initialize the Project
Execute [Task 00: Initialize Project](tasks/task-00-initialize-project.md)

### Step 3: Follow Tasks in Order
Don't skip ahead. Each task builds on previous work.

### Step 4: Verify Success Criteria
After each task, ensure all success criteria are met before continuing.

### Step 5: Write Tests
TDD is strongly recommended. Tests first, implementation second.

---

## Timeline

### Optimistic (Full-time, experienced)
- Week 1: Tasks 00-04 (Setup + Types)
- Week 2: Tasks 05-07 (Loading)
- Week 3-4: Tasks 08-12 (Runtime)
- Week 5: Tasks 13-15 (Rules)
- Week 6: Tasks 16-17 (Persistence)
- Week 7-8: Tasks 18-20 (Polish)

### Realistic (Part-time or learning)
- Week 1-2: Tasks 00-04
- Week 3-4: Tasks 05-07
- Week 5-7: Tasks 08-12
- Week 8-9: Tasks 13-15
- Week 10: Tasks 16-17
- Week 11-12: Tasks 18-20

### With LLM (Using prompts)
- Week 1: Tasks 00-07 (Setup + Loading)
- Week 2: Tasks 08-12 (Runtime)
- Week 3: Tasks 13-17 (Rules + Persistence)
- Week 4: Tasks 18-20 (Polish + Testing)

---

## Next Steps After Engine Complete

Once the engine is complete and all success criteria met:

1. **Tag a release** - v1.0.0-alpha
2. **Publish to npm** (optional, for Studio integration)
3. **Start Phase 2** - [worldloom-studio](../worldloom-studio/README.md)

The Studio will depend on this engine for validation and preview functionality.

---

## Support

- **Specification Questions:** See [worldloom-engine-spec](../../worldloom-engine-spec/)
- **Implementation Questions:** Check task details in [tasks/](tasks/)
- **LLM Assistance:** Use prompts in [prompts/](prompts/)

---

**Ready to start? Begin with [Task 00: Initialize Project](tasks/task-00-initialize-project.md)**
