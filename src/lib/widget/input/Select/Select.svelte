<script lang="ts">
	import { setContext, type Snippet } from 'svelte';
	import type { HTMLAttributes } from 'svelte/elements';

	export interface SelectContext {
		select: (key: string) => void;
		addOptions: (option: { key: string; label: string }) => void;
	}

	type Options = {
		[key: string]: string;
	};

	interface Props extends HTMLAttributes<HTMLDivElement> {
		selected?: string;
		open?: boolean;
		placeholder?: string;
		width?: string;
		children?: Snippet<[]>;
	}

	let { selected = $bindable(''), open = $bindable(false), placeholder, width, children, ...props }: Props = $props();
	let options = $state<Options>({});

	function toggleOpen() {
		open = !open;
	}

	function select(key: string) {
		selected = key;
		open = false;
	}

	function addOptions(option: { key: string; label: string }) {
		options[option.key] = option.label;
	}

	setContext('mukade-select', {
		select,
		addOptions
	});

	let display = $derived(options[selected] || selected);
</script>

<div class="mukade-select" {...props}>
	<button class="mukade-select-trigger" onclick={toggleOpen} style={width && `min-width: ${width}; max-width: ${width}`}>
		<span class="mukade-select-selected-item" class:mukade-select-placeholder={!selected}>{display || placeholder}</span>
		<span class="mukade-select-arrow">{!open ? '+' : '-'}</span>
	</button>
	{#if open}
		<div class="mukade-select-dropdown" class:mukade-select-open={open}>
			{@render children?.()}
		</div>
	{/if}
</div>

<style>
	.mukade-select {
		position: relative;
		display: inline-block;

		width: fit-content;
	}

	.mukade-select-trigger {
		display: flex;
		justify-content: space-between;
		align-items: center;
		gap: 0.5rem;

		width: 8rem;
		min-height: 1.75rem;

		padding: 0.2rem 0.5rem;
		box-sizing: border-box;

		border: solid 1px var(--mukade-select-accent, var(--mukade-primary));
		background-color: var(--mukade-select-bg, var(--mukade-bg));
	}

	.mukade-select-selected-item {
		white-space: pre;

		font-weight: 700;
		font-size: 1rem;
		font-family: var(--mukade-font-vt);
		color: var(--mukade-select-accent, var(--mukade-primary));

		overflow: hidden;
		text-overflow: ellipsis;
	}

	.mukade-select-selected-item.mukade-select-placeholder {
		color: var(--mukade-placeholder);
	}

	.mukade-select-dropdown {
		position: absolute;

		display: flex;
		flex-direction: column;
		min-width: 100%;

		border: solid 1px var(--mukade-border-soft);
	}

	.mukade-select-arrow {
		display: flex;
		align-items: center;

		line-height: 1px;
		font-weight: 700;
		font-family: var(--mukade-font-vt);
		color: var(--mukade-select-accent, var(--mukade-primary));
	}
</style>
