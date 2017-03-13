###三种输出语句
* alert((); 弹出警示框
* console.log()/error()/warn();  控制台输出 
* document.write()文档打印输出 直接显示在页面
###变量必须字母下划线$开头 变量名里面可以有汉字

###变量类型
* 全局变量
	* 声明在最外层的变量 
	* 在函数体内 但是没有声明var的变量是全局变量  隐式全局变量
* 局部变量
	* 函数体内盛买的变量

###事件三要素
* 事件源  对象 谁
* 事件 按下 悬停 划过 做了什么
* 事件处理程序 发生事件  发生了什么 

###隐藏元素
* Display：none； 隐藏不占位置
* Visiblity: hidden；隐藏但还占位置

###鼠标事件
* onclikc 点击
* onmouseover 鼠标经过
* onmouseout 鼠标离开

###入口函数
* window.onload = function() {
*  内部放js
* }
* 等页面加载完毕 在执行js

###给内联元素加绝对定位absolute 相当于display：block；、
* float 和absolute 都会使行内元素变成行内块级元素 
* 绝对定位 与父元素不在同一层级会覆盖父元素中的字  foult只是欺骗父亲自己没有高度宽度 文字会环绕

###继承父亲宽度 用padding不会挤开

###js书写位置
* 行内式 <button onclick="alert('你好')">点击</ button>  引号嵌套是 外双内单
* 内嵌式 
* 外联式 <script src="my.jd" type="text/javascript"> </script> 这不对标记之间不能写任何东西
* 数值前面带0 表示八进制

* parseInt（数值，进制（表示这个数是几进制的））； 可以取整
* parseFloat

###switch语句
* 格式 switch（value） {case value：语句一； break；}
* 可以通过swtich（true） {case 返回boolean的语句：} 的形式来实现复杂的判断