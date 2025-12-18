# worldLoom-frontend Unified Task List

**Date:** December 2024
**Approach:** Monorepo with Player + Creator surfaces
**Total Tasks:** 45
**Estimated Time:** 8-10 weeks (5-7 weeks with LLM assistance)

---

## Overview

This is the **unified implementation plan** for the worldLoom-frontend monorepo, containing both:
- **Player Application** - Story reading and playing (mobile-first)
- **Creator Application** - World editing and authoring (desktop-first)

Tasks are organized by monorepo structure: shared infrastructure first, then surface-specific features, then packaging.

---

## Phase 2.5.1: Monorepo Setup (Week 1)

### Task 00: Initialize Monorepo
**Time:** 4-6 hours
**Package:** Root workspace

Initialize pnpm/npm workspace with monorepo structure:
- Set up workspace root with `pnpm-workspace.yaml` or npm workspaces
- Create `apps/` and `packages/` directories
- Initialize TypeScript configuration
- Configure ESLint and Prettier
- Set up git and .gitignore

**Files Created:**
- `package.json` (workspace root)
- `pnpm-workspace.yaml` or workspace config
- `tsconfig.json` (base)
- `.eslintrc.js`
- `.prettierrc`

**Success Criteria:**
- Workspace structure created
- Can install dependencies in workspace
- TypeScript compiles across packages

---

### Task 01: Testing Infrastructure
**Time:** 4-6 hours
**Package:** Root workspace

Set up testing for all packages:
- Configure Vitest for unit tests
- Set up React Testing Library
- Initialize Playwright for E2E tests
- Create test utilities and helpers
- Configure coverage reporting

**Files Created:**
- `vitest.config.ts` (workspace root)
- `playwright.config.ts`
- `packages/test-utils/` (shared test utilities)

**Success Criteria:**
- Can run unit tests: `pnpm test`
- Can run E2E tests: `pnpm test:e2e`
- Coverage reports generated

---

### Task 02: Configure Build System
**Time:** 3-4 hours
**Package:** Root workspace

Set up Vite and build tooling:
- Configure Vite for apps
- Set up Tailwind CSS
- Configure build scripts
- Set up development servers
- Configure module resolution

**Files Created:**
- `vite.config.ts` (base config)
- `tailwind.config.js`
- `postcss.config.js`

**Success Criteria:**
- Dev server runs: `pnpm dev`
- Production build works: `pnpm build`
- HMR (Hot Module Replacement) functional

---

## Phase 2.5.2: Shared Infrastructure (Week 1-2)

### Task 03: Domain Types Package
**Time:** 4-6 hours
**Package:** `packages/domain`

Create canonical type definitions from worldloom-engine:
- Import types from worldloom-engine
- Re-export with documentation
- Add utility types
- Add type guards
- Add validators

**Files Created:**
- `packages/domain/src/types/index.ts`
- `packages/domain/src/guards/index.ts`
- `packages/domain/src/validators/index.ts`
- `packages/domain/package.json`
- `packages/domain/tsconfig.json`

**Key Types:**
- `StoryBundle`, `LoreBundle`
- `Scene`, `Action`, `Condition`, `Effect`
- `GameState`, `Character`
- `Location`, `Item`, `Faction`

**Success Criteria:**
- All worldloom-engine types available
- Type guards functional
- Tests passing

---

### Task 04: Runtime Package
**Time:** 6-8 hours
**Package:** `packages/runtime`

Create engine wrapper and session management:
- Wrap worldloom-engine
- Implement session manager
- Handle state updates
- Emit events for observability
- Provide React hooks

**Files Created:**
- `packages/runtime/src/engine.ts`
- `packages/runtime/src/session.ts`
- `packages/runtime/src/state-manager.ts`
- `packages/runtime/src/hooks.ts`

**Hooks:**
- `useEngine()` - Access engine instance
- `useGameState()` - Current game state
- `useScene()` - Current scene
- `useActions()` - Available actions

