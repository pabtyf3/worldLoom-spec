# worldLoom Canonical Specification  
## Addendum: Age Ranges & Content Safety

---

## 36. Age Range Is a First-Class Constraint (Must-Have)

**Canonical decision:**  
👉 **Age range must be explicitly declared and must actively constrain authoring.**

This cannot be:

- An optional tag  
- A warning label  
- A “best effort” guideline  

It must be **structural**.

---

## 37. Where This Lives (Critical)

❌ **Not runtime**  
The engine does not decide what is “appropriate.”

❌ **Not AI judgment**  
AI must not infer safety.

✅ **Studio-level constraint + schema declaration**

This provides:

- Legal safety  
- Predictable behavior  
- Enforceability  
- Auditability  

---

## 38. Age Profile (Core Concept)

Introduce an **Age Profile** (also called **Audience Profile**).

This is selected when a project is created in Studio.

**Example profiles:**

- `early-childhood` (2–6)  
- `children` (7–12)  
- `young-teen` (13–15)  
- `teen` (16–17)  
- `adult` (18+)  

The Age Profile is:

- Immutable for the project (or extremely hard to change)  
- Embedded in StoryBundle metadata  
- Enforced by Studio tooling  

---

## 39. What the Age Profile Controls

### 39.1 Content Feature Gating

Based on the Age Profile, the Studio:

**Allows:**

- Certain scene types  
- Certain action categories  
- Certain relationship mechanics  

**Disables entirely:**

- Romance mechanics  
- Sexualized relationship variables  
- Adult themes  
- Complex moral ambiguity (for lower ranges)  

**Illustrative example:**

| Feature | 2–6 | 7–12 | 13–15 | 18+ |
|------|:--:|:---:|:----:|:--:|
| Romance mechanics | ❌ | ❌ | ⚠️ (light) | ✅ |
| Companion intimacy | ❌ | ❌ | ⚠️ | ✅ |
| Violence | ❌ | ⚠️ | ⚠️ | ✅ |
| Educational prompts | ✅ | ✅ | ⚠️ | ❌ |

> The engine never sees this table.  
> **The Studio enforces it.**

---

### 39.2 Schema-Level Constraints

Age Profiles affect which fields are even available.

For example:

- Relationship variables may not exist at all in a 2–6 project  
- Scene actions related to romance cannot be authored  
- The Studio AI is forbidden from suggesting restricted content  

**Key principle:**

> You cannot accidentally author what the schema does not permit.

---

## 40. Studio AI: Safety by Construction

The Studio AI must be **Age Profile–aware**.

When an Age Profile is set, AI context includes:

- Declared age range  
- Explicitly disallowed themes  
- Tone and complexity expectations  

The AI is instructed to:

- Refuse generating restricted content  
- Suggest age-appropriate alternatives  

**Example instruction:**

> “This project targets ages 2–6.  
> Do not introduce romance, attraction, or adult emotional dependency.”

This protects against:

- Accidental violations  
- “AI got creative” failures  
- Legal exposure  

---

## 41. Relationship Systems Under Age Constraints

This resolves romance questions cleanly.

For children’s content, relationships exist as:

- Friendship  
- Trust  
- Familiarity  
- Cooperation  

They explicitly exclude:

- Attraction  
- Intimacy  
- Emotional dependency mechanics  

**Same system. Different allowed dimensions.**

This keeps the model:

- Elegant  
- Consistent  
- Safe  

---

## 42. Player-Side Enforcement (Secondary)

Player applications must:

- Respect the StoryBundle’s declared Age Profile  
- Refuse incompatible presentation modes  
- Avoid exposing toggles that violate constraints  

However:

> **The player is not the primary gatekeeper.**  
> **The Studio is.**

---

## 43. Legal & Platform Safety Rationale

This design provides:

- Clear author intent  
- Preventative enforcement  
- An audit trail via StoryBundle metadata  
- A defensible compliance position  

You can truthfully state:

> “The platform structurally prevents this class of content from being created.”

That matters.

---

*End of addendum.*
