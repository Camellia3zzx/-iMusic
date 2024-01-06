<template>
   <el-container>

<div class="mainbox">
  <!-- 上边框 -->
  <div><img class="substract" src="@/assets/Subtract.png" alt=""></div>
<!-- 标题 -->
<span class="wordtitle">comment</span>
<!-- 搜索框 -->
<input class="search" type="text"><button class="searchphoto"></button>
</div>
<li><div class="songsheet"> <img class="littlewh" src="@/assets/Polygon 1.png" alt=""></div>
    <div class="word">
      <span class="word1">歌单名称</span>
      <span class="word2">歌手</span>
    </div>
  </li>

  <input placeholder="         期待您的精彩评论" class="comment" type="text" v-model="commentContent">
  <img class="smile" src="../../assets/smile 1.png" alt=""><img class="vertical" src="../../assets//Vector 5.png" alt=""><span @click="handleSubmit" class="word3">发布</span>

  <!-- 用户评论界面 -->
  <!-- 用户信息 -->
 <div class="Comment"> <div class="circle"></div>
 <div class="word4">
      <span class="word5">爱飞的鱼</span>
      <span class="word6">2023.10.19  福建</span>
    </div>
    <div class="comment2">别说青春很长，其实它短如流星，在人生中划过一道最璀璨耀眼的光芒后，便匆匆流逝。即使现在科技发达，人们能借助各种医疗手段来保持容颜靓丽，却始终没有一种药物能留住年少光阴，能找回曾经单纯无忧的心境。</div>
</div>

<div> <div class="circle"></div>
 <div class="word4">
      <span class="word5">一路向北</span>
      <span class="word6">2023.11.29  广东</span>
    </div>
    <div  class="comment2">{{ comment2}}</div>
    <img class="good" src="../../assets/3 3.png" alt=""><span class="reply">回复</span>
</div>
  </el-container>
</template>

<script>
export default {
  name: 'CommentIndex',
  data () {
    return {
      commentcontent: '', // 评论内容
      comment2: '感叹时光飞逝，珍惜时光，青春不再来等。'
    }
  },
  methods: {
    handleSubmit () {
      if (this.commentContent.trim() !== '') {
        this.comment2 = this.commentContent
      } else {
        this.comment2 = '感叹时光飞逝，珍惜时光，青春不再来等。'
      }
    }
  }
}

</script>

<style lang="less" scoped>
.reply{
    position:absolute;
    margin-left: -920px;
    margin-top: -15px;
}
.good{
    position: absolute;
    width: 20px;
    height: 20px;
    margin-left: -970px;
    margin-top: 55px;
}
.circle{
   width: 60px;
   height: 60px;
   border-radius: 50%;
   background-color:#5D7289 ;
   background-image: url('../../assets/jay.webp');
   background-size: cover;
   margin-top: 300px;
   margin-left: -1000px;

}
.substract{
  position: absolute;
  transform: scale(1.535);
}
.wordtitle{
  position: absolute;
  width: 322px;
  height: 86px;
    font-family:"po" !important;
    font-size: 24px;
    margin-left:-30px;
    margin-top: -80px;
}
.littlewh{
  position: absolute;
  margin-top: 95px;
  margin-left: -90px;
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
.word{
  margin-left: -300px;
  margin-top: -100px;
}
.word1{
  position: absolute;
  margin-top: -70px;
  margin-left: 320px;
  font-size: 32px;
}
.word2{
  position: absolute;
  margin-top: -8px;
  margin-left: 350px;
  font-size: 20px;
}
//歌单内容方框
.songsheet{
  width: 226px;
  height: 130px;
  background-color: #5D7289;
margin-top: -150px;
margin-left: 20px;
  border-radius: 10px;
  box-shadow: 2px 2px 4px gray;
  cursor: pointer;
  transition: transform 0.3s;

}
.songsheet:hover{
  transform: scale(1.1);
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
.Comment{
    margin-top: 220px;
}
.comment{
    margin-top: 180px;
    margin-left: -120px;
    width: 997px;
    height: 74px;
    background-color: #e6e6e6;
    border: none;
    border-radius: 20px;
    font-size: 20px;
    padding-left: 20px;
}
.smile{
    position: absolute;
margin-top: 140px;
margin-left: 930px;
width: 200px;
height: 200px;
    transform: scale(0.1);
    cursor: pointer;
}
.vertical{
    position: absolute;
    width: 5px;
    height: 30px;
margin-left: 1060px;
margin-top: 220px;
}
.word3{
    width: 40px;
    height: 20px;
    position: absolute;
    margin-left: 1072px;
    margin-top: 160px;
    color: #7B7878;
    cursor: pointer;
}
.word4{
    margin-left: -1720px;
    margin-top: -120px;

}
.word5{
    font-size: 20px;
    ;
}
.word6{
    position: absolute;
    margin-top: 30px;
    margin-left: -79px;
    font-size: 16px;
}
.comment2{
    position: absolute;
    width: 997px;
    height: 106px;
    background-color: #e6e6e6;
    margin-top: -20px;
    margin-left: -995px;
    border-radius: 20px;
    font-size: 20px;
    line-height: 50px;

}
</style>
