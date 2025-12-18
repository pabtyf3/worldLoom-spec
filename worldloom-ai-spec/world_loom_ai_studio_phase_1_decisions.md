# WorldLoom AI Studio – Phase 1 Decisions

This document captures **agreed architectural and design decisions** made during early Phase 1 planning for WorldLoom’s *Studio-side AI tooling*.  
Its purpose is to prevent loss of intent, reduce future re-litigation, and serve as a stable reference for implementation.

---

## 1. Core Philosophy

- AI is **infrastructure**, not an author.
- AI assists with *structure, validation, and continuity*, not creative ownership.
- Small, focused, swappable models are preferred over general-purpose LLMs.
- Offline-first and desktop-embeddable constraints are first-class requirements.

---

## 2. AI Capability Split (Studio Side)

AI functionality is intentionally split into **independent capability modules**, each with a narrow responsibility and clear contract.

### 2.1 Prose Importer

**Purpose**  
Convert existing prose (e.g. chapters) into *structured canonical proposals* aligned with WorldLoom schemas.

**Key characteristics**
- Extractive, not generative
- Incremental and conservative
- Never mutates canon directly
- Produces proposals requiring human confirmation

**Responsibilities**
- Identify characters and accumulate traits over time
- Identify primary locations per prose chunk
- Extract dialogue and attribute speakers (with confidence)
- Propose lore facts as candidate additions or updates
- Flag potential decision / branching points

**Non-goals**
- Writing prose
- Inventing lore
- Resolving ambiguity silently

---

### 2.2 Studio Assistant AI

**Purpose**  
Provide guidance, validation, and explanation to creators working in the Studio.

**Key characteristics**
- Continuity-aware
- Canon-respecting
- Advisory, not authoritative

**Responsibilities**
- Explain schema fields and concepts
- Flag inconsistencies or contradictions
- Suggest plausible next steps *without writing content*
- Help interpret importer output

**Explicit exclusions**
- No direct story generation
- No canon mutation

---

### 2.3 Audio Capabilities

Handled as a **media subsystem**, not narrative AI.

**Components**
- Text-to-speech (deterministic, local-first)
- Ambient / environmental sound (procedural or asset-based)

**Notes**
- Audio is additive and optional
- Quality tiers may vary by platform

---

### 2.4 Image Generation (Optional)

- Treated as a plug-in capability
- Never required for core workflows
- Assets must be fully replaceable by the author

---

## 3. Project-Centric Canon Model

All AI modules operate within a **Project → Story hierarchy**, which acts as the single source of truth.

### 3.1 Project

Represents a persistent narrative world or series.

Contains:
- Global summary
- Genre / sub-genre
- Canonical characters, factions, locations
- Tone and narrative constraints
- High-level timeline (loose)

---

### 3.2 Story

Represents an individual narrative within a Project.

Contains:
- Synopsis
- Entry assumptions
- Possible outcomes / branches
- Canon-impacting events
- Optional inheritance rules from prior stories

Stories **inherit canon** from the Project, optionally modified by prior story outcomes.

---

### 3.3 Save / Outcome Data

- Player outcomes are treated as *save-like data*
- May be weighted (e.g. 80% chose branch A)
- Used as guidance for future stories, not hard canon unless promoted

---

## 4. Author-Provided Intent Metadata

Before prose import, authors may supply **structured intent data** to guide extraction.

Examples:
- High-level story flow / acts
- Known characters and locations
- Declared constraints (e.g. linear story, unreliable narrator)

**Purpose**
- Reduce inference error
- Anchor extraction
- Turn AI into a verifier rather than a guesser

Conflicts between intent and prose must be **flagged**, not resolved automatically.

---

## 5. Prose Importer – Operational Model

### 5.1 Input
- Prose chunks (chapters or sections)
- Project context
- Optional Story context
- Author intent metadata

---

### 5.2 Output

Importer produces **Proposed Changes**, not direct mutations:
- Entity creation or updates
- Lore additions
- Dialogue attribution records
- Potential decision points

Each proposal includes:
- Source text reference
- Confidence score
- Explicit vs inferred marker

---

### 5.3 Guardrails

- No silent guessing
- No destructive updates
- No creative embellishment

Canonical state changes only occur after **human confirmation**.

---

## 6. Strategic Notes

- This structure supports Phase 3 on-device AI DM without contamination from Studio tooling behaviour.
- Data generated here doubles as high-quality future training material.
- The system prioritises correctness and trust over speed or novelty.

---

*End of captured decisions – Phase 1 Studio AI*

