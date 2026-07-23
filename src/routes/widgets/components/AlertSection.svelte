<script lang="ts">
	import { Alert, Stack } from '$lib/index.ts';
	import BaseSection from './BaseSection.svelte';

	const usage = `<script>
  import { Alert } from 'mukade-ui';
<\/script>

<Alert variant="success" title="SYNC COMPLETE" />

<Alert variant="danger" title="CONNECTION LOST">
  retrying in 5s...
</Alert>`;

	const props = [
		{ p: 'variant', t: "'info' | 'success' | 'warn' | 'danger'", d: "'info'" },
		{ p: 'title', t: 'string', d: 'required' },
		{ p: 'width', t: 'string', d: '—' }
	];

	const notes = [
		'Each variant maps to a semantic status color; info/success render with role="status", warn/danger with role="alert".',
		'danger uses a filled scanline background and bold text so a lone danger alert reads as severe.',
		'An auto-selected icon (i, ✓, ⚠, !) precedes the title per variant.'
	];
</script>

<BaseSection
	id="ALERT"
	category="FEEDBACK"
	sectionTitle="Alert"
	description="A status message box with an icon, title, and optional body. Four status variants convey severity."
	{usage}
	{props}
	{notes}
>
	<Stack direction="column" gap="1rem" style="width: 100%;">
		<Alert title="INFO">// informational message</Alert>
		<Alert variant="success" title="SUCCESS">// operation completed</Alert>
		<Alert variant="warn" title="WARNING">// check your input</Alert>
		<Alert variant="danger" title="ERROR">// something went wrong</Alert>
	</Stack>
</BaseSection>
