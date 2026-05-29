<script lang="ts">
	import type { Snippet } from 'svelte';
	import type { HTMLAttributes } from 'svelte/elements';

	interface Props extends HTMLAttributes<HTMLDivElement> {
		children?: Snippet<[]>;
	}

	const { children, ...props }: Props = $props();
</script>

<div class="container" {...props}>
	{@render children?.()}
</div>

<style>
	.container {
		width: 100%;
		padding-inline: 1rem;
		margin: 0 auto;
	}
</style>
