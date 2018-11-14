function foo(a){
  var b = a * 2;
  function bar(c){
    console.log(a,b,c);
  }
  bar (b * 3);
}
foo(2);                         
// console.log(c);
