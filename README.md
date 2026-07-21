# Mysthaven — The First Lesson

A guided tutorial build for the Mysthaven HTML game prototype.

This version redesigns the opening so the player learns object-magic attention from the bottom up through Serena's instruction. It then returns to the longer Version 2 progression after the player has demonstrated the foundation independently.

## The tutorial sequence

The player is taught through action rather than being given a glossary:

1. **Notice** — identify physical wear without interpreting it.
2. **Ask** — form a narrow question the object may actually be able to answer.
3. **Stay** — hold attention through the uneventful threshold into trace.
4. **Separate** — distinguish material observation, received trace and personal claim.
5. **Limit** — name what the evidence cannot establish.
6. **Practice** — repeat the complete process on the brass thimble with optional guidance.
7. **Independent test** — return to the five-object table and witness one more object without step-by-step prompting.

Every deeper interface state remains locked until the player has practised the discipline it represents.

## Player-experience principles

- Serena teaches for a practical reason: returning a child's lost object without treating the child's private fear as a collectible clue.
- Vocabulary follows experience. The game names a discipline after the player has performed it.
- Wrong choices receive specific in-world teaching rather than a generic failure message.
- The player may ask Serena for guidance during practice without being penalized.
- Gates explain what is missing and why it matters.
- The tutorial completes with competence, not mastery. Serena consistently distinguishes witnessing from knowing everything.

## Files

- `index.html` — page structure
- `styles.css` — responsive Art Nouveau interface and tutorial styling
- `script.js` — tutorial, object system and the longer game progression
- `assets/` — five generated object illustrations
- `PLAYTEST_GUIDE.md` — tutorial test checklist
- `PATCH_NOTES.md` — major changes from Version 2

## Run locally

Open `index.html` directly, or run a local server from this folder:

```bash
python3 -m http.server 8000
```

Then open:

```text
http://localhost:8000
```

## Publish with GitHub Pages

Upload the **contents of this folder** to the root of the GitHub repository so `index.html` is at the top level.

Then open:

**Repository Settings → Pages → Deploy from a branch → main → /(root)**

Existing GitHub Pages projects can be updated by replacing the previous `index.html`, `styles.css`, `script.js`, documentation files and `assets/` folder.

## Save compatibility

This build uses a new Version 3 browser-save key. It does not import Version 2 progress because the opening progression and foundational skill state have been redesigned.
