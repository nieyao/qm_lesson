1. js 本身没有类，除了基本数据类型外，只有对象。将对象的prototype链指向要继承的对象
2. prototype 是函数的属性，
3. 继承三步
  - 父类的构造函数执行一下，相当于super() 
  - prototype属性指向父类的实例。
  - 将prototype.constructor 指向构造函数

类 Parent 三部分 prototype是方法上的属性
  - 构造函数 new Fn()  { } <= this
  - 构造函数 prototype 属性 方法 对象沿着原型链去查找方法
  - 构造函数和原型链有联系的 Parent.prototype.constructor

- typeof 其实复杂数据类型只有function 和object 是语法原生支持的，其他的都是变种而已。
Function VS Object 
函数是一等对象，js 才是真正的面向对象
函数是可以被执行的对象，可以当做Object的构造函数。


- prototype 属性只属于函数
  __proto__ 函数或方法都有此私有属性

一个对象A的 __proto__ 属性指向的那个对象B,B就是A的原型对象(父对象)，A拿到B里所有的属性和方法，
也可以拿到B的原型对象C上的属性和方法，以此递归，所谓原型链。