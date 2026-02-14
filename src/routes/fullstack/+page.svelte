<svelte:head>
	<title>Fullstack Engineering - Comfortable-tech</title>
</svelte:head>

<script lang="ts">
	import Reveal from '$lib/ui/Reveal.svelte';
</script>

<Reveal>
	<section class="hero">
		<h1>Fullstack Engineering</h1>
		<p>
			Scalable backend systems, distributed architectures, and cloud-native solutions built
			for reliability and growth.
		</p>
	</section>
</Reveal>

<Reveal>
	<section class="capabilities">
		<div class="block">
			<h2>API & Backend Systems</h2>
			<p>
				High-performance REST and real-time systems using Node.js, Go, TypeScript, and
				cloud-native patterns.
			</p>
		</div>

		<div class="block">
			<h2>Distributed Architecture</h2>
			<p>
				Microservices, event-driven systems, horizontal scaling, and resilient
				infrastructure design.
			</p>
		</div>

		<div class="block">
			<h2>Cloud & DevOps</h2>
			<p>
				Kubernetes orchestration, CI/CD pipelines, observability, and production-grade
				deployments.
			</p>
		</div>
	</section>
</Reveal>

<Reveal>
	<section class="case-study">
		<h2>Example: Distributed API System</h2>

		<p>
			Designed and implemented horizontally scalable REST API architecture with Kubernetes
			orchestration and PostgreSQL clustering.
		</p>

		<ul>
			<li>Load-balanced stateless services</li>
			<li>JWT-based auth with RBAC</li>
			<li>Observability with metrics & logging</li>
			<li>Zero-downtime deployments</li>
		</ul>
	</section>
</Reveal>

<Reveal>
	<section class="architecture-philosophy">
		<h2>Architecture Philosophy</h2>

		<p>
			Every system we design prioritizes scalability, observability, and failure isolation. We
			avoid premature microservices and choose modular monoliths when appropriate.
		</p>

		<ul>
			<li>Horizontal scaling over vertical dependency</li>
			<li>Stateless services with externalized state</li>
			<li>Clear domain boundaries</li>
			<li>Secure-by-design API surface</li>
		</ul>
	</section>
</Reveal>

<Reveal>
	<section class="production-readiness">
		<h2>Production Readiness</h2>

		<p>
			Engineering does not stop at feature delivery. We design systems for long-term
			maintainability and operational clarity.
		</p>

		<ul>
			<li>Structured logging and metrics</li>
			<li>Health checks & readiness probes</li>
			<li>Graceful shutdown patterns</li>
			<li>Rate limiting and abuse prevention</li>
		</ul>
	</section>
</Reveal>

<Reveal>
	<section class="cta">
		<h2>Build Scalable Systems With Confidence</h2>
	</section>
</Reveal>

<style>
	section {
		position: relative;
		z-index: 10;
		color: white;
		font-family: var(--font-body);
	}

	.hero {
		padding: 120px 10vw 60px;
		max-width: 900px;
	}

	.hero h1 {
		font-size: clamp(42px, 6vw, 72px);
		margin-bottom: 24px;
		font-weight: 700;
		letter-spacing: -0.03em;
	}

	.hero p {
		font-size: clamp(16px, 2vw, 20px);
		opacity: 0.9;
		line-height: 1.6;
	}

	.capabilities {
		display: grid;
		grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
		gap: 48px;
		padding: 60px 10vw;
	}

	.block h2 {
		font-size: clamp(20px, 3vw, 24px);
		margin-bottom: 12px;
		font-weight: 600;
	}

	.block p {
		font-size: clamp(14px, 1.5vw, 16px);
		opacity: 0.85;
		line-height: 1.6;
	}

	.case-study {
		padding: 80px 10vw;
		max-width: 900px;
	}

	.case-study h2 {
		font-size: clamp(24px, 4vw, 32px);
		margin-bottom: 20px;
		font-weight: 600;
	}

	.case-study p {
		font-size: clamp(14px, 1.5vw, 16px);
		opacity: 0.85;
		line-height: 1.6;
		margin-bottom: 20px;
	}

	.case-study ul {
		padding-left: 20px;
		font-size: clamp(14px, 1.5vw, 16px);
		opacity: 0.85;
		line-height: 1.8;
	}

	.architecture-philosophy {
		padding: 80px 10vw;
		max-width: 900px;
	}

	.architecture-philosophy h2 {
		font-size: clamp(24px, 4vw, 32px);
		margin-bottom: 20px;
		font-weight: 600;
	}

	.architecture-philosophy p {
		font-size: clamp(14px, 1.5vw, 16px);
		opacity: 0.85;
		line-height: 1.6;
		margin-bottom: 20px;
	}

	.architecture-philosophy ul {
		padding-left: 20px;
		font-size: clamp(14px, 1.5vw, 16px);
		opacity: 0.85;
		line-height: 1.8;
	}

	.production-readiness {
		padding: 80px 10vw;
		max-width: 900px;
	}

	.production-readiness h2 {
		font-size: clamp(24px, 4vw, 32px);
		margin-bottom: 20px;
		font-weight: 600;
	}

	.production-readiness p {
		font-size: clamp(14px, 1.5vw, 16px);
		opacity: 0.85;
		line-height: 1.6;
		margin-bottom: 20px;
	}

	.production-readiness ul {
		padding-left: 20px;
		font-size: clamp(14px, 1.5vw, 16px);
		opacity: 0.85;
		line-height: 1.8;
	}

	.cta {
		padding: 100px 10vw;
		font-size: clamp(20px, 3vw, 24px);
		font-weight: 600;
	}
</style>
