<template>
    <div class="form1">
    <span class="word">注册</span><br>
   <input v-model="phonenumber" maxlength="11" placeholder=" 手机号" class="input1"  type="text" >
   <input v-model="smsCode" placeholder=" 验证码" class="input2"  type="text" >
   <input  v-model="userName" placeholder=" 账号" class="input3"  type="text" >
   <input v-model="password" placeholder=" 密码" class="input4"  type="password" >
  <button :disabled="isdisabled" @click="getCode" class="identify">{{ second===totalSecond? '立即获取': second+'秒后重新发送' }}</button>
  <span @click="isCount" class="login">已有账号？点我去登陆~</span>
   <button @click="sign" class="log">注册</button>
  </div>
  </template>

<script>
import { getMsgCode } from '@/api/login'
import { register } from '@/api/user'

export default {
  name: 'Logsign2Index',
  props: ['isSign'],
  data () {
    return {
      totalSecond: 60, // 总秒数
      second: 60,
      timer: null, // 定时器的id
      phonenumber: '', // 手机号
      smsCode: '', // 短信验证码
      password: '', // 密码
      userName: '' // 用户名
    }
  },
  computed: {
    isdisabled () {
      return this.second !== this.totalSecond
    }
  },
  methods: {
    isCount () {
      this.$emit('isCount', 'Count')
    },
    // 校验手机号和图形验证码是否合法
    validFn () {
      if (!/^1[3-9]\d{9}$/.test(this.phonenumber)) {
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
      const message3 = await getMsgCode(this.phonenumber)
      console.log(message3)
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
    // 注册
    async sign () {
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
      const res4 = await register(this.phonenumber, this.smsCode, this.userName, this.password)
      console.log(res4)
      this.$message({
        message: '注册成功！',
        type: 'success'
      })
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

  .input3{
    width: 383px;
    height: 60px;
    border-radius: 30px;
    font-size: 30px;
    margin-top: 60px;
    padding-left: 20px;
  }
  .input3:hover{
      border:2px  solid  blue;
      box-shadow: 1px 1px 4px  blue ;
      transform:translateX(5px)   translateY(5px);
      transition: all 1s ;
    }
    .input4{
    width: 383px;
    height: 60px;
    border-radius: 30px;
    font-size: 30px;
    margin-top: 60px;
    padding-left: 20px;
  }
  .input4:hover{
      border:2px  solid  blue;
      box-shadow: 1px 1px 4px  blue ;
      transform:translateX(5px)   translateY(5px);
      transition: all 1s ;
    }
    .form1{
      position: relative;
      width: 700px;
      height: 800px;
      text-align: center;

    }
.login{
  position: absolute;
  margin-left: -370px;
  margin-top: 150px;
  cursor: pointer;
}
.login:hover{
  color: purple
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
      margin-top: -165px;
      margin-left: -100px;
      width: 84px;
      height: 40px;
      background-color: #C5C1F1;
      border-radius: 30px;
      cursor: pointer;
    }
  </style>
