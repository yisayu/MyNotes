###css3旋转
* 'xxx.style.WebkitTransform = "rotate(60deg)";'旋转60度 （只有chrome 苹果浏览器可以显示）
* MozTransform 火狐浏览器使用

###设置按钮表单不可用
* button.disabled = "disabled"/"true"
* 双标签内的文本 用inneHTML改
* 单标签用value（）改 

###定时器
* setInterval 记时和方法运行不冲突  如果方法运行时间长过记时时间 方法连续执行
	* var timer = setInterval(fun,1000); 定义定时器
	* clearInterval("定时器名称 ")关闭定时器
		* 一般情况要在创建另一个定时器之前 先清除之前的定时器
* setTimeout 定时器会等调用的代码执行完再开始计时 但是只能执行一次
	* 多用递归调用解决
	* （重要） 定时器总是放在最后执行 不管再什么位置
###跳转页面
* window.location.href = "http://www.yisayu.com" 属于BOM操作

###arguments 对象
* arguments.length 返回实参的个数 就是填入了几个参数
* 只能在函数内使用
* arguments.callee; 返回正在执行的函数 递归时可以替代函数名 

###JS的运算符
* && 优先级高于 || 所以同时出现先执行（重要）
* a&&b a为false返回自己 a为true返回b 
* a||b a为true返回自己 a为flase返回b
	* 分析：js的逻辑运算可以返回值

###字符串操作
* 字符转换字符串
	1. 2 + "";
	2. String(3);
	3. number.toString(2); 2代表二进制
* 获取字符位置 索引从开始
	* charAt（index） 获取想因为值得字符
	* charcodeAt（index）； 获取相应位置字符Unicode编码
		* unicode编码 0 => 48  A => 65 a => 97 0-127为一个字节的字符
	* 检测字符串真实长度 因为txt.length会把中文记为一个字符
		> var len= 0;  
		> var c = 0;  
		> for(var i = 0,le = str.length;i < le;i++){  
		> c = str.charCodeAt(i);  
		> if(c >=0 && c < ) {  
		len++;  
		> }else {  
			len += 2  
		> }  
		> }
