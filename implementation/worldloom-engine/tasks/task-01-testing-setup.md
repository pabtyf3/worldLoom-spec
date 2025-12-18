# Task 01: Set Up Testing Infrastructure

**Phase:** 1.1 - Project Setup
**Estimated Time:** 2-3 hours
**Prerequisites:** Task 00 complete

---

## Objective

Configure Jest for unit and integration testing with TypeScript and ESM support. Establish testing patterns and create initial test fixtures.

---

## Steps

### 1. Install Jest and Dependencies

```bash
npm install --save-dev jest @types/jest ts-jest
```

### 2. Create Jest Configuration (jest.config.js)

```javascript
export default {
  preset: 'ts-jest/presets/default-esm',
  testEnvironment: 'node',
  extensionsToTreatAsEsm: ['.ts'],
  moduleNameMapper: {
    '^(\\.{1,2}/.*)\\.js$': '$1',
  },
  transform: {
    '^.+\\.ts$': [
      'ts-jest',
      {
        useESM: true,
      },
    ],
  },
  testMatch: [
    '**/tests/**/*.test.ts',
    '**/tests/**/*.spec.ts',
  ],
  collectCoverageFrom: [
    'src/**/*.ts',
    '!src/**/*.d.ts',
    '!src/types/index.ts', // Placeholder file
  ],
  coverageDirectory: 'coverage',
  coverageReporters: ['text', 'lcov', 'html'],
  coverageThreshold: {
    global: {
      branches: 80,
      functions: 80,
      lines: 80,
      statements: 80,
    },
  },
  verbose: true,
};
```

### 3. Update package.json Scripts

Add to `scripts`:
```json
{
  "test": "NODE_OPTIONS=--experimental-vm-modules jest",
  "test:watch": "NODE_OPTIONS=--experimental-vm-modules jest --watch",
  "test:coverage": "NODE_OPTIONS=--experimental-vm-modules jest --coverage",
  "test:unit": "NODE_OPTIONS=--experimental-vm-modules jest tests/unit",
  "test:integration": "NODE_OPTIONS=--experimental-vm-modules jest tests/integration"
}
```

### 4. Create Test Utilities (tests/test-utils.ts)

```typescript
/**
 * Shared test utilities
 */

export function createMockStoryBundle(overrides?: any) {
  return {
    id: 'test.bundle',
    version: '1.3.0',
    name: 'Test Bundle',
    loreRefs: [],
    ruleModules: [],
    world: {
      locations: [],
      characters: [],
      items: [],
      factions: [],
      variables: {},
    },
    storyGraph: {
      scenes: [],
      startSceneId: 'scene.start',
    },
    ...overrides,
  };
}

export function createMockGameState(overrides?: any) {
  return {
    currentSceneId: 'scene.start',
    flags: {},
    variables: {},
    inventory: [],
    ...overrides,
  };
}

/**
 * Assert that an object matches expected structure
 */
export function expectValidStructure(obj: any, requiredKeys: string[]) {
  requiredKeys.forEach((key) => {
    expect(obj).toHaveProperty(key);
  });
}
```

### 5. Create Initial Test Fixture (tests/fixtures/minimal-bundle.json)

```json
{
  "id": "test.minimal",
  "version": "1.3.0",
  "name": "Minimal Test Bundle",
  "loreRefs": [],
  "ruleModules": [],
  "world": {
    "locations": [
      {
        "id": "loc.start",
        "name": "Starting Location",
        "type": "town",
        "description": "A simple starting point"
      }
    ],
    "characters": [],
    "items": [],
    "factions": [],
    "variables": {}
  },
  "storyGraph": {
    "scenes": [
      {
        "id": "scene.start",
        "locationId": "loc.start",
        "narrative": {
          "text": "You are at the starting location.",
          "tags": []
        },
        "exits": []
      }
    ],
    "startSceneId": "scene.start"
  }
}
```

### 6. Create First Test (tests/unit/engine.test.ts)

```typescript
import { describe, it, expect } from '@jest/globals';
import { VERSION } from '../../src/index.js';

describe('Engine', () => {
  describe('VERSION', () => {
    it('should export a version string', () => {
      expect(VERSION).toBeDefined();
      expect(typeof VERSION).toBe('string');
      expect(VERSION).toMatch(/\d+\.\d+\.\d+/);
    });

    it('should be alpha version', () => {
      expect(VERSION).toContain('alpha');
    });
  });
});
```

