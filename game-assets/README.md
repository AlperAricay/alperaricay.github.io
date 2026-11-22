# /game placeholder-replacement assets

Drop a file at any path below and reload — the game swaps from its
hand-drawn placeholder to your real art automatically. Nothing else needs to
change. This list is generated from `src/lib/game/assets.ts`'s `ASSET_MANIFEST`
(the actual source of truth — check there if this ever drifts).

Run `npm run dev` and open `/admin` for a live, in-browser version of this
same list with local preview and animation playback (dev-only, never ships
to production).

## Character (spritesheet, frames laid out left-to-right in one row)

| File | Frame size | Frames | Sheet size | FPS |
|---|---|---|---|---|
| `character-idle.png` | 72×128 | 4 | 288×128 | 6 |
| `character-attack.png` | 72×128 | 4 | 288×128 | 12 |
| `character-afk.png` | 72×128 | 2 | 144×128 | 2 |

## Rock (static)

| File | Size |
|---|---|
| `rock.png` | 96×56 |

Crack-stage damage overlays and the shake/squash hit-reaction stay
hand-drawn/procedural for now and layer on top of whatever's here.

## Background (static)

| File | Size |
|---|---|
| `background.png` | 480×640 (3:4 — matches the canvas's own aspect ratio) |

Replaces the sky/stars/ground gradient entirely.

## Pigeon (spritesheet)

| File | Frame size | Frames | Sheet size | FPS |
|---|---|---|---|---|
| `pigeon-flap.png` | 24×16 | 2 | 48×16 | 5 |

## UI icons (static, shown in the top HUD)

| File | Size |
|---|---|
| `ui-hope-icon.png` | 32×32 |
| `ui-hope-per-second-icon.png` | 32×32 |
| `ui-total-clicks-icon.png` | 32×32 |
