1. 分析布局+建立html结构
2. box-sizing
盒子模型在默认的时候 width height 设置是对盒子模型里的内容的设置
然而元素在页面上真正占的位置是整个的盒子模型，内容>padding>border>margin,
元素出现在页面上，其实是一个paiting绘制的原则。

如何解决？
box-sizing: border-box;
占位大小 = border+padding+content = 设置的width
width = 50% 优先border padding 占位置，余下的才是内容的。