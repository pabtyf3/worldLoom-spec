# worldLoom Specification - Complete Index

**Version:** 1.3
**Last Updated:** December 2024
**Purpose:** This repository contains the canonical specification for the worldLoom project - a narrative-first, deterministic interactive fiction system designed for LLM and developer reference.

---

## What is worldLoom?

**worldLoom** is a narrative-first, deterministic interactive fiction system comprising:

- A structured storytelling engine (worldLoom-engine)
- A creator Studio for authoring valid content (worldLoom-studio)
- A publishing pipeline for multiple media formats (worldLoom-content)
- A foundation for future AI-assisted storytelling (worldLoom-ai)

### Core Design Pillars (Non-Negotiable)

1. **Determinism** - Same inputs → same outcomes
2. **Spec-First Architecture** - All behavior derives from schemas
3. **Separation of Concerns** - Spec ≠ Engine ≠ Studio ≠ Content ≠ AI
4. **Validation-First** - Invalid content never executes
5. **Multi-Market Design** - Same content projects to multiple delivery contexts

---

## Repository Structure

This specification repository is organized to mirror the five main worldLoom repositories:

```
worldLoom-spec-main/
├── worldloom-engine-spec/     # Engine runtime specifications
├── worldloom-frontend-spec/   # Frontend application specifications (Player + Creator)
├── worldloom-studio-spec/     # Legacy Studio specifications (now part of Frontend)
├── worldloom-content-spec/    # Content bundles and presentation specifications
├── worldloom-ai-spec/         # AI integration specifications
└── actioned/                  # Previously processed specification files
```

**Note:** The frontend is a unified React application providing both **Player** (story reading) and **Creator** (authoring) surfaces. The worldloom-studio-spec contains legacy separate Studio plans.

---

## 1. worldLoom-engine Specification

**Repository:** worldLoom-engine
**Purpose:** Core runtime engine implementation (TypeScript/JavaScript)

### Quick Start for Developers
1. Start with [Core Vision and Principles](worldloom-engine-spec/core-systems/01_Core_Vision_and_Principles.md)
2. Review [System Architecture](worldloom-engine-spec/core-systems/02_System_Architecture.md)
3. Read [Runtime Execution Flow](worldloom-engine-spec/runtime/runtime_execution_flow.md) - **binding contract**
4. Reference [Schema Examples](worldloom-engine-spec/schemas/examples.md) for JSON structures

### Subsystems

#### [Core Systems](worldloom-engine-spec/core-systems/)
Foundational architecture and design principles
- [01_Core_Vision_and_Principles.md](worldloom-engine-spec/core-systems/01_Core_Vision_and_Principles.md) - What worldLoom is and why
- [02_System_Architecture.md](worldloom-engine-spec/core-systems/02_System_Architecture.md) - High-level system layers
- [10_MVP_and_Non_Goals.md](worldloom-engine-spec/core-systems/10_MVP_and_Non_Goals.md) - Phase 1 scope definition

#### [Schemas](worldloom-engine-spec/schemas/)
Canonical type definitions and data structures
- [03_Schemas_and_Types.md](worldloom-engine-spec/schemas/03_Schemas_and_Types.md) - Schema philosophy
- [schema_overview.md](worldloom-engine-spec/schemas/schema_overview.md) - Overview and version info
- [examples.md](worldloom-engine-spec/schemas/examples.md) - **Copy/paste JSON examples**

**Key Types:**
- `StoryBundle` - Atomic unit of distribution and execution
- `LoreBundle` - Non-executable world knowledge
- `Scene` - Primary execution unit
- `Location` - Spatial and conceptual contexts
- `RuleModule` - Pluggable rule system interface

#### [World and Narrative](worldloom-engine-spec/world-and-narrative/)
World definition, locations, scenes, and lore systems
- [04_World_and_Spatial_System.md](worldloom-engine-spec/world-and-narrative/04_World_and_Spatial_System.md) - Abstract spatial model
- [05_Scene_System.md](worldloom-engine-spec/world-and-narrative/05_Scene_System.md) - Scene structure and transitions
- [07_Lore_System.md](worldloom-engine-spec/world-and-narrative/07_Lore_System.md) - Structured knowledge system
- [lore_companions_and_relationships.md](worldloom-engine-spec/world-and-narrative/lore_companions_and_relationships.md) - Companions, relationships, and romance

