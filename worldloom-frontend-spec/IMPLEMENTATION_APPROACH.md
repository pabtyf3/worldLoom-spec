# Frontend Implementation Approach

**Date:** December 2024
**Status:** Unified Monorepo Strategy

---

## Executive Summary

The worldLoom frontend specification describes a **unified React monorepo** containing both:
- **Player Application** - Story reading and playing
- **Creator Application** - World editing and authoring (formerly "Studio")

This document explains the unified implementation approach and updates to the implementation plan.

---

## Key Decision: Unified Monorepo

### Rationale

Following the [Frontend Technical Specification](01_Frontend_Technical_Specification.md), we adopt a monorepo approach for Phase 1:

**Why Unified:**
1. **Shared Infrastructure** - Runtime, domain types, and UI components reused across both surfaces
2. **Consistent Design** - Single design system ensures cohesive experience
3. **Simplified Development** - One codebase, one deployment pipeline, one team
4. **Code Reuse** - Preview in Creator uses same components as Player
5. **Smaller Team** - Easier to manage one repo vs two separate codebases

**Can Always Split Later** - If the codebase grows too large or teams diverge, we can extract Studio as a separate repo.

---

## Monorepo Structure

```
worldloom-frontend/
├── apps/
│   ├── web/              # Unified web application (Player + Creator)
│   ├── mobile/           # Player-focused (Capacitor wrapper)
│   └── desktop/          # Creator-focused (Tauri wrapper)
│
├── packages/
│   ├── ui/               # Shared design system
│   │   ├── components/
│   │   ├── primitives/
│   │   └── themes/
│   │
│   ├── domain/           # Canonical types from worldloom-engine
│   │   ├── types/
│   │   └── validators/
│   │
│   ├── runtime/          # Wrapper around worldloom-engine
│   │   ├── engine.ts
│   │   ├── state-manager.ts
│   │   └── session.ts
│   │
│   ├── persistence/      # Local storage abstraction
│   │   ├── indexeddb/
│   │   ├── filesystem/
│   │   └── adapters/
│   │
│   ├── player/           # Player-specific features
│   │   ├── components/
│   │   ├── hooks/
│   │   └── services/
│   │
│   ├── creator/          # Creator-specific features
│   │   ├── components/
│   │   ├── hooks/
│   │   └── services/
│   │
│   ├── api-client/       # Backend API client (optional Phase 1)
│   │   └── client.ts
│   │
│   └── telemetry/        # Event tracking (opt-in)
│       └── events.ts
│
└── shared/
    └── assets/           # Images, icons, fonts
```

---

## Two User Surfaces

### Player (Mobile-First)

**Target:** Mobile browsers, Android app, PWA
**Focus:** Immersive reading and playing experience

**Screens:**
- Library (browse/download stories)
- Play session (scene + choices)
- Character sheet
- Journal
- Settings

**Design:**
- Large touch targets (44x44px minimum)
- Bottom navigation
- Swipe gestures
- Immersive fullscreen
- Portrait-first

**Route Prefix:** `/`

```
/                     # Library
/play/:bundleId       # Play session
/character/:id        # Character sheet
/settings             # Settings
```

### Creator (Desktop-First)

**Target:** Desktop browsers, Desktop app
**Focus:** Authoring and editing tools

**Screens:**
- Project dashboard
- World editor (locations, characters, items, factions)
- Scene editor with graph
- Playtest mode
- Validation panel
- Export

**Design:**
- Multi-panel layouts
- Keyboard shortcuts
- Drag and drop
- Context menus
- Landscape-first

**Route Prefix:** `/creator`

```
/creator                  # Dashboard
/creator/project/:id      # Project overview
/creator/project/:id/world     # World editor
/creator/project/:id/scenes    # Scene editor
/creator/project/:id/preview   # Playtest
```

---

## Implementation Plan Updates

### Original Separate Plans

Previously, the implementation directory had:
- `implementation/worldloom-frontend/` - Player only (21 tasks)
- `implementation/worldloom-studio/` - Creator only (30 tasks)

### Unified Plan

