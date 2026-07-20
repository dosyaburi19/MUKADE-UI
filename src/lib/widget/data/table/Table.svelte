<script lang="ts">
	import type { Snippet } from 'svelte';
	import type { HTMLAttributes } from 'svelte/elements';

	interface Props extends HTMLAttributes<HTMLDivElement> {
		width?: string;
		columns?: string[];
		children?: Snippet<[]>;
	}

	let { width, columns, children, ...props }: Props = $props();
</script>

<div class="table-container" class:fixed={width} style:--table-width={width} {...props}>
	<table class="table">
		{#if columns}
			<thead>
				<tr class="header-row">
					{#each columns as column, index (index)}
						<th class="header-cell">{column}</th>
					{/each}
				</tr>
			</thead>
		{/if}
		<tbody>
			{@render children?.()}
		</tbody>
	</table>
</div>

<style>
	.table-container {
		width: var(--table-width, fit-content);
		max-width: var(--table-max-size, none);

		background-color: var(--mukade-table-bg, var(--mukade-bg-soft));
		font-family: var(--mukade-font-vt);
		font-size: 1rem;
		color: var(--mukade-text);

		overflow: auto;
	}

	.table-container::-webkit-scrollbar {
		display: none;
	}

	.table-container.fixed {
		overflow: hidden;
	}

	.table {
		border-collapse: collapse;
	}

	.table-container.fixed > .table {
		width: 100%;
		table-layout: fixed;
	}

	.header-row {
		border-bottom: 1px solid var(--mukade-table-accent, var(--mukade-primary));
		background-color: color-mix(in srgb, var(--mukade-table-accent, var(--mukade-primary)) 5%, var(--mukade-table-bg, var(--mukade-bg-soft)));
	}

	.header-cell {
		padding: 0.4rem 0.7rem;
		text-align: left;
		color: var(--mukade-table-accent, var(--mukade-primary));
		white-space: nowrap;
	}
</style>
