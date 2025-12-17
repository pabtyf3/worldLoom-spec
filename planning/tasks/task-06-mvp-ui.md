# Task 6 — MVP Text-Only UI

**Implementation Repository:** `worldLoom-engine`
**Branch:** `phase-1-ui-mvp`

## Objective
Create a minimal viable text-only UI for playing WorldLoom games.

## Scope
- Text rendering component
- Action/choice selection interface
- Scene display
- Save/load UI controls
- Basic game flow controls

## Constraints
- Text-only (no graphics, no tiles)
- React with hooks and function components
- No game logic in UI components
- Accessibility basics (keyboard navigation)

## Tests
- Component rendering tests
- User interaction flows
- Accessibility tests (basic keyboard navigation)
- E2E: Start game → make choices → save → load

## Specification References
All references are in the **worldLoom-spec** repository:
- [docs/planning/10_MVP_and_Non_Goals.md](../../docs/planning/10_MVP_and_Non_Goals.md)
- [docs/systems/05_Scene_System.md](../../docs/systems/05_Scene_System.md)

## Success Criteria
- Players can start a game
- Players can read scenes and make choices
- Players can save and load games
- UI is keyboard accessible
- E2E tests pass
