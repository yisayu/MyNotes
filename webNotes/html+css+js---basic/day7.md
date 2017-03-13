###清除浮动
* 子父盒子 父类没有定义高度 子盒子如果浮动 那么父盒子不会和子盒子高度一致
* 清除浮动
	* 额外标签法 A：放在父盒子外 在浮动盒子下另外定义一个标签 样式为clear：both； 但是父类盒子的大小还是不会打开 B:放在父盒子里面 可以撑开  一般不使用这类方法清除浮动 因为会增加标签
	* overflow：hidden；  在父盒子中添加该样式 一般不用  离开了这个元素所在的区域会被隐藏
	* 使用伪元素来清除浮动 伪元素：在页面上不存在的元素 通过css添加上去 默认是行内元素
		* 种类
		* :after
		* :before  p:before{  content: "..."; }
		* .clearfix:after{
			content:"";
			height:0;
			line-height:0;
			display:block;
			visibility:hidden;
			clear:both;
		} //在父元素后添加一个隐藏并清除浮动的伪元素
		.clearfix{
			zoom:1; //兼容ie6
		}

###定位
* 解决页面上盒子与盒子的层叠问题
* position：static； 静态定位 标准流都是静态定位
* position:relative; 相对定位 设置 top right bottom left 相对于原来位置发生偏移 移动方向与设置方向相反 没有脱离标准 真正的位置还是原来的位置 只是发生了偏移
* position：absolute； 绝对定位 设置 top left bottom left 
	* 没有父元素或者父元素没有设置绝对或者相对定位 则先对于body定位 
	* 有父元素且父元素设置了绝对或者相对定位 则相对于父元素定位
	* 绝对定位的元素在页面上不占位置 脱离表准流 显示方式符合内联块级元素
* 一般用的都是相对定位与绝对定位一起使用 子元素使用绝对定位 父元素使用相对定位 子元素也会依据父元素定位 （子绝父相）  可以用百分号

* 固定定位 position：fixed；（对联广告）
	* 通过设置trbl 
	* 相对于浏览器的位置 
	* 脱离标准流 在页面上不占位置

###文字图片同一行的情况
* 默认情况 baseline 文字基线和图片底线对齐
* vertical-align：middle； 两者中线对齐

###overflow：
* hidden超出容器的部分 隐藏 
* visible 默认 超出不隐藏
* scroll 给容器添加滚动条
* auto 超出添加滚动条 不超过不添加

###元素的隐藏
* overflow：hidden； 超出容器部分隐藏
* visibility：hidden； 元素隐藏但是还是占位置
* display：none； 将元素隐藏 在页面上不占据位置

###emmet语法
* html快捷键
	* ！+ t  html结构
	* 标签名.class#id + t  <标签 class=“class” id="id"></ 标签>
	* .class#id + t  <div class="class" id="id"> </ div>
	* 标签名.class#id + .class#id + t 并列关系
	* ul>li*3>a[href="#"]{导航$} 嵌套关系
* CSS快捷键
	* w200 + t 
	* h200 + t
	* bg
	* fs fsi fsz ff
	* bl
	* ml