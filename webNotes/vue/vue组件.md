# 组件

### 使用组件

* 全局注册组件  标签名
  * ```
    Vue.component('my-component',{
      template:'<button v-on:click="counter += 1">{{counter}}</button>',
      data: function() {  //组件中 data必须是函数
        return {counter:0}
      }
    });
    ```

* 局部注册

  * ```
    var Child = {
      template: '<div>A custom component!</div>'
    }
    new Vue({
      // ...
      components: {
        // <my-component> 将只在父模板可用
        'my-component': Child
      }
    })
    ```

* 对于一些默认包含的标签 可以这样使用模板

  * ```
    <table>
    	<tr is="my-row"></tr>
    </table>
    ```


#### Prop 用于传递数据

* 子组件获得父组件的数据

  * ```
    Vue.component('child', {
      // 声明 props
      props: ['myMessage'],
      // 就像 data 一样，prop 可以用在模板内
      // 同样也可以在 vm 实例中像 “this.message” 这样使用
      template: '<span>{{ message }}</span>'
    })

    <child my-message="hello!"></child>  js组件中用驼峰命名 html中用短 '
    ```

* Prop验证

  * ```
    Vue.component('example', {
      props: {
        // 基础类型检测 (`null` 意思是任何类型都可以)
        propA: Number,
        // 多种类型
        propB: [String, Number],
        // 必传且是字符串
        propC: {
          type: String,
          required: true
        },
        // 数字，有默认值
        propD: {
          type: Number,
          default: 100
        },
        // 数组/对象的默认值应当由一个工厂函数返回
        propE: {
          type: Object,
          default: function () {
            return { message: 'hello' }
          }
        },
        // 自定义验证函数
        propF: {
          validator: function (value) {
            return value > 10
          }
        }
      }
    })
    ```

  * 动态Prop `<child :my-message="parentMsg"></child>` 用v-bind绑定 且要传递真正数组时也要用v-bind绑定

#### 事件监听

* 在父组件中用v-on监听子组件用$emit抛出的事件
* 将数据绑定双向绑定 当子组件变化时父组件也变化
  * `<comp :foo.sync="bar"></comp>`  用.sync实现
  * 子组件要改变prop的值时，必须显示触发更新事件`this.$emit('update:foo', newValue)`

#### Slot分发内容

* 在子组件中添加solt插槽 当父组件在子组件中放入元素的是时候自动插入插槽 否则将会被抛弃

  * 子组件

    * ```
      <div class="container">
        <header>
          <slot name="header"></slot>
        </header>
        <main>
          <slot></slot>
        </main>
        <footer>
          <slot name="footer"></slot>
        </footer>
      </div>
      ```

  * 父组件

    * ```
      <app-layout>
        <h1 slot="header">这里可能是一个页面标题</h1>
        <p>主要内容的一个段落。</p>
        <p>另一个主要段落。</p>
        <p slot="footer">这里有一些联系信息</p>
      </app-layout>
      ```

  * 渲染结果

    * ```
      <div class="container">
        <header>
          <h1>这里可能是一个页面标题</h1>
        </header>
        <main>
          <p>主要内容的一个段落。</p>
          <p>另一个主要段落。</p>
        </main>
        <footer>
          <p>这里有一些联系信息</p>
        </footer>
      </div>
      ```

* 作用域插槽，可以将组件内的数据通过插槽对象传出来 渲染整个列表

  * 子组件·

    * ```
      <ul>
        <slot name="item"
          v-for="item in items"
          :text="item.text">
          <!-- 这里写入备用内容 -->
        </slot>
      </ul>
      ```

  * 父组件

    * ```
      <my-awesome-list :items="items">
        <!-- 作用域插槽也可以是具名的 -->
        <template slot="item" scope="props">
          <li class="my-fancy-item">{{ props.text }}</li>
        </template>
      </my-awesome-list>
      ```

#### 动态组件

* 用内置的<component>元素 绑定is特性来动态切换组件

  * ```
    var vm = new Vue({
      el: '#example',
      data: {
        currentView: 'home'
      },
      components: {
        home: { /* ... */ },
        posts: { /* ... */ },
        archive: { /* ... */ }
      }
    })
    <component v-bind:is="currentView">
      <!-- 组件在 vm.currentview 变化时改变！ -->
    </component>
    ```

  * 直接绑定

    * ```
      var Home = {
        template: '<p>Welcome home!</p>'
      }
      var vm = new Vue({
        el: '#example',
        data: {
          currentView: Home
        }
      })
      ```

  * keep-alive 把之前加载过的组件存在缓存里 下次不用重新渲染

    * ```
      <keep-alive>
        <component :is="currentView">
          <!-- 非活动组件将被缓存！ -->
        </component>
      </keep-alive>
      ```

