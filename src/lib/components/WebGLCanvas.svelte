<script lang="ts">
	import { onMount, onDestroy } from 'svelte';
	import { Experience } from '$lib/experience/Experience.js';

	let canvasElement: HTMLCanvasElement;
	let experience: Experience | null = null;

	onMount(() => {
		if (!canvasElement) {
			throw new Error('Canvas element not found');
		}

		// Initialize the WebGL experience
		experience = new Experience({ canvas: canvasElement });
	});

	onDestroy(() => {
		// Clean up the WebGL experience
		if (experience) {
			experience.destroy();
			experience = null;
		}
	});
</script>

<canvas bind:this={canvasElement} class="webgl-canvas" />

<style>
	.webgl-canvas {
		position: fixed;
		top: 0;
		left: 0;
		width: 100%;
		height: 100%;
		display: block;
		outline: none;
	}
</style>
