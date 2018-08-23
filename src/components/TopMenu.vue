<template>
  <div id="top-menu">
    <ul>
      <li class= "main-page" @click="changePage('MainPage')">HOME</li>
      <li class= "music-player" @click="changePage('MusicPlayer')">MUSIC</li>
      <li class= "sounds" @click="changePage('Sounds')">SOUNDS</li>
      <li class= "bio" @click="changePage('Bio')">BIO</li>
      <li class= "contact" @click="changePage('Contact')">CONTACT</li>
    </ul>
  </div>
</template>

<script>
export default {
  methods: {
    changePage(pageName) {
      this.$emit("pageWasChanged", pageName);
    }
  }
};
</script>

<style>
#top-menu {
  height: 3em;
  text-align: center;
  font-size: 0.8em;
  position: fixed;
  top: 0;
  width: 100%;
  border: solid 1px rgb(42, 42, 42);
  background-color: rgb(42, 42, 42);
  color: rgb(209, 209, 209);
  box-shadow: 0 -10px 100px 5px rgba(0, 0, 0, 0.513);
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

li:hover {
  cursor: pointer;
}
</style>
