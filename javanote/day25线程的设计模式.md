###单例设计模式
* 保证类在内存中只有一个对象
* 如何保证类在内存中只有一个对象呢？
	* (1)控制类的创建，不让其他类来创建本类的对象。private
	* (2)在本类中定义一个本类的对象。Singleton s;
	* (3)提供公共的访问方式。  public static Singleton getInstance(){return s}
* 单例写法两种：
	* (1)饿汉式 开发用这种方式。
	* 
			//饿汉式
			class Singleton {
				//1,私有构造函数
				private Singleton(){}
				//2,创建本类对象
				private static Singleton s = new Singleton();
				//3,对外提供公共的访问方法
				public static Singleton getInstance() {
					return s;
				}
				
				public static void print() {
					System.out.println("11111111111");
				}
			}
	* (2)懒汉式 面试写这种方式。多线程的问题？(单例延迟加载模式 平时不用 面试时用)
	* 
			//懒汉式,单例的延迟加载模式
			class Singleton {
				//1,私有构造函数
				private Singleton(){}
				//2,声明一个本类的引用
				private static Singleton s;
				//3,对外提供公共的访问方法
				public static Singleton getInstance() {
					if(s == null)
						//线程1,线程2
						s = new Singleton();
					return s;
				}
				
				public static void print() {
					System.out.println("11111111111");
				}
			}

* 懒汉与饿汉区别
	* 1.饿汉浪费空间 节约时间  懒汉浪费时间 节约空间
	* 2.在多线程访问时懒汉式有可能创建多个对象  饿汉式不会
* (3)第三种格式
	* 
			class Singleton {
				private Singleton() {}
			
				public static final Singleton s = new Singleton();//final是最终的意思,被final修饰的变量不可以被更改
			}****
###Runtime类 
* 也是一个单例类
* 由一个方法 ru.exec（String）效果与dos窗口相似

###Timer类
* 计时器
* 在指定时间执行指定任务
	* Timer t = new Timer();
	* t.schedule(new TimrTask() {
		* public void run() {}
	* },Date,毫秒值);
	* 指定时间执行 第一个参数:某件任务 第二个参数:第一次时间 第三三个参数:接下来每过多久都执行一次

###两个线程之间的通信
* 1.什么时候需要通信
	* 多个线程并发执行时, 在默认情况下CPU是随机切换线程的
	* 如果我们希望他们有规律的执行, 就可以使用通信, 例如每个线程执行一次打印
* 2.怎么通信
	* 如果希望线程等待, 就调用wait() 当前线程等待 
	* 如果希望唤醒等待的线程, 就调用notify(); 随机唤醒单个等待线程
	* 这两个方法必须在同步代码中执行, 并且使用同步锁对象来调用

###25.05_多线程(三个或三个以上间的线程通信)
* 多个线程通信的问题
	* notify()方法是随机唤醒一个线程
	* notifyAll()方法是唤醒所有线程
	* JDK5之前无法唤醒指定的一个线程
	* 如果多个线程之间通信, 需要使用notifyAll()通知所有线程, 用while来反复判断条件 if不会重新判断

* 线程通信需要注意问题
	* 在同步代码中,用哪个对象锁,就用该对象调用wait和notify
	* 因为对象锁可以是任意对象 所以wait和notify定义在object类中
	* sleep方法和wait方法的区别
		* sleep方法必须传入时间参数 时间到了自动醒来
		   wait方法可以传入参数也可以不传入参数 传入参数表示在参数时间结束之后等待 不传入直接等待
		* sleep在方法在同步代码块或者同步方法中不释放锁就是会抱着锁睡 wait释放锁 等待的时候别人可以运行

###互斥锁(jdk1.5新特性)
* * 1.同步
	* 使用ReentrantLock类的lock()和unlock()方法进行同步
* 2.通信
	* 使用ReentrantLock类的newCondition()方法可以获取Condition对象(condition就是监视器)
	* 需要等待的时候使用Condition的await()方法, 唤醒的时候用signal()方法
	* 不同的线程使用不同的Condition, 这样就能区分唤醒的时候找哪个线程了

