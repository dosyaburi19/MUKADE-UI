<script lang="ts">
	import { Avatar, Stack } from '$lib/index.ts';
	import BaseSection from './BaseSection.svelte';

	const usage = `<script>
  import { Avatar } from 'mukade-ui';
<\/script>

<Avatar profile="/me.png" name="KAEDE" sub="operator" online />

<!-- Custom status indicator via children -->
<Avatar name="K">
  <span>●</span>
</Avatar>`;

	const props = [
		{ p: 'profile', t: 'string', d: '—' },
		{ p: 'online', t: 'boolean', d: 'false' },
		{ p: 'name', t: 'string', d: '—' },
		{ p: 'sub', t: 'string', d: '—' },
		{ p: 'size', t: 'string', d: '3rem' }
	];

	const css = [
		{ p: '--mukade-avatar-accent', f: '--mukade-primary', d: 'Border and fallback-initial color.' }
	];

	const notes = [
		'The profile area keeps a 1 / 1 aspect ratio at any size.',
		'--mukade-avatar-accent inherits; scope it to a single avatar via style if needed.'
	];
</script>

<BaseSection
	id="AVATAR"
	category="PRIMITIVE"
	sectionTitle="Avatar"
	description="Displays a user's profile image with an optional online-status dot and name/subtitle block. Falls back to the first letter of name when no image is set."
	{usage}
	{props}
	{css}
	{notes}
>
	<Stack gap="1.5rem" wrap={true} align="center">
		<Avatar name="MUKADE" />
		<Avatar name="MUKADE" online />
		<Avatar name="MUKADE" sub="@mukade" />
		<Avatar name="MUKADE" sub="online now" online size="4rem" />
	</Stack>
</BaseSection>
