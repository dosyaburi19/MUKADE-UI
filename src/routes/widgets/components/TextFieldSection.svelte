<script lang="ts">
	import { Stack, TextField } from '$lib/index.ts';
	import BaseSection from './BaseSection.svelte';

	let outlinedValue = $state('');
	let filledValue = $state('');

	const usage = `<script>
  import { TextField } from 'mukade-ui';
  let email = $state('');
<\/script>

<TextField label="EMAIL" type="email" bind:value={email} name="email" required />
<TextField variant="filled" label="PASSWORD" type="password" width="20rem" />`;

	const props = [
		{ p: 'variant', t: "'outlined' | 'filled'", d: "'outlined'" },
		{ p: 'type', t: 'string', d: "'text'" },
		{ p: 'label', t: 'string', d: '—' },
		{ p: 'placeholder', t: 'string', d: '—' },
		{ p: 'value', t: 'string', d: "''" },
		{ p: 'width', t: 'string', d: '100%' }
	];

	const css = [
		{
			p: '--mukade-textfield-accent',
			f: '--mukade-primary',
			d: 'Focused border/underline and label.'
		},
		{ p: '--mukade-textfield-bg', f: 'variant-dependent', d: 'Field background.' }
	];

	const notes = [
		"Supplying id is honored and kept in sync with the label's for; otherwise a stable SSR-safe id is generated.",
		'User onfocus/onblur handlers are preserved — internal focus tracking composes with, not replaces, yours.',
		'The label "types" one character at a time when it floats; unlabeled fields show the placeholder immediately.'
	];
</script>

<BaseSection
	id="TEXTFIELD"
	category="INPUT"
	sectionTitle="TextField"
	description="A labeled text input with a floating, terminal-style animated label. Comes in outlined and filled variants."
	{usage}
	{props}
	{css}
	{notes}
>
	<Stack gap="1.5rem" wrap={true}>
		<TextField label="USERNAME" placeholder="type here" bind:value={outlinedValue} width="14rem" />
		<TextField
			variant="filled"
			label="PASSWORD"
			type="password"
			bind:value={filledValue}
			width="14rem"
		/>
	</Stack>
</BaseSection>
