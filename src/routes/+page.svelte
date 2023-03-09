<script>
  import Button from "../lib/components/Button.svelte";
	import Question from "../lib/components/Question.svelte";
  import sourceQuestions from "../lib/questions.json";
  import Illustration from '$lib/assets/img/illustration.svg';
  import { answers } from '../stores';
  import { fly } from "svelte/transition";

  let questions = [];

  let answersValue;

  let reachedEnd=false;

  answers.subscribe(value => {
    answersValue = value;
  })

  function findQuestion(byId) {
    return sourceQuestions.find(q => q.id === byId);
  }

  function handleAnswer(option, question) {
    const answer = option.detail;
    const currentOption = {
      questionId: question.id,
      optionId: option.detail.id,
    }
    answers.update(v => [...v, currentOption]);
    if (checkForOutput(answer)) {
      reachedEnd = true;
    }
    appendQuestion(answer.goTo);
  }

  function checkForOutput(answer) {
    return answer.goTo.startsWith("/");
  }

  function appendQuestion(questionId) {
    let nextQuestion = findQuestion(questionId);
    if (!nextQuestion) {
      return;
    }
    questions = [...questions, nextQuestion];
  }

  function restart() {
    questions = [];
    answers.set([]);
    reachedEnd = false;
  }

  function start() {
    restart()
    questions = [...questions, sourceQuestions[0]];
  }
</script>

<img class="h-40 mb-7" src={Illustration} alt="Feedback Sense Check Illustration" />
<h1 class="text-7xl font-sans mb-7">Feedback <span class="font-serif">Sense Check</span></h1>
<div class="grid gap-4 mb-7">
	<p>Feedback is a gift, but it can trigger emotions which cause us to make irrational choices.</p>
	<p>
		Before giving or responding to feedback at work, use Feedback Sense Check to help you manage
		your emotions.
	</p>
</div>
<Button showArrow="{true}" arrowDirection="down" label="Let's Go" on:click={start}/>
<hr class="my-8 mt-8" />
{JSON.stringify(answersValue)}
<div class="grid gap-12">
  {#each questions as question}
    <div transition:fly="{{ y: 100, duration: 500}}">
      <Question question="{question}" on:clickOption={(option) => handleAnswer(option, question)} />
    </div>
  {/each}
</div>

{#if reachedEnd}
<div class="grid gap-7 mt-32">
<Button label="Continue" showArrow="{true}" />
<Button variant="outlined" label="Start again" arrowDirection="up" showArrow="{true}" on:click={restart}/>
</div>
{/if}
