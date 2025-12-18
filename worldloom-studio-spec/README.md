# worldLoom-studio Specification

This directory contains all specifications relevant to the **worldLoom-studio** repository - the content authoring and creation tools.

## Directory Structure

### [ai-assistant/](ai-assistant/)
Studio AI capabilities, boundaries, and integration
- AI authoring assistant specification
- Bounded role and constraints
- Spec enforcement capabilities
- Draft generation and review workflow

### [prose-conversion/](prose-conversion/)
Importing and converting existing prose into worldLoom format
- Prose conversion pipeline
- Structural analysis and extraction
- World and narrative mapping
- Spec-constrained conversion

### [safety-and-content/](safety-and-content/)
Age profiles, content gating, and safety systems
- Age profile system and enforcement
- Content feature gating by age range
- Absolute prohibitions (structural safety)
- Age profile locking and content auditing

## Key Principles

1. **Authoring assistant, not runtime DM** - Studio AI helps create content, doesn't execute stories
2. **Spec enforcement** - Studio validates and constrains all authored content
3. **Safety by construction** - Age profiles and prohibitions are structural, not moderation
4. **Educational tool** - Studio teaches narrative structure and interactive storytelling
5. **Multi-market support** - Single authoring environment for multiple output formats

## Studio Capabilities

The Studio is:
- A world editor
- A narrative structuring tool
- A prose converter
- A spec tutor
- An AI-assisted authoring environment

The Studio is NOT:
- A runtime engine
- A game engine
- A freeform AI playground

## Related Repositories

- **worldLoom-engine** - Engine runtime implementation
- **worldLoom-studio** - Content authoring tools (this spec)
- **worldLoom-content** - Example content bundles
- **worldLoom-ai** - AI integration and generation tools
