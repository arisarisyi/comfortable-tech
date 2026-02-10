<script lang="ts">
	import type { PortfolioItem } from '$lib/data/portfolio.js';
	import { onMount } from 'svelte';

	export let project: PortfolioItem;

	let visible = true;
	let currentProject: PortfolioItem = project;
	let offsetX = 0;
	let offsetY = 0;

	// Reactive handler for project changes
	$: if (project && project.id !== currentProject?.id) {
		transitionProject(project);
	}

	// Async transition function
	async function transitionProject(newProject: PortfolioItem) {
		visible = false;

		await new Promise((r) => setTimeout(r, 400));

		currentProject = newProject;

		visible = true;
	}

	// Mouse move handler for parallax effect
	function onMouseMove(event: MouseEvent) {
		const x = event.clientX / window.innerWidth - 0.5;
		const y = event.clientY / window.innerHeight - 0.5;

		offsetX = x * 20;
		offsetY = y * 20;
	}

	onMount(() => {
		window.addEventListener('mousemove', onMouseMove);

		return () => {
			window.removeEventListener('mousemove', onMouseMove);
		};
	});
</script>

<div
	class="featured-container"
	style="transform: translateY(-50%) translateX({offsetX}px) translateY({offsetY}px);"
>
	<div class="featured-card" class:hidden={!visible}>
		<h2 class="featured-title">{currentProject.title}</h2>
		<p class="featured-description">{currentProject.description}</p>
		<div class="featured-tech">
			{#each currentProject.technologies as tech}
				<span class="tech-badge">{tech}</span>
			{/each}
		</div>
	</div>
</div>

<style>
	.featured-container {
		position: absolute;
		right: clamp(20px, 6vw, 120px);
		top: 50%;
		width: clamp(280px, 32vw, 520px);
		pointer-events: none;
		z-index: 26;
		transition: transform 0.5s cubic-bezier(0.22, 1, 0.36, 1), opacity 0.5s ease;
	}

	.featured-card {
		background: rgba(255, 255, 255, 0.06);
		border: 1px solid rgba(255, 255, 255, 0.12);
		backdrop-filter: blur(20px);
		border-radius: 16px;
		padding: clamp(20px, 3vw, 32px);
		box-shadow: 0 0 40px rgba(80, 180, 255, 0.15);
		opacity: 1;
		transform: translateY(0px) scale(1);
		transition: opacity 0.5s ease, transform 0.5s ease;
	}

	.featured-card.hidden {
		opacity: 0;
		transform: translateY(40px) scale(0.96);
	}

	.featured-title {
		font-size: clamp(20px, 3vw, 28px);
		margin-bottom: clamp(12px, 2vw, 16px);
		margin: 0 0 clamp(12px, 2vw, 16px) 0;
		color: white;
		font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu,
			Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
		font-weight: 600;
	}

	.featured-description {
		font-size: clamp(14px, 1.5vw, 16px);
		opacity: 0.8;
		margin-bottom: clamp(16px, 2vw, 20px);
		margin: 0 0 clamp(16px, 2vw, 20px) 0;
		line-height: 1.6;
		color: white;
		font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu,
			Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
	}

	.featured-tech {
		display: flex;
		flex-wrap: wrap;
		gap: clamp(8px, 1.5vw, 10px);
	}

	.tech-badge {
		background: rgba(80, 180, 255, 0.15);
		padding: 6px 12px;
		border-radius: 8px;
		font-size: clamp(11px, 1.3vw, 13px);
		color: white;
		font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu,
			Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
	}

	@media (max-width: 768px) {
		.featured-container {
			left: 20px;
			right: 20px;
			width: auto;
			top: auto;
			bottom: 80px;
			transform: none;
		}

		.featured-card {
			padding: 16px;
		}

		.featured-title {
			font-size: 18px;
			margin-bottom: 10px;
		}

		.featured-description {
			font-size: 13px;
			margin-bottom: 14px;
			line-height: 1.5;
		}

		.featured-tech {
			gap: 6px;
		}

		.tech-badge {
			font-size: 10px;
			padding: 4px 8px;
		}
	}
</style>
