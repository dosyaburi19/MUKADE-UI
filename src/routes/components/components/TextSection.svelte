<script lang="ts">
	import { Stack, Text, TableCell, TableRow } from '$lib/index.ts';
	import BaseSection from './BaseSection.svelte';
</script>

<BaseSection id="TEXT" sectionTitle="Text">
	<Stack direction="column" gap="0.3rem" style="width: 100%;">
		<Text color="primary">// primary color</Text>
		<Text color="dim">// dim color</Text>
		<Text color="danger">// danger color</Text>
		<Text color="warn">// warn color</Text>
		<Text color="success">// success color</Text>
	</Stack>
	<Stack gap="1.5rem" wrap={true} align="center">
		<Text font="mono" glow={false}>mono font</Text>
		<Text variant="led" font="vt" size="1.5rem">vt font</Text>
		<Text tag="h2" size="2rem" spacing="0.1rem">heading</Text>
	</Stack>
	{#snippet propsContent()}
		<TableRow>
			<TableCell>tag</TableCell>
			<TableCell>'p' | 'span' | 'h1' | 'h2' | 'h3' | 'h4' | 'label' | 'small'</TableCell>
			<TableCell>'p'</TableCell>
		</TableRow>
		<TableRow>
			<TableCell>variant</TableCell>
			<TableCell>'crt' | 'led'</TableCell>
			<TableCell>'led'</TableCell>
		</TableRow>
		<TableRow>
			<TableCell>glow</TableCell>
			<TableCell>boolean</TableCell>
			<TableCell>false</TableCell>
		</TableRow>
		<TableRow>
			<TableCell>color</TableCell>
			<TableCell>'primary' | 'dim' | 'danger' | 'success' | 'warn'</TableCell>
			<TableCell>'primary'</TableCell>
		</TableRow>
		<TableRow>
			<TableCell>font</TableCell>
			<TableCell>'mono' | 'vt'</TableCell>
			<TableCell>'vt'</TableCell>
		</TableRow>
		<TableRow>
			<TableCell>size</TableCell>
			<TableCell>string</TableCell>
			<TableCell>'1rem'</TableCell>
		</TableRow>
		<TableRow>
			<TableCell>spacing</TableCell>
			<TableCell>string</TableCell>
			<TableCell>'0.2rem'</TableCell>
		</TableRow>
		<TableRow>
			<TableCell>align</TableCell>
			<TableCell>'start' | 'left' | 'center' | 'right' | 'end' | 'justify'</TableCell>
			<TableCell>'left'</TableCell>
		</TableRow>
		<TableRow>
			<TableCell>others</TableCell>
			<TableCell>HTMLAttributes</TableCell>
			<TableCell>-</TableCell>
		</TableRow>
	{/snippet}
</BaseSection>
