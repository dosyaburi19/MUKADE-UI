<script lang="ts">
	import { formatTerminalStyleText } from '$lib/utils/text.ts';
	import { generateUUID } from '$lib/utils/uuid.ts';
	import { untrack, type Snippet } from 'svelte';

	interface Props {
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

	const uuid = generateUUID();
	let { type = 'text', label = '', placeholder = '', value = $bindable(''), children }: Props = $props();
	let focused = $state(false);
	let floated = $derived(focused || value.length > 0);
	let unlabeled = $derived(!label);
	let labelIndex = $state(0);
	let interval: ReturnType<typeof setInterval> | null = null;

	let typingLabel = $derived(formatTerminalStyleText(label.slice(0, labelIndex)));

	$effect(() => {
		if (floated && label.length) {
			untrack(() => {
				clearInterval(interval!);
				labelIndex = 0;
				interval = setInterval(() => {
					if (labelIndex < label.length) {
						labelIndex++;
					} else {
						clearInterval(interval!);
						interval = null;
					}
				}, 50);
			});
		} else {
			untrack(() => {
				clearInterval(interval!);
				interval = null;
				labelIndex = 0;
			});
		}
	});

	function onFocus() {
		focused = true;
	}

	function onBlur() {
		focused = false;
	}
</script>

<div class="textfield-container">
	<input id={uuid} class:focused class:unlabeled {type} placeholder={formatTerminalStyleText(placeholder)} bind:value onfocus={onFocus} onblur={onBlur} />

	{#if label}
		<label for={uuid} class:floated class:focused>{floated ? typingLabel : formatTerminalStyleText(label)}</label>
	{/if}

	{@render children?.({ value, focused, floated, label: typingLabel })}
</div>

<style>
	.textfield-container {
		position: relative;
		display: inline-flex;
		width: 100%;
		min-height: 56px;
		font-family: monospace;
	}

	input {
		width: 100%;
		padding: var(--input-padding, 17px 14px);

		border: none;
		outline: none;
		background: transparent;

		font-size: 16px;
		font-weight: 700;
		color: var(--mukade-text);

		z-index: 1;
	}

	input::placeholder {
		opacity: 0;
	}

	input.focused::placeholder {
		opacity: 1;
	}

	input.unlabeled::placeholder {
		opacity: 1;
	}

	label {
		position: absolute;
		left: 14px;
		top: 50%;

		font-size: 16px;
		font-weight: 700;
		font-family: monospace;
		color: var(--mukade-placeholder);

		transform-origin: left center;
		transform: translateY(-50%);
		transition: all 0.2s ease-out;
		pointer-events: none;

		z-index: 2;
	}

	label.floated {
		top: var(--label-floated-top);
		left: var(--label-floated-left);

		transform: var(--label-floated-transform);
		transition: none;
	}

	label.focused {
		color: var(--mukade-primary);
	}
</style>
