<script>
  import Button from "./Button.svelte";
  export let question="Question?"
  export let options=[]
  import { createEventDispatcher } from "svelte";

  const dispatch = createEventDispatcher()

  function clickOption(option) {
    dispatch('clickOption', option);
  }
</script>

<h2>{question}</h2>
{#each options as option}
  <Button label="{option.text}" variant="inactive" on:click={() => clickOption(option)} />
{/each}

