# Mysthaven Version 2
## The House With One Locked Door

A longer browser-playable vertical slice exploring object magic, dream magic, learned attention, gated access, consent, and consequence.

The prototype is a static site made with HTML, CSS, and vanilla JavaScript. It requires no build process, package manager, API key, database, or paid hosting.

## What Version 2 adds

### Longer progression

The game now moves through a complete sequence:

1. Investigate five ordinary objects.
2. Reach partial object traces.
3. Record both a claim and the trace's limitation.
4. Earn **Witnessing** through three accountable investigations.
5. Earn **Repair Joins** by comparing two kinds of repair.
6. Earn **Pattern Reading** through object comparison.
7. Earn **Stillness** through a timing-based attention exercise.
8. Earn **Sequence Tracing** by reconstructing habit, rupture, and aftermath.
9. Apply all five disciplines to Serena's locked door.
10. Investigate Elwin's ashwood box using several attention methods.
11. Earn waking anchors before deliberately entering a dream.
12. Navigate dream routes whose states are locked behind prior disciplines.
13. Compose or refuse a dream-pressure response.
14. Reach one of several consequence-based endings.

### Gated access

The player cannot simply click through to every state.

Locked states name what is missing. Examples:

- Object trace is locked until all material details are observed.
- **Witnessing** is locked until the player records three accountable claim/limit pairs.
- Repair states are locked until **Repair Joins** is demonstrated.
- The quiet-object state is locked until comparative attention is completed.
- The locked room requires five distinct ways of attending.
- The ashwood box requires four applied methods and Witnessing.
- The dream requires three waking anchors.
- Tracing a dream route without entering it requires all four anchors plus Sequence Tracing.
- Several dream-composer options remain unavailable unless their source discipline was earned.

### Attention mechanics

- visual hotspot observation;
- held attention to cross from evidence into trace;
- explicit selection of what a trace cannot establish;
- comparative object pairing;
- repair-method interpretation;
- a timed stillness exercise;
- causal sequence ordering;
- multi-method inspection gates;
- waking-anchor identification;
- gated dream navigation;
- dream composition with feeling, symbol, focus, and an optional interruptible exit.

## Files

```text
mysthaven-v2-prototype/
├── index.html
├── styles.css
├── script.js
├── README.md
├── PLAYTEST_GUIDE.md
└── assets/
    ├── wooden-bird.png
    ├── thimble.png
    ├── buckle.png
    ├── button.png
    └── spoon.png
```

## Run locally

Opening `index.html` directly in a modern browser should work.

A small local server is recommended during development:

```bash
python3 -m http.server 8000
```

Then open:

```text
http://localhost:8000
```

## Publish with GitHub Pages

1. Create a public GitHub repository, such as `mysthaven-v2`.
2. Open the extracted `mysthaven-v2-prototype` folder.
3. Upload the **contents** of the folder to the repository root.
4. Confirm that `index.html`, `styles.css`, and `script.js` are visible at the repository root.
5. Commit the files.
6. Open the repository's **Settings**.
7. Select **Pages**.
8. Under **Build and deployment**, choose **Deploy from a branch**.
9. Choose the `main` branch and `/ (root)` folder.
10. Save and wait for GitHub to provide the public Pages address.

The final address will generally resemble:

```text
https://YOUR-USERNAME.github.io/mysthaven-v2/
```

## Saves

The game uses browser `localStorage` to autosave progress. Saves are specific to the browser and device being used. The **Reset** button clears the local playthrough.

## Test status

- JavaScript syntax check passed.
- Static asset references checked.
- A complete automated browser playthrough passed from the title screen through the highest-access dream path and the **Accountable Attention** ending.
- No JavaScript runtime errors were reported during that playthrough.

## Design principle

> Magic is an intensification of something people already do.

Version 2 adds a companion principle:

> Access is earned through attention. Ownership is not.

## Version 2.1.1 patch

This package includes the kitchen-table interaction fix. Object cards use persistent click delegation, older Version 2 saves are migrated automatically, and static assets are cache-busted for GitHub Pages. See `PATCH_NOTES.md`.
