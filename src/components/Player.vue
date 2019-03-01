<template>
<div>
  <button @click="togglePlayback()">{{ isPlaying ? "HOLD" : "PLAY" }}</button>
  <button @click="stopPlayback()">STOP</button>
  <button @click="switchTrack(-1)">BACK</button>
  <button @click="switchTrack(1)">NEXT</button>
  <br>
  <br>
  <br>
  <span class="song-info">
    <p v-if="this.manager.playlist[this.currentSong].howl.state() === 'loading'">
      Loading...
    </p>
    <p v-else>
      {{ this.manager.playlist[this.currentSong].title }}
      <br>
      {{ this.manager.playlist[this.currentSong].howl.duration() | musicTime }}
      <br>
      {{ this.manager.playlist[this.currentSong].description }}
    </p>
  </span>
  <br>
</div>
</template>

<script>
//music handler library
import { Howl } from "howler";

//class for player, using index to keep track of track. ha!
let Player = function(playlist) {
  this.playlist = playlist;
  this.index = 0;
};

//flesh out all methods needed
Player.prototype = {
  play: function(index) {
    var self = this;
    var sound;

    //failsafe for type
    index = typeof index === "number" ? index : self.index;
    var data = self.playlist[index];

    //actually create the howl objects
    if (data.howl) {
      sound = data.howl;
    } else {
      sound = data.howl = new Howl({
        src: [data.file],
        html5: true
      });
    }
    //only then play, adjust index
    sound.play();
    self.index = index;
  },

  pause: function() {
    var self = this;
    var sound = self.playlist[self.index].howl;
    sound.pause();
  },

  stop: function() {
    var self = this;
    var sound = self.playlist[self.index].howl;
    if (sound) {
      sound.stop();
    }
  },

  skip: function(mod) {
    var self = this;
    var index = 0;
    index = self.index + mod;
    //first check if mod is out of array bounds
    if (index < 0) {
      index = self.playlist.length + mod;
    }
    if (index >= self.playlist.length) {
      index = 0;
    }
    //only then call skipTo
    self.skipTo(index);
  },

  skipTo: function(index) {
    var self = this;
    //stop previous playback
    if (self.playlist[self.index].howl) {
      self.playlist[self.index].howl.stop();
    }
    //only then play next track
    self.play(index);
  }
};

//put tracks here, use as description holder as well
//TODO: refactor into its own components
let player = new Player([
  {
    title: "Banana Clip",
    file: "bananaclip.mp3",
    description: "A super groovy song",
    howl: null
  },
  {
    title: "The Island of Shame",
    file: "islandshame.mp3",
    description: "Metal meets hardcore",
    howl: null
  },
  {
    title: "Never Took the Time",
    file: "nevertook.mp3",
    description: "ALL",
    howl: null
  }
]);

export default {
  data() {
    return {
      currentSong: player.index,
      isPlaying: false,
      manager: player
    };
  },
  methods: {
    togglePlayback() {
      this.isPlaying = !this.isPlaying;
      return this.isPlaying ? player.play() : player.pause();
    },
    stopPlayback() {
      this.isPlaying = false;
      player.stop();
    },
    switchTrack(mod) {
      if (!this.isPlaying) {
        this.isPlaying = true;
      }
      this.currentSong = this.currentSong + mod;
      if (this.currentSong >= this.manager.playlist.length) {
        this.currentSong = 0;
      }
      if (this.currentSong < 0) {
        this.currentSong = this.manager.playlist.length - 1;
      }
      player.skip(mod);
    }
  },
  created: function() {
    //init all howl objects in playlist for later use
    //(or else fetching is attempted on non-existing properties)
    player.playlist.forEach(track => {
      track.howl = new Howl({
        src: [track.file],
        html5: true
      });
    });
  }
};
</script>

<style>
button {
  margin: 6px;
  height: calc(16vmin - 2vw);
  width: calc(16vmin - 2vw);
  background-color: rgba(255, 255, 255, 0.75);
  color: rgba(42, 42, 42, 0.75);
  border: 0;
  border-radius: 100%;
  font-size: calc(4vmin - 1vw);
  font-family: "Nunito";
  box-shadow: 2px 2px 10px 1px rgba(0, 0, 0, 0.4);
  transition: all ease 0.4s;
}
button:hover {
  box-shadow: 3px 5px 10px 2px rgba(0, 0, 0, 0.5);
  transform: translateY(-2px);
  transition: all ease 0.4s;
}
button:focus {
  outline: none;
}
.song-info {
  font-size: 12px;
  text-shadow: 1px 1px 0 rgba(0, 0, 0, 1);
}
</style>
