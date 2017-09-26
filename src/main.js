// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'

//element-ui
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-default/index.css'
Vue.use(ElementUI)
//element-ui


//font-awesome
import 'font-awesome/css/font-awesome.css';

//font-awesome

//vue-resource
import VueResource from 'vue-resource';
Vue.use(VueResource);
Vue.http.options.root = 'http://localhost/wklejpizde-backend/web/app_dev.php/paste/';
//vue-resource

//vuex
import Vuex from 'vuex';
Vue.use(Vuex);
//vuex

Vue.config.productionTip = false;

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: {App}
});
