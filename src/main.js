import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import '@/styles/commom.less'
import './utils/element-ui'
import '@/assets/fonts/font.css'
import VScaleScreen from 'v-scale-screen'
import 'swiper/css/swiper.css'

Vue.config.productionTip = false
Vue.use(VScaleScreen)

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
