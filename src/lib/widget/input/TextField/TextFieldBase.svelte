<script lang="ts">
	import { formatTerminalStyleText } from '$lib/utils/text.ts';
	import { type Snippet } from 'svelte';
	import type { HTMLInputAttributes } from 'svelte/elements';

	interface Props extends Omit<HTMLInputAttributes, 'value' | 'size' | 'type' | 'children'> {
		type?: string;
		label?: string;
		placeholder?: string;
		value: string;
		children?: Snippet<
			[
				{
					value: string;
					focused: boolean;
					floated: boolean;
					label: string;
				}
			]
		>;
	}

	const generatedId = $props.id();
	let { id, type = 'text', label = '', placeholder = '', value = $bindable(''), children, onblur, onfocus, ...props }: Props = $props();
	let inputId = $derived(id ?? generatedId);
	let focused = $state(false);
	let floated = $derived(focused || value.length > 0);
	let unlabeled = $derived(!label);
	let labelIndex = $state(0);

	let typingLabel = $derived(formatTerminalStyleText(label.slice(0, labelIndex)));

	$effect(() => {
		labelIndex = 0;
		if (!floated || !label.length) return;

		const intervalId = setInterval(() => {
			labelIndex++;
			if (labelIndex >= label.length) clearInterval(intervalId);
		}, 50);

		return () => clearInterval(intervalId);
	});

	function onFocus(event: FocusEvent & { currentTarget: EventTarget & HTMLInputElement }) {
		focused = true;
		onfocus?.(event);
	}

	function onBlur(event: FocusEvent & { currentTarget: EventTarget & HTMLInputElement }) {
		focused = false;
		onblur?.(event);
	}
</script>

<div class="mukade-textfield-container">
	<input
		id={inputId}
		class="mukade-textfield-input"
		class:mukade-textfield-focused={focused}
		class:mukade-textfield-unlabeled={unlabeled}
		{type}
		placeholder={formatTerminalStyleText(placeholder)}
		bind:value
		onfocus={onFocus}
		onblur={onBlur}
		{...props}
	/>

	{#if label}
		<label for={inputId} class="mukade-textfield-label" class:mukade-textfield-floated={floated} class:mukade-textfield-focused={focused}>
			{floated ? typingLabel : formatTerminalStyleText(label)}
		</label>
	{/if}

	{@render children?.({ value, focused, floated, label: typingLabel })}
</div>

<style>
	.mukade-textfield-container {
		position: relative;
		display: inline-flex;
		width: 100%;
		min-height: 56px;
		font-family: var(--mukade-font-vt);
	}

	.mukade-textfield-input {
		width: 100%;
		padding: var(--_mukade-textfield-input-padding, 17px 14px);

		border: none;
		outline: none;
		background: transparent;

		font-size: 16px;
		font-weight: 700;
		color: var(--mukade-text);

		z-index: 1;
	}

	.mukade-textfield-input::placeholder {
		opacity: 0;
	}

	.mukade-textfield-input.mukade-textfield-focused::placeholder {
		opacity: 1;
	}

	.mukade-textfield-input.mukade-textfield-unlabeled::placeholder {
		opacity: 1;
	}

	.mukade-textfield-label {
		position: absolute;
		left: 1rem;
		top: 50%;

		font-size: 1rem;
		font-weight: 700;
		font-family: var(--mukade-font-vt);
		color: var(--mukade-placeholder);

		transform-origin: left center;
		transform: translateY(-50%);
		transition: all 0.2s ease-out;
		pointer-events: none;

		z-index: 2;
	}

	.mukade-textfield-label.mukade-textfield-floated {
		top: var(--_mukade-textfield-label-floated-top);
		left: var(--_mukade-textfield-label-floated-left);

		transform: var(--_mukade-textfield-label-floated-transform);
		transition: none;
	}

	.mukade-textfield-label.mukade-textfield-focused {
		color: var(--mukade-textfield-accent, var(--mukade-primary));
	}
</style>
