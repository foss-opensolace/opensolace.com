<script lang="ts">
	import Icon from '@iconify/svelte';
	import type { Snippet } from 'svelte';

	type Props = {
		children: Snippet<[]>;
		icon?: string;
		anchor?: string;
		submit?: boolean;
		bordered?: boolean;
		onclick?: (event: MouseEvent) => void;
	};

	let { children, icon, anchor, submit = false, bordered = false, onclick }: Props = $props();
</script>

<svelte:element
	this={anchor ? 'a' : 'button'}
	role="button"
	tabindex={0}
	href={anchor}
	type={submit === true ? 'submit' : 'button'}
	class="active:bg-accent inline-flex items-center gap-2 truncate rounded-md px-4 py-2 transition-all hover:scale-105 hover:bg-neutral-800 active:scale-100"
	class:bg-accent={!bordered}
	class:border={bordered}
	class:border-accent={bordered}
	{onclick}
>
	{#if icon}
		<Icon {icon} class="inline size-6" />
	{/if}

	{@render children()}
</svelte:element>
