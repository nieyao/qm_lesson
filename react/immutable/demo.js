let obj1 = { a: 1, b: 2, c: 3};
let obj2 = obj1;
obj2.b = 4;
console.log(obj2);
console.log(obj1);
console.log(obj1 === obj2);