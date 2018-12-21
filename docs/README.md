---
title: vue-intersection-plugin
lang: zh-CN
home: true
heroImage: https://webaifei.github.io/vue-intersection-plugin/assets/img/vue-insersection.png
actionText: Get Started →
actionLink:
features:
- title: 简单易用
  details: 仅仅是一个vue plugin和一个指令
- title: 非阻塞，高性能
  details: 使用IntersectionObserver（不阻塞主线程）,不支持IntersectionObserver 使用scroll+函数节流+setTimeout
- title: 稳定
  details: 严格测试
footer: MIT Licensed | Copyright © 2018-present webaifei
description: 模块曝光埋点解决方案
meta:
  - name: og:title
    content: vue-intersection-plugin
  - name: og:description
    content: 模块曝光埋点解决方案
---
# Quick Setup

## install

```bash
# install with npm
npm install vue-intersection-plugin

# install with yarn
yarn add vue-intersection-plugin
```

## Use

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