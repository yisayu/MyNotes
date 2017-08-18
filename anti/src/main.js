// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import jquery from 'jquery'
import '../static/bootstrap/css/bootstrap.min.css'
import '../static/bootstrap/js/bootstrap.min.js'
import '../static/layui-master/src/lay/all.js'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-default/index.css'
import './assets/css/main.scss'
import './assets/css/animation.scss'
import store from '../store'
// import '../static/js/antiAjax.js'
import {errorMsg} from './assets/js/errormsg.js'
//设置服务器地址
proxy.env.setServerContextUrl("http://192.168.1.112:8080/anti-base/")
Vue.config.productionTip = false
Vue.use(ElementUI)
/* eslint-disable no-new */
var layer = layui.layer
new Vue({
  el: '#app',
  router,
  store,
  template: '<App/>',
  components: { App }
})
