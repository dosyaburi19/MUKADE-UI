<script lang="ts">
	import { Button, Stack, Text, TableCell, TableRow } from '$lib/index.ts';
	import BaseSection from './BaseSection.svelte';
</script>

<BaseSection id="STACK" sectionTitle="Stack">
	<Stack direction="column" gap="1rem" style="width: 100%;">
		<Text color="dim">// direction="row" (default)</Text>
		<Stack gap="0.5rem">
			<Button variant="ghost">[A]</Button>
			<Button variant="ghost">[B]</Button>
			<Button variant="ghost">[C]</Button>
		</Stack>
		<Text color="dim">// direction="column"</Text>
		<Stack direction="column" gap="0.5rem">
			<Button variant="ghost">[A]</Button>
			<Button variant="ghost">[B]</Button>
		</Stack>
		<Text color="dim">// justify="between"</Text>
		<Stack justify="between" style="width: 100%;">
			<Button variant="ghost">[LEFT]</Button>
			<Button variant="ghost">[RIGHT]</Button>
		</Stack>
	</Stack>
	{#snippet propsContent()}
		<TableRow>
			<TableCell>direction</TableCell>
			<TableCell>'row' | 'column'</TableCell>
			<TableCell>'row'</TableCell>
		</TableRow>
		<TableRow>
			<TableCell>gap</TableCell>
			<TableCell>string | undefined</TableCell>
			<TableCell>undefined</TableCell>
		</TableRow>
		<TableRow>
			<TableCell>align</TableCell>
			<TableCell>'start' | 'center' | 'end' | 'stretch'</TableCell>
			<TableCell>'start'</TableCell>
		</TableRow>
		<TableRow>
			<TableCell>justify</TableCell>
			<TableCell>'start' | 'center' | 'end' | 'between' | 'around'</TableCell>
			<TableCell>'start'</TableCell>
		</TableRow>
		<TableRow>
			<TableCell>wrap</TableCell>
			<TableCell>boolean</TableCell>
			<TableCell>false</TableCell>
		</TableRow>
		<TableRow>
			<TableCell>others</TableCell>
			<TableCell>HTMLAttributes</TableCell>
			<TableCell>-</TableCell>
		</TableRow>
	{/snippet}
</BaseSection>
