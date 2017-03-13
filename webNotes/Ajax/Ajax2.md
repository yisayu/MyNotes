###Ajax(asynchronus javascript and xml)
* 延迟 加载 $(function() {});标签加载完就开始 先于图片
* 创建xhr对象
>> var xhr = null;
> if (window.XMLHttpRequest)xhr = new XMLHttpRequest();} else {xhr = new ActiveXObject("Microsoft.XMLHTTP");}  

* 准备发送请求
* xhr.open('get','xxx.php',true);
* 执行发送动作
* xhr.send（null）；
* 执行回调函数
* xhr.onreadystatechange = function（）{
* if（xhr.readyState == 4）{if(xhr.status)}}；

###xhr.readuState == 4取值范围
* 0：XMLHttpRequest创建完成
* 1：表示发送请求的准备已做好了  open 且send
* 2： 已经发送完成 在回调函数中
* 3： 服务器已经返回数据
* 4： 服务器返回的数据已经解析完成 可以使用

###xhr.status == 200 取值 是否返回成功
* 200： 表示页面已经获取成功
* 404 找不到页面
* 503 页面代码出错

###返回数据
* xhr.responseText;
* xhr.responseXML;、

###get post 区别
* get方式 会将要提交的参数追加到请求地址的后面  大小有限制
* post 不用在地址后面追加参数 通过 xhr.send(param); 提交参数  大小无限

###通过XML解析
* getElementbyTagName(); 获取节点
* 获取节点文本方法 
* function getNodeText(node) {if(window.ActiveXObjct){
* return node.text}else {
* if(node.nodeType==1){
* return node.textContext;}}}

###解析json
* var data = JSON.parse(xhr.responseText()); 将返回的字符串数据 转化成json对象
* JSON.stringify(data)可以将json转化成字符串
* 可以用eval（str）； 转化成json对象