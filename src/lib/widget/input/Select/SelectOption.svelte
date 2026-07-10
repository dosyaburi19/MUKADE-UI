<script lang="ts">
	import { getContext, onMount } from 'svelte';
	import { type SelectContext } from './Select.svelte';
	import type { HTMLButtonAttributes } from 'svelte/elements';

	interface Props extends HTMLButtonAttributes {
		key: string;
		label?: string;
	}

	let { key, label, onclick, ...props }: Props = $props();
	let { select, addOptions } = getContext<SelectContext>('mukade-select');

	onMount(() => {
		if (key && label) addOptions({ key, label });
	});
</script>

<button
	class="select-option"
	type="button"
	onclick={(event) => {
		select(key);
		onclick?.(event);
	}}
	{...props}
>
	{label ?? key}
</button>

<style>
	.select-option {
		border: none;
		padding: 0.2rem 0.5rem;

		background-color: var(--mukade-bg);

		font-family: var(--mukade-font-vt);
		font-size: 1rem;
		color: var(--mukade-primary);

		overflow: hidden;
		text-overflow: ellipsis;
	}
</style>
