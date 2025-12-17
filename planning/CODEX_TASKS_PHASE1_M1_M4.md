# Codex Task Pack — Phase 1 (Milestones 1–4)

This document defines **Codex-sized implementation tasks**, each intended to result in **one clean pull request**.

Each task:
- Targets a single branch
- Has a clearly bounded scope
- Produces reviewable output
- Can be reviewed by Claude against specs

Codex must follow `CODEX_EXECUTION_CONTRACT.md` at all times.

---

## Task 1 — Canonical Runtime Types & Schemas

**Branch:** `phase-1-types-and-validation`

### Objective
Create canonical TypeScript runtime types for all Phase 1 systems.

### Scope
- StoryBundle
- LoreBundle
- WorldDefinition
- SpatialGraph
- StoryGraph
- Scenes
- Actions
- Assets / Voice
- RuleModule interfaces

### Constraints
- No runtime logic
- Lore is read-only and non-executable

### Tests
- Validators and type guards

---

## Task 2 — Bundle Loading Pipeline

**Branch:** `phase-1-bundle-loading`

- Parse and validate StoryBundles
- Resolve LoreBundle references
- Structured errors only

---

## Task 3 — Offline Storage Layer

**Branch:** `phase-1-storage`

- IndexedDB provider
- Save/load round-trip

---

## Task 4 — Core Runtime Loop (Golden Path)

**Branch:** `phase-1-core-runtime`

- GameState
- Scene resolution
- Deterministic transitions

---

**End of Codex Task Pack (M1–M4)**
