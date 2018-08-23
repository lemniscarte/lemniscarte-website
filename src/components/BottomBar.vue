<template>
  <div id="bottom-bar">
    <p>handcoded by Ingo Duarte</p>
  </div>
</template>

<script>
export default {
  name: "bottom-bar"
};
</script>

<style>
#bottom-bar {
  padding-bottom: 8px;
  width: 100%;
  height: 10px;
  text-align: center;
  font-size: 0.5em;
  position: fixed;
  bottom: 0px;
  color: rgba(209, 209, 209, 0.739);
  background-color: rgb(42, 42, 42);
  box-shadow: 0 15px 50px 15px rgba(0, 0, 0, 0.513);
  line-height: 1px;
}
</style>
