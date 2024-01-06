<template>
   <el-container>
    <el-main class="el-main">
<div class="mainbox">
<!-- 标题 -->
<span class="wordtitle">Hi,welcome to iMusic</span>
<!-- 导航 -->

<ul class="navmain">
<li class="nav">精选歌曲</li>
<li @click="$router.push('/playback/online')" class="nav">在线听歌</li>
<li @click="$router.push('/playback/songsheet')" class="nav">我的歌单</li>
<li @click="$router.push('/playback/list')" class="nav">排行榜单</li>
<li @click="$router.push('/playback/upload')" class="nav">我的音乐</li>
</ul>
<!-- 我的歌曲部分 -->
<ul>
  <li class="nav2">我的歌曲</li>
</ul>
<!-- 我的歌曲展示区域 -->
<div class="Mymusic">
  <div><span class="mymusic">
    <!-- 小白色三角号 -->
    <img class="littlewh" src="@/assets/Polygon 1.png" alt="">
    <div class="word">
  <span class="word1">歌曲名称</span>
  <span class="word2">歌手</span>
</div>
</span>
</div>
<div><span class="mymusic">
  <img class="littlewh" src="@/assets/Polygon 1.png" alt="">
    <div class="word">
  <span class="word1">歌曲名称</span>
  <span class="word2">歌手</span>
</div>
</span>
</div>
<div><span class="mymusic">
  <img class="littlewh" src="@/assets/Polygon 1.png" alt="">
    <div class="word">
  <span class="word1">歌曲名称</span>
  <span class="word2">歌手</span>

</div>
</span>
</div>
<div><span class="mymusic">
  <img class="littlewh" src="@/assets/Polygon 1.png" alt="">
    <div class="word">
  <span class="word1">歌曲名称</span>
  <span class="word2">歌手</span>
</div>
</span>
</div>
</div>
<!-- 歌曲信息 -->

<!-- 搜索框 -->
<input v-model="Search" class="search" type="text"><button class="searchphoto" @click="goSearch(Search)"></button>
<!--轮播图-->
<div class="swiper-container">
    <div class="swiper-wrapper">
      <div class="swiper-slide" v-for="item in rows" :key="item.thumbnail" :style="{ backgroundImage: 'url(' + item.thumbnail + ')' }">
        <div>
          <span class="word3">今日精选</span>
          <div class="circle"></div>

        </div></div>

    </div>
    <!-- 如果需要分页器 -->
    <div class="swiper-pagination"></div>

</div>
</div>
</el-main>
  </el-container>
</template>

<script>
import Swiper from 'swiper'
import 'swiper/css/swiper.min.css'
import { listTopMusic, searchSong } from '@/api/song'

export default {
  name: 'OnlinemuIndex',
  data () {
    return {
      rows: [], // 获取的歌曲的数组
      Search: '', // 输入框的内容
      rows1: [], // 数据组
      thumbnail1: '', // 歌曲图片将要发送到哪的地址
      name: '', // 歌曲名称
      singer: ''// 歌手名称
    }
  },
  async created () {
    // 获取推荐歌曲
    const { data: { rows } } = await listTopMusic()
    this.rows = rows
  },
  mounted () {
    this.initSwiper()
  },
  methods: {
    async  goSearch (key) {
      const { data: { rows } } = await searchSong(key, 1, 4)
      // 返回搜索结果数据
      this.rows1 = rows
      this.thumbnail1 = rows[0].thumbnail
      this.name = rows[0].name
      this.singer = rows[0].singer

      // 同步存储数据到vuex
      this.$store.commit('search/setname', this.name)
      this.$store.commit('search/setThumbnail', this.thumbnail1)
      this.$store.commit('search/setSingername', this.singer)
      this.$store.commit('search/setkeyword', key)
      this.$router.push('/playback/searchlist')
    },
    // 初始化
    async initSwiper () {
      this.swiper = new Swiper('.swiper-container', {
      // direction: 'vertical', // 垂直切换选项
        loop: true, // 循环模式选项
        slidesPerView: 3,
        spaceBetween: 30,
        centeredSlides: true,
        autoplay: {
          delay: 2000, // 自动切换的时间间隔，单位为毫秒
          disableOnInteraction: false // 用户操作swiper之后，是否禁止autoplay。默认为true：停止。
        },
        // 如果需要分页器
        pagination: {
          el: '.swiper-pagination',

          clickable: false
        },

        // 如果需要前进后退按钮
        navigation: {
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev'
        },

        // 如果需要滚动条
        scrollbar: {
          el: '.swiper-scrollbar'
        }
      })
    }
  }

}
</script>

