# worldLoom-frontend Specification

**Version:** 1.0
**Last Updated:** December 2024

This directory contains specifications for the worldLoom frontend application - a unified React codebase serving both **Player** and **Creator** surfaces.

---

## Overview

The worldLoom frontend is a single React + TypeScript codebase that provides:

1. **Player Application** - Interactive story reader (Fighting Fantasy-style)
2. **Creator Application** - World/story editor, validator, and playtester

Both surfaces share common infrastructure and can be deployed to:
- Web (+ PWA)
- Mobile (Android/iOS via Capacitor)
- Desktop (Windows/macOS/Linux via Tauri)

---

## Architecture Approach

### Monorepo Structure

```
worldloom-frontend/
├── apps/
│   ├── web/        # React web + PWA
│   ├── mobile/     # Capacitor wrapper
│   └── desktop/    # Tauri wrapper
└── packages/
    ├── ui/          # Shared design system
    ├── domain/      # Canonical types & schemas
    ├── runtime/     # Story execution engine
    ├── persistence/ # Local DB & sync
    ├── api-client/  # Backend API client
    └── telemetry/   # Event tracking
```

**Key Principle:** `domain` and `runtime` are platform-agnostic (no DOM/Node dependencies).

---

## Two User Surfaces

### 1. Player Application

**Purpose:** Read and play interactive stories

**Primary Screens:**
- **Library** - Browse installed and available stories
- **Play Session** - Scene rendering with choices and actions
- **Character Sheet** - Stats, inventory, conditions
- **Journal** - Auto-logged events and discoveries
- **Save/Load** - Multiple save slots with autosave

**Key Features:**
- Markdown-based scene rendering
- Choice lists with enabled/disabled states
- Dice roll prompts
- Audio cues (music, ambience, SFX)
- Full offline support

### 2. Creator Application

**Purpose:** Author and test interactive stories

**Primary Screens:**
- **Project Dashboard** - Manage projects
- **World Editor** - Lore, factions, NPCs, items, locations
- **Scene Editor** - Scene graph and content editing
- **Playtest Mode** - Debug execution with state inspector
- **Validation** - Schema validation and diagnostics

**Key Features:**
- Keyboard-first workflow
- ID generation and refactoring
- Inline validation errors
- One-click scene preview
- Import/export bundles

---

## Technical Stack

### Core Technologies
- **React 18** with TypeScript
- **Vite** for build tooling
- **Zustand** or Redux Toolkit for state management
- **IndexedDB** for local storage
- **Capacitor** for mobile
- **Tauri** for desktop

### State Management
Three layers:
1. **UI State** - Views, routing, modals
2. **Session State** - Runtime execution
3. **Persistence State** - Bundles, projects, saves

### Offline-First
- All bundles and assets stored locally (IndexedDB)
- Telemetry buffered for later upload
- File System Access API (web) or native plugins (mobile/desktop)

---

## Platform Targets

| Platform | Technology | Phase |
|----------|-----------|-------|
| Web + PWA | Vite + Service Workers | Phase 1 |
| Android | Capacitor | Phase 1 |
| iOS | Capacitor | Phase 2 |
| Desktop | Tauri | Phase 1 |

### Cross-Platform Feature Matrix

| Feature | Web | Mobile | Desktop |
|---------|-----|--------|---------|
| Offline play | ✓ | ✓ | ✓ |
| Bundle downloads | ✓ | ✓ | ✓ |
| File import/export | Limited | ✓ | ✓ |
| Local folders | Limited | Limited | ✓ |
| Background sync | Varies | ✓ | ✓ |

---

## Key Design Decisions

### 1. Unified Codebase
**Decision:** Single React app with both Player and Creator

**Rationale:**
- Shared components and infrastructure
- Common runtime engine
- Consistent design language
- Single deployment pipeline

### 2. Offline-First Architecture
**Decision:** All functionality works offline by default

**Rationale:**
- Works anywhere (planes, remote areas)
- Fast and responsive
- Privacy-friendly
- Network is enhancement, not requirement

### 3. Platform-Agnostic Core
**Decision:** Domain and runtime have no platform dependencies

**Rationale:**
- Can run in any JavaScript environment
- Testable without browser/DOM
- Reusable across web/mobile/desktop
- Future-proof for other platforms

### 4. Progressive Enhancement
**Decision:** Start with web, enhance for native

**Rationale:**
- Web works everywhere
- Native adds capabilities gradually
- Single codebase maintained
- Easier development and testing

---

## Routing Structure

### Player Routes
```
/                           # Library
/play/:bundleId             # Choose save / start
/play/:bundleId/session/:id # Active play session
/character/:sessionId       # Character sheet
/journal/:sessionId         # Event journal
```

### Creator Routes
```
/creator                    # Project dashboard
/creator/project/:id        # Project workspace
/creator/project/:id/scenes/:sceneId  # Scene editor
/creator/project/:id/validate         # Validation panel
```

