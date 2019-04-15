import Vue from 'vue'
import Router from 'vue-router'
import Main from '@/components/main'
import Test from '@/test'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Main',
      component: Main
    },
    {
      path: '/test',
      name: 'Test',
      component: Test
    }

  ]
})
