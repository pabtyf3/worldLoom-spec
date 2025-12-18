# worldLoom-studio Task List

Complete list of implementation tasks for the Studio authoring environment.

---

## Overview

The Studio is a full-stack web application for authoring StoryBundles. Tasks are organized into 9 phases covering setup, editors, safety, AI integration, and polish.

**Total Tasks:** 30
**Estimated Time:** 8-10 weeks (6 weeks with LLM assistance)

---

## Phase 2.1: Project Setup (Week 1)

### Task 00: Initialize Full-Stack Project
**Time:** 4-6 hours
**Creates:** Monorepo structure with frontend/backend packages

- Set up pnpm/npm workspace
- Initialize TypeScript for both frontend and backend
- Configure shared package for common types
- Set up ESLint and Prettier
- Initialize git

**Key Files:**
- `package.json` (workspace root)
- `packages/frontend/package.json`
- `packages/backend/package.json`
- `packages/shared/package.json`

### Task 01: Set Up React Frontend
**Time:** 4-6 hours
**Creates:** React application with Vite

- Initialize Vite + React + TypeScript
- Configure Tailwind CSS
- Set up React Router
- Configure state management (Zustand recommended)
- Create basic layout components

**Key Files:**
- `packages/frontend/vite.config.ts`
- `packages/frontend/src/App.tsx`
- `packages/frontend/src/store/studio-store.ts`

### Task 02: Testing Infrastructure
**Time:** 4-6 hours
**Creates:** Jest and Playwright configuration

- Configure Jest for backend + shared
- Configure Vitest for frontend
- Set up React Testing Library
- Initialize Playwright for E2E tests
- Create test utilities

**Key Files:**
- `packages/backend/jest.config.js`
- `packages/frontend/vitest.config.ts`
- `playwright.config.ts`

---

## Phase 2.2: Core Data Layer (Week 2)

### Task 03: Project Management System
**Time:** 6-8 hours
**Creates:** Backend project storage and API

- File-based project storage
- CRUD API for projects
- Project metadata management
- Integration with worldloom-engine

**Endpoints:**
- `POST /api/projects`
- `GET /api/projects`
- `GET /api/projects/:id`
- `PUT /api/projects/:id`
- `DELETE /api/projects/:id`

### Task 04: Bundle Editor Core
**Time:** 6-8 hours
**Creates:** Core bundle editing functionality

- Bundle state management
- Update handlers for all bundle properties
- Undo/redo system (optional but recommended)
- Auto-save functionality

**Components:**
- Bundle provider/context
- Update reducers
- History management

### Task 05: Engine Validation Integration
**Time:** 4-6 hours
**Creates:** Integration with worldloom-engine validator

- Import worldloom-engine
- Wrap validation functions
- Error formatting for UI
- Real-time validation triggers

**Services:**
- `validation-service.ts`
- Error display utilities

---

## Phase 2.3: World Editor (Week 3-4)

### Task 06: Location Editor
**Time:** 6-8 hours
**Creates:** UI for creating and editing locations

**Features:**
- Location list/grid view
- Create/edit/delete locations
- Form validation
- Location type selection

**Components:**
- `LocationList.tsx`
- `LocationEditor.tsx`
- `LocationForm.tsx`

### Task 07: Character Editor
**Time:** 6-8 hours
**Creates:** UI for creating and editing characters

**Features:**
- Character list
- Character details form
- Attribute editor
- Relationship editor

**Components:**
- `CharacterList.tsx`
- `CharacterEditor.tsx`
- `AttributeEditor.tsx`

### Task 08: Item Editor
**Time:** 4-6 hours
**Creates:** UI for creating and editing items

**Features:**
- Item list
- Item details form
- Item tags/categories

**Components:**
- `ItemList.tsx`
- `ItemEditor.tsx`

### Task 09: Faction Editor
**Time:** 4-6 hours
**Creates:** UI for creating and editing factions

**Features:**
- Faction list
- Faction details
- Relationship editor

**Components:**
- `FactionList.tsx`
- `FactionEditor.tsx`
- `FactionRelationships.tsx`

---

## Phase 2.4: Scene Editor (Week 4-5)

### Task 10: Scene List & Navigation
**Time:** 4-6 hours
**Creates:** Scene management UI

**Features:**
- Scene list/tree view
- Scene graph visualization
- Create/delete scenes
- Scene reordering

**Components:**
- `SceneList.tsx`
- `SceneGraph.tsx`
- `SceneNavigator.tsx`

### Task 11: Scene Content Editor
**Time:** 8-10 hours
**Creates:** Main scene editing interface

**Features:**
- Narrative text editor
- Scene metadata (location, tags, etc.)
- Exit management
- Asset references

**Components:**
- `SceneEditor.tsx`
- `NarrativeEditor.tsx`
- `ExitEditor.tsx`

### Task 12: Action Builder
**Time:** 6-8 hours
**Creates:** Visual action creation tool