**Key Concepts:**
- Lore is first-class, addressable, and discoverable
- Locations can be spatial or conceptual
- Scenes present narrative, offer actions, and apply effects
- Companions have rule-bound agency

#### [Rules and Mechanics](worldloom-engine-spec/rules-and-mechanics/)
Pluggable rule systems and condition evaluation
- [06_Rules_and_Conditions.md](worldloom-engine-spec/rules-and-mechanics/06_Rules_and_Conditions.md) - Rule module architecture

**Key Features:**
- Rulesets are pluggable and isolated
- Engine calls ruleset contract, knows nothing about D&D, OpenD6, etc.
- Conditions and effects are deterministic

#### [Runtime](worldloom-engine-spec/runtime/)
Execution flow, state management, and persistence
- [runtime_execution_flow.md](worldloom-engine-spec/runtime/runtime_execution_flow.md) - **Step-by-step binding contract**
- [implementation_notes.md](worldloom-engine-spec/runtime/implementation_notes.md) - Integration guidance
- [09_Save_Game_Model.md](worldloom-engine-spec/runtime/09_Save_Game_Model.md) - Save state structure

**Critical Behaviors:**
- Deterministic execution loop
- Offline-capable operation
- Event emission for replay/debugging
- Save/resume functionality

---

## 2. worldLoom-frontend Specification

**Repository:** worldLoom-frontend
**Purpose:** Unified React application for Player + Creator surfaces

