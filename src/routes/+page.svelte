<script>
	import BrandName from '$lib/components/BrandName.svelte';
	import Button from '$lib/components/Button.svelte';
	import Question from '$lib/components/Question.svelte';
	import sourceQuestions from '$lib/questions.json';
	import Illustration from '$lib/assets/img/illustration.svg';
	import { answers } from '../stores';
	import { fly } from 'svelte/transition';
	import { goto } from '$app/navigation';

	let questions = [];
	let reachedEnd = false;

	function findQuestion(byId) {
		return sourceQuestions.find((q) => q.id === byId);
	}

	function handleAnswer(option, question) {
		const answer = {
			questionId: question.id,
			optionId: option.detail.id
		};

		// if an answer for this question already exists
		if ($answers.find((a) => a.questionId === answer.questionId)) {
			// remove all answers including and after
			// remove questions after
			answers.update((a) => [...a.filter((a2) => a2.questionId < answer.questionId), answer]);
			questions = questions.filter((q) => q.id <= answer.questionId);
		} else {
			answers.update((a) => [...a, answer]);
		}

		if (option.detail.goTo.toString().startsWith('/')) {
			reachedEnd = true;
		} else {
			reachedEnd = false;
			questions = [...questions, findQuestion(option.detail.goTo)];
		}
	}

	function restart() {
		questions = [];
		answers.set([]);
		reachedEnd = false;
		window.scrollTo({ top: 0, behavior: 'smooth' });
	}

	function start() {
		restart();
		questions = [...questions, sourceQuestions[0]];
	}

	function showResult() {
		const latestAnswer = $answers.at(-1);
		const question = findQuestion(latestAnswer.questionId);
		const option = question.options.find((o) => o.id === latestAnswer.optionId);
		goto(`${option.goTo}`);
	}

	function scrollIntoView(e) {
		e.target.scrollIntoView({
			behavior: 'smooth',
			block: 'center'
		});
	}
</script>

<img class="h-40 mb-7" src={Illustration} alt="Feedback Sense Check Illustration" />
<h1 class="text-7xl font-sans mb-7">
	<BrandName />
</h1>
<div class="grid gap-4 mb-11 text-2xl leading-10 font-medium">
	<p>Feedback is a gift, but it can trigger emotions which cause us to make irrational choices.</p>
	<p>
		Before giving or responding to feedback at work, use Feedback Sense Check to help you manage
		your emotions.
	</p>
</div>
<Button showArrow={true} arrowDirection="down" label="Let's Go" on:click={start} />
<hr class="mb-28 mt-32 border-4" />

<div class="grid gap-12">
	{#each questions as question (question.id)}
		<div transition:fly|local={{ y: 100, duration: 500 }} on:introstart={scrollIntoView}>
			<Question {question} on:clickOption={(option) => handleAnswer(option, question)} />
		</div>
	{/each}
</div>

{#if reachedEnd}
	<div
		class="grid gap-7 mt-32"
		transition:fly|local={{ y: 100, duration: 500 }}
		on:introstart={scrollIntoView}
	>
		<Button label="Continue" showArrow={true} on:click={showResult} />
		<Button
			variant="outlined"
			label="Start again"
			arrowDirection="up"
			showArrow={true}
			on:click={restart}
		/>
	</div>
{/if}
