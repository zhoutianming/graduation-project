import Vue from 'vue'
import Router from 'vue-router'
// import Demo from '@/components/Demo'
import home from '@/components/home'
// import touch from '@/components/touch'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: home
    }
    // {
    //   path: '/demo',
    //   name: 'demo',
    //   component: Demo
    // },
    // {
    //   path: '/tou',
    //   name: 'touch',
    //   component: touch
    // }
  ]
})
