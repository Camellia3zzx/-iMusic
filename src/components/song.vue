<template>
<div>
    <div @click="playMusic1"><span class="mymusic"  :style="{ backgroundImage: 'url(' + thumbnailData + ')' }">
    <!-- 小白色三角号 -->
    <img class="littlewh" src="@/assets/Polygon 1.png" alt="">
    <div class="word">
  <span class="word1">歌曲名称：{{ nameData}}</span>
  <span class="word2">歌手：{{ singerData }}</span>
</div>
</span>
</div>
</div>
</template>

<script>
import { Howl } from 'howler'
import { mapMutations, mapState, mapGetters } from 'vuex'
export default {
  name: 'SongitemIndex',
  data () {
    return {
      sound: null,
      seekValue: 0,
      duration: 0, // 音频时长
      second: 0, // 秒数
      timer: null // 定时器的id
    }
  },
  computed: {
    ...mapState({
      nameData: state => state.search.searchInfo.name,
      thumbnailData: state => state.search.searchInfo.thumbnail,
      singerData: state => state.search.searchInfo.singer,
      songUrlData: state => state.search.searchInfo.songUrl
    }),
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
    // 播放地址
    ...mapGetters(['songUrl'])
  },
  mounted () {
    this.sound = new Howl({
      src: [this.songUrlData]
    })
    this.sound.on('play', () => {
      this.duration = this.sound.duration()
    })
  },
  methods: {
    ...mapMutations('search', ['setname', 'setThumbnaili', 'setSingername', 'setSongPlay']),
    playMusic1 () {
      this.sound.play()
      this.timer = setInterval(() => {
        this.formatTime(this.sound.seek())
      }, 1000) // 每秒更新一次滑块位置
    },
    // pauseMusic () {
    //   this.sound.pause()
    // },
    // stopMusic () {
    //   this.sound.stop()
    //   this.seekValue = 0
    // },
    // seekMusic () {
    //   const seekValue = parseInt(this.seekValue) / 100 * this.duration
    //   this.sound.seek(seekValue)
    // },
    formatTime (seconds) {
      const minutes = Math.floor(seconds / 60)
      const remainingSeconds = Math.floor(seconds % 60)
      const formattedMinutes = minutes < 10 ? `0${minutes}` : minutes
      const formattedSeconds = remainingSeconds < 10 ? `0${remainingSeconds}` : remainingSeconds
      return `${formattedMinutes}:${formattedSeconds}`
    }
  }

}
</script>

<style lang="less" scoped>
.mymusic{
float: left;
  width: 80px;
  height: 80px;
  margin-left: 250px;
  border-radius: 10px;
  background-color: #5D7289;
  background-size: cover;
  cursor: pointer;
transition: transform 0.3s;
}
.littlewh{
  position: absolute;
  margin-top: 55px;
margin-left: -35px;
  transform: scale(0.6);
}
.mymusic:hover{
  transform: scale(1.1);
}
.Mymusic{
  position: absolute;
  margin-top: 420px;
  margin-left: -210px;
width: 1400px;
height: 500px;
}

.word{
  position: absolute;
  width: 400px;
  height: 71px;
  margin-left: -15px;
  margin-top: -50px;
}
.word .word1{
  position: absolute;
  margin-top: -15px;
  margin-left: -60px;
font-size: 20px;
color: #000000;
}
.word .word2{
  position: absolute;
font-size: 18px;
margin-top: 30px;
margin-left: -60px;
color: #000000;
}

.circle{
  width: 25px;
  height: 25px;
  border-radius: 50%;
  position: absolute;
  margin-top: 60px;
  margin-left: -180px;
background-color: #5D7289;
}
</style>
