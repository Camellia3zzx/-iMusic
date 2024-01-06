<template>
    <div class="form1">
    <span class="word">账号登录</span>
   <input v-model="userName"  placeholder=" 请输入账号:" class="input1"  type="text">
   <input v-model="password" placeholder=" 请输入密码:" class="input2"  type="password" >
   <span @click="showisSign" class="tosign">立即注册</span>
   <span @click="showisIdentify" class="tologin">验证码登录</span>
   <button @click="login" class="log">登录</button>
  </div>
  </template>

<script>
import { codeLogin2 } from '@/api/login'
export default {
  name: 'LogsignIndex',
  props: ['isSign'],
  data () {
    return {
      userName: '',
      password: ''

    }
  },
  methods: {
    // 切换页面
    showisSign () {
      this.$emit('showisSign', 'Sign')
    },
    showisIdentify () {
      this.$emit('showisIdentify', 'Identify')
    },
    async  login () {
      const res = await codeLogin2(this.userName, this.password)
      console.log(res)
      this.userInfo = res.data
      if (res.msg === '操作成功') {
        this.$message({
          message: '登陆成功！',
          type: 'success'
        })
        this.$store.commit('user/setUserInfo', this.userInfo)
        this.$router.push('/playback')
      }
    }
  }
}

</script>

  <style lang="less" scoped>
  .word{
    font-size:35px;
    font-family: "EP" !important;
    font-weight: 500;
    text-shadow:1px 1px black;
  }
  .input1 {
    width: 383px;
    height: 60px;
    border-radius: 30px;
    font-size: 30px;
    margin-top: 40px;
    padding-left: 20px;
  }
   .input1:hover{
      border:2px  solid  blue;
      box-shadow: 1px 1px 4px  blue ;
      transform:translateX(5px)   translateY(5px);
      transition: all 1s ;
    }

  .input2{
    width: 383px;
    height: 60px;
    border-radius: 30px;
    font-size: 30px;
    margin-top: 60px;
    padding-left: 20px;
  }
  .input2:hover{
      border:2px  solid  blue;
      box-shadow: 1px 1px 4px  blue ;
      transform:translateX(5px)   translateY(5px);
      transition: all 1s ;
    }
    .form1{
      position: relative;
      width: 500px;
      height: 500px;
      text-align: center;

    }
    .tosign{
      position: absolute;
      width: 111px;
      height: 31px;
      cursor: pointer;
      margin-left: -410px;
      margin-top: 150px;
    }
    .tosign:hover{
      color: purple;
    }
    .tologin:hover{
      color: purple;
    }
    .tologin{
      position: absolute;
      width: 111px;
      height: 31px;
      cursor: pointer;
      margin-left: -100px;
      margin-top: 150px;
    }
    .log{
      font-family: "EP" !important;
      position: absolute;
      cursor: pointer;
      width: 137px;
      height: 42px;
      margin-top: 200px;
      margin-left: -265px;
      background-color: #C5C1F1;
      border:none;
      border-radius: 30px;
      transition: transform 0.3s;
      box-shadow: 1px  2px  1px black
    }
    .log:hover{
      transform: scale(1.1);
    }
    .log{
    transform: matrix();
    }
  </style>
