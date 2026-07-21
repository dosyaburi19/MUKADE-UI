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
	class="mukade-select-option"
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
	.mukade-select-option {
		border: none;
		padding: 0.2rem 0.5rem;

		background-color: var(--mukade-select-bg, var(--mukade-bg));

		font-family: var(--mukade-font-vt);
		font-size: 1rem;
		color: var(--mukade-select-accent, var(--mukade-primary));

		overflow: hidden;
		text-overflow: ellipsis;
	}

	.mukade-select-option:focus-visible {
		outline: solid 1px var(--mukade-select-accent, var(--mukade-primary));
		outline-offset: -1px;
	}
</style>
