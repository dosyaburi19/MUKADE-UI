<script lang="ts">
	import { Container, ScrollArea, Text } from '$lib/index.ts';
	import type { Snippet } from 'svelte';

	interface Props {
		children?: Snippet<[]>;
	}
	let { children }: Props = $props();
</script>

<Container style="padding: 0;">
	<div class="sidebar"></div>
	<ScrollArea maxHeight="100vh">
		{#snippet header()}
			<div class="header">
				<Text tag="h1" size="3rem" font="vt">COMPONENTS</Text>
			</div>
		{/snippet}
		{@render children?.()}
	</ScrollArea>
</Container>

<style>
	.header {
		display: flex;
		justify-content: center;
		align-items: center;
		gap: 1rem;

		padding: 0.5rem 2rem;
		height: 4rem;
	}
</style>
