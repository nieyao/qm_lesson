canvas  游戏及特效
小程序里canvas 大小是px  scale 
绘图API 跟web中有区别 

ctx + 绘图API 将绘制的细节封装出去
画布 wx.createCanvasContext() 跟web不一样的地方 它的实现使用了IOS/Avdroid的一套
封装？ 绘图这块封装到uitls里
canvas-id="effect"
ctx,
画布的大小  解构 width scale height 
drawEffect(width,height,scale, ...)

utils 
小程序里canvas 特效只是一部分，将它抽象封装 有利于将复杂部分隐去 适合多人合作