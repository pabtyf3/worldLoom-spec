# Task 00: Initialize TypeScript Project

**Phase:** 1.1 - Project Setup
**Estimated Time:** 2-4 hours
**Prerequisites:** Node.js 22 installed

---

## Objective

Initialize an empty worldloom-engine repository with TypeScript, ESM modules, and proper project structure.

---

## Steps

### 1. Create Repository Structure

```bash
mkdir worldloom-engine
cd worldloom-engine

# Create directory structure
mkdir -p src/{types,validation,loader,runtime,rules,persistence,events}
mkdir -p tests/{unit,integration,fixtures}
mkdir -p examples/sample-bundles
mkdir -p docs
```

### 2. Initialize npm Project

```bash
npm init -y
```

### 3. Install Dependencies

```bash
# TypeScript and Node types
npm install --save-dev typescript @types/node

# ESLint and Prettier
npm install --save-dev eslint @typescript-eslint/eslint-plugin @typescript-eslint/parser prettier

# Husky for git hooks
npm install --save-dev husky lint-staged

# No runtime dependencies yet
```

### 4. Configure TypeScript (tsconfig.json)

```json
{
  "compilerOptions": {
    "target": "ES2022",
    "module": "ES2022",
    "moduleResolution": "node",
    "lib": ["ES2022"],
    "outDir": "./dist",
    "rootDir": "./src",
    "strict": true,
    "esModuleInterop": true,
    "skipLibCheck": true,
    "forceConsistentCasingInFileNames": true,
    "resolveJsonModule": true,
    "declaration": true,
    "declarationMap": true,
    "sourceMap": true,
    "noImplicitAny": true,
    "strictNullChecks": true,
    "strictFunctionTypes": true,
    "strictBindCallApply": true,
    "strictPropertyInitialization": true,
    "noImplicitThis": true,
    "alwaysStrict": true,
    "noUnusedLocals": true,
    "noUnusedParameters": true,
    "noImplicitReturns": true,
    "noFallthroughCasesInSwitch": true
  },
  "include": ["src/**/*"],
  "exclude": ["node_modules", "dist", "tests"]
}
```

### 5. Configure ESLint (.eslintrc.json)

```json
{
  "parser": "@typescript-eslint/parser",
  "parserOptions": {
    "ecmaVersion": 2022,
    "sourceType": "module",
    "project": "./tsconfig.json"
  },
  "plugins": ["@typescript-eslint"],
  "extends": [
    "eslint:recommended",
    "plugin:@typescript-eslint/recommended",
    "plugin:@typescript-eslint/recommended-requiring-type-checking"
  ],
  "rules": {
    "@typescript-eslint/no-explicit-any": "error",
    "@typescript-eslint/explicit-function-return-type": "warn",
    "@typescript-eslint/no-unused-vars": "error",
    "no-console": "warn"
  },
  "env": {
    "node": true,
    "es2022": true
  }
}
```

### 6. Configure Prettier (.prettierrc)

```json
{
  "semi": true,
  "trailingComma": "es5",
  "singleQuote": true,
  "printWidth": 100,
  "tabWidth": 2,
  "useTabs": false,
  "arrowParens": "always"
}
```

### 7. Update package.json

```json
{
  "name": "worldloom-engine",
  "version": "1.0.0-alpha.0",
  "description": "worldLoom narrative engine - deterministic runtime for interactive fiction",
  "type": "module",
  "main": "./dist/index.js",
  "types": "./dist/index.d.ts",
  "exports": {
    ".": {
      "types": "./dist/index.d.ts",
      "import": "./dist/index.js"
    }
  },
  "engines": {
    "node": ">=22.0.0"
  },
  "scripts": {
    "build": "tsc",
    "build:watch": "tsc --watch",
    "clean": "rm -rf dist",
    "lint": "eslint src --ext .ts",
    "lint:fix": "eslint src --ext .ts --fix",
    "format": "prettier --write \"src/**/*.ts\"",
    "format:check": "prettier --check \"src/**/*.ts\"",
    "type-check": "tsc --noEmit",
    "prepare": "husky install"
  },
  "keywords": [
    "worldloom",
    "interactive-fiction",
    "narrative-engine",
    "rpg",
    "story-engine"
  ],
  "author": "",
  "license": "MIT",
  "devDependencies": {
    "@types/node": "^22.0.0",
    "@typescript-eslint/eslint-plugin": "^6.15.0",
    "@typescript-eslint/parser": "^6.15.0",
    "eslint": "^8.55.0",
    "husky": "^8.0.3",
    "lint-staged": "^15.2.0",
    "prettier": "^3.1.0",
    "typescript": "^5.3.0"
  }
}
```

