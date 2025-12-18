# Frontend Specification Integration Notes

**Date:** December 2024
**Action:** Integrated frontend technical specification into organized structure

---

## What Was Done

### 1. Moved Original Specification
- **From:** `worldloom-frontend/world_loom_front_end_technical_specification_v_1.md`
- **To:** `actioned/world_loom_front_end_technical_specification_v_1.md` (preserved)
- **Also:** Organized into `worldloom-frontend-spec/` directory

### 2. Created Organized Structure

**New Directory:** `worldloom-frontend-spec/`

**Files Created:**
- `README.md` - Overview and navigation
- `01_Frontend_Technical_Specification.md` - Complete technical spec (organized version)

**To Be Created (as needed):**
- `02_Player_Application.md` - Player-specific features
- `03_Creator_Application.md` - Creator-specific features
- `04_Shared_Infrastructure.md` - Common components
- `05_Platform_Packaging.md` - Web/Mobile/Desktop deployment

### 3. Updated Main Index
- Added Frontend section to [WORLDLOOM_SPECIFICATION_INDEX.md](../WORLDLOOM_SPECIFICATION_INDEX.md)
- Marked Studio as "Legacy" (now part of Frontend)
- Updated repository count to 5 (Engine, Frontend, Studio-legacy, AI, Content)

---

## Key Insight: Unified Frontend Approach

The frontend specification describes a **monorepo architecture** combining both:

1. **Player Application** - Story reading and playing
2. **Creator Application** - World editing and authoring

This is different from our initial implementation plan which separated them. Both approaches are valid:

### Approach A: Monorepo (Per Spec)
```
worldloom-frontend (single repo)
├── apps/
│   ├── web/
│   ├── mobile/
│   └── desktop/
└── packages/
    ├── ui/
    ├── domain/
    ├── runtime/
    └── persistence/
```

**Pros:**
- Shared infrastructure and components
- Single deployment pipeline
- Consistent design language
- Code reuse between Player and Creator

**Cons:**
- Larger codebase
- Different UX paradigms (Player vs Creator)
- Potential for coupling

### Approach B: Separate Repos (Implementation Plan)
```
worldloom-frontend/ (Player only)
worldloom-studio/ (Creator only)
```

**Pros:**
- Clear separation of concerns
- Independent deployment
- Smaller, focused codebases
- Different teams can work independently

**Cons:**
- Code duplication
- Multiple deployment pipelines
- Harder to maintain consistency

---

## Recommended Approach

### For Phase 1: **Monorepo** (follow the spec)

**Rationale:**
1. Smaller team - easier to manage one repo
2. Shared runtime/domain packages avoid duplication
3. Spec explicitly describes this architecture
4. Can always split later if needed

### Repository Structure
```
worldloom-frontend/
├── apps/
│   ├── web/           # Serves both Player and Creator
│   ├── mobile/        # Player-focused (Android first)
│   └── desktop/       # Creator-focused (Tauri)
├── packages/
│   ├── ui/            # Shared component library
│   ├── domain/        # Types from worldloom-engine
│   ├── runtime/       # Wrapper around worldloom-engine
│   ├── persistence/   # IndexedDB + platform adapters
│   ├── player/        # Player-specific features
│   ├── creator/       # Creator-specific features
│   ├── api-client/    # Backend API
│   └── telemetry/     # Analytics
└── shared/
    └── assets/
```

---

## Implementation Strategy

### Phase 1: Web First
1. Set up monorepo (pnpm workspaces)
2. Implement `packages/domain` (import from engine)
3. Implement `packages/runtime` (wrapper)
4. Build `packages/ui` (design system)
5. Build Player UI (`apps/web` + `packages/player`)
6. Build Creator UI (`apps/web` + `packages/creator`)
7. PWA support

### Phase 2: Mobile
1. Capacitor setup (`apps/mobile`)
2. Android build
3. iOS build (Phase 2+)

### Phase 3: Desktop
1. Tauri setup (`apps/desktop`)
2. Windows/macOS/Linux builds

---

## Dependencies

### On Engine
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
- `GET /catalog`
- `GET /bundle/:id/download`
- `POST /events`

---

## UI Surface Split

### Player (Mobile-First)
**Target:** Mobile browsers, Android app, PWA

**Screens:**
- Library (browse/download stories)
- Play session (scene + choices)
- Character sheet
- Journal
- Settings

**Design:**
- Large touch targets
- Bottom navigation
- Swipe gestures
- Immersive fullscreen

### Creator (Desktop-First)
**Target:** Desktop browsers, Desktop app

