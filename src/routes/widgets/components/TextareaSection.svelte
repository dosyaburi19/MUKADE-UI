<script lang="ts">
	import { Stack, Textarea } from '$lib/index.ts';
	import BaseSection from './BaseSection.svelte';

	const usage = `<script>
  import { Textarea } from 'mukade-ui';
  let note = $state('');
<\/script>

<Textarea placeholder="log entry..." bind:value={note} width="24rem" height="8rem" resizing />`;

	const props = [
		{ p: 'value', t: 'string', d: "''" },
		{ p: 'width', t: 'string', d: '12rem' },
		{ p: 'height', t: 'string', d: '7rem' },
		{ p: 'resizing', t: 'boolean', d: 'false' }
	];

	const css = [
		{ p: '--mukade-textarea-accent', f: '--mukade-primary', d: 'Border and scrollbar color.' },
		{ p: '--mukade-textarea-bg', f: '--mukade-bg-inset', d: 'Textarea background.' }
	];

	const notes = ['resizing defaults to false (fixed size); set it to allow manual resizing.'];
</script>

<BaseSection
	id="TEXTAREA"
	category="INPUT"
	sectionTitle="Textarea"
	description="A multi-line text input with configurable size, an optional resize handle, and a custom scrollbar."
	{usage}
	{props}
	{css}
	{notes}
>
	<Stack gap="1rem" wrap={true}>
		<Textarea placeholder="// placeholder" width="10rem" />
		<Textarea placeholder="// resizable" width="10rem" resizing />
	</Stack>
</BaseSection>
