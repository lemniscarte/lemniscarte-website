<template>
<div>
  <button @click="togglePlayback()">{{ isPlaying ? 'HOLD' : 'PLAY' }}</button>
  <button @click="stopPlayback()">STOP</button>
  <button @click="switchTrack('next')">NEXT</button>
  <button @click="switchTrack('back')">BACK</button>
  <br>
  <br>
  <br>
  <!-- <span class="song-info">Progress: {{ Math.round(progress * 100) }}%</span> -->
  <br>
  <!-- <span class="song-info">{{ duration | musicTime }}</span> -->
  <br>
</div>
</template>

<script>
import { Howl } from "howler";

export default {
  data() {
    return {
      sound: "",
      isPlaying: false,
      allMusic: [["nevertook.mp3"], ["test123.mp3"], ["anothertest.mp3"]]
    };
  },
  props: [],
  methods: {
    togglePlayback() {
      this.isPlaying = !this.isPlaying;
      return !this.sound.playing() ? this.sound.play() : this.sound.pause();
    },
    stopPlayback() {
      this.isPlaying = false;
      this.sound.stop();
    },
    switchTrack(mod) {
      console.log(mod);
    },
    createHowler() {
      return new Howl({
        src: this.allMusic[0],
        html5: true
      })
    }
  },
  created() {
    this.sound = this.createHowler();
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
  font-family: "Nunito";
  box-shadow: 2px 2px 10px 1px rgba(0, 0, 0, 0.4);
  transition: all ease 0.4s;
}
button:hover {
  box-shadow: 3px 5px 10px 2px rgba(0, 0, 0, 0.5);
  transform: translateY(-2px);
  transition: all ease 0.4s;
}
.song-info {
  font-size: 12px;
}
</style>
