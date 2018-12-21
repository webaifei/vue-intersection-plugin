# IntersectionObserver
> 实验特性

### 特点

### IntersectionObserver polyfill

### 内部实现
    1. 支持IntersectionObserver 直接使用
    2. 不支持的的默认 监听scroll resize MutationObserver 等事件 检测元素是否在可视区域
    3. 如果配置了POLL_INTERVAL 属性 ，将开启定时器 轮训检测
    4. 检测的函数 使用了函数节流 没100ms执行一次，并且通过setTimeout 添加在事件队列中，防止阻塞主线程。