var arr = [{old: 'old'}, ['old']];
// var new_arr = arr.slice();  // 浅拷贝
var new_arr = JSON.parse(JSON.stringify(arr)); // 深拷贝
new_arr[0].old = 'new';
new_arr[1][0] = 'new';

// 深浅自知， 浅拷贝有他的应用场景， 更高效。
console.log(new_arr === arr);