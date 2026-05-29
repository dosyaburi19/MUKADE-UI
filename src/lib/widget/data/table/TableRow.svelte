<script lang="ts">
	import type { Snippet } from 'svelte';

	interface Props {
		children?: Snippet<[]>;
	}

	let { children }: Props = $props();
</script>

<tr class="row">
	{@render children?.()}
</tr>

<style>
	.row {
		border-bottom: 1px solid var(--mukade-border-soft);
	}

	.row:last-child {
		border-bottom: none;
	}
</style>
