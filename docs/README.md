# Documentation

Detailed specification documents organized by topic.

## Vision

### [01_Core_Vision_and_Principles.md](vision/01_Core_Vision_and_Principles.md)
The foundational vision for WorldLoom - narrative-first, schema-driven, offline-capable RPG engine.

## Architecture

### [02_System_Architecture.md](architecture/02_System_Architecture.md)
High-level system architecture and how the major components fit together.

## System Specifications

Detailed specifications for each subsystem:

### [03_Schemas_and_Types.md](systems/03_Schemas_and_Types.md)
Core schema philosophy and type system overview.

### [04_World_and_Spatial_System.md](systems/04_World_and_Spatial_System.md)
How locations, regions, and spatial navigation work. Covers abstract spatial models that support text navigation today and graphical renderers later.

### [05_Scene_System.md](systems/05_Scene_System.md)
Scene structure, narrative blocks, exits, actions, and scene transitions.

### [06_Rules_and_Conditions.md](systems/06_Rules_and_Conditions.md)
Rule module architecture, condition evaluation, and effect application. How the pluggable rule system works.

### [07_Lore_System.md](systems/07_Lore_System.md)
Lore bundles, entities (races, factions, deities, traits), and how lore informs narrative without being executable.

### [08_Assets_and_Voice.md](systems/08_Assets_and_Voice.md)
Asset management, audio/music/imagery, voice specifications, and TTS integration.

### [09_Save_Game_Model.md](systems/09_Save_Game_Model.md)
Save state structure, serialization, and versioning strategy.

## Planning

### [10_MVP_and_Non_Goals.md](planning/10_MVP_and_Non_Goals.md)
What's in scope for Phase 1 / MVP and what's explicitly out of scope.

## Reading Order

**For implementers:**
1. Start with [vision](vision/) to understand the philosophy
2. Review [architecture](architecture/) for the big picture
3. Dive into specific [systems](systems/) as needed during implementation

**For designers:**
1. [Vision](vision/) - understand the goals
2. [Planning](planning/) - understand the scope
3. [Systems](systems/) - understand capabilities and constraints
