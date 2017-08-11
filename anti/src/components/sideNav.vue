<template>
      <el-menu default-active="2" class="el-menu-vertical-demo" @open="handleOpen" @close="handleClose" theme="dark">
        <el-submenu v-for="items in list" index="1">
          <template slot="title" >{{items.title}}</template>
          <el-menu-item v-for="item in items.children" :index="item.index">{{item.title}}</el-menu-item>
        </el-submenu>
      </el-menu>
</template>
<script>
  const system = [
    {
      title:'系统管理',
      img: 'static/images/1.png',
      children: [
        {
          title:'用户管理',
          children: [
            {
              index:'1-1-1',
              title:'用户信息管理'
            },
            {
              index:'1-1-2',
              title:'角色信息管理'
            },
            {
              index:'1-1-3',
              title:'密码修改'
            }
          ]
        }
      ]
    },
    {
      title:'微信业务',
      img: 'static/images/2.png',
      children: [
        {
          title:'微信红包管理',
          children: [
            {
              title:'红包内容设置'
            },
            {
              title:'红包发送记录查询'
            }
          ]
        }
      ]
    },
    {
      title: '产品防伪',
      img: 'static/images/3.png',
      children: [
        {
          title: '防伪管理',
          children: [
            {
              title: '企业防伪查询测试',
            },
            {
              title: '防伪查询记录查询'
            },
            {
              title: '重复查询记录查询'
            },
            {
              title: '防伪查询记录统计'
            }
          ]
        }
      ]
    }
  ]
  export default {
    name:'sideNav',
    data() {
        return {
          index:0,
          list:system[0].children,
        }
    },
    methods: {
      handleOpen(key, keyPath) {
        console.log(key, keyPath);
      },
      handleClose(key, keyPath) {
        console.log(key, keyPath);
      }
    }
  }
</script>

<style scoped>
</style>
