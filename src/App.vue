<template>
  <div id="app" v-hammer:swipe="onSwipe">
    <TopMenu @pageWasChanged="selectedComponent = $event"/>
    <keep-alive>
      <component :is="this.selectedComponent"></component>
    </keep-alive>
  </div>
</template>

<script>
window.scrollTo(0, 1);

import Bio from "./components/Bio.vue";
import Contact from "./components/Contact.vue";
import Footer from "./components/Footer.vue";
import TopMenu from "./components/TopMenu.vue";
import MainPage from "./components/MainPage.vue";
import MusicPlayer from "./components/MusicPlayer.vue";
import Sounds from "./components/Sounds.vue";

export default {
  name: "app",
  data() {
    return {
      selectedComponent: "MainPage",
      componentsList: ["MainPage", "MusicPlayer", "Sounds", "Bio", "Contact"]
    };
  },
  components: {
    Bio,
    Contact,
    Footer,
    TopMenu,
    MainPage,
    MusicPlayer,
    Sounds
  },
  methods: {
    onSwipe(ev) {
      if (ev.direction === 2) {
        let currentSelection = this.componentsList.indexOf(
          this.selectedComponent
        );
        if (currentSelection < this.componentsList.length - 1) {
          currentSelection++;
        } else {
          currentSelection = 0;
        }
        this.selectedComponent = this.componentsList[currentSelection];
      }
      if (ev.direction === 4) {
        let currentSelection = this.componentsList.indexOf(
          this.selectedComponent
        );
        currentSelection--;
        if (currentSelection < 0) {
          currentSelection = this.componentsList.length - 1;
        }
        this.selectedComponent = this.componentsList[currentSelection];
      }
    }
  },
  computed: {
    currentSelection() {
      return this.componentsList.indexOf(this.selectedComponent);
    },
    componentsListLength() {
      return this.componentsList.length - 1;
    }
  }
};
</script>

<style>
@import url("https://fonts.googleapis.com/css?family=Nunito:300");

body {
  background-color: rgb(255, 255, 255);
  color: rgba(42, 42, 42, 0.75);
  font-family: "Nunito", sans-serif;
  font-weight: 300;
}
</style>
