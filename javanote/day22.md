###22.01_IO流(序列流)(了解)
	创建输出流对象的时候如果不写ture就会清空源文件的内容
* 1.什么是序列流 只能整合输入流
	* 序列流可以把多个字节输入流整合成一个, 从序列流中读取数据时, 将从被整合的第一个流开始读, 读完一个之后继续读第二个, 以此类推.
* 2.使用方式
	* 整合两个: SequenceInputStream(InputStream, InputStream)
	* 整合两个以上
		Vector<InputStream> v = new Vector<>();					//创建vector集合对象
		v.add(fis1);											//将流对象添加
		v.add(fis2);
		v.add(fis3);
		Enumeration<InputStream> en = v.elements();				//获取枚举引用
		SequenceInputStream sis = new SequenceInputStream(en);
###22.03_IO流(内存输出流*****)(掌握)
* 1.什么是内存输出流
	* 该输出流可以向内存中写数据, 把内存当作一个缓冲区, 写出之后可以一次性获取出所有数据
	* 内存输出流 不需要关流 因为不是真正意义上的IO流 只是把数据 读到一个数组里面 作为缓冲区
* 2.使用方式
	* 创建对象: new ByteArrayOutputStream()
	* 写出数据: write(int), write(byte[])
	* 获取数据: toByteArray() 然后 new String(arr);或者用toString方法 直接打印也可以
		FileInputStream fis = new FileInputStream("a.txt");
			ByteArrayOutputStream baos = new ByteArrayOutputStream();
			int b;
			while((b = fis.read()) != -1) {
				baos.write(b);
			}
			
###22.05_IO流(对象操作流ObjecOutputStream)(了解) 
* 要写出的对象必须实现Serializable接口才能被序列化 说明这个类的对象可以被序列化
* 1.什么是对象操作流
	* 该流可以将一个对象写出, 或者读取一个对象到程序中. 也就是执行了序列化和反序列化的操作.
	* 序列化:只有对象储存到文件中 才能算序列化,其他的内容从内存到硬盘 只能叫输出 把对象从硬盘读取到内存中 叫反序列化 
	* 序列化条件  需要序列化的对象所存在的类 必须实现一个接口:Serializable
* 2.使用方式
	* 写出: new ObjectOutputStream(OutputStream), writeObject()
###22.06_IO流(对象操作流ObjectInputStream)(了解)
* 读取: new ObjectInputStream(InputStream), readObject()
* 读入的是object类型 所以一般需要强转

###对象操作流优化 
	* 写出     
	* 如果存了两个 取得次数过多 就会报错 EOFException end of file
	ObjectOutputStream oos = new ObjectOutputStream(new FileOutputStream("f.txt"));
	oos.writeObject(new Person(.....));	
	oos.writeObject(list);	
	* 读入	
		ObjectInputStream ois = new ObjectInputStream(new FileInputStream("f.txt"));
			ArrayList<Person> list = (ArrayList<Person>)ois.readObject();	//泛型在运行期会被擦除,索引运行期相当于没有泛型
																			//想去掉黄色可以加注解					@SuppressWarnings("unchecked")
			for (Person person : list) {
				System.out.println(person);
			}
		
		ois.close();


###加Id号的作用
	* 主要用来表示版本号 以便于出错后 可以查看问题


###IO流(打印流的概述和特点)(掌握)
*  1.什么是打印流(只操作数据目的)
	* 该流可以很方便的将对象的toString()结果输出, 并且自动加上换行, 而且可以使用自动刷出的模式
	* System.out就是一个PrintStream, 其默认向控制台输出信息 字节流

			PrintStream ps = System.out;
			ps.println(97);					//其实底层用的是Integer.toString(x),将x转换为数字字符串打印
			ps.println("xxx"); 				//System.out.println();
			ps.write(97); 			会去查表 打印a
* 2.使用方式
	* 打印: print(), println()  字符流
	* 自动刷出: PrintWriter(OutputStream out, boolean autoFlush) 
	* 打印流只操作数据目的

			PrintWriter pw = new PrintWriter(new FileOutputStream("g.txt"), true);
			pw.write(97);
			pw.print("大家好");
			pw.println("你好");				//自动刷出,只针对的是println方法 指的就是在没有close的情况下 会自动刷出缓存区的字符
			pw.close();
###两种方式的键盘录入
*  A:BufferedReader的readLine方法。
	 BufferedReader br = new BufferedReader(new InputStreamReader(System.in));
	 System.out.println(br.readline());
* B:Scanner

###IO流(标准输入输出流概述和输出语句)
* 1.什么是标准输入输出流(掌握)
	* System.in是InputStream, 标准输入流, 默认可以从键盘输入读取字节数据(一个方法里只能有一个输入流 关掉就开不起来了  不需要关流 因为不与文件关联)
	* System.out是PrintStream, 标准输出流, 默认可以向Console中输出字符和字节数据
* 2.修改标准输入输出流(了解) 
	* 修改输入流: System.setIn(InputStream)
	* InputStream is = System.in; 默认指向键盘  改变后指向文件
	* 修改输出流: System.setOut(PrintStream)
	* PrintStream os = System.out; 默认指向控制台 改变后指向文件
	* 这种拷贝的方式不推荐 一般用FileInoutStream

###22.12_IO流(随机访问流概述和读写数据)(了解)
* A:随机访问流概述 
	* RandomAccessFile概述
	* RandomAccessFile类不属于流，是Object类的子类。但它融合了InputStream和OutputStream的功能。
	* 支持对随机访问文件的读取和写入。
	* RandomAccessFile raf = new RandonAccessFile(File file,rw);
	* * B:read(),write(),seek()设定指针 确定读写位置 (多线程下载 提高效率)

###22.13_IO流(数据输入输出流)(了解)
* 1.什么是数据输入输出流
	* DataInputStream, DataOutputStream可以按照基本数据类型大小读写数据
	* 例如按Long大小写出一个数字, 写出时该数据占8字节. 读取的时候也可以按照Long类型读取, 一次读取8个字节..
* 2.使用方式
	* DataOutputStream(OutputStream), writeInt(), writeLong() 

			DataOutputStream dos = new DataOutputStream(new FileOutputStream("b.txt"));
			dos.writeInt(997);
			dos.writeInt(998);
			dos.writeInt(999);
			
			dos.close();
	* DataInputStream(InputStream), readInt(), readLong()

			DataInputStream dis = new DataInputStream(new FileInputStream("b.txt"));
			int x = dis.readInt();
			int y = dis.readInt();
			int z = dis.readInt();
			System.out.println(x);
			System.out.println(y);
			System.out.println(z);
			dis.close();
###22.14_IO流(Properties的概述和作为Map集合的使用)(了解)
* A:Properties的概述(是HashTable的子集) 一般作为配置文件
	* Properties 类表示了一个持久的属性集。
	* Properties 可保存在流中或从流中加载。
	* 属性列表中每个键及其对应值都是一个字符串。 

###22.15_IO流(Properties的特殊功能使用)(了解)
* A:Properties的特殊功能
	* public Object setProperty(String key,String value)(和put方法差不多  用于添加设置元素 存在就覆盖 不存在就添加)
	* public String getProperty(String key)(用键查找值get())
	* public Enumeration<String> stringPropertyNames()(获取键的集合相当于keySet()) 

###22.16_IO流(Properties的load()和store()功能)(了解)
	Pro
	* load(new FileInputStream(File))主要是把内容导到Properties的集合中
	* 用setProperty来修改 已存在就修改 不存在就添加
	* store(new FileOutputStream(File),String 是对参数列表的描述可以给值也可以给null )主要是把内容写到文件上中