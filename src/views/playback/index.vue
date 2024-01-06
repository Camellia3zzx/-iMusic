<template>
    <!-- 一下是左边侧栏部分 -->
 <el-container>
  <el-aside width="282px" >
<dl>
    <dd class="dd3">
        <div class="circle">
            <router-link  to="/playback/user" style="text-decoration: none;color: inherit; "><i class="el-icon-user-solid  usericon"></i></router-link>
        </div>
        <span class="word3">用户名称</span>
            <router-link class="word4" to="/playback/user" style="text-decoration: none; ">个人主页 ></router-link>
    </dd>
    <router-link to="/playback/onlinemu" style="text-decoration: none; color: inherit;"><dd class="dd1">在线音乐</dd></router-link>
  <router-link to="/playback/online" style="text-decoration: none; color: inherit;"><dd class="dd2">在线播放</dd></router-link>
  <router-link to="/playback/songsheet" style="text-decoration: none; color: inherit;"><dd class="dd2">我的歌单</dd></router-link>
  <router-link to="/playback/collect" style="text-decoration: none; color: inherit;"><dd class="dd2">我的收藏</dd></router-link>
  <router-link to="/playback/list" style="text-decoration: none; color: inherit;"><dd class="dd2">排行榜单</dd></router-link>
</dl>

<dl>
 <dd class="dd5">我的音乐</dd>
  <router-link to="/playback/upload" style="text-decoration: none; color: inherit;"><dd class="dd2">音乐上传</dd></router-link>
  <router-link to="/playback/download" style="text-decoration: none; color: inherit;"><dd class="dd2">音乐下载</dd></router-link>

</dl>
</el-aside>
<!-- 一下是右边主体部分 -->
  <el-container>
    <el-main class="el-main">
<div class="mainbox">
  <!-- 二级路由出口 -->
    <div class="router"> <router-view></router-view></div>

    <!-- 下面的点赞收藏之类的图标 -->
    <div><img class="star" src="@/assets/star.png" alt=""></div>
    <div><img class="comment" src="@/assets/comment.png" alt=""></div>
    <router-link to="/playback/commment" style="text-decoration: none; color: inherit;"><div><img class="comment" src="@/assets/comment.png" alt=""></div></router-link>
    <div><img class="download" src="@/assets/download.png" alt=""></div>
    <div><img class="good" src="@/assets/3 1.png" alt=""></div>
    <div><img class="Vector4" src="@/assets/Vector 4.png" alt=""></div>
    <div><img class="Vector3" id="gradient-image" src="@/assets/Vector 3 (1).png" alt=""></div>
<player class="player111"></player>
</div>
</el-main>
  </el-container>
</el-container>
</template>

