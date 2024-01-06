<template>
  <div class="player111">
    <h1 class="h2">{{ currentTime }} / {{ durationTime }}</h1>
    <input type="range" ref="seekBar" v-model="seekValue" @input="seekMusic" :max="duration">
      <!-- 播放 -->
      <button  @click="handelMusic" :class="{'player':isPlay,'noPlayer':!isPlay}"></button>
    <!-- 上一首 -->
  <div><button  class="presong"></button></div>
    <!-- 下一首 -->
    <button class="nextsong"></button>
  </div>
</template>

<script>
import { Howl } from 'howler'
import { mapGetters, mapMutations } from 'vuex'
export default {
  data () {
    return {
      sound: null,
      seekValue: 0,
      duration: 0, // 音频时长
      second: 0, // 秒数
      timer: null, // 定时器的id
      isPlay: true// 定义播放还是暂停

    }
  },
  mounted () {
    this.sound = new Howl({
      src: ['']
    })
    this.sound.on('play', () => {
      this.duration = this.sound.duration()
    })
  },
  watch: {
    songUrl2 (newUrl) {
      // 监听songUrl2变化，并在变化时更新音频源
      this.sound.unload()
      this.sound = new Howl({
        src: [newUrl]
      })
      this.sound.on('play', () => {
        this.duration = this.sound.duration()
      })
    }

  },
  methods: {
    ...mapMutations('search', ['setSongPlay']),
    ...mapMutations('ranklist', ['setSongUrl2']),
    playMusic () {
      this.sound.play()
      console.log(this.songUrl2)
      this.timer = setInterval(() => {
        this.formatTime(this.sound.seek())
      }, 1000) // 每秒更新一次滑块位置
    },
    pauseMusic () {
      this.sound.pause()
    },
    stopMusic () {
      this.sound.stop()
      this.seekValue = 0
    },
    seekMusic () {
      const seekValue = parseInt(this.seekValue) / 100 * this.duration
      this.sound.seek(seekValue)
    },

    formatTime (seconds) {
      const minutes = Math.floor(seconds / 60)
      const remainingSeconds = Math.floor(seconds % 60)
      const formattedMinutes = minutes < 10 ? `0${minutes}` : minutes
      const formattedSeconds = remainingSeconds < 10 ? `0${remainingSeconds}` : remainingSeconds
      return `${formattedMinutes}:${formattedSeconds}`
    },
    handelMusic () {
      if (this.isPlay) {
        this.playMusic()
      } else {
        this.pauseMusic()
      }
      this.isPlay = !this.isPlay
    }

  },
  computed: {
    currentTime () {
      if (this.sound) {
        return this.formatTime(this.sound.seek())
      } else {
        return '00:00'
      }
    },
    durationTime () {
      if (this.duration) {
        return this.formatTime(this.duration)
      } else {
        return '00:00'
      }
    },

    ...mapGetters('ranklist', ['songUrl2'])
  }
}
</script>

<style lang="less" scoped>

h1 {
  font-family: Arial, sans-serif;
}

.controls button {
  padding: 10px 20px;
  margin: 0 10px;
  font-size: 16px;
  cursor: pointer;
  background-color: #4CAF50;
  color: white;
  border: none;
  border-radius: 4px;
}

.controls button:hover {
  background-color: #45a049;
}

input[type="range"] {
  width: 80%;
  margin-top: 20px;
}
// https://dl.stream.qqmusic.qq.com/C400000r1OBb0Db72v.m4a?guid=8554803504&vkey=9DC5881C6099943DBB4FD184861B33166BDC605D919328632DFD300BC7F732113840B9B9F63D85B31AE5E74DE958D91CCC226EB0DEC8D115&uin=2418584719&fromtag=120032
h1 {
  font-size: 24px;
  margin-top: 20px;
  margin-bottom: 10px;
}

.controls {
  margin-top: 20px;
}

.h2{
  position: absolute;
margin-top: -2px;
  margin-left: -100px;
}
.player{
  position: absolute;
  z-index: 1;
  width: 107px;
  height: 107px;
  border-radius: 50%;
  border: none;
cursor: pointer;
margin-top: 28px;
margin-left: 230px;
  background-image: url("@/assets/Group 9.png");
}
.noPlayer{
  position: absolute;
  z-index: 1;
  width: 107px;
  height: 107px;
  border-radius: 50%;
  border: none;
cursor: pointer;
margin-top: 28px;
margin-left: 230px;
  background-image: url("@/assets/Group 128.png");
}
.player,.noPlayer:active {
animation: buttonClick 100ms linear;
}
@keyframes buttonClick {
0% {
  transform: scale(1);
}
50% {
  transform: scale(0.8);
}
100% {
  transform: scale(1);
}
}
.presong{
  width: 40px;
  height: 48px;
  position: absolute;
  border: none;
  z-index: 1;
  margin-top: -100px;
  cursor: pointer;
  margin-left: 398px;
  box-shadow: 0px 1px 2px #C6E1F1 ;
  background-color: #C6E1F1;
  background-image: url("@/assets/Group 18.png");
}
.presong:active {
animation: buttonClick 100ms linear;
}

.nextsong{
  width: 50px;
  height: 48px;
  position: absolute;
  border: none;
  z-index: 1;
  margin-top: -100px;
  cursor: pointer;
  margin-left: 670px;
  box-shadow: 0px 1px 2px #C6E1F1 ;
  background-color: #C6E1F1;
  background-image: url("@/assets/Group 17.png");
}
.nextsong:active {
animation: buttonClick 100ms linear;
}
</style>
