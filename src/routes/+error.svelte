<script lang="ts">
	import { page } from '$app/state';
</script>

<svelte:head>
	<title>Opensolace - Error</title>
</svelte:head>

<p class="text-red-400">
	{#if page.status === 404}
		Sorry, but the page you are looking for does not exist.
	{:else if page.status === 500}
		Sorry, but something went wrong.
	{:else}
		Something went wrong.
	{/if}
</p>

<div class="h-8"></div>

<a href="/" class="underline">Home</a>