### 7. Create Integration Test Placeholder (tests/integration/runtime.test.ts)

```typescript
import { describe, it, expect } from '@jest/globals';
import * as fs from 'fs/promises';
import * as path from 'path';

describe('Runtime Integration', () => {
  describe('Bundle Loading', () => {
    it.skip('should load minimal bundle', async () => {
      const bundlePath = path.join(__dirname, '../fixtures/minimal-bundle.json');
      const bundleData = await fs.readFile(bundlePath, 'utf-8');
      const bundle = JSON.parse(bundleData);

      expect(bundle).toBeDefined();
      expect(bundle.id).toBe('test.minimal');
      // More tests will be added when loader is implemented
    });
  });
});
```

### 8. Configure TypeScript for Tests (tsconfig.test.json)

```json
{
  "extends": "./tsconfig.json",
  "compilerOptions": {
    "noEmit": true
  },
  "include": ["src/**/*", "tests/**/*"]
}
```

### 9. Update .eslintrc.json for Tests

Add test environment:
```json
{
  "overrides": [
    {
      "files": ["**/*.test.ts", "**/*.spec.ts"],
      "env": {
        "jest": true
      },
      "rules": {
        "@typescript-eslint/no-explicit-any": "off"
      }
    }
  ]
}
```

### 10. Create Coverage Configuration (.coveragerc or in jest.config.js)

Already included in jest.config.js above.

### 11. Add Test Documentation (docs/TESTING.md)

```markdown
# Testing Guide

## Running Tests

\`\`\`bash
# Run all tests
npm test

# Run with coverage
npm run test:coverage

# Run in watch mode
npm run test:watch

# Run only unit tests
npm run test:unit

# Run only integration tests
npm run test:integration
\`\`\`

## Writing Tests

### Unit Tests
Place in `tests/unit/` - test individual functions and classes.

### Integration Tests
Place in `tests/integration/` - test full workflows.

### Fixtures
Place test data in `tests/fixtures/`.

## Coverage Requirements
- Overall: 80%
- Per file: 80%

## Test Structure
\`\`\`typescript
describe('ComponentName', () => {
  describe('methodName', () => {
    it('should do something specific', () => {
      // Arrange
      const input = createTestData();

      // Act
      const result = functionUnderTest(input);

      // Assert
      expect(result).toEqual(expected);
    });
  });
});
\`\`\`
```

### 12. Run Tests

```bash
npm test
```

Should see:
```
PASS  tests/unit/engine.test.ts
  Engine
    VERSION
      ✓ should export a version string
      ✓ should be alpha version

Test Suites: 1 passed, 1 total
Tests:       1 skipped, 2 passed, 3 total
```

### 13. Generate Coverage Report

```bash
npm run test:coverage
```

### 14. Commit Changes

```bash
git add .
git commit -m "test: set up Jest testing infrastructure

- Configure Jest with TypeScript and ESM support
- Add test utilities and fixtures
- Create initial unit and integration tests
- Set 80% coverage threshold
- Add testing documentation"
```

---

## Success Criteria

- [ ] Jest installed and configured for ESM + TypeScript
- [ ] `npm test` runs successfully
- [ ] Initial test passes
- [ ] Test fixtures created
- [ ] Test utilities available
- [ ] Coverage reporting configured (80% threshold)
- [ ] Both unit and integration test folders set up
- [ ] Documentation created

---

## Verification Commands

```bash
# Should pass
npm test

# Should generate coverage report
npm run test:coverage

# Should show coverage in terminal and create coverage/ folder
ls coverage/

# Should pass linting
npm run lint

# Should type-check successfully
npm run type-check
```

---

## Common Issues

### Issue: ESM/Jest compatibility errors
**Solution:** Ensure you're using the `--experimental-vm-modules` flag and `ts-jest/presets/default-esm`

### Issue: Import resolution errors
**Solution:** Check `moduleNameMapper` in jest.config.js - should strip `.js` extensions

### Issue: Coverage not tracking files
**Solution:** Verify `collectCoverageFrom` patterns match your source structure

---

## Next Task

Once testing is set up, proceed to:
- [Task 02: Implement Core Types](task-02-core-types.md)

---

## Related Specifications

- [Testing requirements](../../../worldloom-engine-spec/runtime/implementation_notes.md)
- [Runtime Execution Flow](../../../worldloom-engine-spec/runtime/runtime_execution_flow.md)
