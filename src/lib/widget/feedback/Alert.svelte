<script lang="ts">
	import type { Snippet } from 'svelte';
	import type { HTMLAttributes } from 'svelte/elements';

	interface Props extends HTMLAttributes<HTMLDivElement> {
		variant?: 'info' | 'success' | 'warn' | 'danger';
		title: string;
		width?: string;
		children?: Snippet<[]>;
	}

	let { variant = 'info', title, width, children, ...props }: Props = $props();

	let icon = $derived(getIcon());

	function getIcon() {
		switch (variant) {
			case 'info':
				return 'i';
			case 'success':
				return '✓';
			case 'warn':
				return '⚠';
			case 'danger':
				return '!';
		}
	}
</script>

<div class="alert {variant}" class:fixed={!!width} style:--width={width} role={variant === 'info' || variant === 'success' ? 'status' : 'alert'} {...props}>
	<div class="icon">{icon}</div>
	<div class="message">
		<span class="title">{title}</span>
		<span class="content">{@render children?.()}</span>
	</div>
</div>

<style>
	.alert {
		display: flex;
		align-self: flex-start;

		min-width: 20rem;
		min-height: 4rem;
		height: fit-content;
		border-left: solid 0.2rem;

		font-size: 1rem;
		font-family: var(--mukade-font-vt);
	}

	.alert.fixed {
		min-width: 0;
		width: var(--width);
	}

	.alert.info,
	.alert.danger {
		border-color: var(--mukade-primary);
		background-color: color-mix(in srgb, var(--mukade-dim) 10%, transparent);
		color: var(--mukade-primary);
	}

	.alert.warn {
		border-color: var(--mukade-warn);
		background-color: color-mix(in srgb, var(--mukade-warn-dim) 10%, transparent);
		color: var(--mukade-warn);
	}

	.alert.success {
		border-color: var(--mukade-success);
		background-color: color-mix(in srgb, var(--mukade-success-dim) 10%, transparent);
		color: var(--mukade-success);
	}

	.icon {
		text-align: center;

		min-width: 2rem;
		padding: 0.5rem 0.3rem;
		line-height: 2rem;
		font-size: 1rem;
	}

	.message {
		display: flex;
		flex-direction: column;
		justify-content: flex-start;
		gap: 0.5rem;
		padding: 0.8rem 0.7rem;
		padding-left: 0;
	}

	.content {
		font-size: 0.8rem;
		color: var(--mukade-text-dim);
	}
</style>
