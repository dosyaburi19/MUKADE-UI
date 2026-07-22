# Container

A minimal block wrapper that spans the full width of its parent and centers itself horizontally. Use it as an outermost page or section boundary.

## Import

```svelte
import { Container } from 'mukade-ui';
```

## Usage

```svelte
<Container style="max-width: 60rem;">
	<!-- page content -->
</Container>
```

## Props

| Prop       | Type      | Default | Description        |
| ---------- | --------- | ------- | ------------------ |
| `children` | `Snippet` | —       | Wrapped content.   |

All other `HTMLAttributes` (e.g. `class`, `style`) are forwarded to the root element.

## Notes

- Defaults to `width: 100%` with `margin: 0 auto`. Constrain it with `max-width` via `style`/`class`.
- Adds no padding or visual styling — it is purely structural.
