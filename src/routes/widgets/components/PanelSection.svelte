<script lang="ts">
	import { Button, Panel, Stack, Text } from '$lib/index.ts';
	import BaseSection from './BaseSection.svelte';

	const usage = `<script>
  import { Panel } from 'mukade-ui';
<\/script>

<Panel width="20rem" dots={{ index: 2, max: 3 }}>
  {#snippet header()}
    <span>SESSION</span>
  {/snippet}

  <!-- body -->

  {#snippet footer()}
    <Button>[CONFIRM]</Button>
  {/snippet}
</Panel>`;

	const props = [
		{ p: 'variant', t: "'primary' | 'soft-line'", d: "'primary'" },
		{ p: 'header', t: 'Snippet', d: '—' },
		{ p: 'footer', t: 'Snippet', d: '—' },
		{ p: 'width', t: 'string', d: 'fit-content' },
		{ p: 'dots', t: '{ index, max }', d: '—' }
	];

	const css = [
		{
			p: '--mukade-panel-accent',
			f: '--mukade-primary',
			d: 'Border, header/footer, and dot color.'
		},
		{ p: '--mukade-panel-bg', f: '--mukade-bg-soft', d: 'Panel background.' }
	];

	const notes = [
		'dots only render when a header snippet is present.',
		'Header/footer tint blends --mukade-panel-accent into --mukade-panel-bg, so both hooks compose cleanly.'
	];
</script>

<BaseSection
	id="PANEL"
	category="LAYOUT"
	sectionTitle="Panel"
	description="A framed card container with optional header/footer regions and a row of status dots. The staple building block for terminal-style windows."
	{usage}
	{props}
	{css}
	{notes}
>
	<Stack gap="1.5rem" wrap={true}>
		<Panel width="18rem">
			{#snippet header()}
				<Text size="1rem" font="vt" color="danger">SYSTEM</Text>
			{/snippet}
			<Text color="dim">// header + footer snippet</Text>
			{#snippet footer()}
				<Button variant="ghost">[OK]</Button>
			{/snippet}
		</Panel>
		<Panel width="18rem" dots={{ index: 2, max: 3 }}>
			{#snippet header()}
				<Text size="1rem" font="vt" color="danger">PROGRESS</Text>
			{/snippet}
			<Text color="dim">// header with dots indicator</Text>
		</Panel>
		<Panel width="18rem" variant="soft-line">
			<Text color="dim">// soft-line variant</Text>
		</Panel>
	</Stack>
</BaseSection>
