<script lang="ts">
	import { Badge, Button, Checkbox, Container, Input, Panel, Stack, Text, Textarea, Toggle } from '$lib/index.ts';
</script>

<section id="showcase" class="showcase-section">
	<Container>
		<Stack direction="column" gap="0.5rem" style="margin-bottom: 1rem;">
			<Text size="1rem" color="danger">// LIVE PREVIEW</Text>
			<Text font="vt" size="3rem">Show Case</Text>
		</Stack>
		<Panel dots={{ index: 3, max: 4 }} width="100%">
			{#snippet header()}
				SHOW CASE
			{/snippet}
			<Stack direction="column" gap="0.8rem;">
				<Stack direction="column" gap="0.5rem">
					<Text font="vt" size="1.1rem" color="danger" spacing="0">// Button Widgets</Text>
					<Stack wrap={true} gap="0.5rem">
						<Button variant="primary">[PRIMARY]</Button>
						<Button variant="danger">[DANGER]</Button>
						<Button variant="warn">[WARN]</Button>
						<Button variant="success">[SUCCESS]</Button>
						<Button variant="ghost">[GHOST]</Button>
					</Stack>
				</Stack>
				<Stack direction="column" gap="0.5rem">
					<Text font="vt" size="1.1rem" color="danger" spacing="0">// Badge Widgets</Text>
					<Stack wrap={true} gap="0.7rem">
						<Badge variant="primary" label="[PRIMARY]" />
						<Badge variant="danger" label="[DANGER]" />
						<Badge variant="warn" label="[WARN]" />
						<Badge variant="success" label="[SUCCESS]" />
						<Badge variant="idle" label="[IDLE]" />
					</Stack>
				</Stack>
				<Stack direction="column" gap="0.5rem">
					<Text font="vt" size="1.1rem" color="danger" spacing="0">// Inputs</Text>
					<Stack wrap={true} gap="0.5rem">
						<Input />
						<Checkbox />
						<Checkbox />
						<Checkbox />
						<Textarea />
						<Toggle />
					</Stack>
				</Stack>
			</Stack>
			{#snippet footer()}
				this component is panel.
			{/snippet}
		</Panel>
	</Container>
</section>

<style>
	.showcase-section {
		padding-bottom: 20rem;
	}
</style>
