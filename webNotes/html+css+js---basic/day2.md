###<!DOCTYPE html>文档类型 
* 此标签可告知浏览器文档使用哪种HTML或XHTML规范
	* HTML规范包括三种文档类型
		* HTMLStirct DTD 比较严格的html 不能用属性来规定样式
		* HTML Translational DTD 必须要使用的时候可以使用 属性定义样式 (比较多)
		* Frameeset DTD 框架中使用` 
	* XHTML规范包括三种文档类型
		* 同上 更加规范
	* H5规范
		* <!DOCTYPE html>

###html标签 
* 属性
	* lang="en" 当前使用的主要语言类型
	* 将来做SEO的时候在权重上起到一定的作用
		* SEO 搜索引擎优化
			* buy排名
			* 做成静态页面
			* 发外链
			* 页面友好性(规范):合理使用标签的语义化
	* 用于特殊设置上的设置

###head标签
* 子标签
	* title 标题 (必须有)
	* meta 
	* base 是否在新的页面跳转
	* style
	* script
	* link

###body标签

###Title标签
* 标题
* title在seo中有很大的权重

###meta标签
* 设置的所有内容页面上不会显示
* <meta name="description" content="对页面的描述">
* <meta name="keywords" content="关键字">
* <meta charset="UTF-8">
* utf-8 收录了全世界的所有语言中的文字 一个汉字三个字节
* GBK 收录了汉子 片假名 一个汉字两个字节

###无序列表
		<ul>
			<li> </li>
		</ul>
* ul标签中只能放li标签

###有序列表
		<ol> 
			 <li> </ li>
		</ ol>

###自定义列表
		<dl>
			<dt> </ dt> 分类 相当于小标题
			<dd></ dd>
			<dd></ dd>
		</ dl>  
* 可以在li标签中嵌套列表

###table 表格代码
* <table> 表格
	* 属性
		* border="1" 边框
		* width="300" height="200" 宽高
		* cellspacing="5" 边框之间的距离
		* cellpadding="5" 设置内容与边距的距离
* <tr> 行 
* <td> 列
* <th> 设置每列的表头 会居中加粗
* <caption></ caption> 表的标题
* <tbody></ tbody> 表的主题部分 会自动加
* <thead></ thead> 存放表头
* <tfoot></ tfoot> 存放表尾 

###表单元素
* <form ></ form> 表单
	* <intput type="text" value="预设内容"> 输入框
	*  <input type="password"> 密码输入框
	* <input type="hidden" value="很隐藏的数据 用户看不到">
	* <input type="radio" name="gender" checked="checked"默认选中> 选项框  设置name属性 多者只能选一
	* <input type="checkbox" checked="checked" name="">多选框 添加name相当于放到了同一个类别中
	* <input type="button" value="提交"> 按钮 <input type="reset"> 重置按钮 放在表单控件中才会起作用
	* <input type="image" src="路径" > 图片按钮
	* <input type="submit" > 提交按钮
	* <select> <option selected="selected">12</ option>下拉选项</ select>下拉框 
	* <textarea cols="30"列 row="20"行> 文本域