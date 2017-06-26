###18.01_集合框架(Map集合概述和特点)
* A:Map接口概述
	* 查看API可以知道：
		* 将键映射到值的对象
		* 一个映射不能包含重复的键
		* 每个键最多只能映射到一个值
* B:Map接口和Collection接口的不同
	* Map是双列的,Collection是单列的
	* Map的键唯一,Collection的子体系Set是唯一的
	* Map集合的数据结构值针对键有效，跟值无关;Collection集合的数据结构是针对元素有效
	Set集合底层依赖Map集合
###18.02_集合框架(Map集合的功能概述)
* A:Map集合的功能概述
	* a:添加功能
		* V put(K key,V value):添加元素。
			* 如果键是第一次存储，就直接存储元素，返回null
			* 如果键不是第一次存在，就用值把以前的值替换掉，返回以前的值
	* b:删除功能
		* void clear():移除所有的键值对元素
		* V remove(Object key)：根据键删除键值对元素，并把值返回
	* c:判断功能
		* boolean containsKey(Object key)：判断集合是否包含指定的键
		* boolean containsValue(Object value):判断集合是否包含指定的值
		* boolean isEmpty()：判断集合是否为空
	* d:获取功能
		* Set<Map.Entry<K,V>> entrySet():
		* V get(Object key):根据键获取值
		* Set<K> keySet():获取集合中所有键的集合
		* Collection<V> values():获取集合中所有值的集合  是一个AbstractCollection的集合 只不过没说
	* e:长度功能 
		* int size()：返回集合中的键值对的个数 
###Map集合遍历之键找值
	* Map集合不能直接迭代
	*  一 获取键的set集合  map.keySet() 迭代器遍历set集合  然后通过键找值 map.get(key)
	*  二 用增强for循环
###Map集合的遍历之键值对对象找键和值 
	* Set<Map.Entry<String, Integer>> se  = map.entrySet();
		  Entry是Map的内部接口  将键和值封装成了Entry的对象 并储存在Set集合中  map.entrySet()相当于获取了一个Set里面存的是一个个键和值得对象
	* 写Map.Entry相当于子类对象指向父类引用 Entry表示子类对象 
	* 利用迭代器或者增强for循环 遍历每个对象 再用对象调用getValue和getKey方法集合
		Iterator<Map.Entry<String, Integer>> iter = se.iterator();
		while (iter.hasNext()) {
			Map.Entry<String,Integer> ma = iter.next(); //父类引用指向子类对象
			Entry<String.Integer> ma = iter.next((); //直接获取一个子类对象
			System.out.println(ma.getKey() + "哈哈" + ma.getValue());
		}
	* LinkedHashMap怎么存怎么取
	* TreeMap可以排序双列集合的键 自定义对象必须实现Comparable接口 或者添加比较器

###一端字符串内出现的字母的次数
	* 核心部分
			for(char c : arr) {									//遍历字符数组
				/*if(!hm.containsKey(c)) {						//如果不包含这个键
					hm.put(c, 1);								//就将键和值为1添加
				}else {											//如果包含这个键
					hm.put(c, hm.get(c) + 1);					//就将键和值再加1添加进来
				}
				
				//hm.put(c, !hm.containsKey(c) ? 1 : hm.get(c) + 1);
				Integer i = !hm.containsKey(c) ? hm.put(c, 1) : hm.put(c, hm.get(c) + 1);
						}
###HashMap嵌套
	* 每次迭代获取其中内部的键
	* for(HashMap<Student,String> h : hm.keySet() ){
	* String value = hm.get(h);
		for(Student s : h.keySet()) {
				String value1 = h.get(s);
			}
		}
	
###HashMap1.2替代Hashtable1.0区别(面试题记住)
	* 底层都是哈希算法 都是双列集合
	* 区别 1.HashMap线程不安全 效率高 jdk1.2  Hashtable线程安全的 效率低 jdk1.0
		   2.HashMap可以存储null键 null值 Hashtable不可以
###Collections工具类内部方法
	* 
		public static <T> void sort(List<T> list)
		public static <T> int binarySearch(List<?> list,T key)
		public static <T> T max(Collection<?> coll)
		public static void reverse(List<?> list)
		public static void shuffle(List<?> list)  随机置换
###斗地主原理
	* HashMap 用来给牌编号 ArrayList用来把编号打乱 TreeSet用来给序号排序
###泛型固定边界
	* 向下限定 固定上边界(放进去)
	* ? extends E
	addAll到父类泛型的集合中 
 	* 向上限定 固定下边界(拿出来)
	* ? super E
	拿出来方法比较器中比较 子类对象可以用父类的比较器  也是父类引用指向子类对象 ?范围比E大 E是TreeSet存储的类型 ?指的是比较器的类型
###集合总结
	* collection
		* List(存取有序 有索引 可以重复)
			* ArrayList 
					底层是数组实现的,线程不安全,查找和修改,增和删比较慢
			* LinkedList
				底层是链表实现的 ,线程不安全,增和删比较快,查找和修改慢
			* Vector
				底层是数组实现的,线程安全的,无论增删该查都慢
			* 查找修改多用ArrayList
			* 增和删多用LinkLis
			* 如果都多用ArrayList
		* Set()存取无需.无索引,不可以重复
			* HashSet
				底层是哈希算法实现
				LinkedHashSet
					底层是链表实现的 但也是可以保证元素的唯一 和HashSet原理一样
			* TreeSet
				底层是二叉树实现
			一般在开发中的时候不需要对储存元素排序 所以开发时候大多用HashSet
			TreeSet在面试的时候比较多 问你有几种排序方式 集中排序方式的区别 
	* Map
		* Hashmap
			底层是哈希算法,针对键唯一
			LinkedHashMap
				底层是链表,针对键
			TreeMap
				底层是二叉树算法.针对键
		* 开发中用的是HashMap比较多 除非需要对键排序