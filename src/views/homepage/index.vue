<template>
    <div class="container">
        <div class="logo"></div>
<div class="word">
    <span class="fonts">Hi,</span><br>
    <span class="fonts">welcome</span><br>
    <span class="fonts">to</span><br>
    <span class="fonts">iMusic</span>
</div>
<!-- 跳转到登录 -->
<div class="login" @click="$router.push('/login')"><span class="word1">log in</span></div>
<!--不登陆的用户直接跳转到在线听歌  -->
<span class="walk" @click="$router.push('/playback/onlinemu')">先逛逛 ></span>
<span class="circle1"><img src="@/assets/Frame 4 (1).png" alt=""></span>
    </div>
</template>

<script>

export default {
  name: 'HomepageIndex',
  methods: {

  }
}
</script>

<style lang="less" scoped>
.container{
    height: 946px;
    position: relative;
    display: flex;
    background-color: #C6E1F1
}
.word{
    position:absolute;
    width: 443px;
    height:349px ;
    margin-left:99px;
    margin-top:155px;
    font-size: 80px;
    line-height: 95px;

}
.logo{
    position: absolute;
    width: 70px;
    height: 70px;
margin-top: 21px;
margin-left: 31px;
border-radius: 15px;
background-image: url("@/assets/Frame 11.png");
box-shadow: 0px 2px  4px  black;
cursor: pointer;
border: none; /* 移除默认的按钮边框 */
transition: transform 0.3s; /* 添加过渡效果，使浮动更加平滑 */
}
.circle1{
    position: absolute;
    margin-left: 930px;
    margin-top: 9px;
}
.sign{
    position: absolute;
    margin-left: 89px;
    margin-top: 595px;
    width: 200px;
    height: 70px;
    border-radius: 27px;
    background-image: url("@/assets/Group 9 (1).png");
    background-size: cover;
    border: none; /* 移除默认的按钮边框 */
    cursor: pointer; /* 鼠标移上去显示手型 */
    transition: transform 0.3s; /* 添加过渡效果，使浮动更加平滑 */

}
.login{
    margin-left: 150px;
    margin-top: 590px;
    position: absolute;
    width: 200px;
    height: 70px;
    border-radius: 37px;
background-color: #5D7289;
    cursor: pointer; /* 鼠标移上去显示手型 */
    transition: transform 0.3s; /* 添加过渡效果，使浮动更加平滑 */
}
.word1{
    font-family:"po" !important;
    color: white;
    font-size: 40px;
position: absolute;
    margin-top: 10px;
    margin-left: 35px;
}
.login:hover{
   transform: scale(1.1);
}
.sign:hover{
   transform: scale(1.1);
}
.logo:hover{
    transform: scale(1.1);
}
.fonts{
    font-family:"po" !important;
    font-size: 100px;
}
.walk{
    position: absolute;
    margin-top: 600px;
    margin-left: 420px;
    font-size: 32px;
    color: #5D7289;
cursor: pointer;
}
</style>
