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
  color: rgba(209, 209, 209, 0.75);
  background-color: rgba(0, 0, 0, 0.75);
  line-height: 1px;
}
</style>
