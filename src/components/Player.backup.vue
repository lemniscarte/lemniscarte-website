<template>
<div>
  <button @click="togglePlayback()">{{ isPlaying ? 'HOLD' : 'PLAY' }}</button>
  <button @click="stopPlayback()">STOP</button>
  <button @click="switchTrack(-1)">BACK</button>
  <button @click="switchTrack(1)">NEXT</button>
  <br>
  <br>
  <br>
  <br>
  <span class="song-info">{{ this.allMusic[0] }}
    <br>
    <p>
      {{ this.allMusic.info }}
    </p>
  </span>
  <br>
</div>
</template>

<script>
import { Howl } from "howler";

//SETUP CLASS FOR HOWLER
let Player = function(playlist) {
  this.playlist = playlist;
  this.index = 0;
};

//CREATE PLAYLIST WITH FILES FROM /public
let player = new Player([
  {
    title: "Banana Clip by Miguel",
    file: "bananaclip.mp3",
    howl: null
  },
  {
    title: "The Island of Shame",
    file: "islandshame.mp3",
    howl: null
  },
  {
    title: "Never Took the Time",
    file: "nevertook.mp3",
    howl: null
  }
]);

//EXTEND PLAYER PROTOTYPE
Player.prototype = {
  play: function(index) {
    var self = this;
    var sound;

    index = typeof index === "number" ? index : self.index;
    var data = self.playlist[index];

    // If we already loaded this track, use the current one.
    // Otherwise, setup and load a new Howl.
    if (data.howl) {
      sound = data.howl;
    } else {
      sound = data.howl = new Howl({
        src: [data.file],
        html5: true
      });
    }

    sound.play();

    self.index = index;
  },

  pause: function() {
    var self = this;

    // Get the Howl we want to manipulate.
    var sound = self.playlist[self.index].howl;

    // Pause the sound.
    sound.pause();
  },

  skip: function(direction) {
    var self = this;

    var index = 0;
    if (direction === "prev") {
      index = self.index - 1;
      if (index < 0) {
        index = self.playlist.length - 1;
      }
    } else {
      index = self.index + 1;
      if (index >= self.playlist.length) {
        index = 0;
      }
    }

    self.skipTo(index);
  },

  /**
   * Skip to a specific track based on its playlist index.
   * @param  {Number} index Index in the playlist.
   */
  skipTo: function(index) {
    var self = this;

    // Stop the current track.
    if (self.playlist[self.index].howl) {
      self.playlist[self.index].howl.stop();
    }

    // Play the new track.
    self.play(index);
  }
};

export default {
  data() {
    return {
      sound: "",
      isPlaying: false,
      allMusic: [["bananaclip.mp3"], ["islandshame.mp3"], ["nevertook.mp3"]],
      musicSelection: 0,
      songName: ""
    };
  },
  props: [],
  methods: {
    togglePlayback() {
      this.isPlaying = !this.isPlaying;
      return !this.sound.playing() ? this.sound.play() : this.sound.pause();
    },
    stopPlayback() {
      this.isPlaying = false;
      this.sound.stop();
    },
    switchTrack(mod) {
      return this.musicSelection + mod;
    },
    createHowler() {
      return new Howl({
        src: this.allMusic[this.musicSelection],
        html5: true
      });
    }
  },
  computed: {
    duration: function() {
      return this.sound.duration();
    }
    // currentTrack: function(mod) {
    //   let trackNumber = 0;
    //   let newTrack = tracknumber + mod;
    //   return newTrack;
    // }
  },
  created() {
    this.sound = this.createHowler();
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
.song-info {
  font-size: 12px;
}
</style>
