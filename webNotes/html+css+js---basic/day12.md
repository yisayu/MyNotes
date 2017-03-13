###数据类型 
* 简单数据类型  存在栈中
	* String
	* number
	* boolean
	* undefind
	* null
	* undefind与null区别  null 代表函数企图返回一个不存在的值 undefind代表变量未被初始化 两者值相同 类型不同
* 复杂数据类型 栈中记录名字和地址值 堆中存放数据、
	* 数组 Array
	* 对象 Object

###数组
* 区别
	* 声明 var arr = new Array（）；
	* 数组可以无限长 无限存储
	* js的数组可以存储任何类型

###数组的方法
* arr.concat（arr1，arr2，arr3）； arr.concat(1,2);连接两或者多个个数组 或者数组连接元素
* join（可以自定义分隔符 也可以不填默认用，分隔  但是必须是直接量）； 把所有元拼成一个元素
* sort（）； 对数组进行排序

###字符串方法 
* indexOf（）；从前往后搜索
* lastIndexOf（）；从后往前搜索索引
* slice（1，3）； 返回下标之间的所有字符串
* subString(1,3); 截取中间字符
* concat（）； 连接
* trim（）； 去除首尾空格

###定义函数
*function 方法名（变量（不需要 定义类型））{

}