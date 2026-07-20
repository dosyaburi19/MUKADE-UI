<script lang="ts">
	import { Container, Panel, Section, Stack, Text } from '$lib/index.ts';
</script>

<Section id="status">
	<Stack direction="column" gap="0.5rem" style="margin-bottom: 1rem;">
		<Text size="1rem" color="danger">// PROJECT STATUS</Text>
		<Text font="vt" size="3rem">SYSTEM_STATUS</Text>
	</Stack>
	<Stack gap="1rem" style="height:max-content;">
		<Panel variant="soft-line" style="flex: 1; padding: 0.5rem; height:max-content;">
			<Stack direction="column" gap="1.5rem">
				<Text color="dim">// version</Text>
				<Text color="dim" size="2rem">v_</Text>
				<Stack direction="column" gap="0.3rem">
					<Text color="danger" size="3rem" spacing="0">v0.4.0</Text>
					<Text color="dim">latest | 2026.06</Text>
				</Stack>
			</Stack>
		</Panel>
		<Panel variant="soft-line" style="flex: 1; padding: 0.5rem;"></Panel>
		<Panel variant="soft-line" style="flex: 1; padding: 0.5rem; height:auto">
			<Container>
				<Stack direction="column" gap="1.5rem" justify="between">
					<Text color="dim">// license</Text>
					<Text color="dim">open source</Text>
					<Stack direction="column" gap="0.3rem">
						<Text color="danger" size="3rem">MIT</Text>
						<Text color="dim">57.5kB size</Text>
					</Stack>
				</Stack>
			</Container>
		</Panel>
	</Stack>
</Section>
