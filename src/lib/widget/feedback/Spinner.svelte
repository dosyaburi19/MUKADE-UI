<script lang="ts">
	import type { HTMLAttributes } from 'svelte/elements';

	interface Props extends HTMLAttributes<HTMLDivElement> {
		size?: string;
		duration?: number;
	}

	let { size, duration = 200, class: className, ...props }: Props = $props();

	const spinnerTexts = ['-', '\\', '|', '/'];
	let index = $state(0);

	$effect(() => {
		const query = window.matchMedia('(prefers-reduced-motion: reduce)');
		if (query.matches) return;

		const intervalId = setInterval(() => {
			if (index >= spinnerTexts.length - 1) {
				index = 0;
			} else {
				index++;
			}
		}, duration);

		return () => {
			clearInterval(intervalId);
		};
	});
</script>

<div class={['mukade-spinner', className]} role="status" aria-label="loading" {...props}>
	<span class="mukade-spinner-text" aria-hidden="true" style:--_mukade-spinner-size={size}>{spinnerTexts[index]}</span>
</div>

<style>
	@property --_mukade-spinner-size {
		syntax: '*';
		inherits: false;
	}

	.mukade-spinner {
		display: flex;
		align-items: center;
		justify-content: center;
	}

	.mukade-spinner-text {
		font-size: var(--_mukade-spinner-size, 1.2rem);
		font-family: var(--mukade-font-vt);
		color: var(--mukade-spinner-accent, var(--mukade-text));
	}
</style>
