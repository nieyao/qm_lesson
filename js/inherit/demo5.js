function Person (name) {
  this.name = name;
}
let p = new Person('张三');
console.log(typeof Person);//function
console.log(typeof p);//object
console.log(Person.prototype);
console.log(p.prototype);
console.log(Person.prototype.constructor);
console.log(Person.__proto__);
console.log(p.__proto__ )