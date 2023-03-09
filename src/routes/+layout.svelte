<script>
	import '../app.css';
</script>

<div class="min-h-screen h-full flex flex-col bg-navy text-grey">
	<main class="md:py-40 md:px-36">
		<slot />
	</main>
	<footer class="bg-orange py-11 px-6 flex gap-3 shrink-0">
		<p>Feedback <span>Sense Check</span></p>
		<a href="/about">About</a>
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
