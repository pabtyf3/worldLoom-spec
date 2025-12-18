# Unified Frontend Migration

**Date:** December 2024
**Status:** Complete
**Action:** Merged separate Player and Studio plans into unified Frontend

---

## What Changed

### Before: Separate Repositories

The original implementation plan had:
- **worldloom-frontend** - Player only (21 tasks, 109-148 hours)
- **worldloom-studio** - Creator only (30 tasks, 174-234 hours)
- Total: 51 tasks, 283-382 hours across 2 repositories

### After: Unified Monorepo

The updated implementation plan has:
- **worldloom-frontend** - Player + Creator unified (45 tasks, 266-352 hours)
- Total: 45 tasks in 1 repository

**Why Unified:**
The [Frontend Technical Specification](../worldloom-frontend-spec/01_Frontend_Technical_Specification.md) describes a monorepo architecture combining both surfaces with shared infrastructure.

---

## Benefits of Unified Approach

### Code Reuse
- Single design system (`packages/ui`)
- Shared runtime wrapper (`packages/runtime`)
- Shared persistence layer (`packages/persistence`)
- Common domain types (`packages/domain`)

### Consistency
- Single deployment pipeline
- Consistent UX across surfaces
- Unified state management approach
- Same platform targets (Web, Desktop, Mobile)

### Development Efficiency
- Shared infrastructure reduces duplication
- Preview in Creator uses actual Player components
- Single codebase to maintain
- Easier to ensure compatibility

### Smaller Team Focus
- One repository to manage
- Clearer ownership
- Simpler testing strategy
- Can always split later if needed

---

## New Structure

### Monorepo Layout

```
worldloom-frontend/
├── apps/
│   ├── web/              # Unified web app (Player + Creator)
│   ├── mobile/           # Player-focused (Capacitor)
│   └── desktop/          # Creator-focused (Tauri)
│
├── packages/
│   ├── ui/               # Shared design system
│   ├── domain/           # Types from worldloom-engine
│   ├── runtime/          # Engine wrapper
│   ├── persistence/      # Storage abstraction
│   ├── player/           # Player-specific features
│   ├── creator/          # Creator-specific features
│   ├── api-client/       # Backend API (optional)
│   └── telemetry/        # Event tracking (opt-in)
│
└── shared/
    └── assets/           # Images, icons, fonts
```

### Two User Surfaces

**Player (Mobile-First):**
- Routes: `/`, `/play/:id`, `/character/:id`
- Focus: Immersive reading, touch-friendly
- Package: `packages/player`

**Creator (Desktop-First):**
- Routes: `/creator`, `/creator/project/:id/*`
- Focus: Authoring tools, keyboard shortcuts
- Package: `packages/creator`

---

## Task Reorganization

### Original Tasks Preserved

**Player Tasks (21 from original frontend):**
- All functionality preserved
- Now in `packages/player` and Player routes
- Tasks 09-20 in unified list

**Creator Tasks (30 from original studio):**
- All functionality preserved
- Now in `packages/creator` and Creator routes
- Tasks 21-36 in unified list

### New Tasks Added

**Shared Infrastructure (8 tasks):**
- Task 00: Initialize Monorepo
- Task 01: Testing Infrastructure
- Task 02: Build System
- Task 03: Domain Types Package
- Task 04: Runtime Package
- Task 05: Persistence Package
- Task 06: UI Design System
- Task 07-08: Telemetry & API Client (optional)

**Integration Tasks (2 tasks):**
- Task 37: Web App Shell
- Task 38: Web Integration

**Packaging Tasks (4 tasks):**
- Task 39: Service Worker & PWA
- Task 40: Bundle Caching
- Task 41: Desktop (Tauri)
- Task 42: Mobile (Capacitor)

**Polish Tasks (3 tasks):**
- Task 43: E2E Tests
- Task 44: Documentation
- Task 45: Performance

---

## Timeline Changes

### Original Separate Timeline
- Player: 6-8 weeks
- Studio: 8-10 weeks
- Total if sequential: 14-18 weeks
- Total if parallel (2 devs): 8-10 weeks

