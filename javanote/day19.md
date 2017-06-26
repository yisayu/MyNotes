###异常的概述
* java运行过程中出现的错误
###异常的分类
* 最高级的父类 Throwable 
* Error 不用学习 硬性错误 难以修改
* Exception 
	* (子类)RuntimeException(运行时异常)
	* 编译时异常
###19.02_异常(JVM默认是如何处理异常的)   
* A:JVM默认是如何处理异常的
	* main函数收到这个问题时,有两种处理方式:
	* a:自己将该问题处理,然后继续运行
	* b:自己没有针对的处理方式,只有交给调用main的jvm来处理 
	* jvm有一个默认的异常处理机制,就将该异常进行处理.  在异常出现的位置，将异常封装成对象，谁来调用这个方法就把异常对象抛给谁 一层一层往上抛 知道抛给主方法 jvm调用主方法 所以主方法把异常抛给jvm将该异常的名称,异常的信息.异常出现的位置打印在了控制台上,同时将程序停止运行 
###异常处理方式(try .......catch的方式处理异常)
* A:异常处理的两种方式
	* a:try…catch…finally
	* 	try用来检测异常的
		catch捕获异常
		finally释放资源
		* try catch catch捕获异常后后面程序继续执行
		* try catch finally 
		* try finally 
		* 如果多个异常 会直接先抓住第一个异常 直接显示
		* try后面如果更多个异常,那么小的异常方到前面 大的异常方到后面 如果大的异常放前面 那么后面的catch异常就没有意义了
		* JDK7以后处理多个异常的方式及注意事项 可以用 catch(异常一 | 异常而){}
	* b:throw

###java异常分为两大类:编译时异常(!RuntimeException) 运行异常(RuntimeException)
	* 编译时异常 (未雨绸缪异常):在编译某个程序的时候 有可能会有这样那样的异常  比如找不到文件 这样的异常就必须在编译的时候处理 如果不处理编译不通过 就是打代码的时候就出错（必须要用异常处理方式 才能编译通过 强制你考虑发生异常的时候怎么处理）
	* 运行时异常 就是运行的时候发生的错误 是程序员犯得错误 需要修改代码（可以不通过异常处理方式来 避免异常或者用异常处理方式）
###19.06_异常(Throwable的几个常见方法)
* A:Throwable的几个常见方法
	* a:getMessage()
		* 获取异常信息，返回字符串。
	* b:toString()
		* 获取异常类名+异常信息，返回字符串。
	* c:printStackTrace()(JVM默认用这种方法处理异常)打印栈轨迹
		* 获取异常类名和异常信息，以及异常出现在程序中的位置。返回值void。
###19.08_异常(throw的概述以及和throws的区别)
* A:throw的概述 （主要用来抛出异常 且终止运行或者跳转）
	* 在功能方法内部出现某种情况，程序不能继续运行，需要进行跳转时，就用throw把异常对象抛出。
* B:案例演示	
	* 分别演示编译时异常对象和运行时异常对象的抛出
* C:throws和throw的区别
	* 编译时异常的抛出 必须进行处理 运行时异常的抛出 可以处理可以不处理
	* a:throws Exception（如果是运行时异常这个可以不需要，编译时异常必须写出来）
		* 用在方法声明后面，跟的是异常类名 
		* 可以跟多个异常类名，用逗号隔开
		* 表示抛出异常，由该方法的调用者来处理 告诉调用者表示我无法处理 只能由调用者处理
	* b:throw new Exception（“dfsfd”） 要么就用try catch 处理 要么就直接在方法声明抛出
		* 用在方法体内，跟的是异常对象
		* 只能抛出一个异常对象名
		* 表示抛出异常，由方法体内的语句处理
		
###finally(作用或者特点)
* 被finally控制的的语句一定会执行 就算return 也会执行 就相当遗言 会在return临死之前 说出finally遗言
* 特殊情况 在执行fianlly之前虚拟机退出了 

* finally的作用 
	* 用于释放资源 在IO操作和数据库操作用会见到
* 面试题 final finally finalize 区别
* final 是修饰词 可以修饰类不能被继承 修饰方法不能被重写 修饰变量变味常量 只能赋值一次
* finally 是try语句中的一个语句体 不能单独使用 用来释放资源
* finalize 是object一个方法当垃圾回收器确定不存在对该对象的更多引用时 由对象的垃圾回收器调用此方法 System.gc时会调用