**Success Criteria:**
- Can initialize engine
- Can start/resume sessions
- State updates propagate
- Hooks work in React

---

### Task 05: Persistence Package
**Time:** 6-8 hours
**Package:** `packages/persistence`

Create storage abstraction layer:
- IndexedDB wrapper
- File System Access API (where available)
- Storage adapters for different platforms
- Cache management
- Migration system

**Files Created:**
- `packages/persistence/src/indexeddb.ts`
- `packages/persistence/src/filesystem.ts`
- `packages/persistence/src/adapters/web.ts`
- `packages/persistence/src/adapters/tauri.ts`
- `packages/persistence/src/adapters/capacitor.ts`

**Stores:**
- `bundles` - Installed StoryBundles
- `projects` - Creator projects
- `saves` - Player save games
- `assets` - Cached media
- `telemetry` - Event queue

**Success Criteria:**
- Can store and retrieve data
- Works offline
- Migrations functional
- Platform adapters working

---

### Task 06: UI Design System
**Time:** 8-10 hours
**Package:** `packages/ui`

Create shared component library:
- Base primitives (Button, Input, Modal, etc.)
- Layout components
- Theme system (light/dark)
- Accessibility built-in
- Documentation/Storybook

**Files Created:**
- `packages/ui/src/components/Button.tsx`
- `packages/ui/src/components/Input.tsx`
- `packages/ui/src/components/Modal.tsx`
- `packages/ui/src/theme/index.ts`
- `packages/ui/src/styles/index.css`

**Components:**
- Button, Input, Textarea, Select
- Modal, Dialog, Dropdown
- Card, Panel, Tabs
- Navigation, Menu
- Typography

**Success Criteria:**
- All primitives functional
- Accessible (WCAG 2.1 AA)
- Themeable
- Used in both Player and Creator

---

### Task 07: Telemetry Package (Optional)
**Time:** 3-4 hours
**Package:** `packages/telemetry`

Create opt-in event tracking:
- Event types and schemas
- Local buffering
- Upload queue
- Privacy-preserving
- User consent management

**Files Created:**
- `packages/telemetry/src/events.ts`
- `packages/telemetry/src/buffer.ts`
- `packages/telemetry/src/upload.ts`

**Success Criteria:**
- Events can be recorded
- Buffered locally
- Opt-in only
- No PII collected

---

### Task 08: API Client Package (Optional)
**Time:** 4-6 hours
**Package:** `packages/api-client`

Create backend API client (if backend exists):
- HTTP client wrapper
- Catalog API
- Download API
- Telemetry upload
- Error handling

**Files Created:**
- `packages/api-client/src/client.ts`
- `packages/api-client/src/catalog.ts`
- `packages/api-client/src/download.ts`

**Note:** Optional for Phase 1. Can use static catalog JSON instead.

**Success Criteria:**
- Can fetch catalog
- Can download bundles
- Errors handled gracefully

---

## Phase 2.5.3: Player Application (Week 3-4)

### Task 09: Player Package Setup
**Time:** 3-4 hours
**Package:** `packages/player`

Create Player-specific package:
- Package structure
- Player store (Zustand)
- Player hooks
- Player routing

**Files Created:**
- `packages/player/src/store/player-store.ts`
- `packages/player/src/hooks/index.ts`
- `packages/player/src/routes.tsx`

**Success Criteria:**
- Package compiles
- Store initialized
- Ready for components

---

### Task 10: Story Library UI
**Time:** 4-6 hours
**Package:** `packages/player`

Build story library and loader:
- Library grid/list view
- Story cards with metadata
- File upload component
- Recent stories
- Search/filter

**Components:**
- `StoryLibrary.tsx`
- `StoryCard.tsx`
- `StoryLoader.tsx`

**Success Criteria:**
- Can browse installed stories
- Can upload new bundles
- Metadata displayed correctly

---

### Task 11: Narrative Display
**Time:** 6-8 hours
**Package:** `packages/player`

