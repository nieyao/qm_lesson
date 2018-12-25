//写一个函数，不管调用多少次，只返回最早的一次计算
var foo = (function () {
  var t;
  return function () {
    if (t) return t;
    t = new Date();
    return t;
  }
})();

console.log(foo());
setTimeout(() => {
  console.log(foo());
}, 2000);