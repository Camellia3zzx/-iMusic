import request from '@/utils/request'
// 后台展示所有角色
export const listRoles = () => {
  return request.get('https://mock.apifox.com/m1/3545633-0-default/role')
}
// 后台更新角色信息（包括菜单）
export const updateRole = () => {
  return request.put('https://mock.apifox.com/m1/3545633-0-default/role')
}

// 后台新增角色
export const addRole = () => {
  return request.post('https://mock.apifox.com/m1/3545633-0-default/role/add')
}

// 后台删除角色
export const removeRole = (id) => {
  return request.delete(`https://mock.apifox.com/m1/3545633-0-default/role/${id}`)
}
