<script>
  import Button from "../lib/components/Button.svelte";
  function clickMe() {
    alert('You clicked me');
  }
</script>
<h1>Welcome to SvelteKit</h1>
<p>Visit <a href="https://kit.svelte.dev">kit.svelte.dev</a> to read the documentation</p>
<Button variant="active" label="Let's Go" on:click={clickMe} />
<Button variant="outlined" size="small" label="I've received feedback" on:click={clickMe} />
