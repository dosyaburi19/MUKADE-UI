<script lang="ts">
	import type { Snippet } from 'svelte';
	import type { HTMLAttributes } from 'svelte/elements';

	interface Props extends HTMLAttributes<HTMLDivElement> {
		width?: string;
		children?: Snippet<[]>;
	}

	let { width, children, ...props }: Props = $props();
</script>

<td class="mukade-table-cell" style:--cell-width={width} {...props}>
	{@render children?.()}
</td>

<style>
	.mukade-table-cell {
		width: var(--cell-width, auto);
		max-width: var(--cell-width, none);
		padding: 0.4rem 0.7rem;
		overflow: hidden;
		text-overflow: ellipsis;
		white-space: nowrap;
		color: var(--mukade-text);
	}
</style>
