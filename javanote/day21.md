###21.01_IO流(字符流FileReader)
* 1.字符流是什么
* 		* Reader---InputReader---FileReader
		* Writer---OutputWriter---FileWriter
	* 字符流是可以直接读写字符的IO流
	* int 接收每一个字符
	* 字符流读取字符, 就要先读取到字节数据, 然后转为字符. 如果要写出字符, 需要把字符转为字节再写出.  
	* Witer类字符输出流中有1024个大小的字符数组就是大小为2kb的缓冲区 如果不关流就会把字符写到缓冲区中 只有关流才会刷到文件中  
###21.04_IO流(只读或者只写的情况下使用字符流)
1.拷贝的时候不适合使用字符流 中间有两步转化的步骤影响效率 因为不需要给人看
2.只读或只写或者在读取后要采取一定的操作修改的时候可以使用字符流
* 字符流也可以拷贝文本文件, 但不推荐使用. 因为读取时会把字节转为字符, 写出时还要把字符转回字节
* 程序需要读取一段文本, 或者需要写出一段文本的时候可以使用字符流
* 读取的时候是按照字符的大小读取的,不会出现半个中文
* 写出的时候可以直接将字符串写出,不用转换为字节数组
(只要不需要再内存中查看文本或者写入文本就不用字符流)
###21.05_IO流(字符流是否可以拷贝非纯文本的文件)
* 不可以拷贝非纯文本的文件
* 因为在读的时候会将字节转换为字符,在转换过程中,可能找不到对应的字符,就会用?代替,写出的时候会将字符转换成字节写出去
* 如果是?,直接写出,这样写出之后的文件就乱了,看不了了  

###自定义小数组拷贝
要定义一个字符数组1024的整数倍
###21.07_IO流(带缓冲的字符流) 
* BufferedReader的read()方法读取字符时会一次读取若干字符到缓冲区, 然后逐个返回给程序, 降低读取文件的次数, 提高效率
* BufferedWriter的write()方法写出字符时会先写到缓冲区, 缓冲区写满时才会写到文件, 降低写文件的次数, 提高效率
* 因为是字符流所以容量是8192个字符 就是16k 
###21.08_IO流(readLine()和newLine()方法) 缓冲区的特殊方法 
* BufferedReader的readLine()方法可以读取一行字符(不包含换行符号)遇到\r或者\n就表示这一行停止了  返回Null就结束读取
*因为readLine()不会读取\r\n所以 
BufferedWriter的newLine()可以输出一个跨平台的换 行符号"\r\n"  直接写\r\n不能跨平台
FileReader 和FileWriter中没有这两个方法
* 流对象尽量晚开早关
###21.10_IO流(LineNumberReader) 
* LineNumberReader是BufferedReader的子类, 具有相同的功能, 并且可以统计行号
	* 调用getLineNumber()方法可以获取当前行号
	* 调用setLineNumber()方法可以设置当前行号

###IO流(装饰设计模式)
* 步骤 
	* 包装类和被包装的类都要实现同一个接口
	* 获取被装饰类的引用
	* private Student s;
	* 在构造方法中传入被装饰类的对象
	* public HeiMaStudent(Student s) {
	*      this.s = s
	* }
	* 对原有功能进行升级
	* public void code() {
	*     s.code();
	*     syso...
	* }
* 装饰设计模式的好处:耦合性不那么强了,被装饰的类的变化与装饰类的变化无关

###21.12_IO流(使用指定的码表读写字符) 他是FileReader父类 使用是里面放的字节流 是 字节转化为字符的桥梁
* FileReader是使用默认码表读取文件, 如果需要使用指定码表读取, 那么可以使用InputStreamReader(字节流,编码表)是FileReader的父类可以用不同的编码表 字节通向字符的桥梁 通过指定的编码表将字节转换成字符 读入
* FileWriter是使用默认码表写出文件, 如果需要使用指定码表写出, 那么可以使用OutputStreamWriter(字节流,编码表) 字符通向字节的桥梁 通过指定的编码表将字符转化成字节 写出
* 编码表 "utf-8" "gbk"
输入流看输入后产生的是字符还是字节  输出流看能处理的是字符还是字节 通过这个判断这个是字符流还是字节流
###递归
	* 返回的条件是以下一层为前提的
	* 构造方法不能用递归调用
	* 弊端:StackOverFlow容易产生栈内存溢出 这个网站上可以解决问题