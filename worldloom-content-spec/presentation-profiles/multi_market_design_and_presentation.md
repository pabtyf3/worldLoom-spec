# worldLoom Canonical Specification  
## Addendum: Markets, Presentation & Media Outputs

---

## 19. Multi-Market Design Intent (Foundational)

**worldLoom is not a single-market engine.**  
It is a content system capable of projecting the same narrative into multiple delivery contexts.

**Target markets include:**

- Interactive fiction / games  
- Audiobooks  
- Author self-publishing  
- Children’s books & bedtime stories  
- Education & learning tools  
- Accessibility-first experiences  
- Hands-off / audio-first play (e.g. in-car)  

This intent must be reflected **at the schema level**, not just in UX.

---

## 20. Presentation as a First-Class Concept

### 20.1 Separation of Concerns (Critical)

A hard rule implied across many discussions:

> **Narrative content ≠ presentation**

Therefore:

- Story logic lives in the engine  
- Presentation lives in profiles and modes  
- Audio, text, and visuals are projections — not core content  

---

### 20.2 Presentation Profiles

Introduce the concept of a **Presentation Profile**.

A profile defines:

- Target medium  
- Interaction level  
- Audio strategy  
- Pacing constraints  

**Examples:**

- `interactive-game`  
- `audiobook-linear`  
- `bedtime-story`  
- `educational-guided`  
- `handsfree-audio`  

Profiles may be selected:

- In Studio (author intent)  
- In Player (consumer preference)  
- Or both, with overrides  

---

## 21. Output Targeting (Schema Implications)

### 21.1 StoryBundle Output Compatibility

A **StoryBundle** may declare:

- Supported presentation profiles  
- Optional profile-specific overrides  

This avoids:

- Forking content  
- Copy/paste variants  
- “Special editions” becoming separate stories  

---

### 21.2 Scene-Level Adaptation

Scenes may optionally define:

- Alternative narration lengths  
- Simplified prose variants  
- Child-friendly phrasing  
- Educational annotations  

These are **parallel representations**, not branches in logic.

---

## 22. Audio System (Expanded & Formalised)

Audio was discussed repeatedly and deeply — this section makes it explicit.

### 22.1 Audio Is Not Monolithic

Audio support must handle multiple strategies simultaneously:

- Fully narrated TTS  
- Pre-recorded voice acting  
- Hybrid (TTS + recorded highlights)  
- Silent / text-only  
- Accessibility-enhanced narration  

The engine does **not** care how audio is produced — only what is available.

---

### 22.2 Audio Assets & References

Narrative elements may reference audio assets **abstractly**:

- Scene narration  
- NPC dialogue  
- Ambient sound  
- Transitional cues  

Assets may be:

- Referenced by ID  
- Optional  
- Replaceable at runtime  

This supports:

- Localization  
- Voice packs  
- Creator-provided recordings  
- Platform-specific constraints  

---

### 22.3 Voice Characteristics (Not Hardcoded Voices)

Voice is treated as **metadata**, not a binding decision.

Examples include:

- Tone  
- Age range  
- Accent hint  
- Emotional register  

This allows:

- Swappable TTS providers  
- Pre-recorded substitution  
- Accessibility tuning  

---

## 23. Author & Publisher Workflows

### 23.1 Author Releasing into Multiple Media

A single author may:

- Write once  
- Publish as:
  - Interactive story  
  - Audiobook  
  - Children’s book  
  - Educational module  

worldLoom supports this via:

- A shared StoryBundle  
- Multiple presentation profiles  
- Studio-level output configuration  

---

### 23.2 New & Self-Publishing Authors

Key affordances:

- Opinionated structure  
- AI assistance as editor  
- Validation as guardrail  
- Low technical barrier  

The Studio is intentionally positioned as:

> **“A narrative compiler for non-engineers”**

---

## 24. Education & Children’s Content

These markets impose hard constraints that directly affect schema design.

### 24.1 Children’s Content

Requirements discussed:

- Simplified language variants  
- Reduced branching complexity  
- Gentle pacing  
- Optional interactivity  
- Audio-first consumption  

This argues for:

- Scene complexity metadata  
- Optional simplified narration fields  
- Presentation profile enforcement  

---

### 24.2 Educational Use

Educational content may require:

- Guided progression  
- Explanatory narration  
- Reflection prompts  
- Reduced randomness  

Rulesets and presentation profiles must support:

- Constrained interaction  
- Predictable outcomes  
- Instructor-defined paths  

---

## 25. Player-Side Output Selection

A deliberate design decision:

> **The player may choose how they consume the story.**

Therefore, the Player app may:

- Override presentation profile  
- Toggle audio modes  
- Choose interaction depth  

As long as:

- The StoryBundle declares compatibility  
- Core narrative logic remains intact  

---

## 26. Schema Impact Summary (Important)

These ideas directly imply the need for:

- Presentation profile definitions  
- Scene-level narration variants  
- Audio reference abstractions  
- Optional complexity / suitability metadata  
- Clear separation of logic vs delivery  

This is why they must live in the spec.

---

## 27. Consolidated Vision (Re-stated)

**worldLoom is:**

- A narrative system  
- A publishing pipeline  
- A learning tool  
- An accessibility platform  
- A foundation for AI-assisted storytelling  

All from **one structured source of truth**.
