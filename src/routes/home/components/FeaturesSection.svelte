<script lang="ts">
	import { Container, Stack, Text } from '$lib/index.ts';

	const features = [
		{ id: 1, icon: '>_', title: 'TERMINAL AESTHETIC', content: '90년대의 레트로한 느낌의 터미널 미학을 그대로 구현해내었습니다.' },
		{ id: 2, icon: 'S', title: 'SVELTE NATIVE', content: 'Svelte 5 기반으로 작성된 경량 컴포넌트. 불필요한 런타임 없이 빠르고 가볍게 동작합니다.' },
		{ id: 3, icon: 'M', title: 'A Lot of Components', content: '버튼, 인풋, 알림, 패널, 테이블, 텍스트필드까지. 많은 컴포넌트들을 제공합니다.' }
	];
</script>

<section id="features" class="features-section">
	<Container>
		<Stack direction="column" gap="0.5rem" style="margin-bottom: 1rem;">
			<Text size="1rem" color="danger">// WHY CREATE MUKADE-UI</Text>
			<Text font="vt" size="3rem">FEATURES</Text>
		</Stack>
		<div class="grid">
			{#each features as { id, icon, title, content } (id)}
				<div class="box">
					<Stack gap="1rem" justify="between" align="center">
						<Text size="3rem" color="danger" font="vt" spacing="0">{icon}</Text>
						<Text size="1.5rem" color="danger" font="vt" spacing="0.1rem" style="width: 65%" align="end">{title}</Text>
					</Stack>
					<Text size="1rem" spacing="0">{content}</Text>
				</div>
			{/each}
			<!-- <div class="box">
				<Stack gap="1rem" justify="between">
					<Text size="3rem" color="danger" font="vt" spacing="0">>_</Text>
					<Text size="1.5rem" color="danger" font="vt" spacing="0.1rem">TERMINAL AESTHETIC</Text>
				</Stack>
				<Text></Text>
			</div>
			<div class="box">
				<Stack gap="1rem" justify="between">
					<Text size="3rem" color="danger" font="vt" spacing="0">S</Text>
					<Text size="1.5rem" color="danger" font="vt" spacing="0.1rem">SVELTE NATIVE</Text>
				</Stack>
				<Text></Text>
			</div>
			<div class="box">
				<Stack gap="1rem" justify="between">
					<Text size="3rem" color="danger" font="vt" spacing="0">M</Text>
					<Text size="1.5rem" color="danger" font="vt" spacing="0.1rem">A lot of Components</Text>
				</Stack>
				<Text></Text>
			</div> -->
		</div>
	</Container>
</section>

<style>
	.features-section {
		padding-block: 20rem;
	}

	.grid {
		display: grid;
		grid-template-columns: repeat(3, 1fr);
		gap: 1rem;
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

	.box {
		display: flex;
		flex-direction: column;
		gap: 2rem;
		height: 19rem;
		border: solid 1px var(--mukade-border-soft);

		padding: 1rem;
		box-sizing: border-box;
		background-color: color-mix(in srgb, var(--mukade-bg-soft) 50%, var(--mukade-bg));
		transition: transform 0.2s;
	}

	.box:hover {
		border: solid 1px var(--mukade-border);
		transform: translateY(-0.5rem);
	}
</style>
