<script lang="ts">
	import { Badge, Button, Divider, Stack } from '$lib/index.ts';
	import BaseSection from './BaseSection.svelte';

	const usage = `<script>
  import { Badge } from 'mukade-ui';
<\/script>

<!-- Tag form -->
<Badge variant="success" label="ONLINE" />

<!-- Overlay form -->
<Badge count={12} max={9} position="top-right">
  <Avatar name="K" />
</Badge>`;

	const props = [
		{ p: 'variant', t: "'primary' | 'ghost' | 'danger' | 'warn' | 'success'", d: "'primary'" },
		{ p: 'label', t: 'string', d: '—' },
		{ p: 'count', t: 'number', d: '—' },
		{ p: 'max', t: 'number', d: '—' },
		{ p: 'position', t: "'top-left' | 'top-right' | 'bottom-left' | 'bottom-right'", d: "'top-right'" }
	];

	const css = [
		{
			p: '--mukade-badge-accent',
			f: 'the variant color',
			d: 'Recolors the badge. Outline variants set border+text; filled danger sets background+border (text stays dark).'
		}
	];

	const notes = [
		'--mukade-badge-accent inherits — setting it on an ancestor recolors all descendant badges.',
		'The overlay item has pointer-events: none and never intercepts clicks on wrapped content.'
	];
</script>

<BaseSection
	id="BADGE"
	category="PRIMITIVE"
	sectionTitle="Badge"
	description="A small status indicator. Renders as a standalone tag, or as an overlay anchored to a corner of wrapped content."
	{usage}
	{props}
	{css}
	{notes}
>
	<Stack gap="1rem" wrap={true} align="center">
		<Badge label="NEW" />
		<Badge variant="ghost" label="GHOST" />
		<Badge variant="danger" label="LIVE" />
		<Badge variant="warn" label="WARN" />
		<Badge variant="success" label="OK" />
	</Stack>
	<Divider label="overlay + count" />
	<Stack gap="2.5rem" wrap={true} align="center">
		<Badge count={5}>
			<Button variant="ghost">[INBOX]</Button>
		</Badge>
		<Badge count={120} max={99} variant="danger">
			<Button variant="ghost">[ALERTS]</Button>
		</Badge>
	</Stack>
</BaseSection>
