# Angular.js

### angular基本应用

```
<html ng-app> //确定angular作用域
<head>
  ...
  <script src="lib/angular/angular.js"></script>
  <script src="js/controllers.js"></script>
</head>
<input ng-model="hahha"></input>//输入框value的绑定
<body ng-controller="PhoneListCtrl"//控制器方法名 放在父元素上>

  <ul>
    <li ng-repeat="phone in phones//模型"//迭代渲染>
      {{phone.name}}
    <p>{{phone.snippet}}</p>
    </li>
  </ul>
</body>
</html>
```

### angular控制器

```
function PhoneListCtrl($scope//作用域) {
  $scope.phones//创建数据模型 = [
    {"name": "Nexus S",
     "snippet": "Fast just got faster with Nexus S."},
    {"name": "Motorola XOOM™ with Wi-Fi",
     "snippet": "The Next, Next Generation tablet."},
    {"name": "MOTOROLA XOOM™",
     "snippet": "The Next, Next Generation tablet."}
  ];
}
```
### angular扩展HTML

* `ng-app="myapp"` 定义一个angular应用程序
* `ng-model="name"` 绑定输入框里的值
* `ng-bind="name"`将程序变量加到innerHTML中 与`{{name}}`效果相同 
* `ng-init="name="yisayu" 创建变量`
* `ng-controller="myctrl"`
* `ng-show = "当值为true时显示//myform.myadress.$error.email可以判断是否为邮箱"`   
* 应用
  * `var app = angular.module('myApp',[])`; 应用模板
  * `app.controller('myctrl',function($scope) {  $scope.name = 'haha'});`应用控制器

### 自定义指令

* 创建时用驼峰命名法 使用时用-分开


* ~~~
  <runoob-directive></runoob-directive>
  <script>
  var app = angular.module("myApp", []);
  app.directive("runoobDirective", function() {
      return {
      	restrict："A",
          template : "<h1>自定义指令!</h1>"
      };
  });
  </script>
  ~~~

* 访问方式 用 restrict ：“EA” 来设置  默认值为EA

  * E 作为元素名使用
  * A 作为属性使用
  * C 作为类名使用
  * M 作为注释使用



#### ng-model

* 标签内必须加 `required`
* 应用状态
  * ` {{myForm.myAddress.$valid}}` Valid: true (如果输入的值是合法的则为 true)。 通过数据框的 type来判断
  * `{{myForm.myAddress.$dirty}}` Dirty: false (如果值改变则为 true)。
  * ` {{myForm.myAddress.$touched}}` Touched: false (如果通过触屏点击则为 true)。
* ng-model不同状态添加移除的类
  * `ng-empty` 
  * `ng-not-empty` 
  * `ng-touched` 
  * `ng-untouched` 
  * `ng-valid`  
  * `ng-invalid `
  * `ng-dirty`
  * `ng-pending`
  * `ng-pristine`

#### 作用域$scope

* 自定义创建时用驼峰命名，使用是时单词用-分开


* ```
  var app = angular.module('myApp', []);  //常规用法

  app.controller('myCtrl', function($scope, $rootScope) {
      $scope.names = ["Emil", "Tobias", "Linus"];
      $rootScope.lastname = "Refsnes";
  });
  ```


* `、`


创

* `$scope.name = 'haha'` 添加属性
* `$scope.say = function() {}` 添加方法
* `$rootscope.haha = 'huhu'`  根作用域可以用在任何控制器上



#### 控制器controller

* ```
  angular.module('myapp',[]).controller('app',function($scope) {$scope.items = [1,2,3,4,5]});  //控制器的常规使用
  ```

#### 过滤器

* `{{name | uppercase}}`  将所有字符转为大写

* `{{name | lowercase}}`将所有字符转为小写

* `{{price | currency}}` 将字符转换成货币格式

* `ng-repeat = " person in people |orderBy:'age'"` 排列数组

