import request from '@/utils/request'
// 收藏歌曲后展示的歌曲信息，收藏接口 具体：点击收藏按钮后，调用Collector-controller的listUserCollectors接口获取用户自己的所有收藏夹，然后选择一个收藏夹，点击确定后调用此接口
export const collectSong = () => {
  return request.post('https://mock.apifox.com/m1/3545633-0-default/song/collect')
}
// 点赞歌曲后展示的信息，即点赞接口
export const thumbSong = () => {
  return request.post('https://mock.apifox.com/m1/3545633-0-default/song/like')
}
// 后台管理员展示所有歌曲
export const listAllSong = () => {
  return request.get('https://mock.apifox.com/m1/3545633-0-default/song/listAllSongs')
}
// 前台的推荐歌曲处，展示的几首歌曲
export const listTopMusic = (pageNum, pageSize) => {
  return request.get('http://118.178.237.22:8890/song/listTops',
    {
      params: {
        pageNum: 1,
        pageSize: 6
      }
    })
}
// 后台展示用户所上传管理的音乐
export const listUserSong = () => {
  return request.get('https://mock.apifox.com/m1/3545633-0-default/song/listUserSongs')
}
// 点击播放歌曲，可获取歌曲信息
export const PlaySong = () => {
  return request.post('https://mock.apifox.com/m1/3545633-0-default/song/play')
}
// 前台排行榜的几首歌曲
export const rankList = () => {
  return request.get('http://118.178.237.22:8890/song/rankList')
}
// 前台搜索歌名和歌曲后的展示的几首歌曲
export const searchSong = (content, pageNum, pageSize) => {
  return request.get('http://118.178.237.22:8890/song/searchSong',
    {
      params: {
        content,
        pageNum,
        pageSize
      }
    })
}
// 后台用户修改歌曲，（想了一下，管理员更新也可用这个接口，发请求时，有这几种情况）status默认为2 用户正常修改歌曲信息 用户提交歌曲审核（status=1） 管理员审核通过（status=0）不通过（status=2
export const updateSongByUser = () => {
  return request.put('https://mock.apifox.com/m1/3545633-0-default/song/update')
}
// 上传歌曲
export const uploadSong = () => {
  return request.post('https://mock.apifox.com/m1/3545633-0-default/song/upload')
}
// 后台歌曲信息更新前，可用于数据回显
export const getSongDetail = (id) => {
  return request.get(`https://mock.apifox.com/m1/3545633-0-default/song/${id}`)
}
// 删除歌曲
export const removeSong = (id) => {
  return request.delete(`https://mock.apifox.com/m1/3545633-0-default/song/${id}`)
}
