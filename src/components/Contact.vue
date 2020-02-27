<template>
  <div>
    <h1>contact</h1>
    <p class="blurb">
      The best way to get in touch is vie e-mail.<br />Old-school, I know, but I
      do love it.
    </p>
    <div class="btnwrapper">
      <a href="mailto:contact@lemniscarte.com">
        <div class="contactbtn">
          <img src="micon.svg" alt="e-mail" />
        </div>
      </a>
    </div>
    <p class="blurb">
      Other than that, I hang around twitter<br />(quietly, for the most part).
    </p>
    <div class="btnwrapper">
      <a href="https://twitter.com/lemniscarte">
        <div class="contactbtn">
          <img src="ticon.svg" alt="twitter" />
        </div>
      </a>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style>
.btnwrapper {
  display: grid;
  justify-content: center;
  align-items: center;
}
.contactbtn {
  display: flex;
  opacity: 0.7;
  height: calc(14vmin - 4vw);
  width: calc(14vmin - 4vw);
  background-color: rgba(0, 0, 0, 0.75);
  color: rgb(255, 255, 255);
  border-radius: 30%;
  justify-content: center;
  align-items: center;
  font-size: 2vmin;
  font-family: "Nunito";
  cursor: pointer;
}

.contactbtn a {
  text-decoration: none;
  color: rgb(255, 255, 255);
}
</style>
