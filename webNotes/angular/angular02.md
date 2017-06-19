# angular

* `ng-disabled='true'` 绑定donm元素的disabled属性   为true的时候按钮不可用
* `ng-show=''`显示隐藏元素
* `ng-hide=''`隐藏显示元素

### angular 事件

* `ng-click=''`绑定点击事件

### angular 表单验证

* `<span ng-show="myForm.email.$error.required">邮箱是必须的。</span>`   保证内容为空的时候显示

* `<span ng-show="myForm.email.$error.email">非法的邮箱地址。</span>`不符合邮箱邮箱格式的时候显示

* ```
   <input type="submit"
    ng-disabled="myForm.user.$dirty && myForm.user.$invalid ||
    myForm.email.$dirty && myForm.email.$invalid">
  ```

  * `$dirty`有填写记录
  * `$valild`字段内容合法
  * `$invaild`字段人内容
  * `$pristine`  没有填写记录

### angular常用全局api

* `angular.lowercase(str);`  转换成小写
* `angular.uppercase(str) ;`  转换成大写
* `angular.isString(str);`  判断是否为字符
* `angular.isNUmber();` 判断是都为数字

### angular包含

* `<div ng-include="haha.html"> </div>`  直接在html中包含html

* 解决跨域问题

  * ```
    <body ng-app="myApp">
     
    <div ng-include="'http://c.runoob.com/runoobtest/angular_include.php'"></div>
     
    <script>
    var app = angular.module('myApp', [])
    app.config(function($sceDelegateProvider) {
        $sceDelegateProvider.resourceUrlWhitelist([
            'http://c.runoob.com/runoobtest/**'
        ]);
    });
    </script>

    </body> //设置域名访问白名单
    ```

  * 服务端

    * ```
      <?php
      // 允许所有域名可以访问
      header('Access-Control-Allow-Origin:*');
       
      echo '<b style="color:red">我是跨域的内容</b>';
      ?>
      ```



### angular动画

* 应用angular动画

  * 引入angular的动画库 `<script src="http://cdn.static.runoob.com/libs/angular.js/1.4.6/angular-animate.min.js"></script>`   

  * 应用中使用动画模型`<body ng-app="ngAnimate">` 

  * 简单使用

    * ```
      .ng-hide {
       transition: all linear 0.5s;
        height: 0;
        width: 0;
        background-color: transparent;
        top:-200px;
        left: 200px;
        
      }
      <body ng-app="ngAnimate">
      <h1>隐藏 DIV: <input type="checkbox" ng-model="myCheck"></h1>
      <div ng-hide="myCheck"></div>
      ```

  * 可以将ngAnimate添加到模型中

    * ```
      <h1>隐藏 DIV: <input type="checkbox" ng-model="myCheck"></h1>

      <div ng-hide="myCheck"></div>

      <script>
      var app = angular.module('myApp', ['ngAnimate']);
      </script>
      ```

* angular添加移除class指令

  * `ng-show`
  * `ng-hide`
  * `ng-class`
  * `ng-view`
  * `ng-include`
  * `ng-repeat`
  * `ng-if`
  * `ng-switch`
    * `ng-show`和`ng-hide`分别添加或移除ng-hide类
    * 其他指令 添加`ng-enter`类或移除`ng-leave` 类 

### Angular路由

* 实现多视图的单页web'应用

  * 导入路由的js文件`<script src="http://apps.bdimg.com/libs/angular-route/1.3.13/angular-route.js"></script>`

  * `<div ng-view></div>` 设置ng-view指令 只要路由变化内容就会变化

  * 配置 $routeProvider用来定义路由规则,在不同的路由下分别显示什么

  * 路径分别写成` <li><a href="#/computers">电脑</a></li>` 从#号后面开始判断

    * ```
      module.config(['$routeProvider', function($routeProvider){
          $routeProvider
              .when('/',{template:'这是首页页面'})
              .when('/computers',{template:'这是电脑分类页面'})
              .when('/printers',{template:'这是打印机页面'})
              .otherwise({redirectTo:'/'});
      }]);
      ```

  * 设置模板对象

    * template: 在ng-view中插入简单的html内容
    * templateUrl:在ng-view中插入html模板的路径
    * controller: function、string或数组类型，在当前模板上执行的controller函数，生成新的scope。
    * controllerAs: string类型，为controller指定别名
    * redirectTo: 重新指定url
    * resolve:指定当前controller所依赖的其他模块。

# 依赖注入看不懂

!!!!!!

