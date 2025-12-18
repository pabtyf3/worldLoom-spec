# worldLoom-frontend Implementation Guide

**Phase:** 2 (Unified Frontend Application)
**Priority:** HIGH
**Estimated Duration:** 8-10 weeks (5-7 weeks with LLM assistance)

---

## Overview

The worldLoom-frontend is a **unified React monorepo** containing both:
- **Player Application** - Story reading and playing (mobile-first)
- **Creator Application** - World editing and authoring (desktop-first)

**Repository:** worldloom-frontend
**Tech Stack:** TypeScript (ESM), React, Vite, Tauri (desktop), Capacitor (mobile)
**Dependencies:** worldloom-engine (runtime execution, validation)

---

## What This Repository Does

The frontend is a **unified application** that provides:

### Player Surface
- Loads and plays StoryBundles
- Displays narrative content with rich formatting
- Handles player input and choices
- Manages save/load from local storage
- Supports multiple presentation profiles
- Plays audio and displays assets
- Works offline (PWA)

### Creator Surface
- Creates and manages projects
- Authors worlds (locations, characters, items, factions)
- Edits scenes with visual tools
- Builds actions with conditions/effects
- Integrates AI assistance
- Validates content continuously
- Previews stories
- Exports StoryBundles

### Cross-Platform
- Web + PWA
- Desktop (Windows, macOS, Linux via Tauri)
- Mobile (Android, iOS via Capacitor)

**Architecture:** Monorepo with shared packages (`domain`, `runtime`, `persistence`, `ui`) and surface-specific packages (`player`, `creator`)

---

## Implementation Strategy

### Phase 1: Monorepo + Shared Infrastructure (Weeks 1-2)
Set up monorepo structure and build shared packages that both surfaces use.

### Phase 2: Player Surface (Weeks 3-4)
Build the story reading and playing experience (mobile-first).

### Phase 3: Creator Surface (Weeks 5-7)
Build the authoring and editing tools (desktop-first).

### Phase 4: PWA & Packaging (Week 8)
Add PWA support, desktop builds (Tauri), and mobile preparation (Capacitor).

### Phase 5: Testing & Polish (Week 9)
E2E tests, documentation, and performance optimization.

---

## Implementation Order

### Phase 2.5.1: Monorepo Setup (Week 1)
**Tasks 00-02:** Initialize monorepo, testing, build system

### Phase 2.5.2: Shared Infrastructure (Week 1-2)
**Tasks 03-08:** Domain, runtime, persistence, UI packages

### Phase 2.5.3: Player Application (Week 3-4)
**Tasks 09-20:** Story library, narrative display, save/load, audio, settings

### Phase 2.5.4: Creator Application (Week 5-7)
**Tasks 21-36:** Project management, world editors, scene editor, AI, validation, export

### Phase 2.5.5: Web Application (Week 7)
**Tasks 37-38:** Unified web app shell and integration

### Phase 2.5.6: PWA & Packaging (Week 8)
**Tasks 39-42:** Service worker, offline caching, desktop (Tauri), mobile (Capacitor)

### Phase 2.5.7: Testing & Polish (Week 9)
**Tasks 43-45:** E2E tests, documentation, performance

---

## Task List

**Total Tasks:** 45 tasks across 7 phases

See [tasks/UNIFIED_TASK_LIST.md](tasks/UNIFIED_TASK_LIST.md) for complete details.

### Monorepo Setup (Week 1)
- [ ] **Task 00:** Initialize Monorepo
- [ ] **Task 01:** Testing Infrastructure
- [ ] **Task 02:** Configure Build System

### Shared Infrastructure (Week 1-2)
- [ ] **Task 03:** Domain Types Package
- [ ] **Task 04:** Runtime Package
- [ ] **Task 05:** Persistence Package
- [ ] **Task 06:** UI Design System
- [ ] **Task 07:** Telemetry Package (Optional)
- [ ] **Task 08:** API Client Package (Optional)

### Player Application (Week 3-4)
- [ ] **Task 09:** Player Package Setup
- [ ] **Task 10:** Story Library UI
- [ ] **Task 11:** Narrative Display
- [ ] **Task 12:** Action/Choice Selection
- [ ] **Task 13:** Scene Transitions
- [ ] **Task 14:** Player State Management
- [ ] **Task 15:** Save/Load System
- [ ] **Task 16:** Player Settings
- [ ] **Task 17:** Audio System
- [ ] **Task 18:** Asset Loading
- [ ] **Task 19:** Presentation Profiles
- [ ] **Task 20:** Character Sheet & Journal

### Creator Application (Week 5-7)
- [ ] **Task 21:** Creator Package Setup
- [ ] **Task 22:** Project Management
- [ ] **Task 23:** Bundle Editor Core
- [ ] **Task 24:** Location Editor
- [ ] **Task 25:** Character Editor
- [ ] **Task 26:** Item & Faction Editors
- [ ] **Task 27:** Scene List & Graph
- [ ] **Task 28:** Scene Content Editor
- [ ] **Task 29:** Action Builder
- [ ] **Task 30:** Condition/Effect Builder
- [ ] **Task 31:** Validation UI
- [ ] **Task 32:** Age Profile & Safety UI
- [ ] **Task 33:** AI Assistant Integration
- [ ] **Task 34:** Prose Conversion
- [ ] **Task 35:** Preview/Playtest Mode
- [ ] **Task 36:** Bundle Export

