# WorldLoom Planning

This directory defines how AI agents operate when implementing WorldLoom systems.

## Repository Structure

**IMPORTANT:** This repository (worldLoom-spec) contains **specifications only**. No implementation code should exist here.

- **worldLoom-spec** (this repo) - Canonical specifications, schemas, and planning documents
- **worldLoom-engine** - Engine runtime implementation (TypeScript/JavaScript)
- **worldLoom-studio** - Content authoring tools and editor
- **worldLoom-content** - Example content bundles

## Key Documents

- **[AI_AGENT_EXECUTION_CONTRACT.md](AI_AGENT_EXECUTION_CONTRACT.md)** - The binding contract for AI implementation agents
- **[PULL_REQUEST_TEMPLATE.md](PULL_REQUEST_TEMPLATE.md)** - Required template for all pull requests in implementation repos
- **[tasks/](tasks/)** - Individual implementation tasks for Phase 1 (to be executed in worldLoom-engine)

## Task Organization

Each task is defined in its own file in the `tasks/` directory. These tasks are to be implemented in the **worldLoom-engine** repository:

1. [task-01-types-and-validation.md](tasks/task-01-types-and-validation.md) - Canonical Runtime Types & Schemas
2. [task-02-bundle-loading.md](tasks/task-02-bundle-loading.md) - Bundle Loading Pipeline
3. [task-03-storage-layer.md](tasks/task-03-storage-layer.md) - Offline Storage Layer
4. [task-04-core-runtime.md](tasks/task-04-core-runtime.md) - Core Runtime Loop (Golden Path)
5. [task-05-rule-modules.md](tasks/task-05-rule-modules.md) - RuleModules Framework
6. [task-06-mvp-ui.md](tasks/task-06-mvp-ui.md) - MVP Text-Only UI
7. [task-07-audio-voice.md](tasks/task-07-audio-voice.md) - Audio & Voice Support
8. [task-08-sample-content.md](tasks/task-08-sample-content.md) - Sample Content Packs

## Workflow

1. AI agent reads the [AI_AGENT_EXECUTION_CONTRACT.md](AI_AGENT_EXECUTION_CONTRACT.md)
2. Agent switches to the appropriate implementation repository (worldLoom-engine or worldLoom-studio)
3. Agent selects a task from the `tasks/` directory
4. Agent implements the task according to specifications in worldLoom-spec
5. Agent creates a PR in the implementation repo using [PULL_REQUEST_TEMPLATE.md](PULL_REQUEST_TEMPLATE.md)
6. Human reviews and merges (or requests changes)

## Important Notes

- **worldLoom-spec is read-only during implementation** - specifications are immutable
- Implementation code lives in **worldLoom-engine** or **worldLoom-studio**, never in worldLoom-spec
- The canonical specification is in `../docs/`, `../schema/`, and `../implementation/`
- All implementation must match specifications exactly
- These planning files define **process**, not engine behavior
