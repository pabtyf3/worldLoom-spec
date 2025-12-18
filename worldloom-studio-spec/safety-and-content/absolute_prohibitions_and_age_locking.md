# worldLoom Canonical Specification  
## Addendum: Content Safety, Age Locking & Absolute Prohibitions

---

## 44. Canonical Safety Model

This addendum formalizes **non-negotiable safety guarantees** for worldLoom.  
These rules are preventative, structural, and enforceable by construction.

---

## 45. Age Range Is Immutable After Content Exists

**Canonical rule:**  
👉 **Once content is authored under an Age Profile, the age range cannot be silently downgraded.**

This is not a UX preference.  
It is a **legal and ethical requirement**.

---

## 46. Age Profile Locking Model (Concrete)

### 46.1 Project Creation

When a Studio project is created:

- An **Age Profile** is selected  
- The profile becomes part of:
  - Project metadata  
  - StoryBundle metadata  
  - Validation rules  

Think of the Age Profile as a **compiler target**, not a tag.

---

### 46.2 Attempting to Change Age Profile (Hard Stop)

If an author attempts to **lower** the age range after content exists, the Studio must:

- Perform a **full content audit**  
- Detect all incompatible content  

If restricted content is found:

- A **hard modal** is shown  
- No auto-continue  
- Explicit confirmation is required  

**Illustrative wording:**

> ⚠️ **Content Incompatibility Detected**  
>  
> This story contains content that is not permitted for the selected age range.  
>  
> If you continue:  
> - All incompatible content will be **permanently removed**  
> - This action **cannot be undone**  
>  
> Do you wish to proceed?

No AI suggestions.  
No recommendations.  
This is a **mechanical operation**.

---

### 46.3 What “Removed” Means

Removal is:

- Deterministic  
- Auditable  
- Logged  

Examples include:

- Romance variables deleted  
- Relationship arcs collapsed to friendship  
- Scenes removed or rewritten to neutral variants  
- AI regeneration constrained to the new profile  

This protects:

- The platform  
- The author  
- Downstream distributors  

---

## 47. Content Filtering by Default

### 47.1 Two Categories of Restricted Content

There are **two distinct classes** of restriction.

#### A) Age-Dependent Restricted Content

Handled via **Age Profiles**:

- Romance  
- Sexual themes  
- Certain violence  
- Substance use  

#### B) Absolutely Prohibited Content (Global Ban)

Some content has **no valid age range**.

Examples include:

- Paedophilia  
- Sexual violence involving minors  
- Exploitative abuse  
- Extreme hate content  
- Explicit non-consensual sexual material  

This content:

- Cannot be authored  
- Cannot be generated  
- Cannot be imported  
- Cannot be overridden  

**Ever.**

---

## 48. Enforcement of Absolute Prohibitions

Absolute prohibitions are **not** enforced by AI judgment alone.

---

### 48.1 Structural Prohibition (Schema-Level)

Some concepts simply **do not exist** in the schema.

Examples:

- No field representing sexual interaction involving minors  
- No relationship type that permits it  
- No action category that could encode it  

If it cannot be represented, it cannot be stored.

---

### 48.2 Studio Validation Layer

On top of schema constraints, the Studio applies:

- Keyword detection  
- Pattern-based checks  
- Contextual validation (e.g. relationship state + age mismatch)  

If detected:

- Content cannot be saved  
- A clear error is shown  
- No override is possible  

---

### 48.3 AI Assistant Safeguards

The Studio AI:

- Is explicitly instructed to **refuse**  
- Does not reframe  
- Does not suggest alternatives  
- Does not “get creative”  

**Example response:**

> “I can’t help with this request.  
> This type of content is not supported by worldLoom.”

No loopholes.  
No workaround suggestions.

---

## 49. Prose Importer Safety (Critical)

The Prose Converter inherits **all safety rules**.

**Pipeline rule:**

> Imported prose is treated as **untrusted input**.

Therefore it is:

- Scanned  
- Flagged  
- Segmented  
- Rejected or redacted if prohibited content exists  

This is especially important for:

- Public domain works  
- User manuscripts  
- Historical texts with problematic material  

This protects the platform legally.

---

## 50. Why This Is Technically Feasible

This model is realistic because:

- You control the schema  
- You control the Studio  
- You control AI prompting  
- The engine is content-agnostic  

You are not moderating the internet —  
you are constraining what can exist **inside your system**.

That is a tractable problem.

---

## 51. Legal & Ethical Positioning

With this model, you can truthfully state:

- Age ranges are enforced structurally  
- Downgrades trigger destructive reconciliation  
- Certain content is impossible to author  
- AI cannot generate prohibited material  
- Safety is preventative, not reactive  

This aligns with regulator and platform expectations.

---

## 52. Where This Lives in the Spec (Non-Negotiable)

This material deserves a **Safety pillar**, not a footnote.

**Recommended structure:**

```
spec/
  safety/
    AGE_PROFILES.md
    AGE_PROFILE_LOCKING.md
    ABSOLUTE_PROHIBITIONS.md
    CONTENT_AUDIT_RULES.md
```

Referenced by:

- Studio  
- Prose Converter  
- AI Assistant  
- Validation layer  

---

*End of addendum.*
