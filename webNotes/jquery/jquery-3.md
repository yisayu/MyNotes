###height（）和width（）；
* 可以得到元素的宽高得到的是数字  css（xxx） 后面有px
* 设置的时候也可以直接用数字

###坐标值
* $("div").offset();相对于页面左上角 返回一个包含top left的对象 可以调用top left  传入json可以设置位置 相对于页面  自动变成相对定位
* $("div").position(); 相对于定位的父类的位置  同上  但是不能设置

###scrollTop/Left（） 获取上面或左边隐藏的内容长度 谁有滚动条用谁来判断
* 同样可以设置隐藏大小

###jquery事件
* scroll（）滚动事件
* blur（） 失去焦点
* change（） 改变
* dbclick（） 双击
* error（） 出错事件
* focus（） 获得焦点
* resize（） 改变大小
* submit（） 提交事件
* unload（）  页面关闭事件
* keydown（） 键盘按下事件

###绑定多个事件
* $(("button").bind("click mouseenter",function() {}) 两个参数
* $(“button”).bind({"click":function() {},"mouseenter":function() {}}); 一个参数
* $("button").bind("click",data,function() {data == e.data})
* $("button").one("click",function（） {})； 只触发一次
* $（“ul”）.delegate("li","click",function() {}); 委托父类绑定  要绑定多个时 提高效率
* 最终选项  以后都用这种绑定方式@@@
	* $("div")on("click",function(e) {}) 两个参数 给自己绑定
	*  $("父元素")on（“click”，“子元素”，function（e） {}）； 给子类绑定    
* 方法参数event 代表的是触发事件的鼠标  event.pageY event.pageX  在页面种的位置 

###解绑事件
* unbind（）；
* undelegate（）；
* $("父元素").off（“click”）； 

###触发事件
* .click();
* .trigger("click");触发事件 触发浏览器默认行为
* .triggerHandler("click"); 触发事件 不触发浏览器默认行为

###event对象
* event.data 外部传入的参数
* event.stopPropagation() 阻止事件冒泡
* event.preventDefault() 阻止默认行为 跳转 提交
* event.type 获取事件类型  “click” “mouseenter”
* event.which 获取按下的鼠标按键  左1 中2 右3
* event.keycode 按下的键盘按键
* event.target 在冒泡情况下 可以判断点击的是自己本身还是子元素

###知识点
* letter spacing  字符间距
* word-spacing  单词间距
* .end()  结束前面的链 继续链接最前面的节点上 
* <td rowspan="2">xxx</td> 合并列
* <td colspan="2">xxx</td> 合并列
* border-collapse: collapse; boder-spacing:0; 一起使用 表格边框合并
* $("<div></div>"); 字符串转换成jquery对象 