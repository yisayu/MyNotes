* 空格 换行 tab 都会转化成一个空格 要写多个空格&nbsp; 相当于一个汉字的大小
* 特殊字符 <=&It >=&gt 圈c-版权=&copy 圈R-注册商标=&reg\
###无语义标签
* span 可以在同一行放多个 宽高由内容决定
* div 单独占一行 宽度是 最长宽度 div+css 布局

###三层结构 w3c三层分离标准
* html:从语义的角度来描述页面的结构 
	* html负责页面的语义:
		* 好处
			让页面更加友好 SEO会收录页面更多的信息
			让页面结构清晰
			用户体验			
* css:从样式上来修饰结构
* js:负责让页面动起来

###css:层叠样式表 (Casading Style Sheets)
* 所有与css相关的设置都放在style标签中放在head中  在title标签下  
* 结构:<style> 
			选择器{
			属性名:属性值	;		
			}
	   </style>
* css相关属性
	* color 字体颜色
	* background 设置背景颜色
	* width 宽 默认宽度 一整行
	* height 设置高
* 与字体相关的属性 
	* * font-size 字体大小
	* font-weight 字体的粗细 可以设置具体的数值:100-900  也可以设置具体的关键字 bold 加粗 normal 正常
	* font-family 字体的类型
	* font-style 字体的样式
	* 审查元素右边 查看元素的样式

###字体连写
* font: font-style(可选) font-weight(可选) font-style font-family;

###颜色表示
* 具体英文单词表示
* #000000 => #000  #030=#003300 十六进制表示法
* rgb表示方法 color: rgb(0,0,0); 最高255

###标签选择器
* 标签名{属性名:属性值;}

###类选择器
* 给需要设置的标签添加一个类名:<p class="yisayu"></p>
* 类选择器 .yisayu{属性名:属性值;}
* 所以这个类名的标签相同属性

###id选择器
* 给对应标签添加id="yisayu";
* #yisayu{属性名:属性值;}

###id选择器与类选择器的区别
* 类名可以重复
	* 一个类名可以赋值给多个标签 
	* 一个标签可以设置多个类名 <p class="haha huhu">
* id不可重复
	* 一个标签只能有一个id名 
	* 一个id名只能给一个标签 
* 类名与id名命名规则
	* 只能是 0-9 a-z A-Z _ - 并且不能以数字开头

###通配选择器
* *{} 将页面所有标签设置该属性 效率低

###并集选择器
* p,div,.yisayu,#yisayu{}

###交集选择器
* p.yisayu{}  p#yisayu{} 
* 标签名写在最前面

###后代选择器
* .yisayu p{} 嵌套

###直接子代选择器
* .yisayu>p{} 只能是儿子

###注释
*  <!-- 注释内容 -->
*  是html里的注释  不能嵌套
*  css注释/*注释*/ 不能嵌套

###css代码存放位置
* 嵌套样式 <style> </style> 只能当前页面使用 下存放当前页面的样式
* 行内样式 <div style="color="red";font-size:200px"></div>       当前标签 用得少
* * 外联样式 <link rel="stylesheet" href="路径.css"> css文件中不需要style标签  所有页面都可以用  存放公共样式
                                                                                                                                                                                                                                                                    
