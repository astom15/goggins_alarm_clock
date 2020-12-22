<script context="module">
  const elements = new Set();

  export function stopAll() {
    elements.forEach(element => {
      element.pause();
      element.currentTime = 0;
    });
  }
</script>


<script>
  import { onMount } from 'svelte';

  export let src;
  
  let audio;
  export let title;
  let paused = true;

  onMount(() => {
    elements.add(audio);
    return () => elements.delete(audio);
  });

  function stopOthers() {
    elements.forEach(element => {
      if (element !== audio) {
        element.pause();
        element.currentTime = 0;
      }
    });
  }

</script>

<style>
  button {
    width: 130px;
    height: 50px;
    background-color: #bc9542;
    text-align: center;
    font-family: 'Bebas Neue';
    font-size: 18px;
    margin: 5px 5px;
  }
  .playing {
    background-color: white;
  }
</style>


<button class:playing={!paused} on:click= { audio.play() }> 
  {title}
  <!-- svelte-ignore a11y-media-has-caption -->
  <audio
    bind:this={audio}
    bind:paused 
    on:play={ stopOthers }
    {src}>
  </audio>
</button>