These are now merged into:
- `implementation/worldloom-frontend/` - Player + Creator (45 tasks)

### Task Organization

**Phase 2.5.1: Monorepo Setup** (3 tasks)
- Initialize monorepo with workspaces
- Configure shared packages
- Testing infrastructure

**Phase 2.5.2: Shared Infrastructure** (6 tasks)
- Domain types package
- Runtime package
- Persistence package
- UI design system
- Telemetry (opt-in)

**Phase 2.5.3: Player Application** (12 tasks)
- Story loader
- Narrative display
- Action selection
- Save/load
- Settings
- Audio/assets

**Phase 2.5.4: Creator Application** (15 tasks)
- Project management
- World editors (location, character, item, faction)
- Scene editor
- Action builder
- Condition/effect builder
- AI integration
- Validation UI

**Phase 2.5.5: PWA & Packaging** (6 tasks)
- Service worker
- Offline caching
- Desktop packaging (Tauri)
- Mobile preparation (Capacitor)

**Phase 2.5.6: Testing & Polish** (3 tasks)
- E2E tests
- Documentation
- Performance optimization

**Total: 45 tasks**

---

## Development Workflow

### Sequential Development

**Week 1-2: Foundation**
1. Set up monorepo
2. Create shared packages (domain, runtime, persistence, ui)
3. Configure testing

**Week 3-4: Player First**
4. Implement Player application
5. Core playback features
6. Save/load system
7. PWA support

**Week 5-7: Creator Second**
8. Implement Creator application
9. World editors
10. Scene editor
11. AI integration

**Week 8: Packaging & Polish**
12. Desktop builds (Tauri)
13. Mobile preparation
14. Testing and optimization

### Parallel Development (Team of 2+)

After shared infrastructure (Week 1-2), two developers can work in parallel:
- **Developer A:** Player application (`packages/player`, routing `/`)
- **Developer B:** Creator application (`packages/creator`, routing `/creator`)

Both share:
- `packages/ui` - Design system
- `packages/domain` - Types
- `packages/runtime` - Engine wrapper
- `packages/persistence` - Storage

---

## State Management

### Three Layers (Per Spec)

**1. UI State (Zustand)**
- Current route
- Modal state
- Loading indicators
- Form state
- Scoped to each surface (Player vs Creator)

**2. Session State (from engine)**
- Current game state
- Scene render model
- Available actions
- Character data
- Managed by `packages/runtime`

**3. Persistence State (IndexedDB)**
- Installed bundles
- Projects
- Saves
- Telemetry queue
- Managed by `packages/persistence`

### Flow

```
User Action (Player or Creator)
  ↓
UI Component (surface-specific)
  ↓
Dispatch to Runtime (shared)
  ↓
Engine Processes (worldloom-engine)
  ↓
New State + Render Model
  ↓
Update UI State (surface-specific)
  ↓
Persist if needed (shared)
```

---

## Technology Stack

### Framework
- **React 18** - UI framework
- **TypeScript 5** - Type safety
- **Vite** - Build tool

### State Management
- **Zustand** - Lightweight state management
- Alternative: Redux Toolkit (if needed)

### Styling
- **Tailwind CSS** - Utility-first styling
- **Radix UI** or **Shadcn/ui** - Accessible primitives

### Routing
- **React Router 6** - Client-side routing

### Storage
- **IndexedDB** - Primary storage (via `idb` library)
- **File System Access API** - Import/export (where available)

### Platform Packaging
- **Tauri** - Desktop (Windows, macOS, Linux)
- **Capacitor** - Mobile (Android, iOS)
- **Vite PWA Plugin** - Progressive Web App

### Testing
- **Vitest** - Unit tests
- **React Testing Library** - Component tests
- **Playwright** - E2E tests

---

## Offline-First Strategy

### Cached Data
- **Installed StoryBundles** - Complete bundles in IndexedDB
- **Assets** - Images, audio cached
- **Saves** - Local only by default (Player)
- **Projects** - Local only (Creator)
- **Telemetry** - Buffered for upload (opt-in)

