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
		<button on:click={stopAll}>
			Stop Audio
		</button>
	</div>

	<div class='soundboard'> 
		<AudioPlayer 
			title="Look At Yourself."
			src="../assets/sounds/Look At Yourself.mp3"/>
		<AudioPlayer 
			title="No Days Off."
			src="../assets/sounds/No Days Off.mp3"/>
		<AudioPlayer 
			title="Embrace The Hate."
			src="../assets/sounds/Haters.mp3"/>
		<AudioPlayer 
			title="Show Up Every Day."
			src="../assets/sounds/Show Up Every Day.mp3"/>
		<AudioPlayer 
			title="You're Never Done."
			src="../assets/sounds/Never Done.mp3"/>
		<AudioPlayer 
			title="Dog Mentality."
			src="../assets/sounds/Dog Mentality.mp3"/>
	</div>
	
</main>

