###伪类
* 锚伪类
	* a:link{
				...
			}
		* 作用：给a标签设置没有访问过的样式
	* a:visited{
				...
				}
		* 作用 设置访问过的样式
	* a:hover{
				...
				}
		* 作用 设置鼠标悬停样式
	* a:active{...}
		* 作用 设置a标签的激活时样式
	* 注意：使用的时候一定要按照这样的顺序 l v h a
	* link visited只能用于a标签
	* hover active可以用于其他标签
	
###行高
* 应用：如果行高等于父容器的高度  则在父容器中水平居中
* 定义 两行文本基线的距离
* 文字默认在所处哪一行的居中

###盒子模型
* 具体内容
	* 盒子的纸板 border
	* 盒子内部的泡沫 padding
	* 盒子内的物品 内容
	* 盒子与盒子的距离 margin
	
###border
* border-color 边框颜色
* border-width 边框宽度 
* border-style 边框样式 none solid实线 dotted点线 dashed虚线、doubble 两条线 groove 3d效果
* 边框连写 borderL:border-width border -style brder-color;
* 单边框设置 border-top/right/bottom/left-属性：。。。； border-方向：连写
* border-collapse:collapse; 设置表格单元格无间距

###padding 
* 设置盒子内容与边框之间的距离
* padding：10px；给上右下左都设置一个填充物 
* padding：上下40px 左右80px
* padding:40px上 60px左右 80px下;
* padding：40px上 60px右 80px下 100px左；
* 单独设置 padding-top/right/bottom/left：10px

###盒子计算
* div的宽高为内容宽高
* 盒子的宽高是内容加上两条边框的宽度在加上两个padding的宽度
* padding会改变盒子的大小
* 如何让内容居中 1.大盒子内容大小与小盒子的整个大小相同 边框由padding填充 2。。。。。。

###padding不会改变盒子大小的特殊情况 
* 大盒子嵌套小盒子 大小盒子都是块级元素 小盒子继承大盒子的宽度时 增加padding-left时 盒子大小不变 

###盒子与盒子之间的距离：margin类同于padding   外边距
* margin：10px；给上右下左都设置一个填充物 
* margin：上下40px  左右80px
* margin:40px上 60px左右 80px下;
* maigin：40px上 60px右 80px下 100px左；
* 单独设置 margin-top/right/bottom/left：10px
* 很对标签默认带有margin和padding 将来在页面布局时要清除margin padding
	* body标签默认带有8px的margin
	* p标签自带margin-top和bottom 与字体大小相同
	* h标签自带margin-top和bottom
	* ul默认带有上下margin 以及左边的padding
	* 。。。。

* 清除默认margin padding  以后使用css的初始化
	* {
			margin：0；
			padding:0;
		}
 