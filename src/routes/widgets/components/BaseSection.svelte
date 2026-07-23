<script lang="ts">
	import { Button, Panel, Table, TableCell, TableRow, Text } from '$lib/index.ts';
	import type { Snippet } from 'svelte';

	type PropRow = { p: string; t: string; d: string };
	type CssRow = { p: string; f: string; d: string };

	interface Props {
		id: string;
		category: string;
		sectionTitle: string;
		description: string;
		usage: string;
		props: PropRow[];
		css?: CssRow[];
		notes: string[];
		children: Snippet<[]>;
	}
	let { id, category, sectionTitle, description, usage, props, css, notes, children }: Props =
		$props();

	let isOpen = $state(false);

	function toggleOpenPropsPanel() {
		isOpen = !isOpen;
	}
</script>

<section {id} class="widget-doc">
	<Text tag="span" font="mono" color="danger" size="0.85rem" spacing="0.1rem">// {category}</Text>
	<Text tag="h2" font="vt" color="primary" size="2.4rem" spacing="0">{'> ' + sectionTitle}</Text>
	<Text
		tag="p"
		font="mono"
		color="dim"
		size="0.95rem"
		spacing="0"
		style="line-height: 1.6; max-width: 38rem;">{description}</Text
	>

	<Panel width="100%" dots={{ index: 1, max: 3 }}>
		{#snippet header()}
			<Text size="1rem" font="vt" color="primary" spacing="0.1rem">PREVIEW</Text>
		{/snippet}
		<div class="preview-body">
			{@render children()}
		</div>
	</Panel>

	<span class="doc-label">USAGE</span>
	<pre class="usage">{usage}</pre>

	<div class="reference">
		<Button variant="ghost" onclick={toggleOpenPropsPanel}>[{isOpen ? '-' : '+'}] PROPS API</Button>
		{#if isOpen}
			<span class="doc-label">PROPS API</span>
			<Table width="100%" columns={['props', 'type', 'default']}>
				{#each props as row (row.p)}
					<TableRow>
						<TableCell>{row.p}</TableCell>
						<TableCell>{row.t}</TableCell>
						<TableCell>{row.d}</TableCell>
					</TableRow>
				{/each}
			</Table>

			{#if css && css.length > 0}
				<span class="doc-label">CSS CUSTOM PROPERTIES</span>
				<Table width="100%" columns={['property', 'falls back to', 'description']}>
					{#each css as row (row.p)}
						<TableRow>
							<TableCell>
								<Text tag="span" font="mono" color="primary" spacing="0">{row.p}</Text>
							</TableCell>
							<TableCell>{row.f}</TableCell>
							<TableCell>{row.d}</TableCell>
						</TableRow>
					{/each}
				</Table>
			{/if}
		{/if}
	</div>

	<span class="doc-label">NOTES</span>
	<ul class="notes">
		{#each notes as note (note)}
			<li>{note}</li>
		{/each}
	</ul>
</section>

<style>
	.widget-doc {
		display: flex;
		flex-direction: column;
		gap: 0.7rem;

		padding-block: 3rem;
		border-bottom: 1px solid var(--mukade-border-subtle);
		scroll-margin-top: 1.5rem;
	}

	.preview-body {
		display: flex;
		flex-direction: column;
		gap: 1rem;

		padding: 0.5rem;
	}

	.doc-label {
		margin-top: 0.8rem;

		font-family: var(--mukade-font-vt);
		font-size: 1.1rem;
		letter-spacing: 0.1rem;
		color: var(--mukade-text-dim);
	}

	.usage {
		margin: 0;
		padding: 0.9rem 1.1rem;

		border: 1px solid var(--mukade-border-subtle);
		background-color: var(--mukade-bg-inset);

		font-family: var(--mukade-font-mono);
		font-size: 0.8rem;
		line-height: 1.6;
		color: var(--mukade-text);

		white-space: pre;
		overflow-x: auto;
	}

	.reference {
		display: flex;
		flex-direction: column;
		gap: 0.7rem;
	}

	.notes {
		margin: 0;
		padding-left: 1.2rem;

		display: flex;
		flex-direction: column;
		gap: 0.4rem;

		font-family: var(--mukade-font-mono);
		font-size: 0.85rem;
		line-height: 1.5;
		color: var(--mukade-text-dim);
	}
</style>
