var t;
//写一个函数，不管调用多少次，只返回最早的一次计算
function foo () {
  if(t) return t;
  //一次就好
  t = new Date();
  return t;
}

console.log(foo());
setTimeout(() => {
  console.log(foo());
}, 2000);