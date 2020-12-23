<script>
	import Clock from './Clock.svelte'
	import Alarm from './Alarm.svelte'
	import AudioPlayer, { stopAll } from './AudioPlayer.svelte'
</script>

<style>
	main {
		text-align: center;
		display: flex;
		place-content: center;
		place-items: center;
		background-color: rgb(22, 22, 22);
		height: 100vh;
		width: 100vw;
		flex-direction: column;
		overflow: auto;
		-ms-overflow-style: none;  /* IE and Edge */
  	scrollbar-width: none;  /* Firefox */
	}

	main::-webkit-scrollbar {
  	display: none;
	}

	.soundboard {
		flex: 1;
		width: 100%;
		margin: 10px 20px;
		flex-wrap: wrap;
		display: flex;
		place-content: center;
		max-width: 960px;
	}
	
	.stopAudio {
		align-self: flex-start;
		margin-left: 100px;
	}
	
	.hidden {
		display: none;
	}

	@media (min-width: 640px) {
		main {
			max-width: none;
		}
	}

</style>


<main>
	<Clock/>
	<Alarm/>
	<div class='stopAudio'> 
		<button on:click={ stopAll }>
			Stop Audio
		</button>
	</div>
	<div class='soundboard' > 
		<AudioPlayer 
			title="Look At Yourself."
			src="../assets/sounds/LookAtYourself.mp3"/>
		<AudioPlayer 
			title="No Days Off."
			src="../assets/sounds/NoDaysOff.mp3"/>
		<AudioPlayer 
			title="Embrace The Hate."
			src="../assets/sounds/Haters.mp3"/>
		<AudioPlayer 
			title="Show Up Every Day."
			src="../assets/sounds/ShowUpEveryDay.mp3"/>
		<AudioPlayer 
			title="You're Never Done."
			src="../assets/sounds/NeverDone.mp3"/>
		<AudioPlayer 
			title="Dog Mentality."
			src="../assets/sounds/DogMentality.mp3"/>
	</div>

</main>
