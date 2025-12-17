# Task 7 — Audio & Voice Support

**Implementation Repository:** `worldLoom-engine`
**Branch:** `phase-1-audio-voice`

## Objective
Implement audio playback and voice support at the schema and runtime level.

## Scope
- Audio asset loading
- Voice line playback
- Audio event system
- Schema-level audio/voice definitions

## Constraints
- Audio must be optional (graceful degradation)
- No audio generation - only playback of bundled assets
- Must work offline
- Voice lines are referenced from Assets schema

## Tests
- Audio asset loading
- Voice playback triggers
- Fallback when audio unavailable
- Audio pause/resume

## Specification References
All references are in the **worldLoom-spec** repository:
- [docs/systems/08_Assets_and_Voice.md](../../docs/systems/08_Assets_and_Voice.md)
- [schema/types.ts](../../schema/types.ts) - Asset definitions

## Success Criteria
- Audio assets load correctly
- Voice lines play when triggered
- Game works without audio (graceful degradation)
- All tests pass
