<template>
  <div>
    <div id="app-wrapper">
      <div class="left">
      </div>
      <div class="center">
        <div id="spacer"></div>
        <h1>LEMNISCARTE</h1>
        <div id="img-holder">
          <Logo/>         
        </div>
        <p class="blurb">Lemniscarte, LLC is an audio production house with over a decade in the market, delivering music and sound effects tailored to the costumer's specifications.</p>
        <p></p>
        <p class="blurb">Our wide domain of expertise ranges from found sound manipulation all the way to analog synthesizer sound sculpting and live instrument recording.</p>
      </div>
      <div class="right">
      </div> 
    </div>
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
body {
  margin: 0;
  padding: 0;
}

h1 {
  font-size: calc(3vw + 4vh);
  font-weight: 300;
}

#spacer {
  height: calc(4vw + 4vh);
}

#img-holder {
  height: calc(4vw + 4vh + 30px);
  vertical-align: middle;
}

#app-wrapper {
  display: grid;
  grid-template-areas: "left center right";
  grid-template-columns: minmax(1px, 1fr) minmax(300px, 800px) minmax(1px, 1fr);
}

.blurb {
  display: grid;
  text-align: center;
  height: 100%;
  padding: 0px 20px;
}

.left {
  text-align: left;
  grid-area: left;
}

.center {
  text-align: center;
  grid-area: center;
}

.right {
  text-align: right;
  grid-area: right;
}
</style>
