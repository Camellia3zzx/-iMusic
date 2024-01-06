import request from '@/utils/request'
// 后台根据用户角色展示的路由
export const getRouter = () => {
  return request.get('https://mock.apifox.com/m1/3545633-0-default/menu/getRouter')
}
// 展示所有的可选菜单（如用户管理，角色管理之类）
export const getlistAllMenu = () => {
  return request.get('https://mock.apifox.com/m1/3545633-0-default/menu/list')
}
