<template>
  <div class="top-nav">
    <el-menu theme="dark"  class="el-menu-demo" mode="horizontal" @select="handleSelect">
      <el-menu-item   v-for="itemtop in system() "  :index="itemtop.index"  :key="itemtop.index"  @click="choose(itemtop.order)" v-if="this.$store.state.userInfo.body.permissions[itemtop.permission]">{{itemtop.title}}</el-menu-item>
    </el-menu>
  </div>
</template>
<script>
  export default {
    name: 'topNav',
    data() {
      return {
//        system:this.$store.state.list
      }
    },
    methods: {
      system() {
        return this.$store.state.list
      },
      choose(order) {
        this.$store.commit('chooseNum',order)
      },
      handleSelect(key, keyPath) {
        console.log(key, keyPath);
      }
    }
  }
</script>

<style scoped>
  .top-nav>div {
    align-content: flex-start;
    overflow: hidden;
    height: 200px;
    transition:all 1s;
  }
  .top-nav>div img {
    height: 200px;
  }
</style>
