<script lang="ts">
	import { goto } from '$app/navigation';

	function nav(path: string) {
		goto(path);
	}
</script>

<nav class="navbar">
	<div class="nav-brand">Comfortable-Tech</div>
	<div class="nav-links">
		<button on:click={() => nav('/')}>Home</button>
		<button on:click={() => nav('/about')}>About</button>
		<button on:click={() => nav('/fullstack')}>Fullstack</button>
		<button on:click={() => nav('/security')}>Security</button>
		<button on:click={() => nav('/iot')}>IoT</button>
		<button on:click={() => nav('/contact')}>Contact</button>
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
		font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu,
			Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
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
		font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu,
			Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
		opacity: 0.7;
		transition: opacity 0.3s ease;
	}

	.nav-links button:hover {
		opacity: 1;
	}

	@media (max-width: 768px) {
		.navbar {
			position: fixed;
			flex-direction: column;
			align-items: center;
			gap: 12px;
			padding: 16px 20px;
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
			gap: 8px;
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

		.nav-links button:hover {
			background: rgba(255, 255, 255, 0.15);
		}
	}
</style>
