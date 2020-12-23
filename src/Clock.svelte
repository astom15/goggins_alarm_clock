<script>
  import { onMount } from 'svelte';

  let date = new Date();
  const days = {
    0: 'Sun',
    1: 'Mon',
    2: 'Tue',
    3: 'Wed',
    4: 'Thurs',
    5: 'Fri',
    6: 'Sat',
  }
  const months = {
    0: 'Jan',
    1: 'Feb',
    2: 'Mar',
    3: 'Apr',
    4: 'May',
    5: 'Jun',
    6: 'Jul',
    7: 'Aug',
    8: 'Sep',
    9: 'Oct',
    10: 'Nov',
    11: 'Dec',
  }

  $: hour = (date.getHours() < 10 ? '0' : '') + date.getHours();
  $: min = (date.getMinutes() < 10 ? '0' : '') + date.getMinutes();
  $: sec = (date.getSeconds() < 10 ? '0' : '') + date.getSeconds();
  $: day = days[date.getDay()];
  $: dayNum = date.getDate();
  $: month = months[date.getUTCMonth()];
  $: year = date.getUTCFullYear();



  onMount (() => {
    const interval = setInterval(() => {
      date = new Date();
    }, 1000);
  });
</script>

<style>
  .clockContainer {
		width: 900px;
		height: 400px;
		display: flex;
		border-radius: 15px;
		flex-direction: column;
    place-items: center;
	}
	
	h1 {
		font-family: 'Bebas Neue';
		font-size:100px;
		text-transform: uppercase;
		line-height: .5;
		color: #bc9542;
		letter-spacing: 1px;
  }
  .date {
    font-family: 'Bebas Neue';
		font-size:70px;
		text-transform: uppercase;
		line-height: .5;
		color: #bc9542;
    letter-spacing: 1px;
    height: 100px;
    display: flex;
  }
	.clock {
		display: flex;
		width: 500px;
		height: 120px;
		border-radius: 10px;
		justify-content: center;
		letter-spacing: 3px;
	}
	.time {
		color:  rgb(243, 217, 217);
		font-family: 'Bebas Neue';
		font-size: 150px;
		place-content: center;
		place-items: center;
		display: flex;
  }

</style>

<div class='clockContainer'>
		<h1>
			Time To Get After It.
    </h1>
    <div class='date'>
      {day} - {month} {dayNum} {year}
    </div>
		<div class='clock'>
			<div class='time'>
        {hour}:{min}:{sec}
			</div>

		</div>
	</div>