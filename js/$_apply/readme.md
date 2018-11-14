- 性能优化
scipt 标签 阻塞性 src 下载代码或行内的js 并执行 不要放在头部
页面的显示 painting 绘制 排列 重绘重排
生命周期 window.onload document.DOMContentLoaded

js 开始 不要阻止dom的绘制 但是也不要等到window.onload
DOMContentLoaded  dom ready img

- $(callback)
jquery $第一种使用用途是dom ready 事件

$(function()){
  //js here
}

$(selector) 用于选择元素
动态页面
可以不用等数据取出来 先显示页面，再去取数据，快得多