// var str = 'Visit Microsoft';
// console.log(str.replace('Microsoft','alibaba'));
// var money = '$$fafa$fa';
// console.log(money.replace(/\$/g,'￥')) 


let html = `abc{{username}}edfcccc`;
let reg = /\{\{(.*)\}\}/gm.test(html);
// console.log(reg.test(html),RegExp.$1);
console.log(RegExp.$1);
