<script lang="ts">
	import WebGLCanvas from '$lib/components/WebGLCanvas.svelte';
	import Overlay from '$lib/ui/Overlay.svelte';
	import PortfolioOverlay from '$lib/ui/PortfolioOverlay.svelte';
	import Navbar from '$lib/ui/Navbar.svelte';
</script>

<div class="layout-root">
	<!-- Persistent WebGL background -->
	<WebGLCanvas />

	<!-- Overlay layout system -->
	<div class="layout-overlay">
		<Navbar />
		<Overlay />
		<PortfolioOverlay />
	</div>

	<!-- Route content -->
	<div class="layout-content">
		<slot />
	</div>

	<!-- Scroll driver -->
	<div class="scroll-driver"></div>
</div>

<style>
	:global(body) {
		margin: 0;
		padding: 0;
		background-color: #0b1a2b;
	}

	.layout-root {
		position: relative;
		width: 100%;
		height: 100%;
		min-height: 100vh;
		background: #0b1a2b;
	}

	.layout-overlay {
		position: fixed;
		inset: 0;
		z-index: 20;
		pointer-events: none;
	}

	.layout-overlay > * {
		pointer-events: auto;
	}

	.layout-content {
		position: relative;
		z-index: 10;
	}

	.scroll-driver {
		position: relative;
		width: 100%;
		height: 500vh;
		z-index: 1;
	}
</style>