### Sync Strategy (Phase 1)
- **Download:** Manual (user initiates)
- **Upload:** Opt-in telemetry only
- **No cloud saves** in Phase 1
- **No cloud projects** in Phase 1

---

## Security & Privacy

### Principles
1. **Telemetry is opt-in** - User must consent
2. **Local-first** - Everything works offline
3. **Privacy-preserving** - Minimal identifiers
4. **Creator control** - Projects private until published

### Implementation
- LocalStorage for settings only
- IndexedDB for all user data
- No cookies (unless auth needed in Phase 2+)
- No third-party analytics by default

---

## Platform Matrix

| Feature | Web | PWA | Desktop | Mobile |
|---------|-----|-----|---------|--------|
| Player Surface | ✓ | ✓ | ✓ | ✓ |
| Creator Surface | ✓ | ✓ | ✓ | Limited |
| Offline Play | ✓ | ✓ | ✓ | ✓ |
| Offline Authoring | ✓ | ✓ | ✓ | Limited |
| File Import/Export | Limited | Limited | ✓ | Limited |
| Native File System | ✗ | ✗ | ✓ | ✗ |

**Notes:**
- Creator on mobile is technically possible but not optimized (desktop-first design)
- File System Access API available in modern browsers but limited
- Desktop has full native file system access via Tauri

---

## Dependencies

### On worldloom-engine

The frontend depends on `worldloom-engine` for:
- Type definitions (StoryBundle, GameState, etc.)
- Runtime execution
- Validation

**Integration Point:**
```typescript
// packages/domain/
import type { StoryBundle, GameState } from 'worldloom-engine';

// packages/runtime/
import { Engine } from 'worldloom-engine';
```

### On Backend (Optional Phase 1)

For catalog, downloads, telemetry:
- `GET /catalog` - Browse available stories
- `GET /bundle/:id/download` - Download bundles
- `POST /events` - Upload telemetry

**Phase 1 Alternative:** Static catalog JSON, direct file hosting, no backend required.

---

## Migration from Separate Plans

### What Changes

**Before:**
- Separate `worldloom-frontend` (Player) implementation
- Separate `worldloom-studio` (Creator) implementation
- Two repos, two deployment pipelines, duplicated components

**After:**
- Unified `worldloom-frontend` implementation
- Single repo, single deployment pipeline
- Shared infrastructure, no duplication

### What Stays the Same

**Player Tasks (21 original tasks):**
- All Player tasks remain valid
- Now implemented in `packages/player` and `apps/web` (Player routes)

**Creator Tasks (30 original Studio tasks):**
- All Creator tasks remain valid
- Now implemented in `packages/creator` and `apps/web` (Creator routes)

### New Tasks (Shared Infrastructure)

Added tasks for shared packages:
- Monorepo setup (workspaces)
- `packages/domain` - Type definitions
- `packages/runtime` - Engine wrapper
- `packages/persistence` - Storage abstraction
- `packages/ui` - Design system

---

## Testing Strategy

### Unit Tests (Vitest)
- All packages (`domain`, `runtime`, `persistence`, `player`, `creator`)
- Pure functions only

### Component Tests (React Testing Library)
- All React components in `packages/ui`, `packages/player`, `packages/creator`
- User interaction flows

### Integration Tests
- Full play session (Player)
- Creator workflow (Creator)
- Save/load round-trip
- Engine integration

### E2E Tests (Playwright)
- Complete Player workflow
- Complete Creator workflow
- Cross-surface workflows (create in Creator, play in Player)
- Platform-specific tests (Desktop, Mobile)

---

## Timeline Estimates

### Traditional Development (Single Developer)
- **Week 1-2:** Monorepo + Shared Infrastructure (16-20 hours)
- **Week 3-4:** Player Application (32-40 hours)
- **Week 5-7:** Creator Application (60-80 hours)
- **Week 8:** PWA + Packaging (16-20 hours)
- **Week 9:** Testing + Polish (16-20 hours)

**Total: ~140-180 hours (8-10 weeks full-time)**

### With LLM Assistance
Reduce by ~35%: **90-120 hours (5-7 weeks full-time)**

