<script>
	import { format } from 'date-fns';
	let day = format(new Date(), 'EEEE');
	let time = format(new Date(), 'HH:mm');
</script>

<h3>The timing may not be great</h3>
<p>
	Right now it's {time} on {day}. Assuming your colleague works standard weekday hours, now may not
	be a good time to give feedback. It's late, and they may not be in a great headspace to receive
	feedback. Consider sleeping on it and feeding back tomorrow.
</p>