Create scene rendering component:
- Rich text narrative rendering
- Markdown support
- Text formatting and styling
- Scrolling and pagination
- Reading progress indicator
- Audio narration sync

**Components:**
- `NarrativeDisplay.tsx`
- `SceneRenderer.tsx`

**Success Criteria:**
- Narrative renders beautifully
- Markdown supported
- Accessible
- Performance optimized

---

### Task 12: Action/Choice Selection
**Time:** 6-8 hours
**Package:** `packages/player`

Build action selection interface:
- Action button components
- Choice highlighting
- Disabled state for unavailable actions
- Keyboard navigation
- Confirmation dialogs
- Dice roll animations

**Components:**
- `ActionSelector.tsx`
- `ActionButton.tsx`
- `DiceRoller.tsx`

**Success Criteria:**
- All action types supported
- Conditions evaluated correctly
- Keyboard accessible
- Animations smooth

---

### Task 13: Scene Transitions
**Time:** 4-6 hours
**Package:** `packages/player`

Implement scene transition animations:
- Fade transitions
- Slide animations
- Configurable timing
- Skip transition option
- Accessibility considerations

**Components:**
- `SceneTransition.tsx`
- Transition utilities

**Success Criteria:**
- Smooth transitions
- Can be disabled
- No performance issues

---

### Task 14: Player State Management
**Time:** 6-8 hours
**Package:** `packages/player`

Implement Player state layer:
- Zustand store for UI state
- Sync with runtime package
- State history for back navigation
- State debugging tools
- Persistence integration

**Files:**
- `player-store.ts` (enhanced)
- `state-sync.ts`
- `history.ts`

**Success Criteria:**
- UI state reactive
- Syncs with engine state
- Back navigation works
- Persists correctly

---

### Task 15: Save/Load System
**Time:** 6-8 hours
**Package:** `packages/player`

Build save game management:
- Save list UI
- Multiple save slots
- Auto-save functionality
- Save metadata (timestamp, scene, screenshot)
- Load save selection UI
- Export/import saves

**Components:**
- `SaveList.tsx`
- `SaveSlot.tsx`
- `SaveManager.tsx`

**Success Criteria:**
- Can save at any point
- Can load from any save
- Auto-save works
- Export/import functional

---

### Task 16: Player Settings
**Time:** 4-6 hours
**Package:** `packages/player`

Create settings panel:
- Settings UI component
- Text size adjustment
- Color theme (light/dark)
- Audio volume controls
- Transition speed
- Auto-save preferences

**Components:**
- `SettingsPanel.tsx`
- `SettingControls.tsx`

**Success Criteria:**
- All settings adjustable
- Persisted across sessions
- Changes applied immediately

---

### Task 17: Audio System
**Time:** 6-8 hours
**Package:** `packages/player`

Implement audio playback:
- Audio service
- Background music support
- Sound effects
- Narrative voice audio
- Volume controls
- Audio preloading
- Playlist management

**Files:**
- `audio-service.ts`
- `AudioPlayer.tsx`

**Success Criteria:**
- Audio plays correctly
- Volume adjustable
- No performance issues
- Works offline

---

### Task 18: Asset Loading
**Time:** 4-6 hours
**Package:** `packages/player`

Implement asset display:
- Image loading and display
- Asset caching
- Loading states
- Error handling for missing assets
- Responsive images
- Lazy loading

**Components:**
- `AssetImage.tsx`
- `AssetLoader.tsx`

**Success Criteria:**
- Images display correctly
- Cached for offline
- Graceful error handling
- Performance optimized

---

### Task 19: Presentation Profiles
**Time:** 6-8 hours
**Package:** `packages/player`

Support multiple presentation modes:
- Profile selection UI
- Interactive mode (full choices)
- Audiobook mode (auto-advance)
- Reading mode (text-focused)
- Accessibility mode
- Profile switching

**Components:**
- `ProfileSelector.tsx`
- Profile-specific renderers

