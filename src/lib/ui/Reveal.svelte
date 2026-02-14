<script lang="ts">
	import { onMount, onDestroy } from 'svelte';

	let visible = false;
	let element: HTMLElement;
	let observer: IntersectionObserver;

	onMount(() => {
		observer = new IntersectionObserver(
			([entry]) => {
				if (entry.isIntersecting) {
					visible = true;
					observer.disconnect();
				}
			},
			{ threshold: 0.2 }
		);

		observer.observe(element);

		return () => {
			observer.disconnect();
		};
	});
</script>

<div bind:this={element} class="reveal" class:visible={visible}>
	<slot />
</div>

<style>
	.reveal {
		opacity: 0;
		transform: translateY(40px);
		transition: opacity 0.8s cubic-bezier(0.22, 1, 0.36, 1),
			transform 0.8s cubic-bezier(0.22, 1, 0.36, 1);
	}

	.reveal.visible {
		opacity: 1;
		transform: translateY(0);
	}
</style>
