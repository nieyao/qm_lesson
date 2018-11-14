var obj = {
  a:1,
  b:2,
  c:3
}

with(obj){
  a = 3;
  b = 4;
  c = 5;
}



console.log(obj.a);
 