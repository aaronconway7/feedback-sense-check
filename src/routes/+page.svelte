<script>
  import Button from "../lib/components/Button.svelte";
	import Question from "../lib/components/Question.svelte";
  import questions from "../lib/questions.json";
</script>
<h1 class="text-7xl font-sans">Feedback <span class="font-serif">Sense Check</span></h1>
<div class="grid py-3 mb-4">
<p>Feedback is a gift, but it can trigger emotions which cause us to make irrational choices. </p>
<p>Before giving or responding to feedback at work, use Feedback Sense Check to help you manage your emotions.</p>
</div>
<Button variant="active" label="Let's Go" />
<hr class="my-8 mt-8" />
<Question question="{questions[0].question}" options="{questions[0].options}" />
