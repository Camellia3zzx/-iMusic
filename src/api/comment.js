import request from '@/utils/request'
// 写评论
export const addComment = () => {
  return request.get('https://mock.apifox.com/m1/3545633-0-default/comment/add')
}
// 展示评论
export const listComment = () => {
  return request.get('https://mock.apifox.com/m1/3545633-0-default/comment/list')
}
