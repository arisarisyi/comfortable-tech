<svelte:head>
	<title>Offensive Security - Comfortable-tech</title>
</svelte:head>

<script lang="ts">
	import Reveal from '$lib/ui/Reveal.svelte';
</script>

<Reveal>
	<section class="hero">
		<h1>Offensive Security & Penetration Testing</h1>
		<p>
			Real-world adversarial simulation to uncover vulnerabilities before they are exploited.
		</p>
	</section>
</Reveal>

<Reveal>
	<section class="threat-approach">
		<h2>Threat-Driven Testing</h2>
		<p>
			We model realistic attacker behavior rather than relying on automated scanners alone.
			Testing is aligned with business impact and attack surface exposure.
		</p>

		<ul>
			<li>Application attack surface mapping</li>
			<li>Privilege escalation path analysis</li>
			<li>Authentication & authorization abuse testing</li>
			<li>API abuse and logic flaw discovery</li>
		</ul>
	</section>
</Reveal>

<Reveal>
	<section class="methodology">
		<h2>Testing Methodology</h2>

		<ol>
			<li>Reconnaissance & attack surface mapping</li>
			<li>Manual vulnerability discovery</li>
			<li>Exploit validation</li>
			<li>Post-exploitation impact analysis</li>
			<li>Clear remediation guidance</li>
		</ol>
	</section>
</Reveal>

<Reveal>
	<section class="capabilities">
		<h2>Technical Capabilities</h2>

		<ul>
			<li>OWASP Top 10 deep validation</li>
			<li>Business logic flaw discovery</li>
			<li>JWT & RBAC misconfiguration testing</li>
			<li>SSRF, IDOR, deserialization analysis</li>
			<li>Cloud misconfiguration review</li>
		</ul>
	</section>
</Reveal>

<Reveal>
	<section class="reporting">
		<h2>Actionable Reporting</h2>
		<p>
			Findings are documented with:
		</p>

		<ul>
			<li>Technical reproduction steps</li>
			<li>Proof-of-concept payloads</li>
			<li>Impact severity assessment</li>
			<li>Mitigation and secure coding guidance</li>
		</ul>
	</section>
</Reveal>

<Reveal>
	<section class="cta">
		<h2>Secure Your Systems Before Attackers Do</h2>
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

	.threat-approach {
		padding: 80px 10vw;
		max-width: 900px;
	}

	.threat-approach h2 {
		font-size: clamp(24px, 4vw, 32px);
		margin-bottom: 20px;
		font-weight: 600;
	}

	.threat-approach p {
		font-size: clamp(14px, 1.5vw, 16px);
		opacity: 0.85;
		line-height: 1.6;
		margin-bottom: 20px;
	}

	.threat-approach ul {
		padding-left: 20px;
		font-size: clamp(14px, 1.5vw, 16px);
		opacity: 0.85;
		line-height: 1.8;
	}

	.methodology {
		padding: 80px 10vw;
		max-width: 900px;
	}

	.methodology h2 {
		font-size: clamp(24px, 4vw, 32px);
		margin-bottom: 20px;
		font-weight: 600;
	}

	.methodology ol {
		padding-left: 20px;
		font-size: clamp(14px, 1.5vw, 16px);
		opacity: 0.85;
		line-height: 1.8;
	}

	.capabilities {
		padding: 80px 10vw;
		max-width: 900px;
	}

	.capabilities h2 {
		font-size: clamp(24px, 4vw, 32px);
		margin-bottom: 20px;
		font-weight: 600;
	}

	.capabilities ul {
		padding-left: 20px;
		font-size: clamp(14px, 1.5vw, 16px);
		opacity: 0.85;
		line-height: 1.8;
	}

	.reporting {
		padding: 80px 10vw;
		max-width: 900px;
	}

	.reporting h2 {
		font-size: clamp(24px, 4vw, 32px);
		margin-bottom: 20px;
		font-weight: 600;
	}

	.reporting p {
		font-size: clamp(14px, 1.5vw, 16px);
		opacity: 0.85;
		line-height: 1.6;
		margin-bottom: 20px;
	}

	.reporting ul {
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
