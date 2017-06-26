###IO流
###20.01_IO流(IO流概述及其分类)
* 1.概念
	* IO流用来处理设备之间的数据传输
	* Java对数据的操作是通过流的方式
	* Java用于操作流的类都在IO包中
	* 流按流向分为两种：输入流，输出流。
	* 流按操作类型分为两种：
		* 字节流 : 字节流可以操作任何数据,因为在计算机中任何数据都是以字节的形式存储的
		* 字符流 : 字符流只能操作纯字符数据，比较方便。
* 2.IO流常用父类
	* 字节流的抽象父类：
		* InputStream 
		* OutputStream
	* 字符流的抽象父类：
		* Reader---InputReader---FileReader
		* Writer---OutputWriter---FileWriter	
* 3.IO程序书写
	* 使用前，导入IO包中的类
	* 使用时，进行IO异常处理
	* 使用后，释放资源

###20.02_IO流(FileInputStream)
* read()一次读取一个字节
* 
		FileInputStream fis = new FileInputStream("aaa.txt");	//创建一个文件输入流对象,并关联aaa.txt
		int b;													//定义变量,记录每次读到的字节
		while((b = fis.read()) != -1) {							//将每次读到的字节赋值给b并判断是否是-1
			System.out.println(b);								//打印每一个字节
		}
		
		fis.close();											//关闭流释放资源
###20.03_IO流(read()方法返回值为什么是int)
* read()方法读取的是一个字节,为什么返回是int,而不是byte
* 
		因为字节输入流可以操作任意类型的文件,比如图片音频等,这些文件底层都是以二进制形式的存储的,如果每次读取都返回byte,有可能在读到中间的时候遇到111111111
		那么这11111111是byte类型的-1,我们的程序是遇到-1就会停止不读了,后面的数据就读不到了,所以在读取的时候用int类型接收,如果11111111会在其前面补上
		24个0凑足4个字节,那么byte类型的-1就变成int类型的255了这样可以保证整个数据读完,而结束标记的-1就是int类型 不管读取什么都是正数 只有读到未见结尾才会读到 -1 
###20.05_IO流(FileOutputStream追加)
* A:案例演示
	* FileOutputStream的构造方法写出数据如何实现数据的追加写入
* 
		FileOutputStream fos = new FileOutputStream("bbb.txt",true);	//如果没有bbb.txt,会创建出一个
		//fos.write(97);						//虽然写出的是一个int数,但是在写出的时候会将前面的24个0去掉,所以写出的一个byte
###20.06_IO流(拷贝图片)
* FileInputStream读取
* FileOutputStream写出

		FileInputStream fis = new FileInputStream("致青春.mp3");	
		FileOutputStream fos = new FileOutputStream("copy.mp3");
		int b;(返回的是码表值)
		while((b = fis.read()) != -1) {
			fos.write(b);
		}
		fis.close();
		fos.close();
弊端:效率低
###IO流大数组
* A:案例演示 
	* int read(byte[] b):一次读取一个字节数组
	* write(byte[] b):一次写出一个字节数组
	* available()获取读的文件所有的字节个数
弊端:内存溢出
###IO流小数组拷贝
* byte[] arr = new byte[2];
		int len;(返回的是读取的个数)
		while ((len = fis.read(arr)) != -1) {
			fos.write(arr,0,len);
	标准小数组
	byte[] arr = new byte[1024 * 8];					//自定义字节数组
		
		while((len = fis.read(arr)) != -1) {
			//fos.write(arr);
			fos.write(arr, 0, len);							//写出字节数组写出有效个字节个数
		}
###IO流缓冲区
 A:缓冲思想(原理就是 减少从硬盘上读取和写出的次数 因为硬盘的运算效率比内存要低很多 )
	* 字节流一次读写一个数组的速度明显比一次读写一个字节的速度快很多，
	* 这是加入了数组这样的缓冲区效果，java本身在设计的时候，
	* 也考虑到了这样的设计思想(装饰设计模式后面讲解)，所以提供了字节缓冲区流
* B.BufferedInputStream
	* BufferedInputStream内置了一个缓冲区(数组)
	* 从BufferedInputStream中读取一个字节时
	* BufferedInputStream会一次性从文件中读取8192个, 存在缓冲区中, 返回给程序一个
	* 程序再次读取时, 就不用找文件了, 直接从缓冲区中获取
	* 直到缓冲区中所有的都被使用过, 才重新从文件中读取8192个
* C.BufferedOutputStream
	* BufferedOutputStream也内置了一个缓冲区(数组)
	* 程序向流中写出字节时, 不会直接写到文件, 先写到缓冲区中
	* 直到缓冲区写满, BufferedOutputStream才会把缓冲区中的数据一次性写到文件里(不是一次写到文件中的 所以末尾数组没有装满 需要靠close刷到文件中 要么也可以用flush())
	* BufferedInputStream fis = new BufferedInputStream(new FileInputStream("laji.jpg"));
		BufferedOutputStream fos = new BufferedOutputStream(new FileOutputStream("xixi.jpg"));
		int i;
		while((i = fis.read()) != -1) {
			fos.write(i);
		}
* E.小数组的读写和带Buffered的读取哪个更快?
	* 定义小数组如果是8192个字节大小和Buffered比较的话
	* 定义小数组会略胜一筹,因为读和写操作的是同一个数组
	* 而Buffered操作的是两个数组
###20.12_IO流(flush和close方法的区别)
* flush()方法(时时观看的时候需要flus)
	* 用来刷新缓冲区的,刷新后可以再次写出 
* close()方法
	* 用来关闭流释放资源的的,如果是带缓冲区的流对象的close()方法,不但会关闭流,还会再关闭流之前刷新缓冲区,关闭后不能再写出 

###20.13_IO流(字节流读写中文) 
* 字节流读取中文的问题
	* 字节流在读中文的时候有可能会读到半个中文,造成乱码 
* 字节流写出中文的问题
	* 字节流直接操作的字节,所以写出中文必须将字符串转换成字节数组 
	* 写出回车换行 write("\r\n".getBytes());

###20.14_IO流(流的标准处理异常代码1.6版本及其以前)  为了防止出现异常无法关流的情况 但任然要抛出异常 
* try finally嵌套

		FileInputStream fis = null; (没有赋值 无法调用 且放在外面 便于close)
		FileOutputStream fos = null;
		try {
			fis = new FileInputStream("aaa.txt");
			fos = new FileOutputStream("bbb.txt");
			int b;
			while((b = fis.read()) != -1) {
				fos.write(b);
			}
		} finally {
			try {(能关一个尽量关一个)
				if(fis != null) 
					fis.close();
			}finally {
				if(fos != null)
					fos.close();
			}

		}
###20.15_IO流(流的标准处理异常代码1.7版本)
* try close
		try(流对象的创建(里面的流对象必须实现那个接口)){
			流对象的使用 不需要写关闭 因为会自动关闭
		}
		try(
			FileInputStream fis = new FileInputStream("aaa.txt");
			FileOutputStream fos = new FileOutputStream("bbb.txt");
			MyClose mc = new MyClose();(比方说这个自定义流对象的类里面必须实现AutoCloseable这个接口)
		){
			int b;
			while((b = fis.read()) != -1) {
				fos.write(b);
			}
		}
* 原理
	* 在try()中创建的自定义流对象必须实现了AutoCloseable这个接口,如果实现了,在try后面的{}(读写代码)执行后就会自动调用,流对象的close方法将流关掉
	* 
###图片加密 
	while((b = bis.read()) != -1) {
			bos.write(b ^ 123);
		}