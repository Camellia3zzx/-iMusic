<template>
  <el-container>

<div class="mainbox">
  <!-- 上边框 -->
  <div><img class="substract" src="@/assets/Subtract.png" alt=""></div>
<!-- 标题 -->
<span class="wordtitle">MY SONGLIST</span>
<!-- 搜索框 -->
<input class="search" type="text"><button class="searchphoto"></button>
<!-- 自建歌单和收藏歌单 -->
<div>
   <button class="create">自建歌单</button>
   <button class="collect">收藏歌单</button>
</div>
<!-- 加号和新建两个字 -->
<div class="newCreate">
  <img class="Group45"  src="@/assets/Group 45.png" alt="">
  <span class="newcreate">新建</span>
</div>
<!-- 歌单内容 -->
<ul class="Songsheet">
  <li><div class="songsheet"> <img class="littlewh" src="@/assets/Polygon 1.png" alt=""></div>
    <div class="word">
      <span class="word1">歌单名称</span>
      <span class="word2">歌单简介</span>
    </div>
    <!-- 黑色小箭头 -->
    <img class="littlebl" src="@/assets/jj.png" alt="">
  </li>
  <li><div class="songsheet">  <img class="littlewh" src="@/assets/Polygon 1.png" alt=""></div>
    <div class="word">
      <span class="word1">歌单名称</span>
      <span class="word2">歌单简介</span>
    </div>
    <img class="littlebl" src="@/assets/jj.png" alt="">
 </li>
  <li><div class="songsheet"> <img class="littlewh" src="@/assets/Polygon 1.png" alt=""> </div>
    <div class="word">
      <span class="word1">歌单名称</span>
      <span class="word2">歌单简介</span>
    </div>
    <img class="littlebl" src="@/assets/jj.png" alt="">
 </li>
</ul>
</div>

  </el-container>
</template>

<script>
export default {
  name: 'SongsheetIndex',
  data () {
    return {
      songsheetList: []
    }
  },
  created: {

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
    margin-left:-30px;
    margin-top: -60px;

}
//字符
.Songsheet li{
  width: 1300px;
  height: 140px;
  margin-bottom: 40px;
  list-style-type: none;
}
//歌单整体
.Songsheet{
  margin-top: 200px;
}
//歌单文本
.word{
  margin-left: -300px;
  margin-top: -100px;
}
.word1{
  position: absolute;
  margin-top: -70px;
  margin-left: -200px;
  font-size: 32px;
}
.word2{
  position: absolute;
  margin-top: -8px;
  margin-left: -180px;
  font-size: 20px;
}
//歌单内容方框
.songsheet{
  width: 226px;
  height: 130px;
  background-color: #5D7289;
  background-image: url('../../assets/ljjj.jpg');
  background-size: cover;
  border-radius: 10px;
  box-shadow: 2px 2px 4px gray;
  cursor: pointer;
  transition: transform 0.3s;

}
.songsheet:hover{
  transform: scale(1.1);
}
.substract{
  position: absolute;

  transform: scale(1.535);
}
.littlebl{
  position: absolute;
  margin-top: 5px;
  margin-left: 650px;
  cursor: pointer;
  transition: transform 0.3s;
}
.littlebl:hover{
  transform: scale(1.1);
}
.littlewh{
  position: absolute;
  margin-top: 95px;
  margin-left: -90px;
}
//搜索框
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
//收藏歌单和自建歌单
.create{
  position: absolute;
  margin-left: 27px;
  margin-top: 66px;
  width: 144px;
  height: 46px;
  border-radius: 10px;
  background-color: #5D7289;
  font-size: 20px;
  cursor: pointer;
  color: #FFFFFF;
  border: none;
  box-shadow: 2px 2px 2px gray;
}
.collect{
  position: absolute;
  margin-left: 216px;
  margin-top: 66px;
  width: 144px;
  height: 46px;
  border-radius: 10px;
  background-color: #5D7289;
  font-size: 20px;
cursor: pointer;
color: #FFFFFF;
border: none;
box-shadow: 2px 2px 2px gray;
}
//点击动画
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
.collect:active,.create:active{
  animation: buttonClick 200ms linear;
}
.Group45{
  position: absolute;
margin-right: 10px;
margin-left: -50px;
margin-top: 5px;
  width: 35px;
  height: 29px;

}
.newcreate{
  position: absolute;
  margin-top: -60px;
width: 42px;
height: 28px;
  font-size: 20px;
  color: #5D7289;
}
.newCreate{
  position: absolute;
  margin-left: 380px;
  margin-top: 70px;
  width: 100px;
  height: 50px;
  cursor: pointer;
}
</style>
