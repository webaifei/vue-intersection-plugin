# vue-intersection-plugin
> 检测DOM节点 是否曝光 用语广告、产品曝光等统计

### install
```js
npm i vue-intersection-plugin -S
//or 
yarn add vue-intersection-plugin
```

### use
```js
import vueIntersectionPlugin from "vue-intersection-plugin";
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

### Demo

### license

MIT
