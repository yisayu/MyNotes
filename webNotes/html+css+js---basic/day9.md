###补充
* 定位元素不设置宽度 默认为0
* 设置透明度 opcity：0-1；但是ie6 不支持 所以需要加 filter：Alpha（opcity=50）；

###margin补充
* margin-right/left：auto； 浏览器默认将所有margin复制给一边 如果两边都是auto 就会将margin进行平分给两边
* 相对定位的层级要高于标准定位的层级
* margin为负 元素反方向移动

###圣杯布局 双飞翼布局
* 两边大小不变 中间随着窗口大小伸缩
* 代码
		* .content{
			padding: 0 200px;
			height: 200px;
			min-width: 200px;
			
		}
		.left{
			width: 200px;
			height: 200px;
			background: blue;
			margin-left:-200px;
			float:left;
		}
		.right{
			width: 200px;
			height: 200px;
			background: red;
			float: right;
			margin-right: -200px;
			
		}
		.center{
			width: 100%;
			height: 200px;
			background: green;
			min-width: 200px;
			float: left;
		}

###滑动门
* li{
		padding：6px；
		background：url（） no-repeat 0 0 ；
	}
	a{
		padding：25px；
		background：url（） no-repeat top right； 
	}
	<li><a href="#">导航</ a></ li>
###常见的三角
* 易迅三角
	   span{
			display: inline-block;
			width: 0;
			height:0;
			border-width: 10px;
			border-color: blue transparent transparent transparent;
			border-style: solid dashed dashed dashed;

		}
* 淘宝三角
	span{
			display: inline-block;
			width: 0;
			height:0;
			border-width: 10px;
			border-color:  transparent transparent transparent white;
			border-style:  dashed dashed dashed solid;

		}
		.two{
			margin-left: -15px;
			border-color:  transparent transparent transparent blue;
		}
		.one{
			position: relative;
		}