* 通过`ng-model = "test"` 来过滤 数组内容 用 `|filter:test`

  * ```
    <input type="text" ng-model="test">
    <ul>
      <li ng-repeat="x in names | filter:test | orderBy:'country'">
        {{ (x.name | uppercase) + ', ' + x.country }}
      </li>
    </ul>
    ```



#### 自定义过滤器

```
<div ng-app="myApp" ng-controller="myCtrl">


姓名: {{ msg | reverse }}

</div>

<script>
var app = angular.module('myApp', []);
app.controller('myCtrl', function($scope) {
    $scope.msg = "Runoob";
});
app.filter('reverse', function() { //可以注入依赖
    return function(text) {
        return text.split("").reverse().join("");
    }
});
</script>
```





***



### AngularJs服务service

* 使用方法在controller回调函数参数中引入

  * `angular.module("myapp",[]).controller('ctrl',function($scope,$location) {});`

* 常用服务

  * `$location.absurl;` 可以返回当前的地址

  * ```
    - $http.get("welcome.htm").then(function (response) {
              $scope.myWelcome = response.data;
        });   向服务器发送请求  应用返回的数据
    ```

  * ```
    $timeout(function () {
            $scope.myHeader = "How are you today?";
        }, 2000);  //对应setTimeout
    ```

  * ```
    app.service('hexafy', function() {  //自定义服务
        this.myFunc = function (x) {
            return x.toString(16);
        }
    });

    app.controller('myCtrl', function($scope, hexafy) { //使用自定义符
        $scope.hex = hexafy.myFunc(255);
    });
    ```

  * 在自定义过滤器中使用自定义服务

    * ```
      app.filter('myFormat',['hexafy', function(hexafy) {
          return function(x) {
              return hexafy.myFunc(x);
          };
      }]);
      ```

#### $http服务

* 常规用法

  * ```
    $http({
    	method: 'GET',
    	url: '/someUrl'
    }).then(function successCallback(response) {
    		// 请求成功执行代码
    	}, function errorCallback(response) {
    		// 请求失败执行代码
    });  
    ```

* get/post简写方法

  * ```
    $http.get('/someUrl', config).then(successCallback, errorCallback);
    $http.post('/someUrl', data, config).then(successCallback, errorCallback);
    ```

* $http其他方法

  * `$http.get` 
  * `$http.head` 
  * `http.post` 
  * `$http.put` 
  * `$http.delete` 
  * `$http.jsonp`  
  * `$http.patch` 

#### angular创建select   ng-option

* 常规用法  遍历一个数组

  * ```
     <select ng-init="selectedName = names[0]" ng-model="selectedName" ng-options="x.site for x in names">
     </select> //selectedName1是遍历出来的x对象  显示的的值是x.site
     ```
    ```

    ```

* 遍历一个对象 既json

  * ```
    <select ng-model="selectedSite" ng-options="x for (x, y) in sites">
    </select>  //显示的是key的值  选中的是value的值
    ```



#### angular创建表格 

* 常规用法

  * ```
    <table>
      <tr ng-repeat="x in names">
        <td>{{ x.Name }}</td>
        <td>{{ x.Country }}</td>
      </tr>
    </table>
    ```

* 表格过滤

  * ```
    <tr ng-repeat="x in names | orderBy : 'Country'">
        <td>{{ x.Name }}</td>
        <td>{{ x.Country }}</td>
      </tr>
    ```

  * ```
    <tr ng-repeat="x in names">
        <td>{{ x.Name }}</td>
        <td>{{ x.Country | uppercase }}</td>
      </tr>
    ```

* 添加全局变量

  *  `<td>{{ $index + 1 }}</td>` $index 显示序号

  * `$odd`奇数为true    `$even`偶数为true 

    * ```
      <td ng-if="$odd" style="background-color:#f1f1f1">{{ x.Name }}</td>
      <td ng-if="$even">{{ x.Name }}</td>
      <td ng-if="$odd" style="background-color:#f1f1f1">{{ x.Country }}</td>
      <td ng-if="$even">{{ x.Country }}</td>
      ```