**Features:**
- Action list in scene
- Action details form
- Action type selection
- Parameter editor

**Components:**
- `ActionBuilder.tsx`
- `ActionList.tsx`
- `ActionForm.tsx`

### Task 13: Condition/Effect Visual Builder
**Time:** 8-10 hours
**Creates:** Visual tools for conditions and effects

**Features:**
- Condition builder (flag, variable, compound)
- Effect builder (set flag, modify variable, etc.)
- Visual logic builder
- Expression editor

**Components:**
- `ConditionBuilder.tsx`
- `EffectBuilder.tsx`
- `LogicBuilder.tsx`

---

## Phase 2.5: Safety & Validation (Week 5-6)

### Task 14: Age Profile Selection UI
**Time:** 4-6 hours
**Creates:** Age profile selection and management

**Features:**
- Age profile selector at project creation
- Profile info/warnings
- Profile locking UI
- Downgrade warnings

**Components:**
- `AgeProfileSelector.tsx`
- `ProfileWarningModal.tsx`

**References:**
- [Age Profiles](../../../../worldloom-studio-spec/safety-and-content/age_profiles_and_content_gating.md)

### Task 15: Content Feature Gating
**Time:** 6-8 hours
**Creates:** Feature availability based on age profile

**Features:**
- Feature availability checking
- Disabled UI elements for restricted features
- Warning messages
- Profile-specific form fields

**Implementation:**
- `feature-gate.hook.ts`
- `useAgeProfile()` hook
- Feature gate HOCs

### Task 16: Validation & Error Display
**Time:** 4-6 hours
**Creates:** Comprehensive error UI

**Features:**
- Validation panel
- Error list with navigation
- Inline error indicators
- Warning vs error distinction

**Components:**
- `ValidationPanel.tsx`
- `ErrorList.tsx`
- `ErrorIndicator.tsx`

---

## Phase 2.6: AI Integration (Week 6-7)

### Task 17: AI Assistant API Client
**Time:** 6-8 hours
**Creates:** Backend AI service integration

**Features:**
- Anthropic SDK integration
- AI prompt templates
- Response parsing
- Error handling

**Services:**
- `ai-client.ts`
- `prompt-templates.ts`

**References:**
- [Studio AI Specification](../../../../worldloom-studio-spec/ai-assistant/studio_ai_specification.md)

### Task 18: Content Generation UI
**Time:** 6-8 hours
**Creates:** UI for AI-assisted content creation

**Features:**
- Generate scene button/modal
- Parameter input
- Loading states
- Suggestion display

**Components:**
- `AIAssistantPanel.tsx`
- `GenerateSceneModal.tsx`
- `SuggestionCard.tsx`

### Task 19: AI Safety Constraints
**Time:** 4-6 hours
**Creates:** Safety enforcement in AI generation

**Features:**
- Age profile in AI context
- Prohibited content filtering
- Safety warnings
- Validation of AI output

**Implementation:**
- Safety-aware prompt construction
- Output validation
- Rejection handling

### Task 20: Suggestion Review Workflow
**Time:** 4-6 hours
**Creates:** Review and approval UI

**Features:**
- Suggestion preview
- Accept/reject buttons
- Edit before accepting
- Batch acceptance

**Components:**
- `SuggestionReview.tsx`
- `SuggestionPreview.tsx`

---

## Phase 2.7: Prose Conversion (Week 7-8)

### Task 21: Prose Import Interface
**Time:** 4-6 hours
**Creates:** UI for importing prose

**Features:**
- File upload
- Paste text area
- Format detection
- Encoding handling

**Components:**
- `ProseImport.tsx`
- `FileUploader.tsx`

**References:**
- [Prose Conversion](../../../../worldloom-studio-spec/prose-conversion/prose_conversion_pipeline.md)

### Task 22: Structural Analysis Display
**Time:** 6-8 hours
**Creates:** Show AI analysis results

**Features:**
- Detected scenes
- Identified characters
- Locations
- Temporal structure
- Editable suggestions

**Components:**
- `AnalysisResults.tsx`
- `DetectedEntities.tsx`

### Task 23: Conversion Editor
**Time:** 8-10 hours
**Creates:** Interactive conversion tool

**Features:**
- Side-by-side prose/structure view
- Map prose sections to scenes
- Adjust entity detection
- Generate final bundle

**Components:**
- `ConversionEditor.tsx`
- `ProseToSceneMapper.tsx`

---

## Phase 2.8: Preview & Export (Week 8-9)

### Task 24: Engine Preview Integration
**Time:** 6-8 hours
**Creates:** Integration with engine for preview

**Features:**
- Start preview session
- Engine state management
- Send actions to engine
- Receive render models

**Services:**
- `preview-service.ts`
- Preview session management

### Task 25: Preview Player UI
**Time:** 8-10 hours
**Creates:** Interactive preview player

**Features:**
- Scene display
- Action buttons
- State visualization
- Back/restart controls

