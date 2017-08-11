<template>
  <div class="top-nav">
    <div><img src="static/images/2.png" alt=""></div> <div><img src="static/images/2.png" alt=""></div> <div><img src="static/images/2.png" alt=""></div> <div><img src="static/images/2.png" alt=""></div>
    <div v-for="itemtop in system "><img :src="itemtop.img" alt=""></div>
  </div>
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
            title:'用户信息管理'
            },
            {
              title:'角色信息管理'
            },
            {
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
    name: 'topNav',
    data() {
      return {
        system: system
      }
    }
  }
</script>

<style scoped>
  .top-nav {
    display: flex;
    height: 200px;
    overflow: hidden;
  }
  .top-nav>div {

    align-content: flex-start;
    overflow: hidden;
    height: 200px;
    width: 360px;
    transition:all 1s;
  }
.top-nav>div:hover {
  width: 700px;
}
  .top-nav>div img {
    height: 200px;
  }
</style>
