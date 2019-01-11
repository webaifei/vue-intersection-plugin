import "intersection-observer";

const DEFAULT_DURATION = 1000;
/**
 * 检测dom元素是否出现在可视区域
 *
 * @param {*} Vue
 * @param {*} [options={}]
 */
function VueIntersection(Vue, options = {}) {
    this.default = {
        threshold: [0.5, 1], // 在漏出模块自身多少的时候执行回调
        rootMarin: "0px",
        duration: DEFAULT_DURATION, //停留时长
        deviation: 0.1 //误差
    };
    this.Vue = Vue;
    this.init(options);
}
// Vue.use 的时候 调用此方法
VueIntersection.install = function (Vue, options) {
    const $intersection = new VueIntersection(Vue, options);
    const that = $intersection;
    Vue.prototype.$intersection = $intersection;
    // 添加指令
    Vue.directive("intersection", {
        // 观察当前的dom元素
        bind (el, binding) {
            // 根据不同的参数值 进行不同的初始化
            // console.log(el, binding, "binding");
            // TODO: 支持针对不同的dom节点设置不同的配置
            // 1. 漏出多少
            // 2. 停留时长
            that.globalObserver.observe(el);
        },
        update: function update(el, binding, vnode, oldVnode) {
          // console.log(vnode,oldVnode,'update----')
          if(that.isUpdate(vnode, oldVnode)) {
            // 重新
            // console.log("update")
            el.preIntersectionRatio = undefined;
            clearTimeout(el.$$timer);
            el.$$timer = null;
            that.globalObserver.unobserve(el);
            that.globalObserver.observe(el);
          }
        },
        // 取消观察
        unbind (el, binding) {
            // console.log(binding);
            if(el.$$timer) {
              clearTimeout(el.$$timer);
            }
            that.globalObserver.unobserve(el);
        }
    });

};
// 初始化设置
VueIntersection.prototype.init = function (options) {
    if(options) {
        let {threshold} = options;
        if(typeof threshold === "number") {
            options.threshold = [threshold === 0 ? 0.01 : threshold, 1];
        }
        if(Array.isArray(threshold) && threshold[0] === 0) {
            threshold[0] = 0.01;
        }
        this.options = Object.assign({}, this.default, options);
    }
    console.log(this.options, "options");
    this._observe();
};
VueIntersection.prototype._observe = function () {
    const {handler, root, rootMargin, threshold, duration} = this.options;
    this.globalObserver = new IntersectionObserver((entries)=>{
        entries.forEach(item=> {
            // item.isIntersecting 真机测试效果 基本上都是 true 暂时无用
            // item.target
            // item.intersectionRatio
            const $el = item.target;
            // console.log("change" , "text-"+$el.innerHTML,item.intersectionRatio, $el.preIntersectionRatio);
            // 本次检测在可视区域
            if(item.intersectionRatio > threshold[0]) {
                // 没有上一次的位置 首次
                if($el.preIntersectionRatio === undefined) {
                    // 开始timer
                    this._startTimer($el, handler, duration);
                } else {
                    // 上一次不在可视区域
                    if($el.preIntersectionRatio < threshold[0]) {
                        // enter
                        // 开始 timer
                        if(!$el.timer) {
                            this._startTimer($el, handler, duration);
                        }
                    }
                    // 上一次也在可视区域
                    else {

                    }
                }

            } else { // 本次检测不在可视区域中
                // 上一次不在可视区域
                if($el.preIntersectionRatio < threshold[0]) {
                    // enter
                    // $el.preIntersectionRatio = item.intersectionRatio;
                    if(Math.abs($el.preIntersectionRatio - threshold[0])<=threshold[0]/2) {
                      _this._startTimer($el, handler, duration);
                    }
                }
                // 上一次在可视区域
                else {
                    // leave
                    // try clearTimeout
                    const timeInterval = item.time - $el.preTime;
                    // console.log(timeInterval, duration, $el.$$timer, "clear timeout")
                    if(timeInterval < duration && $el.$$timer) {
                        clearTimeout($el.$$timer);
                        $el.$$timer = null;
                    }

                }
            }
            // console.log("-----set pre",item.intersectionRatio);
            $el.preIntersectionRatio = item.intersectionRatio;
            $el.preTime = item.time;
        });
    }, {root, rootMargin, threshold});

};
/**
  判断输入的埋点是否发生了变化
 */
VueIntersection.prototype.isUpdate = function (vnode, oldVnode) {
  if(vnode && oldVnode) {
    const newLogData = vnode.data.attrs["data-log"];
    const oldLogData = vnode.data.attrs["data-log"];
    return this._isEqual(newLogData, oldLogData);
  } else {
    return false;
  }
}
VueIntersection.prototype.isUpdate = function (vnode, oldVnode) {
  if(vnode && oldVnode) {
    const newLogData = vnode.data.attrs["data-log"];
    const oldLogData = vnode.data.attrs["data-log"];
    return this._isEqual(newLogData, oldLogData);
  } else {
    return false;
  }
}
/**
  判断两个对象是否相同 只比较一级
 */
VueIntersection.prototype._isEqual = function (a, b) {
  if(isObject(a) && isObject(b)) {
    const akeys = Object.keys(a);
    const bkeys = Object.keys(b);
    if(akeys.length != bkeys.length) {
      return false
    } else {
      for(let key in a) {
        if(a[key]!=b[key]) {
          return false;
        }
      }
      return true;
    }
  } else {
    return true;
  }
}
/**
 * 添加计时器
 * @param {DOM} $el 监听的DOM元素
 * @param {Function} handler 曝光回调
 * @param {timestamp} duration 停留多长 算曝光
 */
VueIntersection.prototype._startTimer = function ($el, handler, duration) {
    $el.$$timer = setTimeout(() => {
        if(typeof handler === "function") {
            const logConfigStr = $el.dataset.log;
            try {
                let logConfig = JSON.parse(logConfigStr);
                handler(logConfig);
            } catch (error) {
                console.log(error);
            }
        }
    }, duration);
};
// 是否是纯对象
function isObject(a) {
  return Object.prototype.toString.call(a) === "[object Object]";
}
export default VueIntersection;
