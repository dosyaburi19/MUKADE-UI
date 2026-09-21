<script lang="ts">
	import type { HTMLAttributes } from 'svelte/elements';

	interface Props extends HTMLAttributes<HTMLDivElement> {
		variant: 'box' | 'circle' | 'line';
		width: string;
		height?: string;
		radius?: string;
		effect?: 'crt' | 'none' | 'rain' | 'wave';
	}

	let { variant, width, height = '1rem', radius, effect = 'none', class: className, ...props }: Props = $props();
</script>

<div
	class={[`mukade-skeleton mukade-skeleton-${variant} mukade-skeleton-${effect}`, className]}
	style:--_mukade-skeleton-width={width}
	style:--_mukade-skeleton-height={height}
	style:--_mukade-skeleton-radius={radius}
	aria-hidden={true}
	{...props}
></div>

<style>
	/* ============ SKELETON MAIN STYLE ============ */
	.mukade-skeleton {
		position: relative;
		--_mukade-skeleton-background-color: color-mix(in srgb, var(--mukade-skeleton-accent, var(--mukade-primary)) 10%, transparent);

		background: repeating-linear-gradient(
			0deg,
			var(--_mukade-skeleton-background-color),
			var(--_mukade-skeleton-background-color) 2px,
			rgba(0, 0, 0, 0.08) 2px,
			rgba(0, 0, 0, 0.08) 4px
		);

		width: var(--_mukade-skeleton-width);
		overflow: hidden;
	}

	/* ============ BOX VARIANT STYLE ============ */
	.mukade-skeleton.mukade-skeleton-box {
		height: var(--_mukade-skeleton-height);
		border-radius: var(--_mukade-skeleton-radius);
	}

	/* ============ CIRCLE VARIANT STYLE ============ */
	.mukade-skeleton.mukade-skeleton-circle {
		border-radius: 50%;
		aspect-ratio: 1 / 1;
	}

	/* ============ LINE VARIANT STYLE ============ */
	.mukade-skeleton.mukade-skeleton-line {
		height: var(--_mukade-skeleton-height);
		border-radius: var(--_mukade-skeleton-radius);
	}

	/* ============ CRT EFFECT STYLE ============ */
	.mukade-skeleton-crt::after,
	.mukade-skeleton-rain::after {
		content: '';
		position: absolute;
		inset: 0;

		width: 100%;
		height: 100%;
		border-radius: inherit;

		pointer-events: none;
	}

	.mukade-skeleton-crt::after {
		background: repeating-linear-gradient(color-mix(in srgb, var(--mukade-skeleton-accent, var(--mukade-primary)) 20%, transparent) 0 2px, transparent 2px 4px);

		animation: mukade-skeleton-crt-effect 2s steps(10) infinite;
	}

	@keyframes mukade-skeleton-crt-effect {
		from {
			background-position: 0 0;
		}
		to {
			background-position: 0 10px;
		}
	}

	/* ============ RAIN EFFECT STYLE ============ */

	.mukade-skeleton.mukade-skeleton-rain {
		background: repeating-linear-gradient(
			45deg,
			color-mix(in srgb, var(--mukade-skeleton-accent, var(--mukade-primary)) 15%, transparent) 0 2px,
			transparent 2px 4px
		);
	}
	.mukade-skeleton-rain::after {
		width: calc(100% + 4px);
		height: 100%;

		background: repeating-linear-gradient(
			45deg,
			color-mix(in srgb, var(--mukade-skeleton-accent, var(--mukade-primary)) 15%, transparent) 0 2px,
			transparent 2px 4px
		);

		animation: mukade-skeleton-rain-effect 2s steps(6) infinite;
	}

	@keyframes mukade-skeleton-rain-effect {
		from {
			background-position: -4px 0;
		}
		to {
			background-position: 0px 0;
		}
	}

	/* ============ WAVE EFFECT STYLE ============ */
	.mukade-skeleton-wave {
		background: repeating-linear-gradient(
			90deg,
			color-mix(in srgb, var(--mukade-skeleton-accent, var(--mukade-primary)) 15%, transparent) 0 2px,
			transparent 2px 4px
		);
	}
	.mukade-skeleton-wave::after {
		content: '';
		position: absolute;
		inset: 0;

		width: 10%;
		height: 100%;
		border-radius: none;

		pointer-events: none;

		background: repeating-linear-gradient(
			90deg,
			color-mix(in srgb, var(--mukade-skeleton-accent, var(--mukade-primary)) 15%, transparent) 0 2px,
			transparent 2px 4px
		);

		animation: mukade-skeleton-wave-effect 2s steps(20) infinite;
	}

	@keyframes mukade-skeleton-wave-effect {
		from {
			transform: translateX(-100%);
		}
		to {
			transform: translate(1100%);
		}
	}

	/* ============ EFFECT REDUCED-MOTION STYLE ============ */
	@media (prefers-reduced-motion: reduce) {
		.mukade-skeleton-crt::after,
		.mukade-skeleton-rain::after,
		.mukade-skeleton-wave::after {
			animation: none;
		}
	}
</style>
