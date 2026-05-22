<script lang="ts">
	import { setContext, type Snippet } from 'svelte';

	export interface SelectContext {
		select: (key: string) => void;
		addOptions: (option: Option) => void;
	}

	export type Option = {
		key: string;
		label?: string;
	};

	interface Props {
		selected?: string;
		open?: boolean;
		placeholder?: string;
		children?: Snippet<[]>;
	}

	let { selected = $bindable(''), open = $bindable(false), placeholder, children }: Props = $props();
	let options = $state<Option[]>([]);

	function toggleOpen() {
		open = !open;
	}

	function select(key: string) {
		selected = key;
		open = false;
	}

	function addOptions(option: Option) {
		options.push(option);
	}

	setContext('mukade-select', {
		select,
		addOptions
	});
</script>

<div class="select">
	<button class="trigger" onclick={toggleOpen}>
		<span class="selected-item" class:placeholder={!selected}>{selected ?? placeholder}</span>
		<span class="arrow">{!open ? '+' : '-'}</span>
	</button>
	{#if open}
		<div class="dropdown" class:open>
			{@render children?.()}
		</div>
	{/if}
</div>

<style>
	.select {
		position: relative;
		display: inline-block;

		width: fit-content;
	}

	.trigger {
		display: flex;
		justify-content: space-between;
		align-items: center;
		gap: 0.5rem;

		min-width: 8rem;
		min-height: 1.75rem;

		padding: 0.2rem 0.5rem;
		box-sizing: border-box;

		border: solid 1px var(--mukade-primary);
		background-color: var(--mukade-bg);
	}

	.selected-item {
		font-weight: 700;
		font-size: 1rem;
		font-family: var(--mukade-font-mono);
		color: var(--mukade-primary);
	}

	.selected-item.placeholder {
		color: var(--mukade-placeholder);
	}

	.dropdown {
		position: absolute;

		display: flex;
		flex-direction: column;
		min-width: 100%;

		border: solid 1px var(--mukade-border-soft);
	}

	.arrow {
		display: flex;
		align-items: center;

		line-height: 1px;
		font-weight: 700;
		font-family: var(--mukade-font-mono);
		color: var(--mukade-primary);
	}
</style>
