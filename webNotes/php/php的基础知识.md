# php基础知识

### 数组函数 

*  `count($arr)` 计算数组的元素个数
*  `print_r($arr)` 打印数组


* 迭代数组
  * for 索引遍历
  * `foreach()` 迭代数组
    * `foreach($arr as $item){}` 遍历数组的值
    * `foreach($arr as $key=>$value)` 遍历数组的键和值


* 数组排序
  * `sort();`  顺序排序 会清除索引  `rsort() ;`倒叙排序
  * `asort();` 按照value排序 不清索引 `arsort() ;`
  * `ksort();` 按照索引排序 不清索引 `krsort();`
  * `shuffle();`随机排序
  * `array_reverse();`  将原来的元素顺序反向
* 数组指针操作
  * `reset();`  将数组指针指向第一个元素
  * `end();`  数组指针指向最后一个元素
  * `next();`  数组指针向后一位
  * `prev();` 数组指针向前一位
  * `current();` 返回指针指向的当前元素
* 数组的其他简单操作
  * 数组对变量赋值
    * `list($item.$item1) = array('ha','haha','hahaha');`直接数组前两个元素赋值给变量
  * 快速创建数组
    * `range(2,10,2)`  创建一个2到10的数组 每个元素跨度为2
  * 压入弹出数组中的元素
    * `array_push($arr,'ha','haha')`将元素填入数组中
    * `array_pop($arr)`会将数组的最后一个元素弹出  且指针直接跳到第一个元素
  * 改变数组索引的大小写
    * `array_change_key_case($arr,CASE_UPPER/CASE);`
  * 获取数组之间的交集
    * `$result = array_intersect($arr1,$arr2)` value一样的交集 
    * `$result = array_intersect($arr1,$arr2` 值和索引都要一样
  * 交换数组的索引和元素
    * `array_filp($arr) ;`
  * 快速填充数组元素
    * `array_file(2,10,'haha')` 为2-10的索引填充一个值
  * 计算元素在数组中的出现次数
    * `array_count_values($arr)` 生成一个数组 统计数组中的元素各出现了几次
  * 判断数组中的索引是否存在
    * `array_key_exists('haha',$arr)` 
  * 获取数值中的索引
    * `array_key($arr)`
  * 将数组中的每个元素遍历执行方法
    * `array_map('cube'//方法名,$arr);`
  * 其他函数
    * `in_array('haha',$arr);` 判断一个值是否存在在数组中
    * `key('haha',$arr);`   获取当前元素的索引

***



### 字符串处理

* 字符串分割合并
  * `explode(',',$str,2//分割的段数) `  分割字符串为数组 
  * `implode(',',$arr)`  将数组元素衔接成字符串
* 字符串的比较与替换
  * `strcmp($str1,$str2)` 比较两个字符串是否相同 返回bool值
  * `str_replace('str'//被替换的内容,$str1用来替换的字符串,$str2被替换的字符串);`替换部分内容
    * `str_replace('haha',$str1,$str2)` 单内容个替换
    * `str-replace($arr1,$arr2,$str)` 替换多个字词,两个数组一一对应替换
* `print($str)` 输出打印字符串
* 字符串格式化
  * `sprintf('haha%shahahah%dahahahah','haha',123)`
      * 占位符
          * %d 转换成十进制
          * %b 转换成二进制
          * %1.2f 转换成浮点数 且保留两位小数
          * %c 转换成对应的ASCLL码
          * %s转换成字符串
* `substr($str, $num1,$num2)` 截取一段字符串
* 去除字符串的空白字符'
  * `trim($str)` 去除字符串开头结尾空白字符
  * `ltrim($str)`去除字符串开头的空白字符
  * `rtrim($str)` 去除字符串后面的空白字符
* 转换字符的大小写
  * `strtoupper($str)`转大写
  * `strtolower($str)`  转小写
* 阻止字符串中的html的标签编译  <  ->   &it
  * `htmlentities($str)`
