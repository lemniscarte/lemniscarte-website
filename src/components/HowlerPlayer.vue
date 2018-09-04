<template>
<div>
  <button @click="togglePlayback">{{ playing ? 'HOLD' : 'PLAY' }}</button>
  <button @click="stop">STOP</button>
  <button @click="switchTrack">NEXT</button>
  <button @click="switchTrack">BACK</button>
  <br>
  <br>
  <br>
  <span class="song-info">Progress: {{ Math.round(progress * 100) }}%</span>
  <br>
  <span class="song-info">{{ duration | musicTime }}</span>
  <br>
</div>
</template>

<script>
import {Howl, Howler} from 'howler';

export default {
  methods: {
    
  }
};
</script>

<style>
button {
  margin: 6px;
  height: 12vmin;
  width: 12vmin;
  background-color: rgba(255, 255, 255, 0.75);
  color: rgba(42, 42, 42, 0.75);
  border: 0;
  border-radius: 100%;
  font-size: 3vmin;
  box-shadow: 2px 2px 10px 1px rgba(0, 0, 0, 0.4);
  transition: all ease 0.4s;
}
button:hover {
  box-shadow: 3px 3px 10px 2px rgba(0, 0, 0, 0.5);
  transition: all ease 0.4s;
}
.song-info {
  font-size: 12px;
}
</style>
