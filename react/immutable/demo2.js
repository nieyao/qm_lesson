var arr = ['old', 1, true, null, undefined];
var new_arr = arr.concat();//arr.slice()
new_arr[0] = 'new';
console.log(new_arr, arr);
// slice concat 数组少数返回新数组的方法 浅拷贝
// 未来为未可知 new_arr arr 一方修改，另一方就会受到影响
// js bad parts 
// Immutable 让未来可知
// reducer 纯函数
