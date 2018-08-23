<template>
  <div id="app" v-hammer:swipe.left="onSwipe" v-hammer:swipe.right="onSwipe">
    <TopMenu @pageWasChanged="selectedComponent = $event"/>
    <transition name="component-fade" mode="out-in">
      <keep-alive>
        <component :is="this.selectedComponent"></component>
      </keep-alive>
    </transition>
    <BottomBar/>
  </div>
</template>

<script>
window.scrollTo(0, 1);

import Bio from "./components/Bio.vue";
import Contact from "./components/Contact.vue";
import BottomBar from "./components/BottomBar.vue";
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
    BottomBar,
    TopMenu,
    MainPage,
    MusicPlayer,
    Sounds
  },
  methods: {
    onSwipe(ev) {
      if (ev.direction === 2) {
        let selection = this.currentSelection;
        if (selection < this.componentsListLength) {
          selection++;
        } else {
          selection = 0;
        }
        this.selectedComponent = this.componentsList[selection];
      }
      if (ev.direction === 4) {
        let selection = this.currentSelection;
        selection--;
        if (selection < 0) {
          selection = this.componentsListLength;
        }
        this.selectedComponent = this.componentsList[selection];
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
  touch-action: pan-y !important;
}

.component-fade-enter-active,
.component-fade-leave-active {
  transition: opacity 0.3s ease;
}

.component-fade-enter,
.component-fade-leave-to {
  opacity: 0;
}

.debug {
  border: 1px red solid;
}
</style>
