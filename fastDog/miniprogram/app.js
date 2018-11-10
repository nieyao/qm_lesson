//app.js
App({
  globalData:{
    nickname:"",
    avatarUrl:"",
    islogin:0,
    newaddress:"",
    address:"",
    receiveAdrr:"您的目的地？",//收货地
    city:"南昌",
    shipLocation:"",//发货地地址坐标
    recLocation:"",//收货地地址坐标
    currentLat:"",
    currentLng:"",
    distance:0,
    price:0,
    time:""
  },

  init:function(){
    console.log(this)
    this.globalData = {
      nickname:"",
      avatarUrl:"",
      islogin:0,
      newaddress:"",
      address:"",
      receiveAdrr:"您的目的地？",//收货地
      city:"南昌",
      shipLocation:"",//发货地地址坐标
      recLocation:"",//收货地地址坐标
      currentLat:"",
      currentLng:"",
      distance:0,
      price:0,
      time:""
    };
    console.log(this)
  }
  
})