### Parallel Development (Team of 2)
After Week 2, Player and Creator can be developed in parallel:
- **Week 1-2:** Shared Infrastructure (both developers)
- **Week 3-5:** Player (Dev A) + Creator (Dev B) in parallel
- **Week 6:** Integration + PWA + Packaging
- **Week 7:** Testing + Polish

**Total: ~6-7 weeks with 2 developers**

---

## Success Criteria

### Milestone 1: Shared Infrastructure
- ✓ Monorepo initialized
- ✓ All packages created and linked
- ✓ Engine integration working
- ✓ Testing infrastructure ready

### Milestone 2: Player Complete
- ✓ Can load and play stories
- ✓ Save/load working
- ✓ Settings functional
- ✓ Audio/assets supported
- ✓ Works offline (PWA)

### Milestone 3: Creator Complete
- ✓ Can create projects
- ✓ Can author worlds and scenes
- ✓ AI assistance working
- ✓ Validation UI functional
- ✓ Can export bundles

### Milestone 4: Packaged & Polished
- ✓ Desktop builds working (Tauri)
- ✓ Mobile-ready (Capacitor setup)
- ✓ E2E tests passing
- ✓ Documentation complete
- ✓ Performance optimized

---

## Next Steps

### 1. Update Implementation Tasks

Merge the separate Player and Creator task lists into a unified task list:
- Reorganize tasks by monorepo structure
- Add shared infrastructure tasks
- Update task numbers and dependencies
- Update time estimates

### 2. Update LLM Prompts

Create new prompts reflecting the monorepo approach:
- Monorepo initialization prompt
- Shared package prompts
- Surface-specific prompts (Player, Creator)

### 3. Update Master Implementation Plan

Update `implementation/README.md` to reflect:
- Single Frontend repository (not Player + Studio)
- Unified development timeline
- Updated task counts

---

## Questions to Resolve

### 1. State Management Library
**Question:** Zustand or Redux Toolkit?
- **Zustand:** Simpler, less boilerplate, recommended for smaller apps
- **Redux Toolkit:** More mature, better DevTools, better for large apps

**Recommendation:** Start with Zustand. The unified approach means more state, but Zustand can handle it. Can migrate to Redux Toolkit if complexity grows.

### 2. Component Library
**Question:** Build custom or use existing?
- **Custom:** Full control, matches design exactly
- **Shadcn/ui:** Radix primitives + Tailwind, customizable, battle-tested
- **Material UI:** Complete system, heavier

**Recommendation:** Shadcn/ui as base. Provides accessibility and common patterns while remaining fully customizable.

### 3. Desktop vs Mobile Priority
**Question:** Which platform after Web?
- **Desktop (Tauri):** Creator benefits most from desktop (file system, multi-window)
- **Mobile (Capacitor):** Player benefits most from mobile (on-the-go reading)

**Recommendation:** Desktop first (Week 8). Creator heavily benefits from native file system. Mobile can follow in Phase 2+.

### 4. Backend Dependency
**Question:** Is a backend required for Phase 1?
- **With Backend:** Catalog API, download management, telemetry collection
- **Without Backend:** Static catalog JSON, direct file hosting, client-side only

**Recommendation:** Start without backend. Catalog can be static JSON. Telemetry can be optional/local. Add backend in Phase 2+ when distribution scales.

---

## Summary

✅ **Unified monorepo approach** adopted per frontend specification
✅ **Two surfaces** (Player + Creator) in single codebase
✅ **Shared infrastructure** reduces duplication
✅ **Implementation plan** updated to reflect monorepo structure
✅ **Timeline** remains achievable (8-10 weeks → 5-7 weeks with LLM)

**Next:** Update implementation task list and prompts to reflect unified approach.

---

## See Also

- [Frontend Technical Specification](01_Frontend_Technical_Specification.md)
- [Integration Notes](INTEGRATION_NOTES.md)
- [Main Specification Index](../WORLDLOOM_SPECIFICATION_INDEX.md)
- [Implementation Plan](../implementation/worldloom-frontend/)
