<template>
  <div id="top-menu">
    <ul>
      <li @click="changePage('MainPage')">HOME</li>
      <li @click="changePage('MusicPlayer')">MUSIC</li>
      <li @click="changePage('Sounds')">SOUNDS</li>
      <li @click="changePage('Bio')">BIO</li>
      <li @click="changePage('Contact')">CONTACT</li>
    </ul>
  </div>
</template>

<script>
export default {
  data() {
    return {
      currentComponent: ""
    };
  },
  methods: {
    changePage(pageName) {
      this.currentComponent = pageName;
      this.$emit("pageWasChanged", this.currentComponent);
    }
  }
};
</script>

<style>
#top-menu {
  height: 3em;
  text-align: center;
  font-size: 0.8em;
  position: relative;
  border: solid 1px rgb(42, 42, 42);
  background-color: rgb(42, 42, 42);
  color: rgb(209, 209, 209);
}

ul {
  list-style-type: none;
  padding: 0px 0px;
  user-select: none;
}

li {
  display: inline;
  padding: 0px 10px;
  user-select: none;
}
</style>
