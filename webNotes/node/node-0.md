# Node.js 

### 创建一个运行的http服务器

~~~javascript
var http = require('http'); //请求http模块

http.createServer(function (request, response) {
	// 发送 HTTP 头部 
	// HTTP 状态值: 200 : OK
	// 内容类型: text/plain
	response.writeHead(200, {'Content-Type': 'text/plain'});

	// 发送响应数据 "Hello World"
	response.end('Hello World\n');
}).listen(8888); //指定这个HTTP服务器监听的端口号
~~~

### 文件读取模块

* 非阻塞文件读取 在进行I/O操作的同时可以直接执行的后面的程序 在完成文件操作后，通过回调函数以参数返回

~~~
var fs = require("fs");

fs.readFile('input.txt', function (err, data) {
    if (err) return console.error(err);
    console.log(data.toString());
});

console.log("程序执行结束!");   
~~~

* 阻塞式文件读取 

  ~~~	javascript
  var data = fs.readFileSync('input.txt');

  console.log(data.toString());
  console.log("程序执行结束!");
  ~~~



### 事件监听模块

* 通过实例化EventEmitter类来触发事件和绑定监听事件

  ```
  var events = require('events');
  // 创建 eventEmitter 对象
  var eventEmitter = new events.EventEmitter();
  ```

* 实例化对象的方法

  * addListener(event,listener);  添加一个监听器到监听数组的尾部
  * on 注册一个事件监听
  * once（event，listener） 注册一个单次的监听事件  只触发一次
  * removeListener（event,listener）;
  * removeAllListener(evenet.listener);
  * ....

* 一般不会直接使用EventEmitter ，使用fs，net，http等等继承了EventEmitter 的子类。



### 缓冲区Buffer类

* 创建Buffer类方法

  * var buf = new Buffer(10);
  * var buf  = new Buffer（[10,20,30,40,50]）;
  * var buf  = new Buffer(src , "utf-8");

* 写入缓冲区的方法

  * ```
    buf.write(string, offset, length, encoding) //返回真实写入的字节长度
    ```

* 读取缓存区的内容

  * ```
    buf.toString([encoding, start, end);
    ```

* 将缓冲区转换成JSON对象

  * buf.toJSON();  //将个每个字节转换成数字储存



### Stream

* 输入流

  * ```
    var fs = require("fs");
    var data = '';

    // 创建可读流
    var readerStream = fs.createReadStream('input.txt');

    // 设置编码为 utf8。
    readerStream.setEncoding('UTF8');

    // 处理流事件 --> data, end, and error data是读取事件 
    readerStream.on('data', function(chunk) {
       data += chunk;
    });

    readerStream.on('end',function(){
       console.log(data);
    });
    ```

* 输出流 

  * ```
    var fs = require("fs");
    var data = 'yisayu';

    // 创建一个可以写入的流，写入到文件 output.txt 中
    var writerStream = fs.createWriteStream('output.txt');

    // 使用 utf8 编码写入数据
    writerStream.write(data,'UTF8');

    // 标记文件末尾
    writerStream.end();

    // 处理流事件 --> data, end, and error
    writerStream.on('finish', function() {
        console.log("写入完成。");
    });

    writerStream.on('error', function(err){
       console.log(err.stack);
    });

    console.log("程序执行完毕");
    ```

* 管道留：直接将一个文件内容导入另一个文件

  * ```
    var fs = require("fs");

    // 创建一个可读流
    var readerStream = fs.createReadStream('input.txt');

    // 创建一个可写流
    var writerStream = fs.createWriteStream('output.txt');

    // 管道读写操作
    // 读取 input.txt 文件内容，并将内容写入到 output.txt 文件中
    readerStream.pipe(writerStream);
    ```

* 链式流

### 模块系

#### 模块

*    模块本身也是一个js文件  内置exports和require对象   

     *  require 用于请求模块
     *  exports就是require请求得到的对象

*  exports直接作为访问方法的接口

   *  ```
      //demo.js
      var hello = require('./hello');
      hello.world();
      // hello.js
      exports.world = function() {
        console.log('Hello World');
      }
      ```

*  exports封装对象

   *  ```
      //main.js 
      var Hello = require('./hello'); 
      hello = new Hello(); 
      hello.setName('BYVoid'); 
      hello.sayHello(); 

      //hello.js 
      function Hello() { 
      	var name; 
      	this.setName = function(thyName) { 
      		name = thyName; 
      	}; 
      	this.sayHello = function() { 
      		console.log('Hello ' + name); 
      	}; 
      }; 
      module.exports = Hello;
      ```

   *   

​	