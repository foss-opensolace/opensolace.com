<script lang="ts">
	import type { Snippet } from 'svelte';

	type Image = {
		src: string;
		alt?: string;
	};

	type Props = {
		title?: string;
		children?: Snippet<[]>;
		type?: 'line' | 'small' | 'large';
		anchor?: string;
		image?: Image;
	};

	let { title, children, type = 'large', anchor, image }: Props = $props();

	function generateImageClass(): string {
		const defaults = 'border-neutral-900 object-contain';

		switch (type) {
			case 'large':
				return `${defaults} h-32 w-full border-t pt-4`;

			case 'line':
				return `${defaults} size-8`;

			case 'small':
				return `${defaults} size-20 border-r pr-4`;

			default:
				return '';
		}
	}
</script>

{#snippet img(image?: Image)}
	{#if image}
		<img src={image.src} alt={image?.alt ?? ''} class={generateImageClass()} />
	{/if}
{/snippet}

{#snippet body()}
	<div>
		<h3 class="text-xl font-bold">{title}</h3>

		{#if children}
			<div>
				{@render children()}
			</div>
		{/if}
	</div>
{/snippet}

<svelte:element
	this={anchor ? 'a' : 'article'}
	href={anchor}
	class="flex h-fit w-full max-w-96 items-center gap-4 rounded-lg border border-neutral-900 bg-[#090a0a] p-4"
	class:cursor-default={anchor === undefined}
	class:flex-col={type === 'large'}
>
	{#if type === 'small'}
		{@render img(image)}
		{@render body()}
	{:else if type === 'large'}
		{@render body()}
		{@render img(image)}
	{:else if type === 'line'}
		{@render img(image)}
		<h3>{title}</h3>
	{/if}
</svelte:element>
