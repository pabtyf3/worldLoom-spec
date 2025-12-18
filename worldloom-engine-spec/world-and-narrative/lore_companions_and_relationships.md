# worldLoom Canonical Specification  
## Addendum: Lore, Companions, Relationships & Session Scope

---

## 31. Lore — Implicit in World, or Separate?

**Decision:**  
👉 **Lore is a first-class system that lives *within* the World spec, not alongside it.**

---

### 31.1 Why Lore Is Not Merely Implicit

Lore was discussed extensively in relation to:

- Deep historical context  
- Factions and belief systems  
- Investigation-based narratives (Holmes-style)  
- Educational annotation  

If lore is treated as “just text attached to things,” you lose:

- Discoverability  
- Gating and progression  
- Investigative mechanics  
- Correct narrative framing  

**Correct model:**

- **World = container**  
- **Lore = structured knowledge inside the world**

---

### 31.2 Lore Design Requirements

Lore must be:

- Structured  
- Addressable  
- Revealable  
- Referenceable by scenes, actions, factions, and characters  

---

### 31.3 Practical Lore Model (Headline)

Lore entries:

- Have stable IDs  
- Have categories (e.g. history, rumor, doctrine, biography)  
- May be:
  - Known  
  - Discoverable  
  - Hidden  

Lore may unlock:

- Actions  
- Scene branches  
- Companion dialogue  

This matches prior discussions, even where the term “lore” was not always explicit.

---

## 32. Companion Mechanics

### 32.1 What Companions Are

**Decision:**  
👉 **Companions are entities with agency, not just characters.**

They were discussed in terms of:

- Party-based play  
- Reactive companions  
- Relationship dynamics  
- Non-player influence on outcomes  

---

### 32.2 Where Companions Live

Companions are:

- Characters  
- With state  
- With relationship variables  
- Potentially with autonomous actions  

They sit at the intersection of:

- World  
- Ruleset  
- Narrative  

**Critical distinction:**

> Companions are *not* AI DMs.  
> They are rule-bound narrative actors.

---

### 32.3 Schema Implications (Headline)

Companions may define:

- Role (combat, narrative, support)  
- Disposition toward the player  
- Relationship metrics  
- Participation rules (when they speak or act)  

These connect cleanly to:

- Lore (shared or withheld knowledge)  
- Romance (see below)  
- Faction alignment  

---

## 33. Multiplayer Scope (Web Sessions)

### 33.1 Framing Multiplayer Correctly

**Decision:**  
👉 Multiplayer is *possible*, but not foundational.

Discussed ideas included:

- Shared sessions  
- Web-based delivery  
- Asynchronous participation  

Counterbalanced by strong priorities:

- Determinism  
- Offline-first operation  
- Simplicity  

---

### 33.2 Correct Mental Model

Multiplayer should be treated as:

- A **session orchestration layer**  
- **Not** a narrative rewrite  

Likely supported models:

- Shared party decisions  
- Turn-based choice aggregation  
- Spectator / co-reader modes  

---

### 33.3 Spec-Level Decision

Multiplayer is:

- Not required for v1.0  
- Must not violate determinism  
- Must not assume real-time, twitch-based input  

**Schema implication (headline only):**

- Explicit session state  
- Player roles  
- Action arbitration  

No full implementation is required at this stage.

---

## 34. Romance & Ren’Py-Style Content

### 34.1 Should worldLoom Support Romance?

**Decision:**  
👉 **Yes — structurally, not thematically.**

worldLoom should not be:

- A “romance engine”

But it must be able to:

- Express relationship dynamics  
- Model affinity  
- Gate content on emotional state  

These are foundational to many narrative genres.

---

### 34.2 Is Romance a Separate System?

**Decision:**  
👉 **No. Romance is a specialization of relationship mechanics.**

Existing systems already include:

- Factions  
- Disposition  
- Lore  
- Companions  

Romance represents:

- High-resolution personal relationship state  
- With narrative consequences  

---

### 34.3 Clean Mental Model

- **Factions** → macro relationships  
- **Companions** → personal actors  
- **Romance** → personal relationship arcs  

Structurally:

- Same mechanics  
- Different narrative focus  

---

### 34.4 Contrast With Ren’Py

**Ren’Py:**

- Script-driven  
- Flag-based  
- Often hardcoded routes  

**worldLoom:**

- Data-driven  
- State-based  
- Ruleset-mediated  

This enables:

- Romance, rivalry, trust, betrayal using shared primitives  
- Educational, mystery, and romance narratives sharing systems  

---

### 34.5 Schema Implications (Headline)

Required primitives:

- Relationship variables (numeric or symbolic)  
- Relationship thresholds  
- Narrative triggers based on relationship state  

No romance-specific hardcoding is introduced.

This preserves:

- Tone-neutral core  
- Market flexibility  
- Educational safety  

---

## 35. Final Classification (Canonical)

| Concept | Where It Lives |
|-------|---------------|
| Lore | World (explicit subsystem) |
| Factions | World |
| Companions | World + Ruleset |
| Relationships / Romance | World + Ruleset |
| Multiplayer | Session layer (not core narrative) |
| Ren’Py-style narratives | Presentation + content, not engine |

---

*End of addendum.*
