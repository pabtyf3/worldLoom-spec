# worldLoom Implementation Plan

**Version:** 1.3
**Last Updated:** December 2024

This directory contains the complete implementation plan for building the worldLoom system from scratch.

---

## Overview

The worldLoom system comprises **five** interconnected repositories that must be implemented in a specific order due to dependencies. This guide provides detailed tasks, LLM prompts, and success criteria for each component.

## Implementation Order

### Phase 1: Foundation (worldLoom-engine)
**Duration Estimate:** 6-8 weeks
**Priority:** CRITICAL - Everything depends on this

The engine is the runtime foundation. It must be implemented first as both Studio, Frontend, and Content creation depend on having a working engine.

**Includes:** CLI tool for terminal-based testing

**Dependencies:** None
**Dependents:** Studio, Frontend, AI, Content

### Phase 2: Frontend Application (worldLoom-frontend)
**Duration Estimate:** 8-10 weeks (5-7 weeks with LLM)
**Priority:** HIGH - Required for both playing and authoring

The frontend is a **unified React monorepo** providing both:
- **Player Application** - Story reading and playing (mobile-first)
- **Creator Application** - World editing and authoring (desktop-first)

**Includes:** PWA support, desktop packaging (Tauri), mobile preparation

**Dependencies:** Engine (runtime execution, validation)
**Dependents:** Content (both playing and authoring)

**Note:** This unified approach combines the original separate "Player" and "Studio" applications into a single monorepo with shared infrastructure. See [worldloom-frontend-spec/IMPLEMENTATION_APPROACH.md](../worldloom-frontend-spec/IMPLEMENTATION_APPROACH.md) for details.

### Phase 3: AI Integration (worldLoom-ai)
**Duration Estimate:** 4-6 weeks
**Priority:** HIGH - Core to Creator experience

AI capabilities are integrated into Frontend (Creator surface) as an authoring assistant. This phase can partially overlap with Frontend development.

**Dependencies:** Engine (schemas, validation), Frontend Creator (UI integration)
**Dependents:** Content (AI-assisted authoring)

### Phase 4: Content & Examples (worldLoom-content)
**Duration Estimate:** 4-6 weeks
**Priority:** MEDIUM - Demonstrates capabilities

Example content bundles and presentation profiles demonstrate the system's multi-market capabilities.

**Dependencies:** Engine (runtime), Frontend Creator (authoring), AI (optional assistance)
**Dependents:** None (this is the top of the stack)

---

## Repository Details

### [worldloom-engine/](worldloom-engine/)
**Core runtime engine (TypeScript/Node 22)**

Foundation for all other components. Implements:
- Canonical schemas and type system
- Deterministic runtime loop
- Scene execution and state management
- Rule module system
- Save/load functionality
- Validation pipeline

**Tech Stack:**
- TypeScript (ESM)
- Node.js 22
- Jest (unit tests)
- No frontend (headless engine)

**Success Criteria:**
- All schemas implemented and validated
- Runtime executes sample StoryBundles deterministically
- Complete test coverage (>80%)
- Documentation complete
- Example rule module implemented

### [worldloom-studio/](worldloom-studio/)
**Content authoring and creation tools**

Web-based authoring environment. Implements:
- World editor
- Scene authoring
- Prose conversion pipeline
- AI authoring assistant
- Age profile and safety enforcement
- Validation and preview

**Tech Stack:**
- TypeScript (ESM)
- Node.js 22
- React (frontend)
- Jest (unit tests)
- Playwright (E2E tests)
- Depends on worldloom-engine

**Success Criteria:**
- Complete authoring workflow functional
- AI assistant operational with safety constraints
- Prose converter working
- Age profile enforcement verified
- Can author and export valid StoryBundles

### [worldloom-frontend/](worldloom-frontend/)
**Player application (Web/Desktop/Mobile)**

Progressive web app for playing StoryBundles. Implements:
- Story playback interface
- Scene display and transitions
- Action/choice handling
- Save/load from local storage
- Audio and asset support
- Multiple presentation profiles
- PWA offline support
- Desktop packaging (Tauri)
- Mobile-ready responsive design

**Tech Stack:**
- TypeScript (ESM)
- React + Vite
- Tauri (desktop packaging)
- Vitest (unit tests)
- Playwright (E2E tests)
- Depends on worldloom-engine

