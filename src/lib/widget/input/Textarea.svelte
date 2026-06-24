<script lang="ts">
	interface Props {
		width?: string;
		height?: string;
		text?: string;
		resizing?: boolean;
		placeholder?: string;
		defaultText?: string;
	}

	let { width, height, text = $bindable(''), resizing = false, placeholder, defaultText }: Props = $props();
</script>

<textarea class="textarea" class:no-resize={!resizing} style:--textarea-width-size={width} style:--textarea-height-size={height} bind:value={text} {placeholder}
	>{defaultText}</textarea
>

<style>
	.textarea {
		width: var(--textarea-width-size, 12rem);
		height: var(--textarea-height-size, 7rem);
		padding: 0.5rem;

		background-color: var(--mukade-bg-inset);
		box-sizing: border-box;
		border: solid 1px var(--mukade-primary);
		outline: none;

		font-family: var(--mukade-font-mono);
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
		background-color: var(--mukade-primary);
	}

	.textarea::-webkit-scrollbar-thumb:hover {
		background-color: var(--mukade-bright);
	}
</style>
