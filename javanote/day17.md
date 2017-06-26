###set集合的set的子类HashSet
	* 也可以用增强for循环进行遍历
	* 元素不能相同 如果相同的话 添加返回值为false
###HashSet如何保证数据不重复
	* 基本数据类型或者String的话 直接就可以不重复
	* 自定义数据类型 必须重写 hashCode（）和equals（）方法
*  1.HashSet原理
	* 我们使用Set集合都是需要去掉重复元素的, 如果在存储的时候逐个equals()比较, 效率较低,哈希算法提高了去重复的效率, 降低了使用equals()方法的次数
	* 当HashSet调用add()方法存储对象的时候, 先调用对象的hashCode()方法得到一个哈希值, 然后在集合中查找是否有哈希值相同的对象
		* 了解为什么用31 质数 不大不小 好算
		* 如果没有哈希值相同的对象就直接存入集合
		* 如果有哈希值相同的对象, 就和哈希值相同的对象逐个进行equals()比较,比较结果为false就存入, true则不存
* 2.将自定义类的对象存入HashSet去重复
	* 类中必须重写hashCode()和equals()方法
	* hashCode(): 属性相同的对象返回值必须相同, 属性不同的返回值尽量不同(提高效率)
	* 哈希值万一相同 我不信邪就调用equals(): 属性相同返回true, 属性不同返回false,返回false的时候存储
###LinkedHashSet的概述和使用
	* 底层是链表实现的，是set集合中唯一一个能保证怎么存怎么取的的对象
	* 因为是HashSet的子类 所以能保证元素唯一性
	* List和Set类的集合可以互相addAll 就是各种集合都可以互相addAll  像筛子一样互相倒一倒就过滤了
###TreeSet集合是用来对象
	* TreeSet集合是用来对象元素进行排序就是比较大小的 同样也可以保证元素的唯一
	* 将要存的对象调用comparaTo方法和已存入的方法比较 每次都是从第一个根元素开始比较
	* 中序遍历 左子树  根节点  右子树
	* 自定义类型要实现Comparable接口 然后重写compareTo方法
	* 如果返回值为0则 集合内只有一个元素
	* compareTo犯法返回值为整数 则集合会怎么存怎么取 
	* 返回值为负数 则集合会按照你存的顺序倒过来 
	* TreeSet的底层是个二叉树  小的储存在左边(负数) 大的储存在右边(正数),相等就不存(0)
	* TreeSet如何储存决定于compareTo方法的返回值
	* 调用的对象的属性 - 已存入对象的属性  正数右边 负数左边 0则不存
	* compareTo内部写法理解
		int length = this.name.length() - o.name.length();
		int names = length == 0 ? this.name.compareTo(o.name):length;
		int num = names == 0? this.age - o.age:names;
		int gender1 = num == 0? this.gender.compareTo(o.gender):num;
		return gender1;

		自定义类型必须实现Comparable接口  因为TreeSet里放的是Comparable的实现类
###TreeSet对于有默认的类型实现了Comparable接口的 如何改变他原来的排序方式
	* 添加一个比较器来改变他的排序方式 （可以直接用匿名内部类实现 如果对象变量私有 要用get方式获取成员变量）
	创建一个比较器实现比较器接口Comparator 重写compare方法
	public class Comparator1 implements Comparator<String> {

	@Override
		public int compare(String o1, String o2) {
			int length = o1.length() - o2.length();
			return length == 0? o1.compareTo(o2):length;
			
		}
	}
	TreeSet添加比较器
		TreeSet<String> ts = new TreeSet<>(new Comparator1());
第一个参数的是将要存入的  第二个参数是已经存入的
###比较器排序(创建一个类实现Comparator 重写了compare方法)优先于自然排序就是(类实现Comparable接口重写compareTo方法)

