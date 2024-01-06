<template>
 <el-container>

<div class="mainbox">
  <!-- 上边框 -->
  <div><img class="substract" src="@/assets/Subtract1.png" alt=""></div>
<!-- 标题 -->
<span class="wordtitle">RANKING LIST</span>
<!-- 搜索框 -->
<div class="Search"><input class="search" type="text"><button class="searchphoto"></button></div>
<!-- 排行榜内容 -->
<!-- 前三名 -->
<div class="frontPrice">
  <div><div v-for="(item,ID) in ranklist" :key="item.thumbnail" :style="{ backgroundImage: 'url(' + item.thumbnail + ')' }" :class="{'first':ID===0,'second':ID===1,'third':ID===2}"></div><div  v-for="(item,ID) in ranklist" :key="item.thumbnail" :class="{'whitecircle':ID===0,'whitecircle1':ID===1,'whitecircle2':ID===2}"><span :class="{'rank':ID===0,'rank2':ID!==0}">{{ ID+1 }}</span></div></div>
<!-- 后面的主体部分 -->
<ul class="list">
<li @click="commitSong(index)" v-for="(item,index) in ranklist" :key="index" class="li1"><div class="behind"><span class="rank3">{{ index+1 }}</span></div>
 <span class="word">歌曲名称：{{ item.Name }}</span>
 <!-- 四个图标 -->
 <div class="icon"><img class="images" src="@/assets/Star 2.png" alt=""><img class="images" src="@/assets/Group 23.png" alt=""><img @click="downloadSong(index)" class="images" src="@/assets/down.png" alt=""></div>
</li>

</ul>
</div>
</div>
  </el-container>

</template>

