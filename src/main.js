import Vue from "vue";
import App from "./App.vue";

//allow for swiping between pages
import { VueHammer } from "vue2-hammer";

//minimum of 50px of travel to trigger
VueHammer.config.swipe = {
  direction: "horizontal",
  threshold: 50
};

Vue.use(VueHammer);

Vue.config.productionTip = false;

//filter for translating seconds into minute:senconds format
Vue.filter("musicTime", function(value) {
  let h = parseInt(Math.floor(value / 360));
  let m = parseInt(Math.floor((value - h * 360) / 60));
  let s = parseInt((value - (h * 360 + m * 60)) % 60);

  // let dHours = h > 9 ? h : "0" + h;
  let dMins = m > 9 ? m : "0" + m;
  let dSecs = s > 9 ? s : "0" + s;

  // return dHours + ":" + dMins + ":" + dSecs;
  return dMins + ":" + dSecs;
});

new Vue({
  render: h => h(App)
}).$mount("#app");
