<script>
	import { base } from '$app/paths';
	import Arrow from '$lib/components/Arrow.svelte';
	import BrandName from '$lib/components/BrandName.svelte';
	import Illustration from '$lib/assets/img/illustration.svg';
</script>

<a class="flex gap-3 items-center absolute left-6 top-9" href="{base}/">
	<Arrow direction="left" />
	<BrandName />
</a>

<img class="h-52 mb-10 lg:mt-20" src={Illustration} alt="Feedback Sense Check Illustration" />
<div class="grid gap-10">
	<slot />
</div>

<style lang="postcss">
	* :global(h2) {
		@apply text-6xl leading-[76px];
	}

	* :global(h2 ~ p) {
		@apply text-2xl leading-10;
	}

	* :global(h3) {
		@apply text-3xl;
	}

	* :global(h3 ~ p) {
		@apply text-lg;
	}

	* :global(a) {
		@apply underline;
	}

	* :global(ul) {
		@apply list-disc list-inside;
	}

	* :global(blockquote) {
		@apply italic bg-navy-90 p-4 text-grey/80;
	}
</style>
