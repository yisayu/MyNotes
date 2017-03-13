* 清除浮动 标准做法  --- 准确说是闭合浮动
	* .clearfix:before,.clearfix:after {
   			content:"";
    		display:table;
		}
	.clearfix:after{clear:both;}
	.clearfix{
    	zoom:1;/*IE/7/6*/
	}
* 鼠标样式 cursor：pointer 鼠标变成手  default 默认鼠标 move 移动   text文本输入光标
* border-radius： 50% 50% 50% 0； 圆角矩形

* 块级元素 嵌套任何
* 行内元素 只能嵌套行内于元素
* p不能放div
* a 无所不能 不能放a 或者input 

* 透明 opcity：0.5； 盒子半透明
* 背景颜色半透明 background:rgba((0,0,0,.3);

** BFC 块级格式化上下文  
	* 创建一个闭合区域 不影响外面的环境 和清除浮动的效果相同 所以如果触发了BFC 就不需要清除浮动了 