<script lang="ts">
	import { phaseStore } from '$lib/stores/phase.js';
	import { ExperiencePhase } from '$lib/experience/Phase.js';
	import { onMount } from 'svelte';

	let phase: ExperiencePhase = 0;
	let visible = true;
	let currentTitle = 'Engineering Secure and Scalable Systems';

	// Hero mode when in INTRO phase
	$: isHero = phase === ExperiencePhase.INTRO;

	// Async function for cinematic text transition
	async function updateTitle(newTitle: string) {
		visible = false;

		await new Promise((resolve) => setTimeout(resolve, 300));

		currentTitle = newTitle;

		visible = true;
	}

	function getTitle(currentPhase: ExperiencePhase): string {
		switch (currentPhase) {
			case ExperiencePhase.INTRO:
				return 'Engineering Secure and Scalable Systems';
			case ExperiencePhase.FULLSTACK:
				return 'Fullstack Software Engineering';
			case ExperiencePhase.SECURITY:
				return 'Offensive Security and Penetration Testing';
			case ExperiencePhase.IOT:
				return 'IoT and Embedded Systems Engineering';
			case ExperiencePhase.CONTACT:
				return "Let's Build Secure Systems Together";
			default:
				return 'Engineering Secure and Scalable Systems';
		}
	}

	onMount(() => {
		console.log('Overlay mounted');
		// Initialize with current phase title
		currentTitle = getTitle(phase);

		// Subscribe to phase changes
		const unsubscribe = phaseStore.subscribe((value) => {
			phase = value;
			console.log('Overlay: Phase changed to', value, '=', ExperiencePhase[value]);
			updateTitle(getTitle(value));
		});

		return () => unsubscribe();
	});
</script>

<div class="identity-container" class:hero={isHero} class:compact={!isHero}>
	<h2 class="title" class:hidden={!visible}>{currentTitle}</h2>
</div>

<style>
	.identity-container {
		position: absolute;
		left: clamp(20px, 6vw, 120px);
		transition: transform 0.6s cubic-bezier(0.22, 1, 0.36, 1), font-size 0.6s ease,
			opacity 0.6s ease;
		z-index: 25;
		pointer-events: none;
	}

	/* Hero mode - centered large text */
	.identity-container.hero {
		top: 50%;
		transform: translateY(-50%);
		left: 50%;
		text-align: center;
	}

	.identity-container.hero .title {
		font-size: clamp(24px, 4vw, 36px);
		color: white;
		font-family: var(--font-heading);
		font-weight: 700;
		letter-spacing: -0.03em;
		margin: 0;
		line-height: 1.4;
		opacity: 1;
		transform: translateY(0px);
		transition: all 0.4s ease, font-size 0.8s cubic-bezier(0.22, 1, 0.36, 1);
	}

	/* Compact mode - top-left subtitle */
	.identity-container.compact {
		top: clamp(80px, 10vw, 120px);
		transform: none;
	}

	.identity-container.compact .title {
		font-size: clamp(14px, 2vw, 18px);
		color: white;
		font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu,
			Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
		letter-spacing: 0.1em;
		margin: 0;
		line-height: 1.4;
		opacity: 0.8;
		transform: translateY(0px);
		transition: all 0.4s ease, font-size 0.8s cubic-bezier(0.22, 1, 0.36, 1),
			opacity 0.8s cubic-bezier(0.22, 1, 0.36, 1);
	}

	/* Hidden state for title transitions */
	.title.hidden {
		opacity: 0 !important;
		transform: translateY(20px) !important;
	}

	@media (max-width: 768px) {
		.identity-container {
			left: 20px;
			right: 20px;
		}

		.identity-container.compact {
			top: 130px;
			left: 20px;
			text-align: center;
		}

		.identity-container.compact .title {
			font-size: 14px;
		}

		.identity-container.hero {
			top: 45%;
			left: 50%;
			transform: translateX(-50%);
		}

		.identity-container.hero .title {
			font-size: clamp(18px, 4vw, 24px);
		}
	}
</style>
