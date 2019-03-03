<template>
  <div
    id="application"
    v-hammer:swipe="onSwipe"
  >
    <TopMenu @pageWasChanged="clickPageChange($event)"/>
    <div id="app-wrapper" class="noise">
      <div class="left">
      </div>
      <div class="center">
        <div id="spacer"></div>
        <transition :name="animationType" mode="out-in">
          <keep-alive>
            <component :is="this.selectedComponent">
            </component>
          </keep-alive>
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
import Music from "./components/Music.vue";
import Sounds from "./components/Sounds.vue";

export default {
  name: "app",
  data() {
    return {
      selectedComponent: "MainPage",
      componentsList: ["MainPage", "Music", "Sounds", "Bio", "Contact"],
      //for left or right swipes
      animationType: "",
      //use window size calculation in order to refresh when changed
      windowHeight: window.innerHeight,
      windowWidth: window.innerWidth
    };
  },
  components: {
    Bio,
    Contact,
    BottomBar,
    TopMenu,
    MainPage,
    Music,
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
    //TODO: add a class for the selected page button up top
    // addActiveClass() {

    // }
  },
  //debugging tool for window resizing issues
  // watch: {
  //   windowHeight: (val, oldVal) => {
  //     console.log("height: ", val, oldVal);
  //   },
  //   windowWidth: (val, oldVal) => {
  //     console.log("width: ", val, oldVal);
  //   }
  // },
  //calculate window dimensions on mounted
  mounted() {
    this.$nextTick(() => {
      window.addEventListener("resize", () => {
        this.windowHeight = window.innerHeight;
        this.windowWidth = window.innerWidth;
      });
      window.addEventListener("orientationchange", () => {
        this.windowHeight = window.innerHeight;
        this.windowWidth = window.innerWidth;
      });
    });
  }
};
</script>

<style>
@import url("https://fonts.googleapis.com/css?family=Nunito:300");

html {
  min-height: 100%;
}

body {
  /* width: auto;
  height: auto; */
  min-height: 300px;
  color: rgba(231, 231, 231, 0.85);
  font-family: "Nunito", sans-serif;
  font-weight: 300;
  touch-action: pan-y !important;
  margin: 0;
  padding: 0;
  background: radial-gradient(
    circle at 0 0,
    hsl(0, 0%, 0%) 0%,
    hsl(234, 54%, 11%) 10%,
    hsl(346, 76%, 3%) 62%,
    hsl(345, 72%, 10%) 80%
  );
}

#application {
  min-height: 100vh;
}

/* body:before {
  opacity: 0.05;
  content: "";
  position: fixed;
  z-index: -1;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  background-image: url("./assets/bg.jpeg");
  background-size: cover;
} */

#app-wrapper {
  min-height: 100vh;
  display: grid;
  grid-template-areas: "left center right";
  grid-template-columns: minmax(1px, 1fr) minmax(50px, 800px) minmax(1px, 1fr);
}

#spacer {
  height: calc(4vw + 4vh);
}

ul {
  padding-left: 0;
}

h1 {
  font-size: calc(3vw + 4vh);
  font-weight: 300;
  text-shadow: 0 10px 4vh rgba(0, 0, 0, 1);
}

.blurb {
  display: grid;
  text-align: center;
  height: 100%;
  padding: 0px 20px;
  text-shadow: 1px 1px 0 rgba(0, 0, 0, 1);
}

.left-enter-active,
.left-leave-active,
.right-enter-active,
.right-leave-active {
  transition: transform 0.3s ease, opacity 0.25s ease, scale 0.25s ease;
}

.left-enter,
.right-leave-to {
  transform: translate3d(75px, 0, 0);
  opacity: 0;
}

.left-leave-to,
.right-enter {
  transform: translate3d(-75px, 0, 0);
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

.left {
  text-align: left;
  grid-area: left;
}

.center {
  text-align: center;
  grid-area: center;
  overflow: hidden;
}

.right {
  text-align: right;
  grid-area: right;
}

.debug {
  border: 5px red solid;
}

.noise {
  position: relative;
  opacity: 1;
}

/* TODO apply an initial opacity of 1 and transition to 0.3 on load over about 1 second */
.noise:before {
  transition: all ease 0.8s;
  opacity: 0.3;
  content: "";
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  z-index: -1;
  background-image: url("./assets/deathstar.jpg");
  background-size: cover;
}

/* div {
  border: 1px red solid;
} */
</style>
