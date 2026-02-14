<script lang="ts">
	export let type: 'fullstack' | 'iot' = 'fullstack';
</script>

<div class="diagram-container">
	<svg viewBox="0 0 800 400" class="diagram-svg">
		<!-- Nodes -->
		<rect x="50" y="150" width="150" height="80" rx="12" class="node" />
		<text x="125" y="195" text-anchor="middle">Client</text>

		<rect x="250" y="150" width="150" height="80" rx="12" class="node" />
		<text x="325" y="195" text-anchor="middle">API</text>

		<rect x="450" y="120" width="150" height="80" rx="12" class="node" />
		<text x="525" y="165" text-anchor="middle">Services</text>

		<rect x="450" y="220" width="150" height="80" rx="12" class="node" />
		<text x="525" y="265" text-anchor="middle">Database</text>

		<!-- Connections -->
		<line x1="200" y1="190" x2="250" y2="190" class="flow" />
		<line x1="400" y1="190" x2="450" y2="160" class="flow" />
		<line x1="400" y1="190" x2="450" y2="260" class="flow" />
	</svg>
</div>

<style>
	.diagram-container {
		width: 100%;
		max-width: 900px;
		margin: 80px auto;
	}

	.diagram-svg {
		width: 100%;
		height: auto;
	}

	.node {
		fill: rgba(255, 255, 255, 0.05);
		stroke: rgba(255, 255, 255, 0.2);
		stroke-width: 1.5;
	}

	.flow {
		stroke: #4cc9f0;
		stroke-width: 2;
		stroke-dasharray: 8;
		animation: dash 4s linear infinite;
	}

	@keyframes dash {
		from {
			stroke-dashoffset: 0;
		}
		to {
			stroke-dashoffset: -100;
		}
	}

	text {
		fill: white;
		font-size: 14px;
		font-family: var(--font-body);
	}
</style>
