<script>
	import { goto } from '$app/navigation';
	import Button from '$lib/components/Button.svelte';
</script>

<slot />
<div class="mt-20">
	<Button label="Start again" showArrow={true} on:click={() => goto('/')} />
</div>
