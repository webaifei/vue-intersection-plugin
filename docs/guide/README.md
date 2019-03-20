### DEMO
[DEMO](https://webkong.github.io/vue-intersection-plugin/demo/)

Fork from [https://github.com/webaifei/vue-intersection-plugin](https://github.com/webaifei/vue-intersection-plugin)


### install
```js
npm i vue-intersection-plugin-revision -S
//or
yarn add vue-intersection-plugin-revision
```

### use
```js
import vueIntersectionPlugin from "vue-intersection-plugin-revision";
Vue.use(vueIntersectionPlugin, {
    handler: (logData)=> {
        // your logic code
    },
    duration: 3000, //在页面可视区域停留时长
    // threshold: []
});

// add directive
<YourComponent>
    <div
        v-intersection
        :data-log="JSON.stringify({
            //your log data
        })"
        >

    </div>
</YourComponent>
```

### Documentation

#### 配置参数
```js
Vue.use(vueIntersectionPlugin, options)
```

|prop|value| example | default |TIPS|
|---|---|---|---|---|
|root| DOM element |document.getElementById('#test')| document|其他的容器没有测试|
|handler| 满足曝光条件出发的回调 | | null ||
|threshold|dom元素在可视区域漏出多少 算曝光 [Array, Number] |0.5 or [0.5]| 0.5 |如果想要实现一进入可视区域就开始算曝光，你设置threshold:0 ,程序内部会将它充值成0.01|
|duration|在可视区域停留多长时间算曝光 [Number 单位毫秒]|1000| 1000||

#### 指令参数
TODO
#### 埋点数据
将埋点发送的数据绑定到要曝光统计的DOM元素或者是vue组件 data-log属性上
```vue
 <div
    v-intersection
    :data-log="JSON.stringify({
       module: 'test-a',
       productId: '0011'
    })"
    >
    <your-vue-component
        v-intersection
        :data-log="JSON.stringify({
           module: 'test-b',
           productId: '00111'
        })"
    />
</div>
```