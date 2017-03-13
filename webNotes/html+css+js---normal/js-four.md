
####selcet下拉菜单
* 格式 `<select><option value=1></ option></ select>`
* 在选择后 option中的value会默认传给select 
* 监听事件 onchange 改变选项是触发

###数组操作
* 给数组添加元素
	* push（） 向后面添加一个或多个元素 返回长度
	* unshift（） 向开头添加一个或多个元素 并返回长度
* 删除数组元素
	* pop（） 删除最后一个元素 返回最后一个值
	* shift（） 删除第一个值 返回第一个元素的值
* 合并数组
	* concat 连接两个数组 或者一个数组和几个元素相连 原数组不变 返回链接后的新数组
* 数组转换城字符串
	* join（直接量）；将数组中的元素用指定字符串连成字符串返回 原数组不变
	* split（字符串）； 把字符串用指定正则分隔

###Js分为三个部分
* ECMAScript 描述JS的基本于芬和基本对象
* DOM 文档对象模型 处理网页内容的方法和接口
* BOM 浏览器对象模型 与浏览器的交互方法和接口

###DOM 为了让js操作html元素而制定的规范
* 节点：文档中的所有元素都是节点

###访问节点
* getElementById();
* getElemnetsByTagName（）；
* getElementsByClassName（）； 有一定兼容性问题

###封装class类

###节点 必须是直系亲属
* 父节点：parentNode 常用
* 兄弟节点
	* nextElementSiBling 下一个兄弟节点 大部分浏览器 nextSiBling ie678  
	* perviousElementSiBling  上一个兄弟节点  previousSiBling
	* 先写正常浏览器
* 子节点 firstChild 第一个子节点 fristElementChild lastChild 最后一个 lastElementChild
	* 兼容性问题 通过 || 解决
* 所有子节点   常用
	* 常用 children 只选出所有的子元素节点 无兼容性问题 但是ie678会算注释节点
	*  chiildNodes 选出全部的孩子 会把换行也看成子节点 通过nodeType == 1 时才是元素节点 

###DOM节点操作
* 创建节点 document.createElement（“li”）；
* 插入节点 放到最后 appendChild（）；
* 插入节点到指定节点的前面 insertBefore（插入节点，参照节点） 如果参照节点为null则默认把节点插入到最后
* 移除节点 父节点.removeChild（节点）；
* 复制节点 节点.cloneNode(boolean); 括号中为true是深层复制 复制本盒子也复制子节点 为false只复制当前节点  