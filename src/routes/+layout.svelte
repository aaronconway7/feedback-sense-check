<script>
	import BrandName from '$lib/components/BrandName.svelte';
	import '../app.css';
</script>

<svelte:head>
	<title>Feedback Sense Check</title>
	<meta
		name="description"
		content="Feedback is a gift, but it can trigger emotions which cause us to make irrational choices. Before giving or responding to feedback at work, use Feedback Sense Check to help you manage your emotions."
	/>
</svelte:head>

<div class="min-h-screen h-full flex flex-col text-grey">
	<main class="flex-[1_0_auto] max-w-5xl px-4 md:px-12 py-24 lg:pl-36">
		<slot />
	</main>
	<footer class="py-11 px-6 flex items-center gap-3 shrink-0 border-t border-t-grey text-xl">
		<a href="/"><BrandName /></a>
		<div class="rounded-full bg-grey/50 w-1 h-1" />
		<a href="/about" class="transition hover:opacity-80">About</a>
	</footer>
</div>

<style lang="postcss">
	:global(html, body) {
		height: 100%;
		@apply bg-navy;
	}
</style>
