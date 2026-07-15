<script lang="ts">
	import { Button, Container, Stack, Text } from '$lib/index.ts';
</script>

<section id="main" class="main-section">
	<Container>
		<Stack direction="column" gap="3rem">
			<Stack direction="column">
				<Stack direction="row" gap="1rem">
					<Text tag="label" color="success" font="vt" size="1.2rem">></Text>
					<Text tag="label" color="danger" font="vt" size="1.2rem">Root@Svelte-UI:~$initialized</Text>
				</Stack>
				<Text tag="h1" color="danger" font="vt" size="6rem">MUKADE-UI</Text>
			</Stack>
			<Stack direction="column" gap="0.6rem" style="border-left: solid 2px var(--mukade-dim); padding-top: 0.5rem; padding-left: 1rem;">
				<Text font="mono" size="1.5rem"
					>The terminal-native component library for <Text tag="span" font="mono" size="1.5rem" color="danger">Svelte 5</Text>.</Text
				>
				<Text font="mono" size="1.5rem" style="margin-bottom:0.4rem;">Zero runtime bloat — just fast, sharp, retro UI.</Text>
				<Text size="1.3rem" color="dim">// build fast. ship sharp. no dependencies.</Text>
			</Stack>
			<Stack direction="row" gap="1.5rem" wrap={true}>
				<Button variant="danger" style="padding: 0.7rem 1rem;">[GET_STARTED]</Button>
				<Button style="padding: 0.7rem 1rem;">[SHOW_COMPONENTS]</Button>
			</Stack>
		</Stack>
	</Container>
</section>

<style>
	.main-section {
		padding-block: 10rem 5rem;
	}
</style>
