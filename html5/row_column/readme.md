如何设计一个跨终端的网页栅格系统，4等分(pc),3等分(ipad),2等分(手机)

- Twitter Bootstrap 是一个自适应的前端框架，一份代码到处运行
在一个col上定义多个尺寸,media query
.col-lg-n 超大 1200px min-width
.col-md-n 中等电脑 笔记本 >1000px 1000-1200 sm
.col-sm-n ipad > 768px < 1024px
.col-xs-n 手机 < 768px max-width:767px

- .container 
  .row
  .col-${n}

- float 具有更好的兼容性
