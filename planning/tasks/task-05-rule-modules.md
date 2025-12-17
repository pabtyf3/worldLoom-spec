# Task 5 — RuleModules Framework

**Implementation Repository:** `worldLoom-engine`
**Branch:** `phase-1-rulemodules`

## Objective
Implement the pluggable RuleModule system for evaluating conditions and executing game rules.

## Scope
- RuleModule interface implementation
- Rule evaluation pipeline
- Built-in rule modules (basic conditions, state checks)
- Rule module registration system

## Constraints
- Rules must be pure functions (no side effects)
- Rules receive read-only context
- Rules must be deterministic
- Lore-based rules are read-only and non-executable

## Tests
- Rule module registration
- Condition evaluation
- Rule chaining
- Context isolation
- Determinism verification

## Specification References
All references are in the **worldLoom-spec** repository:
- [docs/systems/06_Rules_and_Conditions.md](../../docs/systems/06_Rules_and_Conditions.md)
- [reference/code/rules.core.ts](../../reference/code/rules.core.ts)
- [docs/systems/07_Lore_System.md](../../docs/systems/07_Lore_System.md)

## Success Criteria
- RuleModules can be registered and invoked
- Condition evaluation works correctly
- Rules have no side effects
- All tests pass
