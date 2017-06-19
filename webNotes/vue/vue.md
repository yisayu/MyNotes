###vue创造一个实例
	var vm = new Vue（{}）； 必须传参
	var mc = Vue.extend({});  var mce = new mc(); 可以扩展vue的构造器  在进行实例创建

### Vue实例会代理data对象的所有属性
	var data = {a:1}
	var vm = new Vue（{
		el:"#xxx"
		data：data;
	}）； 
		vm.a === data.a;

###Vue实例方法
	vm.$data === data;
	vm.$el === document.getElementById("#xxx");
	vm.$watch("a",function(newVal,oldVal) {});  回调函数在a变化时触发

###实例生命周期的钩子
* 生命周期的可以在实例的不同阶段执行方法 created在实例创建之后 其他钩子还有mounted，updated，destroyed....
* 
   var vm = new Vue({
   	  data: {
   	    a: 1
   	  },
   	  created: function () {
   	    // `this` 指向 vm 实例
   	    console.log('a is: ' + this.a)
   	  }
   	})
   	// -> "a is: 1"

###模板语法 指令 
* {{msg}} 在标签内用Mustache绑定数据
* v-bind：属性 = “msg” 在标签属性中这样绑定数据、
* 添加 v-once 属性  绑定的值不会更新
* 添加属性 v-html=“rawHtml” 后 会将{{msg}}中的数据解析为HTML而不是纯文本
* v-if="seen"  控制节点的显示和移除
* v-on: click = "doSomething" 监听事件
* v-on: submit.prevent="onSubmit"  事件调用时触发

###过滤器  主要用于将值格式化 
* {{msg|filters（arg1，arg2）}}  <div v-bind:id="rawId | formatId"></div> 过滤器的写法
* 
   new Vue({
   	  filters: {
   	    capitalize: function (value) {
   	      if (!value) return ''
   	      value = value.toString()
   	      return value.charAt(0).toUpperCase() + value.slice(1)
   	    }
   	  }
   	})

* 过滤器的接收的第一个参数 就是msg的值 过滤器传进来的参数将被作为第二第三参数

###缩写
* v-bind：href=“url”  ->  :href="url"
* v-on:click="xxx" -> @click="dosomething"

###计算属性：需要进行复杂运算的表达式
	  computed: {
	    // a computed getter
	    reversedMessage: function () {
	      // `this` points to the vm instance
	      return this.message.split('').reverse().join('')
	    }
	  }
	})


###method方法与计算效果相同和区别
		methods: {
		  reverseMessage: function () {
		    return this.message.split('').reverse().join('')
		  }
		}
* 区别computed存在缓存 但是对于非响应式的依赖不会更新 method 不缓存 但是对于计算量特别庞大的数据来说非常消耗资源  每次启动都会运算一遍 


###watch 属性  数据变化时触发  与vm.$watch（“msg”，function（） {}）相同
	watch： {
		msg： function() {}
	}


###getter和setter
* 数据修改和调用的时候执行  get获得的数据是返回的数据
 computed: {
   fullName: {
     // getter
     get: function () {
       return this.firstName + ' ' + this.lastName
     },
     // setter
     set: function (newValue) {
       var names = newValue.split(' ')
       this.firstName = names[0]
       this.lastName = names[names.length - 1]
     }
   }
 }


###自定义watcher  适合异步操作  （半知半解）
		var watchExampleVM = new Vue({
		  el: '#watch-example',
		  data: {
		    question: '',
		    answer: 'I cannot give you an answer until you ask a question!'
		  },
		  watch: {
		    // 如果 question 发生改变，这个函数就会运行
		    question: function (newQuestion) {
		      this.answer = 'Waiting for you to stop typing...'
		      this.getAnswer()
		    }
		  },
		  methods: {
		    // _.debounce 是一个通过 lodash 限制操作频率的函数。
		    // 在这个例子中，我们希望限制访问yesno.wtf/api的频率
		    // ajax请求直到用户输入完毕才会发出
		    // 学习更多关于 _.debounce function (and its cousin
		    // _.throttle), 参考: https://lodash.com/docs#debounce
		    getAnswer: _.debounce(
		      function () {
		        var vm = this
		        if (this.question.indexOf('?') === -1) {
		          vm.answer = 'Questions usually contain a question mark. ;-)'
		          return
		        }
		        vm.answer = 'Thinking...'
		        axios.get('https://yesno.wtf/api')
		          .then(function (response) {
		            vm.answer = _.capitalize(response.data.answer)
		          })
		          .catch(function (error) {
		            vm.answer = 'Error! Could not reach the API. ' + error
		          })
		      },
		      // 这是我们为用户停止输入等待的毫秒数
		      500
		    )
		  }
		})

