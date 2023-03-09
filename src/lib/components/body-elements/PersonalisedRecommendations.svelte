<script>
	import { isFriday, isWeekend, getHours } from 'date-fns';
	import { answers } from '../../../stores';
	import PauseBefore from '../body-elements/personalised-recommendations/pause-before.svelte';
	import GoodPlace from '../body-elements/personalised-recommendations/good-place.svelte';
	import TimingRight from '../body-elements/personalised-recommendations/timing-right.svelte';
	import TimingWrong from '../body-elements/personalised-recommendations/timing-wrong.svelte';
	import MoreSenior from '../body-elements/personalised-recommendations/more-senior.svelte';
	import UpwardFeedback from '../body-elements/personalised-recommendations/upward-feedback.svelte';
	import PeerFeedback from '../body-elements/personalised-recommendations/peer-feedback.svelte';
	import GoodRelationship from './personalised-recommendations/good-relationship.svelte';
	import MaximiseCuriosity from './personalised-recommendations/maximise-curiosity.svelte';

	$: isEarly = getHours(new Date()) >= 2 && getHours(new Date()) < 19;
	$: isEndOfWeek = isFriday(new Date()) || isWeekend(new Date());
</script>

{#if $answers.find((a) => a.questionId === '7' && ['b', 'c'].includes(a.optionId))}
	<PauseBefore />
{/if}
{#if $answers.find((a) => a.questionId === '7' && ['a'].includes(a.optionId))}
	<GoodPlace />
{/if}

{#if isEarly && !isEndOfWeek}
	<TimingRight />
{/if}
{#if !isEarly || isEndOfWeek}
	<TimingWrong />
{/if}

{#if $answers.find((a) => a.questionId === '5' && ['a'].includes(a.optionId))}
	<MoreSenior />
{/if}
{#if $answers.find((a) => a.questionId === '5' && ['b'].includes(a.optionId))}
	<UpwardFeedback />
{/if}
{#if $answers.find((a) => a.questionId === '5' && ['c'].includes(a.optionId))}
	<PeerFeedback />
{/if}

{#if $answers.find((a) => a.questionId === '6' && ['a'].includes(a.optionId))}
	<GoodRelationship />
{/if}
{#if $answers.find((a) => a.questionId === '6' && ['b', 'c'].includes(a.optionId))}
	<MaximiseCuriosity />
{/if}
