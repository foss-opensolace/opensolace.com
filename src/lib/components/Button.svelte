<script lang="ts">
	import Icon from '@iconify/svelte';
	import type { Snippet } from 'svelte';

	type Props = {
		children: Snippet<[]>;
		color?: 'normal' | 'primary' | 'secondary';
		icon?: string;
		anchor?: string;
		submit?: boolean;
		bordered?: boolean;
		onclick?: (event: MouseEvent) => void;
	};

	let {
		children,
		color = 'normal',
		icon,
		anchor,
		submit = false,
		bordered = false,
		onclick
	}: Props = $props();
</script>

<svelte:element
	this={anchor ? 'a' : 'button'}
	role="button"
	tabindex={0}
	href={anchor}
	type={submit === true ? 'submit' : 'button'}
	class="inline-flex items-center gap-2 truncate rounded-lg px-4 py-2 transition-all hover:brightness-125 active:scale-95 active:brightness-75"
	class:border={bordered}
	class:border-accent={bordered && color === 'normal'}
	class:border-primary={bordered && color === 'primary'}
	class:border-secondary={bordered && color === 'secondary'}
	class:text-primary={bordered && color === 'primary'}
	class:text-secondary={bordered && color === 'secondary'}
	class:bg-accent={!bordered && color === 'normal'}
	class:bg-primary={!bordered && color === 'primary'}
	class:bg-secondary={!bordered && color === 'secondary'}
	class:text-dark={!bordered && color !== 'normal'}
	{onclick}
>
	{#if icon}
		<Icon {icon} class="inline size-4" />
	{/if}

	{@render children()}
</svelte:element>
