## 14. Prose Converter (Import Pipeline)

The **Prose Converter** is a core Studio feature, not a bolt-on.

### 14.1 Purpose

The Prose Converter allows existing written works to be:

- Imported into Studio  
- Analysed structurally  
- Converted into:
  - Audiobooks  
  - Interactive fiction  
  - Adventure game StoryBundles  

This applies to:

- Public domain works  
- Original manuscripts  
- Draft fiction  

---

### 14.2 Conceptual Pipeline

```
Raw Prose
   ↓
Structural Analysis
   ↓
World & Narrative Extraction
   ↓
Spec-Constrained Conversion
   ↓
Editable StoryBundle Draft
```

**Key insight:**

> The AI does not “understand the story” — it maps prose into spec-defined affordances.

---

### 14.3 Extracted Concepts

The converter identifies and proposes:

- Locations (explicit or implied)  
- Characters  
- Temporal progression  
- Scene boundaries  
- Action opportunities  
- Investigative moments (critical for Sherlock-style works)  

These are **suggestions**, not commitments.

---

### 14.4 WorldSpec as Constraint

The converter operates within a **WorldSpec**, either:

- An existing world  
- Or a generated draft world  

All output must fit:

- Location types  
- Lore categories  
- Ruleset constraints  

**Critical rule:**

> The AI adapts prose to the world — not the world to the prose.

---

## 15. Audiobook & Adventure Game Duality

### 15.1 Shared Backbone

Audiobooks and adventure games share:

- Scenes  
- Narration  
- World structure  
- Temporal flow  

They differ in:

- Interactivity level  
- Action availability  
- Player agency  

---

### 15.2 Studio Output Modes

The Studio supports multiple presentation targets from the same StoryBundle:

- Linear audiobook  
- Light interactivity (e.g. “choose pace / focus”)  
- Full adventure game  

This reinforces:

- Reusability  
- Accessibility  
- Hands-off audio play  

---

## 16. AI as a Spec Enforcer

A key design insight: the Studio AI helps prevent bad content.

The AI may:

- Warn when scenes are overloaded  
- Flag missing transitions  
- Suggest splitting narrative into valid units  
- Identify ambiguity in player actions  

This makes the Studio:

- Educational  
- Opinionated  
- Consistent  

Especially valuable for:

- New writers  
- Game narrative learners  
- Public domain conversions  

---

## 17. Relationship to Phase 3 AI DM

This is where the long-term payoff appears.

**Studio AI:**

- Trains authors  
- Produces clean data  
- Learns how content is structured  

**Phase 3 AI DM:**

- Consumes that structure  
- Generates within it  
- Never needs to guess formats  

This continuity is intentional.

---

## 18. Updated Studio Summary (Consolidated)

The Studio is:

- A world editor  
- A narrative structuring tool  
- A prose converter  
- A spec tutor  
- An AI-assisted authoring environment  

The Studio is not:

- A runtime  
- A game engine  
- A freeform AI playground  
