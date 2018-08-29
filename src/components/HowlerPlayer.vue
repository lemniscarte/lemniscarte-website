<template>
<div>
  <p>Music Player</p>
  <span>Song duration: {{ duration | musicTime }}</span>
  <br>
  <span>Progress: {{ Math.round(progress * 100) }}%</span>
  <br>
  <button @click="togglePlayback">{{ playing ? 'Pause' : 'Play' }}</button>
  <br>
  <button @click="stop">Stop</button>
  <br> 
  <button @click="setRate(0.7)">rate</button>
  <br>
</div>
</template>

<script>
import VueHowler from "vue-howler";

export default {
  mixins: [VueHowler]
};
</script>

<style>
</style>
