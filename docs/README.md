---
title: vue-intersection-plugin
lang: zh-CN
home: true
heroImage: 
actionText: Get Started →
actionLink: #quick-setup
features:
- title: Simple
  details: 
- title: Fast
  details: .
- title: Configurable
  details: 
footer: MIT Licensed | Copyright © 2018-present webaifei
description: 模块曝光埋点解决方案
meta:
  - name: og:title
    content: VeeValidate
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