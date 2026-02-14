<!-- Scroll driver for immersive experience (home only) -->
<div class="scroll-driver"></div>

<!-- Home positioning content -->
<section class="home-positioning">
	<p class="lead">
		We design secure, scalable, and resilient digital systems. From distributed backend
		architecture to offensive security and embedded IoT engineering.
	</p>

	<div class="domains">
		<div class="domain">
			<h3>Fullstack Systems</h3>
			<p>Cloud-native backend and distributed API architectures.</p>
		</div>

		<div class="domain">
			<h3>Offensive Security</h3>
			<p>Application and infrastructure penetration testing.</p>
		</div>

		<div class="domain">
			<h3>IoT Engineering</h3>
			<p>Device-to-cloud embedded systems and telemetry pipelines.</p>
		</div>
	</div>
</section>

<style>
	.scroll-driver {
		position: relative;
		width: 100%;
		height: 500vh;
		z-index: 1;
	}

	.home-positioning {
		position: absolute;
		left: clamp(20px, 6vw, 120px);
		bottom: 120px;
		max-width: 700px;
		z-index: 10;
		color: white;
		font-family: var(--font-body);
		pointer-events: none;
	}

	.lead {
		font-size: clamp(16px, 2vw, 20px);
		opacity: 0.85;
		margin-bottom: 40px;
		line-height: 1.6;
	}

	.domains {
		display: flex;
		gap: clamp(24px, 4vw, 40px);
		flex-wrap: wrap;
	}

	.domain {
		flex: 1;
		min-width: 200px;
	}

	.domain h3 {
		font-family: var(--font-heading);
		font-size: clamp(14px, 1.5vw, 16px);
		margin-bottom: 8px;
		letter-spacing: -0.02em;
	}

	.domain p {
		font-size: clamp(12px, 1.2vw, 14px);
		opacity: 0.7;
		line-height: 1.5;
	}

	@media (max-width: 768px) {
		.home-positioning {
			left: 20px;
			right: 20px;
			bottom: 80px;
		}

		.lead {
			font-size: 14px;
		}

		.domains {
			flex-direction: column;
			gap: 20px;
		}
	}
</style>
