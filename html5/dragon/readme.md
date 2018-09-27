- 手机的尺寸
px 在手机端有问题 
css 像素 px retina     750px        
硬件的物理尺寸 iphone 8 375pt  8plus 414pt

- 相对单位
rem  相对于html 上设置的font-size
em 单位 相对于自身的font-size来的
vh vw 不管任何设备 宽度100vw 高度100vh
将设备宽度的十分之一作为html的font-size，10rem等于整屏宽度，方便生成栅格系统

-inline-block
用来做布局，将block元素变得inline，跟兄弟良好相处
天生的bug, 会有间隙，来自于换行符，
1. 删除换行符
2. 父亲上font-size为0


- 自适应网页RWD
rem 相对单位，动态的生成html font-size
综合10rem方案 flexble
1. dom html 
2. 将设备宽度的十分之一给html font-size