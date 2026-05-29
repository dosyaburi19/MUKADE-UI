<script lang="ts">
	import { getContext, onMount } from 'svelte';
	import { type SelectContext } from './Select.svelte';

	interface Props {
		key: string;
		label?: string;
	}

	let { key, label }: Props = $props();
	let { select, addOptions } = getContext<SelectContext>('mukade-select');

	onMount(() => {
		if (key && label) addOptions({ key, label });
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

		overflow: hidden;
		text-overflow: ellipsis;
	}
</style>