* 恢复字符串中的标签编译  &it  ->  < 
  * `html_entity_decode($str);`
* `str_repeat($str,3);`  重复生成一个字符串
* `str_pad($str,10,"*",STR_PAD_BOTH/LEFT/RIGHT)` 通过重复某一字符串来 补全字符串长度 
* `str_split($str,3)`  分割字符成数组, 不设长度 ,默认分割成单个字符
* 字符串散列加密
  * `md5($str1);` 
  * `sha1($str1);`

***



### 操作目录和文件

#### 目录操作

* 打开关闭目录
  * `$dh = opendir($path)`打开目录 获得句柄
  * `closedir($dh)` 完成文件操作关闭句柄 释放资源 
* 获取目录中下一个 目录中的文件名 `readdir($dh);` 参数为句柄
  * 输出顺序 ./../下面按文件首字符排序
  * 获取目录下的所有文件并放入数组  `scandir($path)` 参数为路径
* 修改当前php文件的位置
  * `getcwd()`获取当前php的路径
  * `chcwd($path)` 修改当前php的路径

#### 文件操作

* 打开关闭文件
  * `fopen($path,$mode);` 打开文件 获取句柄
    * mode而打开文件的模式
      * r  只读从头开始  
      * r+ 读写从头开始
      * w 只写清空文件 从头开始  没有文件 创建文件
      * w+ 读写清空文件 从头开始 没有文件 创建文件
      * a 只写 从尾部开始  没有就创建
      * a+ 读写 从尾部开始 没有就创建 
  * `close($fp);` 关闭文件句柄 释放资源
* 读取文件
  * `feof($fp)` 判断是否到文件结尾
  * `fgets($fp,10);`读取文件的一行 ,有第二个参数则获取第二个参数的长度
  * 读取整个文件
    * `readfile($path)`返回整个文件的字节数
    * `file($path)`返回一个数组 每个元素是每行的内容
    * `get_file_content` 返回整个文件的内容
* 写入文件
  * `fwrite($fp,$str,$length)` 写入文件内绒
  * `file_put_contents($path,$content)`  相当于  `fopen; fwrite(); fclose();`三合一
