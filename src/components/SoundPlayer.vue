<template>
  <div>
    <div class="soundgrid">
      <div
        class="soundbtn cornerupleft"
        ref="btnA"
        @click="playSound(0, $refs.btnA)"
      >
        &#x25B8;
      </div>
      <div class="soundbtn" ref="btnB" @click="playSound(1, $refs.btnB)">
        &#x25B8;
      </div>
      <div class="soundbtn" ref="btnC" @click="playSound(2, $refs.btnC)">
        &#x25B8;
      </div>
      <div
        class="soundbtn cornerupright"
        ref="btnD"
        @click="playSound(3, $refs.btnD)"
      >
        &#x25B8;
      </div>
      <div class="soundbtn" ref="btnE" @click="playSound(4, $refs.btnE)">
        &#x25B8;
      </div>
      <div class="soundbtn" ref="btnF" @click="playSound(5, $refs.btnF)">
        &#x25B8;
      </div>
      <div class="soundbtn" ref="btnG" @click="playSound(6, $refs.btnG)">
        &#x25B8;
      </div>
      <div class="soundbtn" ref="btnH" @click="playSound(7, $refs.btnH)">
        &#x25B8;
      </div>
      <div class="soundbtn" ref="btnI" @click="playSound(8, $refs.btnI)">
        &#x25B8;
      </div>
      <div class="soundbtn" ref="btnJ" @click="playSound(9, $refs.btnJ)">
        &#x25B8;
      </div>
      <div class="soundbtn" ref="btnK" @click="playSound(10, $refs.btnK)">
        &#x25B8;
      </div>
      <div class="soundbtn" ref="btnL" @click="playSound(11, $refs.btnL)">
        &#x25B8;
      </div>
      <div
        class="soundbtn cornerbottomleft"
        ref="btnM"
        @click="playSound(12, $refs.btnM)"
      >
        &#x25B8;
      </div>
      <div class="soundbtn" ref="btnN" @click="playSound(13, $refs.btnN)">
        &#x25B8;
      </div>
      <div class="soundbtn" ref="btnO" @click="playSound(14, $refs.btnO)">
        &#x25B8;
      </div>
      <div
        class="soundbtn cornerbottomright"
        ref="btnP"
        @click="playSound(15, $refs.btnP)"
      >
        &#x25B8;
      </div>
    </div>
    <br />
    <p></p>
    <p class="blurb">
      A sound board with 16 gracious bits of sound I had fun making for work or
      otherwise.
    </p>
    <br />
  </div>
</template>

<script>
//music handler library
import { Howl } from "howler";

export default {
  data() {
    return {
      player: null,
      soundArray: [
        {
          file: "sounds/axehit.wav",
          howl: null
        },
        {
          file: "sounds/checkpoint.wav",
          howl: null
        },
        {
          file: "sounds/corpsehit.wav",
          howl: null
        },
        {
          file: "sounds/flamepowerup.wav",
          howl: null
        },
        {
          file: "sounds/monstershowsup.wav",
          howl: null
        },
        {
          file: "sounds/pickup.wav",
          howl: null
        },
        {
          file: "sounds/scare1.wav",
          howl: null
        },
        {
          file: "sounds/scare2.wav",
          howl: null
        },
        {
          file: "sounds/xxx.wav",
          howl: null
        },
        {
          file: "sounds/xxx.wav",
          howl: null
        },
        {
          file: "sounds/xxx.wav",
          howl: null
        },
        {
          file: "sounds/xxx.wav",
          howl: null
        },
        {
          file: "sounds/xxx.wav",
          howl: null
        },
        {
          file: "sounds/xxx.wav",
          howl: null
        },
        {
          file: "sounds/xxx.wav",
          howl: null
        },
        {
          file: "sounds/xxx.wav",
          howl: null
        }
      ]
    };
  },
  methods: {
    //make the ends of the square distinct, so as to apply corner classes
    //use a v-for to make the 4x4 grid above, then use this
    squaremaker(sides) {
      for (let i = 1; i <= sides * sides; i++) {
        console.log(
          i == 1
            ? "top left"
            : i == sides
            ? "top right"
            : i == sides * sides - sides
            ? "bottom left"
            : i == sides * sides
            ? "bottom right"
            : i
        );
      }
    },
    playSound(tag, element) {
      this.animButton(element);
      this.player.play(tag);
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
      }
    };

    this.player = new Player(this.soundArray);
    //init all howl objects in playlist for later use
    //(or else fetching is attempted on non-existing properties)
    this.player.playlist.forEach(track => {
      track.howl = new Howl({
        src: [track.file]
      });
    });
  }
};
</script>

<style>
.soundgrid {
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  grid-template-rows: 1fr 1fr 1fr 1fr;
  grid-gap: 10px;
  justify-items: center;
  padding: 0 21vmin;
  height: 40vmin;
  align-content: center;
  align-items: center;
  justify-content: center;
  justify-self: center;
}
.soundbtn {
  opacity: 0.7;
  /* margin: 6px; */
  height: calc(11vmin - 2vw);
  width: calc(11vmin - 2vw);
  background-color: rgba(0, 0, 0, 0.75);
  color: rgb(255, 255, 255);
  /* border: 0; */
  /* border-radius: 100%; */
  display: flex;
  justify-content: center;
  align-items: center;
  /* font-size: 4vmin; */
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
.cornerupleft {
  border-top-left-radius: 15%;
}
.cornerupright {
  border-top-right-radius: 15%;
}
.cornerbottomleft {
  border-bottom-left-radius: 15%;
}
.cornerbottomright {
  border-bottom-right-radius: 15%;
}
</style>
