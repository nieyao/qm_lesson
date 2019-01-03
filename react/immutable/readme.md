react(UI) + redux(data flow) + immutable(不可变数据) 

reducer
  switch
    case
  default
    return
只有一部分更新了，丢掉了之前没更新的大部分

深拷贝 浅拷贝
都为拷贝， 规避js 复杂对象类型引用式赋值
引用式赋值会让代码未来变得不可预测，不在单纯， 出现二义性，
结合react reducer 纯函数 引入Immutable 来确保状态对象赋值后是全新的对象， 不会影响原对象
1. 浅拷贝
  slice concat 但是解决不了非数组，如果是数组最直接
  最原始的for(key in obj) 重新赋值 没有解决不了的；

2. 嵌套对象时， 如果内部没有函数的话，JSON.parse(JSON.stringify()) 

3. 递归思想，将一个深拷贝变为n个浅拷贝，当元素不为对象时退出 性能开销大。

各有千秋， 看情况使用。
typeof obj !== 'object' return;
var newObj = obj instanceof Array ? [] : {};
for (key in obj) {
  if (obj.hasOwnProperty(key)) {
    newObj[key] = typeof obj[key] === 'object' ? deepCopy(obj[key]) : obj[key];
  }
}
return newObj;