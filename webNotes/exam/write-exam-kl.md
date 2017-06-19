# 题目中的碎片细节知识

* box-sizing: content-box(width不包括border和padding 默认)|border-box（width包括border和padding）
* background-clip:border-box|padding-box|content-box  设置背景色延伸到什么以下
* 3.HTTP状态码
  1xx：请求已被接收，需要继续处理。这类响应是临时响应只包含状态行和某些可选的响应头信息。
  2xx：请求已成功被服务器接收，理解并接受。
  206：服务器已成功处理了部分GET请求，应用为断点续传或将一个大文件分解为多个下载段同时下载。
  3xx：重定向，客户端需要采取进一步的操作才能完成请求，
  302：临时重定向，请求的资源临时从不同的URI响应
  4xx：客户端看起来可能发生错误妨碍了服务器的处理。
  403：没有权限访问此站。服务器理解了本次请求但拒绝执行该任务。
  5xx：服务器在处理请求过程中有错误或异常状态发生。
  500：服务器遇到一个未曾预料的状况导致它无法完成对请求处理。
  503：临时的服务器维护或过载，无法处理当前请求。



3.IE和标准DOM事件模型之间存在的差别

```
3.1 这里的IE是IE11以下;
3.2 参数的差别: attachEvent()的第一个参数比addEventListener()的事件名多一个"on"，
    且没有第三个参数，因为IE事件模型只支持冒泡事件流;
3.3 事件处理函数作用域的区别: IE中事件处理程序处于全局作用域，其内的this会指向window;
    而用DOM（0或2）级事件的事件处理程序的作用域是元素作用域，其内的this指向其所属的元素
    例: document.addEventListener("click", function(){ 
            if(this == document){
              alert("此时this指向document");
            }
          }, false);
3.4 事件对象event的属性方法的差别
        IE                    DOM
cancelBubble = true    stopPropagation() //停止冒泡
returnValue = false    preventDefault() //阻止元素默认事件
srcEelement            target //事件目标
```