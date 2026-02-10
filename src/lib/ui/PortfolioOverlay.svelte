<script lang="ts">
	import { phaseStore } from '$lib/stores/phase.js';
	import { ExperiencePhase } from '$lib/experience/Phase.js';
	import { getPortfolioByPhase, type PortfolioItem } from '$lib/data/portfolio.js';
	import FeaturedProject from './FeaturedProject.svelte';

	$: phase = $phaseStore;

	let items: PortfolioItem[] = [];

	$: items = getPortfolioByPhase(phase);

	// Featured project (first one with featured=true or first item)
	$: featured = items.find((item) => item.featured);

	// Secondary projects (non-featured)
	$: secondary = items.filter((item) => !item.featured);
</script>

{#if featured}
	<FeaturedProject project={featured} />
{/if}

<div class="portfolio-container">
	{#if secondary.length > 0}
		<div class="portfolio-list">
			{#each secondary as item}
				<div class="portfolio-card">
					<h3>{item.title}</h3>
					<p>{item.description}</p>
					<div class="tech-list">
						{#each item.technologies as tech}
							<span class="tech">{tech}</span>
						{/each}
					</div>
				</div>
			{/each}
		</div>
	{/if}
</div>

<style>
	.portfolio-container {
		position: absolute;
		right: clamp(20px, 6vw, 120px);
		top: calc(50% + clamp(180px, 20vw, 240px));
		width: clamp(280px, 28vw, 400px);
		pointer-events: none;
		z-index: 24;
	}

	.portfolio-list {
		display: flex;
		flex-direction: column;
		gap: clamp(12px, 2vw, 16px);
	}

	.portfolio-card {
		background: rgba(255, 255, 255, 0.05);
		padding: clamp(12px, 2vw, 16px);
		border-radius: 12px;
		backdrop-filter: blur(10px);
		border: 1px solid rgba(255, 255, 255, 0.1);
		transition: all 0.3s ease;
	}

	.portfolio-card h3 {
		font-size: clamp(14px, 1.8vw, 16px);
		margin-bottom: 8px;
		color: white;
		margin: 0 0 8px 0;
		font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu,
			Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
		font-weight: 500;
	}

	.portfolio-card p {
		font-size: clamp(12px, 1.5vw, 13px);
		opacity: 0.8;
		margin-bottom: 12px;
		margin: 0 0 12px 0;
		color: white;
		font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu,
			Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
		line-height: 1.4;
	}

	.tech-list {
		display: flex;
		flex-wrap: wrap;
		gap: clamp(6px, 1vw, 8px);
	}

	.tech {
		font-size: clamp(10px, 1.2vw, 11px);
		padding: 4px 8px;
		background: rgba(100, 200, 255, 0.15);
		border-radius: 6px;
		color: white;
		font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu,
			Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
	}

	@media (max-width: 768px) {
		.portfolio-container {
			display: none;
		}
	}
</style>
