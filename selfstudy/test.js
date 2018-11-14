// function foo(){
//   var a=1;
//   var b=1;
// }
// // var a=1,b=1;
// foo();
// console.log(a);
// console.log(b);
// foo();

// function a1(){
//    num = 5;
// }
// a1();
// console.log(num);
// var i = 0;
// console.log(i);
// for(;i<10;i++){
//   var str = '吴静怡是个傻逼'
//   console.log(str);
// }

// for (let i = 0; i < 10; i++) {
//   setTimeout(function() {console.log(i); }, 100 * i);
// }  


// var wujingyi = new Object;
// wujingyi ={
//   name:"吴婧怡",
//   IQ:-250,
//   height:155,
//   weight:155
// }
// wujingyi.EQ = 250;
// console.log(wujingyi.EQ);
// console.log(wujingyi)
// console.log(wujingyi['name']);


// var a =2;
// function foo(){
//   var a = 2;
//   bar();
// }

// function bar(){
//   console.log(this.a);
// }

// foo();


// var arr = [1,2,3,4];
// var b = arr.filter((x)=>{return x >3 });
// console.log(b)  // [4]

// var arr=["小","明","喜","欢","学","习"];
// function fn(arr){
// return arr.reduce(function(a,b){
// return a+b;
// })
// }
// console.log(fn(arr));


// function high(success,fail,complete){
//   console.log("Nieyao")                                                                                                                                                                                                                                  
// }

// const str = 'nieyao';
// console.log(typeof str)

// const arr = [1,3,5,6,78,8,2,2];
// for(let item in arr){
//   console.log(arr[item])
// }

// var  q = {
//   nickname:"hah",
//   avatarUrl:"",
//   islogin:0,
//   newaddress:"",
//   address:"",
//   receiveAdrr:"您的目的地？",//收货地
//   city:"南昌",
//   shipLocation:"",//发货地地址坐标
//   recLocation:"",//收货地地址坐标
//   currentLat:"",
//   currentLng:"",
//   distance:0,
//   price:0,
//   time:""
//   }
// for (let item in q){
//   console.log(q['item'])
// }



// function a(){
//   return 3;
// }

// const b = new a();
// console.log(Object.getPrototypeOf(b) === a.prototype)


// First, setup the generic poem creator function; it will be the callback function in the getUserInput function below.
// function genericPoemMaker(name, gender) {
//   // console.log(name + '是一个'+gender+'性')
//   console.log(name)
// }

// genericPoemMaker('nieyao','man');
//The callback, which is the last item in the parameter, will be our genericPoemMaker function we defined above.


// function getUserInput(firstName, lastName, gender, callback) {
//   var fullName = firstName + " " + lastName;

//   // Make sure the callback is a function
//   if (typeof callback === "function") {
//   // Execute the callback function and pass the parameters to it
//   callback(fullName, gender);
//   }
// }

// function greetUser(customerName, sex)  {
//   var salutation  = sex && sex === "Man" ? "Mr." : "Ms.";
//  console.log("Hello, " + salutation + " " + customerName);
// }
// getUserInput('nie','yao','Man',greetUser)