* 如果catch内有return语句 请问finally得代码还会执行 是在return先执行的 只不过先设定了返回路径 所以finally不能改变返回路径里面的值(重要 )  千万不要在finally里写返回语句 因为finally的作用是释放资源 是肯定会执行的 所以会覆盖try和catch的返回语句 所以这是犯罪 应该是finally先执行
int a = 1;
a = a++;
a = 2;
###自定义异常
* 写一个异常类继承Exception 或者RuntimeException 然后重写构造函数  一个需要处理 一个不需要处理
* 继承父类 然后写构造函数 就差不多了
###异常处理的注意事项及如果使用处理异常
* 注意事项  子类的异常必须比父类异常一样或者更少就是子集 而且可以是父类异常的子类
	* 子类重写父类方法重写父类方法时,子类的方法必须抛出相同的异常或抛出的是父类异常的子类(父亲坏了 儿子不能比父类更坏)
	* 如果父类抛出多个异常,子类重写父类, 只能抛出相同的异常或者是他的子类,子类不能抛出父类没有的异常
	* 如果被父类重写的方法没有异常抛出,那么子类的方法绝对不可以抛出异常,如果子类方法内有哦异常发生,那么子类只有try,不能throw
* 如果该功能内部可以将问题处理,用try,如果处理不了,交由调用者处理,则使用throw
	* 后续代码需要继续执行就用try
	* 后续代码不需要继续执行就用throws
* JDK没有对应的异常 就需要自定义异常
* try...catch 嵌套 ctrl+shift+z (try....catch 快捷键)    

###File类
 A:File类的概述
	* File更应该叫做一个路径
		* 文件路径或者文件夹路径  
		* 路径分为绝对路径和相对路径
		* 绝对路径是一个固定的路径,从盘符开始
		* 相对路径相对于某个位置,在eclipse下是指当前项目下,在dos下
 B:构造方法
	* File(String pathname)：根据一个路径得到File对象
	* File(String parent, String child):根据一个目录和一个子文件/目录得到File对象
	* File(File parent, String child):根据一个父File对象和一个子文件/目录得到File对象
###19.15_File类(File类的创建功能)
* A:创建功能
	* public boolean createNewFile():创建文件 如果存在这样的文件，就不创建了返回false
	* public boolean mkdir():创建文件夹 如果存在这样的文件夹，就不创建了
	* public boolean mkdirs():创建文件夹,如果父文件夹不存在，会帮你创建出来 创建多级文件夹
##19.16_File类(File类的重命名和删除功能)
* A:重命名和删除功能
	* public boolean renameTo(File dest):(注意里面必须是File对象)把文件重命名为指定的文件路径
	* public boolean delete():删除文件或者文件夹
* B:重命名注意事项
	* 如果路径名相同，就是改名。
	* 如果路径名不同，就是改名并剪切。
* C:删除注意事项：
	* Java中的删除不走回收站。
	* 要删除一个文件夹，请注意该文件夹内不能包含文件或者文件夹
##19.17_File类(File类的判断功能)
* A:判断功能
	* public boolean isDirectory():判断是否是目录
	* public boolean isFile():判断是否是文件
	* public boolean exists():判断是否存在
	* public boolean canRead():判断是否可读  setReadable(boolean) windows系统认为所有文件都是可读的
	* public boolean canWrite():判断是否可写 setReadable(boolean) windows系统可以设置不可以写
	* public boolean isHidden():判断是否隐藏
###19.18_File类(File类的获取功能)
* A:获取功能
	* public String getAbsolutePath()：获取绝对路径
	* public String getPath():获取路径 获取构造方法内存入的路径
	* public String getName():获取文件或者文件夹名称 
	* public long length():获取长度。字节数 文件夹不行
	* public long lastModified():获取最后一次的修改时间，毫秒值
	* public String[] list():获取指定目录下的所有文件或者文件夹的名称数组
	* public File[] listFiles():获取指定目录下的所有文件或者文件夹的File数组 

###19.20_File类(文件名称过滤器的概述及使用)
* A:文件名称过滤器的概述
	* public String[] list(FilenameFilter filter);
	*  新建匿名内部类 重写accept()方法 div为路径 name为文件名包装成File类对象
	* public File[] listFiles(FileFilter filter) 新建匿名内部类 重写accept()方法  pathname 就是File类对象

* C:源码分析
	* 带文件名称过滤器的list()方法的源码