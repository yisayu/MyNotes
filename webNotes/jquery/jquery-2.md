###show（）和hide（）函数
* show（显示速度可以具体时间/slow fast normal ,fn()回调函数显示玩后执行）  

###滑动动画
* slideDown（时间，效果swing加速，回调函数） 下拉动画
* slideUp() 上拉动画 同上
* slideToggle（） 切换

###淡入淡出
* fadeIn（）； 淡入
* fadeOut（）；淡出
* fadeToggle（）； 淡入淡出切换
* fageTo（） 可以设置不透明度

###自定义动画
* animate（{json对象变化到}，时长，动画效果，回调函数）；

###stop（）
* stop（boolean（是否清空动画队列 ），boolean（true当前动画立即执行完 false是直接停止））；  停止动画

###样式操作
* $("li").addClass("xxx"); 添加样式
* $("li").removeClass("xxx"); 删除某个样式
* $("li").toggleClass("xxx"); 切换样式
* $（"li"）.hasClass("xxx"); 判断是否有该样式

###获取和设置属性
* $("p").arrt("xxx");获取属性  用法同.css();
* $("p").arrt("xxx","xxx") 设置属性
* $("p").removeArrt("xxx"); 移除属性
* $("input").val("xxx"); 设置值 无参数时为获取值
* $("div").html("xxxx")  去除标签内原本内容 直接添加新的内容 可以直接添加标签  为空时获取内部内容
* $("div").text("xxx"); 去除原本的内容设置文本内容无法设置标签 只获取自己与子类的文本内容

###节点操作
* append(“<p></p>”) 向该标签内添加标签
* appendTo（xxx）将当前元素添加到某元素种 
* prepend（“”）向该元素的子元素的最前面添加
* prependTo（xxx）。。。。。。。
* after（“”）向该元素后面添加
* before（“”）在该元素后面添加 
* insertBefore（""） 将该元素添加到什么前面
* insertAfter（“”） 将该元素添加到xx后面
* remove（）； 删除该节点
* empty（）； 清空该节点内容 == html（“”）；（推荐）
* clone（true）； 克隆该节点  参数为true时会拷贝该元素的事件
* replace（） 与某元素交换
* replaceWith（）  把该元素用后面的元素替换
* each（function（index，value） { }）

