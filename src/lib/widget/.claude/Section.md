# Section

A semantic content block with an optional terminal-style title row (prefixed with a `>` marker). Renders as `<section>` by default, or another semantic tag.

## Import

```svelte
import { Section } from 'mukade-ui';
```

## Usage

```svelte
<Section>
	{#snippet title()}
		<Text tag="h2">DIAGNOSTICS</Text>
	{/snippet}

	<!-- section body -->
</Section>
```

## Props

| Prop       | Type                                                          | Default     | Description                            |
| ---------- | ------------------------------------------------------------ | ----------- | -------------------------------------- |
| `tag`      | `'section' \| 'div' \| 'article' \| 'aside' \| 'header' \| 'footer'` | `'section'` | Rendered semantic element.             |
| `title`    | `Snippet`                                                    | —           | Title content, shown with a `>` prefix.|
| `children` | `Snippet`                                                    | —           | Section body.                          |

All other `HTMLAttributes` except `title` are forwarded to the root element. (`title` is a snippet here, not the HTML attribute.)

## Notes

- The `>` prefix bar uses `--mukade-primary` for its accent border and text.
