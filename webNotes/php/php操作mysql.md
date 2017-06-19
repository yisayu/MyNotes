# MYSQL基本使用

### 基本操作

* 基本概念

  * 表 
  * 字段   属性 一列
  * 记录   每一行
  * 键   键必须不同 表示每一个唯一的记录

* 登入退出数据库

  * `mysql -u user_name -p  password -h  host`//如果要链接数据库服务器 登录
  * `quit/exit` 退出

* 建立和删除数据库

  * `create database database_name` 建立数据库
  * `drop database database_name`  删除数据库
  * `use database_name`修改数据库

* 创建表

  * ~~~
    create table users ( 
    UserId//字段名 int unsigned(无符号 就是不为负数)//数据类型 not null,
    UserName varchar(50) not null,
    Gender char(6) not null default 'male'//当输入null 赋默认值
    );
    ~~~

* 创建索引 也可以看做主键

  * 创建表时直接创建索引

    * ```
      create table yisayu (
      id int not null,
      index idx(id),
      );
      ```

  * 创建表后单独创建索引

    * ```
      create index index_name on table_name (
      	userid,
      	username
      );
      ```

  * 直接将某一个字段设为主键 当做索引

    * ```
      create table yisayu (
      id int not null primary key//设为主键
      );
      ```


***



#### sql语法基础

* `describe  yisayu`查看表结构
* 插入数据
  * `insert into  yisayu (UserId,UserName) value (1,'haha');  `
  * `insert into yisayu set UserId=1,UserName='haha'` 另一种语法
* 字段查询数据
  * `select UserId ,UserName from yisayu/select * from yisayu` 字段查询
  * `select UserId as Id from yisayu` 修改字段名 
* 条件查询
  *  `select * form yisayu  where id='haha'`  
  *  `select * form yisayu where age>22`
  *  `select * form yisayu where id='haha' or/and age>22`
* 修改更新数据
  * `update yisayu set  name='xixi' where id=1;` 将yisayu表中id为1的记录的名字改成xixi
* 删除数据
  *  `delete users where id=1; ` 
* 对查询结果排序
  * ` order by age desc` 降序 
  * `order by age asc` 升序
* 对查询结果分组
  * `group by city`  将同一个城市的分成一组`
* `limit 3`取最上面的3条记录
* `having  height>180` 在已查询取得的数据的基础上进一步查询
* 数据类型
  * int 整型
  * real 浮点类型
  * decimal 指定数字的精度和范围
  * char 定长字符串
  * varchar 变长字符串
  * text 文本类型 存放长文本类型
  * date 日期型
  * time 存放于日期无关的一天中的任何时间
  * datetime 存放时间类型和日期类型
* 模式匹配 (正则匹配)
  * `lile '%ha%'`
    * % 任意多字符
    * . 任意单字符
    * *0个或者多个字符
    * ^haha  以haha为开头的字符
* mysql函数
  * `select count(*) from users`  计算一共有2多少条记录
  * `select max/min(salary) as max_salay from emp_salary`  取最大值/最小值
  * `select sum(salay) as  total_salary form emp_salary  取该列值得和`
  * `avg()` 去平均值
  * `select length('hahahahaha')` 计算字符串长度
  * `substring('hahahahaha',4,4) `  截取从第5个字符开始的的4个字符
  * `select year(created_time) as year from users where id=3; ` 获取id为3的create_time字段年份
  * `select unix_timestamp()` 获取一个时间戳
  * `select  date_format(create_time,'xy年xm月xd日') as date form yisayu where id=3`  格式化日期
  * `select now() as time_now`  获取当前时间日期


***



# php操作MYSQL



#### 操作sql的php函数

* 连接数据库
  * `mysql_conect('localhost',$name,$password,[bool//是否在下次创建同样的链接,])`
* 关闭数据库连接  `mysql_close([$link])`
* 执行一条数据库语句  获得结果集`mysql_query(string $sql);`
* 处理结果集
  *  `mysql_affected_rows()`  取得上一次执行mysql操作影响的行数 
  *  `mysql_fetch_row($result)` 取出结果集中的一行  依次返回一行
  *  `mysql_fetch_array($result,$type) `取出一行并与数组关联 记录一行各字段值
  *  `mysql_fetch_assoc($result)` 作用同上 但直接以关联数组返回
  *  `mysql_fetch_feild($result,[$field_offset])` 返回一个字段对象,包含字段的信息
* `mysql_select_db($dataabse)` 连接了mysql数据后 ,用该方法可选择一个数据库链接
* `mysql_num_rows($result)` 用来取得结果集的行数 只对select有效
* `mysql_error()` 最近一次操作产生的错误文本