**Success Criteria:**
- All profiles functional
- Can switch mid-session
- Preferences saved

---

### Task 20: Character Sheet & Journal
**Time:** 4-6 hours
**Package:** `packages/player`

Build character and journal views:
- Character sheet display
- Inventory view
- Journal/event log
- Relationship tracker
- Quest log

**Components:**
- `CharacterSheet.tsx`
- `Inventory.tsx`
- `Journal.tsx`

**Success Criteria:**
- All game state visible
- Updates in real-time
- Easy to navigate

---

## Phase 2.5.4: Creator Application (Week 5-7)

### Task 21: Creator Package Setup
**Time:** 3-4 hours
**Package:** `packages/creator`

Create Creator-specific package:
- Package structure
- Creator store (Zustand)
- Creator hooks
- Creator routing

**Files Created:**
- `packages/creator/src/store/creator-store.ts`
- `packages/creator/src/hooks/index.ts`
- `packages/creator/src/routes.tsx`

**Success Criteria:**
- Package compiles
- Store initialized
- Ready for components

---

### Task 22: Project Management
**Time:** 6-8 hours
**Package:** `packages/creator`

Build project CRUD interface:
- Project dashboard
- Create new project
- Project list/grid
- Open existing project
- Project settings
- Age profile selection
- Project metadata

**Components:**
- `ProjectDashboard.tsx`
- `ProjectCard.tsx`
- `ProjectCreator.tsx`
- `ProjectSettings.tsx`

**Success Criteria:**
- Can create projects
- Can open projects
- Age profile enforced
- Metadata editable

---

### Task 23: Bundle Editor Core
**Time:** 6-8 hours
**Package:** `packages/creator`

Create core bundle editing:
- Bundle state management
- Update handlers for all properties
- Undo/redo system
- Auto-save functionality
- Validation integration

**Files:**
- `bundle-store.ts`
- `bundle-actions.ts`
- `history.ts`

**Success Criteria:**
- Bundle editable
- Undo/redo works
- Auto-saves
- Validates continuously

---

### Task 24: Location Editor
**Time:** 6-8 hours
**Package:** `packages/creator`

Build location authoring UI:
- Location list/grid
- Create/edit/delete locations
- Location form with validation
- Location type selection
- Connection visualization

**Components:**
- `LocationList.tsx`
- `LocationEditor.tsx`
- `LocationForm.tsx`

**Success Criteria:**
- Can create locations
- Form validates
- All location types supported
- Changes save correctly

---

### Task 25: Character Editor
**Time:** 6-8 hours
**Package:** `packages/creator`

Build character authoring UI:
- Character list
- Character details form
- Attribute editor
- Relationship editor
- Portrait upload

**Components:**
- `CharacterList.tsx`
- `CharacterEditor.tsx`
- `AttributeEditor.tsx`
- `RelationshipEditor.tsx`

**Success Criteria:**
- Can create characters
- Attributes editable
- Relationships managed
- Assets uploadable

---

### Task 26: Item & Faction Editors
**Time:** 6-8 hours
**Package:** `packages/creator`

Build item and faction editors:
- Item list and editor
- Item tags/categories
- Faction list and editor
- Faction relationships
- Conflict management

**Components:**
- `ItemList.tsx`, `ItemEditor.tsx`
- `FactionList.tsx`, `FactionEditor.tsx`

**Success Criteria:**
- Can create items and factions
- All fields editable
- Relationships managed

---

### Task 27: Scene List & Graph
**Time:** 6-8 hours
**Package:** `packages/creator`

Build scene navigation UI:
- Scene list/tree view
- Scene graph visualization
- Create/delete scenes
- Scene reordering
- Entry point marking

**Components:**
- `SceneList.tsx`
- `SceneGraph.tsx`
- `SceneNavigator.tsx`

**Success Criteria:**
- All scenes visible
- Graph shows connections
- Can navigate easily
- Entry point clear

---

