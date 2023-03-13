<script>
	import Arrow from './Arrow.svelte';

	export let label;
	export let size = 'large';
	export let variant = 'default';
	export let arrowDirection = 'right';
	export let showArrow = false;

	const variants = {
		default: 'border-orange bg-orange text-grey hover:bg-orange/80',
		active: 'border-grey bg-orange text-grey hover:bg-orange/80',
		inactive: 'border-grey bg-grey text-navy hover:bg-grey/80',
		outlined: 'bg-navy border-orange text-orange hover:bg-navy-90'
	};
</script>

<button
	on:click
	type="button"
	class="flex justify-between max-w-sm w-full text-left border-4 border-solid transition {variants[
		variant
	]} {size === 'large' ? 'px-5 py-3' : 'px-4 py-1'}"
	>{label}
	{#if showArrow}
		<Arrow direction={arrowDirection} colour={variant === 'outlined' ? 'orange' : undefined} />
	{/if}
</button>
