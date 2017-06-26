##Day1
* javase 标准 javame 微型(手机)已经淘汰  javame 企业级
* 冯.诺依曼体系 电脑分为  (控制器 运算器)CPU 存储器(硬件 软件) 输入设备 输出设备
* 计算机软件(数据和指令的集合) 分为 系统软件 应用软件
* java特点 面向对象 开源 跨平台
* Jre(java runtime envirment)运行环境 jvm（虚拟机）+类库
Jdk (java development kit)开发工具 包含 jre+java开发工具包

* Bin\   Javac.exe编译器 java.exe运行工具 jar.exe打包工具 javadoc.exe文档生成工具
*  db\ 小型数据库 开发工具(掌握) 
*  Jre\ 运行环境
*  Include\ 存放一些头文件
*  Lib\ 归档包文件
*  src.zip jdk核心累的源代码 通过该文件可以查看java基础类的源代码(掌握)
*  配置环境
  *  Path里是可执行文件的路径 如exe文件 就是开发工具的路径 就是bin路径
  *  ClassPath是 运行文件的路径所在的目录 不用配置 默认当前路径
*名字格式  
  *  类名要求 不能数字开头  区分大小写 不能用关键字 符号只能用_ $ goto conts 保留字也不能用 
  *  包名要求小写,一般是公司的域名倒着写 com.heima.包的作用
  *  类或者接口 每个单词首字母大写
  *  方法和变量 一个单词 全小写 多个单词 第二个之后首字母大写
                getName maxName
  *  常量一个单词全大写 多个单词全大写下划线分开 MAX_VALUES