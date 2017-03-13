###flex布局注意事项
* 分为 main-axis 主轴横向 cross axis 纵向交叉轴
* 使用flex布局 子元素float clear vertival-align属性都将失效
* Webkit内核的浏览器 必须display： -webkit-flex；

#第一部分  设置再父元素中控制子元素布局
###flex属性 flex-directon
* 取值
	* row 横向排列从左到右
	* row-reverse 横向 从右到左
	* column 纵向 上到下 
	* column 纵向 下到上

###flex-wrap 换行
* nowrap 不换行 一行放不下会被压缩（默认）
* wrap 换行 
* wrap-reverse 换行 并且新的一行在上

###flex-flow 以上属性连写
* flex-flow： column wrap；

###justify-content 主轴方向的对齐方式
* flex-strat 对齐左边
* flex-end 对齐右边
* center 子元素合成一个整体居中
* space-between 两段对齐边界 项目间隔相等
* space -around 项目两边间隔相等 所以两个项目间距是两段与边界距离的两倍

###align-items 垂直方向对齐方式
* flex-strat 对齐上边界
* flex-end 对齐下边界
* center 垂直居中
* baseline 所有项目的第一行文字基线对齐
* stretch 如果项目没设置高度护着设置为auto 则占满整个容器高度

###align-cotent
* flex-start：与交叉轴的起点对齐。
* flex-end：与交叉轴的终点对齐。
* center：与交叉轴的中点对齐。
* space-between：与交叉轴两端对齐，轴线之间的间隔平均分布。
* space-around：每根轴线两侧的间隔都相等。所以，轴线之间的间隔比轴线与边框的间隔大一倍。
* stretch（默认值）：轴线占满整个交叉轴。

#第二部分 子元素控制单独控制自身布局

###order 定义项目的排列顺序
* order： 整数； 数字越小排列顺序越靠前 默认为0

###flex-grow 根据剩余空间 分配给项目放大的比重 默认为0
* flex-grow： 数字；

###flex-shrink 当空间不够时项目缩小的比重
默认为1；

###flex-basis属性
* 设置项目站主轴的长度 默认为auto就是项目本来的大小 设置大小之后 项目长度固定

###flex时 grow shrink basis的连写
* 默认为flex： 0 1 auto;

###align-self （重要） 设置本身在父元素中的位置
* auto | flex-start | flex-end | center | baseline | stretch;（同父元素一样）

 
