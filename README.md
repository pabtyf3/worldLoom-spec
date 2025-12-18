# worldLoom Specification

**Version:** 1.3
**Last Updated:** December 2024

This repository contains the canonical specification for the worldLoom project - a narrative-first, deterministic interactive fiction system designed for LLM and developer reference.

---

## 📖 Complete Documentation

**👉 Start here: [WORLDLOOM_SPECIFICATION_INDEX.md](WORLDLOOM_SPECIFICATION_INDEX.md)**

The complete specification index provides:
- Comprehensive navigation across all subsystems
- Quick reference cards for developers, studio creators, and content authors
- Detailed subsystem documentation organized by repository
- LLM-friendly context and constraints

---

## What is worldLoom?

**worldLoom** is a narrative-first, deterministic interactive fiction system comprising:

- **worldLoom-engine** - A structured storytelling engine
- **worldLoom-studio** - A creator Studio for authoring valid content
- **worldLoom-content** - A publishing pipeline for multiple media formats
- **worldLoom-ai** - A foundation for AI-assisted storytelling

### Core Design Pillars (Non-Negotiable)

1. **Determinism** - Same inputs → same outcomes
2. **Spec-First Architecture** - All behavior derives from schemas
3. **Separation of Concerns** - Spec ≠ Engine ≠ Studio ≠ Content ≠ AI
4. **Validation-First** - Invalid content never executes
5. **Multi-Market Design** - Same content projects to multiple delivery contexts

---

## Repository Structure

```
worldLoom-spec-main/
├── WORLDLOOM_SPECIFICATION_INDEX.md  ← START HERE
├── worldloom-engine-spec/            # Engine runtime specifications
├── worldloom-studio-spec/            # Content authoring tool specifications
├── worldloom-content-spec/           # Content and presentation specifications
├── worldloom-ai-spec/                # AI integration specifications
└── actioned/                         # Previously processed files
```

---

## Quick Start Guides

### For Engine Developers
1. Read [Core Vision and Principles](worldloom-engine-spec/core-systems/01_Core_Vision_and_Principles.md)
2. Study [Runtime Execution Flow](worldloom-engine-spec/runtime/runtime_execution_flow.md) - **binding contract**
3. Reference [Schema Examples](worldloom-engine-spec/schemas/examples.md) for JSON structures
4. Review [Implementation Notes](worldloom-engine-spec/runtime/implementation_notes.md)

### For Studio Developers
1. Read [Studio AI Specification](worldloom-studio-spec/ai-assistant/studio_ai_specification.md)
2. Understand [Age Profiles and Content Gating](worldloom-studio-spec/safety-and-content/age_profiles_and_content_gating.md)
3. Review [Absolute Prohibitions](worldloom-studio-spec/safety-and-content/absolute_prohibitions_and_age_locking.md)

### For Content Creators
1. Review [Multi-Market Design](worldloom-content-spec/presentation-profiles/multi_market_design_and_presentation.md)
2. Understand [Assets and Voice](worldloom-content-spec/media-and-assets/08_Assets_and_Voice.md)
3. Explore presentation profile options

### For AI Integration
1. Read [Studio AI Integration](worldloom-ai-spec/studio_ai_integration.md)
2. Understand AI boundaries and constraints
3. Review safety guardrails

---

## Primary Specification Areas

### [worldloom-engine-spec/](worldloom-engine-spec/)
Core runtime engine implementation specifications
- Core systems and architecture
- Canonical schemas and types
- World and narrative systems
- Rules and mechanics
- Runtime execution and persistence

### [worldloom-studio-spec/](worldloom-studio-spec/)
Content authoring and creation tool specifications
- AI authoring assistant
- Prose conversion pipeline
- Safety and content gating
- Age profile system

### [worldloom-content-spec/](worldloom-content-spec/)
Content bundles and presentation specifications
- Multi-market presentation profiles
- Media and asset management
- Audio and voice systems

### [worldloom-ai-spec/](worldloom-ai-spec/)
AI integration and generation specifications
- Studio AI integration
- Future AI DM capabilities
- Safety guardrails

---

## Core Principles

1. **Narrative is primary** - Narrative is the first-class artifact; rules and systems interpret it
2. **Schema-driven** - All content is defined by schemas and fully serializable
3. **Offline-capable** - Engine works completely offline with bundled content
4. **Pluggable rules** - Rule systems are modular and swappable
5. **Lore-grounded** - Lore provides non-executable world knowledge that informs narrative
6. **Safety by construction** - Age profiles and prohibitions are structural, not moderation
7. **Multi-market flexibility** - Same content supports multiple presentation formats

---

## Related Repositories

- **worldLoom-engine** - TypeScript/JavaScript runtime implementation
- **worldLoom-studio** - Content authoring and editing tools
- **worldLoom-content** - Example content bundles and presentation profiles
- **worldLoom-ai** - AI integration and generation tools

---

## For LLMs and AI Agents

This repository is specifically organized for LLM consumption. Key documents:

- **[WORLDLOOM_SPECIFICATION_INDEX.md](WORLDLOOM_SPECIFICATION_INDEX.md)** - Complete navigation and reference
- **[actioned/Archive 2/worldloom_project_context_primer.md](actioned/Archive 2/worldloom_project_context_primer.md)** - Rapid context primer

### Key Constraints
1. Respect determinism - No runtime improvisation
2. Respect schema-first validation - All content must validate
3. Respect age locking & safety - Structural, not optional
4. Avoid runtime AI improvisation - AI assists authoring, not execution
5. Preserve multi-market flexibility - Content ≠ presentation

---

## Versioning

Current version: **v1.3**

### Specification Rules
- Files in this repository define the authoritative system behavior
- If there is a conflict between code and specification, the specification wins
- Any changes require explicit version bumps and documentation
- Specifications follow semantic versioning

---

## Contributing

This specification is the canonical definition of worldLoom. Changes should:
- Respect core design pillars
- Include clear rationale
- Consider version implications
- Maintain consistency across subsystems

---

## License

[License information to be added]

---

**For complete documentation, see [WORLDLOOM_SPECIFICATION_INDEX.md](WORLDLOOM_SPECIFICATION_INDEX.md)**