**Success Criteria:**
- Can load and play StoryBundles
- Complete playthrough functional
- Save/load persists correctly
- Audio and assets work
- PWA installable and works offline
- Desktop builds for Windows/macOS/Linux
- Mobile-optimized UI

### [worldloom-ai/](worldloom-ai/)
**AI integration and generation tools**

AI capabilities for Studio integration. Implements:
- Studio AI assistant API
- Prose analysis and conversion
- Content generation within constraints
- Safety guardrails
- Spec enforcement

**Tech Stack:**
- TypeScript (ESM)
- Node.js 22
- Anthropic SDK / OpenAI SDK
- Jest (unit tests)
- Depends on worldloom-engine (schemas)

**Success Criteria:**
- AI generates valid content within schemas
- Safety constraints enforced
- Age profile awareness functional
- Prose conversion pipeline operational
- Studio integration working

### [worldloom-content/](worldloom-content/)
**Example content bundles and assets**

Demonstration content and presentation profiles. Implements:
- Example StoryBundles
- LoreBundles
- Presentation profiles
- Asset management examples
- Multi-market demonstrations

**Tech Stack:**
- JSON content bundles
- TypeScript validation scripts
- Asset files (audio, images)
- Depends on worldloom-engine (validation)

**Success Criteria:**
- Multiple complete StoryBundles
- Demonstrates all engine features
- Multiple presentation profiles shown
- All content validates
- Documentation of authoring patterns

---

## Global Technical Requirements

### All Repositories

**Node.js Environment:**
- Node.js 22 (LTS)
- ESM modules (not CommonJS)
- TypeScript 5.x
- Strict mode enabled

**Testing:**
- Jest for unit tests (Engine, Studio backend, AI)
- Vitest for frontend unit tests
- Test coverage >80%
- Integration tests for cross-component features
- Playwright for E2E tests (Studio and Frontend)

**Code Quality:**
- ESLint with strict rules
- Prettier for formatting
- Husky pre-commit hooks
- TypeScript strict mode

**Documentation:**
- README.md in root
- API documentation
- Architecture decision records (ADRs)
- Inline code documentation

**CI/CD:**
- GitHub Actions for CI
- Automated testing on PR
- Version tagging
- Automated releases

---

## Dependency Graph

```
worldloom-engine (Phase 1)
    ↓
    ├─→ worldloom-studio (Phase 2a) ──→ worldloom-ai (Phase 3)
    │                                           ↓
    └─→ worldloom-frontend (Phase 2b)          ↓
                    ↓                           ↓
                    └───────────────────────────→ worldloom-content (Phase 4)
```

**Note:** Studio and Frontend can be developed in parallel after Engine is complete.

**Critical Paths:**

**Path 1 (Authoring):**
1. Engine core (types, validation, runtime)
2. Engine rule system + CLI tool
3. Studio core (world editor, scene authoring)
4. AI assistant integration
5. Prose conversion
6. Content creation

**Path 2 (Playing):**
1. Engine core (types, validation, runtime)
2. Engine rule system + CLI tool
3. Frontend core (player UI, state management)
4. Frontend enhanced features (save/load, audio, PWA)
5. Desktop packaging
6. Content testing

---

## Implementation Approach

### For Each Repository

1. **Initialize** - Set up TypeScript project with Node 22, ESM, Jest
2. **Foundation** - Implement core types and schemas
3. **Core Logic** - Build main functionality
4. **Testing** - Write comprehensive tests
5. **Integration** - Connect with dependencies
6. **Documentation** - Complete all documentation
7. **Polish** - Refine, optimize, and finalize

### For Each Task

Each task includes:
- **Detailed steps** - Actionable implementation steps
- **LLM prompts** - Ready-to-use prompts for AI assistance
- **Success criteria** - Clear definition of done
- **Testing requirements** - What tests are needed
- **Dependencies** - What must be completed first

---

## Using This Guide

### For Human Developers

1. Start with [worldloom-engine/README.md](worldloom-engine/README.md)
2. Follow tasks in order within each phase
3. Use the prompts as guidance or copy/paste to LLMs
4. Verify success criteria before moving forward
5. Write tests as you go (TDD recommended)

### For LLM Implementation

1. Read the repository README for context
2. Execute tasks in numerical order
3. Use the provided prompts from the `/prompts` directory
4. Each prompt includes full context and constraints
5. Verify output against success criteria
6. Move to next task only when current task passes

### For Project Managers

