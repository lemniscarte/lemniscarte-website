(function(t){function n(n){for(var i,s,r=n[0],l=n[1],c=n[2],d=0,h=[];d<r.length;d++)s=r[d],o[s]&&h.push(o[s][0]),o[s]=0;for(i in l)Object.prototype.hasOwnProperty.call(l,i)&&(t[i]=l[i]);u&&u(n);while(h.length)h.shift()();return a.push.apply(a,c||[]),e()}function e(){for(var t,n=0;n<a.length;n++){for(var e=a[n],i=!0,r=1;r<e.length;r++){var l=e[r];0!==o[l]&&(i=!1)}i&&(a.splice(n--,1),t=s(s.s=e[0]))}return t}var i={},o={app:0},a=[];function s(n){if(i[n])return i[n].exports;var e=i[n]={i:n,l:!1,exports:{}};return t[n].call(e.exports,e,e.exports,s),e.l=!0,e.exports}s.m=t,s.c=i,s.d=function(t,n,e){s.o(t,n)||Object.defineProperty(t,n,{enumerable:!0,get:e})},s.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},s.t=function(t,n){if(1&n&&(t=s(t)),8&n)return t;if(4&n&&"object"===typeof t&&t&&t.__esModule)return t;var e=Object.create(null);if(s.r(e),Object.defineProperty(e,"default",{enumerable:!0,value:t}),2&n&&"string"!=typeof t)for(var i in t)s.d(e,i,function(n){return t[n]}.bind(null,i));return e},s.n=function(t){var n=t&&t.__esModule?function(){return t["default"]}:function(){return t};return s.d(n,"a",n),n},s.o=function(t,n){return Object.prototype.hasOwnProperty.call(t,n)},s.p="/";var r=window["webpackJsonp"]=window["webpackJsonp"]||[],l=r.push.bind(r);r.push=n,r=r.slice();for(var c=0;c<r.length;c++)n(r[c]);var u=l;a.push([0,"chunk-vendors"]),e()})({0:function(t,n,e){t.exports=e("56d7")},"034f":function(t,n,e){"use strict";var i=e("64a9"),o=e.n(i);o.a},"11a9":function(t,n,e){"use strict";var i=e("6f97"),o=e.n(i);o.a},"56d7":function(t,n,e){"use strict";e.r(n);var i=e("e814"),o=e.n(i),a=(e("cadf"),e("551c"),e("f751"),e("097d"),e("2b0e")),s=function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("div",{directives:[{name:"hammer",rawName:"v-hammer:swipe",value:t.onSwipe,expression:"onSwipe",arg:"swipe"}],style:{width:t.windowWidth+"px",height:t.windowHeight+"px"},attrs:{id:"app"}},[e("TopMenu",{on:{pageWasChanged:function(n){t.clickPageChange(n)}}}),e("div",{attrs:{id:"app-wrapper"}},[e("div",{staticClass:"left"}),e("div",{staticClass:"center"},[e("div",{attrs:{id:"spacer"}}),e("transition",{attrs:{name:t.animationType,mode:"out-in"}},[e("keep-alive",[e(this.selectedComponent,{tag:"component"})],1)],1)],1),e("div",{staticClass:"right"})]),e("BottomBar")],1)},r=[],l=function(){var t=this,n=t.$createElement;t._self._c;return t._m(0)},c=[function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("div",[e("h1",[t._v("bio")]),e("p",{staticClass:"blurb"},[t._v("My name is Ingo Duarte and I’m the founder of Lemniscarte. I’m a drummer, carnaval band founder, surfer, dog lover, synth geek, composer and sound designer.")]),e("p",{staticClass:"blurb"},[t._v("I’ve been doing all this for some 20 years."),e("br"),t._v("Except dogs, I’ve loved them since I was a baby.")]),e("p",{staticClass:"blurb"},[t._v("I am passionate about sound and its narrative strength. That's why I approach projects as a collaborator: by giving educated input as well as being flexible and communicative I can find new ways to give my clients exactly what they want.")]),e("p",{staticClass:"blurb"},[t._v("Moving from Brazil to California, by way of France, I can say that I’m lucky to have been exposed to different music, instruments, and its incredible musicians - from many places in the world.")])])}],u={},d=u,h=e("2877"),p=Object(h["a"])(d,l,c,!1,null,null,null),f=p.exports,m=function(){var t=this,n=t.$createElement;t._self._c;return t._m(0)},v=[function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("div",[e("h1",[t._v("contact")])])}],g={},b=g,w=Object(h["a"])(b,m,v,!1,null,null,null),y=w.exports,_=function(){var t=this,n=t.$createElement;t._self._c;return t._m(0)},k=[function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("div",{attrs:{id:"bottom-bar"}},[e("p",[t._v("handcoded by Ingo Duarte")])])}],C={name:"bottom-bar"},x=C,S=(e("fafe"),Object(h["a"])(x,_,k,!1,null,null,null)),P=S.exports,j=function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("div",{attrs:{id:"top-menu"}},[e("ul",[e("li",{staticClass:"menu-btn",on:{click:function(n){t.changePage("MainPage")}}},[t._v("HOME")]),e("li",{staticClass:"menu-btn",on:{click:function(n){t.changePage("Music")}}},[t._v("MUSIC")]),e("li",{staticClass:"menu-btn",on:{click:function(n){t.changePage("Sounds")}}},[t._v("SOUNDS")]),e("li",{staticClass:"menu-btn",on:{click:function(n){t.changePage("Bio")}}},[t._v("BIO")]),e("li",{staticClass:"menu-btn",on:{click:function(n){t.changePage("Contact")}}},[t._v("CONTACT")])])])},T=[],O={methods:{changePage:function(t){this.$emit("pageWasChanged",t)}}},L=O,E=(e("fbea"),Object(h["a"])(L,j,T,!1,null,null,null)),M=E.exports,$=function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("div",[e("h1",[t._v("LEMNISCARTE")]),e("div",{attrs:{id:"img-holder"}},[e("Logo")],1),e("p",{staticClass:"blurb"},[t._v("Lemniscarte, LLC is an audio production house with over a decade in the market, delivering music and sound effects tailored to the costumer's specifications.")]),e("p"),e("p",{staticClass:"blurb"},[t._v("Our wide domain of expertise ranges from found sound manipulation all the way to analog synthesizer sound sculpting and live instrument recording.")])])},I=[],z=function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("div",[e("svg",{attrs:{id:"svg2","xmlns:rdf":"http://www.w3.org/1999/02/22-rdf-syntax-ns#",xmlns:"http://www.w3.org/2000/svg",height:"57.399",width:"1.486in",version:"1.1","xmlns:cc":"http://creativecommons.org/ns#","xmlns:dc":"http://purl.org/dc/elements/1.1/",viewBox:"-35 -10 200 80"}},[e("path",{staticClass:"path first",staticStyle:{"stroke-linejoin":"round","stroke-linecap":"round","stroke-miterlimit":"2.6131",fill:"none"},attrs:{id:"1",d:"m97.089 0.099757c14.808 0 26.812 12.001 26.812 26.806s-12.004 26.806-26.812 26.806c-27.236 0-47.121-53.612-74.357-53.612-14.808 0-26.812 12.001-26.812 26.806s12.004 26.806 26.812 26.806c27.236 0 47.121-53.612 74.357-53.612z"}}),e("path",{staticClass:"path second",staticStyle:{"stroke-linejoin":"round","stroke-linecap":"round","stroke-miterlimit":"2.6131",fill:"none"},attrs:{id:"2",d:"m97.785 0.099757c14.808 0 26.812 12.001 26.812 26.806 0 14.804-12.004 26.805-26.812 26.805-27.236 0-47.121-53.611-74.357-53.611-14.808 0-26.812 12.001-26.812 26.806 0 14.804 12.004 26.805 26.812 26.805 27.236 0 47.121-53.611 74.357-53.611z"}}),e("path",{staticClass:"path third",staticStyle:{"stroke-linejoin":"round","stroke-linecap":"round","stroke-miterlimit":"2.6131",fill:"none"},attrs:{id:"3",d:"m98.479 0.099757c14.808 0 26.812 12.001 26.812 26.806 0 14.804-12.004 26.805-26.812 26.805-27.236 0-47.121-53.611-74.357-53.611-14.808 0-26.812 12.001-26.812 26.806 0 14.804 12.004 26.805 26.812 26.805 27.236 0 47.121-53.611 74.357-53.611z"}}),e("path",{staticClass:"path fourth",staticStyle:{"stroke-linejoin":"round","stroke-linecap":"round","stroke-miterlimit":"2.6131",fill:"none"},attrs:{id:"4",d:"m99.174 0.099757c14.808 0 26.812 12.001 26.812 26.806 0 14.804-12.004 26.805-26.812 26.805-27.236 0-47.121-53.611-74.357-53.611-14.808 0-26.812 12.001-26.812 26.806 0 14.804 12.004 26.805 26.812 26.805 27.236 0 47.121-53.611 74.357-53.611z"}}),e("path",{staticClass:"path fifth",staticStyle:{"stroke-linejoin":"round","stroke-linecap":"round","stroke-miterlimit":"2.6131",fill:"none"},attrs:{id:"5",d:"m99.869 0.099757c14.808 0 26.812 12.001 26.812 26.806 0 14.804-12.004 26.805-26.812 26.805-27.236 0-47.121-53.611-74.357-53.611-14.808 0-26.812 12.001-26.812 26.806 0 14.804 12.004 26.805 26.812 26.805 27.236 0 47.121-53.611 74.357-53.611z"}}),e("path",{staticClass:"path sixth",staticStyle:{"stroke-linejoin":"round","stroke-linecap":"round","stroke-miterlimit":"2.6131",fill:"none"},attrs:{id:"6",d:"m100.56 0.099757c14.808 0 26.812 12.001 26.812 26.806 0 14.804-12.004 26.805-26.812 26.805-27.236 0-47.121-53.611-74.357-53.611-14.808 0-26.812 12.001-26.812 26.806 0 14.804 12.004 26.805 26.812 26.805 27.236 0 47.121-53.611 74.357-53.611z"}}),e("path",{staticClass:"path seventh",staticStyle:{"stroke-linejoin":"round","stroke-linecap":"round","stroke-miterlimit":"2.6131",fill:"none"},attrs:{id:"7",d:"m101.26 0.099757c14.808 0 26.812 12.001 26.812 26.806 0 14.804-12.004 26.805-26.812 26.805-27.236 0-47.121-53.611-74.357-53.611-14.808 0-26.812 12.001-26.812 26.806 0 14.804 12.004 26.805 26.812 26.805 27.236 0 47.121-53.611 74.357-53.611z"}}),e("path",{staticClass:"path eighth",staticStyle:{"stroke-linejoin":"round","stroke-linecap":"round","stroke-miterlimit":"2.6131",fill:"none"},attrs:{id:"8",d:"m101.95 0.099757c14.808 0 26.812 12.001 26.812 26.806 0 14.804-12.004 26.805-26.812 26.805-27.236 0-47.121-53.611-74.357-53.611-14.808 0-26.812 12.001-26.812 26.806 0 14.804 12.004 26.805 26.812 26.805 27.236 0 47.121-53.611 74.357-53.611z"}}),e("path",{staticClass:"path nineth",staticStyle:{"stroke-linejoin":"round","stroke-linecap":"round","stroke-miterlimit":"2.6131",fill:"none"},attrs:{id:"9",d:"m102.65 0.099757c14.808 0 26.812 12.001 26.812 26.806s-12.004 26.806-26.812 26.806c-27.236 0-47.121-53.612-74.357-53.612-14.808 0-26.812 12.001-26.812 26.806s12.004 26.806 26.812 26.806c27.236 0 47.121-53.612 74.357-53.612z"}})])])},B=[],H={},W=H,A=(e("11a9"),Object(h["a"])(W,z,B,!1,null,null,null)),N=A.exports,D={components:{Logo:N}},J=D,U=Object(h["a"])(J,$,I,!1,null,null,null),V=U.exports,F=function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("div",[e("h1",[t._v("music")]),e("Player")],1)},K=[],R=function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("div",[e("button",{on:{click:function(n){t.togglePlayback()}}},[t._v(t._s(t.isPlaying?"HOLD":"PLAY"))]),e("button",{on:{click:function(n){t.stopPlayback()}}},[t._v("STOP")]),e("button",{on:{click:function(n){t.switchTrack(-1)}}},[t._v("BACK")]),e("button",{on:{click:function(n){t.switchTrack(1)}}},[t._v("NEXT")]),e("br"),e("br"),e("br"),e("br"),e("span",{staticClass:"song-info"},[e("br"),e("p",[t._v("\n      Song description\n      "),e("br"),t._v("\n      "+t._s(this.manager.playlist[this.currentSong].title)+"\n      "),e("br"),t._v("\n      "+t._s(t._f("musicTime")(this.manager.playlist[this.currentSong].howl.duration()))+"\n      "),e("br"),t._v("\n      "+t._s(this.manager.playlist[this.currentSong].description)+"\n    ")])]),e("br")])},X=[],Y=(e("ac6a"),e("1e5c")),q=function(t){this.playlist=t,this.index=0};q.prototype={play:function(t){var n,e=this;t="number"===typeof t?t:e.index;var i=e.playlist[t];n=i.howl?i.howl:i.howl=new Y["Howl"]({src:[i.file],html5:!0}),n.play(),e.index=t},pause:function(){var t=this,n=t.playlist[t.index].howl;n.pause()},stop:function(){var t=this,n=t.playlist[t.index].howl;n&&n.stop()},skip:function(t){var n=this,e=0;e=n.index+t,e<0&&(e=n.playlist.length+t),e>=n.playlist.length&&(e=0),n.skipTo(e)},skipTo:function(t){var n=this;n.playlist[n.index].howl&&n.playlist[n.index].howl.stop(),n.play(t)}};var G=new q([{title:"Banana Clip",file:"bananaclip.mp3",description:"A super groovy song",howl:null},{title:"The Island of Shame",file:"islandshame.mp3",description:"Metal meets hardcore",howl:null},{title:"Never Took the Time",file:"nevertook.mp3",description:"ALL",howl:null}]),Q={data:function(){return{currentSong:G.index,isPlaying:!1,manager:G}},methods:{togglePlayback:function(){return this.isPlaying=!this.isPlaying,this.isPlaying?G.play():G.pause()},stopPlayback:function(){this.isPlaying=!1,G.stop()},switchTrack:function(t){this.isPlaying||(this.isPlaying=!0),this.currentSong=this.currentSong+t,this.currentSong>=this.manager.playlist.length&&(this.currentSong=0),this.currentSong<0&&(this.currentSong=this.manager.playlist.length-1),G.skip(t)}},created:function(){G.playlist.forEach(function(t){t.howl=new Y["Howl"]({src:[t.file],html5:!0})})}},Z=Q,tt=(e("6131"),Object(h["a"])(Z,R,X,!1,null,null,null)),nt=tt.exports,et={components:{Player:nt},data:function(){return{}}},it=et,ot=Object(h["a"])(it,F,K,!1,null,null,null),at=ot.exports,st=function(){var t=this,n=t.$createElement;t._self._c;return t._m(0)},rt=[function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("div",[e("h1",[t._v("sounds")])])}],lt={},ct=lt,ut=Object(h["a"])(ct,st,rt,!1,null,null,null),dt=ut.exports;window.scrollTo(0,1);var ht={name:"app",data:function(){return{selectedComponent:"MainPage",componentsList:["MainPage","Music","Sounds","Bio","Contact"],animationType:"",windowHeight:window.innerHeight,windowWidth:window.innerWidth}},components:{Bio:f,Contact:y,BottomBar:P,TopMenu:M,MainPage:V,Music:at,Sounds:dt},methods:{onSwipe:function(t){if(2===t.direction){var n=this.currentSelection;n<this.componentsListLength?n++:n=0,this.animationType="left",this.selectedComponent=this.componentsList[n]}if(4===t.direction){var e=this.currentSelection;e--,e<0&&(e=this.componentsListLength),this.animationType="right",this.selectedComponent=this.componentsList[e]}},clickPageChange:function(t){this.selectedComponent=t,this.animationType="fade"}},computed:{currentSelection:function(){return this.componentsList.indexOf(this.selectedComponent)},componentsListLength:function(){return this.componentsList.length-1}},mounted:function(){var t=this;this.$nextTick(function(){window.addEventListener("resize",function(){t.windowHeight=window.innerHeight,t.windowWidth=window.innerWidth})})}},pt=ht,ft=(e("034f"),Object(h["a"])(pt,s,r,!1,null,null,null)),mt=ft.exports,vt=e("6591");vt["VueHammer"].config.swipe={direction:"horizontal",threshold:50},a["default"].use(vt["VueHammer"]),a["default"].config.productionTip=!1,a["default"].filter("musicTime",function(t){var n=o()(Math.floor(t/360)),e=o()(Math.floor((t-360*n)/60)),i=o()((t-(360*n+60*e))%60),a=e>9?e:"0"+e,s=i>9?i:"0"+i;return a+":"+s}),new a["default"]({render:function(t){return t(mt)}}).$mount("#app")},6131:function(t,n,e){"use strict";var i=e("bf75"),o=e.n(i);o.a},"64a9":function(t,n,e){},"6f97":function(t,n,e){},a7eb:function(t,n,e){},bf75:function(t,n,e){},fafe:function(t,n,e){"use strict";var i=e("ffce"),o=e.n(i);o.a},fbea:function(t,n,e){"use strict";var i=e("a7eb"),o=e.n(i);o.a},ffce:function(t,n,e){}});