<script lang="ts">
	import { Checkbox, Divider, Stack, TableCell, TableRow } from '$lib/index.ts';
	import BaseSection from './BaseSection.svelte';

	let isIndeterminate = $state(false);
</script>

<BaseSection id="CHECKBOX" sectionTitle="Checkbox">
	<Stack gap="1rem" wrap={true} style="width: 100%;">
		<Checkbox />
		<Checkbox label="label" />
		<Checkbox disabled />
		<Checkbox label="label" disabled />
	</Stack>
	<Divider label="indeterminate" />
	<Stack gap="1rem">
		<Checkbox bind:checked={isIndeterminate} label="root" />
		<Checkbox indeterminate={isIndeterminate} />
		<Checkbox indeterminate={isIndeterminate} size="1.3rem" label="label" />
		<Checkbox indeterminate={isIndeterminate} disabled />
	</Stack>
	{#snippet propsContent()}
		<TableRow>
			<TableCell>label</TableCell>
			<TableCell>string</TableCell>
			<TableCell>undefined</TableCell>
		</TableRow>
		<TableRow>
			<TableCell>checked</TableCell>
			<TableCell>boolean</TableCell>
			<TableCell>false</TableCell>
		</TableRow>
		<TableRow>
			<TableCell>indeterminate</TableCell>
			<TableCell>boolean</TableCell>
			<TableCell>false</TableCell>
		</TableRow>
		<TableRow>
			<TableCell>disabled</TableCell>
			<TableCell>boolean</TableCell>
			<TableCell>false</TableCell>
		</TableRow>
		<TableRow>
			<TableCell>size</TableCell>
			<TableCell>string | undefined</TableCell>
			<TableCell>undefined</TableCell>
		</TableRow>
		<TableRow>
			<TableCell>others</TableCell>
			<TableCell>HTMLInputAttributes</TableCell>
			<TableCell>-</TableCell>
		</TableRow>
	{/snippet}
</BaseSection>
