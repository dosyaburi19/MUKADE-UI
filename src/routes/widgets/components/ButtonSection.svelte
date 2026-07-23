<script lang="ts">
	import { Button, Stack } from '$lib/index.ts';
	import BaseSection from './BaseSection.svelte';

	const usage = `<script>
  import { Button } from 'mukade-ui';
<\/script>

<Button variant="primary" onclick={submit}>[CONFIRM]</Button>
<Button variant="ghost" disabled>[CANCEL]</Button>
<Button width="100%" size="1.5rem">[BIG]</Button>`;

	const props = [
		{ p: 'variant', t: "'primary' | 'danger' | 'warn' | 'success' | 'ghost'", d: "'primary'" },
		{ p: 'size', t: 'string', d: '1rem' },
		{ p: 'width', t: 'string', d: 'fit-content' }
	];

	const notes = [
		'size controls font size (element scale); width controls horizontal length. They are separate axes.',
		'disabled dims the button and blocks the active-press transform.',
		'Every variant presses with a subtle scale(0.94) on :active.'
	];
</script>

<BaseSection
	id="BUTTON"
	category="INPUT"
	sectionTitle="Button"
	description="A clickable button with five color variants and independent size/width control. Extends all native button element attributes."
	{usage}
	{props}
	{notes}
>
	<Stack gap="1rem" wrap={true}>
		<Button variant="primary">[PRIMARY]</Button>
		<Button variant="ghost">[GHOST]</Button>
		<Button variant="danger">[DANGER]</Button>
		<Button variant="warn">[WARN]</Button>
		<Button variant="success">[SUCCESS]</Button>
	</Stack>
</BaseSection>