<script>
import { rankList } from '@/api/song'
import { mapMutations } from 'vuex'
export default {
  name: 'ListIndex',
  data () {
    return {
      ranklist: [], // 排行榜
      thumbnail: '', // 图片缩略图
      ID: 0, // 排行序号
      Name: '', // 歌曲名称]
      songurl: ''// 歌曲地址链接
    }
  },
  async created () {
    // 获取排行榜的歌曲
    const { data } = await rankList()
    this.ranklist = data.map(song => ({
      thumbnail: song.thumbnail,
      ID: song.id,
      Name: song.name,
      songUrl: song.songUrl
    }))
  },
  methods: {
    ...mapMutations('ranklist', ['setSongUrl2', 'setThumbnailrank']),
    async commitSong (index) {
      const selectedSong = this.ranklist[index] // 获取点击的歌曲
      const songurl = selectedSong.songUrl // 获取点击的歌曲的 songUrl
      const Thumbnail = selectedSong.thumbnail
      this.$store.commit('ranklist/setSongUrl2', songurl) // 将点击的歌曲的 songUrl 存储到 Vuex 仓库中
      this.$store.commit('ranklist/setThumbnailrank', Thumbnail)
    },
    async downloadSong (index) {
      const selectedSong = this.ranklist[index]
      const response = await fetch(selectedSong.songUrl)
      const blob = await response.blob()
      const url = window.URL.createObjectURL(blob)
      const a = document.createElement('a')
      a.href = url
      a.download = `${selectedSong.Name}.mp3`
      a.click()
      window.URL.revokeObjectURL(url)
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
//标题
.wordtitle{
  position: absolute;
  width: 322px;
  height: 86px;
    font-family:"po" !important;
    font-size: 24px;
    margin-left:-35px;
    margin-top: -50px;

}
.search{
    position: absolute;
    border-radius: 30px;
width: 230px;
height: 46px;
margin-left: 1000px;
margin-top: 66px;
background-color: #E2F3FD;
box-shadow: 0 2px 2px gray;
border: 1px solid #E2F3FD;
padding-left: 15px;
font-size: 20px;
}
.Search{
  position: absolute;
  margin-left: 0px;
  margin-top: -50px;
}
.searchphoto{
    position:absolute;
    width: 30px;
    height: 25px;
    background-color: #E2F3FD;
    background-image: url("@/assets/Rectangle.png");
margin-left: 1191px;
margin-top:80px;
background-repeat: no-repeat;
border: none;
cursor: pointer;
transition:transform 0.3s;
}
.searchphoto:hover{
    transform: scale(1.15);
}
.substract{
  position: absolute;

  transform: scale(1.535);
}
.frontPrice{
  position: absolute;
  margin-left: 350px;
  margin-top: 80px;
  width: 554px;
  height: 242px;

}
.first{
  margin: 0px auto 39px;
  width: 180px;
  height: 180px;
  border-radius: 50%;
  background-color: #5D7289;
  background-size: cover;
  box-shadow: 0px 1px 4px gray;
  cursor: pointer;
}
.second{
margin-left: 423px;
margin-top: -137px;
  width: 130px;
  height: 130px;
  border-radius: 50%;
  background-color: #5D7289;
  background-size: cover;
  box-shadow: 0px 1px 4px gray;
  cursor: pointer;
}
.third{
margin-left: 0px;
margin-top: -130px;
  width: 130px;
  height: 130px;
  border-radius: 50%;
  background-color: #5D7289;
  background-size: cover;
  box-shadow: 0px 1px 4px gray;
  cursor: pointer;
}
.whitecircle1{
position: absolute;
  width: 50px;
  height: 50px;
  border-radius: 50%;
  background-color:#E2F3FD;
  margin-top: -30px;
  margin-left: 40px;
  box-shadow: 0px 1px 4px gray;
  cursor: pointer;
}
.whitecircle{
  position: absolute;
  width: 70px;
  height: 70px;
  border-radius: 50%;
  background-color:#E2F3FD;
  margin-top: -80px;
  margin-left: 241px;
  box-shadow: 0px 1px 4px gray;
  cursor: pointer;
}
.whitecircle2{
position: absolute;
  width: 50px;
  height: 50px;
  border-radius: 50%;
  background-color:#E2F3FD;
  margin-top: -30px;
  margin-left: 464px;
  box-shadow: 0px 1px 4px gray;
  cursor: pointer;
}
.rank{
  position: absolute;
  margin-top: -43px;
  margin-left: -13px;
  font-family:"po" !important;
color: #5D7289;
font-size: 40px;
}
.rank2{
  position: absolute;
  margin-top: -53px;
  margin-left: -10px;
  font-family:"po" !important;
color: #5D7289;
font-size: 24px;
}
.li1{
  margin-left: -370px;
  margin-bottom: 38px;
  margin-top: 25px;
width: 1410px;
  height: 70px;
  list-style-type: none;
cursor: pointer;
}
.li1:hover{
  background-color: aqua;
}
.behind{
  position: absolute;
  width: 60px;
  height: 60px;
  margin-top: 10px;
  margin-left: 40px;
  border-radius: 50%;
  background-color:#E2F3FD;
  box-shadow: 0px 1px 4px gray;
cursor: pointer;
}
.rank3{
  position: absolute;
margin-top: -47px;
margin-left: -10px;
font-family:"po" !important;
font-size: 24px;
color: #5D7289;

}
.word{
  position: absolute;
margin-top: -40px;
  margin-left: -550px;
  font-size: 32px;
  color: #434141;
}
.icon{
  position: absolute;
  width: 200px;
  height: 45px;
  margin-left: 1100px;
  margin-top: 20px;

}
.images{
  float: left;
  cursor: pointer;
  transition: transform 0.3s;
}
@keyframes buttonClick {
  0%{
    transform: scale(1.1);
  }
  50%{
    transform: scale(0.8);
  }
 100%{
    transform: scale(1.1);
  }
}
.images:active{
  animation: buttonClick 200ms linear;
}
.images:nth-child(1),.images:nth-child(2){
  margin-right:35px ;
}
</style>
