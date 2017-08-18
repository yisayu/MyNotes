<template>
  <div class="content el-card">
    <router-view></router-view>
  </div>
</template>
<script>
  export default {
    name: 'vcontent'
  }
</script>

<style scoped>
  .content {
    padding: 50px;
  }
</style>