###线程组的概述和使用
* A:线程组概述
	* Java中使用ThreadGroup来表示线程组，它可以对一批线程进行分类管理，Java允许程序直接对线程组进行控制。
	* 默认情况下，所有的线程都属于主线程组。
		* public final ThreadGroup getThreadGroup()//通过线程对象获取他所属于的组
		* public final String getName()//通过线程组对象获取他组的名字
	* 我们也可以给线程设置分组
		* 1,new ThreadGroup(String name) 创建线程组对象并给其赋值名字
		* 2,创建线程对象
		* 3,Thread(ThreadGroup?group, Runnable?target, String?name)  通过构造直接放到组中
		* 4,设置整组的优先级或者守护线程

###线程的5种状态
* 线程的生命周期
	* 新建 创建了线程对象
	* 就绪 调用strat() 有执行资格 没有执行权
	* 运行 取得cpu执行权  既有执行资格也有执行权  cpu被别人抢走就转换成就绪状态
		* 阻塞 sleep() wait() 休眠结束 转换成就绪状态
	* 死亡 run()结束 stop()  线程对象变成垃圾

###线程池的概述和使用
* A:线程池概述
	* 程序启动一个新线程成本是比较高的，因为它涉及到要与操作系统进行交互。而使用线程池可以很好的提高性能，尤其是当程序中要创建大量生存期很短的线程时，更应该考虑使用线程池。线程池里的每一个线程代码结束后，并不会死亡，而是再次回到线程池中成为空闲状态，等待下一个对象来使用。在JDK5之前，我们必须手动实现自己的线程池，从JDK5开始，Java内置支持线程池
* B:内置线程池的使用概述
	* JDK5新增了一个Executors工厂类来产生线程池，有如下几个方法
		* public static ExecutorService newFixedThreadPool(int nThreads) 创建一个容量为多少的线程池
		* public static ExecutorService newSingleThreadExecutor() 单个线程池
		* 这些方法的返回值是ExecutorService对象，该对象表示一个线程池，可以执行Runnable对象或者Callable对象代表的线程。它提供了如下方法
		* Future<?> submit(Runnable task) 将线程池放入线程池中 提交线程实例
		* <T> Future<T> submit(Callable<T> task) 
		* shurdown() 关闭线程池
		* 线程池对象 ExecutorService es = Executors.newFixedThreadPool(int);
	* 使用步骤：
		* 创建线程池对象
		* 创建Runnable实例
		* 提交Runnable实例
		* 关闭线程池

###第三种线程思想方法Callable
###25.10_多线程(多线程程序实现的方式3)(了解)
* 提交的是Callable

* 
		// 创建线程池对象
		ExecutorService pool = Executors.newFixedThreadPool(2);

		// 可以执行Runnable对象或者Callable对象代表的线程
		Future<Integer> f1 = pool.submit(new MyCallable(100));
		Future<Integer> f2 = pool.submit(new MyCallable(200));

		// V get()
		Integer i1 = f1.get();
		Integer i2 = f2.get();

		System.out.println(i1);
		System.out.println(i2);

		// 结束
		pool.shutdown();

		public class MyCallable implements Callable<Integer> {

			private int number;
		
			public MyCallable(int number) {
				this.number = number;
			}
		
			@Override
			public Integer call() throws Exception {
				int sum = 0;
				for (int x = 1; x <= number; x++) {
					sum += x;
				}
				return sum;
			}
		
		}
* 多线程程序实现的方式3的好处和弊端
	* 好处：
		* 可以有返回值
		* 可以抛出异常
		
	* 弊端：
		* 代码比较复杂，所以一般不用

###简单工厂模式
* A:简单工厂模式概述
	* 又叫静态工厂方法模式，它定义一个具体的工厂类负责创建一些类的实例
* B:优点
	* 客户端不需要在负责对象的创建，从而明确了各个类的职责
* C:缺点
	* 这个静态工厂类负责所有对象的创建，如果有新的对象增加，或者某些对象的创建方式不同，就需要不断的修改工厂类，不利于后期的维护

