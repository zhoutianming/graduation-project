import Vue from 'vue'
import App from './App'
import router from './router'
import { slider, slideritem } from 'vue-concise-slider'
import VueTouch from 'vue-touch'
import CircleMenu from 'vue-circle-menu'
import store from './store'
import Waterfall from 'vue-waterfall/lib/waterfall'
import WaterfallSlot from 'vue-waterfall/lib/waterfall-slot'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import Avatar from 'vue-avatar-component'

Vue.component('avatar', Avatar)
Vue.component('CircleMenu', CircleMenu)
Vue.component('slider', slider)
Vue.component('slideritem', slideritem)
Vue.component('waterfall', Waterfall)
Vue.component('waterfallSlot', WaterfallSlot)
Vue.use(VueTouch, { name: 'v-touch' })
Vue.use(ElementUI)
Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})
