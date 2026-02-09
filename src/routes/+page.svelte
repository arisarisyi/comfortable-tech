<script lang="ts">
	import WebGLCanvas from '$lib/components/WebGLCanvas.svelte';
</script>

<svelte:head>
	<title>Comfortable Tech - WebGL Experience</title>
	<meta name="description" content="WebGL experience powered by Three.js and SvelteKit" />
</svelte:head>

<WebGLCanvas />

<!-- Scrollable height for testing scroll tracking -->
<div style="height: 400vh;"></div>

<style>
	:global(body) {
		margin: 0;
		padding: 0;
		background-color: #1a1a2e;
	}
</style>
