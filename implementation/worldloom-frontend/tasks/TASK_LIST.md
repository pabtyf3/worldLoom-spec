# worldLoom-frontend Task List

Complete list of implementation tasks for the player application.

---

## Overview

The frontend is a progressive web app for playing StoryBundles, with desktop and mobile packaging capabilities.

**Total Tasks:** 21
**Estimated Time:** 6-8 weeks (4-5 weeks with LLM assistance)

---

## Phase 2.5.1: Project Setup (Week 1)

### Task 00: Initialize React + Vite Project
**Time:** 3-4 hours
- Set up Vite with React and TypeScript
- Configure ESM, ESLint, Prettier
- Set up Tailwind CSS
- Create basic app structure
- Initialize git

### Task 01: Integrate worldloom-engine
**Time:** 4-6 hours
- Install worldloom-engine as dependency
- Create engine service wrapper
- Set up state management (Zustand)
- Create engine hooks (useEngine, useGameState)
- Test basic engine integration

### Task 02: Testing Infrastructure
**Time:** 3-4 hours
- Configure Vitest for unit tests
- Set up React Testing Library
- Initialize Playwright for E2E
- Create test utilities
- Write initial tests

---

## Phase 2.5.2: Core Player UI (Week 2-3)

### Task 03: Story Loader UI
**Time:** 4-6 hours
- File upload component
- Bundle selection from local storage
- Bundle library view
- Recent stories list
- Bundle metadata display

### Task 04: Narrative Display Component
**Time:** 6-8 hours
- Rich text narrative rendering
- Markdown support (optional)
- Text formatting and styling
- Scrolling and pagination
- Reading progress indicator

### Task 05: Action/Choice Selection
**Time:** 6-8 hours
- Action button components
- Choice highlighting
- Disabled state for unavailable actions
- Keyboard navigation support
- Confirmation dialogs (when needed)

### Task 06: Scene Transition Animations
**Time:** 4-6 hours
- Fade transitions
- Slide animations
- Transition timing configuration
- Skip transition option
- Accessibility considerations

### Task 07: Game State Management
**Time:** 6-8 hours
- Zustand store for game state
- State synchronization with engine
- State history for back navigation
- State debugging tools
- State persistence preparation

---

## Phase 2.5.3: Enhanced Features (Week 3-4)

### Task 08: Save/Load System
**Time:** 6-8 hours
- LocalStorage save management
- Multiple save slots
- Auto-save functionality
- Save metadata (timestamp, scene, etc.)
- Load save selection UI
- Save export/import

### Task 09: Settings Panel
**Time:** 4-6 hours
- Settings UI component
- Text size adjustment
- Color theme selection (light/dark)
- Audio volume controls
- Transition speed
- Auto-save preferences

### Task 10: Audio System Integration
**Time:** 6-8 hours
- Audio service for playback
- Background music support
- Sound effects
- Narrative voice audio
- Volume controls
- Audio preloading

### Task 11: Asset Loading
**Time:** 4-6 hours
- Image loading and display
- Asset caching
- Loading states
- Error handling for missing assets
- Responsive images

### Task 12: Presentation Profile Support
**Time:** 6-8 hours
- Profile selection UI
- Interactive mode implementation
- Audiobook mode (auto-advance)
- Reading mode (text-focused)
- Accessibility mode
- Profile switching

---

## Phase 2.5.4: PWA (Week 5)

### Task 13: Service Worker Implementation
**Time:** 6-8 hours
- Service worker setup (vite-plugin-pwa)
- Caching strategies
- App shell caching
- Update notifications
- Skip waiting logic

### Task 14: Offline Bundle Caching
**Time:** 4-6 hours
- Cache StoryBundles offline
- Cache assets offline
- IndexedDB for large files
- Cache management UI
- Storage quota handling

### Task 15: Install Prompt & PWA Manifest
**Time:** 3-4 hours
- PWA manifest configuration
- Install prompt UI
- App icons (multiple sizes)
- Splash screens
- Platform-specific settings

---

## Phase 2.5.5: Desktop Packaging (Week 6)

### Task 16: Tauri Setup
**Time:** 6-8 hours
- Install Tauri CLI
- Configure tauri.conf.json
- Set up Rust toolchain
- Create Tauri window
- Configure permissions

### Task 17: Desktop Builds
**Time:** 8-10 hours
- Build for Windows
- Build for macOS
- Build for Linux
- Code signing setup
- Installer configuration

### Task 18: Platform-Specific Features
**Time:** 4-6 hours
- Native file dialogs
- System tray integration (optional)
- Native menus
- Auto-update configuration
- Platform-specific styling

