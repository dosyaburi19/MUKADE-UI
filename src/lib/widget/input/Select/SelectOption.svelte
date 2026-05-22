<script lang="ts">
	import { getContext, onMount } from 'svelte';
	import { type Option, type SelectContext } from './Select.svelte';

	interface Props {
		key: string;
		label?: string;
	}

	let { key, label }: Props = $props();
	let { select, addOptions } = getContext<SelectContext>('mukade-select');

	onMount(() => {
		addOptions({ key, label } as Option);
	});
</script>

<button class="select-option" onclick={() => select(key)}>
	{label ?? key}
</button>

<style>
	.select-option {
		border: none;
		padding: 0.2rem 0.5rem;

		background-color: var(--mukade-bg);

		font-family: var(--mukade-font-mono);
		font-size: 1rem;
		color: var(--mukade-primary);
	}
</style>
