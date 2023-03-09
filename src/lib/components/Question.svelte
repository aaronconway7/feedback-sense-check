<script>
  import Button from "./Button.svelte";
  export let question="Question?"
  export let options=[]
</script>

<h2>{question}</h2>
{#each options as option}
  <Button label="{option.label}" variant="inactive" />
{/each}