### Task 28: Scene Content Editor
**Time:** 8-10 hours
**Package:** `packages/creator`

Build main scene editing interface:
- Narrative text editor (Monaco or similar)
- Scene metadata editor
- Exit management
- Asset references
- Tags and conditions

**Components:**
- `SceneEditor.tsx`
- `NarrativeEditor.tsx`
- `ExitEditor.tsx`
- `SceneMetadata.tsx`

**Success Criteria:**
- Rich text editing
- Markdown support
- All metadata editable
- Changes save

---

### Task 29: Action Builder
**Time:** 8-10 hours
**Package:** `packages/creator`

Build visual action creation:
- Action list in scene
- Action details form
- Action type selection
- Parameter editor
- Dice roll configuration

**Components:**
- `ActionBuilder.tsx`
- `ActionList.tsx`
- `ActionForm.tsx`
- `DiceConfig.tsx`

**Success Criteria:**
- All action types supported
- Parameters configurable
- Validation working

---

### Task 30: Condition/Effect Builder
**Time:** 10-12 hours
**Package:** `packages/creator`

Build visual condition and effect tools:
- Condition builder (flag, variable, compound)
- Effect builder (set flag, modify variable)
- Visual logic builder
- Expression editor
- Rule module integration

**Components:**
- `ConditionBuilder.tsx`
- `EffectBuilder.tsx`
- `LogicBuilder.tsx`
- `ExpressionEditor.tsx`

**Success Criteria:**
- All condition types buildable
- All effect types buildable
- Complex logic possible
- Validates correctly

---

### Task 31: Validation UI
**Time:** 4-6 hours
**Package:** `packages/creator`

Build validation panel:
- Validation panel UI
- Error list with navigation
- Inline error indicators
- Warning vs error distinction
- Quick fixes

**Components:**
- `ValidationPanel.tsx`
- `ErrorList.tsx`
- `ErrorIndicator.tsx`

**Success Criteria:**
- Errors shown clearly
- Can navigate to errors
- Inline indicators visible
- Real-time updates

---

### Task 32: Age Profile & Safety UI
**Time:** 6-8 hours
**Package:** `packages/creator`

Implement safety enforcement:
- Age profile display
- Feature gating UI
- Content warnings
- Profile locking
- Downgrade prevention

**Components:**
- `AgeProfileBadge.tsx`
- `FeatureGate.tsx`
- `SafetyWarning.tsx`

**References:**
- [Age Profiles Spec](../../../worldloom-studio-spec/safety-and-content/age_profiles_and_content_gating.md)
- [Absolute Prohibitions](../../../worldloom-studio-spec/safety-and-content/absolute_prohibitions_and_age_locking.md)

**Success Criteria:**
- Profile visible always
- Features gated correctly
- Cannot create prohibited content
- Downgrade blocked

---

### Task 33: AI Assistant Integration
**Time:** 10-12 hours
**Package:** `packages/creator`

Integrate AI-powered assistance:
- AI assistant panel
- Scene generation UI
- Lore generation UI
- Character generation UI
- Suggestion review workflow
- Safety constraints enforcement

**Components:**
- `AIAssistantPanel.tsx`
- `GenerateSceneModal.tsx`
- `SuggestionReview.tsx`
- `AISettings.tsx`

**Services:**
- `ai-client.ts`
- `prompt-templates.ts`

**References:**
- [Studio AI Specification](../../../worldloom-studio-spec/ai-assistant/studio_ai_specification.md)

**Success Criteria:**
- Can generate scenes
- Can generate lore
- Safety enforced
- Suggestions reviewable
- User can accept/reject

---

### Task 34: Prose Conversion
**Time:** 8-10 hours
**Package:** `packages/creator`

Build prose import tool:
- Prose import interface
- File upload
- Paste text area
- Structural analysis display
- Conversion editor
- Side-by-side view

**Components:**
- `ProseImporter.tsx`
- `AnalysisResults.tsx`
- `ConversionEditor.tsx`

