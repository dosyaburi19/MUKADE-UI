<script lang="ts">
	import { Button, Container } from '$lib/index.ts';
	import ScrollArea from '$lib/widget/layout/ScrollArea.svelte';
	import WidgetsSection from './components/WidgetsSection.svelte';
	import FeaturesSection from './components/FeaturesSection.svelte';
	import GetStartSection from './components/GetStartSection.svelte';
	import MainSection from './components/MainSection.svelte';
	import ShowcaseSection from './components/ShowcaseSection.svelte';
	import SystemStatusSection from './components/SystemStatusSection.svelte';

	function linkToPage(url: string) {
		window.open(url, 'noopener');
	}

	function linkToGithub() {
		linkToPage('https://github.com/dosyaburi19/MUKADE-UI');
	}
</script>

<Container style="padding: 0;">
	<ScrollArea maxHeight="100vh" variant="natural" direction="vertical">
		{#snippet header()}
			<div class="fixed">
				<div class="brand-logo"></div>
				<div class="header-content">
					<a class="link" href="#main">[MUKADE-UI]</a>
					/
					<a class="link" href="#status">[SYSTEM]</a>
					/
					<a class="link" href="#features">[FEATURES]</a>
					/
					<a class="link" href="#showcase">[SHOWCASE]</a>
					/
					<a class="link" href="#widgets">[WIDGETS]</a>
				</div>
				<div class="github">
					<Button variant="primary" onclick={linkToGithub} style="font-size: 1.2rem">[GITHUB]</Button>
				</div>
			</div>
		{/snippet}
		<div class="contents">
			<MainSection />
			<GetStartSection />
			<SystemStatusSection />
			<FeaturesSection />
			<ShowcaseSection />
			<WidgetsSection />
		</div>
		<div class="footer"></div>
	</ScrollArea>
</Container>

<style>
	.fixed {
		display: flex;
		justify-content: space-between;
		align-items: center;
		gap: 1rem;

		padding: 0.5rem 2rem;
		height: 4rem;
	}

	.brand-logo {
		max-height: 100%;

		width: 200px;
		height: 2.5rem;
		background-color: color-mix(in srgb, var(--mukade-primary) 10%, var(--mukade-bg));
	}

	.header-content {
		color: var(--mukade-text-dim);
	}

	.link {
		font-size: 1rem;
		font-family: var(--mukade-font-mono);
		text-decoration-line: none;
		color: var(--mukade-text-dim);
	}
	.contents {
		padding-inline: 20%;
	}

	.footer {
		border-top: 1px solid var(--mukade-primary);
		height: 5rem;
	}

	@media (max-width: 1023px) {
		.contents {
			padding-inline: 10%;
		}
	}

	@media (max-width: 767px) {
		.contents {
			padding-inline: 5%;
		}

		.header-content {
			display: none;
		}
	}
</style>
