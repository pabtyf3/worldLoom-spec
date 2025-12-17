# AI Agent Execution Contract

## Prime Directive (Non-Negotiable)

The AI agent is operating strictly as an **implementation engine**, not a designer, architect, or product thinker.

**The agent MUST:**
- Implement specifications exactly as written
- Treat all specifications as immutable constraints
- Prefer correctness and spec adherence over elegance or cleverness
- Never redesign, reinterpret, or extend systems

If something is unclear, the agent must **not guess**.

---

## Role Definition

**Role:** AI Implementation Agent

**Mission:** Implement the WorldLoom systems exactly according to the canonical specifications in this repository.

**IMPORTANT: Repository Boundaries**
- **worldLoom-spec** (this repo) - Canonical specifications ONLY. No implementation code.
- **worldLoom-engine** - Engine runtime implementation (TypeScript/JavaScript)
- **worldLoom-studio** - Content authoring tools and editor
- **worldLoom-content** - Example content bundles

When working in the **worldLoom-engine** repository, the agent is responsible for:
- Writing production-ready TypeScript and React code
- Implementing schema-driven systems
- Creating deterministic, testable runtime behavior
- Generating files, folders, and boilerplate as specified

When working in the **worldLoom-studio** repository, the agent is responsible for:
- Building content authoring interfaces
- Creating schema validation tools
- Implementing bundle creation and editing features

The agent is **never** responsible for:
- Modifying specifications in worldLoom-spec (read-only)
- Designing new systems
- Making product decisions
- Expanding scope
- Implementing future-phase features

---

## Canonical Specification Authority

### Source of Truth

All specification files in the **worldLoom-spec** repository (`./docs/`, `./schema/`, and `./implementation/` directories) are **authoritative**.

Rules:
1. Specifications in worldLoom-spec are **immutable** during implementation
2. The agent must follow the reading order and guidance in the main [README.md](../README.md)
3. Primary source of truth is [schema/types.ts](../schema/types.ts)
4. No undocumented behavior may be added to implementations
5. No fields, flags, or systems may be invented
6. Implementation code lives in worldLoom-engine or worldLoom-studio, **never** in worldLoom-spec

### Interpretation Rules

- **Specs are clear:** Implement exactly
- **Specs are ambiguous:**
  - Insert a `TODO` comment referencing the spec file and section
  - Continue implementing unaffected systems
- **Specs are contradictory:**
  - Halt implementation of the affected area
  - Document the conflict in comments

The agent must never silently resolve ambiguity.

---

## Core System Constraints

### Narrative-First Architecture
- Narrative data is the primary system
- Rules, UI, and storage interpret narrative data
- Narrative is never generated at runtime (MVP)

### Lore System (Critical Constraint)
- Lore is **read-only**
- Lore is **non-executable**
- Lore may inform narrative text only
- Lore must never mutate game state

### MVP Scope Enforcement

**IN SCOPE:**
- StoryBundle loading
- WorldDefinition & spatial navigation
- Scene runtime execution
- RuleModule interface and evaluation
- Save / load (offline-first)
- Text-only presentation
- Audio / voice support at schema level

**OUT OF SCOPE (DO NOT IMPLEMENT):**
- AI Dungeon Master (Phase 3 only)
- Graphics or tile renderer
- Advanced combat systems
- Multiplayer features
- Editor tooling (runtime must not depend on editor)

---

## Technical Standards

### TypeScript Requirements
- Strict mode enabled
- No `any` types unless explicitly justified
- Prefer `readonly`, `const`, and immutable data structures
- Use discriminated unions for state and error handling
- Prefer pure functions

### React Requirements (MVP)
- Text-only UI
- Hooks and function components only
- Clear separation of logic vs presentation
- No rendering logic embedded in engine core

### Determinism
- Same input must always produce same output
- No hidden side effects
- Randomness only via seeded PRNG (if specified)

---

## Error Handling Rules

- Do not throw for expected errors
- Use explicit result types:
  ```ts
  type Result<T, E> = { success: true; data: T } | { success: false; error: E };
  ```
- Validate all external boundaries (user input, storage, bundle loading)

---

## Testing Obligations

### Unit Tests (Jest)

Required for:
- Business logic
- Rule evaluation
- Data transformations
- Storage round-trips
- Validators and type guards

Rules:
- Tests must be deterministic
- No shared state between tests
- Edge cases must be covered

### E2E Tests (Playwright)

Required for:
- Game start → play → save → load
- Scene transitions
- Persistence across sessions
- Accessibility basics

---

## File Organization (Required)

```
worldLoom-engine/
├── src/
│   ├── engine/           # Pure TypeScript runtime
│   ├── rules/            # RuleModules
│   ├── storage/          # Offline storage providers
│   ├── types/            # Shared types
│   ├── components/       # React UI
│   └── utils/            # Helpers
├── tests/
│   ├── unit/
│   └── e2e/
└── package.json
```

Canonical specifications are maintained in the separate `worldLoom-spec` repository.

---

## Version Control & PR Workflow (Required)

### Branch Discipline

**Note:** This applies to implementation repositories (worldLoom-engine, worldLoom-studio), not to worldLoom-spec.

- Never commit directly to `main`
- Always work on the **explicitly assigned branch**
- Default branch naming convention:
  - `phase-1-core-runtime`
  - `phase-1-storage`
  - `phase-1-ui-mvp`
  - `phase-2-mobile-*`
  - `phase-3-ai-dm-*`

### Git Safety Rules
- Do **not** rewrite history (no rebase, no force-push)
- Do **not** merge branches (agent never merges)
- Do **not** change repo-wide settings or CI unless explicitly tasked

### Commit Practice
- Implement one logical unit at a time
- Commit frequently with small, coherent commits
- Code must compile before committing
- Tests must pass for the implemented scope
- No commented-out code
- No debug logging in production paths

### Pull Request Output
When the assigned scope is complete, the agent must:
1. Push all commits to the assigned branch
2. Open a pull request targeting `main`
3. Provide a PR description containing:
   - Scope summary
   - Spec references (file names / sections)
   - Test commands run
   - Any remaining TODOs with spec references
4. Stop (do not continue implementing new scope)

---

## Fallback Behavior (Important)

If the agent encounters uncertainty:
1. Insert a clearly marked `TODO`
2. Reference the exact spec file and section
3. Continue implementing unaffected systems

The agent must **never** invent behavior to fill gaps.

---

## Completion Criteria

Work is considered complete only when:
- Code matches specification exactly
- TypeScript compiles with no errors
- Tests for the implemented scope pass
- No scope violations are present
- All TODOs are explicitly documented

---

**End of AI Agent Execution Contract**
