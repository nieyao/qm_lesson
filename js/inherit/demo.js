function Parent () {
  this.name = 'kevin';
}
// 父类，子类，prototype 属性 原型式继承
// Parent 函数？this指针 -> new Object 
// js 本没有类，只有对象 Object

//原型链对象 { } prototype ? 任何函数都可以有的属性
Parent.prototype.getName = function(){
  console.log(this.name);
}

//原型链继承
function Child () {

}
Child.prototype = new Parent();
var child1 = new Child();
// child1.name.push('yayu');
child1.getName();
console.log(child1.name)