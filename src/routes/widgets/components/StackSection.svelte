<script lang="ts">
	import { Button, Stack, Text } from '$lib/index.ts';
	import BaseSection from './BaseSection.svelte';

	const usage = `<script>
  import { Stack } from 'mukade-ui';
<\/script>

<Stack direction="column" gap="0.5rem" align="stretch">
  <Button>[A]</Button>
  <Button>[B]</Button>
</Stack>`;

	const props = [
		{ p: 'direction', t: "'row' | 'column'", d: "'row'" },
		{ p: 'gap', t: 'string', d: '—' },
		{ p: 'align', t: "'start' | 'center' | 'end' | 'stretch'", d: "'start'" },
		{ p: 'justify', t: "'start' | 'center' | 'end' | 'between' | 'around'", d: "'start'" },
		{ p: 'wrap', t: 'boolean', d: 'false' }
	];

	const notes = [
		'align and justify use friendly keywords that map to the corresponding flexbox values.'
	];
</script>

<BaseSection
	id="STACK"
	category="LAYOUT"
	sectionTitle="Stack"
	description="A flexbox layout primitive for arranging children in a row or column with gap, alignment, and wrapping control."
	{usage}
	{props}
	{notes}
>
	<Stack direction="column" gap="1rem" style="width: 100%;">
		<Text color="dim">// direction="row" (default)</Text>
		<Stack gap="0.5rem">
			<Button variant="ghost">[A]</Button>
			<Button variant="ghost">[B]</Button>
			<Button variant="ghost">[C]</Button>
		</Stack>
		<Text color="dim">// direction="column"</Text>
		<Stack direction="column" gap="0.5rem">
			<Button variant="ghost">[A]</Button>
			<Button variant="ghost">[B]</Button>
		</Stack>
		<Text color="dim">// justify="between"</Text>
		<Stack justify="between" style="width: 100%;">
			<Button variant="ghost">[LEFT]</Button>
			<Button variant="ghost">[RIGHT]</Button>
		</Stack>
	</Stack>
</BaseSection>
