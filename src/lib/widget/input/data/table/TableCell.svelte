<script lang="ts">
	import type { Snippet } from 'svelte';

	interface Props {
		width?: string;
		children?: Snippet<[]>;
	}

	let { width, children }: Props = $props();
</script>

<td class="cell" style:--cell-width={width}>
	{@render children?.()}
</td>

<style>
	.cell {
		width: var(--cell-width, auto);
		max-width: var(--cell-width, none);
		padding: 0.4rem 0.7rem;
		overflow: hidden;
		text-overflow: ellipsis;
		white-space: nowrap;
		color: var(--mukade-text);
	}
</style>
