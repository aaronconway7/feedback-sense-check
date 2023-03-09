<script>
  import Button from "./Button.svelte";
  export let question;
  import { createEventDispatcher } from "svelte";
  import { answers } from "../../stores";

  // answers = [{questionId: '1', optionId: 'a'}]
  const dispatch = createEventDispatcher()

  function clickOption(option) {
    dispatch('clickOption', option);
  }
</script>

<h2>{question.question}</h2>
{#each question.options as option}
  <Button label="{option.text}" variant="{ $answers.find(a => a.questionId === question.id && a.optionId === option.id) ? 'active': 'inactive'}" on:click={() => clickOption(option)} />
{/each}

