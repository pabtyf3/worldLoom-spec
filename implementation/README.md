# Implementation Guide

This directory contains guidance for implementing the WorldLoom engine according to the specification.

## Files (Read in Order)

### 1. [runtime_execution_flow.md](runtime_execution_flow.md)
**Binding contract** - Step-by-step runtime behavior specification.

Defines exactly how the engine should:
- Initialize and load bundles
- Execute the game loop
- Process scenes, exits, and actions
- Evaluate conditions and apply effects
- Handle rule module integration
- Manage save/load

### 2. [implementation_notes.md](implementation_notes.md)
Integration notes, validation strategies, and module boundaries.

Covers:
- Bundle validation requirements
- Module system integration
- Error handling strategies
- Performance considerations
- Forward compatibility

## Instructions for Implementers

### DO:
- Implement the runtime exactly per `runtime_execution_flow.md`
- Use `../schema/types.ts` as the primary source of truth for data models
- Validate bundles on load (structural + referential integrity)
- Keep runtime tolerant to unknown fields for forward compatibility
- Prefer JSON serialization for bundles and save files

### DO NOT:
- Invent systems not described in the specification
- Make assumptions when the spec is ambiguous - ask questions instead
- Deviate from the type contracts without specification approval
- Add features beyond Phase 1 / MVP scope

## Phase 1 / MVP Scope

The current specification covers:
- Text-first runtime (no graphics required)
- Abstract spatial model (nodes/connections, not tiles)
- Pluggable rule modules
- Lore packs for world knowledge
- Assets including audio/voice metadata
- Save/load functionality

## Related Documentation

- **Schema**: [../schema/](../schema/) - Type definitions and examples
- **System Design**: [../docs/systems/](../docs/systems/) - Detailed subsystem specifications
- **Reference Code**: [../reference/code/](../reference/code/) - Example implementations
