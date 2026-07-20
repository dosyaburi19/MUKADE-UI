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

<div class="mukade-table-container" class:mukade-table-fixed={width} style:--table-width={width} {...props}>
	<table class="mukade-table">
		{#if columns}
			<thead>
				<tr class="mukade-table-header-row">
					{#each columns as column, index (index)}
						<th class="mukade-table-header-cell">{column}</th>
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
	.mukade-table-container {
		width: var(--table-width, fit-content);
		max-width: var(--table-max-size, none);

		background-color: var(--mukade-table-bg, var(--mukade-bg-soft));
		font-family: var(--mukade-font-vt);
		font-size: 1rem;
		color: var(--mukade-text);

		overflow: auto;
	}

	.mukade-table-container::-webkit-scrollbar {
		display: none;
	}

	.mukade-table-container.mukade-table-fixed {
		overflow: hidden;
	}

	.mukade-table {
		border-collapse: collapse;
	}

	.mukade-table-container.mukade-table-fixed > .mukade-table {
		width: 100%;
		table-layout: fixed;
	}

	.mukade-table-header-row {
		border-bottom: 1px solid var(--mukade-table-accent, var(--mukade-primary));
		background-color: color-mix(in srgb, var(--mukade-table-accent, var(--mukade-primary)) 5%, var(--mukade-table-bg, var(--mukade-bg-soft)));
	}

	.mukade-table-header-cell {
		padding: 0.4rem 0.7rem;
		text-align: left;
		color: var(--mukade-table-accent, var(--mukade-primary));
		white-space: nowrap;
	}
</style>
