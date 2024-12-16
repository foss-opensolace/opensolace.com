<script lang="ts">
	import '../app.css';

	let { children } = $props();
</script>

<main class="flex min-h-[calc(100vh-36px)] w-full flex-col items-center justify-center p-4">
	<img src="/opensolace.svg" alt="Opensolace logo" class="w-full max-w-96" />

	<div class="h-24"></div>

	{@render children()}
</main>

<footer class="p-2 text-center font-serif text-sm text-neutral-700">
	Opensolace {[...new Set([2024, new Date().getFullYear()])].join('-')}
</footer>