**Screens:**
- Project dashboard
- World editor
- Scene editor with graph
- Playtest mode
- Validation panel

**Design:**
- Multi-panel layouts
- Keyboard shortcuts
- Drag and drop
- Context menus

### Routing
```
/                     # Player: Library
/play/:bundleId       # Player: Play
/character/:id        # Player: Character sheet
/creator              # Creator: Dashboard
/creator/project/:id  # Creator: Editor
```

---

## State Management

### Three Layers (per spec)

**1. UI State** (Zustand)
- Current route
- Modal state
- Loading indicators
- Form state

**2. Session State** (from engine)
- Current game state
- Scene render model
- Available actions
- Character data

**3. Persistence State** (IndexedDB)
- Installed bundles
- Projects
- Saves
- Telemetry queue

### Flow
```
User Action
  ↓
UI Component
  ↓
Dispatch to Runtime
  ↓
Engine Processes
  ↓
New State + Render Model
  ↓
Update UI State
  ↓
Persist if needed
```

---

## Offline-First Implementation

### Storage Strategy
- **IndexedDB** for everything (works on all platforms)
- **File System Access API** for web import/export (where available)
- **Native plugins** for mobile/desktop file access

### Cached Data
- Installed StoryBundles (complete)
- Assets (images, audio)
- Saves (local only by default)
- Projects (Creator, local only)
- Telemetry (buffered for upload)

### Sync Strategy (Phase 1)
- **Download:** Manual (user initiates)
- **Upload:** Opt-in telemetry only
- **No cloud saves** in Phase 1

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
- No cookies (unless auth needed)
- No third-party analytics by default

---

## Testing Strategy

### Unit Tests
- `packages/domain` - Type guards, validators
- `packages/runtime` - Engine wrapper logic
- `packages/persistence` - Storage adapters
- Pure functions only

### Component Tests
- All React components
- React Testing Library
- User interaction flows

### Integration Tests
- Full play session
- Creator workflow
- Save/load round-trip

### E2E Tests
- Playwright for web
- Real device testing for mobile
- Platform-specific tests for desktop

---

## Next Steps

### For Specification
- [ ] Break down spec into detailed subsystem documents
- [ ] Document state management patterns
- [ ] Define component API specifications
- [ ] Create UI/UX wireframes

### For Implementation
- [ ] Update implementation plan to reflect monorepo approach
- [ ] Combine Player and Studio tasks into unified Frontend tasks
- [ ] Update task estimates
- [ ] Create updated LLM prompts

### For Coordination
- [ ] Ensure Engine exports correct TypeScript types
- [ ] Define Engine ↔ Frontend integration contract
- [ ] Plan backend API (if needed Phase 1)
- [ ] Coordinate with AI integration plans

---

## Questions to Resolve

### 1. Backend Dependency
**Question:** Is a backend required for Phase 1?
- Catalog could be static JSON
- Downloads could be direct file hosting
- Telemetry could be fully optional

**Decision:** Start without backend, add later if needed

### 2. Desktop Packaging
**Question:** Tauri or Electron?
- **Tauri:** Smaller, Rust-based, modern
- **Electron:** Larger, Node-based, more mature

**Per Spec:** Tauri preferred

### 3. State Management
**Question:** Zustand or Redux Toolkit?
- **Zustand:** Simpler, less boilerplate
- **Redux Toolkit:** More mature, better DevTools

**Recommendation:** Start with Zustand, can migrate if needed

### 4. Component Library
**Question:** Build custom or use existing?
- **Custom:** Full control, matches design
- **Existing:** Faster, battle-tested (Radix UI, Shadcn)

**Recommendation:** Shadcn/ui as base, customize

---

## Migration from Separate Plans

The implementation directory currently has separate plans for:
- `worldloom-frontend/` (Player only - 21 tasks)
- `worldloom-studio/` (Creator only - 30 tasks)

These should be **merged** into a unified plan:
- `worldloom-frontend/` (Player + Creator - ~40 tasks)

Tasks can be organized by:
1. Monorepo setup
2. Shared packages
3. Player features
4. Creator features
5. Platform packaging

---

## Summary

✅ Frontend spec integrated and organized
✅ Monorepo architecture documented
✅ Two surfaces (Player + Creator) clarified
✅ Updated main specification index
✅ Preserved original spec for reference

**Next:** Update implementation plan to reflect unified monorepo approach

---

**See also:**
- [Main Index](../WORLDLOOM_SPECIFICATION_INDEX.md)
- [Frontend Specification](01_Frontend_Technical_Specification.md)
- [Implementation Plan](../implementation/worldloom-frontend/)
