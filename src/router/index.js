import Vue from 'vue';
import Router from 'vue-router';
import Hello from '@/components/Hello';
import Add from '@/components/Add';
import View from '@/components/View';
import Chooseview from '@/components/Chooseview';
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      component: app
    },
    {
      path: '/wklej',
      component: Add,
      name: 'add'
    },
    {
      path: '/zobacz/:pasteId',
      component: View,
      name: 'view'
    },
    {
      path: '/zobacz',
      component: Chooseview,
      name: 'Chooseview'
    }
  ]
})
