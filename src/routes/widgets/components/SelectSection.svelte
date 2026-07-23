<script lang="ts">
	import { Select, SelectOption } from '$lib/index.ts';
	import BaseSection from './BaseSection.svelte';

	let selected = $state('');

	const usage = `<script>
  import { Select, SelectOption } from 'mukade-ui';
  let region = $state('');
<\/script>

<Select bind:selected={region} placeholder="region">
  <SelectOption key="kr" label="KOREA" />
  <SelectOption key="jp" label="JAPAN" />
</Select>`;

	const props = [
		{ p: 'selected', t: 'string', d: "''" },
		{ p: 'open', t: 'boolean', d: 'false' },
		{ p: 'placeholder', t: 'string', d: '—' },
		{ p: 'width', t: 'string', d: '—' }
	];

	const css = [
		{ p: '--mukade-select-accent', f: '--mukade-primary', d: 'Trigger border, text, and arrow.' },
		{ p: '--mukade-select-bg', f: '--mukade-bg', d: 'Trigger and dropdown background.' },
		{ p: '--mukade-select-z-index', f: '10', d: 'Stacking order of the dropdown.' }
	];

	const notes = [
		'Provides context to child SelectOptions; use them rather than raw options.',
		'Outside-click and Escape listeners are attached only while open, and removed on close.',
		'Raise --mukade-select-z-index when the dropdown must sit above other stacked layers (e.g. inside a modal).',
		"SelectOption is required inside a Select — it registers its key/label on mount and follows the parent's accent/bg colors."
	];
</script>

<BaseSection
	id="SELECT"
	category="INPUT"
	sectionTitle="Select"
	description="A dropdown selector. Compose it with SelectOption children. Closes on outside click or the Escape key."
	{usage}
	{props}
	{css}
	{notes}
>
	<Select bind:selected placeholder="// SELECT" width="10rem">
		<SelectOption key="scan" label="[SCAN]" />
		<SelectOption key="build" label="[BUILD]" />
		<SelectOption key="deploy" label="[DEPLOY]" />
	</Select>
</BaseSection>
