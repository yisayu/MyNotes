<template>
  <div id="wrong" class="container-fluid">
    <div class="row">
      <img src="static/images/warnbg.jpg" class="blur" alt="">
      <div class="col-xs-2 col-md-4"></div>
      <div class="col-xs-8  col-md-4 text-center">
        <div><i class="glyphicon glyphicon-warning-sign "></i></div>
        <div class="warn"><p>杭州网加公司提醒您 : 您的产品码不存在，是假冒伪劣产品！</p></div>
      </div>
    </div>
  </div>
</template>
<script>
  export default {}
</script>

<style scoped>
  body,html{
    height: 100%;
  }
  #wrong {
    position: relative;
    background-color: darkred;
    min-height: 100%;
  }
  #wrong img {
    height: 100%;
    width: 100%;
    position: absolute;
  }
  #wrong .col-xs-8{
    margin-top: 150px;
  }
  #wrong i {
    font-size:80px;
    color: white;
  }
  #wrong .warn {
    margin-top:40px;
    font: 500 22px 'Microsoft yahei';
    color: white;
    border:2px solid white;
    border-radius: 5px;
    padding: 5px;
  }
  @media only screen and (min-width: 768px) {
    #wrong .warn {
      font-size:40px;
    }
    #wrong i {
      font-size:200px;
    }
  }
  @keyframes blur {
    from { -webkit-filter: blur(0px); /* Chrome, Opera */
      -moz-filter: blur(0px);
      -ms-filter: blur(0px);
      filter: blur(0px);}
    to {
      -webkit-filter: blur(5px); /* Chrome, Opera */
      -moz-filter: blur(5px);
      -ms-filter: blur(5px);
      filter: blur(5px);
    }
  }
  .blur {

    animation: blur 3s;
    animation-direction: alternate;
    animation-iteration-count: 100;
  }
</style>