### Shared Routes
```
/settings                   # App settings
```

---

## UI/UX Requirements

### Player Experience
- **Mobile-first** design
- Large touch targets
- Swipeable scenes
- Bottom-sheet controls
- Immersive reading mode

### Creator Experience
- **Desktop-first** design
- Keyboard shortcuts
- Multi-panel layouts
- Drag-and-drop editing
- Split-screen preview

### Shared
- Light/dark themes
- Book mode (high contrast)
- Accessible (WCAG 2.1 AA)
- Scalable fonts
- Screen reader support

---

## Scene Rendering

### Render Model
The runtime produces a **Render Model** consumed by the UI:

```typescript
interface RenderModel {
  narrative: NarrativeBlock;
  choices: Choice[];
  characterState: CharacterState;
  journalEntries: JournalEntry[];
  audioTriggers: AudioTrigger[];
}
```

### Rendering Requirements
- Markdown prose
- Optional images
- Audio triggers
- Skill checks / dice rolls
- Inspectable elements
- Accessibility semantics

---

## Storage & Persistence

### Core Entities
- **InstalledBundle** - Downloaded stories
- **Project** - Creator projects
- **SessionSave** - Player save games
- **AssetManifest** - Media assets
- **EventQueueItem** - Telemetry buffer

### Storage Strategy
- **Primary:** IndexedDB (all platforms)
- **Web:** File System Access API (where available)
- **Mobile:** Native filesystem via Capacitor plugins
- **Desktop:** Native filesystem via Tauri

---

## API Integration

### Client Requirements
- Typed API client (generated from OpenAPI/GraphQL)
- Auth token support
- Retry with exponential backoff
- Batched uploads for telemetry

### Minimum Endpoints
```
GET  /catalog                    # Browse available stories
GET  /bundle/:id/manifest        # Bundle metadata
GET  /bundle/:id/download        # Download bundle
POST /events                     # Upload telemetry
POST /auth/*                     # Authentication (optional Phase 1)
```

---

## Build & Deployment

### Build Pipeline
1. Lint + typecheck
2. Unit tests (domain/runtime)
3. Integration tests
4. Build web
5. Build mobile (Android/iOS)
6. Build desktop (Win/Mac/Linux)
7. Sign & release

### Versioning
- **App:** SemVer (e.g., 1.2.3)
- **Bundles:** Independent versions
- **Assets:** Hash-based cache busting

---

## Security & Privacy

### Principles
- **Telemetry is opt-in** - User must consent
- **Buffered locally** - No live tracking
- **Minimal identifiers** - Privacy-preserving by default
- **Local-first projects** - Creator work stays private unless published

### Data Handling
- Player saves: Local only
- Creator projects: Local only (until explicit publish)
- Telemetry: Aggregated and anonymized
- Authentication: JWT tokens (when enabled)

---

## Phase 1 Scope

### Included
✅ Player application (web + Android)
✅ Creator application (web + desktop)
✅ Offline-first operation
✅ IndexedDB persistence
✅ PWA support
✅ Basic telemetry

### Excluded (Future Phases)
❌ iOS support (Phase 2)
❌ On-device LLM / AI DM
❌ Real-time multiplayer
❌ Cloud sync
❌ Heavy WYSIWYG prose editing

---

## Implementation Notes

### Separation of Concerns
- **UI Layer:** React components, routing, styling
- **Domain Layer:** Types, schemas, validators (pure TypeScript)
- **Runtime Layer:** Execution engine (pure logic, no side effects)
- **Persistence Layer:** Storage adapters for each platform
- **API Layer:** Backend communication

### Testing Strategy
- **Unit tests:** Domain and runtime (pure functions)
- **Component tests:** React Testing Library
- **Integration tests:** Full user flows
- **E2E tests:** Playwright (web)
- **Platform tests:** Real device testing (mobile/desktop)

---

## Related Specifications

- [Engine Specifications](../worldloom-engine-spec/) - Runtime execution
- [Studio Specifications](../worldloom-studio-spec/) - Authoring tools (legacy - now part of Creator)
- [Content Specifications](../worldloom-content-spec/) - Bundle formats

---

## Documents in This Directory

- [01_Frontend_Technical_Specification.md](01_Frontend_Technical_Specification.md) - Complete technical spec
- [02_Player_Application.md](02_Player_Application.md) - Player-specific features
- [03_Creator_Application.md](03_Creator_Application.md) - Creator-specific features
- [04_Shared_Infrastructure.md](04_Shared_Infrastructure.md) - Common components
- [05_Platform_Packaging.md](05_Platform_Packaging.md) - Web/Mobile/Desktop deployment

---

**For implementation guidance, see [../implementation/worldloom-frontend/](../implementation/worldloom-frontend/)**
