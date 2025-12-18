# WorldLoom Front-End Technical Specification (v1.0)

**Original Document - Organized**

---

## 1. Goals and Non-Goals

### Goals
- Single **React + TypeScript** codebase deployable as:
  - Web application + PWA
  - Mobile apps (Android first, iOS later)
  - Desktop apps
- Two primary user surfaces:
  1. **Player** – interactive story reader (Fighting Fantasy–style)
  2. **Creator** – world/story editor, validator, playtester
- **Offline-first** operation for both playing and creating
- Clean separation between:
  - UI
  - Domain / canonical schema
  - Runtime execution engine
  - Persistence & sync

### Non-Goals (Phase 1)
- No on-device LLM / AI DM
- No real-time multiplayer
- No heavy WYSIWYG prose tooling (Markdown + structured fields only)

---

## 2. Front-End Architecture

### 2.1 Monorepo Layout

Recommended single repository structure:

```
/apps
  /web        # React web + PWA
  /mobile     # Capacitor wrapper
  /desktop    # Tauri (or Electron) wrapper
/packages
  /ui         # Shared design system + components
  /domain     # Canonical types, schemas, validators
  /runtime    # Story execution engine (pure logic)
  /persistence# Local DB, import/export, sync
  /api-client # Typed backend client
  /telemetry  # Event buffering & upload
```

**Rule:** `domain` and `runtime` must be platform-agnostic (no DOM or Node APIs).

---

## 3. UI Surfaces and Features

### 3.1 Player Application

#### Primary Screens
- **Library**
  - Installed stories (local)
  - Remote catalog (downloadable)
  - Filters: genre, length, difficulty, ruleset
- **Play Session**
  - Scene renderer (markdown prose + structured content)
  - Choice list (enabled/disabled/locked with reasons)
  - Dice roll prompts
  - Audio cues (music, ambience, SFX)
- **Character Sheet**
  - Stats, inventory, conditions, flags
- **Journal**
  - Auto-logged events and discoveries
- **Save / Load**
  - Multiple saves per story
  - Autosave + manual slots

#### Scene Rendering Requirements
- Render blocks:
  - Prose (Markdown)
  - Images (optional)
  - Audio triggers
  - Skill checks / dice rolls
  - Inspectable elements
- Accessibility:
  - Scalable fonts
  - Screen reader semantics
- Runtime produces a **Render Model** consumed by UI

#### Offline-First
- All bundles, assets, and saves stored locally
- Telemetry buffered for later upload

---

### 3.2 Creator Application

#### Primary Screens
- **Project Dashboard**
  - Create/open local projects
  - Import/export bundles
- **World Editor**
  - Lore, factions, NPCs, items, locations
- **Story / Scene Editor**
  - Scene list + graph view
  - Scene editor (prose + structured actions)
- **Playtest Mode**
  - Debug execution
  - State inspector (variables, flags, rolls)
- **Validation & Diagnostics**
  - Schema validation
  - Cross-reference checks
  - Lint rules

#### UX Requirements
- Keyboard-first workflow
- ID generation and refactor support
- Inline validation errors
- One-click scene preview

---

## 4. State Management & Data Flow

### 4.1 State Layers
- **UI State** – view state, routing, modals
- **Session State** – runtime execution state
- **Persistence State** – bundles, projects, saves, events

### 4.2 Approach
- Predictable store (Zustand or Redux Toolkit)
- Runtime state is immutable and pure
- UI dispatches actions → runtime returns new state + render model

---

## 5. Local Storage & Offline Persistence

### 5.1 Storage
- **IndexedDB** as primary store (all platforms)
- File handling:
  - Web: File System Access API (fallback to import/export)
  - Mobile/Desktop: native filesystem plugins

### 5.2 Core Entities
- InstalledBundle
- Project
- SessionSave
- AssetManifest
- EventQueueItem

### 5.3 Sync Model (Phase 1)
- Best-effort sync:
  - Download bundles
  - Upload telemetry (opt-in)
- Saves and projects are local-only by default

---

## 6. API Integration

### 6.1 Client Requirements
- Typed API client
- Auth token support
- Retry with backoff
- Batched uploads

### 6.2 Minimum Endpoints
- `GET /catalog`
- `GET /bundle/:id/manifest`
- `GET /bundle/:id/download`
- `POST /events`
- `POST /auth/*` (optional Phase 1)

---

## 7. UI Framework & Styling

### 7.1 Component System
- Shared UI package
- Long-form prose typography
- Choice buttons (enabled/disabled/locked)
- Dice roll modal
- Creator diagnostics panel

### 7.2 Theming
- Light / dark
- Book mode (high contrast)

### 7.3 Responsiveness
- Mobile-first for Player
- Desktop-first for Creator

---

## 8. Routing Structure

```
/                       # Library
/play/:bundleId         # Choose save / start
/play/:bundleId/session/:sessionId
/character/:sessionId
/journal/:sessionId
/creator
/creator/project/:projectId
/creator/project/:projectId/scenes/:sceneId
/creator/project/:projectId/validate
/settings
```

---

## 9. Packaging Specifications

### 9.1 Web (PWA)
- Vite build
- Service worker caching
- Offline fallback
- Background sync (where supported)

---

### 9.2 Mobile (Capacitor)

**Targets:** Android (Phase 1), iOS (Phase 2)

- Wrap web build
- Native plugins:
  - Filesystem
  - Network status
  - Haptics
  - Audio focus
- Offline asset storage in app data directory
- Outputs:
  - Android App Bundle (.aab)
  - iOS Xcode project

---

### 9.3 Desktop (Tauri preferred)

- Wrap web build
- Native capabilities:
  - Local project folders
  - Drag/drop import
  - File dialogs
- Smaller footprint than Electron

---

## 10. Cross-Platform Capability Matrix

| Feature | Web | Mobile | Desktop |
|------|------|--------|---------|
| Offline play | ✓ | ✓ | ✓ |
| Bundle downloads | ✓ | ✓ | ✓ |
| File import/export | Limited | ✓ | ✓ |
| Local folders | Limited | Limited | ✓ |
| Background sync | Varies | ✓ | ✓ |

---

## 11. Build & CI/CD

### 11.1 Pipeline
- Lint + typecheck
- Unit tests (domain/runtime)
- Web build
- Mobile build
- Desktop build
- Signing + release artifacts

### 11.2 Versioning
- SemVer for app
- Separate bundle versions
- Asset hash–based cache busting

---

## 12. Security & Privacy

- Telemetry is opt-in
- Buffered locally before upload
- Minimal identifiers by default
- Creator projects remain local unless published

---

## Related Documents

- [Player Application Details](02_Player_Application.md)
- [Creator Application Details](03_Creator_Application.md)
- [Shared Infrastructure](04_Shared_Infrastructure.md)
- [Platform Packaging](05_Platform_Packaging.md)
