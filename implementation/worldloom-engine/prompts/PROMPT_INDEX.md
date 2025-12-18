# worldLoom-engine LLM Prompts Index

This directory contains ready-to-use prompts for LLM assistance with implementation tasks.

---

## How to Use These Prompts

1. **Copy the entire prompt** from the appropriate file
2. **Paste into Claude Code, Claude, or GPT-4**
3. **Follow the LLM's output** - it will generate code and configurations
4. **Verify success criteria** - Run the verification commands provided
5. **Move to next task** - Proceed sequentially

---

## Available Prompts

### Setup Phase
- ✅ [prompt-00-initialize-project.md](prompt-00-initialize-project.md) - Initialize TypeScript project
- ✅ [prompt-01-testing-setup.md](prompt-01-testing-setup.md) - Configure Jest testing

### Type System Phase
- [prompt-02-core-types.md](prompt-02-core-types.md) - Implement canonical types
- [prompt-03-validation-system.md](prompt-03-validation-system.md) - Build validation engine
- [prompt-04-schema-utilities.md](prompt-04-schema-utilities.md) - Schema helper functions

### Loading Phase
- [prompt-05-bundle-loader.md](prompt-05-bundle-loader.md) - Load bundles from JSON
- [prompt-06-bundle-validator.md](prompt-06-bundle-validator.md) - Validate bundle structure
- [prompt-07-reference-resolution.md](prompt-07-reference-resolution.md) - Resolve ID references

### Runtime Phase
- [prompt-08-game-state.md](prompt-08-game-state.md) - State management
- [prompt-09-scene-executor.md](prompt-09-scene-executor.md) - Scene execution
- [prompt-10-condition-evaluator.md](prompt-10-condition-evaluator.md) - Condition evaluation
- [prompt-11-effect-applicator.md](prompt-11-effect-applicator.md) - Effect application
- [prompt-12-runtime-loop.md](prompt-12-runtime-loop.md) - Main execution loop

### Rules Phase
- [prompt-13-rule-module-interface.md](prompt-13-rule-module-interface.md) - Rule module contract
- [prompt-14-example-rule-module.md](prompt-14-example-rule-module.md) - Reference implementation
- [prompt-15-rule-integration.md](prompt-15-rule-integration.md) - Module integration

### Persistence Phase
- [prompt-16-save-system.md](prompt-16-save-system.md) - Save game functionality
- [prompt-17-load-system.md](prompt-17-load-system.md) - Load and versioning

### Polish Phase
- [prompt-18-integration-tests.md](prompt-18-integration-tests.md) - End-to-end tests
- [prompt-19-sample-content.md](prompt-19-sample-content.md) - Example bundles
- [prompt-20-documentation.md](prompt-20-documentation.md) - Complete documentation

---

## Prompt Template Structure

Each prompt includes:

1. **Context** - Background and project information
2. **Your Task** - Specific implementation requirements
3. **Constraints** - What must/must not be done
4. **Success Criteria** - How to verify completion
5. **Reference Specifications** - Links to relevant specs
6. **Example Code** - Patterns to follow
7. **Output Format** - What to provide back

---

## General Prompt Template for Remaining Tasks

For tasks 02-20, use this template structure:

```markdown
# LLM Prompt: [Task Name]

## Context
You're implementing [feature] for worldloom-engine, a TypeScript ESM project.

**Background:**
[Explain what this component does and why it's needed]

**Dependencies:**
[List what tasks must be complete first]

## Your Task
Implement [feature name] with these requirements:

### [Requirement 1]
[Details]

### [Requirement 2]
[Details]

## Constraints
### MUST DO:
✅ [Constraint 1]
✅ [Constraint 2]

### MUST NOT DO:
❌ [Anti-pattern 1]
❌ [Anti-pattern 2]

## Implementation Guide

**File:** `src/[path]/[filename].ts`

```typescript
// Example structure
export class ComponentName {
  // Show expected API
}
```

## Testing Requirements
- Unit tests for all public methods
- Edge case coverage
- Error condition tests

## Success Criteria
After completion:
```bash
# Verification commands
npm run type-check
npm test
```

## Reference Specifications
- [Link to spec]
- [Runtime execution flow section]

## Ready?
Implement [feature] following these specifications.
```

---

## Creating Missing Prompts

If a prompt file doesn't exist yet, use this template:

1. Copy the general template above
2. Fill in task-specific details from [../tasks/](../tasks/)
3. Reference the appropriate spec sections
4. Include relevant code examples from specs
5. Save as `prompt-XX-task-name.md`

---

## Key References for All Prompts

### Always Include:
- Project uses ESM (not CommonJS)
- TypeScript strict mode enabled
- Node.js 22 minimum
- Jest for testing
- 80% coverage requirement

### Specification Links:
- [Core Types](../../../worldloom-engine-spec/schemas/examples.md)
- [Runtime Flow](../../../worldloom-engine-spec/runtime/runtime_execution_flow.md)
- [System Architecture](../../../worldloom-engine-spec/core-systems/02_System_Architecture.md)

---

## Common Prompt Patterns

### For Type Implementation:
```
Implement these TypeScript interfaces based on the canonical schema:
- Match structure exactly from spec
- Use strict types (no any)
- Export all types
- Add JSDoc comments
```

### For Logic Implementation:
```
Implement [component] that:
- Takes [input]
- Returns [output]
- Handles [edge cases]
- Throws [errors] when invalid
- Is fully tested
```

### For Integration:
```
Integrate [component] into [system]:
- Import from correct modules
- Handle dependencies
- Emit events if needed
- Maintain immutability
- Test integration points
```

---

## Next Steps

1. **Choose your task** from the [task list](../tasks/TASK_LIST.md)
2. **Find or create the prompt** for that task
3. **Use the prompt with an LLM**
4. **Implement the code** provided
5. **Verify success criteria**
6. **Move to next task**

---

## Tips for Best Results

### When Using Prompts:
1. **Be specific** - Include full context from the task file
2. **Reference specs** - Point to exact specification sections
3. **Show examples** - Include code patterns from specs
4. **Verify output** - Always run type-check and tests
5. **Iterate** - Ask follow-up questions if unclear

### Common Follow-ups:
- "Add tests for edge case X"
- "Handle error condition Y"
- "Add JSDoc comments"
- "Ensure immutability in state updates"
- "Make this more type-safe"

---

## Support

If you need help:
1. Check the [task file](../tasks/) for detailed requirements
2. Review the [specification](../../../worldloom-engine-spec/)
3. Look at completed tasks for patterns
4. Ask the LLM to explain its approach

---

**Start with [prompt-00-initialize-project.md](prompt-00-initialize-project.md) if beginning from scratch.**
