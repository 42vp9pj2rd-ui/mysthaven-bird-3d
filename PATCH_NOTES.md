# Mysthaven Version 2.1.1 — Kitchen Table Fix

This patch fixes an issue where the five objects on Serena's kitchen table could appear but fail to open.

## Changes

- Object-card clicks now use a persistent delegated event handler that survives scene re-rendering.
- Existing Version 2 browser saves are normalized and repaired before use.
- Missing object-state fields are restored automatically instead of causing a click-time JavaScript error.
- `styles.css` and `script.js` use cache-busting version parameters so GitHub Pages browsers fetch the patch immediately.

## Updating GitHub Pages

Upload and overwrite these files at minimum:

- `index.html`
- `script.js`
- `styles.css`

Uploading the complete patched folder is recommended.

After GitHub finishes deploying, refresh the game. A normal refresh should load the versioned files; a hard refresh can be used if necessary.

The patch attempts to preserve current Version 2 progress. If a particularly old or corrupted save still behaves strangely, select **Reset** in the game header once.
