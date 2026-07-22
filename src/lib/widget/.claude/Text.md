# Text

Themed terminal-style text with color, font, and CRT/LED display variants. Renders as any of several semantic tags via the `tag` prop.

## Import

```svelte
import { Text } from 'mukade-ui';
```

## Usage

```svelte
<Text tag="h1" color="primary" glow>SYSTEM ONLINE</Text>
<Text color="dim" size="0.8rem">last sync: 04:12</Text>
<Text variant="crt">scanline text</Text>
```

## Props

| Prop       | Type                                                          | Default     | Description                                                             |
| ---------- | ------------------------------------------------------------- | ----------- | ---------------------------------------------------------------------- |
| `tag`      | `'p' \| 'span' \| 'h1' \| 'h2' \| 'h3' \| 'h4' \| 'label' \| 'small'` | `'p'`       | The rendered HTML element.                                             |
| `variant`  | `'led' \| 'crt'`                                              | `'led'`     | `'crt'` applies a scanline gradient clipped to the glyphs.             |
| `glow`     | `boolean`                                                     | `false`     | Adds a soft text-shadow glow in the current color.                     |
| `color`    | `'default' \| 'dim' \| 'primary' \| 'success' \| 'warn' \| 'danger'` | `'default'` | Semantic text tone. `default` uses the base text color.               |
| `font`     | `'vt' \| 'mono'`                                              | `'vt'`      | Font family: `vt` (VT323) or `mono` (Share Tech Mono).                 |
| `size`     | `string`                                                      | `1rem`      | CSS `font-size`.                                                       |
| `spacing`  | `string`                                                      | `0.2rem`    | CSS `letter-spacing`.                                                  |
| `align`    | `'start' \| 'left' \| 'center' \| 'right' \| 'end' \| 'justify'` | `'left'`    | CSS `text-align`.                                                      |
| `children` | `Snippet`                                                     | —           | Text content.                                                         |

All other `HTMLAttributes` (e.g. `class`, `style`, `id`) are forwarded to the root element.

## CSS Custom Properties

| Property                | Falls back to                | Description                                              |
| ----------------------- | ---------------------------- | ------------------------------------------------------- |
| `--mukade-text-accent`  | the `color` variant's tone   | Overrides the resolved color for any variant, including `crt` scanlines and `glow`. |

```svelte
<Text color="warn" style="--mukade-text-accent: cyan">recolored warning</Text>
```

## Notes

- `--mukade-text-accent` inherits. Setting it on an ancestor recolors every descendant `<Text>`.
- Because `crt` and `glow` derive from `currentColor`, the accent flows into the scanline and shadow automatically.
