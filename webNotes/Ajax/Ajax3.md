###jQuery的Ajax语法

	$.ajax({url:'',type:'POSt',dataType:'json',data:{username:'xxx',password:'xxx'},success:function(){},error:function() {}})


###JS运行机制
* 预解析  将函数定义 和变量定义提到最前面  方法有方法体  变量还没有被赋值
* 执行 从上到下执行 除了两种定时器 ajax回调函数 需要触发执行

###跨域问题
* 不能直接从不同源的网站上获取数据  但是可以通过Script加载js文件的方式 发送请求 url内加上jsonp数据来设定回调函数的名字 来通过回调函数 获取data

		var url = '' 请求的地址
		var script = document.createElement('script');
		script.src = url;
		document.appendChild(script);  

###josnp
* jsonp主要在url后面用来指定 回调函数名称 以便于返回数据

###jquery的jsonp

		$.ajax {......jsonp:xxx(php的接口名)，callback：xxx回调函数的名称 }


###jquery的ajax方法 

	$('div').load(url,{data},function(responseText，textStatus，XMLHttpRequest) {}); 
* load()主要用于接收静态的数据 如HTML的代码 可以直接将返回数据加入标签中 无参数传递用GET 有参数传递用POST

		$.get（url,{data},function(data，textStatus){},type传输数据的类型）；
		$.post同上
* get与post区别
	* get会把信息追加在地址后面 且有缓存 传输信息有大小限制 有安全性问题
	* post大小无限 直接将http信息体传送 

$.getScript() $.getJson();