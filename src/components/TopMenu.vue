<template>
  <div id="top-menu">
    <ul>
      <li class="menu-btn" @click="changePage('MainPage')">HOME</li>
      <li class="menu-btn" @click="changePage('Music')">MUSIC</li>
      <li class="menu-btn" @click="changePage('Sounds')">SOUNDS</li>
      <li class="menu-btn" @click="changePage('Bio')">BIO</li>
      <li class="menu-btn" @click="changePage('Contact')">CONTACT</li>
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
  z-index: 1;
  height: 3em;
  text-align: center;
  font-size: 0.8em;
  position: fixed;
  top: 0;
  width: 100%;
  background-color: rgb(42, 42, 42);
  color: rgb(209, 209, 209);
  box-shadow: 0 -10px 100px 5px rgba(0, 0, 0, 0.513);
}

button menu-btn {
  padding: 0;
  border: 0;
  border-radius: initial;
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
