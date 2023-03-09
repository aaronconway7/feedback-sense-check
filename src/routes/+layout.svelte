<script>
	import '../app.css';
</script>

<div class="min-h-screen h-full flex flex-col bg-navy text-grey">
	<main class="md:py-40 md:px-96">
		<slot />
	</main>
	<footer class="py-11 px-6 flex items-center gap-3 shrink-0 border-t border-t-grey text-xl">
		<a href="/"><p class="font-bold">Feedback <span class="font-serif">Sense Check</span></p></a>
		<div class="rounded-full bg-grey/50 w-1 h-1" />
		<a href="/about" class="transition hover:opacity-80">About</a>
	</footer>
</div>

<style>
	:global(html) {
		height: 100%;
	}

	main {
		flex: 1 0 auto;
	}
</style>
