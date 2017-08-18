import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state:{
    num:0,
    compInfo:{
      cCode:'',
      cName:'哇哈哈',
      cConent:'',
      cImgID:''
    },
    userInfo:{
      name:'',
      permission:{},
      roles:[],
    },
    list: [
      {
        index:'1',
        permission:'sysM',
        title:'系统管理',
        order:0,
        children: [
          {
            index:'1-1',
            permission:'userM',
            title:'用户管理',
            children: [
              {
                index:'1-1-1',
                permission:'userInfoM',
                title:'用户信息管理'
              },
              {
                index:'1-1-2',
                permission:'pwdChg',
                title:'角色信息管理'
              },
              {
                index:'/home/sysmag/usermag/mod_password',
                permission:'roleM',
                title:'密码修改'
              }
            ]
          }
        ]
      },
      {
        index:'2',
        permission:'wechatM',
        title:'微信业务',
        order:1,
        children: [
          {
            index:'2-1',
            permission:'redpackM',
            title:'微信红包管理',
            children: [
              {
                index:'/home/wechat/redpct/redpctset',
                permission:'redpackRecQ',
                title:'红包内容设置'
              },
              {
                index:'/home/wechat/redpct/redpctsearch',
                permission:'redpackSet',
                title:'红包发送记录查询'
              }
            ]
          }
        ]
      },
      {
        title: '产品防伪',
        permission:'pSec',
        order:2,
        index:'3',
        children: [
          {
            index:'3-1',
            permission:'secM',
            title: '防伪管理',
            children: [
              {
                index:'3-1-1',
                permission:'comSecQ',
                title: '企业防伪查询测试',
              },
              {
                index:'3-1-2',
                premission:'secRecQ',
                title: '防伪查询记录查询'
              },
              {
                index:'3-1-3',
                premission:'repeatRecQ',
                title: '重复查询记录查询'
              }
            ]
          }
        ]
      }
    ],
  },
  mutations: {
    chooseNum(state,order) {
      state.num = order
    },
    setUserInfo(state,info) {
      state.userInfo = info
    }
  },
  token: {}
})
