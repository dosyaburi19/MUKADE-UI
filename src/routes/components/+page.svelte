<script lang="ts">
	import { Container } from '$lib/index.ts';

	// primitive
	import TextSection from './components/TextSection.svelte';
	import AvatarSection from './components/AvatarSection.svelte';
	import BadgeSection from './components/BadgeSection.svelte';
	import DividerSection from './components/DividerSection.svelte';

	// layout
	import ContainerSection from './components/ContainerSection.svelte';
	import StackSection from './components/StackSection.svelte';
	import ScrollAreaSection from './components/ScrollAreaSection.svelte';
	import PanelSection from './components/PanelSection.svelte';
	import SectionSection from './components/SectionSection.svelte';

	// input
	import ButtonSection from './components/ButtonSection.svelte';
	import CheckboxSection from './components/CheckboxSection.svelte';
	import InputSection from './components/InputSection.svelte';
	import TextareaSection from './components/TextareaSection.svelte';
	import ToggleSection from './components/ToggleSection.svelte';
	import TextFieldSection from './components/TextFieldSection.svelte';
	import SelectSection from './components/SelectSection.svelte';

	// feedback
	import AlertSection from './components/AlertSection.svelte';

	// data
	import TableSection from './components/TableSection.svelte';
</script>

<div class="components-page">
	<Container class="container" style="padding-inline:20%">
		<!-- primitive -->
		<TextSection />
		<AvatarSection />
		<BadgeSection />
		<DividerSection />

		<!-- layout -->
		<ContainerSection />
		<StackSection />
		<ScrollAreaSection />
		<PanelSection />
		<SectionSection />

		<!-- input -->
		<ButtonSection />
		<CheckboxSection />
		<InputSection />
		<TextareaSection />
		<ToggleSection />
		<TextFieldSection />
		<SelectSection />

		<!-- feedback -->
		<AlertSection />

		<!-- data -->
		<TableSection />
	</Container>
</div>

<style>
	.components-page {
		padding-block: 3rem;
	}
</style>
