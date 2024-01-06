<template>
 <el-container>

<div class="mainbox">
  <!-- 上边框 -->
  <div><img class="substract" src="@/assets/Subtract.png" alt=""></div>
<!-- 标题 -->
<span class="wordtitle">MY COLLECTION</span>
<!-- 搜索框 -->
<input class="search" type="text"><button class="searchphoto"></button>
<!-- 歌曲，专辑，歌单 -->
<div>
   <button class="songs">歌曲</button>
</div>
<!-- 对应的列表部分 -->
<dl class="dl1">
<dd class="dd1">
  <!-- 方框 -->
  <div class="list"><img class="Polygon" src="@/assets/Polygon 1.png" alt=""></div>
  <!-- 文本内容 -->
  <div class="word">
      <span class="word1">歌曲名称</span>
      <span class="word2">歌手</span>
  </div>
  <!-- 收藏图标 -->
  <img class="Star" src="@/assets/Star 6.png" alt="">
</dd>

<dd class="dd1">
  <!-- 方框 -->
  <div class="list"><img class="Polygon" src="@/assets/Polygon 1.png" alt=""></div>
  <!-- 文本内容 -->
  <div class="word">
      <span class="word1">歌曲名称</span>
      <span class="word2">歌手</span>
  </div>
  <!-- 收藏图标 -->
  <img class="Star" src="@/assets/Star 6.png" alt="">
</dd>

<dd class="dd1">
  <!-- 方框 -->
  <div class="list"><img class="Polygon" src="@/assets/Polygon 1.png" alt=""></div>
  <!-- 文本内容 -->
  <div class="word">
      <span class="word1">歌曲名称</span>
      <span class="word2">歌手</span>
  </div>
  <!-- 收藏图标 -->
  <img class="Star" src="@/assets/Star 6.png" alt="">
</dd>

<dd class="dd1">
  <!-- 方框 -->
  <div class="list"><img class="Polygon" src="@/assets/Polygon 1.png" alt=""></div>
  <!-- 文本内容 -->
  <div class="word">
      <span class="word1">歌曲名称</span>
      <span class="word2">歌手</span>
  </div>
  <!-- 收藏图标 -->
  <img class="Star" src="@/assets/Star 6.png" alt="">
</dd>

<dd class="dd1">
  <!-- 方框 -->
  <div class="list"><img class="Polygon" src="@/assets/Polygon 1.png" alt=""></div>
  <!-- 文本内容 -->
  <div class="word">
      <span class="word1">歌曲名称</span>
      <span class="word2">歌手</span>
  </div>
  <!-- 收藏图标 -->
  <img class="Star" src="@/assets/Star 6.png" alt="">
</dd>

<dd class="dd1">
  <!-- 方框 -->
  <div class="list"><img class="Polygon" src="@/assets/Polygon 1.png" alt=""></div>
  <!-- 文本内容 -->
  <div class="word">
      <span class="word1">歌曲名称</span>
      <span class="word2">歌手</span>
  </div>
  <!-- 收藏图标 -->
  <img class="Star" src="@/assets/Star 6.png" alt="">
</dd>

<dd class="dd1">
  <!-- 方框 -->
  <div class="list"><img class="Polygon" src="@/assets/Polygon 1.png" alt=""></div>
  <!-- 文本内容 -->
  <div class="word">
      <span class="word1">歌曲名称</span>
      <span class="word2">歌手</span>
  </div>
  <!-- 收藏图标 -->
  <img class="Star" src="@/assets/Star 6.png" alt="">
</dd>

<dd class="dd1">
  <!-- 方框 -->
  <div class="list"><img class="Polygon" src="@/assets/Polygon 1.png" alt=""></div>
  <!-- 文本内容 -->
  <div class="word">
      <span class="word1">歌曲名称</span>
      <span class="word2">歌手</span>
  </div>
  <!-- 收藏图标 -->
  <img class="Star" src="@/assets/Star 6.png" alt="">
</dd>

<dd class="dd1">
  <!-- 方框 -->
  <div class="list"><img class="Polygon" src="@/assets/Polygon 1.png" alt=""></div>
  <!-- 文本内容 -->
  <div class="word">
      <span class="word1">歌曲名称</span>
      <span class="word2">歌手</span>
  </div>
  <!-- 收藏图标 -->
  <img class="Star" src="@/assets/Star 6.png" alt="">
</dd>

</dl>
</div>
  </el-container>

</template>

<script>
export default {
  name: 'CollectIndex'
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
.substract{
  position: absolute;

  transform: scale(1.535);
}
.songs{
  position: absolute;
  margin-left: 57px;
  margin-top: 66px;
  width: 111.52px;
  height: 46px;
  border-radius: 10px;
  background-color: #5D7289;
  font-size: 20px;
  cursor: pointer;
  color: #FFFFFF;
  border: none;
  box-shadow: 2px 2px 2px gray;
}

.album{
  position: absolute;
  margin-left: 290px;
  margin-top: 66px;
  width: 111.52px;
  height: 46px;
  border-radius: 10px;
  background-color: #5D7289;
  font-size: 20px;
cursor: pointer;
color: #FFFFFF;
border: none;
box-shadow: 2px 2px 2px gray;
}
.songsheet{
  position: absolute;
  margin-left: 525px;
  margin-top: 66px;
  width: 111.52px;
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
.songs:active,.album:active,.songsheet:active{
  animation: buttonClick 100ms linear;
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
.dl1{
margin-top: 200px;
margin-left:100px;
}
.dd1{
float: left;
margin-right: 100px;
margin-bottom: 40px;
width: 320px;
height: 110px;

}
.list{
  position: absolute;
  width: 100px;
  height: 100px;
  background-color: #5D7289;
  background-image: url("@/assets/jay.webp");
  background-size: cover;
  cursor: pointer;
  border-radius: 13px;
  transition: transform 0.3s;
}
.list:hover{
  transform: scale(1.1);
}
.word{
  margin-left: 350px;
}
.word1{
  position: absolute;
  margin-top: -50px;
  margin-left: -200px;
  font-size: 24px;
}
.word2{
  position: absolute;
  margin-top: -8px;
  margin-left: -180px;
  font-size: 20px;
}
.Star{
  position: absolute;
  margin-left: 120px;
  margin-top: 40px;
  cursor: pointer;
  transition: transform 0.3s;
}
.Star:hover{
  transform: scale(1.3);
}
.Polygon{
  position: absolute;
  margin-left: -45px;
  margin-top: 70px;
transform: scale(0.6);
}
</style>