###工厂方法模式
* A:工厂方法模式概述
	* 工厂方法模式中抽象工厂类负责定义创建对象的接口，具体对象的创建工作由继承抽象工厂的具体类实现。
* B:优点
	* 客户端不需要在负责对象的创建，从而明确了各个类的职责，如果有新的对象增加，只需要增加一个具体的类和具体的工厂类即可，不影响已有的代码，后期维护容易，增强了系统的扩展性
* C:缺点
	* 需要额外的编写代码，增加了工作量

* D:案例演示
* 
		动物抽象类：public abstract Animal { public abstract void eat(); }
		工厂接口：public interface Factory {public abstract Animal createAnimal();}
		具体狗类：public class Dog extends Animal {}
		具体猫类：public class Cat extends Animal {}
		开始，在测试类中每个具体的内容自己创建对象，但是，创建对象的工作如果比较麻烦，就需要有人专门做这个事情，所以就知道了一个专门的类来创建对象。发现每次修改代码太麻烦，用工厂方法改进，针对每一个具体的实现提供一个具体工厂。
		狗工厂：public class DogFactory implements Factory {
			public Animal createAnimal() {…}
		        }
		猫工厂：public class CatFactory implements Factory {
			public Animal createAnimal() {…}
		        }  


###25.13_GUI(如何创建一个窗口并显示)
* Graphical User Interface(图形用户接口)。
* 
		Frame  f = new Frame(“my window”);
		f.setLayout(new FlowLayout());//设置布局管理器
		f.setSize(500,400);//设置窗体大小
		f.setLocation(300,200);//设置窗体出现在屏幕的位置
		f.setIconImage(Toolkit.getDefaultToolkit().createImage("qq.png"));
		f.setVisible(true);
###25.14_GUI(布局管理器)
* FlowLayout（流式布局管理器）
	* 从左到右的顺序排列。
	* Panel默认的布局管理器。
* BorderLayout（边界布局管理器）
	* 东，南，西，北，中
	* Frame默认的布局管理器。
* GridLayout（网格布局管理器）
	* 规则的矩阵
* CardLayout（卡片布局管理器）
	* 选项卡
* GridBagLayout（网格包布局管理器）
	* 非规则的矩阵
	* 
###25.15_GUI(窗体监听)
	Frame f = new Frame("我的窗体");
	//事件源是窗体,把监听器注册到事件源上
	//事件对象传递给监听器
	f.addWindowListener(new WindowAdapter() {
	          public void windowClosing(WindowEvent e) {
	                     //退出虚拟机,关闭窗口
			System.exit(0);
		}
	});

###25.16_GUI(鼠标监听)
MouseListener
b.addMouseListener(new MOuseAdapter() {});
click 点击 释放 必须都是在按钮上
release 释放 可以在任意位置
###25.17_GUI(键盘监听和键盘事件)
KeyListener
b1.AddKeyListener(new KeyAdpter() {
});
keyReleased()
###GUI动作监听
ActionListener
actionPerForm()
鼠标 键盘 都可以用

###设计模式(适配器设计模式)
###25.19_设计模式(适配器设计模式)(掌握)
* a.什么是适配器
	* 在使用监听器的时候, 需要定义一个类事件监听器接口.
	* 通常接口中有多个方法, 而程序中不一定所有的都用到, 但又必须重写, 这很繁琐.
	* 适配器简化了这些操作, 我们定义监听器时只要继承适配器, 然后重写需要的方法即可.
* b.适配器原理
	* 适配器就是一个类, 实现了监听器接口, 所有抽象方法都重写了, 但是方法全是空的.
	* 适配器类需要定义成抽象的,因为创建该类对象,调用空方法是没有意义的
	* 目的就是为了简化程序员的操作, 定义监听器时继承适配器, 只重写需要的方法就可以了.
###25.20_GUI(需要知道的) 
* 事件处理
	* 事件: 用户的一个操作
	* 事件源: 被操作的组件
	* 监听器: 一个自定义类的对象, 实现了监听器接口, 包含事件处理方法,把监听器添加在事件源上, 当事件发生的时候虚拟机就会自动调用监听器中的事件处理方法