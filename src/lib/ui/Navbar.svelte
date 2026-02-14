<script lang="ts">
	import { goto } from '$app/navigation';
	import { page } from '$app/stores';

	function nav(path: string) {
		goto(path);
	}
</script>

<nav class="navbar">
	<div class="nav-brand">Comfortable-Tech</div>
	<div class="nav-links">
		<button class:active={$page.url.pathname === '/'} on:click={() => nav('/')}>Home</button>
		<button class:active={$page.url.pathname === '/about'} on:click={() => nav('/about')}>About</button>
		<button class:active={$page.url.pathname === '/fullstack'} on:click={() => nav('/fullstack')}>Fullstack</button>
		<button class:active={$page.url.pathname === '/security'} on:click={() => nav('/security')}>Security</button>
		<button class:active={$page.url.pathname === '/iot'} on:click={() => nav('/iot')}>IoT</button>
		<button class:active={$page.url.pathname === '/contact'} on:click={() => nav('/contact')}>Contact</button>
	</div>
</nav>

<style>
	.navbar {
		position: absolute;
		top: clamp(16px, 3vw, 32px);
		left: clamp(12px, 3vw, 32px);
		right: clamp(12px, 3vw, 32px);
		z-index: 30;
		display: flex;
		justify-content: space-between;
		align-items: center;
		gap: 4px;
		pointer-events: none;
	}

	.nav-brand {
		color: white;
		font-family: var(--font-body);
		font-size: clamp(14px, 2vw, 16px);
		font-weight: 600;
		opacity: 0.9;
		pointer-events: auto;
	}

	.nav-links {
		display: flex;
		gap: clamp(4px, 1vw, 8px);
		pointer-events: auto;
	}

	.nav-links button {
		background: transparent;
		border: none;
		color: white;
		cursor: pointer;
		font-size: clamp(12px, 1.5vw, 14px);
		font-family: var(--font-body);
		opacity: 0.6;
		position: relative;
		transition: opacity 0.3s ease;
	}

	.nav-links button.active {
		opacity: 1;
	}

	.nav-links button.active::after {
		content: '';
		position: absolute;
		left: 0;
		bottom: -6px;
		width: 100%;
		height: 2px;
		background: #4cc9f0;
		border-radius: 2px;
	}

	.nav-links button:hover {
		opacity: 1;
	}

	@media (max-width: 768px) {
		.navbar {
			position: fixed;
			flex-direction: column;
			align-items: center;
			gap: 16px;
			padding: 16px 20px 20px 20px;
			background: linear-gradient(to bottom, rgba(11, 26, 43, 0.9), transparent);
			top: 0;
			left: 0;
			right: 0;
		}

		.nav-brand {
			font-size: clamp(18px, 4vw, 24px);
			font-weight: 700;
			opacity: 1;
		}

		.nav-links {
			gap: 6px;
			row-gap: 8px;
			flex-wrap: wrap;
			justify-content: center;
		}

		.nav-links button {
			font-size: 11px;
			background: rgba(255, 255, 255, 0.08);
			border: 1px solid rgba(255, 255, 255, 0.1);
			padding: 4px 10px;
			border-radius: 6px;
		}

		.nav-links button.active {
			background: rgba(76, 201, 240, 0.2);
			border-color: #4cc9f0;
		}

		.nav-links button.active::after {
			display: none;
		}

		.nav-links button:hover {
			background: rgba(255, 255, 255, 0.15);
		}
	}
</style>
