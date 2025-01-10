<script lang="ts">
	import type { Snippet } from 'svelte';
	import '../app.css';

	type Props = {
		children: Snippet<[]>;
	};

	let { children }: Props = $props();
</script>

<noscript>
	<div
		class="fixed inset-x-0 bottom-0 flex items-center justify-center gap-4 bg-yellow-400 p-1 text-black"
	>
		<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
			<path
				fill="currentColor"
				d="M1 21L12 2l11 19zm11-3q.425 0 .713-.288T13 17t-.288-.712T12 16t-.712.288T11 17t.288.713T12 18m-1-3h2v-5h-2z"
			/>
		</svg>

		<p>
			You're viewing the platform without allowing JavaScript. Some features may not work as
			intended. Please enable JavaScript for the best experience.
		</p>
	</div>
</noscript>

<div class="container mx-auto">
	<header class="sticky top-0 flex items-center gap-4 p-4">
		<img src="/opensolace-icon.svg" alt="Opensolace logo" class="w-full max-w-8" />
	</header>

	<main class="min-h-screen p-4">
		{@render children()}
	</main>

	<footer class="flex items-center justify-between p-2 font-serif text-sm">
		<div class="flex gap-8">
			<ul>
				<li>About Us</li>
				<li>Projects</li>
				<li>FAQ</li>
				<li>Support</li>
			</ul>

			<ul>
				<li>Careers</li>
				<li>Open Source</li>
			</ul>

			<ul>
				<li>Terms of Service</li>
				<li>Cookies Policy</li>
				<li>License</li>
			</ul>
		</div>

		<img src="/opensolace.svg" alt="" class="size-40" />
	</footer>
</div>
