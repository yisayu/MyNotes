<template>
  <div id="genuine" class="container-fluid">
    <div class="row">
      <div class="col-xs-2 col-md-4"></div>
      <div class="col-xs-8  col-md-4 text-center">
        <div><i class="glyphicon el-icon-circle-check "></i></div>
        <div class="warn"><p>杭州网加公司提醒您 : 您的产品是{{compInfo.cName}}的正品,请放心使用!</p></div>
        <div class="title"><div ><span class="el-icon-arrow-down
"></span><span>公司介绍</span></div><img src="static/images/warnbg.jpg" alt=""><div><p>{{compInfo.cContent}}</p></div></div>
      </div>
    </div>
  </div>
</template>
<script>
  export default {
      data() {
        return {

        }
      },
      computed: {
        compInfo(){
          return this.$store.state.compInfo
        }
      },
      created() {

      }
  }
</script>
<style scoped>
  body,html{
    height: 100%;
  }
  #genuine {
    position: relative;
    background-color: #13CE66;
    min-height: 100%;
  }

  #genuine .col-xs-8{
    margin-top: 150px;
  }
  #genuine i {
    font-size:80px;
    color: white;
  }
  #genuine .warn {
    margin-top:40px;
    font: 500 22px 'Microsoft yahei';
    color: white;
    border:2px solid white;
    border-radius: 5px;
    padding: 5px;
  }
  @media only screen and (min-width: 768px) {
    #genuine .warn {
      font-size:40px;
    }
    #genuine i {
      font-size:200px;
    }
    #genuine img {
      width: 100%;
    }
    .title {
      position: absolute;
      top:0;
    }
  }
</style>
