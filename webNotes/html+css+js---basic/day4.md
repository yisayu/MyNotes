###文本属性
* text-indent： 设置首行缩进 2em  em代表两个文本的距离==16px
* text-align： 设置文本在容器中的位置  center水平居中  p标签的空余位置 无法使用 left right内容左右
* text-decoration： none underline
* margin：0 auto 父容器水平居中

###css三大特性 
* 继承性 子元素可以继承父元素的样式
	* 可继承属性 text font line开头属性 color
	* 特殊性 a标签的颜色无法继承 h标签的大小无法继承  只能直接修改 因为都有默认值 div高度由内容决定宽度是默认由父元素继承来的
* 层叠性  浏览器处理冲突的特性 
* 优先级 
	* 同一级选择器后写的覆盖先写的后来的覆盖前面的
	* 不同选择器 ！importants>行内样式>id>class>标签选择>通配符>继承 
	* 变数  ！important
		* ！important 属性不能继承  作用到下一级的时候不能继承 只能对当前标签起作用  使用方法 text-align：center | ！impotant；

###计算组合选择器的权重
* 算法：（0，0，0，0）==（important个数，id选择器，类选择器，标签选择器） 从第一个开始比较只要前面位高就权重高
* 组合选择器 从右往左看

###背景属性、
* background-color： 设置背景颜色
* background-image：url（）； 设置背景图片 默认情况 图片比容器小 会平铺
* backgtound-repeat：no-repeat不平铺/ repeat-x水平方向上平铺/repeat-y垂直方向上平铺/repeat 设置背景是否平铺
* background-position： x y;设置图片在容器中的位置 x y可以是具体数值 也可以是关键词 x:left center right y:top center bottom  单方向设置会在该边上居中
* 连写 background：backgoround-color background-image background-repeat background-position; 任意写几个

###元素显示的方式
* 行内元素 span a b u i s strong em ins del  一行可显示多个 不可设置宽高
	* display：inline；（行内）
	* 特点
	* 一行里面可以显示多个
	* 无法显示宽高
	* 大小由内容决定
	* 缺点：不能设置宽高
* 块级元素 div p h1-h6 ul li ol li dl dt dd独占一行 可设置宽高
	* display：block； （块级）
	* 独占一行
	* 可以设置宽高
	* 默认宽度一整行
	* 缺点：不能在同一行存在
* 行内块级元素 img input 
	* 属性：display：inline-block；
	* 特点
	* 可以设置宽高
	* 一行可以存在多个 
	* 宽高默认为内容大小

* 文本 垂直居中 line-height：容器高度
* min-width 外面的div大小必须比里面的div大
* list-style：none 去除li样式
