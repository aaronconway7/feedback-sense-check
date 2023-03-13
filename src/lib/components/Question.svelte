<script>
	import Button from './Button.svelte';
	export let question;
	import { createEventDispatcher } from 'svelte';
	import { answers } from '../../stores';

	const dispatch = createEventDispatcher();

	function clickOption(option) {
		dispatch('clickOption', option);
	}
</script>

<h2 class="text-2xl font-bold mb-3">{question.question}</h2>
<div class="grid gap-3 md:grid-cols-[max-content_max-content]">
	{#each question.options as option}
		<Button
			label={option.text}
			variant={$answers.find((a) => a.questionId === question.id && a.optionId === option.id)
				? 'active'
				: 'inactive'}
			on:click={() => clickOption(option)}
		/>
	{/each}
</div>
