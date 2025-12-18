# Schema Directory

This directory contains the canonical type definitions and schema examples for WorldLoom.

## Files

### [types.ts](types.ts)
**PRIMARY SOURCE OF TRUTH** - The binding TypeScript contract for all WorldLoom content and runtime state.

This file defines:
- All core types (StoryBundle, LoreBundle, Scene, etc.)
- Runtime state structures (GameState, Character, etc.)
- Rule system interfaces (RuleModule, Condition, Effect, etc.)
- Asset and lore entity definitions

**Design Principles:**
- All content is schema-driven and serializable
- Lore is non-executable knowledge that informs narrative/rules but doesn't mutate state
- Rules are implemented via pluggable RuleModules
- Spatial definitions support text navigation today, graphical renderers later

### [examples.md](examples.md)
Copy/paste JSON examples demonstrating the schemas in action. Use these for:
- Creating test fixtures
- Understanding schema structure
- Validating implementations

## Usage

When implementing the WorldLoom engine:

1. **Start here** - Read [types.ts](types.ts) thoroughly
2. **Validate your understanding** - Review [examples.md](examples.md)
3. **Implement** - Use these types as your contract
4. **Don't deviate** - If the types don't support your use case, propose a specification change

## Version Information

Current specification version: **v1.3**

Schema version for serialization: `storybundle@1.3`, `lorebundle@1.3`
