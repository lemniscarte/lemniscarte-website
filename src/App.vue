<template>
  <div id="app" v-hammer:swipe="onSwipe">
    <TopMenu @pageWasChanged="clickPageChange($event)"/>
    <div id="app-wrapper">
      <div class="left">
      </div>
      <div class="center">
        <div id="spacer"></div>
        <transition :name="animationType" mode="out-in">
          <!-- <keep-alive> -->
            <component :is="this.selectedComponent">
            </component>
          <!-- </keep-alive> -->
        </transition>
      </div>
      <div class="right">
      </div> 
    </div>
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
      componentsList: ["MainPage", "MusicPlayer", "Sounds", "Bio", "Contact"],
      animationType: ""
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
        this.animationType = "left";
        this.selectedComponent = this.componentsList[selection];
      }
      if (ev.direction === 4) {
        let selection = this.currentSelection;
        selection--;
        if (selection < 0) {
          selection = this.componentsListLength;
        }
        this.animationType = "right";
        this.selectedComponent = this.componentsList[selection];
      }
    },
    clickPageChange(ev) {
      this.selectedComponent = ev;
      this.animationType = "fade";
    }
  },
  computed: {
    currentSelection() {
      return this.componentsList.indexOf(this.selectedComponent);
    },
    componentsListLength() {
      return this.componentsList.length - 1;
    }
    // addActiveClass() {

    // }
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

#app {
  height: 100vh;
}

h1 {
  font-size: calc(3vw + 4vh);
  font-weight: 300;
  text-shadow: 0 2px 4vh rgba(0, 0, 0, 0.15);
}

.left-enter-active,
.left-leave-active,
.right-enter-active,
.right-leave-active {
  transition: transform 0.3s ease, opacity 0.25s ease;
}

.left-enter,
.right-leave-to {
  transform: translate3d(100px, 0, 0);
  opacity: 0;
}

.left-leave-to,
.right-enter {
  transform: translate3d(-100px, 0, 0);
  opacity: 0;
}

.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.2s ease;
}

.fade-enter,
.fade-leave-to {
  opacity: 0;
}

.debug {
  border: 5px red solid;
}

/* div {
  border: 1px red solid;
} */
</style>
