<script lang="ts">
	import { ScrollArea, Stack, Text } from '$lib/index.ts';
	import BaseSection from './BaseSection.svelte';

	const lines = Array.from({ length: 20 }, (_, i) => i + 1);

	const usage = `<script>
  import { ScrollArea } from 'mukade-ui';
<\/script>

<ScrollArea maxHeight="20rem" variant="sticky">
  {#snippet header()}
    <Text>LOG</Text>
  {/snippet}

  <!-- long content -->
</ScrollArea>`;

	const props = [
		{ p: 'maxHeight', t: 'string', d: '—' },
		{ p: 'maxWidth', t: 'string', d: '—' },
		{ p: 'variant', t: "'sticky' | 'hide' | 'natural'", d: "'sticky'" },
		{ p: 'header', t: 'Snippet', d: '—' }
	];

	const css = [
		{
			p: '--mukade-scrollarea-accent',
			f: '--mukade-primary',
			d: 'Scrollbar thumb and header underline color.'
		}
	];

	const notes = [
		'The native scrollbar is hidden; a synthetic thumb tracks the viewport and updates via a ResizeObserver.',
		'hide retracts the header as you scroll down and restores it as you scroll up; natural lets it scroll away with the content.',
		"This very sidebar and the docs pane you're reading are each an independent ScrollArea — scroll one without moving the other."
	];
</script>

<BaseSection
	id="SCROLLAREA"
	category="LAYOUT"
	sectionTitle="ScrollArea"
	description="A vertical overflow container with a custom terminal-style scrollbar and an optional sticky header that can react to scroll direction."
	{usage}
	{props}
	{css}
	{notes}
>
	<ScrollArea maxHeight="12rem" maxWidth="22rem">
		{#snippet header()}
			<Text size="1rem" font="vt" color="danger" style="padding: 0.5rem;">// LOG</Text>
		{/snippet}
		<Stack direction="column" gap="0.4rem" style="padding: 0.5rem;">
			{#each lines as line (line)}
				<Text color="dim">// line {line}</Text>
			{/each}
		</Stack>
	</ScrollArea>
</BaseSection>
