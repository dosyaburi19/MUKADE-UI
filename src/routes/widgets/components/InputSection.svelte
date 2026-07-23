<script lang="ts">
	import { Input, Stack } from '$lib/index.ts';
	import BaseSection from './BaseSection.svelte';

	const usage = `<script>
  import { Input } from 'mukade-ui';
  let name = $state('');
<\/script>

<Input placeholder="username" bind:value={name} />
<Input variant="filled" type="password" placeholder="password" />`;

	const props = [
		{ p: 'variant', t: "'outlined' | 'filled' | 'none'", d: "'outlined'" },
		{ p: 'type', t: "'text' | 'password' | 'number' | 'email' | 'search'", d: "'text'" },
		{ p: 'value', t: 'string | number', d: "''" }
	];

	const css = [
		{ p: '--mukade-input-accent', f: '--mukade-primary', d: 'Border and caret color.' },
		{ p: '--mukade-input-bg', f: '--mukade-bg', d: 'Input background.' }
	];

	const notes = [':focus brightens the border via --mukade-bright; :disabled mutes background and border.'];
</script>

<BaseSection
	id="INPUT"
	category="INPUT"
	sectionTitle="Input"
	description="A single-line text input with outlined, filled, or borderless variants. Two-way bindable via value."
	{usage}
	{props}
	{css}
	{notes}
>
	<Stack gap="1rem" wrap={true}>
		<Input type="text" placeholder="// text type" style="width: 10rem;" />
		<Input type="email" placeholder="// email type" />
		<Input type="password" placeholder="// password type" />
		<Input variant="filled" placeholder="// filled variant" />
		<Input variant="none" placeholder="// none variant" />
	</Stack>
</BaseSection>
