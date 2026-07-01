<script lang="ts">
	import { Alert, Stack, TableCell, TableRow } from '$lib/index.ts';
	import BaseSection from './BaseSection.svelte';
</script>

<BaseSection id="ALERT" sectionTitle="Alert">
	<Stack direction="column" gap="1rem" style="width: 100%;">
		<Alert title="INFO">// informational message</Alert>
		<Alert variant="success" title="SUCCESS">// operation completed</Alert>
		<Alert variant="warn" title="WARNING">// check your input</Alert>
		<Alert variant="danger" title="ERROR">// something went wrong</Alert>
	</Stack>
	{#snippet propsContent()}
		<TableRow>
			<TableCell>variant</TableCell>
			<TableCell>'info' | 'success' | 'warn' | 'danger'</TableCell>
			<TableCell>'info'</TableCell>
		</TableRow>
		<TableRow>
			<TableCell>title</TableCell>
			<TableCell>string (required)</TableCell>
			<TableCell>-</TableCell>
		</TableRow>
		<TableRow>
			<TableCell>size</TableCell>
			<TableCell>string | undefined</TableCell>
			<TableCell>undefined</TableCell>
		</TableRow>
		<TableRow>
			<TableCell>children</TableCell>
			<TableCell>Snippet</TableCell>
			<TableCell>undefined</TableCell>
		</TableRow>
	{/snippet}
</BaseSection>
