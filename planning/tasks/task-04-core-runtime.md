# Task 4 — Core Runtime Loop (Golden Path)

**Implementation Repository:** `worldLoom-engine`
**Branch:** `phase-1-core-runtime`

## Objective
Implement the core game runtime loop for deterministic scene execution and state transitions.

## Scope
- GameState management
- Scene resolution and execution
- Deterministic state transitions
- Action processing

## Constraints
- Must be completely deterministic (same input → same output)
- No side effects outside of GameState updates
- No UI concerns - pure runtime logic
- Golden path only (error handling in later tasks)

## Tests
- Scene initialization
- Action execution
- State transitions
- Determinism verification (run same sequence twice)
- Scene condition evaluation

## Specification References
All references are in the **worldLoom-spec** repository:
- [implementation/runtime_execution_flow.md](../../implementation/runtime_execution_flow.md)
- [docs/systems/05_Scene_System.md](../../docs/systems/05_Scene_System.md)
- [docs/architecture/02_System_Architecture.md](../../docs/architecture/02_System_Architecture.md)

## Success Criteria
- Game loop executes scenes correctly
- State transitions are deterministic
- Actions modify state as expected
- All tests pass with consistent results