<script>
import player from '@/components/player.vue'
export default {
  name: 'PlaybackIndex',
  components: {
    player
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
  .Vector4{
    position: absolute;
    margin-top: 600px;
    margin-left: 124px;
    transform: scale(1.3);

  }
  .Vector3{
margin-left: 95px;
 position: absolute;
 margin-top: 715px;
    transform: scale(1.3);
  }

  .Group25{
    position: absolute;
    margin-top: 700px;
    margin-left: 545px;
    transform: scale(1.3);
  }
  // 三图标专属点击动画
  @keyframes buttonClick1{
    0% {
  transform: scale(0.3);
}
50% {
  transform: scale(0.4);
}
100% {
  transform: scale(0.3);
}
  }
  @keyframes buttonClick2{
    0% {
  transform: scale(1);
}
50% {
  transform: scale(1.3);
}
100% {
  transform: scale(1);
}
  }
  .star{
    position: absolute;
    margin-top: 750px;
    z-index: 1;
transform: scale(0.3);
cursor: pointer;
  }
  .star:active {

animation: buttonClick1 100ms linear;
}
  .comment{
    position: absolute;
    margin-top: 750px;
    margin-left: 220px;
    z-index: 1;
transform: scale(0.3);
cursor: pointer;
  }
  .comment:active {

animation: buttonClick1 100ms linear;
}
.good{
    position: absolute;
    margin-top: 820px;
    margin-left: 550px;
    z-index: 1;

cursor: pointer;
  }
  .good:active {

animation: buttonClick2 100ms linear;
}
  .comment:active {

animation: buttonClick1 100ms linear;
}
  .download{
    position: absolute;
    margin-top: 750px;
    margin-left: 725px;
    z-index: 1;
transform: scale(0.3);
cursor: pointer;
  }
  .download:active {

animation: buttonClick1 100ms linear;
}
  .words{
    position: absolute;
    width: 200px;
    height: 300px;
    margin-left: 250px;
    margin-top: 100px;
    line-height: 97px;

  }
  .word1{
    font-size: 48px;

  }
  .word2{
    font-size: 36px;
  }
  .dd5{
    color: #5D7289;
    padding-top: 20px;
    font-size: 30px;
    height: 70px;
    padding-left: 20px;
  }
 .dd1{
    color: #5D7289;
    padding-top: 20px;
    font-size: 30px;
    height: 70px;
    padding-left: 20px;
    cursor: pointer;

 }
 .dd1:active {

animation: buttonClick 100ms linear;
}

.dd1:hover{

background-color: #C6E1F1;
box-shadow: 0 1px 2px gray;
}
.dd2{
    cursor: pointer;
    height: 70px;
    text-align: center;
    padding-top: 15px;
    font-size: 24px;
    margin-top: 20px;
    font-weight: bolder;
}
.dd2:active {

  animation: buttonClick 100ms linear;
}

.dd2:hover{

    background-color: #C6E1F1;
    box-shadow: 0 1px 2px gray;
}
.dd3{
  height: 100px;
  background-color: #5D7289;
}
.circle {
    position: absolute;
    width: 60px;
    height: 60px;
    background-color:#E2F3FD;
    border-radius: 50%;
    margin-left: 24px;
    margin-top: 20px;
    cursor: pointer;
    transition: transform 0.3s;
}
.circle:hover{
    transform: scale(1.2);
}
.word3{
    position: absolute;
font-size: 24px;
margin-left: 129px;
margin-top: 20px;
color: #FFFFFF;
}
.word4{
    position: absolute;
font-size: 16px;
margin-top: 58px;
margin-left: 145px;
color: #FFFFFF;
cursor: pointer;
}
.word4:hover{
    color:#C6E1F1;
}
/* 播放器 */
#play {
    position: fixed;
}

#controls {
    position: absolute;
    top: -5px;
    left: 500px;
    display: flex;
    justify-content: center;
    align-items: center;
    margin-top: 20px;
}

#playBtn {
    font-size: 10px;
    padding: 10px 20px;
    background-color: purple;
    color: white;
    border: none;
    border-radius: 5px;
    cursor: pointer;
    margin-right: 10px;
}

#volumeSlider {
    width: 100px;
    margin-right: 10px;
}

#progressBar {
    height: 10px;
    width: 200px;
    background-color: #eee;
    border-radius: 5px;
    position: relative;
}

#progress {
    height: 100%;
    background-color: #4CAF50;
    border-radius: 5px;
    position: absolute;
    left: 0;
    top: 0;
}
.usericon{
    margin-top: 20px;
    margin-left: 22px;
    transform: scale(3);
}
@keyframes gradient-animation {
  0% {
    background: linear-gradient(to right, red, orange);
  }
  50% {
    background: linear-gradient(to right, orange, yellow);
  }
  100% {
    background: linear-gradient(to right, yellow, green);
  }
}

#gradient-image1 {
    -webkit-mask-image: url("@/assets/Group 25.png"); /* 使用遮罩图片 */
  mask-image: url("@/assets/Group 25.png");
  animation: gradient-animation 1s infinite; /* 5秒钟循环一次 */
}

.router{
  position: absolute;
  width: 1500px;
  height: 566px;

}
.el-icon-star-on{
position: absolute;
transform: scale(5);
padding-top: 300px;
}
//播放按钮，下一首，上一首
.player{
  position: absolute;
  z-index: 1;
  width: 107px;
  height: 107px;
  border-radius: 50%;
  border: none;
cursor: pointer;
margin-top: 690px;
margin-left: 1130px;
  background-image: url("@/assets/Group 9.png");
}
.player:active {
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
  margin-top: 720px;
  cursor: pointer;
  margin-left: 1050px;
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
  margin-top: 720px;
  cursor: pointer;
  margin-left: 1265px;
  box-shadow: 0px 1px 2px #C6E1F1 ;
  background-color: #C6E1F1;
  background-image: url("@/assets/Group 17.png");
}
.nextsong:active {
animation: buttonClick 100ms linear;
}
.player111{
  width: 700px;
  position: absolute;
  margin-top: 680px;
  margin-left: 280px;
}
</style>
