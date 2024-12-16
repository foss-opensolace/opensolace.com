<script lang="ts">
	import { fade } from 'svelte/transition';
	import '../app.css';

	let { children } = $props();

	let show = $state(false);

	$effect(() => {
		show = true;
	});
</script>

{#if show}
	<main class="flex min-h-[calc(100vh-36px)] w-full flex-col items-center justify-center p-4">
		<img
			src="/opensolace.svg"
			alt="Opensolace logo"
			class="w-full max-w-96"
			transition:fade={{ delay: 500, duration: 1500 }}
		/>

		<div class="h-24"></div>

		<div transition:fade={{ delay: 1000, duration: 1500 }}>
			{@render children()}
		</div>
	</main>

	<footer
		class="p-2 text-center font-serif text-sm text-neutral-700"
		transition:fade={{ delay: 1500, duration: 1500 }}
	>
		Opensolace {[...new Set([2024, new Date().getFullYear()])].join('-')}
	</footer>
{/if}
