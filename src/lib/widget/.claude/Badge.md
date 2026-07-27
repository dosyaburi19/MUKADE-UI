# Badge

A small status indicator. Renders as a standalone **tag** when used without children, or as an **overlay** anchored to a corner of wrapped content (e.g. an avatar or icon).

## Import

```svelte
import { Badge } from 'mukade-ui';
```

## Usage

```svelte
<!-- Tag form -->
<Badge variant="success" label="ONLINE" />

<!-- Overlay form -->
<Badge count={12} max={9} position="top-right">
	<Avatar name="K" />
</Badge>
```

## Props

| Prop       | Type                                                       | Default       | Description                                                        |
| ---------- | ---------------------------------------------------------- | ------------- | ----------------------------------------------------------------- |
| `variant`  | `'primary' \| 'ghost' \| 'danger' \| 'warn' \| 'success'`  | `'primary'`   | Color scheme. `danger` is filled; the rest are outlined.          |
| `label`    | `string`                                                   | —             | Text content. Ignored when `count` is provided.                   |
| `count`    | `number`                                                   | —             | Numeric content. Takes priority over `label`.                     |
| `max`      | `number`                                                   | —             | Caps `count`; values above render as `{max}+`.                    |
| `position` | `'top-left' \| 'top-right' \| 'bottom-left' \| 'bottom-right'` | `'top-right'` | Corner placement (overlay form only).                           |
| `children` | `Snippet`                                                  | —             | When present, switches to overlay form and wraps this content.    |

All other `HTMLAttributes` are forwarded to the root element.

## CSS Custom Properties

| Property                | Falls back to               | Description                                                       |
| ----------------------- | --------------------------- | ---------------------------------------------------------------- |
| `--mukade-badge-accent` | the `variant` color         | Recolors the badge. For outline variants it sets border + text; for the filled `danger` variant it sets background + border (text stays dark for contrast). |

```svelte
<Badge variant="warn" label="A" style="--mukade-badge-accent: cyan" />
```

## Notes

- `--mukade-badge-accent` inherits — setting it on an ancestor recolors all descendant badges.
- The overlay item has `pointer-events: none` and never intercepts clicks on wrapped content.
