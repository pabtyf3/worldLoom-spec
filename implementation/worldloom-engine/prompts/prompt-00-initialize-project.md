# LLM Prompt: Initialize worldloom-engine Project

**Use this prompt with Claude or GPT to set up the initial project structure.**

---

## Context

You are helping to build the worldLoom Engine, a narrative-first, deterministic interactive fiction runtime. This is the foundation repository that all other components depend on.

**Key Requirements:**
- Node.js 22 with ESM modules (not CommonJS)
- TypeScript 5.x with strict mode
- No frontend - this is a headless engine
- Test-driven development approach

---

## Your Task

Initialize an empty TypeScript project for worldloom-engine with the following specifications:

### 1. Project Structure
Create this directory structure:
```
worldloom-engine/
├── src/
│   ├── types/
│   ├── validation/
│   ├── loader/
│   ├── runtime/
│   ├── rules/
│   ├── persistence/
│   ├── events/
│   └── index.ts
├── tests/
│   ├── unit/
│   ├── integration/
│   └── fixtures/
├── examples/
│   └── sample-bundles/
└── docs/
```

### 2. TypeScript Configuration
- Target: ES2022
- Module: ES2022 (ESM, not CommonJS)
- Strict mode: enabled (all strict flags on)
- Output to `dist/`
- Generate declaration files
- Source maps enabled

### 3. Package Configuration
- Package name: `worldloom-engine`
- Version: `1.0.0-alpha.0`
- Type: `module` (ESM)
- Main: `./dist/index.js`
- Types: `./dist/index.d.ts`
- Engines: Node >=22.0.0

### 4. Dev Tools
- ESLint with TypeScript plugin
- Prettier for formatting
- Husky for git hooks
- lint-staged for pre-commit

### 5. Scripts Required
```json
{
  "build": "tsc",
  "build:watch": "tsc --watch",
  "clean": "rm -rf dist",
  "lint": "eslint src --ext .ts",
  "lint:fix": "eslint src --ext .ts --fix",
  "format": "prettier --write \"src/**/*.ts\"",
  "type-check": "tsc --noEmit"
}
```

### 6. Initial Code
Create minimal placeholder files:
- `src/index.ts` - Export VERSION constant and placeholder for future exports
- `src/types/index.ts` - Placeholder for types (will be implemented in next task)

### 7. Git Setup
- Initialize git repository
- Create comprehensive .gitignore
- Set up pre-commit hooks with Husky
- Make initial commit

---

## Constraints

### MUST DO:
✅ Use ESM modules (`type: "module"` in package.json)
✅ All imports must use `.js` extensions (ESM requirement)
✅ TypeScript strict mode with all flags enabled
✅ Node.js 22 as minimum engine
✅ No runtime dependencies (dev dependencies only)

### MUST NOT DO:
❌ Use CommonJS (`require`/`module.exports`)
❌ Disable any strict TypeScript flags
❌ Add any runtime dependencies yet
❌ Create any frontend code
❌ Use default exports (prefer named exports)

---

## Success Criteria

After completion, these commands should all succeed:
```bash
npm run type-check   # No TypeScript errors
npm run lint         # No linting errors
npm run build        # Creates dist/ folder
ls dist/index.js     # File exists
ls dist/index.d.ts   # File exists
```

---

## Example Session

Here's what I expect you to do:

1. Create all directories
2. Create all configuration files (tsconfig.json, .eslintrc.json, etc.)
3. Update package.json with correct configuration
4. Create minimal initial source files
5. Set up git with .gitignore and hooks
6. Verify everything works

---

## Output Format

Please provide:

1. **All file contents** - Show me the complete content of each configuration file
2. **Commands to run** - List all bash commands to set up the project
3. **Verification steps** - Commands to verify everything works
4. **Any issues encountered** - If something doesn't work, explain why

---

## Reference

This engine will implement the specifications in:
- worldloom-engine-spec/core-systems/
- worldloom-engine-spec/schemas/
- worldloom-engine-spec/runtime/

The complete specification is available in the worldLoom-spec repository.

---

## Ready?

Please initialize the worldloom-engine project following these specifications. Show me all configuration files and explain your setup choices.
