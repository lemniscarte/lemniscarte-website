<template>
<div>
  <h1>music</h1>
  <HowlerPlayer :sources="oggFiles" rate="0.4"/>
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
      oggFiles: [
        "2.ogg",
        "./assets/music/nevertook.mp3",
        "./assets/music/percloop.wav",
        "./assets/music/warpstage.aif"
      ]
    };
  }
};
</script>

<style>
</style>
