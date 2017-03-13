###设置节点属性
* 获取节点属性的值 getAttribute（“属性名”）；
* 设置属性 setAttribute（“属性”，"属性值"）；
* 删除某属性 removeAttribute（"属性");

###输入框 textarea 
* resize：none；防止用户拖动/
* value属性就是texarea中填的值

###日期函数（Date（））
* 可以设置本地日期
*  var date = new Date（）；
*  获取毫秒数 date.getTime();/date.valueOf(); 从1970年1月1日 unix 诞生时间
*  直接获取毫秒数 Date.now() /  +new Data()
*  获取日期时间
		* getDate() 获取日1-31
		* getDay（） 获取星期 0-6 且星期天为第一天
		* getMonth（） 获取月份0-11
		* getFullYear()  获取完整年份
		* getHours() 获取小时0-23
		* getMinutes() 获取分钟 0-59
		* getSeconds（） 获取秒0-59
		* getMilliseconds（） 获取当前 一分钟内的毫秒值
		* getTime（）/valueOf（）/Date.now()/+new Date() 累计毫秒值（从1970年开始）

* 定义自己时间
* var endTime = new Date（"2016/12/25 17：30：00"）；

###定时器 
* setlnterval（fun，间隔时间）；/setInterval("fun()",1000); /setInterval(function() {},1000);

###js的三元运算
* 判断句 ？ 运算式：运算式 不会直接赋值给前面！！！！！