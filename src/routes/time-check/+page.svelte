<script>
	import { isFriday, isWeekend, getHours } from 'date-fns';
	import { answers } from '../../stores';
	import SleepOnIt from '../sleep-on-it/+page.svelte';
	import GiveTimelyFeedback from '../give-timely-feedback/+page.svelte';
	import GoodMoment from '../good-moment/+page.svelte';

	$: isEarly = getHours(new Date()) >= 2 && getHours(new Date()) < 18;
	$: isEndOfWeek = isFriday(new Date()) || isWeekend(new Date());
</script>

{#if !isEarly || isEndOfWeek || $answers.find((a) => a.questionId === '7' && ['b', 'c'].includes(a.optionId))}
	<SleepOnIt />
{:else if isEarly && !isEndOfWeek && $answers.find((a) => a.questionId === '6' && ['b', 'c'].includes(a.optionId))}
	<GiveTimelyFeedback />
{:else}
	<GoodMoment />
{/if}