### Unified Timeline
- Monorepo + Shared: 2 weeks
- Player: 2 weeks
- Creator: 3 weeks
- Web + Packaging: 1 week
- Polish: 1 week
- **Total: 8-10 weeks (5-7 weeks with LLM)**

### Parallel Development Still Possible
After Week 2 (shared infrastructure complete):
- Dev A: Player (Tasks 09-20)
- Dev B: Creator (Tasks 21-36)
- Both surfaces can be developed in parallel
- Reduces total time to **6-7 weeks with 2 developers**

---

## Files Updated

### Specifications
1. **Created:**
   - [worldloom-frontend-spec/IMPLEMENTATION_APPROACH.md](../worldloom-frontend-spec/IMPLEMENTATION_APPROACH.md) - Detailed unified approach
   - [worldloom-frontend-spec/01_Frontend_Technical_Specification.md](../worldloom-frontend-spec/01_Frontend_Technical_Specification.md) - Organized spec
   - [worldloom-frontend-spec/INTEGRATION_NOTES.md](../worldloom-frontend-spec/INTEGRATION_NOTES.md) - Integration details

2. **Updated:**
   - [WORLDLOOM_SPECIFICATION_INDEX.md](../WORLDLOOM_SPECIFICATION_INDEX.md) - Added Frontend section, marked Studio as legacy

### Implementation Plans
1. **Created:**
   - [implementation/worldloom-frontend/tasks/UNIFIED_TASK_LIST.md](worldloom-frontend/tasks/UNIFIED_TASK_LIST.md) - Complete 45-task plan

2. **Updated:**
   - [implementation/README.md](README.md) - Master plan with unified Frontend phase
   - [implementation/worldloom-frontend/README.md](worldloom-frontend/README.md) - Updated overview and task list

3. **Preserved (Legacy):**
   - [implementation/worldloom-studio/](worldloom-studio/) - Kept for reference
   - [implementation/worldloom-frontend/tasks/TASK_LIST.md](worldloom-frontend/tasks/TASK_LIST.md) - Original Player-only list

---

## Migration Guide

### For Developers Starting Fresh

**Follow This Path:**
1. Read [Implementation Approach](../worldloom-frontend-spec/IMPLEMENTATION_APPROACH.md)
2. Use [Unified Task List](worldloom-frontend/tasks/UNIFIED_TASK_LIST.md)
3. Start with Task 00 (Initialize Monorepo)
4. Build shared infrastructure first (Tasks 00-08)
5. Then Player (Tasks 09-20) or Creator (Tasks 21-36)

### For Developers Mid-Implementation

**If You Started Player Separately:**
- Your work maps to Tasks 09-20 in unified list
- Refactor into `packages/player`
- Share infrastructure via `packages/domain`, `packages/runtime`, etc.

**If You Started Studio Separately:**
- Your work maps to Tasks 21-36 in unified list
- Refactor into `packages/creator`
- Share infrastructure via `packages/domain`, `packages/runtime`, etc.

### For Teams with Both Started

**Merge Strategy:**
1. Create new monorepo structure
2. Move Player code to `packages/player`
3. Move Studio code to `packages/creator`
4. Extract shared code to `packages/domain`, `packages/runtime`, `packages/persistence`, `packages/ui`
5. Create unified `apps/web` that imports both surfaces

---

## Technical Considerations

### State Management

**UI State (Zustand):**
- Player has its own store (`packages/player/store`)
- Creator has its own store (`packages/creator/store`)
- Stores are isolated, no cross-surface leakage

**Session State (Engine):**
- Managed by `packages/runtime`
- Used by both Player (playback) and Creator (preview)

**Persistence (IndexedDB):**
- Managed by `packages/persistence`
- Bundles, saves, projects all in one database
- Platform adapters for web/desktop/mobile

### Routing