### Web Application (Week 7)
- [ ] **Task 37:** Web App Shell
- [ ] **Task 38:** Web Integration

### PWA & Packaging (Week 8)
- [ ] **Task 39:** Service Worker & PWA
- [ ] **Task 40:** Bundle Caching
- [ ] **Task 41:** Desktop Packaging (Tauri)
- [ ] **Task 42:** Mobile Preparation (Capacitor)

### Testing & Polish (Week 9)
- [ ] **Task 43:** E2E Test Suite
- [ ] **Task 44:** Documentation
- [ ] **Task 45:** Performance Optimization

---

## Success Criteria

### Milestone 1: Core Player (After Task 07)
- [ ] Can load StoryBundles
- [ ] Displays narrative and choices
- [ ] Handles player actions
- [ ] Scene transitions work
- [ ] State management functional

### Milestone 2: Enhanced (After Task 12)
- [ ] Save/load working
- [ ] Settings panel functional
- [ ] Audio plays correctly
- [ ] Assets display properly
- [ ] Multiple presentation profiles supported

### Milestone 3: PWA (After Task 15)
- [ ] Works offline
- [ ] Installable on devices
- [ ] Service worker caching bundles
- [ ] Fast loading

### Milestone 4: Desktop (After Task 18)
- [ ] Desktop builds for all platforms
- [ ] Native features working
- [ ] Distribution ready

### Milestone 5: Mobile Ready (After Task 21)
- [ ] Fully responsive
- [ ] Touch-optimized
- [ ] Ready for Capacitor/Tauri mobile
- [ ] Platform considerations documented

---

## Technical Architecture

### Module Structure

```
worldloom-frontend/
├── src/
│   ├── components/
│   │   ├── player/
│   │   │   ├── NarrativeDisplay.tsx
│   │   │   ├── ActionSelector.tsx
│   │   │   ├── SceneTransition.tsx
│   │   │   └── GameState Display.tsx
│   │   ├── ui/
│   │   │   ├── StoryLoader.tsx
│   │   │   ├── SettingsPanel.tsx
│   │   │   └── SaveLoadMenu.tsx
│   │   └── layout/
│   │       ├── AppShell.tsx
│   │       └── Navigation.tsx
│   ├── hooks/
│   │   ├── useEngine.ts
│   │   ├── useGameState.ts
│   │   ├── useAudio.ts
│   │   └── usePresentation.ts
│   ├── store/
│   │   ├── game-store.ts
│   │   └── settings-store.ts
│   ├── services/
│   │   ├── storage-service.ts
│   │   ├── audio-service.ts
│   │   └── asset-service.ts
│   ├── utils/
│   └── App.tsx
├── src-tauri/               # Desktop packaging
│   ├── src/
│   ├── Cargo.toml
│   └── tauri.conf.json
├── public/
│   ├── manifest.json        # PWA manifest
│   └── sw.js                # Service worker
├── tests/
│   ├── unit/
│   └── e2e/
├── package.json
├── vite.config.ts
└── README.md
```

---

## Key Features

### Story Playback
- Beautiful narrative display
- Smooth scene transitions
- Choice highlighting
- History/back functionality

### User Experience
- Keyboard navigation support
- Screen reader accessible
- Customizable text size and colors
- Dark mode support

### Persistence
- Auto-save functionality
- Multiple save slots
- Save export/import
- Cloud save (future)

### Media
- Audio playback for narrative
- Background music
- Sound effects
- Image display
- Future: Video support

### Presentation Profiles
- Interactive mode (full choices)
- Audiobook mode (auto-advance, minimal UI)
- Reading mode (focus on text)
- Accessibility mode (enhanced for screen readers)

---

## Dependencies

### Runtime Dependencies
```json
{
  "dependencies": {
    "worldloom-engine": "^1.0.0-alpha",
    "react": "^18.2.0",
    "react-dom": "^18.2.0",
    "zustand": "^4.4.0",
    "@tauri-apps/api": "^1.5.0",
    "localforage": "^1.10.0"
  }
}
```

### Dev Dependencies
```json
{
  "devDependencies": {
    "@vitejs/plugin-react": "^4.2.0",
    "vite": "^5.0.0",
    "vite-plugin-pwa": "^0.17.0",
    "@tauri-apps/cli": "^1.5.0",
    "typescript": "^5.3.0",
    "vitest": "^1.0.0",
    "@playwright/test": "^1.40.0"
  }
}
```

---

## Platform Targets

### Web (Primary)
- Modern browsers (Chrome, Firefox, Safari, Edge)
- Progressive Web App
- Mobile browsers

### Desktop (Tauri)
- **Windows:** 10+ (x64, arm64)
- **macOS:** 11+ (Intel, Apple Silicon)
- **Linux:** Ubuntu 20.04+, Fedora, etc.

