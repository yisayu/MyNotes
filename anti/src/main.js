// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import jquery from 'jquery'
import '../static/bootstrap/css/bootstrap.min.css'
import '../static/bootstrap/js/bootstrap.min.js'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-default/index.css'
import './assets/css/main.scss'
import './assets/css/animation.scss'
//设置服务器地址
proxy.env.setServerContextUrl("http://localhost:8080/anti-base/")
Vue.config.productionTip = false
Vue.use(ElementUI)
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: { App }
})
