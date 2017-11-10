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
import 'less-loader';
import 'less';
import './font-awesome.less';
//font-awesome

//vue-resource
import VueResource from 'vue-resource';
Vue.use(VueResource);
Vue.http.options.root = 'http://localhost/wklejpizde-backend/web/app_dev.php/';
//vue-resource

//vuex
import {store} from './store';
//vuex

Vue.config.productionTip = false;

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  template: '<App/>',
  components: {App}
});
