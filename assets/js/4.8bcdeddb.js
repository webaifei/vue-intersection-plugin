(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{169:function(t,a,s){"use strict";s.r(a);var n=s(0),e=Object(n.a)({},function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("div",{staticClass:"content"},[t._m(0),t._v(" "),s("p",[s("a",{attrs:{href:"https://webaifei.github.io/vue-intersection-plugin/demo/",target:"_blank",rel:"noopener noreferrer"}},[t._v("DEMO"),s("OutboundLink")],1)]),t._v(" "),t._m(1),t._v(" "),t._m(2),t._m(3),t._v(" "),t._m(4),t._m(5),t._v(" "),t._m(6),t._v(" "),t._m(7),t._m(8),t._v(" "),t._m(9),t._v(" "),s("p",[t._v("TODO")]),t._v(" "),t._m(10),t._v(" "),s("p",[t._v("将埋点发送的数据绑定到要曝光统计的DOM元素或者是vue组件 data-log属性上")]),t._v(" "),t._m(11)])},[function(){var t=this.$createElement,a=this._self._c||t;return a("h3",{attrs:{id:"demo"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#demo","aria-hidden":"true"}},[this._v("#")]),this._v(" DEMO")])},function(){var t=this.$createElement,a=this._self._c||t;return a("h3",{attrs:{id:"install"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#install","aria-hidden":"true"}},[this._v("#")]),this._v(" install")])},function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("div",{staticClass:"language-js extra-class"},[s("pre",{pre:!0,attrs:{class:"language-js"}},[s("code",[t._v("npm i vue"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v("intersection"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v("plugin "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),s("span",{pre:!0,attrs:{class:"token constant"}},[t._v("S")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//or")]),t._v("\nyarn add vue"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v("intersection"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v("plugin\n")])])])},function(){var t=this.$createElement,a=this._self._c||t;return a("h3",{attrs:{id:"use"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#use","aria-hidden":"true"}},[this._v("#")]),this._v(" use")])},function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("div",{staticClass:"language-js extra-class"},[s("pre",{pre:!0,attrs:{class:"language-js"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("import")]),t._v(" vueIntersectionPlugin "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("from")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"vue-intersection-plugin"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\nVue"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("use")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("vueIntersectionPlugin"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    handler"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("logData"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=>")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// your logic code")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    duration"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("3000")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//在页面可视区域停留时长")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// threshold: []")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// add directive")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v("YourComponent"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v("div\n        v"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v("intersection\n        "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("data"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v("log"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v('"'),s("span",{pre:!0,attrs:{class:"token constant"}},[t._v("JSON")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("stringify")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n            "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//your log data")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v('"\n        '),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v("\n\n    "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v("div"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v("YourComponent"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v("\n")])])])},function(){var t=this.$createElement,a=this._self._c||t;return a("h3",{attrs:{id:"documentation"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#documentation","aria-hidden":"true"}},[this._v("#")]),this._v(" Documentation")])},function(){var t=this.$createElement,a=this._self._c||t;return a("h4",{attrs:{id:"配置参数"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#配置参数","aria-hidden":"true"}},[this._v("#")]),this._v(" 配置参数")])},function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("div",{staticClass:"language-js extra-class"},[s("pre",{pre:!0,attrs:{class:"language-js"}},[s("code",[t._v("Vue"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("use")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("vueIntersectionPlugin"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" options"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])])])},function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("table",[s("thead",[s("tr",[s("th",[t._v("prop")]),t._v(" "),s("th",[t._v("value")]),t._v(" "),s("th",[t._v("example")]),t._v(" "),s("th",[t._v("default")]),t._v(" "),s("th",[t._v("TIPS")])])]),t._v(" "),s("tbody",[s("tr",[s("td",[t._v("root")]),t._v(" "),s("td",[t._v("DOM element")]),t._v(" "),s("td",[t._v("document.getElementById('#test')")]),t._v(" "),s("td",[t._v("document")]),t._v(" "),s("td",[t._v("其他的容器没有测试")])]),t._v(" "),s("tr",[s("td",[t._v("handler")]),t._v(" "),s("td",[t._v("满足曝光条件出发的回调")]),t._v(" "),s("td"),t._v(" "),s("td",[t._v("null")]),t._v(" "),s("td")]),t._v(" "),s("tr",[s("td",[t._v("threshold")]),t._v(" "),s("td",[t._v("dom元素在可视区域漏出多少 算曝光 [Array, Number]")]),t._v(" "),s("td",[t._v("0.5 or [0.5]")]),t._v(" "),s("td",[t._v("0.5")]),t._v(" "),s("td",[t._v("如果想要实现一进入可视区域就开始算曝光，你设置threshold:0 ,程序内部会将它充值成0.01")])]),t._v(" "),s("tr",[s("td",[t._v("duration")]),t._v(" "),s("td",[t._v("在可视区域停留多长时间算曝光 [Number 单位毫秒]")]),t._v(" "),s("td",[t._v("1000")]),t._v(" "),s("td",[t._v("1000")]),t._v(" "),s("td")])])])},function(){var t=this.$createElement,a=this._self._c||t;return a("h4",{attrs:{id:"指令参数"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#指令参数","aria-hidden":"true"}},[this._v("#")]),this._v(" 指令参数")])},function(){var t=this.$createElement,a=this._self._c||t;return a("h4",{attrs:{id:"埋点数据"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#埋点数据","aria-hidden":"true"}},[this._v("#")]),this._v(" 埋点数据")])},function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("div",{staticClass:"language-vue extra-class"},[s("pre",{pre:!0,attrs:{class:"language-vue"}},[s("code",[t._v(" "),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("div")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("v-intersection")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v(":data-log")]),s("span",{pre:!0,attrs:{class:"token attr-value"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("JSON.stringify({\n       module: "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("'")]),t._v("test-a"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("'")]),t._v(",\n       productId: "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("'")]),t._v("0011"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("'")]),t._v("\n    })"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("your-vue-component")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("v-intersection")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v(":data-log")]),s("span",{pre:!0,attrs:{class:"token attr-value"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("JSON.stringify({\n           module: "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("'")]),t._v("test-b"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("'")]),t._v(",\n           productId: "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("'")]),t._v("00111"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("'")]),t._v("\n        })"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("/>")])]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("div")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n")])])])}],!1,null,null,null);e.options.__file="README.md";a.default=e.exports}}]);