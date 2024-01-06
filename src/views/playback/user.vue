<template>
    <el-container>
 <div class="mainbox">
   <!-- 上边框 -->
   <div><img class="substract" src="@/assets/Subtract1.png" alt=""></div>
 <!-- 标题 -->
 <span  class="wordtitle">MY WORLD</span>
 <!--我的喜欢，自建歌单，关注歌手-->
 <div>
  <button class="mylike">我的喜欢</button>
  <button class="songsheet">自建歌单</button>
  <button class="follow">关注歌手</button>
</div>
<!-- 大圆圈（放置头像 -->
<div class="circle" :style="{ backgroundImage: 'url(https://' + avatarUrl + ')' }"></div>
<!--退出登录-->
<button class="logout">退出登录</button>
<!-- 用户信息 -->
<div class="word">
  <span class="word1">{{ nickName }}</span>
  <span class="word2">粉丝数量:5</span>
</div>
<!-- 显示内容 -->
<dl class="dl1">
<dd class="dd1">
  <!-- 方框 -->
  <div class="list"><img class="Polygon" src="@/assets/Polygon 1.png" alt=""></div>
  <!-- 文本内容 -->
  <div class="Word">
      <span class="word3">歌曲名称</span>
      <span class="word4">歌手</span>
  </div>
</dd>
<dd class="dd1">
  <!-- 方框 -->
  <div class="list"><img class="Polygon" src="@/assets/Polygon 1.png" alt=""></div>
  <!-- 文本内容 -->
  <div class="Word">
      <span class="word3">歌曲名称</span>
      <span class="word4">歌手</span>
  </div>

</dd>
<dd class="dd1">
  <!-- 方框 -->
  <div class="list"><img class="Polygon" src="@/assets/Polygon 1.png" alt=""></div>
  <!-- 文本内容 -->
  <div class="Word">
      <span class="word3">歌曲名称</span>
      <span class="word4">歌手</span>
  </div>

</dd>

</dl>

 </div>
   </el-container>
 </template>

<script>
import { getUserInfo } from '@/api/user'
import { mapState } from 'vuex'

export default {
  name: 'UserIndex',
  data () {
    return {
      avatarUrl: '', // 头像图片
      nickName: ''// 用户昵称
    }
  },
  computed: {
    ...mapState({
      userIdData: state => state.user.userInfo.id
    })

  },
  methods: {

  },
  async created () {
    const { data } = await getUserInfo(this.userIdData)
    this.nickName = data.nickName
    this.avatarUrl = data.avatar
    console.log(this.avatarUrl)
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
     margin-left:-55px;
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
   margin-left: -790px;
   margin-top: -60px;
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
 .mylike{
  position: absolute;
  margin-left: 22px;
  margin-top:160px;
  width: 144.52px;
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
  margin-left: 220px;
  margin-top: 160px;
  width: 144.52px;
  height: 46px;
  border-radius: 10px;
  background-color: #5D7289;
  font-size: 20px;
  cursor: pointer;
  color: #FFFFFF;
  border: none;
  box-shadow: 2px 2px 2px gray;
 }
 .follow{
  position: absolute;
  margin-left: 420px;
  margin-top: 160px;
  width: 144.52px;
  height: 46px;
  border-radius: 10px;
  background-color: #5D7289;
  font-size: 20px;
  cursor: pointer;
  color: #FFFFFF;
  border: none;
  box-shadow: 2px 2px 2px gray;
 }
.circle{
  position: absolute;
  width: 180px;
  height: 180px;
  margin-left: 1000px;
  margin-top: 130px;
  border-radius: 50%;
  background-color: #5D7289;
  background-size: cover;
  box-shadow: 1px 2px 4px gray;
}
.logout{
  position: absolute;
  width: 84px;
  height: 28px;
  border-radius: 15px;
  background-color: #A6CDE9;
  border: none;
  color: white;
  margin-top: 177px;
  margin-left: 1200px;
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
.logout:active,.follow:active,.mylike:active,.songsheet:active{
  animation: buttonClick 200ms linear
}
.word{
  margin-left: 700px;
width: 200px;
height: 120px;
margin-top: 80px;
}
.word1{
font-size: 24px;
position: absolute;
}
.word2{
position: absolute;
  font-size: 20px;
  margin-top: 40px;
  margin-left: 2px;
}
.Word{
  margin-left: 350px;
}
.word3{
  position: absolute;
  margin-top: -50px;
  margin-left: -200px;
  font-size: 24px;
}
.word4{
  position: absolute;
  margin-top: -8px;
  margin-left: -180px;
  font-size: 20px;
}
.dl1{
  position: absolute;
margin-top: 260px;
margin-left: 20px;
}
.dd1{

margin-right: 100px;
margin-bottom: 40px;
width: 320px;
height: 110px;
}
.list{
  position: absolute;
  width: 90px;
  height: 90px;
  background-color: #5D7289;
  background-image: url('../../assets/jay.webp');
  background-size: cover;
  cursor: pointer;
  border-radius: 13px;
  transition: transform 0.3s;
}
.list:hover{
  transform: scale(1.1);
}
.Polygon{
  position: absolute;
  margin-left: -40px;
  margin-top: 60px;
transform: scale(0.6);
}
 </style>
