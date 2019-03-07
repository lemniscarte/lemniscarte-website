<template>
<div>
  <button ref="playBtn" @click="togglePlayback()">{{ isPlaying ? "HOLD" : "PLAY" }}</button>
  <button ref="stopBtn" @click="stopPlayback()">STOP</button>
  <button ref="backBtn" @click="switchTrack(-1)">BACK</button>
  <button ref="nextBtn" @click="switchTrack(1)">NEXT</button>
  <br>
  <br>
  <br>
  <p>
    <p class="blurb"
      v-if="this.player.playlist[this.currentSong].howl.state() === 'loading'">
      Loading...
    </p>
    <p class="blurb"
      v-else>
      {{ this.player.playlist[this.currentSong].title }}
      <br>
      {{ this.player.playlist[this.currentSong].howl.duration() | musicTime }}
      <br>
      {{ this.player.playlist[this.currentSong].description }}
    </p>
  <br>
</div>
</template>

<script>
//music handler library
import { Howl } from "howler";

export default {
  data() {
    return {
      player: null,
      currentSong: null,
      isPlaying: false,
      playlistArray: [
        {
          title: "Moody, suspenseful, treacherous",
          file: "music/slow.mp3",
          description: "A loop for a dramatic scene",
          howl: null
        },
        {
          title: "Noir",
          file: "music/noir.mp3",
          description: "A cinematic cyberpunk theme",
          howl: null
        },
        {
          title: "Koto + Chill beats",
          file: "music/kotochill.mp3",
          description: "Dance performance track",
          howl: null
        },
        {
          title: "Courage",
          file: "music/courage.mp3",
          description: "Western theme",
          howl: null
        },
        {
          title: "Black Widow",
          file: "music/blackwidow.mp3",
          description: "Theme for a circus performance",
          howl: null
        },
        {
          title: "Game Background",
          file: "music/resistjamaction.mp3",
          description: "Level loop of a ResistJam game",
          howl: null
        },
        {
          title: "Game Intro",
          file: "music/resistjamintro.mp3",
          description: "Intro to a ResistJam game",
          howl: null
        },
        {
          title: "16-bits Action",
          file: "music/snes.mp3",
          description: "Faithful reproduction of SNES timbres",
          howl: null
        },
        {
          title: "Skateboarding Video",
          file: "music/shortintro.mp3",
          description: "A stinger for the intro",
          howl: null
        },
        {
          title: "Hope & Despair",
          file: "music/rimsky.mp3",
          description: "Based on Rimsky's Principles of Orchestration",
          howl: null
        },
        {
          title: "8-bits Compilation",
          file: "music/8bit1.mp3",
          description:
            "Samples of tracks made with NES hardware limitations in mind",
          howl: null
        },
        {
          title: "8-bits Compilation II",
          file: "music/8bit2.mp3",
          description:
            "More samples of tracks made with NES hardware limitations in mind",
          howl: null
        },
        {
          title: "Surf Competition",
          file: "music/world.mp3",
          description:
            "A tune from a side project, DeJaneiro Jazz, used in a video shoot of a surfing competition in Brazil",
          howl: null
        },
        {
          title: "Nu-Jazz",
          file: "music/nu.mp3",
          description: "A tune all the way from 2005",
          howl: null
        },
        {
          title: "Heavy!",
          file: "music/metal.mp3",
          description: "Used in a surf video back in 2008",
          howl: null
        },
        {
          title: "CPU-Wave",
          file: "music/computery.mp3",
          description: "Glithcy & sweet",
          howl: null
        },
        {
          title: "Samba",
          file: "music/samba.mp3",
          description: "Wound up on a surf video, surprisingly",
          howl: null
        }
      ]
    };
  },
  methods: {
    togglePlayback() {
      this.animButton(this.$refs.playBtn);
      this.isPlaying = !this.isPlaying;
      return this.isPlaying ? this.player.play() : this.player.pause();
    },
    stopPlayback() {
      this.animButton(this.$refs.stopBtn);
      this.isPlaying = false;
      this.player.stop();
    },
    switchTrack(mod) {
      this.animButton(mod == 1 ? this.$refs.nextBtn : this.$refs.backBtn);
      if (!this.isPlaying) {
        this.isPlaying = true;
      }
      this.currentSong = this.currentSong + mod;
      if (this.currentSong >= this.player.playlist.length) {
        this.currentSong = 0;
      }
      if (this.currentSong < 0) {
        this.currentSong = this.player.playlist.length - 1;
      }
      this.player.skip(mod);
    },
    animButton(element) {
      element.classList.add("pop");

      element.addEventListener("animationend", function() {
        element.classList.remove("pop");
        element.removeEventListener("animationend", function() {
          return;
        });
      });
    }
  },
  created: function() {
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

        //failsafe for argument type
        index = typeof index === "number" ? index : self.index;
        var data = self.playlist[index];

        //test to see if I can eschew the check commented out below
        sound = data.howl;

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
          //so it doesn't bog down the client
          sound.unload();
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
          self.playlist[self.index].howl.unload();
        }
        //only then play next track, but better without autoplay?
        self.play(index);
      }
    };

    this.player = new Player(this.playlistArray);
    //init all howl objects in playlist for later use
    //(or else fetching is attempted on non-existing properties)
    this.player.playlist.forEach(track => {
      track.howl = new Howl({
        src: [track.file],
        html5: true
      });
      track.howl.on("end", () => {
        this.isPlaying = false;
        // track.howl.stop();
        // track.howl.unload();
      });
    });
    this.currentSong = this.player.index;
  }
};
</script>

<style>
button {
  opacity: 0.7;
  margin: 6px;
  height: calc(16vmin - 2vw);
  width: calc(16vmin - 2vw);
  background-color: rgba(0, 0, 0, 0.75);
  color: rgb(255, 255, 255);
  border: 0;
  border-radius: 100%;
  font-size: calc(4vmin - 1vw);
  font-family: "Nunito";
  transition: all ease 0.4s;
}
.pop {
  transition: all ease 0.3s;
  animation-duration: 0.3s;
  animation-name: popanim;
}
@keyframes popanim {
  50% {
    opacity: 1;
    box-shadow: 0.3vw 0.3vw 10px 2px rgba(0, 0, 0, 1);
  }
}
button:focus {
  outline: none;
}
</style>
