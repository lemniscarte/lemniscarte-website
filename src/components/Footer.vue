<template>
  <div id="footer">
    <p>SMALL TEXT</p>
  </div>
</template>

<script>
export default {
  name: "footer"
};
</script>

<style>
#footer {
  display: grid;
  grid-template-rows: 1fr;
  height: 2em;
  text-align: center;
  font-size: 0.5em;
  position: relative;
  border: solid 1px red;
  bottom: 10px;
}
</style>
