# Prevent accidental outputs
context/**/*.tmp
workflow/**/*.tmp
context/**/*.bak
workflow/**/*.bak

# AI Workflow Rules

This directory defines how AI tools operate on this repository.

- Codex must follow CODEX_EXECUTION_CONTRACT.md
- All work is defined in CODEX_TASKS_*.md
- PRs must use PULL_REQUEST_TEMPLATE.md
- Claude reviews PRs using CLAUDE_PR_REVIEW_PROMPT.md

These files define process, not engine behaviour.