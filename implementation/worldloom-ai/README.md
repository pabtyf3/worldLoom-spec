# worldLoom-ai Implementation Guide

**Phase:** 3 (AI Integration)
**Priority:** HIGH
**Estimated Duration:** 4-6 weeks (3 weeks with LLM assistance)

---

## Overview

The worldLoom-ai repository contains AI integration services for Studio assistance and future AI DM capabilities. In Phase 1, this is primarily the Studio AI assistant API.

**Repository:** worldloom-ai
**Tech Stack:** TypeScript (ESM), Node.js 22, Anthropic SDK, Jest
**Dependencies:** worldloom-engine (schemas, validation)

**Note:** Much of this work is integrated into worldloom-studio. This repository provides:
- Reusable AI service libraries
- Prompt templates and management
- Safety constraint enforcement
- Future AI DM foundation

---

## What This Repository Does

The AI integration provides:
- **Studio AI Assistant API** - Content generation services
- **Prose Conversion Services** - Structural analysis and conversion
- **Safety Guardrails** - Age-aware content filtering
- **Prompt Management** - Reusable prompt templates
- **Future AI DM Foundation** - Extensible architecture for Phase 3

**This is NOT:**
- A standalone application (integrates with Studio)
- A runtime DM (that's Phase 3)
- A content repository

---

## Implementation Order

### Phase 3.1: Foundation (Week 1)
**Tasks 00-02:** Project setup, AI SDK integration, prompt system

### Phase 3.2: Content Generation (Week 2)
**Tasks 03-06:** Scene generation, lore generation, character generation

### Phase 3.3: Prose Conversion (Week 3)
**Tasks 07-09:** Prose analysis, entity extraction, structure mapping

### Phase 3.4: Safety & Constraints (Week 4)
**Tasks 10-12:** Age profile awareness, content filtering, validation

### Phase 3.5: Testing & Documentation (Week 5-6)
**Tasks 13-15:** Integration tests, Studio integration, documentation

---

## Task List

### Foundation (Week 1)
- [ ] **Task 00:** Initialize AI Services Project
- [ ] **Task 01:** AI SDK Integration (Anthropic/OpenAI)
- [ ] **Task 02:** Prompt Management System

### Content Generation (Week 2)
- [ ] **Task 03:** Scene Generation Service
- [ ] **Task 04:** Lore Generation Service
- [ ] **Task 05:** Character/NPC Generation
- [ ] **Task 06:** Action Suggestion Service

### Prose Conversion (Week 3)
- [ ] **Task 07:** Prose Analysis Service
- [ ] **Task 08:** Entity Extraction
- [ ] **Task 09:** Structure Mapping

### Safety (Week 4)
- [ ] **Task 10:** Age Profile Context Builder
- [ ] **Task 11:** Content Safety Filter
- [ ] **Task 12:** Output Validation

### Integration (Week 5-6)
- [ ] **Task 13:** Integration Tests
- [ ] **Task 14:** Studio Integration Examples
- [ ] **Task 15:** Documentation & API Guide

---

## Success Criteria

### Milestone 1: Foundation (After Task 02)
- [ ] Project initialized
- [ ] AI SDK working
- [ ] Prompt system functional
- [ ] Tests passing

### Milestone 2: Generation (After Task 06)
- [ ] Can generate valid scenes
- [ ] Can generate lore entries
- [ ] Can generate characters
- [ ] All output validates against schemas

### Milestone 3: Prose (After Task 09)
- [ ] Can analyze prose structure
- [ ] Can extract entities
- [ ] Can map to StoryBundle structure

### Milestone 4: Safety (After Task 12)
- [ ] Age profiles enforced
- [ ] Prohibited content filtered
- [ ] Output validated
- [ ] Safety audit trail

### Milestone 5: Complete (After Task 15)
- [ ] All services operational
- [ ] Studio integration working
- [ ] Tests passing
- [ ] Documentation complete
- [ ] Ready for content creation

---

## Technical Architecture

```
worldloom-ai/
├── src/
│   ├── services/
│   │   ├── scene-generator.ts
│   │   ├── lore-generator.ts
│   │   ├── prose-analyzer.ts
│   │   └── safety-filter.ts
│   ├── prompts/
│   │   ├── templates/
│   │   ├── prompt-builder.ts
│   │   └── context-manager.ts
│   ├── validation/
│   │   ├── output-validator.ts
│   │   └── safety-validator.ts
│   ├── types/
│   └── index.ts
├── tests/
├── examples/
└── README.md
```

---

## API Design

```typescript
// Scene Generation
async function generateScene(params: {
  worldContext: WorldDefinition;
  ageProfile: AgeProfile;
  scenePrompt: string;
}): Promise<Scene>;

// Prose Analysis
async function analyzeProse(prose: string): Promise<ProseAnalysis>;

// Safety Validation
function validateContent(
  content: any,
  ageProfile: AgeProfile
): ValidationResult;
```

---

## Dependencies

```json
{
  "dependencies": {
    "worldloom-engine": "^1.0.0-alpha",
    "@anthropic-ai/sdk": "^0.10.0"
  },
  "devDependencies": {
    "typescript": "^5.3.0",
    "jest": "^29.7.0"
  }
}
```

---

## References

- [Studio AI Specification](../../../worldloom-studio-spec/ai-assistant/studio_ai_specification.md)
- [AI Integration](../../../worldloom-ai-spec/studio_ai_integration.md)
- [Safety Constraints](../../../worldloom-studio-spec/safety-and-content/)

---

## Timeline

### With LLM Assistance
- Week 1: Foundation
- Week 2: Generation Services
- Week 3: Prose Services + Safety
- Week 4: Testing + Documentation

**Total: ~3-4 weeks**

---

## Next Steps

1. **Complete Engine** - Required for schemas
2. **Complete Studio Core** - Integration target
3. **Begin Task 00** - Initialize AI services project

For detailed tasks and prompts, see [tasks/](tasks/) and [prompts/](prompts/).
