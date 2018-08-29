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
        "./warpstage.aif",
        "./nevertook.mp3",
        "./2.ogg",
        "./percloop.wav"
      ]
    };
  }
};
</script>

<style>
</style>