**Components:**
- `PreviewPlayer.tsx`
- `SceneDisplay.tsx`
- `ActionButtons.tsx`
- `StateInspector.tsx`

### Task 26: Bundle Export
**Time:** 4-6 hours
**Creates:** Export functionality

**Features:**
- Final validation
- JSON export
- Download bundle
- Export metadata

**Implementation:**
- Export service
- Validation before export
- File generation

---

## Phase 2.9: Testing & Polish (Week 9-10)

### Task 27: End-to-End Tests (Playwright)
**Time:** 10-12 hours
**Creates:** Comprehensive E2E test suite

**Test Scenarios:**
- Complete authoring workflow
- AI assistance flow
- Prose conversion flow
- Preview and export
- Error handling
- Multi-user (if applicable)

**Files:**
- `tests/e2e/authoring-flow.spec.ts`
- `tests/e2e/ai-assistance.spec.ts`
- `tests/e2e/prose-conversion.spec.ts`

### Task 28: User Documentation
**Time:** 8-10 hours
**Creates:** Complete user guides

**Documents:**
- Getting started guide
- World editor guide
- Scene editor guide
- AI assistant guide
- Prose conversion guide
- Export guide
- Troubleshooting

### Task 29: Error Handling Polish
**Time:** 6-8 hours
**Creates:** Improved error UX

**Features:**
- Better error messages
- Recovery suggestions
- Error boundaries
- Graceful degradation

### Task 30: Performance Optimization
**Time:** 6-8 hours
**Creates:** Performance improvements

**Optimizations:**
- Lazy loading
- Code splitting
- Memoization
- Virtual scrolling for large lists
- Debouncing/throttling
- Bundle size optimization

---

## Total Time Estimates

### By Phase
- Phase 2.1 (Setup): 12-18 hours
- Phase 2.2 (Core Data): 16-22 hours
- Phase 2.3 (World Editor): 20-28 hours
- Phase 2.4 (Scene Editor): 26-34 hours
- Phase 2.5 (Safety): 14-20 hours
- Phase 2.6 (AI Integration): 20-26 hours
- Phase 2.7 (Prose Conversion): 18-24 hours
- Phase 2.8 (Preview/Export): 18-24 hours
- Phase 2.9 (Polish): 30-38 hours

**Total: 174-234 hours (4-6 weeks full-time)**

### With LLM Assistance
Reduce by ~35-40%: **110-145 hours (3-4 weeks full-time)**

---

## Dependencies

```
Engine Complete
    ↓
00 → 01 → 02
         ↓
         03 → 04 → 05
                 ↓
                 06 → 07 → 08 → 09
                               ↓
                               10 → 11 → 12 → 13
                                             ↓
                                             14 → 15 → 16
                                                       ↓
                                                       17 → 18 → 19 → 20
                                                                     ↓
                                                                     21 → 22 → 23
                                                                               ↓
                                                                               24 → 25 → 26
                                                                                         ↓
                                                                                         27 → 28 → 29 → 30
```

---

## Task Status Tracking

### Setup
- [ ] Task 00 - Initialize Project
- [ ] Task 01 - React Frontend
- [ ] Task 02 - Testing

### Core Data
- [ ] Task 03 - Project Management
- [ ] Task 04 - Bundle Editor
- [ ] Task 05 - Validation Integration

### World Editor
- [ ] Task 06 - Location Editor
- [ ] Task 07 - Character Editor
- [ ] Task 08 - Item Editor
- [ ] Task 09 - Faction Editor

### Scene Editor
- [ ] Task 10 - Scene List
- [ ] Task 11 - Scene Content
- [ ] Task 12 - Action Builder
- [ ] Task 13 - Condition/Effect Builder

### Safety
- [ ] Task 14 - Age Profile UI
- [ ] Task 15 - Feature Gating
- [ ] Task 16 - Validation UI

### AI Integration
- [ ] Task 17 - AI API Client
- [ ] Task 18 - Generation UI
- [ ] Task 19 - Safety Constraints
- [ ] Task 20 - Review Workflow

### Prose Conversion
- [ ] Task 21 - Import Interface
- [ ] Task 22 - Analysis Display
- [ ] Task 23 - Conversion Editor

### Preview/Export
- [ ] Task 24 - Preview Integration
- [ ] Task 25 - Preview Player
- [ ] Task 26 - Export

### Polish
- [ ] Task 27 - E2E Tests
- [ ] Task 28 - Documentation
- [ ] Task 29 - Error Handling
- [ ] Task 30 - Performance

---

## Next Steps

1. **Ensure engine is complete** - Studio depends on worldloom-engine
2. **Begin with Task 00** - Initialize the full-stack project
3. **Follow tasks sequentially** - Each builds on previous work
4. **Use LLM prompts** - Available in [../prompts/](../prompts/)

For detailed task information, see individual task files (to be created) or use the LLM prompts.
