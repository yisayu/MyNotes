# bootstrap基本介绍

### 文档结构

~~~javascript
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-COMPATIBLE" content="IE=edge"><!--ie浏览器最新版本兼容 快捷方式 meta：compat-->
    <meta name="viewport<--视口-->" content="width=device-width,initial-scale=1,user-scalable=no"><!--页面宽度与视口宽度相等，缩放比例为1，不允许用户缩放  快捷方式 meta:vp-->
    <title>Title</title>
    <!--[if lt IE 9]> <!--条件注释：如果条件满足就执行下面的html代码 条件不满足就不执行-->
      <script src="https://cdn.bootcss.com/html5shiv/3.7.3/html5shiv.min.js"></script><!--让浏览器可以识别HTML5的标签-->
      <script src="https://cdn.bootcss.com/respond.js/1.4.2/respond.min.js"></script><!--让浏览器可以实现响应式-->
    <![endif]-->
</head>
<body>
 <script src="lib/jQuery/jquery-3.1.1.js"></script>
<script src="lib/bootstrap-3.3.7-dist/js/bootstrap.min.js"></script>
</body>
</html>
~~~

* @media （min-width： 1000px） {} 媒体查询 min-width 要从小到大 

## #