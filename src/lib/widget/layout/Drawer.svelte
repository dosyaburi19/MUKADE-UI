<script lang="ts">
	import type { Snippet } from 'svelte';
	import type { HTMLAttributes } from 'svelte/elements';

	interface Props extends HTMLAttributes<HTMLElement> {
		variant?: 'permanent' | 'temporary';
		direction?: 'top' | 'bottom' | 'left' | 'right';
		size?: string;
		open?: boolean;
		children?: Snippet<[]>;
	}

	let { variant = 'permanent', open = $bindable(false), children, direction = 'left', size, ...props }: Props = $props();

	let dialogElement = $state<HTMLDialogElement | null>(null);

	$effect(() => {
		if (variant !== 'temporary' || !dialogElement) return;

		if (open && !dialogElement.open) dialogElement.showModal();
		else if (!open && dialogElement.open) dialogElement.close();
	});

	function onClose() {
		open = false;
	}

	function onBackdropClick(event: MouseEvent) {
		if (event.target === dialogElement) open = false;
	}
</script>

{#if variant === 'permanent'}
	<aside class={`mukade-drawer mukade-drawer-permanent mukade-drawer-${direction}`} style:--_mukade-drawer-size={size} {...props}>
		<div class="mukade-drawer-content">
			{@render children?.()}
		</div>
	</aside>
{:else if variant === 'temporary'}
	<dialog
		bind:this={dialogElement}
		class={`mukade-drawer mukade-drawer-temporary mukade-drawer-${direction}`}
		{...props}
		onclick={onBackdropClick}
		onclose={onClose}
	>
		<div class="mukade-drawer-content">
			{@render children?.()}
		</div>
	</dialog>
{/if}

<style>
	/* ============ MUKADE-DRAWER STYLES ============ */
	.mukade-drawer {
		scrollbar-width: auto;
		/* scrollbar-color: var(--mukade-drawer-accent, var(--mukade-primary)) var(--mukade-bg-soft); */
	}

	.mukade-drawer::-webkit-scrollbar {
		width: 6px;
		height: 6px;
	}

	.mukade-drawer::-webkit-scrollbar-track {
		background-color: var(--mukade-bg-soft);
	}

	.mukade-drawer::-webkit-scrollbar-thumb {
		background-color: var(--mukade-drawer-accent, var(--mukade-primary));
	}

	.mukade-drawer-content {
		display: block;
		min-width: 100%;
		min-height: 100%;
	}

	@media (hover: hover) {
		.mukade-drawer::-webkit-scrollbar-thumb:hover {
			background-color: var(--mukade-drawer-accent, var(--mukade-bright));
		}
	}

	/* ============ MUKADE-DRAWER-PERMANENT STYLES ============ */

	.mukade-drawer-permanent {
		flex-shrink: 0;
		border-style: solid;
		border-width: 0;
		border-color: var(--mukade-drawer-accent, var(--mukade-primary));
		background-color: var(--mukade-drawer-bg, var(--mukade-bg));
		overflow: hidden auto;
	}

	.mukade-drawer-permanent.mukade-drawer-left {
		width: var(--_mukade-drawer-size, 16rem);
		height: 100%;
		border-right-width: 1px;
	}
	.mukade-drawer-permanent.mukade-drawer-right {
		width: var(--_mukade-drawer-size, 16rem);
		height: 100%;
		border-left-width: 1px;
	}
	.mukade-drawer-permanent.mukade-drawer-top {
		width: 100%;
		height: var(--_mukade-drawer-size, 16rem);
		border-bottom-width: 1px;
	}
	.mukade-drawer-permanent.mukade-drawer-bottom {
		width: 100%;
		height: var(--_mukade-drawer-size, 16rem);
		border-top-width: 1px;
	}

	/* ============ MUKADE-DRAWER-TEMPORARY STYLES ============ */

	.mukade-drawer-temporary {
		margin: 0;
		padding: 0;
		max-width: none;
		max-height: none;

		border-style: solid;
		border-width: 0;
		border-color: var(--mukade-drawer-accent, var(--mukade-primary));
		background-color: var(--mukade-drawer-bg, var(--mukade-bg));

		transition:
			translate 0.25s ease,
			overlay 0.25s allow-discrete,
			display 0.25s allow-discrete;
		overflow: hidden auto;
		overscroll-behavior: contain;
	}

	.mukade-drawer-temporary::backdrop {
		background-color: color-mix(in srgb, var(--mukade-bg) 50%, transparent);
	}

	.mukade-drawer-temporary.mukade-drawer-left {
		translate: -100% 0;
		width: var(--_mukade-drawer-size, 16rem);
		height: 100dvh;
		border-right-width: 1px;
		margin-right: auto;
	}
	.mukade-drawer-temporary.mukade-drawer-right {
		translate: 100% 0;
		width: var(--_mukade-drawer-size, 16rem);
		height: 100dvh;
		border-left-width: 1px;
		margin-left: auto;
	}
	.mukade-drawer-temporary.mukade-drawer-top {
		translate: 0 -100%;
		width: 100%;
		height: var(--_mukade-drawer-size, 16rem);
		border-bottom-width: 1px;
		margin-bottom: auto;
		padding-top: env(safe-area-inset-top); /* iOS notch area */
	}
	.mukade-drawer-temporary.mukade-drawer-bottom {
		translate: 0 100%;
		width: 100%;
		height: var(--_mukade-drawer-size, 16rem);
		border-top-width: 1px;
		margin-top: auto;
		padding-bottom: env(safe-area-inset-bottom); /* iOS indicator area */
	}

	.mukade-drawer-temporary[open] {
		translate: 0 0;
	}

	@starting-style {
		.mukade-drawer-temporary.mukade-drawer-left[open] {
			translate: -100% 0;
		}

		.mukade-drawer-temporary.mukade-drawer-right[open] {
			translate: 100% 0;
		}

		.mukade-drawer-temporary.mukade-drawer-top[open] {
			translate: 0 -100%;
		}

		.mukade-drawer-temporary.mukade-drawer-bottom[open] {
			translate: 0 100%;
		}
	}

	@media (prefers-reduced-motion: reduce) {
		.mukade-drawer-temporary {
			transition: none;
		}
	}
</style>
