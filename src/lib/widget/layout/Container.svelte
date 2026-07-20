<script lang="ts">
	import type { Snippet } from 'svelte';
	import type { HTMLAttributes } from 'svelte/elements';

	interface Props extends HTMLAttributes<HTMLDivElement> {
		children?: Snippet<[]>;
	}

	const { children, ...props }: Props = $props();
</script>

<div class="mukade-container" {...props}>
	{@render children?.()}
</div>

<style>
	.mukade-container {
		width: 100%;
		box-sizing: border-box;
		margin: 0 auto;
	}
</style>
