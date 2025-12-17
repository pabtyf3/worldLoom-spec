# Migration from context/ to New Structure

**Date:** December 16, 2024

## What Changed

The worldLoom-spec repository has been reorganized from a flat `context/` directory into a structured hierarchy for better navigation and usability.

## Old Structure
```
context/
├── 01-10 specification documents
├── implementation/
│   ├── types.ts
│   ├── schema_examples.md
│   ├── runtime_execution_flow.md
│   └── implementation_notes.md
└── reference_code/
```

## New Structure
```
worldLoom-spec/
├── docs/              # Specification documents
│   ├── vision/
│   ├── architecture/
│   ├── systems/
│   └── planning/
├── schema/            # Canonical types (PRIMARY SOURCE OF TRUTH)
│   ├── types.ts
│   ├── examples.md
│   └── README.md
├── implementation/    # Implementation guidance
│   ├── runtime_execution_flow.md
│   ├── implementation_notes.md
│   └── README.md
└── reference/         # Reference code examples
    └── code/
```

## Key Changes

1. **schema/types.ts** is now the PRIMARY SOURCE OF TRUTH
   - Old location: `context/implementation/types.ts`
   - New location: `schema/types.ts`

2. **Specification docs** are organized by category
   - Vision documents in `docs/vision/`
   - Architecture in `docs/architecture/`
   - System specs in `docs/systems/`
   - Planning docs in `docs/planning/`

3. **Implementation guidance** has its own directory
   - Runtime flow, implementation notes
   - Clear separation from canonical schema

4. **Reference code** is clearly marked as examples
   - Not part of the binding specification
   - Useful for implementation guidance

## For Developers

### If you were referencing:
- `context/implementation/types.ts` → Use `schema/types.ts`
- `context/implementation/schema_examples.md` → Use `schema/examples.md`
- `context/implementation/runtime_execution_flow.md` → Use `implementation/runtime_execution_flow.md`
- Any `context/XX_*.md` files → See `docs/` subdirectories

### Quick Start
1. Read [README.md](README.md) for navigation
2. Start with [schema/types.ts](schema/types.ts) for implementation
3. Follow [implementation/README.md](implementation/README.md) for guidance

## Old Context Directory

The original `context/` directory has been preserved temporarily for reference. It will be removed in a future commit once the migration is complete and validated.
