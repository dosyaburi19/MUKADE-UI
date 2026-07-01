<script lang="ts">
	import { Badge, Button, Divider, Stack, TableCell, TableRow } from '$lib/index.ts';
	import BaseSection from './BaseSection.svelte';
</script>

<BaseSection id="BADGE" sectionTitle="Badge">
	<Stack gap="1rem" wrap={true} align="center">
		<Badge label="NEW" />
		<Badge variant="idle" label="IDLE" />
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
	{#snippet propsContent()}
		<TableRow>
			<TableCell>variant</TableCell>
			<TableCell>'primary' | 'idle' | 'danger' | 'warn' | 'success'</TableCell>
			<TableCell>'primary'</TableCell>
		</TableRow>
		<TableRow>
			<TableCell>label</TableCell>
			<TableCell>string | undefined</TableCell>
			<TableCell>undefined</TableCell>
		</TableRow>
		<TableRow>
			<TableCell>count</TableCell>
			<TableCell>number | undefined</TableCell>
			<TableCell>undefined</TableCell>
		</TableRow>
		<TableRow>
			<TableCell>max</TableCell>
			<TableCell>number | undefined</TableCell>
			<TableCell>undefined</TableCell>
		</TableRow>
		<TableRow>
			<TableCell>position</TableCell>
			<TableCell>'top-left' | 'top-right' | 'bottom-left' | 'bottom-right'</TableCell>
			<TableCell>'top-right'</TableCell>
		</TableRow>
		<TableRow>
			<TableCell>children</TableCell>
			<TableCell>Snippet</TableCell>
			<TableCell>undefined</TableCell>
		</TableRow>
	{/snippet}
</BaseSection>
