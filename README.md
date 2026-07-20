# Mysthaven — The Things We Carry

A browser-playable vertical-slice prototype exploring two forms of Mysthaven magic:

- **Object magic:** physical observation becomes partial trace; the player creates an interpretation and must answer for it.
- **Dream magic:** feeling, symbol and focus create pressure rather than factual messages; the receiver supplies meaning.

The game is built with plain HTML, CSS and JavaScript. It has no build step, framework, database or paid dependency.

## What is included

- Five Art Nouveau object illustrations
- Object inspection with material-evidence hotspots
- A hold-to-attend trace mechanic
- A journal of claims, learned distinctions and dream residue
- An irreversible **Repair Joins** perception skill
- A received dream sequence with waking anchors and a boundary choice
- A dream-composition system using feeling, symbol, focus and an optional exit anchor
- Consequences and several design-facing endings
- Local browser autosave
- Optional procedural rain ambience and interaction tones using the Web Audio API
- Responsive desktop/mobile layout

## File structure

```text
mysthaven-prototype/
├── index.html
├── styles.css
├── script.js
├── README.md
└── assets/
    ├── wooden-bird.png
    ├── thimble.png
    ├── buckle.png
    ├── button.png
    └── spoon.png
```

## Run locally

The simplest option is to open `index.html` in a modern browser.

A local web server is more reliable:

```bash
python3 -m http.server 8000
```

Then open:

```text
http://localhost:8000
```

## Publish with GitHub Pages

### Browser-only method

1. Sign into GitHub.
2. Create a new public repository, such as `mysthaven-game`.
3. Do **not** initialize it with starter files if you plan to upload the provided folder contents immediately.
4. Open the new repository and choose **Add file → Upload files**.
5. Drag the contents of the `mysthaven-prototype` folder into the upload area. Upload the files themselves, not an extra enclosing folder.
6. Confirm that `index.html` is visible at the repository root and the five images are inside an `assets` folder.
7. Enter a commit message such as `Add Mysthaven game prototype`, then choose **Commit changes**.
8. Open **Settings → Pages**.
9. Under **Build and deployment** choose:
   - **Source:** Deploy from a branch
   - **Branch:** `main`
   - **Folder:** `/ (root)`
10. Save. GitHub will display the published site URL after deployment.

The URL will usually look like:

```text
https://YOUR-USERNAME.github.io/mysthaven-game/
```

### Git command-line method

```bash
git init
git add .
git commit -m "Add Mysthaven game prototype"
git branch -M main
git remote add origin https://github.com/YOUR-USERNAME/mysthaven-game.git
git push -u origin main
```

Then enable GitHub Pages from the repository settings as described above.

## Updating the game

Edit `index.html`, `styles.css` or `script.js`, then commit the changed files to the same repository. GitHub Pages republishes after each push or browser-based commit.

## Save behavior

The prototype saves to `localStorage` in the player’s browser. Saves are specific to the browser and GitHub Pages URL. Clearing browser site data or using the in-game Reset control removes the save.

## Design note

The ending scores are not intended as a moral grading system. They expose the design pressures expressed during play: care, craft, courage, trespass and certainty.
