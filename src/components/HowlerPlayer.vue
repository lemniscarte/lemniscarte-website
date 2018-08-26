<template>
<div>
  <p>test123 music player goes here</p>
  <span>Total duration: {{ duration }} seconds</span>
  <span>Progress: {{ Math.round(progress * 100) }}%</span>
  <button @click="togglePlayback">{{ playing ? 'Pause' : 'Play' }}</button>
  <button @click="stop">Stop</button>
  <button @click="setRate(2.9)">rate</button>
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
