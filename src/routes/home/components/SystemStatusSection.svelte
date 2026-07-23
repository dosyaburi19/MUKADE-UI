<script lang="ts">
	import { Container, Stack, Text } from '$lib/index.ts';

	const statusPanels = [
		{ eyebrow: '// version', glyph: 'v_', value: 'v0.6.0', caption: 'latest | 2026.07' },
		{ eyebrow: '// downloads', glyph: '↓', value: '12.4K', caption: '/ month' },
		{ eyebrow: '// stars', glyph: '★', value: '1.2k', caption: 'github stars' },
		{ eyebrow: '// license', glyph: '—', value: 'MIT', caption: '57.5kB size' }
	];
</script>

<section id="status" class="status-section">
	<Container>
		<Stack direction="column" gap="0.5rem" style="margin-bottom: 1.5rem;">
			<Text font="mono" size="1rem" color="dim" spacing="0">// PROJECT STATUS</Text>
			<Text font="vt" size="3rem" spacing="0.05rem">SYSTEM_STATUS</Text>
		</Stack>
		<div class="status-grid">
			{#each statusPanels as { eyebrow, glyph, value, caption } (eyebrow)}
				<div class="stat">
					<Text font="mono" size="0.9rem" color="dim" spacing="0">{eyebrow}</Text>
					<Text font="vt" size="2rem" color="dim" spacing="0" style="line-height: 1;">{glyph}</Text>
					<Stack direction="column" gap="0.3rem">
						<Text font="vt" size="3rem" color="danger" spacing="0" style="line-height: 1;">{value}</Text>
						<Text font="mono" size="0.85rem" color="dim" spacing="0">{caption}</Text>
					</Stack>
				</div>
			{/each}
		</div>
	</Container>
</section>

<style>
	.status-section {
		padding-block: 2rem 10rem;
	}

	.status-grid {
		display: flex;
		flex-wrap: wrap;
		gap: 1rem;
	}

	.stat {
		flex: 1;
		min-width: 12rem;

		display: flex;
		flex-direction: column;
		gap: 1.5rem;

		padding: 1rem;
		border: 1px solid var(--mukade-border-soft);
		background-color: var(--mukade-bg-soft);

		transition:
			border-color 0.2s,
			transform 0.2s;
	}

	.stat:hover {
		border-color: var(--mukade-primary);
		transform: translateY(-0.3rem);
	}
</style>
