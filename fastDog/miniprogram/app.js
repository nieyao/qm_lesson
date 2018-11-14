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
  defaultData: {
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
    for(let key in this.defaultData) {
      this.globalData[key] = this.defaultData[key]
    }
  }



  // init(){
  //   for(var key in this.globalData){
  //     delete this.globalData[key]; 初始化
  //     }
  // }
  
})

