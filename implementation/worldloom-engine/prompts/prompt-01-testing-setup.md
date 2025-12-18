# LLM Prompt: Set Up Testing Infrastructure

**Use this prompt with Claude or GPT to configure Jest testing.**

---

## Context

You're setting up the testing infrastructure for worldloom-engine, a TypeScript project using ESM modules. The project requires comprehensive test coverage (>80%) using Jest.

**Project Details:**
- TypeScript 5.x with strict mode
- ESM modules (not CommonJS)
- Node.js 22
- No frontend (headless engine)

---

## Your Task

Configure Jest for unit and integration testing with the following requirements:

### 1. Jest Configuration
- Use `ts-jest` with ESM preset
- Test environment: Node
- Support `.ts` files with ESM imports
- Module name mapping for `.js` extensions
- Test patterns: `**/*.test.ts` and `**/*.spec.ts`

### 2. Coverage Requirements
- Overall coverage: 80% minimum
- Per-metric coverage: 80% (branches, functions, lines, statements)
- Collect coverage from `src/**/*.ts`
- Exclude type definition files and placeholders
- Generate text, lcov, and HTML reports

### 3. Test Structure
Create these directories:
- `tests/unit/` - Unit tests for individual functions/classes
- `tests/integration/` - Integration tests for full workflows
- `tests/fixtures/` - Test data and sample bundles

### 4. Test Utilities
Create `tests/test-utils.ts` with:
- `createMockStoryBundle()` - Generate test bundle data
- `createMockGameState()` - Generate test game state
- `expectValidStructure()` - Assert object structure

### 5. Initial Tests
Create `tests/unit/engine.test.ts` that:
- Tests the VERSION export
- Verifies it's a valid semver string
- Confirms it's an alpha version

### 6. Test Fixture
Create `tests/fixtures/minimal-bundle.json` with:
- A minimal valid StoryBundle
- One location
- One scene
- No complex features

### 7. Scripts
Add to package.json:
```json
{
  "test": "...",
  "test:watch": "...",
  "test:coverage": "...",
  "test:unit": "...",
  "test:integration": "..."
}
```

---

## Constraints

### MUST DO:
✅ Use ESM-compatible Jest configuration
✅ Set 80% coverage threshold
✅ Support TypeScript with ts-jest
✅ Use `NODE_OPTIONS=--experimental-vm-modules` for ESM
✅ Create test utilities for common patterns

### MUST NOT DO:
❌ Use CommonJS in test files
❌ Skip coverage configuration
❌ Forget to handle `.js` extension mapping
❌ Use default Jest config (it won't work with ESM)

---

## Success Criteria

After completion:
```bash
npm test                 # Runs and passes
npm run test:coverage    # Generates coverage report
npm run test:watch       # Starts watch mode
```

Coverage output should show 80% thresholds configured.

---

## Reference Specifications

The engine will need to handle data structures like:

**StoryBundle Structure:**
```typescript
{
  id: string
  version: string
  name: string
  world: WorldDefinition
  storyGraph: StoryGraph
  loreRefs: LoreRef[]
  ruleModules: RuleModuleRef[]
}
```

**GameState Structure:**
```typescript
{
  currentSceneId: string
  flags: Record<string, boolean>
  variables: Record<string, any>
  inventory: string[]
}
```

---

## Example Test Pattern

Tests should follow this structure:
```typescript
import { describe, it, expect } from '@jest/globals';

describe('ComponentName', () => {
  describe('methodName', () => {
    it('should do something specific', () => {
      // Arrange
      const input = createTestInput();

      // Act
      const result = functionUnderTest(input);

      // Assert
      expect(result).toEqual(expected);
    });
  });
});
```

---

## ESM Import Pattern

All imports must use `.js` extensions:
```typescript
import { something } from './module.js';  // Correct
import { something } from './module';      // Wrong
```

---

## Output Format

Provide:
1. **jest.config.js** - Complete configuration
2. **package.json updates** - Test scripts
3. **Test utility code** - Full `test-utils.ts`
4. **Initial test** - Working `engine.test.ts`
5. **Fixture data** - Valid `minimal-bundle.json`
6. **Verification** - Commands to run and expected output

---

## Ready?

Please configure Jest for the worldloom-engine project following these specifications. Show all configuration files and initial tests.
