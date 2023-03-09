<script>
  import Button from "../lib/components/Button.svelte";
	import Question from "../lib/components/Question.svelte";
  import sourceQuestions from "../lib/questions.json";
  import Illustration from '$lib/assets/img/illustration.svg';

  let questions = [];

  function findQuestion(byId) {
    return sourceQuestions.find(q => q.id === byId);
  }

  function handleAnswer(e) {
    console.log(e.detail);
    const answer = e.detail;
    appendQuestion(answer.goTo);
  }

  function appendQuestion(questionId) {
    let nextQuestion = findQuestion(questionId);
    questions = [...questions, nextQuestion];
  }

  function start() {
    questions = [];
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
<Button variant="active" label="Let's Go" on:click={start}/>
<hr class="my-8 mt-8" />
{#each questions as question}
<Question question="{question.question}" options="{question.options}" on:clickOption={handleAnswer} />
{/each}