<style lang="less" scoped>
 .el-header, .el-footer {
    background-color: #B3C0D1;
    color: #333;
    text-align: center;
    line-height: 60px;
  }

  .el-aside {
    background-color: #E2F3FD;
    color: #333;

  }

  .el-main {
    background-color: #FFFFFF;
    color: #333;
    height: 946px;
    text-align: center;
    line-height: 160px;
  }

  body > .el-container {
    margin-bottom: 40px;
  }

  .el-container:nth-child(5) .el-aside,
  .el-container:nth-child(6) .el-aside {
    line-height: 260px;
  }

  .el-container:nth-child(7) .el-aside {
    line-height: 320px;
  }
  .mainbox{
    display: flex;
    position: relative;
  }
  .search{
    position: absolute;
    border-radius: 30px;
width: 230px;
height: 46px;
margin-left: 50px;
margin-top: -20px;
background-color: #E2F3FD;
box-shadow: 0 2px 2px gray;
border: 1px solid #E2F3FD;
padding-left: 15px;
font-size: 20px;
}
.searchphoto{
    position:absolute;
    width: 30px;
    height: 25px;
    background-color: #E2F3FD;
    background-image: url("@/assets/Rectangle.png");
margin-left: 240px;
margin-top: -8px;
background-repeat: no-repeat;
border: none;
cursor: pointer;
transition:transform 0.3s;
}
.searchphoto:hover{
    transform: scale(1.15);
}
.wordtitle{
  position: absolute;
  width: 600px;
  height: 40px;
    font-family:"po" !important;
    font-size: 24px;
    margin-left: 300px;
    margin-top: -73px;
}
//导航
.nav{
  margin-left: 100px;
  margin-top: 60px;
  padding-top: 10px;
  width: 162px;
  height: 45px;
  font-size: 24px;
  line-height: 24px;
  color:#434141;
  cursor: pointer;
float: left;
list-style-type: none;
text-align: center;
border-radius: 15px;
}
.nav2{
  margin-left: 20px;
  margin-top: 350px;
  padding-top: 10px;
  width: 162px;
  height: 45px;
  font-size: 24px;
  line-height: 24px;
  color:#434141;
  cursor: pointer;

list-style-type: none;
text-align: center;
border-radius: 15px;
}
.nav2:hover{
  background-color:#C6E1F1 ;
}
.navmain{
  width: 1500px;
  height: 200px;
  position: absolute;
  margin-top: -9px;
  margin-left: -74px;
  display: inline-block;
}
.nav:hover{
  background-color:#C6E1F1
}
//轮播图
.swiper-container{
  position: absolute;
margin-top: 125px;
  width: 1300px;
  height: 250px;
}

    .swiper-slide {
      text-align: center;
      font-size: 18px;
      width: 298px;
      height: 200px;
      border-radius: 15px;
      box-shadow: 1px 2px 2px gray;
      background:#E2F3FD;
background-size: cover;
      /* Center slide text vertically */
      display: -webkit-box;
      display: -ms-flexbox;
      display: -webkit-flex;
      display: flex;
      -webkit-box-pack: center;
      -ms-flex-pack: center;
      -webkit-justify-content: center;
      justify-content: center;
      -webkit-box-align: center;
      -ms-flex-align: center;
      -webkit-align-items: center;
      align-items: center;
 transition: 300ms;
transform: scale(0.8);
    }
.swiper-slide-active,.swiper-slide-duplicate-active{
      transform: scale(1);
}
.swiper-container .swiper-pagination-bullets {
  position: absolute;
bottom: -60px;
}
.mymusic{
float: left;
  width: 80px;
  height: 80px;
  margin-left: 250px;
  border-radius: 10px;
  background-color: #5D7289;
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
  width: 140px;
  height: 71px;
  margin-left: 100px;
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

background-color: blue
}
.word3{
  font-size: 24px;
position: absolute;
margin-top: -10px;
margin-left: -140px;
color: black
}
.graph{
  position: absolute;
  width: 100px;
  height: 100px;

}
.swiper-wrapper{
position: relative;
    width: 100%;
    height: 100%;
    z-index: 1;
    display: flex;
    transition-property: transform;
    box-sizing: content-box;
}
</style>