**Services:**
- `prose-converter.ts`

**References:**
- [Prose Conversion Pipeline](../../../worldloom-studio-spec/prose-conversion/prose_conversion_pipeline.md)

**Success Criteria:**
- Can import prose
- Analysis shown
- Can map to scenes
- Generates valid bundle

---

### Task 35: Preview/Playtest Mode
**Time:** 8-10 hours
**Package:** `packages/creator`

Build integrated preview player:
- Start preview button
- Preview player UI (reuse Player components)
- State inspector
- Debug controls
- Back/restart

**Components:**
- `PreviewMode.tsx`
- `StateInspector.tsx`
- Reuses `packages/player` components

**Success Criteria:**
- Can preview from any scene
- Full playthrough possible
- State visible
- Debug tools available

---

### Task 36: Bundle Export
**Time:** 4-6 hours
**Package:** `packages/creator`

Build export functionality:
- Export UI
- Final validation
- JSON generation
- Download bundle
- Export metadata
- Packaging options

**Components:**
- `ExportPanel.tsx`
- `ExportOptions.tsx`

**Success Criteria:**
- Can export bundle
- Final validation runs
- Valid JSON generated
- Bundle downloadable

---

## Phase 2.5.5: Web Application (Week 7)

### Task 37: Web App Shell
**Time:** 4-6 hours
**Package:** `apps/web`

Create unified web application:
- Initialize Vite + React
- Configure routing (React Router)
- Layout components
- Navigation
- Player routes (`/`)
- Creator routes (`/creator`)

**Files:**
- `apps/web/src/App.tsx`
- `apps/web/src/routes.tsx`
- `apps/web/src/layouts/PlayerLayout.tsx`
- `apps/web/src/layouts/CreatorLayout.tsx`

**Success Criteria:**
- Dev server runs
- Routing works
- Both surfaces accessible
- Layouts responsive

---

### Task 38: Web Integration
**Time:** 4-6 hours
**Package:** `apps/web`

Integrate packages into web app:
- Import packages
- Configure state
- Connect persistence
- Set up telemetry
- Error boundaries

**Success Criteria:**
- All packages integrated
- State syncs correctly
- Persistence working
- Error handling functional

---

## Phase 2.5.6: PWA & Packaging (Week 8)

### Task 39: Service Worker & PWA
**Time:** 6-8 hours
**Package:** `apps/web`

Implement Progressive Web App:
- Service worker setup (vite-plugin-pwa)
- Caching strategies
- App shell caching
- Offline support
- Update notifications
- Install prompt

**Files:**
- `apps/web/vite.config.ts` (PWA plugin)
- `apps/web/public/manifest.json`
- Service worker auto-generated

**Success Criteria:**
- Works offline
- Installable
- Updates smoothly
- Lighthouse score >90

---

### Task 40: Bundle Caching
**Time:** 4-6 hours
**Package:** `apps/web`

Implement offline bundle caching:
- Cache StoryBundles
- Cache assets
- Cache management UI
- Storage quota handling

**Success Criteria:**
- Bundles cached
- Assets cached
- Works offline completely
- Storage managed

---

### Task 41: Desktop Packaging (Tauri)
**Time:** 8-10 hours
**Package:** `apps/desktop`

Package for desktop platforms:
- Tauri setup and configuration
- Rust toolchain setup
- Native file dialogs
- File system access
- Auto-update configuration
- Build for Windows, macOS, Linux

**Files:**
- `apps/desktop/src-tauri/tauri.conf.json`
- `apps/desktop/src-tauri/Cargo.toml`
- Native code as needed

**Success Criteria:**
- Builds for all platforms
- Native features working
- File system access functional
- Installers generated

---

### Task 42: Mobile Preparation (Capacitor)
**Time:** 6-8 hours
**Package:** `apps/mobile`

Prepare mobile packaging:
- Capacitor setup
- Mobile configurations
- Touch optimization
- Status bar styling
- Splash screen
- App store preparation docs

