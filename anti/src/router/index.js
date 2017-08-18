import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/views/Home'
import Login from '@/views/Login'
import Fake from '@/views/fake'
import Genuine from '@/views/genuine'
import redPctSearch from '@/components/modules/wechat/red_pct_search'
import redPctSet from '@/components/modules/wechat/red_pct_set'
import modPassword from '@/components/modules/sysmag/mod_password'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/home',
      name: 'Home',
      beforeEnter: (to,from,next)=> {
        if('123') {
           next();
        }else {
          next('/login');
        }
      },
      component: Home,
      children: [
        {
          path:'/home/wechat/redpct/redpctsearch',
          component: redPctSearch
        },
        {
          path:'/home/wechat/redpct/redpctset',
          component: redPctSet
        },
        {
          path:'/home/sysmag/usermag/mod_password',
          component: modPassword
        }
      ]
    },
    {
      path: '/login',
      name: 'Login',
      component: Login
    },
    {
      path:'/fake',
      name: 'fake',
      component: Fake
    },
    {
      path:'/genuine',
      name: 'genuine',
      component: Genuine
    }
  ]
})
