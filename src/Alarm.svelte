<script>
  import { alarmHour, alarmMin, alarmStatus } from './stores.js';
  import { onMount, createEventDispatcher } from 'svelte';

  const dispatch = createEventDispatcher();
  let date = new Date();
  let hour = ['00','01','02','03','04','05','06','07','08','09','10','11','12','13','14',
              '15','16','17','18','19','20','21','22','23']
  let min = ['00','01','02','03','04','05','06','07','08','09','10','11','12','13','14','15',
              '16','17','18','19','20','21','22','23','24','25','26','27','28','29','30','31',
              '32','33','34','35','36','37','38','39','40','41','42','43','44','45','46','47',
              '48','49','50','51','52','53','54','55','56','57','58','59']

  $: disabled = $alarmStatus == 'Save' ? false : true;
  $: alarmTime = $alarmHour + ":" + $alarmMin + ":00";
  $: currentTime = (date.getHours() < 10 ? '0' : '') + date.getHours() + ":" + (date.getMinutes() < 10 ? '0' : '') + date.getMinutes() + ":00"

  onMount (() => {
    const interval = setInterval(() => {
      date = new Date();
      if (alarmTime == currentTime) {
        //play sound
        console.log('blah')
      }
    }, 1000);
  });

  function handleSave() {
    if ($alarmStatus == 'Reset') {
      alarmHour.set('');
      alarmMin.set('');
      alarmStatus.set('Save');
    } else {
      alarmStatus.set('Reset');
    }
  }

</script>

<style>
  .alarm {
    display: flex;
    place-items: flex-start;
    width: 200px;
    height: 100px;
    place-content: center space-between;
  }

  select {
    background-color: rgb(46, 45, 45);
    width: 70px;
    color: rgb(243, 217, 217);
  }

  select:required:invalid {
    color: rgb(243, 217, 217);
  }
  
  select:focus {
    outline: none !important;
    border: 2px solid #bc9542;
    color: #bc9542;
  }

  option[value=""][disabled] {
    display:none;
  }

  option {
    color: #bc9542;
    background-color: rgb(46, 45, 45);
  }

  select:disabled {
    background-color: black;
  }
</style>


<div class='alarm'>
  <select bind:value={$alarmHour} {disabled}> 
    <option value="" disabled selected>Hr</option>
      {#each hour as h}
        <option value={h}>{h}</option>
      {/each}
  </select>
  <select bind:value={$alarmMin} {disabled}> 
    <option value="" disabled selected>Min</option>
      {#each min as m}
        <option value={m} >{m}</option>
      {/each}
  </select>
  <button on:click={handleSave}> {$alarmStatus} </button>
</div>