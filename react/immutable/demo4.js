var arr = [function () {
  console.log(a)
}, {
  b: function () {
    console.log(b);
  }
}]
var new_arr = JSON.parse(JSON.stringify(arr));
console.log(new_arr, arr)
// JSON 两个方法， 对非函数子元素， 可进行深拷贝， 性能开销比浅拷贝略大