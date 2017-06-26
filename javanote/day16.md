###ArrayList中去除自定义字符串
	* contaisn()内部用equals()实现 所以重写equals()方法 contains()就可以直接判断自定义对象
	* remove底层也是依赖于equals方法 想要删除自定义对象 也必须重写equals()方法
###LinkList的特有功能
	* public void addFirst(E e)及addLast(E e)
	* public E getFirst()及getLast()
	* public E removeFirst()及public E removeLast()
	* public E get(int index);  
	* 封装模拟出栈弹栈过程
	* 需求：请用LinkedList模拟栈数据结构的集合，并测试
	* 创建一个类将Linked中的方法封装
	* 
			public class Stack {
				private LinkedList list = new LinkedList();		//创建LinkedList对象
				
				public void   in(Object obj) {
					list.addLast(obj);							//封装addLast()方法
				}
				
				public Object out() {
					return list.removeLast();					//封装removeLast()方法
				}
				
				public boolean isEmpty() {
					return list.isEmpty();						//封装isEmpty()方法
				}
			}
栈先进后出 删除和添加都要在线性表的一端 队列先进先出 都是一种操作受限的线性数据结构
###泛型
* A:泛型概述 
* B:泛型好处
	* 提高安全性(将运行期的错误转换到编译期) 
	* 省去强转的麻烦
* C:泛型基本使用
 <>中放的必须是引用数据类型 
* D:泛型使用注意事项
	* 前后的泛型必须一致,或者后面的泛型可以省略不写(1.7的新特性菱形泛型)
* 泛型类 public class 类名<泛型类型>{}  创建对象的时候赋值在声明泛型时一旦声明 该名字就变成一个无意义的标识符 例如String 
* 方法泛型必须写在所有修饰词的后面 返回值的前面
* 泛型方法最好与类的泛型一致如果不一致 要在方法上声明泛型 public<T> void show(T t) {}  主要是为了和类的泛型不一样 但是调用时直接填就行了 想写什么就写什么 
* 静态方法必须申明自己的泛型 但是不使用可以不申明 因为直接用类调用 不用创建对象 非静态的方法 是在创建对象的时候给泛型赋值的
* 泛型接口 interface Inter<T> { public void show(T t)}
	* 实现泛型接口1.class Demo implement Inter<String> {} 推荐使用
	* 实现泛型接口2.class Demo<T> implement Inter<T> {} 不推荐 没有必要在实现接口的时候给自己加泛型****
	
###16.12_集合框架(泛型高级之通配符)(了解)
	* A:泛型通配符<?>  多用于参数的泛型可以是任意的 
		* 任意类型，如果没有明确，那么就是Object以及任意的Java类了 创建对象时如果不知道右边的泛型类型为什么 左边可以用<?>
	* B:? extends E  参数泛型必须##  ##是调用对象的泛型的子类或者本身
		* 向下限定，E及其子类 * 集合加了泛型如果是子父类 可以直接addAll()  相当于父类泛值得集合内可以添加子类的集合元素
	* C:? super E
		* 向上限定，E及其父类
###增强for循环 

	* 格式for(元素数据类型 变量 : 数组或者Collection集合) {
			使用变量即可，该变量就是元素
		}
	快捷方式fore
	底层依赖迭代器
###三种迭代能否删除元素
	* 普通for循环 用get()获取元素 删除时要 list.remove(i--);
	* 使用`迭代器删除的时候 必须要用迭代器自带的remove方法 用集合的remove方法会并发修改错误
	* 增强for循环不能删除 只能遍历
###静态导入 导入静态方法
	*静态导入 包名.类名.方法名 
	* 调用直接用方法名 不需要类名调用  
	* 但是没有什么用 容易出错 
###可变参数
	* public static void print(int... arr) {}
	* 可变参数代表一个数组 但是比数组更强大  可以直接将11,22,33,44,55这类的进行封装  也可以什么都不给
	* 注意如果有多个参数  可变参数必须在末尾
###数组转集合
	* List<String> list = Arrays.asList(arr);
	* 数组转集合虽然不能增加减少元素 但是可以用集合其他的方法
	* 引用数据类型的数组会直接转换成集合 但是基本数据类型的数组会 将整个数组作为一个集合的元素储存 所以在建立基本数据类型数组的时候 定义数组的类型为包装类的数组
	* 集合转数组 String[] arr = list.toArray(new String[0]); 当数组长度小于集合size时 转换后数组长度和size一样 如果大约size 分配的数组长度大于size 和指定长度一样 
	* 或者 Object[] arr = list.toArray[]; 但是只能靠遍历去强转
###集合嵌套(ArrayList嵌套ArrayList)
	* 格式ArrayList<ArrayList<Person>> list = new ArrayList<>(); 
		  ArrayList<Person> first= new ArrayList<Person>();
	* 遍历也需要两层
		for (ArrayList<Person> al : list) {
			for (Person person : al) {
				System.out.println(person);
			}
		}
####ps
	* 1.5新特性 自动装箱  静态导入 增强fore循环 可变参数 