**Web App Routes:**
```
/                         # Player: Library
/play/:bundleId           # Player: Play session
/character/:id            # Player: Character sheet
/settings                 # Player: Settings

/creator                  # Creator: Dashboard
/creator/project/:id      # Creator: Project editor
/creator/project/:id/world     # Creator: World editor
/creator/project/:id/scenes    # Creator: Scene editor
/creator/project/:id/preview   # Creator: Playtest
```

### Platform Packaging

**Web + PWA:**
- Both surfaces accessible
- Installable as PWA
- Works offline

**Desktop (Tauri):**
- Optimized for Creator (native file system)
- Player also available
- Multi-window support

**Mobile (Capacitor):**
- Optimized for Player (touch, immersive)
- Creator available but not optimized
- Native device features

---

## Testing Strategy

### Unit Tests
- All packages tested independently
- Pure logic in `domain`, `runtime`, `persistence`
- Component tests for `ui`, `player`, `creator`

### Integration Tests
- Player workflow (load → play → save)
- Creator workflow (create → author → export)
- Cross-surface (create in Creator → play in Player)

### E2E Tests
- Complete Player journey
- Complete Creator journey
- Cross-browser compatibility
- Platform-specific tests

---

## Migration Benefits Summary

✅ **Reduced Duplication** - Shared infrastructure instead of two implementations
✅ **Faster Development** - 45 tasks vs 51 tasks, shared work upfront
✅ **Better Consistency** - Same design system, runtime, storage
✅ **Easier Maintenance** - One codebase, one deployment
✅ **Simplified Testing** - Unified test infrastructure
✅ **Future-Proof** - Can split later if needed, easier to combine now

---

## Questions & Answers

### Q: Why not keep them separate?
**A:** The spec explicitly describes a monorepo. Shared infrastructure (runtime, persistence, UI) benefits both surfaces. Smaller teams manage one repo more easily.

### Q: Can we split them later?
**A:** Yes. The package structure (`packages/player`, `packages/creator`) makes this straightforward. Extract packages to separate repos if needed.

### Q: Does this slow down development?
**A:** No. Shared infrastructure (Week 1-2) is faster than duplicating it. After that, Player and Creator can be developed in parallel by separate devs.

### Q: What about Studio developers?
**A:** Studio tasks map directly to Creator tasks (21-36). All Studio functionality preserved, just in a different package structure.

### Q: What about mobile vs desktop focus?
**A:** Player remains mobile-first (touch, portrait, immersive). Creator remains desktop-first (keyboard, multi-panel, landscape). Both surfaces in one codebase doesn't change UX focus.

---

## Next Steps

### Immediate
1. ✅ Specifications updated
2. ✅ Implementation plans updated
3. ✅ Task list unified
4. 🔲 Create LLM prompts for unified tasks (as needed)

### When Starting Implementation
1. Follow [Unified Task List](worldloom-frontend/tasks/UNIFIED_TASK_LIST.md)
2. Use [Implementation Approach](../worldloom-frontend-spec/IMPLEMENTATION_APPROACH.md) as guide
3. Refer to original task lists for detailed requirements
4. Adapt as needed based on team size and priorities

---

## Summary

The worldLoom frontend is now **unified** following the specification's monorepo approach:
- **One repository** (worldloom-frontend) instead of two
- **Two surfaces** (Player + Creator) in one codebase
- **Shared infrastructure** reduces duplication
- **45 tasks** replace original 51 separate tasks
- **8-10 weeks** total timeline (5-7 with LLM)
- **All functionality preserved** from original plans

This approach aligns with the [Frontend Technical Specification](../worldloom-frontend-spec/01_Frontend_Technical_Specification.md) and provides a solid foundation for building both player and authoring experiences efficiently.

---

**See Also:**
- [Implementation Approach](../worldloom-frontend-spec/IMPLEMENTATION_APPROACH.md)
- [Unified Task List](worldloom-frontend/tasks/UNIFIED_TASK_LIST.md)
- [Frontend Technical Specification](../worldloom-frontend-spec/01_Frontend_Technical_Specification.md)
- [Integration Notes](../worldloom-frontend-spec/INTEGRATION_NOTES.md)