###绑定class属性 
* 对象绑定两种种方法
 * 第一种 控制isActive 和hasError的真假 来控制class的值 

    <div class="static" v-bind:class="{ active: isActive, 'text-danger': hasError }"> </div> 
    	<div v-bind:class="classObject"></div>
    	data: {
 * 第二种 直接绑定 一个数据对象  由数据对象的属性来控制

    <div v-bind:class="classObject"></div>
    	data{
    	  classObject: {
    	    active: true,
    	    'text-danger': false
    	  }
    	}

* 数组语法绑定
 * 数组绑定
     <div v-bind:class="[activeClass, errorClass]">
     		data: {
     		  activeClass: 'active',
     		  errorClass: 'text-danger'
     		}
 * 三元运算绑定
  <div v-bind:class="[isActive ? activeClass : '', errorClass]">


###绑定内联属性
* 内联属性 
 * 对象语法
  * 第一种 绑定各个属性
* 
   <div v-bind:style="{ color: activeColor, fontSize: fontSize + 'px' }"></div>
   	data: {
   	  activeColor: 'red',
   	  fontSize: 30
   	}

* 第二种 绑定属性对象

   <div v-bind:style="styleObject"></div>
   	data: {
   	  styleObject: {
   	    color: 'red',
   	    fontSize: '13px'
   	  }
   	}

   * 数组语法
* 
       <div v-bind:style="[baseStyles, overridingStyles]">`


###条件渲染
* v-if=“isshow” 控制节点的显示和移除
* v-else 该节点必须跟在v-if渲染节点的后面 要不然无法识别
* v-else-if"haha > 10" 必须更在v-if或v-else-if 后面
* <template v-if="ok"></template> 控制整块结构  该元素不会被显示
   <template v-if="ok">
   	  <h1>Title</h1>
   	  <p>Paragraph 1</p>
   	  <p>Paragraph 2</p>
   	</template>
### <template v-if="ok"></template>如果内部元素一致 会进行重用
* 重用
* 
   <template v-if="loginType === 'username'">
   	  <label>Username</label>
   	  <input placeholder="Enter your username">
   	</template>
   	<template v-else>
   	  <label>Email</label>
   	  <input placeholder="Enter your email address">
   	</template>``
* 添加不同的key 禁止重用

   <template v-if="loginType === 'username'">
   	  <label>Username</label>
   	  <input placeholder="Enter your username" key="username-input">
   	</template>
   	<template v-else>
   	  <label>Email</label>
   	  <input placeholder="Enter your email address" key="email-input">
   	</template>

###v-show与v-if 区别
* v-show 通过改变元素的display 来控制元素显示
* v-if 通过销毁创建节点来控制元素   在频繁切换的场景用v-show方法


###v-for 列表渲染
* 基本用法
* 
   <ul id="example-1">
   	  <li v-for="item in items">
   	    {{ item.message }}
   	  </li>
   	</ul>
   	var example1 = new Vue({
   	  el: '#example-1',
   	  data: {
   	    items: [
   	      {message: 'Foo' },
   	      {message: 'Bar' }
   	    ]
   	  }
   	})
* 带有索引值

   <ul id="example-2">
   	  <li v-for="(item, index) in items">
   	    {{ parentMessage }} - {{ index }} - {{ item.message }}
   	  </li>
   	</ul>
   	var example2 = new Vue({
   	  el: '#example-2',
   	  data: {
   	    parentMessage: 'Parent',
   	    items: [
   	      { message: 'Foo' },
   	      { message: 'Bar' }
   	    ]
   	  }
   	})

###v-for遍历对象

		<ul id="repeat-object" class="demo">
		  <li v-for="value in object">
		    {{ value }}
		  </li>
		</ul>
		new Vue({
		  el: '#repeat-object',
		  data: {
		    object: {
		      FirstName: 'John',
		      LastName: 'Doe',
		      Age: 30
		    }
		  }
		})

* 带有 键 值得遍历

   <div v-for="(value, key) in object">
   	  {{ key }} : {{ value }}
   	</div>

###v-for 遍历整数
		<div>
		  <span v-for="n in 10">{{ n }}</span>
		</div>

###v-for key
* 为了让每一项渲染不直接复用 可以给每一项元素添加唯一的key 通常用v-for来给每一项key赋值

   <div v-for="item in items" :key="item.id">
   	  <!-- 内容 -->
   	</div>

###v-for数组
+ Vue包含数组的变异方法(改变数组的方法)
 + push()
 + pop()
 + shift()
 + unshift()
 + splice()
 + sort()
 + reverse()
+ 调用方法 example.items.push();
+ Vue中非变异方法不改变原数组 只是返回一个新的数组
 + filter()
 + concat()
 + slice() 
+ 调用方法
+ 
   example1.items = example1.items.filter(function (item) {
   	  return item.message.match(/Foo/)
   	})

+ 无法识别的方法及解决办法
 + 原方法 vm.items[indexOfItem] = newValue 通过索引给元素赋值
 + 解决办法 Vue.set(example1.items, indexOfItem, newValue)
 + 原方法 vm.items.length = newLength 改变数组长度
 + 解决办法 example1.items.splice(newLength) 


###v-on事件处理器
* 基本用法
* 
    * ~~~div id=&quot;example-2&quot;&gt;
        <!-- `greet` 是在下面定义的方法名 -->

          <button v-on:click="greet">Greet</button>
        </div>
        var example2 = new Vue({
          el: '#example-2',
          data: {
            name: 'Vue.js'
          },
          // 在 methods 对象中定义方法
          methods: {
            greet: function (event) {
              // `this` 在方法里指当前 Vue 实例
              alert('Hello ' + this.name + '!')
              // `event` 是原生 DOM 事件
              alert(event.target.tagName)
            }
          }
        })

        ~~~

        ​

        ​
* 事件修饰符
 * .stop  阻止事件冒泡 针对点击子元素冒泡到父元素
 * .prevent 阻止浏览器默认行为 例如submit提交页面加载
 * .capture 添加事件侦听器时使用事件捕获模式 
 + .self 只当事件在该元素本身（而不是子元素）触发时触发回调  针对父元素 只有自身被点击是才执行 
 + .once 只执行一次
+ 使用方法` <a v-on:click.stop.prevent="doThat"></a>`
+ 按键修饰符· 绑定键盘按钮
 + .enter
 + .tab
 + .delete (捕获 “删除” 和 “退格” 键)
 + .esc
 + .space
 + .up
 + .down
 + .left
 + .right
 + .ctrl
 + .alt
 + .shift
 + .meta  徽标键
 + 用法 `v-on:keyup.enter = "submit";`
+ 自定义按钮别名 `Vue.config.keyCodes.f1 = 112；`

###表单控件绑定
* v-model双向绑定从表单上输入的内容

* 单行绑定

   ```
   <input v-model="message" placeholder="edit me"
   <p>Message is: {{ message }}</p>
   ```

* 多行文本

   	<p style="white-space: pre">{{ message }}</p>
   	<br>
   	<textarea v-model="message" placeholder="add multiple lines"></textarea>

+ 复选框可以获得布尔值、

  ```
  <input type="checkbox" id="checkbox" v-model="checked">
  <label for="checkbox">{{ checked }}</label>
  ```
+ 多选按钮可以获得的 被选中的value值

   	
   	<input type="checkbox" id="jack" value="Jack" v-model="checkedNames">
   	<label for="jack">Jack</label>
   	<input type="checkbox" id="john" value="John" v-model="checkedNames">
   	<label for="john">John</label>
   	<input type="checkbox" id="mike" value="Mike" v-model="checkedNames">
   	<label for="mike">Mike</label>
   	<br>
   	<span>Checked names: {{ checkedNames }}</span>
   	new Vue({
   	  el: '...',
   	  data: {
   	    checkedNames: []
   	  }
   	})

+ 单选按钮

   <div id="example-4" class="demo">
   	  <input type="radio" id="one" value="One" v-model="picked">
   	  <label for="one">One</label>
   	  <br>
   	  <input type="radio" id="two" value="Two" v-model="picked">
   	  <label for="two">Two</label>
   	  <br>
   	  <span>Picked: {{ picked }}</span>
   	</div>
   	new Vue({
   	  el: '#example-4',
   	  data: {
   	    picked: ''
   	  }
   	})

+ 单选下拉菜单

   	<div id="example-5" class="demo">
   	<select v-model="selected">
   	    <option>A</option>
   	    <option>B</option>
   	    <option>C</option>
   	  </select>
   	  <span>Selected: {{ selected }}</span>
   	</div>
   	new Vue({
   	  el: '#example-5',
   	  data: {
   	    selected: null
   	  }
   	})
+ 多选下拉菜单

   	<div id="example-6" class="demo">
   	<select v-model="selected" multiple style="width: 50px">
   	    <option>A</option>
   	    <option>B</option>
   	    <option>C</option>
   	  </select>
   	  <br>
   	  <span>Selected: {{ selected }}</span>
   	</div>
   	new Vue({
   	  el: '#example-6',
   	  data: {
   	    selected: []
   	  }
   	})

###修饰符
	+ .lazy 将input事件更新 转换为change事件更新
	+ .number 将用户的输入值转为number类型
	+ .trim  将输入的首位空格去掉

