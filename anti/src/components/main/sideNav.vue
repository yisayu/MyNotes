<template>
      <el-menu :default-active=" this.$store.state.list[this.$store.state.num].children[0].children[0].index" class="el-menu-vertical-demo" @open="handleOpen" @close="handleClose" theme="dark" :router=true>
        <el-submenu v-for="items in this.$store.state.list[this.$store.state.num].children" :index="items.index"  :key="items.index" >
          <template slot="title" >{{items.title}}</template>
          <el-menu-item v-for="item in items.children" :index="item.index" :key="item.index">{{item.title}}</el-menu-item>
        </el-submenu>
      </el-menu>
</template>
<script>
  export default {
    name:'sideNav',
    data() {
        return {

        }
    },
    methods: {
      handleOpen(key, keyPath) {
        console.log(key, keyPath);
      },
      handleClose(key, keyPath) {
        console.log(key, keyPath);
      },

    }
  }
</script>

<style scoped>
</style>