Each repository README includes:
- Milestone breakdown
- Time estimates
- Resource requirements
- Risk assessment
- Success metrics

---

## Expected Timeline

### Optimistic (Full-time dedicated team)
- **Phase 1 (Engine):** 6 weeks
- **Phase 2 (Studio):** 8 weeks
- **Phase 3 (AI):** 4 weeks
- **Phase 4 (Content):** 4 weeks
- **Total:** ~22 weeks (5.5 months)

### Realistic (Part-time or small team)
- **Phase 1 (Engine):** 8 weeks
- **Phase 2 (Studio):** 10 weeks
- **Phase 3 (AI):** 6 weeks
- **Phase 4 (Content):** 6 weeks
- **Total:** ~30 weeks (7.5 months)

### With LLM Assistance
- **Phase 1 (Engine):** 4 weeks
- **Phase 2 (Studio):** 6 weeks
- **Phase 3 (AI):** 3 weeks
- **Phase 4 (Content):** 3 weeks
- **Total:** ~16 weeks (4 months)

---

## Risk Mitigation

### High-Risk Areas

1. **Engine Runtime Complexity**
   - Mitigation: Thorough testing, reference implementation
   - Fallback: Simplified MVP first, then expand

2. **Studio AI Integration**
   - Mitigation: Well-defined API boundaries, safety-first design
   - Fallback: Manual authoring first, AI second

3. **Safety Enforcement**
   - Mitigation: Structural constraints, comprehensive testing
   - Fallback: Conservative age profiles, manual review

4. **Multi-Market Presentation**
   - Mitigation: Profile abstraction, defer advanced profiles
   - Fallback: Start with interactive-game profile only

---

## Success Metrics

### Phase 1 (Engine) Complete When:
- [ ] Can load and validate StoryBundles
- [ ] Runtime executes scenes deterministically
- [ ] Rule modules pluggable and functional
- [ ] Save/load works correctly
- [ ] Test coverage >80%
- [ ] Sample content runs successfully

### Phase 2 (Studio) Complete When:
- [ ] Can create complete StoryBundle from scratch
- [ ] World editor functional
- [ ] Scene authoring with validation
- [ ] Age profiles enforced
- [ ] Can export valid bundles
- [ ] Preview functionality works

### Phase 3 (AI) Complete When:
- [ ] AI generates valid scenes
- [ ] Prose conversion functional
- [ ] Safety constraints enforced
- [ ] Studio integration complete
- [ ] Age profile awareness verified

### Phase 4 (Content) Complete When:
- [ ] 3+ complete StoryBundles created
- [ ] Multiple presentation profiles demonstrated
- [ ] All content validates
- [ ] Multi-market capabilities shown
- [ ] Documentation complete

---

## Getting Started

1. **Read the specifications**
   - Start with [../WORLDLOOM_SPECIFICATION_INDEX.md](../WORLDLOOM_SPECIFICATION_INDEX.md)
   - Understand the vision and constraints

2. **Choose your phase**
   - Always start with Phase 1 (Engine) unless it's complete

3. **Initialize the repository**
   - Follow the repository-specific README
   - Use Task 00 for project initialization

4. **Execute tasks sequentially**
   - Don't skip tasks
   - Verify each task's success criteria
   - Write tests as you go

5. **Use LLM prompts**
   - Prompts are in `/prompts` directory
   - Each prompt includes full context
   - Paste into Claude/GPT and iterate

---

## Repository Links

- [worldloom-engine Implementation Guide](worldloom-engine/README.md) - Core runtime + CLI
- [worldloom-studio Implementation Guide](worldloom-studio/README.md) - Authoring tools
- [worldloom-frontend Implementation Guide](worldloom-frontend/README.md) - Player app (Web/Desktop/Mobile)
- [worldloom-ai Implementation Guide](worldloom-ai/README.md) - AI integration
- [worldloom-content Implementation Guide](worldloom-content/README.md) - Example content

---

## Support and Resources

### Specification Reference
- [Engine Specifications](../worldloom-engine-spec/)
- [Studio Specifications](../worldloom-studio-spec/)
- [Content Specifications](../worldloom-content-spec/)
- [AI Specifications](../worldloom-ai-spec/)

### Archived Planning
- [Original Planning Documents](../actioned/planning/)
- [Task Definitions](../actioned/planning/tasks/)

---

**Ready to begin? Start with [worldloom-engine/README.md](worldloom-engine/README.md)**
