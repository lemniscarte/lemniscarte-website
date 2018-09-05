<template>
  <div>
    <h1>LEMNISCARTE</h1>
    <div id="img-holder">
      <Logo/>         
    </div>
      <p class="blurb">Lemniscarte, LLC is an audio production house with over a decade in the market, delivering music and sound effects tailored to the costumer's specifications.</p>
      <p></p>
      <p class="blurb">Our wide domain of expertise ranges from found sound manipulation all the way to analog synthesizer sound sculpting and live instrument recording.</p>
  </div>
</template>

<script>
import Logo from "./Logo.vue";

export default {
  components: {
    Logo
  }
};
</script>

<style>
#img-holder {
  height: calc(4vw + 4vh + 30px);
  vertical-align: middle;
}
</style>
