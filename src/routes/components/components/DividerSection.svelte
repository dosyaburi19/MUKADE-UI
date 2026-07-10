<script lang="ts">
	import { Divider, Stack, TableCell, TableRow } from '$lib/index.ts';
	import BaseSection from './BaseSection.svelte';
</script>

<BaseSection id="DIVIDER" sectionTitle="Divider">
	<Stack direction="column" gap="1rem" style="width: 100%;">
		<Divider />
		<Divider label="LABEL" weight="3px" />
	</Stack>
	<Divider label="vertical" />
	<Stack gap="1.5rem" style="height: 10rem;">
		<Divider orientation="vertical" />
		<Divider orientation="vertical" label="VERT" size="1.2rem" />
	</Stack>
	{#snippet propsContent()}
		<TableRow>
			<TableCell>orientation</TableCell>
			<TableCell>'horizontal' | 'vertical'</TableCell>
			<TableCell>'horizontal'</TableCell>
		</TableRow>
		<TableRow>
			<TableCell>variant</TableCell>
			<TableCell>'solid' | 'dashed' | 'dotted'</TableCell>
			<TableCell>'solid'</TableCell>
		</TableRow>
		<TableRow>
			<TableCell>label</TableCell>
			<TableCell>string | undefined</TableCell>
			<TableCell>undefined</TableCell>
		</TableRow>
	{/snippet}
</BaseSection>