---

## Phase 2.5.6: Mobile Preparation (Week 7-8)

### Task 19: Responsive Design Polish
**Time:** 6-8 hours
- Mobile breakpoint optimization
- Tablet layout
- Portrait/landscape modes
- Touch-friendly sizing (44x44px minimum)
- Mobile navigation patterns

### Task 20: Touch Optimization
**Time:** 4-6 hours
- Swipe gestures
- Pull-to-refresh (optional)
- Long-press actions
- Touch feedback
- Prevent double-tap zoom

### Task 21: Mobile Packaging Preparation
**Time:** 6-8 hours
- Capacitor setup (or Tauri Mobile)
- Mobile-specific configurations
- Status bar styling
- Splash screen
- App store preparation docs

---

## Total Time Estimates

### By Phase
- Phase 2.5.1 (Setup): 10-14 hours
- Phase 2.5.2 (Core Player): 26-36 hours
- Phase 2.5.3 (Enhanced): 26-34 hours
- Phase 2.5.4 (PWA): 13-18 hours
- Phase 2.5.5 (Desktop): 18-24 hours
- Phase 2.5.6 (Mobile Prep): 16-22 hours

**Total: 109-148 hours (3-4 weeks full-time)**

### With LLM Assistance
Reduce by ~35%: **70-95 hours (2-2.5 weeks full-time)**

---

## Dependencies

```
Engine Complete
    ↓
00 → 01 → 02
         ↓
         03 → 04 → 05 → 06 → 07
                           ↓
                           08 → 09 → 10 → 11 → 12
                                             ↓
                                             13 → 14 → 15
                                                       ↓
                                                       16 → 17 → 18
                                                                 ↓
                                                                 19 → 20 → 21
```

**Critical Path:** Engine → 00 → 01 → 04 → 05 → 07 → 08

---

## Task Status Tracking

### Setup
- [ ] Task 00 - Initialize Project
- [ ] Task 01 - Engine Integration
- [ ] Task 02 - Testing

### Core Player
- [ ] Task 03 - Story Loader
- [ ] Task 04 - Narrative Display
- [ ] Task 05 - Action Selection
- [ ] Task 06 - Transitions
- [ ] Task 07 - State Management

### Enhanced
- [ ] Task 08 - Save/Load
- [ ] Task 09 - Settings
- [ ] Task 10 - Audio
- [ ] Task 11 - Assets
- [ ] Task 12 - Presentation Profiles

### PWA
- [ ] Task 13 - Service Worker
- [ ] Task 14 - Offline Caching
- [ ] Task 15 - Install/Manifest

### Desktop
- [ ] Task 16 - Tauri Setup
- [ ] Task 17 - Desktop Builds
- [ ] Task 18 - Platform Features

### Mobile Prep
- [ ] Task 19 - Responsive Design
- [ ] Task 20 - Touch Optimization
- [ ] Task 21 - Mobile Packaging

---

## Development Priority

### Must Have (Core Functionality)
- Tasks 00-07: Basic story playback
- Task 08: Save/load

### Should Have (Enhanced Experience)
- Tasks 09-12: Settings, audio, assets, profiles
- Tasks 13-15: PWA for offline play

### Nice to Have (Platform Expansion)
- Tasks 16-18: Desktop packaging
- Tasks 19-21: Mobile optimization

---

## Testing Checklist

### Functionality
- [ ] Can load and play stories
- [ ] All actions work correctly
- [ ] Save/load persists state
- [ ] Audio plays correctly
- [ ] Assets display properly

### User Experience
- [ ] Responsive on all screen sizes
- [ ] Keyboard navigation works
- [ ] Transitions are smooth
- [ ] No performance issues

### PWA
- [ ] Installable on devices
- [ ] Works offline
- [ ] Service worker caches correctly
- [ ] Updates smoothly

### Desktop
- [ ] Builds for all platforms
- [ ] Native features work
- [ ] Installers work correctly

### Accessibility
- [ ] Screen reader compatible
- [ ] Keyboard accessible
- [ ] High contrast mode works
- [ ] Text sizing works

---

## Next Steps

1. **Ensure engine is complete** - Frontend depends on worldloom-engine
2. **Begin with Task 00** - Initialize the React + Vite project
3. **Follow tasks sequentially** - Each builds on previous work
4. **Test on real devices** - Mobile and desktop testing throughout

For detailed task information, see individual task files (to be created) or use the LLM prompts in [../prompts/](../prompts/).
