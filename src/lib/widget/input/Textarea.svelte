<script lang="ts">
	import type { HTMLTextareaAttributes } from 'svelte/elements';

	interface Props extends HTMLTextareaAttributes {
		width?: string;
		height?: string;
		text?: string;
		resizing?: boolean;
		placeholder?: string;
	}

	let { width, height, text = $bindable(''), resizing = false, placeholder, ...props }: Props = $props();
</script>

<textarea
	class="textarea"
	class:no-resize={!resizing}
	style:--textarea-width-size={width}
	style:--textarea-height-size={height}
	bind:value={text}
	{placeholder}
	{...props}
></textarea>

<style>
	.textarea {
		width: var(--textarea-width-size, 12rem);
		height: var(--textarea-height-size, 7rem);
		padding: 0.5rem;

		background-color: var(--mukade-textarea-bg, var(--mukade-bg-inset));
		box-sizing: border-box;
		border: solid 1px var(--mukade-textarea-accent, var(--mukade-primary));
		outline: none;

		font-family: var(--mukade-font-vt);
		font-size: 1rem;
		color: var(--mukade-text);
	}

	.textarea.no-resize {
		resize: none;
	}

	.textarea::placeholder {
		color: var(--mukade-placeholder);
	}

	.textarea:focus {
		outline: solid 1px var(--mukade-dim);
	}

	.textarea::-webkit-scrollbar {
		width: 6px;
		height: 6px;
	}

	.textarea::-webkit-scrollbar-track {
		background-color: var(--mukade-bg-soft);
	}

	.textarea::-webkit-scrollbar-thumb {
		background-color: var(--mukade-textarea-accent, var(--mukade-primary));
	}

	.textarea::-webkit-scrollbar-thumb:hover {
		background-color: var(--mukade-bright);
	}
</style>