**Files:**
- `apps/mobile/capacitor.config.ts`
- Platform-specific configs

**Success Criteria:**
- Builds for Android
- iOS build ready (code signing needed)
- Touch optimized
- App store guidelines documented

---

## Phase 2.5.7: Testing & Polish (Week 8-9)

### Task 43: E2E Test Suite
**Time:** 10-12 hours
**Package:** Root workspace

Create comprehensive E2E tests:
- Player workflow tests
- Creator workflow tests
- Cross-surface tests (create → play)
- Error scenarios
- Multi-browser tests

**Files:**
- `tests/e2e/player-flow.spec.ts`
- `tests/e2e/creator-flow.spec.ts`
- `tests/e2e/integration.spec.ts`

**Success Criteria:**
- All critical paths tested
- Tests pass on all browsers
- Reliable and maintainable

---

### Task 44: Documentation
**Time:** 8-10 hours
**Package:** Root workspace

Create complete documentation:
- User guides (Player, Creator)
- Developer documentation
- API documentation
- Deployment guide
- Troubleshooting

**Files:**
- `docs/player-guide.md`
- `docs/creator-guide.md`
- `docs/developer-guide.md`
- `docs/deployment.md`

**Success Criteria:**
- All features documented
- Getting started guides clear
- API documented
- Deployment automated

---

### Task 45: Performance Optimization
**Time:** 6-8 hours
**Package:** All packages

Optimize performance:
- Code splitting
- Lazy loading
- Bundle size optimization
- Virtual scrolling
- Memoization
- Image optimization

**Success Criteria:**
- Bundle size <500KB (gzipped)
- LCP <2.5s
- FID <100ms
- CLS <0.1
- Lighthouse score >90

---

## Total Time Estimates

### By Phase
- **Phase 2.5.1:** Monorepo Setup (11-16 hours)
- **Phase 2.5.2:** Shared Infrastructure (35-46 hours)
- **Phase 2.5.3:** Player Application (59-78 hours)
- **Phase 2.5.4:** Creator Application (105-138 hours)
- **Phase 2.5.5:** Web Application (8-12 hours)
- **Phase 2.5.6:** PWA & Packaging (24-32 hours)
- **Phase 2.5.7:** Testing & Polish (24-30 hours)

**Total: 266-352 hours (8-10 weeks full-time)**

### With LLM Assistance
Reduce by ~35%: **170-230 hours (5-7 weeks full-time)**

### Parallel Development (Team of 2)
After Week 2 (shared infrastructure):
- **Week 1-2:** Shared Infrastructure (both)
- **Week 3-5:** Player (Dev A) + Creator Part 1 (Dev B)
- **Week 6:** Creator Part 2 (Dev B) + Web App (Dev A)
- **Week 7:** PWA & Packaging (both)
- **Week 8:** Testing & Polish (both)

**Total: ~7-8 weeks with 2 developers**

---

## Dependencies

```
Engine Complete
    ↓
00 → 01 → 02
         ↓
    03 → 04 → 05 → 06 → [07, 08]
                         ↓
                    09 → 10 → 11 → 12 → 13 → 14 → 15 → 16 → 17 → 18 → 19 → 20
                    ↓
                    21 → 22 → 23 → 24 → 25 → 26 → 27 → 28 → 29 → 30 → 31 → 32 → 33 → 34 → 35 → 36
                         ↓                                                                     ↓
                         37 → 38                                                              ↓
                                  ↓                                                          ↓
                                  39 → 40 → 41 → 42                                         ↓
                                                   ↓                                         ↓
                                                   43 → 44 → 45 ←─────────────────────────┘
```

**Critical Path:** 00 → 01 → 03 → 04 → 05 → 06 → 09 → 14 → 21 → 28 → 33 → 37 → 43

---

## Task Status Tracking

