# WorldLoom Specification

This repository contains the canonical specification for the WorldLoom RPG engine - a narrative-first, schema-driven, offline-capable RPG engine.

## Repository Structure

```
worldLoom-spec/
├── docs/           # Specification documents
├── schema/         # Canonical type definitions and examples
├── implementation/ # Implementation guidance for developers
└── reference/      # Reference code examples
```

## Quick Navigation

### For Understanding the Vision
Start here to understand what WorldLoom is and why it exists:
- [Core Vision & Principles](docs/vision/01_Core_Vision_and_Principles.md)
- [MVP & Non-Goals](docs/planning/10_MVP_and_Non_Goals.md)

### For Developers & Implementers
The binding contract for implementation:
1. **[schema/types.ts](schema/types.ts)** - Canonical TypeScript type definitions (PRIMARY SOURCE OF TRUTH)
2. **[implementation/runtime_execution_flow.md](implementation/runtime_execution_flow.md)** - Step-by-step runtime behavior
3. **[schema/examples.md](schema/examples.md)** - JSON schema examples for testing
4. **[implementation/implementation_notes.md](implementation/implementation_notes.md)** - Integration notes and validation

### For System Design
Detailed specification of each subsystem:
- [System Architecture](docs/architecture/02_System_Architecture.md)
- [Schemas and Types](docs/systems/03_Schemas_and_Types.md)
- [World and Spatial System](docs/systems/04_World_and_Spatial_System.md)
- [Scene System](docs/systems/05_Scene_System.md)
- [Rules and Conditions](docs/systems/06_Rules_and_Conditions.md)
- [Lore System](docs/systems/07_Lore_System.md)
- [Assets and Voice](docs/systems/08_Assets_and_Voice.md)
- [Save Game Model](docs/systems/09_Save_Game_Model.md)

### For Reference
- [Reference Code Examples](reference/code/)

## Core Principles

1. **Narrative is primary** - Narrative is the first-class artifact; rules and systems interpret it
2. **Schema-driven** - All content is defined by schemas and fully serializable
3. **Offline-capable** - Engine works completely offline with bundled content
4. **Pluggable rules** - Rule systems are modular and swappable
5. **Lore-grounded** - Lore provides non-executable world knowledge that informs narrative

## Versioning

This specification follows semantic versioning. Current version information is tracked in the schema files.

### Specification Rules
- Files in this repository define the authoritative engine behavior
- If there is a conflict between code and specification, the specification wins
- Any changes require explicit version bumps and documentation

## Related Repositories

- **worldLoom-engine** - TypeScript/JavaScript engine implementation
- **worldLoom-studio** - Content authoring tools
- **worldLoom-content** - Example content bundles
- **worldLoom-ai** - AI integration and generation tools

## Contributing

This specification is the product of iterative design conversations and represents the canonical definition of WorldLoom. Changes should be proposed with clear rationale and version implications.
