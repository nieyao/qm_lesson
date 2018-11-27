function Parent (name) {
  this.name = name;//必须传
  this.colors = ['red','blue','green'];
}
Parent.prototype.getName = function () {
  console.log(this.name);
}

function Child (name,age) {
  Parent.call(this,name); //== super()
  this.age = age;
}

Child.prototype = new Parent();
Child.prototype.constructor = Child;
Child.prototype.sayHello = function () {
  console.log(`Hi I am ${this.name},I am ${this.age} years old`);
}

var child1 = new Child('nieyao','18');
child1.colors.push('black');
console.log(child1.colors);
child1.getName();
child1.sayHello();
console.log(Child.prototype.constructor);