<template>
  <div class="vheader">
    <div class="comp-info"><img src="../../../static/images/logo.png" alt=""><br><span >杭州网加数字身份管理平台</span></div>
    <div class="user"><span class="time">{{time}}</span><span class="username">欢迎杭州网加登录系统</span><button class="btn btn-primary">退出</button></div>
  </div>
</template>
<script>
  export default {
    name: 'vheader',
    data () {
      return {
        time: ''
      }
    },
    filters: {
      formatDate (time) {
        var date = new (date)
      }
    },
    mounted () {
      setInterval(() => { this.time = Date.now()}, 1000)
    },
    methods: {

    }
  }
</script>

<style scoped>
  .vheader {
    position: relative;
    height: 100px;
    border:0px solid;
    margin-bottom:30px;
  }
  .comp-info {
    display: inline-block;
    margin-left: 50px;
    font-size:20px;
    font-weight:900;
  }
  .comp-info {
    margin-top: 10px;
  }
  .vheader img {
    width: 240px;
  }
  .user {
    margin-top: 10px;
    float: right;
  }
</style>
