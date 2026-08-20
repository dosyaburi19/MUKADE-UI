# Alert

A status message box with an icon, title, and optional body. Four status variants convey severity. The `danger` variant is visually heavier to stand out on its own.

## Import

```svelte
import {Alert} from 'mukade-ui';
```

## Usage

```svelte
<Alert variant="success" title="SYNC COMPLETE" />

<Alert variant="danger" title="CONNECTION LOST">retrying in 5s...</Alert>
```

## Props

| Prop       | Type                                        | Default  | Description                              |
| ---------- | ------------------------------------------- | -------- | ---------------------------------------- |
| `variant`  | `'info' \| 'success' \| 'warn' \| 'danger'` | `'info'` | Status severity and color.               |
| `title`    | `string`                                    | —        | **Required.** Bold heading line.         |
| `width`    | `string`                                    | —        | Fixes the alert width (otherwise fluid). |
| `children` | `Snippet`                                   | —        | Optional detail body under the title.    |

All other `HTMLAttributes` are forwarded to the root element.

## CSS Variables

`Alert` exposes no per-widget accent hook. Each variant reads global theme tokens directly, so retheming the palette retints every alert at once.

| Variant   | Border / text      | Background source             |
| --------- | ------------------ | ----------------------------- |
| `info`    | `--mukade-primary` | `--mukade-dim` at 10%         |
| `danger`  | `--mukade-primary` | `--mukade-primary` at 15%     |
| `warn`    | `--mukade-warn`    | `--mukade-warn-dim` at 10%    |
| `success` | `--mukade-success` | `--mukade-success-dim` at 10% |

The body text uses `--mukade-text-dim`, and the widget renders in `--mukade-font-vt`.

## Notes

- Each variant maps to a semantic status color; `info`/`success` render with `role="status"`, `warn`/`danger` with `role="alert"`.
- `danger` uses a filled scanline background and bold text so a lone danger alert reads as severe without side-by-side comparison.
- An auto-selected icon (`i`, `✓`, `⚠`, `!`) precedes the title per variant.
- Setting `width` switches the alert from fluid (min-width `20rem`) to a fixed width.
