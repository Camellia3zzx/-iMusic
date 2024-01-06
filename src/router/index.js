import Vue from 'vue'
import VueRouter from 'vue-router'
import Homepage from '@/views/homepage'
import Login from '@/views/login'
import Playback from '@/views/playback'
import List from '@/views/playback/list'
import Collect from '@/views/playback/collect'
import Songsheet from '@/views/playback/songsheet'
import Online from '@/views/playback/online'
import Upload from '@/views/playback/upload'
import Download from '@/views/playback/download'
import Searchlist from '@/views/playback/searchlist'
import store from '@/store'
import Onlinemu from '@/views/playback/onlinemu'
import User from '@/views/playback/user'
import Comment from '@/views/playback/comment'
Vue.use(VueRouter)

const router = new VueRouter({
  routes: [
    {
      path: '/',
      component: Homepage

    },
    {
      path: '/login',
      component: Login
    },
    // 主界面的二级路由
    {
      path: '/playback',
      component: Playback,
      redirect: '/playback/onlinemu',
      children: [
        {
          path: '/playback/list',
          component: List
        },
        {
          path: '/playback/collect',
          component: Collect
        },
        {
          path: '/playback/songsheet',
          component: Songsheet
        },
        {
          path: '/playback/online',
          component: Online
        },
        {
          path: '/playback/upload',
          component: Upload
        },
        {
          path: '/playback/download',
          component: Download
        },

        {
          path: '/playback/onlinemu',
          component: Onlinemu
        },

        {
          path: '/playback/user',
          component: User
        },
        {
          path: '/playback/searchlist',
          component: Searchlist,
          name: 'searchlist'
        },
        {
          path: '/playback/commment',
          component: Comment
        }

      ]
    }

  ]
})
// 全局前置导航守卫
// to:到哪去的完整路由信息对象（路由，参数）
// from:从哪里来的完整路由信息对象（路由，参数）
// next():是否放行
// （1）next（）直接放行
// （2）next(路径)拦截但next里面配置的路径
// 定义一个数组，专门用户存放所有需要权限访问的页面
const authUrl = ['/playback/songsheet', '/playback/collect', '/playback/upload', '/playback/download']
router.beforeEach((to, from, next) => {
  const token = store.getters.token
  //   // 看to.path是否再authUrls中出现过
  if (!authUrl.includes(to.path)) {
    next()
    return
  }
  //   // 是权限页面，需要判断token

  if (token) {
    next()
  } else {
    next('/login')
    alert('请先登录！')
  }
})

export default router