### Mobile (Future - Phase 3+)
- **iOS:** 14+ (via Capacitor or Tauri Mobile)
- **Android:** 8+ (via Capacitor or Tauri Mobile)

---

## Packaging Strategy

### Web Deployment
- Static site deployment (Vercel, Netlify, GitHub Pages)
- CDN for assets
- Service worker for offline

### Desktop Packaging
- Tauri for native builds
- Signed installers for each platform
- Auto-update support
- Native system integration

### Mobile Packaging (Future)
- Capacitor for hybrid apps
- OR Tauri Mobile (when stable)
- App store distribution
- Native device features

---

## Design Considerations

### Offline-First
- All bundles cached locally
- Service worker for app shell
- LocalStorage for saves
- IndexedDB for large assets

### Performance
- Virtual scrolling for long text
- Lazy loading of assets
- Optimized animations
- Bundle code splitting

### Accessibility
- WCAG 2.1 AA compliance
- Keyboard navigation
- Screen reader support
- High contrast mode
- Adjustable text sizing

### Responsive Design
- Mobile-first approach
- Breakpoints: mobile (< 640px), tablet (640-1024px), desktop (> 1024px)
- Touch-friendly targets (44x44px minimum)
- Swipe gestures on mobile

---

## Testing Strategy

### Unit Tests (Vitest)
- Component logic
- Utility functions
- Store mutations
- Service functions

### Integration Tests
- Engine integration
- Save/load flow
- Audio playback
- Asset loading

### E2E Tests (Playwright)
- Complete playthrough
- Save/load workflow
- Settings changes
- Multiple browsers

### Platform Tests
- Desktop builds on all platforms
- PWA installation
- Offline functionality
- Touch interactions

---

## Common Pitfalls

### ❌ Don't Do This
1. **Bypass engine** - Always use engine for game logic
2. **Store state in localStorage directly** - Use engine save format
3. **Hardcode presentation** - Support multiple profiles
4. **Forget offline** - Design for offline-first
5. **Skip accessibility** - Build it in from start

### ✅ Do This
1. **Use engine API** - Let engine handle all game logic
2. **Structured saves** - Use engine's save/load system
3. **Profile abstraction** - Support multiple presentation modes
4. **PWA features** - Service worker from early
5. **Accessible markup** - Semantic HTML and ARIA

---

## Timeline

### Optimistic (Full-time, experienced)
- Week 1: Setup + Engine Integration
- Week 2-3: Core Player
- Week 4: Enhanced Features
- Week 5: PWA
- Week 6: Desktop
- Week 7-8: Mobile Prep

### With LLM (Using prompts)
- Week 1: Setup + Integration
- Week 2: Core Player
- Week 3: Enhanced Features + PWA
- Week 4: Desktop + Mobile Prep
- Week 5: Polish

**Total: ~4-5 weeks**

---

## Deployment Strategy

### Web
1. Build static site: `npm run build`
2. Deploy to Vercel/Netlify
3. Configure service worker
4. Test PWA installation

### Desktop
1. Build for platforms: `npm run tauri:build`
2. Sign installers
3. Upload to GitHub releases
4. Set up auto-update server

### Mobile (Future)
1. Build with Capacitor
2. Test on real devices
3. Submit to app stores
4. Handle store review process

---

## Next Steps After Frontend Complete

Once frontend is complete:

1. **Test with content bundles** - Use worldloom-content examples
2. **Beta testing** - Get user feedback
3. **Distribution** - Deploy web, publish desktop apps
4. **Mobile development** - Full mobile implementation (if needed)

---

## Related Specifications

- [Presentation Profiles](../../../worldloom-content-spec/presentation-profiles/)
- [Assets and Voice](../../../worldloom-content-spec/media-and-assets/08_Assets_and_Voice.md)
- [Engine API](../../worldloom-engine/README.md)

---

## Support

- **Specification Questions:** See [worldloom-content-spec](../../../worldloom-content-spec/)
- **Engine Integration:** See [worldloom-engine](../../worldloom-engine/)
- **Implementation Questions:** Check task details in [tasks/](tasks/)
- **LLM Assistance:** Use prompts in [prompts/](prompts/)

---

## Important Notes

### Development Order
1. **Engine must be complete** - Frontend depends on engine API
2. **Start with web** - Desktop/mobile packaging comes after
3. **PWA early** - Build offline support from beginning
4. **Test continuously** - E2E tests for all features

### Platform Considerations
- **Web is primary** - Ensure web works perfectly first
- **Desktop is secondary** - Nice-to-have for offline use
- **Mobile is Phase 3+** - Full mobile development is future phase

### Dependencies on Other Repos
- **worldloom-engine** - Required for all functionality
- **worldloom-content** - Needed for testing and examples
- **worldloom-studio** - Independent, but content authored there

---

**Ready to start? Begin with [Task 00: Initialize React + Vite Project](tasks/task-00-initialize-project.md)**

**Note:** Detailed task files and prompts will be created as needed during implementation.
