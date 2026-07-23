<script lang="ts">
	import { Container, Divider, Panel, Stack, Text } from '$lib/index.ts';

	const features = [
		{
			no: '01',
			icon: '>_',
			title: 'TERMINAL AESTHETIC',
			content: 'A faithful recreation of the retro 90s terminal aesthetic, right down to the last pixel.',
			cmd: 'aesthetic.md'
		},
		{
			no: '02',
			icon: 'S',
			title: 'SVELTE NATIVE',
			content: 'Lightweight widgets built on Svelte 5. Fast and featherweight, with zero unnecessary runtime.',
			cmd: 'runtime.md'
		},
		{
			no: '03',
			icon: 'M',
			title: 'A LOT OF WIDGETS',
			content: 'Buttons, inputs, alerts, panels, tables, text fields, and more — a full set of widgets out of the box.',
			cmd: 'widgets.md'
		}
	];
</script>

<section id="features" class="features-section">
	<Container>
		<Stack direction="column" gap="0.5rem" style="margin-bottom: 1.5rem;">
			<Text font="mono" size="1rem" color="danger" spacing="0">// WHY CREATE MUKADE-UI</Text>
			<Text font="vt" size="3rem" spacing="0.05rem">FEATURES</Text>
		</Stack>
		<div class="grid">
			{#each features as { no, icon, title, content, cmd } (no)}
				<div class="feature-card">
					<Panel width="100%" dots={{ index: Number(no), max: 3 }}>
						{#snippet header()}
							<Text font="vt" color="primary" spacing="0">FEATURE.{no}</Text>
						{/snippet}
						<Stack direction="column" gap="1.3rem" style="padding: 0.7rem 0.4rem 0.5rem;">
							<Stack direction="row" justify="between" align="start" style="width: 100%;">
								<Text font="vt" size="3rem" color="primary" spacing="0" style="line-height: 0.8;">{icon}</Text>
								<Text font="vt" size="2.4rem" spacing="0" style="line-height: 0.8; --mukade-text-accent: var(--mukade-border-soft);">{no}</Text>
							</Stack>
							<Stack direction="column" gap="0.7rem">
								<Text font="vt" size="1.6rem" color="danger" spacing="0.08rem">{title}</Text>
								<Divider variant="dashed" style="--mukade-divider-accent: var(--mukade-border-soft);" />
								<Text font="mono" size="0.95rem" spacing="0" style="line-height: 1.6;">{content}</Text>
							</Stack>
						</Stack>
						{#snippet footer()}
							<Text font="mono" size="0.8rem" color="dim" spacing="0" align="left" style="width: 100%;">$~: cat {cmd}</Text>
						{/snippet}
					</Panel>
				</div>
			{/each}
		</div>
	</Container>
</section>

<style>
	.features-section {
		padding-block: 2rem 10rem;
	}

	.grid {
		display: grid;
		grid-template-columns: repeat(3, 1fr);
		gap: 1rem;
	}

	.feature-card {
		height: fit-content;

		transition:
			transform 0.2s,
			box-shadow 0.2s;
	}

	.feature-card:hover {
		transform: translateY(-0.4rem);
		box-shadow: 0 8px 24px color-mix(in srgb, var(--mukade-primary) 25%, transparent);
	}

	@media (max-width: 1023px) {
		.grid {
			grid-template-columns: repeat(2, 1fr);
		}
	}

	@media (max-width: 567px) {
		.grid {
			grid-template-columns: 1fr;
		}
	}
</style>