### 8. Set Up Git Hooks (.husky/pre-commit)

```bash
npx husky init
```

Create `.husky/pre-commit`:
```bash
#!/usr/bin/env sh
. "$(dirname -- "$0")/_/husky.sh"

npx lint-staged
```

### 9. Configure lint-staged (package.json)

Add to package.json:
```json
{
  "lint-staged": {
    "*.ts": [
      "eslint --fix",
      "prettier --write"
    ]
  }
}
```

### 10. Create Initial Files

**src/index.ts:**
```typescript
/**
 * worldLoom Engine
 * Main entry point for the narrative engine
 */

export const VERSION = '1.0.0-alpha.0';

export * from './types/index.js';

// Placeholder for future exports
```

**src/types/index.ts:**
```typescript
/**
 * Core types for worldLoom engine
 * These will be implemented in Task 02
 */

export const PLACEHOLDER = 'types will be implemented in task-02';
```

### 11. Create README.md

```markdown
# worldLoom Engine

Narrative-first, deterministic interactive fiction engine.

## Installation

\`\`\`bash
npm install worldloom-engine
\`\`\`

## Status

🚧 **In Development** - Alpha version

## Features

- Deterministic runtime execution
- Schema-driven content validation
- Pluggable rule systems
- Offline-capable
- Save/load functionality

## Documentation

See [docs/](docs/) for detailed documentation.

## License

MIT
```

### 12. Create .gitignore

```.gitignore
# Dependencies
node_modules/

# Build output
dist/
*.tsbuildinfo

# IDE
.vscode/
.idea/
*.swp
*.swo

# OS
.DS_Store
Thumbs.db

# Logs
*.log
npm-debug.log*

# Test coverage
coverage/

# Environment
.env
.env.local
```

### 13. Initialize Git

```bash
git init
git add .
git commit -m "chore: initialize worldloom-engine project

- TypeScript configuration with strict mode
- ESM module support
- ESLint and Prettier setup
- Husky pre-commit hooks
- Project structure scaffold"
```

### 14. Verify Setup

```bash
# Type checking should pass
npm run type-check

# Linting should pass
npm run lint

# Build should succeed
npm run build

# Check dist folder created
ls -la dist/
```

---

## Success Criteria

- [ ] Repository initialized with correct structure
- [ ] package.json configured for ESM with Node 22
- [ ] TypeScript compiles successfully with strict mode
- [ ] ESLint runs without errors
- [ ] Prettier configured
- [ ] Git hooks active
- [ ] `npm run build` produces `dist/` folder
- [ ] `dist/index.js` and `dist/index.d.ts` exist
- [ ] No TypeScript errors
- [ ] Project follows ESM conventions (`type: "module"`)

---

## Verification Commands

```bash
# Should all succeed
npm run type-check
npm run lint
npm run format:check
npm run build

# Should have output
ls dist/index.js
ls dist/index.d.ts
```

---

## Common Issues

### Issue: TypeScript can't find modules
**Solution:** Ensure all imports use `.js` extension:
```typescript
import { Something } from './types/index.js'; // Correct
import { Something } from './types/index';    // Wrong in ESM
```

### Issue: ESLint errors on type imports
**Solution:** Add to .eslintrc.json:
```json
{
  "rules": {
    "@typescript-eslint/consistent-type-imports": "off"
  }
}
```

### Issue: Husky hooks not running
**Solution:** Run `npm run prepare` to install hooks

---

## Next Task

Once this task is complete, proceed to:
- [Task 01: Set Up Testing Infrastructure](task-01-testing-setup.md)

---

## Related Specifications

- [Core Vision](../../../worldloom-engine-spec/core-systems/01_Core_Vision_and_Principles.md)
- [System Architecture](../../../worldloom-engine-spec/core-systems/02_System_Architecture.md)
