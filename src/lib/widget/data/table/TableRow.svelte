<script lang="ts">
	import type { Snippet } from 'svelte';
	import type { HTMLAttributes } from 'svelte/elements';

	interface Props extends HTMLAttributes<HTMLDivElement> {
		children?: Snippet<[]>;
	}

	let { children, ...props }: Props = $props();
</script>

<tr class="mukade-table-row" {...props}>
	{@render children?.()}
</tr>

<style>
	.mukade-table-row {
		border-bottom: 1px solid var(--mukade-border-soft);
	}

	.mukade-table-row:last-child {
		border-bottom: none;
	}
</style>
