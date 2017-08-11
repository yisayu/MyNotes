<template>
  <div class="content">
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
    height: 200px;
    background-color: green;
  }
</style>
