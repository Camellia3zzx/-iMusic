// 创建axios实例，将来对创建出来的实例，进行自定义配置

import axios from 'axios'

const instance = axios.create({
  baseURL: '', // 找智凯要基础接口
  tiemout: 5000
})

// 自定义配置-请求-响应-拦截器
// 添加请求拦截器
instance.interceptors.request.use(function (config) {
  // 在发送请求之前做些什么
  // 开启loading,禁止背景点击（节流处理）
  return config
}, function (error) {
  // 对请求错误做些什么
  return Promise.reject(error)
})

// 添加响应拦截器
instance.interceptors.response.use(function (response) {
  // 2xx 范围内的状态码都会触发该函数。
  // 对响应数据做点什么(axios默认会有多包装一层data,用拦截器处理以下)
  return response.data
}, function (error) {
  // 超出 2xx 范围的状态码都会触发该函数。
  // 对响应错误做点什么
  return Promise.reject(error)
})

export default instance
