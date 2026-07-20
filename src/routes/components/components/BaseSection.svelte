<script lang="ts">
	import { Panel, Section, Stack, Table, Text } from '$lib/index.ts';
	import Button from '$lib/widget/input/Button.svelte';
	import type { Snippet } from 'svelte';

	interface Props {
		id: string;
		sectionTitle: string;
		children: Snippet<[]>;
		propsContent: Snippet<[]>;
	}
	let { id, sectionTitle, children, propsContent }: Props = $props();

	let isOpen = $state(false);

	function toggleOpenPropsPanel() {
		isOpen = !isOpen;
	}
</script>

<Section {id} style="padding-block:5rem;">
	{#snippet title()}
		<Text size="3rem" font="mono" spacing="0.2rem" color="danger">{sectionTitle}</Text>
	{/snippet}
	<Stack direction="column" gap="1rem" style="margin-top:3rem">
		<Panel width="80%" dots={{ index: 1, max: 3 }}>
			{#snippet header()}
				<Text size="1rem" font="vt" spacing="0.2rem" color="danger">Preview</Text>
			{/snippet}
			<Stack direction="column" gap="0.5rem" style="width: 100%;">
				{@render children()}
			</Stack>
		</Panel>
		<Stack direction="column" gap="1rem">
			<Button variant="ghost" onclick={toggleOpenPropsPanel}>
				[{#if !isOpen}
					+
				{:else}
					-
				{/if}] PROPS API
			</Button>
			{#if isOpen}
				<Table width="100%" columns={['props', 'type', 'default']}>
					{@render propsContent()}
				</Table>
			{/if}
		</Stack>
	</Stack>
</Section>
