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
      path: '/paste',
      component: Add,
      name: 'add'
    },
    {
      path: '/view/:pasteId',
      component: View,
      name: 'view'
    },
    {
      path: '/view',
      component: Chooseview,
      name: 'Chooseview'
    }
  ]
})
