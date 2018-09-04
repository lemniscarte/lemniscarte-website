<template>
<div>
  <h1>music</h1>
  <HowlerPlayer :sources="currentMusic" @skipTrack="changeTrack(event)"/>
</div>
</template>

<script>
import HowlerPlayer from "./HowlerPlayer.vue";

export default {
  components: {
    HowlerPlayer
  },
  data() {
    return {
      allMusic: [
        "./warpstage.aif",
        "./nevertook.mp3",
        "./2.ogg",
        "./percloop.wav"
      ],
      selectedTrack: 0
    };
  },
  methods: {
    changeTrack(ev) {
      
    }
  },
  computed: {
    currentMusic() {
      return this.allMusic[this.selectedTrack];
    }
  }
};
</script>

<style>
</style>
