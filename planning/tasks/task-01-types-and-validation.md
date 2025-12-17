# Task 1 — Canonical Runtime Types & Schemas

**Implementation Repository:** `worldLoom-engine`
**Branch:** `phase-1-types-and-validation`

## Objective
Create canonical TypeScript runtime types for all Phase 1 systems.

## Scope
- StoryBundle
- LoreBundle
- WorldDefinition
- SpatialGraph
- StoryGraph
- Scenes
- Actions
- Assets / Voice
- RuleModule interfaces

## Constraints
- No runtime logic
- Lore is read-only and non-executable

## Tests
- Validators and type guards

## Specification References
All references are in the **worldLoom-spec** repository:
- [schema/types.ts](../../schema/types.ts) - Primary source of truth
- [docs/systems/03_Schemas_and_Types.md](../../docs/systems/03_Schemas_and_Types.md)
- [docs/systems/07_Lore_System.md](../../docs/systems/07_Lore_System.md)
- [implementation/types.ts](../../implementation/types.ts)

## Success Criteria
- All types defined match schema specifications exactly
- Type guards validate all required fields
- Tests cover edge cases and invalid inputs
- TypeScript compiles with no errors in strict mode
