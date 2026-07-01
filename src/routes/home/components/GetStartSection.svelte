<script lang="ts">
	import { Button, Container, Panel, Stack, Text } from '$lib/index.ts';
</script>

<section id="get-start" class="get-start-section">
	<Container>
		<Stack direction="column" gap="2rem">
			<Text size="1rem" color="danger">// INSTALLATION</Text>
			<Panel dots={{ index: 1, max: 3 }}>
				{#snippet header()}
					GET_START
				{/snippet}
				<Stack align="center" gap="2rem">
					<Stack gap="0.5rem">
						<Text font="vt" size="1.1rem" color="success">$~:</Text>
						<Text font="vt" size="1.1rem" color="primary">npm</Text>
						<Text font="vt" size="1.1rem" color="dim">install</Text>
						<Text font="vt" size="1.1rem" color="danger">mukade-ui</Text>
					</Stack>
					<Button>COPY</Button>
				</Stack>
			</Panel>
		</Stack>
	</Container>
</section>

<style>
	.get-start-section {
		padding-block: 2rem 10rem;
	}
</style>
