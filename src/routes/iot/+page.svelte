<svelte:head>
	<title>IoT & Embedded Systems - Comfortable-tech</title>
</svelte:head>

<script lang="ts">
	import Reveal from '$lib/ui/Reveal.svelte';
</script>

<Reveal>
	<section class="hero">
		<h1>IoT & Embedded Systems Engineering</h1>
		<p>
			From microcontroller firmware to secure cloud telemetry pipelines. Production-ready embedded
			systems built for reliability.
		</p>
	</section>
</Reveal>

<Reveal>
	<section class="architecture">
		<h2>Device-to-Cloud Architecture</h2>

		<p>
			We design end-to-end IoT pipelines including firmware, secure communication layers, and
			cloud ingestion services.
		</p>

		<ul>
			<li>ESP32 & microcontroller firmware development</li>
			<li>MQTT / HTTP telemetry pipelines</li>
			<li>Secure TLS communication</li>
			<li>Edge-side preprocessing</li>
			<li>Cloud ingestion & storage</li>
		</ul>
	</section>
</Reveal>

<Reveal>
	<section class="embedded">
		<h2>Embedded Engineering</h2>

		<ul>
			<li>Arduino & ESP32 firmware architecture</li>
			<li>FreeRTOS task design</li>
			<li>Power optimization strategies</li>
			<li>Sensor integration & calibration</li>
			<li>OTA firmware update mechanisms</li>
		</ul>
	</section>
</Reveal>

<Reveal>
	<section class="iot-security">
		<h2>Security in IoT Systems</h2>

		<p>
			Embedded systems are part of the attack surface. Security is integrated from firmware to
			backend.
		</p>

		<ul>
			<li>Secure boot strategies</li>
			<li>Encrypted communication channels</li>
			<li>Token-based device authentication</li>
			<li>API rate limiting & anomaly detection</li>
		</ul>
	</section>
</Reveal>

<Reveal>
	<section class="hardware">
		<h2>Hardware & PCB Design</h2>

		<ul>
			<li>Custom PCB design & layout</li>
			<li>Sensor board integration</li>
			<li>Power supply optimization</li>
			<li>Prototype-to-production iteration</li>
		</ul>
	</section>
</Reveal>

<Reveal>
	<section class="scenario">
		<h2>Example: Industrial Telemetry System</h2>

		<p>
			Designed a distributed sensor network using ESP32 devices streaming encrypted telemetry
			data to a Kubernetes-based backend, with real-time dashboard visualization.
		</p>
	</section>
</Reveal>

<Reveal>
	<section class="cta">
		<h2>Build Reliable Connected Systems</h2>
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

	.architecture {
		padding: 80px 10vw;
		max-width: 900px;
	}

	.architecture h2 {
		font-size: clamp(24px, 4vw, 32px);
		margin-bottom: 20px;
		font-weight: 600;
	}

	.architecture p {
		font-size: clamp(14px, 1.5vw, 16px);
		opacity: 0.85;
		line-height: 1.6;
		margin-bottom: 20px;
	}

	.architecture ul {
		padding-left: 20px;
		font-size: clamp(14px, 1.5vw, 16px);
		opacity: 0.85;
		line-height: 1.8;
	}

	.embedded {
		padding: 80px 10vw;
		max-width: 900px;
	}

	.embedded h2 {
		font-size: clamp(24px, 4vw, 32px);
		margin-bottom: 20px;
		font-weight: 600;
	}

	.embedded ul {
		padding-left: 20px;
		font-size: clamp(14px, 1.5vw, 16px);
		opacity: 0.85;
		line-height: 1.8;
	}

	.iot-security {
		padding: 80px 10vw;
		max-width: 900px;
	}

	.iot-security h2 {
		font-size: clamp(24px, 4vw, 32px);
		margin-bottom: 20px;
		font-weight: 600;
	}

	.iot-security p {
		font-size: clamp(14px, 1.5vw, 16px);
		opacity: 0.85;
		line-height: 1.6;
		margin-bottom: 20px;
	}

	.iot-security ul {
		padding-left: 20px;
		font-size: clamp(14px, 1.5vw, 16px);
		opacity: 0.85;
		line-height: 1.8;
	}

	.hardware {
		padding: 80px 10vw;
		max-width: 900px;
	}

	.hardware h2 {
		font-size: clamp(24px, 4vw, 32px);
		margin-bottom: 20px;
		font-weight: 600;
	}

	.hardware ul {
		padding-left: 20px;
		font-size: clamp(14px, 1.5vw, 16px);
		opacity: 0.85;
		line-height: 1.8;
	}

	.scenario {
		padding: 80px 10vw;
		max-width: 900px;
	}

	.scenario h2 {
		font-size: clamp(24px, 4vw, 32px);
		margin-bottom: 20px;
		font-weight: 600;
	}

	.scenario p {
		font-size: clamp(14px, 1.5vw, 16px);
		opacity: 0.85;
		line-height: 1.6;
	}

	.cta {
		padding: 100px 10vw;
		font-size: clamp(20px, 3vw, 24px);
		font-weight: 600;
	}
</style>
