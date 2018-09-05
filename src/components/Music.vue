<template>
<div>
  <h1>music</h1>
  <Player/>
</div>
</template>

<script>
import Player from "./Player.vue";

export default {
  components: {
    Player
  },
  data() {
    return {};
  },
  methods: {},
  computed: {
    currentMusic() {
      return this.allMusic[this.selectedTrack];
    }
  }
};
</script>

<style>
</style>
