// 该处为所有与登录相关的接口请求
import request from '@/utils/request'
// 请求获取短信验证码
export const getMsgCode = (mobile) => {
  return request.get('http://118.178.237.22:8890/sms', {
    params: {
      mobile
    }
  })
}

// 验证码登录
export const codeLogin = (mobile, smsCode) => {
  return request.post('http://118.178.237.22:8890/login/mobile',
    {
      mobile,
      smsCode
    })
}
// 用户名密码登录
export const codeLogin2 = (userName, password) => {
  return request.post('http://118.178.237.22:8890/login',
    {
      userName,
      password
    })
}
// 退出登录
export const logout = () => {
  return request.get('https://mock.apifox.com/m1/3545633-0-default/user/logout')
}