### Quick Start
1. Read [Frontend Technical Specification](worldloom-frontend-spec/01_Frontend_Technical_Specification.md)
2. Review [Monorepo Architecture](worldloom-frontend-spec/README.md#architecture-approach)
3. Understand [Two User Surfaces](worldloom-frontend-spec/README.md#two-user-surfaces)

### Overview

The frontend is a **single React + TypeScript codebase** that provides:
- **Player Application** - Interactive story reader
- **Creator Application** - World/story editor and playtester

Deployable to:
- Web + PWA
- Mobile (Android/iOS via Capacitor)
- Desktop (Windows/macOS/Linux via Tauri)

### Key Documentation

#### [Technical Specification](worldloom-frontend-spec/01_Frontend_Technical_Specification.md)
Complete technical design including:
- Monorepo structure (`/apps` and `/packages`)
- State management (UI, Session, Persistence layers)
- Offline-first architecture (IndexedDB)
- Platform packaging (Web/Mobile/Desktop)
- API integration
- Security and privacy

#### Player Features
- Story library and catalog
- Scene rendering with markdown
- Choice selection and dice rolls
- Character sheet and inventory
- Journal and event logging
- Save/load with multiple slots
- Audio and asset support

#### Creator Features
- Project management
- World editor (lore, NPCs, items, locations)
- Scene graph and editor
- Playtest mode with state inspector
- Validation and diagnostics
- Import/export bundles

### Architecture Principles

**Separation of Concerns:**
- `packages/domain` - Canonical types (platform-agnostic)
- `packages/runtime` - Execution engine (pure logic)
- `packages/persistence` - Storage adapters
- `packages/ui` - Shared components
- `apps/*` - Platform-specific wrappers

**Offline-First:**
- All bundles cached in IndexedDB
- Saves are local-only by default
- Telemetry buffered for upload
- Network is enhancement, not requirement

**Progressive Enhancement:**
- Web works everywhere (baseline)
- Native adds capabilities (enhancement)
- Single codebase maintained

### Platform Matrix

| Feature | Web | Mobile | Desktop |
|---------|-----|--------|---------|
| Offline play | ✓ | ✓ | ✓ |
| Bundle downloads | ✓ | ✓ | ✓ |
| File import/export | Limited | ✓ | ✓ |
| Local folders | Limited | Limited | ✓ |

### Design Focus
- **Player:** Mobile-first, immersive reading
- **Creator:** Desktop-first, keyboard shortcuts, multi-panel

---

## 3. worldLoom-studio Specification (Legacy)

**⚠️ LEGACY NOTICE:** The Studio is now part of worldLoom-frontend as the "Creator" surface.

The original plan separated Player (worldloom-frontend) and Creator (worldloom-studio) into separate repositories. The [Frontend Technical Specification](worldloom-frontend-spec/01_Frontend_Technical_Specification.md) describes a **unified monorepo approach** combining both surfaces with shared infrastructure.

**Current Approach:** See [worldloom-frontend Specification](#2-worldloom-frontend-specification) above.

**This section preserved for reference only.**

**Original Repository Plan:** worldLoom-studio (superseded by worldloom-frontend Creator surface)
**Original Purpose:** Content authoring and creation tools

### Quick Start for Studio Developers
1. Read [Studio AI Specification](worldloom-studio-spec/ai-assistant/studio_ai_specification.md)
2. Understand [Age Profiles and Content Gating](worldloom-studio-spec/safety-and-content/age_profiles_and_content_gating.md)
3. Review [Absolute Prohibitions](worldloom-studio-spec/safety-and-content/absolute_prohibitions_and_age_locking.md)

### Subsystems

#### [AI Assistant](worldloom-studio-spec/ai-assistant/)
Studio AI capabilities and boundaries
- [studio_ai_specification.md](worldloom-studio-spec/ai-assistant/studio_ai_specification.md) - Complete AI assistant spec

**What Studio AI Is:**
- An authoring assistant (NOT a runtime DM)
- A spec enforcer and tutor
- A prose converter
- An educational tool

**What Studio AI Does:**
- Drafts scenes, lore, NPCs, factions
- Refactors prose into structured narrative
- Suggests transitions and actions
- Enforces spec compliance

**What Studio AI Must Not Do:**
- Bypass validation
- Introduce runtime logic
- Generate prohibited content
- Improvise during execution

#### [Prose Conversion](worldloom-studio-spec/prose-conversion/)
Importing existing prose into worldLoom format
- [prose_conversion_pipeline.md](worldloom-studio-spec/prose-conversion/prose_conversion_pipeline.md) - Import pipeline

**Pipeline Flow:**
```
Raw Prose
 → Structural Analysis
 → World & Narrative Extraction
 → Spec-Constrained Conversion
 → Editable StoryBundle Draft
```

**Key Principle:**
> The AI adapts prose to the world — not the world to the prose

#### [Safety and Content](worldloom-studio-spec/safety-and-content/)
Age profiles, content gating, and structural safety
- [age_profiles_and_content_gating.md](worldloom-studio-spec/safety-and-content/age_profiles_and_content_gating.md) - Age profile system
- [absolute_prohibitions_and_age_locking.md](worldloom-studio-spec/safety-and-content/absolute_prohibitions_and_age_locking.md) - Content safety model

**Age Profiles:**
- `early-childhood` (2–6)
- `children` (7–12)
- `young-teen` (13–15)
- `teen` (16–17)
- `adult` (18+)

**Safety Model:**
- Age profiles are **immutable** once content exists
- Downgrading requires destructive content audit
- Absolute prohibitions are structural (cannot be authored)
- Studio AI respects all safety constraints

---

## 3. worldLoom-content Specification

**Repository:** worldLoom-content
**Purpose:** Example content bundles and presentation profiles

### Quick Start for Content Creators
1. Review [Multi-Market Design](worldloom-content-spec/presentation-profiles/multi_market_design_and_presentation.md)
2. Understand [Assets and Voice](worldloom-content-spec/media-and-assets/08_Assets_and_Voice.md)

### Subsystems

#### [Presentation Profiles](worldloom-content-spec/presentation-profiles/)
Multi-market design and output targeting
- [multi_market_design_and_presentation.md](worldloom-content-spec/presentation-profiles/multi_market_design_and_presentation.md) - Complete presentation system

**Supported Markets:**
- Interactive fiction / games
- Audiobooks
- Children's books & bedtime stories
- Educational modules
- Accessibility-first experiences
- Hands-free / in-car audio

**Example Profiles:**
- `interactive-game` - Full player agency
- `audiobook-linear` - Linear consumption
- `bedtime-story` - Gentle pacing, reduced complexity
- `educational-guided` - Instructor-defined paths
- `handsfree-audio` - Audio-first, hands-free

**Key Principle:**
> Narrative content ≠ presentation

#### [Media and Assets](worldloom-content-spec/media-and-assets/)
Audio, voice, imagery, and asset management
- [08_Assets_and_Voice.md](worldloom-content-spec/media-and-assets/08_Assets_and_Voice.md) - Asset system specification

**Audio Strategies:**
- Fully narrated TTS
- Pre-recorded voice acting
- Hybrid (TTS + recorded highlights)
- Silent / text-only
- Accessibility-enhanced narration

**Voice as Metadata:**
- Tone, age range, accent hint
- Not a binding decision
- Supports swappable TTS providers
- Enables localization

---

## 4. worldLoom-ai Specification

**Repository:** worldLoom-ai
**Purpose:** AI integration and generation tools

### Quick Start for AI Integration
1. Read [Studio AI Integration](worldloom-ai-spec/studio_ai_integration.md)

### Documentation
- [studio_ai_integration.md](worldloom-ai-spec/studio_ai_integration.md) - Complete AI integration spec

**Current Scope (Phase 1):**
- Studio AI authoring assistant
- Prose conversion with AI
- Spec enforcement
- Content safety guardrails

**Future Scope (Phase 3):**
- AI DM runtime generation
- Training data consumption from Studio
- Deterministic AI-assisted play
- Format-aware generation

**Studio AI vs Future AI DM:**
| Aspect | Studio AI | Future AI DM |
|--------|-----------|--------------|
| **Timing** | Content creation | Runtime |
| **Output** | Draft for review | Real-time narrative |
| **Validation** | Always required | Always required |
| **Role** | Authoring assistant | Generation within structure |

---

## Cross-Cutting Concerns

### Determinism Everywhere
- Same inputs → same outcomes
- Enables offline play, save/resume, replay
- Critical for all subsystems

### Schema-Driven Design
- All behavior derives from canonical schemas
- Validation precedes execution
- Invalid content never runs

### Safety by Construction
- Age profiles are structural, not moderation
- Absolute prohibitions cannot be authored
- AI respects all safety constraints
- Studio enforces, engine trusts

### Multi-Market by Design
- Single StoryBundle projects to multiple formats
- Presentation is separate from logic
- Player can choose consumption method
- Author publishes once, distributes to many markets

---

## For LLMs and AI Agents

### Context Primer
For rapid context establishment, reference:
- Original primer: [actioned/Archive 2/worldloom_project_context_primer.md](actioned/Archive 2/worldloom_project_context_primer.md)

### Implementation Tasks
Implementation task definitions (for worldLoom-engine):
- [actioned/planning/tasks/](actioned/planning/tasks/)

### Key Constraints When Assisting
1. **Respect determinism** - No runtime improvisation
2. **Respect schema-first validation** - All content must validate
3. **Respect age locking & safety** - Structural, not optional
4. **Avoid runtime AI improvisation** - AI assists authoring, not execution
5. **Preserve multi-market flexibility** - Content ≠ presentation

---

## Version History

### v1.3 (Current)
- Reorganized specification into repository-aligned structure
- Created comprehensive subsystem documentation
- Enhanced safety and content specifications
- Added presentation profile system

### v1.0-1.2
- Initial specification development
- Core system definitions
- Archived in [actioned/](actioned/) directory

---

## Related Repositories

- **worldLoom-engine** - TypeScript/JavaScript runtime implementation
- **worldLoom-studio** - Content authoring and editing tools
- **worldLoom-content** - Example content bundles and presentation profiles
- **worldLoom-ai** - AI integration and generation tools

---

## Contributing

This specification is the canonical definition of worldLoom. Changes should:
- Respect core design pillars
- Include clear rationale
- Consider version implications
- Maintain consistency across subsystems

---

## Quick Reference Card

### For Engine Developers
1. [Runtime Execution Flow](worldloom-engine-spec/runtime/runtime_execution_flow.md) ← **binding contract**
2. [Schema Examples](worldloom-engine-spec/schemas/examples.md) ← **copy/paste JSON**
3. [Implementation Notes](worldloom-engine-spec/runtime/implementation_notes.md) ← **integration guidance**

### For Studio Developers
1. [Studio AI Specification](worldloom-studio-spec/ai-assistant/studio_ai_specification.md) ← **AI boundaries**
2. [Age Profiles](worldloom-studio-spec/safety-and-content/age_profiles_and_content_gating.md) ← **content gating**
3. [Absolute Prohibitions](worldloom-studio-spec/safety-and-content/absolute_prohibitions_and_age_locking.md) ← **safety model**

### For Content Creators
1. [Multi-Market Design](worldloom-content-spec/presentation-profiles/multi_market_design_and_presentation.md) ← **publishing strategy**
2. [Assets and Voice](worldloom-content-spec/media-and-assets/08_Assets_and_Voice.md) ← **media system**

### For AI Integration
1. [Studio AI Integration](worldloom-ai-spec/studio_ai_integration.md) ← **complete AI spec**

---

**End of Specification Index**
