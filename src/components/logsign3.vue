<template>
    <div class="form1">
    <span class="word">验证码登录</span>
   <input v-model="mobile" maxlength="11" placeholder=" 手机号" class="input1"  type="text" >
   <input v-model="smsCode" maxlength="6" placeholder=" 验证码" class="input2"  type="password" >
   <span @click="showisSign" class="tosign">立即注册</span>
   <span @click="showisCount" class="tologin">账号登录</span>
   <button @click="login" class="log">登录</button>
   <button :disabled="isdisabled" @click="getCode" class="identify">{{ second===totalSecond? '立即获取': second+'秒后重新发送' }}</button>
  </div>
  </template>

<script>
import { codeLogin, getMsgCode } from '@/api/login'
export default {
  name: 'LogsignIndex',
  props: ['isSign'],
  data () {
    return {
      totalSecond: 60, // 总秒数
      second: 60,
      timer: null, // 定时器的id
      mobile: '', // 手机号
      smsCode: ''// 短信验证码
    }
  },
  computed: {
    isdisabled () {
      return this.second !== this.totalSecond
    }
  },
  methods: {
    showisSign () {
      this.$emit('showisSign', 'Sign')
    },
    showisCount () {
      this.$emit('showisCount', 'Count')
    },
    validFn () {
      if (!/^1[3-9]\d{9}$/.test(this.mobile)) {
        this.$message({
          message: '请输入正确的手机号！',
          type: 'error'
        })
        return false
      }
      return true
    },
    // 获取短信验证码，开启倒计时
    async getCode () {
      // 当目前没有定时器开着，且总时间与second一致的时候，才可以开始倒计时
      if (!this.validFn()) {
        // 没通过校验就别往下运行了
        return
      }
      const res1 = await getMsgCode(this.mobile)
      console.log(res1)
      this.$message({
        message: '短信发送成功！',
        type: 'success'
      })
      if (!this.timer && this.second === this.totalSecond) {
        this.timer = setInterval(() => {
          this.second--
          if (this.second <= 0) {
            clearInterval(this.timer)
            this.timer = null
            this.second = this.totalSecond
          }
        }, 1000)
      }
    },
    // 登录
    async login () {
      if (!this.validFn()) {
        return
      }
      if (!/^\d{6}$/.test(this.smsCode)) {
        this.$message({
          message: '请输入正确的短信验证码！',
          type: 'error'
        })
        return
      }
      const res2 = await codeLogin(this.mobile, this.smsCode)
      console.log(res2)
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
    .identify{
      position: absolute;
      margin-top: 75px;
      margin-left: -105px;
      width: 100px;
      height: 35px;
      background-color: #C5C1F1;
      border-radius: 30px;
      cursor: pointer;
    }
  </style>
