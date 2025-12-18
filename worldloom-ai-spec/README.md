# worldLoom-ai Specification

This directory contains all specifications relevant to the **worldLoom-ai** repository - AI integration, generation tools, and future AI DM functionality.

## Directory Structure

### [studio_ai_integration.md](studio_ai_integration.md)
Complete specification for Studio AI integration
- Studio AI role and boundaries
- Authoring assistance capabilities
- Prose conversion with AI
- Spec enforcement and validation
- Content safety guardrails

## Key Principles

1. **Bounded AI role** - AI assists authoring, does not improvise at runtime
2. **Spec-driven generation** - All AI output must validate against schemas
3. **Human-in-the-loop** - AI produces reviewable drafts, not final content
4. **Safety by construction** - AI respects age profiles and absolute prohibitions
5. **Training data continuity** - Studio AI prepares clean data for future AI DM

## Current Scope (Phase 1)

Studio AI capabilities:
- Draft scenes, lore entries, NPCs, and factions
- Refactor prose into structured narrative
- Suggest transitions and actions
- Enforce spec compliance
- Respect age profiles and safety constraints

## Future Scope (Phase 3)

AI DM capabilities (planned):
- Generate within structured content
- Consume clean training data from Studio
- Maintain determinism and spec compliance
- Never need to guess formats

## Studio AI vs Future AI DM

| Aspect | Studio AI | Future AI DM |
|--------|-----------|--------------|
| **Purpose** | Authoring assistant | Runtime generation |
| **Timing** | Content creation time | Player experience time |
| **Output** | Draft content for review | Real-time narrative |
| **Validation** | Always required | Always required |
| **Human review** | Required before publishing | Runs within validated structure |

## Related Repositories

- **worldLoom-engine** - Engine runtime implementation
- **worldLoom-studio** - Content authoring tools
- **worldLoom-content** - Example content bundles
- **worldLoom-ai** - AI integration and generation tools (this spec)