### Monorepo Setup
- [ ] Task 00 - Initialize Monorepo
- [ ] Task 01 - Testing Infrastructure
- [ ] Task 02 - Build System

### Shared Infrastructure
- [ ] Task 03 - Domain Types
- [ ] Task 04 - Runtime Package
- [ ] Task 05 - Persistence Package
- [ ] Task 06 - UI Design System
- [ ] Task 07 - Telemetry (Optional)
- [ ] Task 08 - API Client (Optional)

### Player Application
- [ ] Task 09 - Player Setup
- [ ] Task 10 - Story Library
- [ ] Task 11 - Narrative Display
- [ ] Task 12 - Action Selection
- [ ] Task 13 - Scene Transitions
- [ ] Task 14 - State Management
- [ ] Task 15 - Save/Load
- [ ] Task 16 - Settings
- [ ] Task 17 - Audio System
- [ ] Task 18 - Asset Loading
- [ ] Task 19 - Presentation Profiles
- [ ] Task 20 - Character Sheet & Journal

### Creator Application
- [ ] Task 21 - Creator Setup
- [ ] Task 22 - Project Management
- [ ] Task 23 - Bundle Editor Core
- [ ] Task 24 - Location Editor
- [ ] Task 25 - Character Editor
- [ ] Task 26 - Item & Faction Editors
- [ ] Task 27 - Scene List & Graph
- [ ] Task 28 - Scene Content Editor
- [ ] Task 29 - Action Builder
- [ ] Task 30 - Condition/Effect Builder
- [ ] Task 31 - Validation UI
- [ ] Task 32 - Age Profile & Safety
- [ ] Task 33 - AI Assistant
- [ ] Task 34 - Prose Conversion
- [ ] Task 35 - Preview/Playtest
- [ ] Task 36 - Bundle Export

### Web Application
- [ ] Task 37 - Web App Shell
- [ ] Task 38 - Web Integration

### PWA & Packaging
- [ ] Task 39 - Service Worker & PWA
- [ ] Task 40 - Bundle Caching
- [ ] Task 41 - Desktop (Tauri)
- [ ] Task 42 - Mobile (Capacitor)

### Testing & Polish
- [ ] Task 43 - E2E Tests
- [ ] Task 44 - Documentation
- [ ] Task 45 - Performance

---

## Development Priority

### Must Have (MVP)
- Tasks 00-06: Monorepo + Shared Infrastructure
- Tasks 09-15: Core Player functionality
- Tasks 21-31: Core Creator functionality
- Task 37-38: Web app

### Should Have (Enhanced)
- Tasks 16-20: Enhanced Player features
- Tasks 32-36: Enhanced Creator features
- Tasks 39-40: PWA

### Nice to Have (Platform Expansion)
- Tasks 41-42: Desktop/Mobile packaging
- Tasks 43-45: Testing & Polish

---

## Next Steps

1. **Ensure engine is complete** - Frontend depends on worldloom-engine
2. **Begin with Task 00** - Initialize the monorepo
3. **Build shared infrastructure first** - Tasks 00-08 are foundation
4. **Player or Creator first?** - Recommend Player (Tasks 09-20), then Creator (Tasks 21-36)
5. **Test continuously** - Don't wait until Task 43

---

## Notes

This unified task list replaces both:
- `implementation/worldloom-frontend/tasks/TASK_LIST.md` (21 Player tasks)
- `implementation/worldloom-studio/tasks/TASK_LIST.md` (30 Studio tasks)

The monorepo approach adds shared infrastructure tasks (00-08) and results in a total of 45 tasks covering both surfaces.

For detailed task information and LLM prompts, see individual task files (to be created as needed).

---

**See Also:**
- [Implementation Approach](../../../worldloom-frontend-spec/IMPLEMENTATION_APPROACH.md)
- [Frontend Technical Specification](../../../worldloom-frontend-spec/01_Frontend_Technical_Specification.md)
- [Integration Notes](../../../worldloom-frontend-spec/INTEGRATION_NOTES.md)
