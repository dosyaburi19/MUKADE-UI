<script lang="ts">
	import type { HTMLAttributes } from 'svelte/elements';

	interface Packet {
		sequence: number;
		isTransmitting: boolean;
		isDelivered: boolean;
	}

	interface Props extends HTMLAttributes<HTMLDivElement> {
		variant?: 'bar' | 'packets';
		width?: string;
		size?: string; // height size
		count?: number; // base 0 ~ 100
		value?: number; // base 0 ~ 100
	}

	let { variant = 'bar', width, size, count = 10, value = 0, 'aria-label': ariaLabel, 'aria-valuetext': ariaValuetext, ...props }: Props = $props();

	let progressed = $derived(Math.min(Math.max(Number(value) || 0, 0), 100));

	let packetCount = $derived(Math.min(Math.max(Math.trunc(Number(count) || 0), 0), 100));
	let packets: Packet[] = $derived.by(() => {
		const delivered = (progressed * packetCount) / 100;
		return Array.from({ length: packetCount }, (_, i) => ({
			sequence: i + 1,
			isDelivered: i + 1 <= delivered,
			isTransmitting: i <= delivered && i + 1 > delivered
		}));
	});
</script>

<div class="mukade-progress" style:--_mukade-progress-width={width} style:--_mukade-progress-size={size} {...props}>
	{#if variant === 'bar'}
		<div
			class="mukade-progress-track"
			role="progressbar"
			aria-label={ariaLabel}
			aria-valuetext={ariaValuetext}
			aria-valuemin={0}
			aria-valuemax={100}
			aria-valuenow={progressed}
		>
			<div class="mukade-progress-fill" style:--_mukade-progressed={`${progressed}%`}></div>
		</div>
	{:else if variant === 'packets'}
		<div
			class="mukade-progress-packets-track"
			role="progressbar"
			aria-label={ariaLabel}
			aria-valuetext={ariaValuetext}
			aria-valuemin={0}
			aria-valuemax={100}
			aria-valuenow={progressed}
		>
			{#each packets as { sequence, isTransmitting, isDelivered } (sequence)}
				<span class="mukade-progress-packet" class:mukade-progress-transmitting={isTransmitting} class:mukade-progress-delivered={isDelivered}></span>
			{/each}
		</div>
	{/if}
</div>

<style>
	@property --_mukade-progress-width {
		syntax: '*';
		inherits: false;
	}

	@property --_mukade-progress-size {
		syntax: '*';
		inherits: false;
	}

	@property --_mukade-progressed {
		syntax: '*';
		inherits: false;
	}

	.mukade-progress {
		width: var(--_mukade-progress-width, 20rem);
		height: var(--_mukade-progress-size, 0.8rem);
	}

	/* ============ PROGRESS BAR VARIANT STYLE ============ */
	.mukade-progress-track {
		width: 100%;
		height: 100%;

		padding: 0.1rem;

		border: solid 1px var(--mukade-progress-accent, var(--mukade-primary));
		background-color: color-mix(in srgb, var(--mukade-progress-accent, var(--mukade-primary)) 5%, var(--mukade-progress-bg, var(--mukade-bg)));

		box-sizing: border-box;
	}

	.mukade-progress-fill {
		position: relative;
		width: var(--_mukade-progressed, 0%);
		height: 100%;

		background-color: var(--mukade-progress-accent, var(--mukade-primary));

		transition: width 0.5s;
	}

	.mukade-progress-fill::after {
		content: '';

		position: absolute;
		top: 0;
		right: 0;
		bottom: 0;

		width: 0.2rem;
		height: 100%;
		background: var(--mukade-progress-accent, var(--mukade-bright));
		border-right: solid 1px var(--mukade-text);
		box-shadow: 0 0 6px var(--mukade-progress-accent, var(--mukade-bright));
	}

	/* ============ PROGRESS PACKETS VARIANT STYLE ============ */

	.mukade-progress-packets-track {
		display: flex;
		flex-direction: row;

		width: 100%;
		height: 100%;
	}

	.mukade-progress-packet {
		flex: 1;
		height: 100%;

		background-color: var(--mukade-bg-inset);
		border: 0.2rem solid var(--mukade-bg-soft);

		box-sizing: border-box;

		transition:
			background-color 0.5s,
			border-color 0.5s;
	}

	.mukade-progress-packet.mukade-progress-delivered {
		background-color: var(--mukade-progress-accent, var(--mukade-primary));
		border-color: color-mix(in srgb, var(--mukade-progress-accent, var(--mukade-primary)) 15%, var(--mukade-progress-bg, var(--mukade-bg)));
	}

	.mukade-progress-packet.mukade-progress-transmitting {
		animation: transmitting 1s infinite;
	}

	@keyframes transmitting {
		0% {
			background-color: var(--mukade-bg-inset);
			border-color: var(--mukade-bg-soft);
		}
		50% {
			background-color: var(--mukade-progress-accent, var(--mukade-primary));
			border-color: color-mix(in srgb, var(--mukade-progress-accent, var(--mukade-primary)) 15%, var(--mukade-bg));
		}
	}
</style>
