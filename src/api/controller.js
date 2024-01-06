import request from '@/utils/request'
// 收藏歌单后的展示页面
export const collectCollector = (collectorId, value) => {
  return request.post('https://mock.apifox.com/m1/3545633-0-default/collector/collect', {
    collectorId,
    value
  })
}
// 展示用户收藏的收藏歌单
export const getCollected = () => {
  return request.get('https://mock.apifox.com/m1/3545633-0-default/collector/collected')
}
// 打开歌单展示页面
export const getSongs = (id) => {
  return request.get(`https://mock.apifox.com/m1/3545633-0-default/collector/getSongs/${id}`)
}
// 后台管理员展示所有收藏夹
export const listAllCollectors = () => {
  return request.get('https://mock.apifox.com/m1/3545633-0-default/collector/listAllCollectors')
}
// 前台展示收藏量高的收藏歌单
export const listTopCollectors = () => {
  return request.get('https://mock.apifox.com/m1/3545633-0-default/collector/listTops')
}
// 后台展示用户收藏夹
export const listUserCollectors = () => {
  return request.get('https://mock.apifox.com/m1/3545633-0-default/collector/listUserCollectors')
}
// 后台用户，管理员跟新收藏夹
export const updateCollector = () => {
  return request.get('https://mock.apifox.com/m1/3545633-0-default/collector/update')
}
// 新建收藏夹
export const uploadCollector = () => {
  return request.get('https://mock.apifox.com/m1/3545633-0-default/collector/upload')
}
// 后台获取收藏夹详细信息，可用于更新前数据回显
export const getCollectorDetail = (id) => {
  return request.get(`https://mock.apifox.com/m1/3545633-0-default/collector/${id}`)
}
// 删除收藏夹
export const removeCollector = (id) => {
  return request.delete(`https://mock.apifox.com/m1/3545633-0-default/collector/${id}`)
}
