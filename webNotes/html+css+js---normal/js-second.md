### 函数声明
	* function fun（） {} 
	* var fun = function() {};	直接量声明
	* var fun = new Function(""); 关键字声明

###面试题
* var a = b = c; 连等只有第一个是局部变量  bc为全局变量 集体申明var a = 10,b = 10;
* 在一个方法中 声明的变量 不管在什么位置都会变量声明提升 将var num；提升到方法第一行 但是赋值不提升

###函数参数
* 参数少 后面位为undefind  任何数加上undefind 为NaN
* 参数过多 后面的参数无用 
* arguments储存传进来的实参 相当于实参的数组 fun.length形参长度 argumets.length为实参个数

###获得焦点 失去焦点 事件
* onfocus 获得焦点
* onblur 失去焦点

###this 表示调用者 表示调用点击时间的对象
* 标签属性
	* className 类名
	0* innerHTML 表示标签包裹的文字
* focus（）； 表单自动获得焦点 光标停留位置
* select（）； 选择表单就是输入框中内容
* getElementByTagName（） 获取某类标签 div li span  得到一个数组

###数组常用方法
*  push() 在数组后面添加一个或者多个元素 并返回新的长度
*  concat（） 将数组与其他数组 或者几个元素相连 返回一个新的数组
*  