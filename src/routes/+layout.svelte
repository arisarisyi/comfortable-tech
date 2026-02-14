<script lang="ts">
	import { page } from '$app/stores';
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
		{#if $page.url.pathname === '/'}
			<Overlay />
			<PortfolioOverlay />
		{/if}
	</div>

	<!-- Route content -->
	<div class="layout-content">
		<slot />
	</div>
</div>

<style>
	:root {
		--font-heading: 'Space Grotesk', sans-serif;
		--font-body: 'Inter', sans-serif;
	}

	:global(body) {
		margin: 0;
		padding: 0;
		background-color: #0b1a2b;
		font-family: var(--font-body);
	}

	:global(h1),
	:global(h2),
	:global(h3) {
		font-family: var(--font-heading);
		letter-spacing: -0.02em;
	}

	:global(.navbar) {
		font-family: var(--font-body);
		font-weight: 500;
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
</style>
