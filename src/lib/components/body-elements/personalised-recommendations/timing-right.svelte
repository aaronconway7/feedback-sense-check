<script>
	import { format } from 'date-fns';
	let day = format(new Date(), 'EEEE');
	let time = format(new Date(), 'HH:mm');
</script>

<h3 class="text-3xl mb-8">The timing seems right</h3>
<p class="text-lg mb-8">
	Right now it's {time} on a {day}. Assuming your colleague works standard weekday hours, now could
	be a good time to give feedback. If they work different hours, consider – is this a good time to
	feed back, or is it late in their working day / a non-working day? If so, they might not be in a
	great headspace to receive feedback.
</p>
