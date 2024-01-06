<template>

<!-- 一下是右边主体部分 -->
  <el-container>
    <el-main class="el-main">
<div class="mainbox">

<!-- 搜索框 -->
<input v-model="Search" class="search" type="text"><button @click="goSearch(Search)" class="searchphoto"></button>
    <div class="words">
        <span class="word1">歌曲名称</span>
        <span class="word2">歌手</span>
    </div>
    <div><img class="Group25" id="gradient-image1" src="@/assets/Group 105.png" alt=""></div>
    <div><img class="Group6" src="@/assets/Group 6.png" alt=""></div>
    <div class="boxphoto"  :style="{ backgroundImage: 'url(' + thumbnailData + ')' }"></div>
</div>

</el-main>
  </el-container>

</template>

<script>
import { searchSong } from '@/api/song'
import { mapState } from 'vuex'

export default {
  name: 'PlaybackIndex',
  data () {
    return {
      Search: '', // 输入框的内容
      rows: [], // 数据组
      thumbnail: '', // 歌曲图片
      name: '', // 歌曲名称
      singer: '', // 歌手名称
      songUrl: ''// 歌曲播放地址
    }
  },
  methods: {
    async  goSearch (key) {
      const { data: { rows } } = await searchSong(key, 1, 4)
      // 返回搜索结果数据
      this.rows = rows
      this.thumbnail = rows[0].thumbnail
      this.name = rows[0].name
      this.singer = rows[0].singer
      this.songUrl = rows[0].songUrl
      // 同步存储数据到vuex
      this.$store.commit('search/setname', this.name)
      this.$store.commit('search/setThumbnail', this.thumbnail)
      this.$store.commit('search/setSingername', this.singer)
      this.$store.commit('search/setSongPlay', this.songUrl)
      this.$store.commit('search/setkeyword', key)
      this.$router.push('/playback/searchlist')
    }
  },
  computed: {
    ...mapState({
      thumbnailData: state => state.ranklist.thumbnailrank
    })
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
  .el-row {
    &:last-child {
      margin-bottom: 0;
    }
  }
  .el-col {
    border-radius: 4px;
  }
  .bg-purple-dark {
    background: #5D7289;
  }
  .bg-purple {
    background: #d3dce6;
  }
  .bg-purple-light {
    background: #e5e9f2;
  }
  .grid-content {
    min-height: 36px;
  }
  .grid-content1 {
    height: 99px;

  }
  .row-bg {
    padding: 10px 0;
    background-color: #f9fafc;
  }
  .mainbox{
    display: flex;
    position: relative;
  }

  .Group6{
    position: absolute;
    margin-top: 114px;
    margin-left: 699px;
    transform: scale(1.3);
  }
  .boxphoto{
    position: absolute;
    margin-top: 40px;
    margin-left: 849px;
    width: 450px;
    height: 450px;
    background-color:#E2F3FD ;
    background-size: cover;
  }

  .words{
    position: absolute;
    width: 200px;
    height: 300px;
    margin-left: 250px;
    margin-top: 100px;
    line-height: 97px;

  }
  .Group25{
    position: absolute;
    margin-top: 400px;
    margin-left: 240px;
    transform: scale(1.3);
  }
  .word1{
    font-size: 48px;

  }
  .word2{
    font-size: 36px;
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
margin-top:-8px;
background-repeat: no-repeat;
border: none;
cursor: pointer;
transition:transform 0.3s;
}
.searchphoto:hover{
    transform: scale(1.15);
}
.player{
  width: 600px;
  position: absolute;
  margin-top: 30px;
  margin-left: 80px;
}

</style>
