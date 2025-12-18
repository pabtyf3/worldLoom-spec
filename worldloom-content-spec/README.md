# worldLoom-content Specification

This directory contains all specifications relevant to the **worldLoom-content** repository - example content bundles, presentation profiles, and media assets.

## Directory Structure

### [presentation-profiles/](presentation-profiles/)
Multi-market design and presentation systems
- Presentation profile definitions
- Multi-market design principles
- Output targeting (audiobook, interactive, educational, etc.)
- Player-side output selection

### [media-and-assets/](media-and-assets/)
Audio, voice, imagery, and asset management
- Asset management system
- Audio strategies (TTS, pre-recorded, hybrid)
- Voice characteristics and metadata
- Asset abstraction and references

## Key Principles

1. **Multi-market by design** - Same content projects to multiple delivery contexts
2. **Presentation separation** - Narrative content ≠ presentation
3. **Audio abstraction** - Multiple audio strategies supported
4. **Player choice** - Players can choose how they consume stories
5. **Reusability** - Single StoryBundle supports multiple presentation profiles

## Supported Markets

- Interactive fiction / games
- Audiobooks
- Author self-publishing
- Children's books & bedtime stories
- Education & learning tools
- Accessibility-first experiences
- Hands-free / audio-first play (e.g., in-car)

## Presentation Profiles

Example profiles:
- `interactive-game` - Full interactivity and player agency
- `audiobook-linear` - Linear audio consumption
- `bedtime-story` - Gentle pacing, reduced complexity
- `educational-guided` - Instructor-defined paths, explanatory narration
- `handsfree-audio` - Hands-free, audio-first interaction

## Related Repositories

- **worldLoom-engine** - Engine runtime implementation
- **worldLoom-studio** - Content authoring tools
- **worldLoom-content** - Example content bundles (this spec)
- **worldLoom-ai** - AI integration and generation tools
