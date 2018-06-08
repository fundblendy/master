import Vue from 'vue'
import Router from 'vue-router'
import home from '@/components/home'
import deck from '@/components/deck'
import battle from '@/components/battle'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: home
    },
    {
      path: '/deck',
      name: 'deck',
      component: deck
    },
    {
      path: '/battle',
      name: 'battle',
      component: battle
    }
  ]
})
