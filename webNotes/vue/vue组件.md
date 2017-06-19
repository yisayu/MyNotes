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