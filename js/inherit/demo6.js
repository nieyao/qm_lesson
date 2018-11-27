let A = { name: 'a'}; //JSON Object
let B = { age: 18};
let C = { hobby:'敲代码'};

A.__proto__ = B;//原型对象
B.__proto__ = C;//
console.log(A.name,A.age,A.hobby)