import request from '@/utils/request'
// 用户管理界面，后台管理员展示所有用户
export const listUser = () => {
  return request.get('https://mock.apifox.com/m1/3545633-0-default/user/list')
}
// 设置用户角色时，展示所有可选角色
export const listRole = () => {
  return request.get('https://mock.apifox.com/m1/3545633-0-default/user/listRole')
}
// 后台展示有角色用户的角色信息
export const listUserRole = (id) => {
  return request.get(`https://mock.apifox.com/m1/3545633-0-default/user/listRole/${id}`)
}
// 注册接口
export const register = (phonenumber, smsCode, userName, password) => {
  return request.post('http://118.178.237.22:8890/user/register',
    {
      phonenumber,
      smsCode,
      userName,
      password
    })
}
// 后台管理员设置用户角色接口
export const setRole = () => {
  return request.post('https://mock.apifox.com/m1/3545633-0-default/user/setRole')
}
// 用户修改自己的信息如邮箱，昵称（除了头像，修改头像到下一个接口）
export const update = () => {
  return request.put('https://mock.apifox.com/m1/3545633-0-default/user/update')
}
// 修改头像
export const uploadAvatar = (img) => {
  return request.post('https://mock.apifox.com/m1/3545633-0-default/user/upload', img)
}
// 后台删除用户
export const deleteUser = (ids) => {
  return request.get(`https://mock.apifox.com/m1/3545633-0-default/user/${ids}`)
}
// 展示用户的详细信息
export const getUserInfo = (id) => {
  return request.get(`http://118.178.237.22:8890/user/${id}`)
}