* 获取文件的相关信息
  * `fileowner($path) ;` 返回文件所有者`
  * `filesize($path)`获取文件大小
  * `filetype($path)`获取文件类型
* 判断文件的性质的函数
  * `is_dir($path)`判断路径是不是文件夹
  * `is_file($path)`判断路径是不是文件
  * `is_readable($path)` 判断文件是否可读
  * `is_wirtable($path)`判断文件是否是可写
* 获取路径的文件名和目录名
  * `basename($path)` 获取文件名
  * `dirname($path)`获取目录文件夹的名字
* `file_exists($path)` 判断文件是否存在
* 新建删除文件夹
  * mkdir($path); 创建文件夹
  * rmdir($path); 删除文件夹
* 新建删除赋值文件夹
  * `copy($path1,$path2)`复制文件到指定路径
  * `unlink($path)`删除文件
  * `rename($path1.$path2)`移动文件
* 文件处理的锁定(防止多个用户同时写入)


* flock($fp,[LOCK_EX]); 写锁定 只能单个人写入
  * flock($fp,[LOCK_UN]); 释放锁定 
* 更改文件属性
  * `chgrp($filename,$group)`更改文件的组
  * `chmod($file,0777)` 更改文件模式
  * `chown($path,'root');` 更改文件的所有者
* 获取文件时间属性  返回时间戳
  * `filetime($path)`返回上次访问时间
  * `filemtime($path)`返回上次文件修改的时间
  * `filectime($path)` 返回上次被inode修改的时间
* `fgetss($path);`通过http协议获取文件  且获取内容过滤掉html标签
* 在一个php文件中引入另一个php 类似js文件的引入
  * `include($path);`引入文件  文件丢失只会警告
  * `require($path);`引入文件 文件丢失整个程序出错


***




### 处理日期和时间

#### 格式化日期和时间

* `date('Y-m-d H:i:s');`   格式化实践日期
* 格式化字符
  * Y 年
  * m月
  * d 日
  * D 星期
  * H 小时
  * i 分
  * s 秒
  * ....
* UNIX时间戳 (从1970年1月1日0时开始的计算的秒数)
  * `mktime($hour,$minute,$second.$month,$day.$year)`  参数省略 就是当前的时间
  * `date('M-d-Y',mktime(....));`将时间戳转换成日分秒...
* 获取各个时间全部各个部分的信息 填入数组  并返回数组
  * `getdate([mktime(...)])`获取当前的时间信息  或时间戳的时间信息 
  * `checkdate($month,$day,$year)`  判断是否有效   



***



### 对于URL和HTTP处理

#### url地址分析

* `urlencode($str) ` 对于url进行编码 就是将url中的非数字和非字母转成 %xx 两位十六进制数
* `urldecode($str);`将其中的%xx 转换成原来的字符
* `parse_url($url)` 返回一个数组 内部包含url的各个信息
  * scheme 协议
  * host 主机ip地址和域名 
  * port 端口号
  * pass 用户名
  * pass 用户密码
  * path 访问路径
  * query 查询参数 就是更在url后面的信息
  * fragment   参数片段  

#### 生成HTTP头

* `header($str)` 标头  用于说明服务器通信的过程和通信时间 必须在一切实际输出的前面
*  获取的预定义的变量 获取头信息
  * `$_SERVER`  所有服务器头信息 数组
  * `$_HTTP_HOST` http主机
  * `$_SERVER_NAME ` 服务器名称
  * `$_SERVER_ADDR` 服务器地址
  * `$_SERVER_PORT` 服务器端口
  * `$_SERVER_PROTOCOL` 服务器协议   

#### 生成使用cookie

* `setcookie(name //cookie名,[value//cookie的值,exprire//cookie过期时间,path//有效路径,domain//有效域名,secure//https安全传输时有效])` 生成cookie

* `$_COOKIE['cookiename']` 获取cookie 

* `setcookie('mycookie[love]','yisayu');`  生成数组cookie

* `setcookie('mycookie','yisayu',time() + 60*60)/mktime(0,12,12,45,2017);`设置cookie有效期  当前1小时后 cookie失效  不设置或者设置为0 既关闭浏览器时cookie失效

* cookie默认会回送到同一目录下的页面 如果想要回送到非同一目录下的页面

  * `setcookie('mycookie','yisayu',0,'/user/');`会被回送到user目录下的所有页面

* `setcookie('mycookie','')`  删除cookie 

  ​

  ***

  ​

### 数学运算

#### 常见数学运算

* `abs($num)` 绝对值
* `ceil($num)` 天花板
* `floor($num)`地板
* `sqrt($num)` 平方根
* `round($num，1)` 四舍五入   第二个参数保留几位小数的四舍五入

#### 进制转换

* `decbin($num)` 十 到 二
* `dechex($num)` 十 到 十六
* `decoct($num)` 十 到 八
* `bindec($num)` 二 到 十
* `octdec($num)`八 到 十
* `base_convert($num,16,2)`   将num从form的进制转换到to的进制

#### 生成随机数

* `mt-rand($min,$max)`  生成随机数

***



### 获得系统信息

#### 获取添加php的环境变量

* 获取php环境变量  与 $_SERVER 效果一样
  *  `getenv('DOCUMENT_ROOT')` 环境变量 就是文件根目录
  * `getenv('SCRIPT_NAME')`当前文件
  * .....
* putenv('NAME=$env_var');

#### 查看载入的模块

* `get_load_extensions()`  返回数组
* `get_load_extensions_funcs($moudle)`   返回一个指定模块 信息

#### 获取php的各类信息

* phpinfo();  获取当前php的各类信息
* getmypid() 返回当前的的pid号
* get_current_user()返回当前程序的所有者的名称