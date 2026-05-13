# Roadmap

Captures the deferred items from the UX/UI review pass following the v2.2.0 course-structure release. Ordered by suggested priority. Each item has motivation, sketch, effort estimate, and dependencies.

Status legend:

- 🟢 **READY** — well-specced, no blockers, pick and ship
- 🟡 **NEEDS DESIGN** — direction agreed but details to nail down
- 🔵 **DEFERRED** — sized correctly but waiting on content volume or another item
- 🔴 **MAJOR** — large enough to warrant its own release planning session

---

## 0. Dutch/English visual differentiation in prose · 🔴 MAJOR — v3.0 candidate

**Problem:** mixed-language content (Dutch words inside English explanations, pattern examples that combine Dutch sentences with English translations) doesn't visually distinguish the two languages. The reader's brain has to context-switch without a cue, fatiguing comprehension.

**Tried and reverted in v2.3.0 (don't repeat):** A naive single-quote regex (`/'([^']+?)'/g`) failed because English contractions (`weren't`, `you've`, `don't`, `it's`) contain apostrophes that the regex paired with subsequent Dutch tokens, styling whole sentences of English as Dutch. The mistake is captured in the `[reverted]` commits for reference.

**Proposed approach for v3.0 (the "intensive option"):**

Two layers, planned together:

1. **Pattern examples become structured `{nl, en, note?}` objects.** Renderer renders NL/EN as a two-column split (matches the rule-level examples pattern, minus mono font). Plain strings keep working for pure-English commentary, pure-Dutch lines, and bullets. No regex on apostrophes — the field tag is the source of truth.

2. **Inline Dutch tokens in prose fields** (`explanation`, `memory`, `shortcut`, anatomy `note`/`caption`) use **backticks** as the markup convention — unambiguous, no collision with English contractions. Renderer styles backticked spans distinctively. Single quotes stay as natural-language quoting for English meta-references.

**Scope estimate:**
- Schema + renderer changes: ~2 hours
- Content migration: ~300-400 example strings across ~30 files for pattern examples (case-by-case judgment), plus a sweep through prose fields to backtick Dutch tokens
- A second sweep for QA — checking each rule page renders correctly
- Realistic total: a half-day to a full day of focused work

**Why v3.0:** This is a content schema change. Pattern examples shift from "flexible strings" to "structured bilingual objects" as the dominant form. That's a meaningful enough architectural shift to warrant the major-version bump and a dedicated planning session.

**Dependencies:** none. Independent of the other roadmap items.

**Open design questions for the v3.0 planning session:**
- Exact visual style for the NL/EN split (color, weight, separators, mobile layout)
- Exact visual style for backtick-wrapped Dutch tokens (subtle highlight, color, weight)
- Whether to migrate all content in one PR or roll out rule-by-rule
- Whether `practice[]` (chat dialogue) and woordjes also need this treatment, or just rules

---

## 1. Bidirectional cross-links · 🟢 READY

**Problem:** today `relatedRules` is one-directional and manual. Leerpad 5A lists Inversion in its "See Also", but Inversion doesn't list Leerpad 5A. A learner on the grammar rule page has no way to discover which lessons use it.

**Sketch:**
- Add a helper to `src/lib/content.js`:
  ```js
  export function getReferencedBy(targetId) {
    const refs = [];
    for (const r of _ruleIndex.values()) {
      if (Array.isArray(r.relatedRules) && r.relatedRules.includes(targetId)) {
        refs.push({ rule: r, path: _routeFor(r), kind: r.kind });
      }
    }
    return refs;
  }
  ```
- Render an auto-derived "Where this rule is used" section on `Rule.jsx` pages (both grammar and leerpad), beneath the existing "See also" block.
- Reuse the existing `RelatedRules.jsx` card styling — could refactor that component to accept a `mode: 'manual' | 'inbound'` prop, or build a tiny `InboundReferences.jsx` sibling.

**Effort:** ~30 minutes. One helper, one component, two render-site additions. No content edits needed.

**Dependencies:** none.

---

## 2. Progress tracking via localStorage · 🟡 NEEDS DESIGN

**Problem:** 60+ content pieces with no sense of what you've completed. Returning learners can't tell where they left off.

**Sketch:**
- New `ProgressProvider` in `src/providers/`, similar to `ThemeProvider` / `LanguageProvider`. Holds a `Set<string>` of completed rule/test IDs in `localStorage.progress`.
- Mark complete: either (a) explicit checkbox on each rule/test page, (b) auto-mark on scroll-to-bottom, or (c) auto-mark on test-pass-with-≥80%. **Recommendation: (c) for tests + (a) for everything else** — automatic where there's a natural success signal, explicit elsewhere.
- Display: small checkmark badge next to completed items on the Course module page, Leerpad index, Grammar/Reference/Uitspraak lists. Per-module completion % on the Course index page.
- Optional: an "Export progress" button that downloads a JSON file (useful before clearing browser data).

**Design questions to resolve before building:**
1. Per-rule granularity, or per-leerpad (any rule complete = whole leerpad complete)?
2. Show progress globally on the landing page, or only inside the Course module pages?
3. Reset-progress affordance — required if we ship this, but where does it live?

**Effort:** ~2 hours. Provider + UI checkbox component + integration on ~6 list pages.

**Dependencies:** Course structure (already shipped — anchors the per-module % display).

---

## 3. Global search · 🔵 DEFERRED

**Problem:** with 60+ content pieces a learner can't quickly find a specific topic. The woordjes search exists but doesn't cover grammar or lessons.

**Sketch:**
- Command-palette modal triggered by `Cmd/Ctrl-K` (and a 🔍 button in the top nav for non-keyboard users).
- Indexes: rule titles (nl + en), tags, the first line of `explanation`, and woordjes `words[].nl` / `words[].en`. Build the index at module load — single pass over all content pools.
- Fuse.js for fuzzy matching, or hand-roll a simple substring + acronym match if we want to avoid the dependency. **Recommendation: hand-rolled — the corpus is small enough.**
- Results grouped by kind (Lessons / Grammar / Vocabulary / Tests), keyboard-navigable, Enter to follow.

**Why deferred:** highest ROI but biggest build. Worth ~4 hours; only pays back once content roughly doubles or learners report not finding things. Revisit at v3.x.

**Dependencies:** none, but progress tracking (#2) interacts — a result-list could show ✓ for completed items.

---

## 4. Revision sheets per module · 🟡 NEEDS DESIGN

**Problem:** at the end of a 3-4 week module, a learner wants a one-page summary of the key takeaways before moving on. Today they have to re-scroll multiple rule pages.

**Sketch (option A — terse JSON per module):**
- New `src/content/revision/module-3.json` files, mirroring the course module IDs.
- Schema sketch:
  ```json
  {
    "id": "module-3",
    "key_sentences": [
      { "nl": "Het is half drie.", "en": "It is 2:30. (NOT 3:30 — half = halfway TO!)" }
    ],
    "common_mistakes": [
      "❌ 'half twee' for 2:30 → ✅ 'half drie' (halfway to three)"
    ],
    "rule_summary": [
      { "rule": "Time prepositions", "summary": "om = clock · op = day/date · in = period" }
    ],
    "quick_test": [
      { "q": "How do you say 2:30?", "options": [...], "answer": 1 }
    ]
  }
  ```
- New page `/course/:moduleId/revise` renders these compactly.
- A **Cumulative revision** mode at `/course/revise` unions everything through the user's "completed up to" point (requires #2 progress tracking).

**Sketch (option B — derived from existing content):**
- Don't add new content; instead generate the revision sheet by extracting `shortcut` + `memory` fields from every rule referenced by the module.
- Pro: zero authoring overhead. Con: less curated.

**Recommendation:** option A. The curatorial step is the whole value — distilling 10 rules into 5 sentences is exactly the cognitive work a revision sheet should do for you.

**Effort:** ~1 hour for the schema/page, plus ~30 minutes per module to author the revision content. So building the system is fast, populating it is the longer tail.

**Dependencies:** course structure (✅ shipped).

---

## 5. Landing-page "Start here" CTA polish · ✅ DONE

Shipped in v2.2.0 as part of the course release. The green "Follow the course" card now sits above the four pillars on `/`.

Kept in this file for completeness; remove this entry on next roadmap update.

---

## 6. `relatedWoordjes` field + auto-derived `usedIn` for woordjes · 🟢 READY

**Problem:** vocabulary is currently orphaned from the lesson graph. A learner reading Leerpad 4A (weather) has to manually navigate to the woordjes/weather category to drill the words.

**Sketch:**
- Add optional `relatedWoordjes: ["weather", "places"]` field to leerpad rules (and possibly grammar rules where vocab is relevant).
- Resolve through a small extension of `getRelatedRules` — or a sibling `getRelatedWoordjes` — pointing at `/woordjes/<id>`.
- Reuse the `RelatedRules` card UI; the emoji + color from the woordjes category make them visually distinct.
- Auto-derived: on the woordjes Category page, show "Used in:" with the back-links — same `getReferencedBy` pattern as #1.

**Effort:** ~45 minutes. Helper + UI block on woordjes pages + adding the field to ~15 leerpad rules.

**Dependencies:** #1 (the `getReferencedBy` pattern) — both items naturally pair into one PR.

---

## 7. Mobile UX audit · 🟡 NEEDS DESIGN

**Problem:** the app was built desktop-first. The grammar tab strip (Rules / Reference / Uitspraak) plus the dropdown nav structure haven't been smoke-tested on real small screens.

**Sketch:**
- Open every top-level page on a real mobile device (or DevTools at 375px width).
- Check specifically: the three Grammar tabs fit; the leerpaden dropdown is reachable; pattern blocks expand/collapse without breaking layout; the search modal (when shipped) works with a soft keyboard.
- Likely fixes: convert tabs to a select on `< sm`; convert dropdowns to a full-screen modal on `< sm`; tighten the rule-page padding.

**Effort:** ~1 hour exploration + however much fixing the findings takes.

**Dependencies:** none.

---

## 8. Chunk-size monitoring (deferred from v2.1.0) · 🔵 DEFERRED

Already flagged in `vite.config.js`. Bundle is ~580KB raw / ~182KB gzip after the course release. Revisit when bundle approaches ~1MB gzip — either bump `chunkSizeWarningLimit` or code-split routes via `React.lazy` + dynamic `import.meta.glob`.

**Dependencies:** none.

---

## Suggested batching

If you've got an evening:

- **Quick combo:** items #1 + #6 — they share the `getReferencedBy` infrastructure. ~75 minutes total.
- **Bigger session:** item #2 (progress tracking). ~2 hours, includes the design decisions called out above.
- **Content session:** item #4 (revision sheets). System is ~1 hour, then ~30 min per module on whatever cadence feels right.

Items #3, #7, #8 are sized correctly but worth waiting on — either dependent on content growth (#3, #8) or on having real device feedback (#7).
