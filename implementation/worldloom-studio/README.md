# worldLoom-studio Implementation Guide

**Phase:** 2 (Authoring Tools)
**Priority:** HIGH
**Estimated Duration:** 8-10 weeks (6 weeks with LLM assistance)

---

## Overview

The worldLoom-studio is a web-based authoring environment for creating StoryBundles. It includes world editing, scene authoring, AI assistance, prose conversion, and safety enforcement.

**Repository:** worldloom-studio
**Tech Stack:** TypeScript (ESM), Node.js 22, React, Jest, Playwright
**Dependencies:** worldloom-engine (for validation and preview)

---

## What This Repository Does

The studio is a **web-based authoring tool** that:
- Provides visual world and scene editors
- Assists authors with AI-powered content generation
- Converts existing prose into structured narratives
- Enforces age profiles and safety constraints
- Validates all authored content
- Previews stories using the engine
- Exports valid StoryBundles

**This is NOT:**
- A runtime engine (that's worldloom-engine)
- A player application (that comes later)
- A content repository (that's worldloom-content)

---

## Implementation Order

### Phase 2.1: Project Setup (Week 1)
**Tasks 00-02:** Initialize full-stack project, set up React frontend

### Phase 2.2: Core Data Layer (Week 2)
**Tasks 03-05:** Project management, bundle editor, validation integration

### Phase 2.3: World Editor (Week 3-4)
**Tasks 06-09:** Location editor, character editor, item/faction editors

### Phase 2.4: Scene Editor (Week 4-5)
**Tasks 10-13:** Scene authoring, action editor, condition/effect builders

### Phase 2.5: Safety & Validation (Week 5-6)
**Tasks 14-16:** Age profile system, content gating, validation UI

### Phase 2.6: AI Integration (Week 6-7)
**Tasks 17-20:** AI assistant API, content generation, safety constraints

### Phase 2.7: Prose Conversion (Week 7-8)
**Tasks 21-23:** Prose import, analysis, structured conversion

### Phase 2.8: Preview & Export (Week 8-9)
**Tasks 24-26:** Engine integration, preview mode, export functionality

### Phase 2.9: Testing & Polish (Week 9-10)
**Tasks 27-30:** E2E tests, documentation, UI polish

---

## Task List

All tasks are in the [tasks/](tasks/) directory.

### Foundation (Week 1)
- [ ] **Task 00:** Initialize Full-Stack Project
- [ ] **Task 01:** Set Up React Frontend
- [ ] **Task 02:** Testing Infrastructure (Jest + Playwright)

### Core Data (Week 2)
- [ ] **Task 03:** Project Management System
- [ ] **Task 04:** Bundle Editor Core
- [ ] **Task 05:** Engine Validation Integration

### World Editor (Week 3-4)
- [ ] **Task 06:** Location Editor
- [ ] **Task 07:** Character Editor
- [ ] **Task 08:** Item Editor
- [ ] **Task 09:** Faction Editor

### Scene Editor (Week 4-5)
- [ ] **Task 10:** Scene List & Navigation
- [ ] **Task 11:** Scene Content Editor
- [ ] **Task 12:** Action Builder
- [ ] **Task 13:** Condition/Effect Visual Builder

### Safety (Week 5-6)
- [ ] **Task 14:** Age Profile Selection UI
- [ ] **Task 15:** Content Feature Gating
- [ ] **Task 16:** Validation & Error Display

### AI Integration (Week 6-7)
- [ ] **Task 17:** AI Assistant API Client
- [ ] **Task 18:** Content Generation UI
- [ ] **Task 19:** AI Safety Constraints
- [ ] **Task 20:** Suggestion Review Workflow

### Prose Conversion (Week 7-8)
- [ ] **Task 21:** Prose Import Interface
- [ ] **Task 22:** Structural Analysis Display
- [ ] **Task 23:** Conversion Editor

### Preview & Export (Week 8-9)
- [ ] **Task 24:** Engine Preview Integration
- [ ] **Task 25:** Preview Player UI
- [ ] **Task 26:** Bundle Export

### Polish (Week 9-10)
- [ ] **Task 27:** End-to-End Tests (Playwright)
- [ ] **Task 28:** User Documentation
- [ ] **Task 29:** Error Handling Polish
- [ ] **Task 30:** Performance Optimization

---

## Success Criteria

### Milestone 1: Foundation (After Task 05)
- [ ] Full-stack project initialized
- [ ] React frontend running
- [ ] Can create and manage projects
- [ ] Engine validation working
- [ ] Tests passing

### Milestone 2: World Editor (After Task 09)
- [ ] Can create locations
- [ ] Can create characters
- [ ] Can create items and factions
- [ ] All world entities validate
- [ ] UI is intuitive

### Milestone 3: Scene Editor (After Task 13)
- [ ] Can create scenes
- [ ] Can add narrative content
- [ ] Can build actions with conditions/effects
- [ ] Visual condition builder working
- [ ] Scene graph visible

### Milestone 4: Safety (After Task 16)
- [ ] Age profile selected at project creation
- [ ] Features gated appropriately
- [ ] Validation errors shown clearly
- [ ] Cannot create prohibited content

### Milestone 5: AI Integration (After Task 20)
- [ ] AI can generate scenes
- [ ] AI can generate lore
- [ ] Safety constraints enforced
- [ ] Suggestions reviewable before accepting

### Milestone 6: Complete (After Task 30)
- [ ] Full authoring workflow functional
- [ ] Prose conversion working
- [ ] Preview mode operational
- [ ] Can export valid bundles
- [ ] E2E tests passing
- [ ] Documentation complete
- [ ] Ready for content creation

---

## Technical Architecture

### Module Structure

```
worldloom-studio/
├── packages/
│   ├── frontend/           # React application
│   │   ├── src/
│   │   │   ├── components/
│   │   │   │   ├── editors/
│   │   │   │   │   ├── WorldEditor/
│   │   │   │   │   ├── SceneEditor/
│   │   │   │   │   └── PreviewPlayer/
│   │   │   │   ├── ui/
│   │   │   │   └── layout/
│   │   │   ├── hooks/
│   │   │   ├── store/      # State management (Zustand/Redux)
│   │   │   ├── api/        # API client
│   │   │   └── utils/
│   │   ├── tests/
│   │   └── playwright/     # E2E tests
│   │
│   └── backend/            # Node.js API server
│       ├── src/
│       │   ├── routes/
│       │   ├── services/
│       │   │   ├── project-manager.ts
│       │   │   ├── validator.ts
│       │   │   ├── ai-client.ts
│       │   │   └── prose-converter.ts
│       │   ├── middleware/
│       │   └── index.ts
│       └── tests/
│
├── shared/                 # Shared types and utilities
│   └── src/
│       ├── types/
│       └── validators/
│
├── package.json            # Workspace root
├── tsconfig.json
└── README.md
```

### Key Technologies

**Frontend:**
- React 18 with TypeScript
- Vite for build tooling
- Zustand or Redux for state management
- React Query for data fetching
- Tailwind CSS for styling
- Monaco Editor for code/prose editing

**Backend:**
- Express.js or Fastify
- worldloom-engine integration
- File system for project storage
- AI SDK integration (Anthropic/OpenAI)

**Testing:**
- Jest for unit tests
- Playwright for E2E tests
- React Testing Library

---

## Dependencies

### Runtime Dependencies
```json
{
  "dependencies": {
    "worldloom-engine": "^1.0.0-alpha",
    "react": "^18.2.0",
    "react-dom": "^18.2.0",
    "express": "^4.18.0",
    "@anthropic-ai/sdk": "^0.10.0"
  }
}
```

### Dev Dependencies
```json
{
  "devDependencies": {
    "typescript": "^5.3.0",
    "vite": "^5.0.0",
    "@vitejs/plugin-react": "^4.2.0",
    "jest": "^29.7.0",
    "@playwright/test": "^1.40.0",
    "tailwindcss": "^3.4.0"
  }
}
```

---

## API Design

### Backend API Endpoints

```typescript
// Project Management
POST   /api/projects                 // Create project
GET    /api/projects                 // List projects
GET    /api/projects/:id             // Get project
PUT    /api/projects/:id             // Update project
DELETE /api/projects/:id             // Delete project

// Bundle Editing
GET    /api/projects/:id/bundle      // Get bundle
PUT    /api/projects/:id/bundle      // Update bundle
POST   /api/projects/:id/validate    // Validate bundle

// World Entities
POST   /api/projects/:id/locations   // Create location
PUT    /api/projects/:id/locations/:locId
// ... similar for characters, items, factions

// Scenes
POST   /api/projects/:id/scenes      // Create scene
PUT    /api/projects/:id/scenes/:sceneId
GET    /api/projects/:id/scene-graph // Get scene graph

// AI Assistance
POST   /api/ai/generate-scene        // Generate scene
POST   /api/ai/generate-lore         // Generate lore
POST   /api/ai/convert-prose         // Convert prose

// Preview
POST   /api/preview/start            // Start preview session
POST   /api/preview/:sessionId/action
GET    /api/preview/:sessionId/state

// Export
POST   /api/projects/:id/export      // Export bundle
```

---

## State Management

### Frontend State Structure

```typescript
interface StudioState {
  // Current project
  currentProject: Project | null;

  // Bundle being edited
  bundle: StoryBundle;

  // UI state
  ui: {
    activeEditor: 'world' | 'scenes' | 'preview';
    selectedLocation: string | null;
    selectedScene: string | null;
    validationErrors: ValidationError[];
  };

  // AI state
  ai: {
    generating: boolean;
    suggestions: AISuggestion[];
  };
}
```

---

## Testing Strategy

### Unit Tests (Jest)
- All backend services
- Frontend utility functions
- State management logic
- Validation functions

### Component Tests (React Testing Library)
- All React components
- User interactions
- State updates
- Error handling

### E2E Tests (Playwright)
- Complete authoring workflow
- Create project → author content → export bundle
- AI assistance flow
- Prose conversion flow
- Preview functionality
- Error scenarios

---

## Common Pitfalls

### ❌ Don't Do This
1. **Skip engine validation** - Always validate through engine
2. **Allow invalid state** - Validate before saving
3. **Bypass age profiles** - Safety is structural
4. **Trust AI output blindly** - Always validate AI-generated content
5. **Store raw prose** - Convert to structured narrative

### ✅ Do This
1. **Validate continuously** - Show errors immediately
2. **Immutable state** - Use proper state management patterns
3. **Enforce age profiles** - Gate UI based on profile
4. **Review AI output** - User must approve all AI suggestions
5. **Structured data** - Everything maps to schema

---

## LLM Prompts

All prompts are in the [prompts/](prompts/) directory, organized by task number.

Each prompt includes:
- Full context and dependencies
- Specific UI/UX requirements
- Integration points
- Testing requirements
- Success criteria

---

## Getting Started

### Step 1: Complete Engine First
Studio depends on worldloom-engine. Ensure engine is complete:
- [ ] Engine v1.0.0-alpha published or available locally
- [ ] All engine tests passing
- [ ] Engine documentation complete

### Step 2: Read Specifications
- [Studio AI Specification](../../../worldloom-studio-spec/ai-assistant/studio_ai_specification.md)
- [Age Profiles](../../../worldloom-studio-spec/safety-and-content/age_profiles_and_content_gating.md)
- [Absolute Prohibitions](../../../worldloom-studio-spec/safety-and-content/absolute_prohibitions_and_age_locking.md)

### Step 3: Initialize Project
Execute [Task 00: Initialize Full-Stack Project](tasks/task-00-initialize-project.md)

### Step 4: Follow Tasks Sequentially
Don't skip ahead. Each task builds on previous work.

---

## Timeline

### Optimistic (Full-time, experienced)
- Week 1: Tasks 00-05 (Setup + Core Data)
- Week 2-3: Tasks 06-09 (World Editor)
- Week 4: Tasks 10-13 (Scene Editor)
- Week 5: Tasks 14-16 (Safety)
- Week 6: Tasks 17-20 (AI)
- Week 7: Tasks 21-23 (Prose)
- Week 8: Tasks 24-26 (Preview/Export)
- Week 9-10: Tasks 27-30 (Polish)

### With LLM (Using prompts)
- Week 1: Tasks 00-05
- Week 2: Tasks 06-13 (Editors)
- Week 3: Tasks 14-16 (Safety)
- Week 4: Tasks 17-23 (AI + Prose)
- Week 5: Tasks 24-26 (Preview)
- Week 6: Tasks 27-30 (Polish)

---

## Next Steps After Studio Complete

Once Studio is complete:

1. **Tag a release** - v1.0.0-alpha
2. **Create tutorial content** - Using the Studio
3. **Start Phase 3** - [worldloom-ai](../worldloom-ai/README.md) (if not already integrated)
4. **Start Phase 4** - [worldloom-content](../worldloom-content/README.md)

---

## Support

- **Specification Questions:** See [worldloom-studio-spec](../../../worldloom-studio-spec/)
- **Implementation Questions:** Check task details in [tasks/](tasks/)
- **LLM Assistance:** Use prompts in [prompts/](prompts/)
- **Engine Integration:** See [worldloom-engine docs](../../worldloom-engine/)

---

**Ready to start? Begin with [Task 00: Initialize Full-Stack Project](tasks/task-00-initialize-project.md)**
