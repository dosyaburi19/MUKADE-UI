<script lang="ts">
	import type { HTMLTextareaAttributes } from 'svelte/elements';

	interface Props extends Omit<HTMLTextareaAttributes, 'value'> {
		width?: string;
		height?: string;
		value?: string;
		resizing?: boolean;
	}

	let { width, height, value = $bindable(''), resizing = false, ...props }: Props = $props();
</script>

<textarea
	class="mukade-textarea"
	class:mukade-textarea-no-resize={!resizing}
	style:--_mukade-textarea-width={width}
	style:--_mukade-textarea-height={height}
	bind:value
	{...props}
></textarea>

<style>
	/* 내부 전용: 상속 차단 (같은 요소에서 설정→소비) */
	@property --_mukade-textarea-width {
		syntax: '*';
		inherits: false;
	}

	@property --_mukade-textarea-height {
		syntax: '*';
		inherits: false;
	}

	.mukade-textarea {
		width: var(--_mukade-textarea-width, 12rem);
		height: var(--_mukade-textarea-height, 7rem);
		padding: 0.5rem;

		background-color: var(--mukade-textarea-bg, var(--mukade-bg-inset));
		box-sizing: border-box;
		border: solid 1px var(--mukade-textarea-accent, var(--mukade-primary));
		outline: none;

		font-family: var(--mukade-font-vt);
		font-size: 1rem;
		color: var(--mukade-text);
	}

	.mukade-textarea.mukade-textarea-no-resize {
		resize: none;
	}

	.mukade-textarea::placeholder {
		color: var(--mukade-placeholder);
	}

	.mukade-textarea:focus {
		outline: solid 1px var(--mukade-dim);
	}

	.mukade-textarea::-webkit-scrollbar {
		width: 6px;
		height: 6px;
	}

	.mukade-textarea::-webkit-scrollbar-track {
		background-color: var(--mukade-bg-soft);
	}

	.mukade-textarea::-webkit-scrollbar-thumb {
		background-color: var(--mukade-textarea-accent, var(--mukade-primary));
	}

	.mukade-textarea::-webkit-scrollbar-thumb:hover {
		background-color: var(--mukade-bright);
	}

	.mukade-textarea:disabled {
		background-color: var(--mukade-bg-soft);
		border-color: var(--mukade-border-soft);
		cursor: not-allowed;
		opacity: 0.6;
	}
</style>
