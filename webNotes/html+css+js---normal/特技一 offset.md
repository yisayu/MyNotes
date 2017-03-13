###offset
* 方便用于获取元素尺寸
* offsetWidth = width + border + padding；获取对象宽度
* offsetHeight 获取对象高度 
* offsetLeft offsetTop 返回与带有定位的上级盒子左和上的距离 如果父级都没定位 就以body为准 border不算在内
* offsetParent 返回对象的父级 必须带有定位  所以能是父可能是爷 parentNode只能是父亲

###offsetLeft与offsetTop与sty le.top/style.left的区别
* style.left/top必须是定位的对象 而offsetLeft/Top的距离是测量出来的 不一定要定位

###style.width和style.height 与offsetWidth和offsetHeight 的区别
* style.xxxx 只能获取行内样式 且面对宽高不固定的对象 无法获取
* style.xxxx获取的是 100px  offset获取的 数字100
* style.xxxx 可以读取也可以设置 offsetxxx 只能读取 不能设置


###事件对象 
* 触发这个事件的对象 function(event) {}
* 属性
	* event.clientX clientY 窗口的位置
		* ie678 window.event.clientX
		* 兼容性写法 var evt = event || window.event
	* pageX 以整个文档的相对位置对齐
	* screenX 鼠标的屏幕位置  
* cursor: move; 鼠标显示移动图标