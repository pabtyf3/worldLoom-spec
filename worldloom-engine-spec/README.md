# worldLoom-engine Specification

This directory contains all specifications relevant to the **worldLoom-engine** repository - the core runtime engine implementation.

## Directory Structure

### [core-systems/](core-systems/)
Foundational vision, architecture, and MVP scope definitions
- Core vision and design principles
- System architecture overview
- MVP goals and non-goals

### [schemas/](schemas/)
Canonical type definitions and data structures
- Schema philosophy and type system
- JSON schema examples
- StoryBundle and LoreBundle specifications

### [world-and-narrative/](world-and-narrative/)
World definition, spatial systems, scenes, and lore
- World and spatial system
- Scene system and narrative blocks
- Lore system (non-executable knowledge)
- Companions and relationships

### [rules-and-mechanics/](rules-and-mechanics/)
Pluggable rule systems, conditions, and effects
- Rule module architecture
- Condition evaluation
- Effect application
- Ruleset isolation

### [runtime/](runtime/)
Runtime execution flow, state management, and persistence
- Step-by-step execution flow
- Implementation notes and guidance
- Save game model

## Key Principles

1. **Deterministic execution** - Same inputs always produce same outputs
2. **Schema-driven** - All content defined by canonical schemas
3. **Offline-capable** - Engine works completely offline
4. **Pluggable rules** - Rule systems are modular and swappable
5. **Validation-first** - Invalid content never executes

## Related Repositories

- **worldLoom-engine** - Engine runtime implementation (TypeScript/JavaScript)
- **worldLoom-studio** - Content authoring tools
- **worldLoom-content** - Example content bundles
- **worldLoom-ai** - AI integration and generation tools
