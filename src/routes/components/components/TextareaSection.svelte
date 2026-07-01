<script lang="ts">
	import { Stack, TableCell, TableRow, Textarea } from '$lib/index.ts';
	import BaseSection from './BaseSection.svelte';
</script>

<BaseSection id="TEXTAREA" sectionTitle="Textarea">
	<Stack gap="1rem" wrap={true}>
		<Textarea placeholder="// placeholder" width="10rem" />
		<Textarea placeholder="// placeholder" width="10rem" defaultText="defaultText" />
	</Stack>
	{#snippet propsContent()}
		<TableRow>
			<TableCell>width</TableCell>
			<TableCell>string | undefined</TableCell>
			<TableCell>undefined</TableCell>
		</TableRow>
		<TableRow>
			<TableCell>height</TableCell>
			<TableCell>string | undefined</TableCell>
			<TableCell>undefined</TableCell>
		</TableRow>
		<TableRow>
			<TableCell>text</TableCell>
			<TableCell>string</TableCell>
			<TableCell>''</TableCell>
		</TableRow>
		<TableRow>
			<TableCell>resizing</TableCell>
			<TableCell>boolean</TableCell>
			<TableCell>false</TableCell>
		</TableRow>
		<TableRow>
			<TableCell>placeholder</TableCell>
			<TableCell>string | undefined</TableCell>
			<TableCell>undefined</TableCell>
		</TableRow>

		<TableRow>
			<TableCell>defaultText</TableCell>
			<TableCell>string | undefined</TableCell>
			<TableCell>undefined</TableCell>
		</TableRow>
	{/snippet}
</BaseSection>
