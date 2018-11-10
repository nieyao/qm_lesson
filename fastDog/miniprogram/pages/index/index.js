//index.js
const util = require('../../utils/util.js')
const app = getApp();
let globalData;
const QQMapWX = require('../../wxSDK/qqmap-wx-jssdk.min.js')
 
// 实例化API核心类
const fdMap = new QQMapWX({
    key: 'GB5BZ-UARAF-YCIJK-NB67C-ZOD52-P3BRR' // 必填
})

Page({
  data: {
    latitude:"",
    longitude:"",
    newlatitude:"",
    newlongitude:"",
    newaddress:"",
    receiveAdrr:"您的目的地？",
    locationImg:"../../images/location.png",
    originImg:"../../images/origin.png",
    show:false,
    selected1:true,
    selected2:false,
    shipLocation:"",
    recLocation:"",
    distance:"",
    isNext:false,
    // avatarUrl: './user-unlogin.png',
    // userInfo: {},
    // logged: false,
    // takeSession: false,
    // requestResult: ''
    carName:[
      {
        name:"小型面包",
      },
      {
        name:"中型面包",
      },
      {
        name:"小型货车",
      },
      {
        name:"大型货车",
      },
  ],
    cars:[
    {
      image:"../../images/sm-minibus.jpg",
    },
    {
      image:"../../images/mid-minibus.jpg",
    },
    {
      image:"../../images/sm-truck.jpg",
    },
    {
      image:"../../images/big-truck.jpg",
    },
  ],
  index:0,
  currentTab:0
  },

  onLoad: function() { 
    globalData = getApp().globalData;//重新获取下全局的globalData,以便成功初始化
  },

  onShow:function(){
    
    this.getLocation();
    this.setData({
      receiveAdrr:globalData.receiveAdrr,
      shipLocation:globalData.shipLocation,
      recLocation:globalData.recLocation,
      newaddress:globalData.address
    })
      
      this.getDistance();

      this.getPrice(this.data.index);
      
      console.log(globalData.distance,"nieyao")
  },

  onReady:function(){
     // 使用 wx.createMapContext 获取 map 上下文
    this.fdMapCtx = wx.createMapContext("map");
    
  },
  onGetAddress:function(){
    //获得当前位置的文字描述
    fdMap.reverseGeocoder({
      location: {
        latitude:this.data.newlatitude,
        longitude: this.data.newlongitude
    },
      success: addressRes => {
      const address = addressRes.result.formatted_addresses.recommend;
      const shipAddress = globalData.address;
      this.setData({newaddress : !shipAddress ?  address : shipAddress}) 
    
        // console.log(address)
      },
      fail: function(res) {
          // console.log(res);
      },
      complete: function(res) {
          // console.log(res);
      }
  });
  },
  onGetUserInfo: function(e) {
    if (!this.logged && e.detail.userInfo) {
      this.setData({
        logged: true,
        avatarUrl: e.detail.userInfo.avatarUrl,
        userInfo: e.detail.userInfo
      })
    }
  },

  onGetOpenid: function() {
    // 调用云函数
    wx.cloud.callFunction({
      name: 'login',
      data: {},
      success: res => {
        console.log('[云函数] [login] user openid: ', res.result.openid)
        app.globalData.openid = res.result.openid
        wx.navigateTo({
          url: '../userConsole/userConsole',
        })
      },
      fail: err => {
        console.error('[云函数] [login] 调用失败', err)
        wx.navigateTo({
          url: '../deployFunctions/deployFunctions',
        })
      }
    })
  },

  // 上传图片
  doUpload: function () {
    // 选择图片
    wx.chooseImage({
      count: 1,
      sizeType: ['compressed'],
      sourceType: ['album', 'camera'],
      success: function (res) {

        wx.showLoading({
          title: '上传中',
        })

        const filePath = res.tempFilePaths[0]
        
        // 上传图片
        const cloudPath = 'my-image' + filePath.match(/\.[^.]+?$/)[0]
        wx.cloud.uploadFile({
          cloudPath,
          filePath,
          success: res => {
            console.log('[上传文件] 成功：', res)

            app.globalData.fileID = res.fileID
            app.globalData.cloudPath = cloudPath
            app.globalData.imagePath = filePath
            
            wx.navigateTo({
              url: '../storageConsole/storageConsole'
            })
          },
          fail: e => {
            console.error('[上传文件] 失败：', e)
            wx.showToast({
              icon: 'none',
              title: '上传失败',
            })
          },
          complete: () => {
            wx.hideLoading()
          }
        })

      },
      fail: e => {
        console.error(e)
      }
    })
  },

  getLocation:function(address = ""){
    //定位到当前位置
    wx.getLocation({
      type: 'gcj02',
      success: res=> {
        const latitude = res.latitude;
        const longitude = res.longitude;
        globalData.currentLat = res.latitude;
        globalData.currentLng = res.longitude; 
        this.setData({
          latitude,
          longitude,
          newlatitude:latitude,
          newlongitude:longitude
        })
        this.onGetAddress();
      }
    })
  },

  location:function(){
    //点击回到当前位置
    this.fdMapCtx.moveToLocation();
  },

  regionchange(e) {
    //实时监听地图拖动并设置坐标
    const that =this;
    // if(globalData.address) {
    //   globalData.address = ""
    // }
    if(e.type === "end" && !globalData.distance){
      that.fdMapCtx.getCenterLocation({
        success: res=> {
          // console.log(res.latitude,res.longitude)
          that.setData({
            newlatitude:res.latitude,
            newlongitude:res.longitude,
          })
          globalData.currentLat = res.latitude;
          globalData.currentLng = res.longitude;
        }
      })
    }
    this.onGetAddress();
  },
  
  toUser:function(){
    wx.navigateTo({
      url:"../user/user"
    })
  },

  toShipAddr:function(){
    wx.navigateTo({
      url:"../ShipAddr/ShipAddr"
    })
  },

  toReceiveAddr:function(){
    wx.navigateTo({
      url:"../ReceiveAddr/ReceiveAddr"
    })
  },

  shipper:function(){
    this.setData({ show: true });
  },

  closeShipper:function(){
    this.setData({ show: false });
  },

  preventTouchMove:function(){

  },

  nextStep:function(){
    this.setData({
      isNext:true
    })
  },

  selected1:function(){
    this.setData({
      selected1:true,
      selected2:false
    })
  },

  selected2:function(){
    this.setData({
      selected1:false,
      selected2:true
    })
  },

  //计算两坐标点之间的距离

    distance: function (lat1, lng1, lat2, lng2) {
    //     lat1 = lat1 ? lat1 : this.data.newlatitude;
    //     lng1 = lng1 ? lng1 : this.data.newlongitude;
    //     lat2 = lat2 || 0;
    //     lng2 = lng2 || 0;    
        const rad1 = lat1 * Math.PI / 180.0;   
        const rad2 = lat2 * Math.PI / 180.0;   
        const a = rad1 - rad2;   
        const b = lng1 * Math.PI / 180.0 - lng2 * Math.PI / 180.0;  
        const r = 6378137;
        const distance = (r * 2 * Math.asin(Math.sqrt(Math.pow(Math.sin(a / 2), 2) + Math.cos(rad1) * Math.cos(rad2) * Math.pow(Math.sin(b / 2), 2)))).toFixed(0)
        return distance / 1000;//单位转化为公里
      },

    getDistance:function(){
      const distance = this.distance(this.data.shipLocation.lat,this.data.shipLocation.lng,this.data.recLocation.lat,this.data.recLocation.lng);
      globalData.distance = distance;
      this.setData({
        distance:globalData.distance
      })
    },

    getPrice:function(index){
      const distance = this.data.distance;
      switch (index) {
        case 0:
          if(distance<=5){
            globalData.price = 35
          }else{
            globalData.price = ((distance - 5) * 3 + 35).toFixed(0);
          } 
          break;
        case 1:
          if(distance<=5){
            globalData.price = 38
          }else{
            globalData.price = ((distance - 5) * 4 + 38).toFixed(0);
          } 
          break;
        case 2:
          if(distance<=5){
            globalData.price = 58
          }else{
            globalData.price = ((distance - 5) * 4 + 58).toFixed(0);
          } 
          break;
        case 3:
          if(distance<=5){
            globalData.price = 108
          }else{
            globalData.price = ((distance - 5) * 5 + 108).toFixed(0);
          } 
          break;
        default:
          break;
      }
       
      this.setData({
        price:globalData.price
      })
    },

    return:function(){
      this.setData({
        isNext:false
      })
    },

    toSendOrder:function(){
        const time = util.formatTime(new Date())
        globalData.time = time;
        globalData.address = this.data.newaddress;
        // console.log(globalData.time,this.data.newaddress,globalData.receiveAdrr,globalData.price)//时间 起点 终点
      wx.navigateTo({
        url:'../sendOrder/sendOrder'
      })
    },
    //swipper部分
    switchTab:function(e){
      if (this.data.currentTab === e.target.dataset.index) {
        return;
    } else {
        this.setData({
            currentTab: e.currentTarget.dataset.index,
            index:e.currentTarget.dataset.index
        })
    }
    this.getPrice(this.data.index);
  },
  
  
  swiperChange:function(e){
    // console.log( e.detail)
    if(e.detail.source == 'touch'){
      this.setData({
        currentTab: e.detail.current,
        index:e.detail.current
    })
    }
    this.getPrice(this.data.index);
  },
    next:function(e){
      // console.log(this.data.currentTab,this.data.currentTab)
       if (this.data.currentTab === this.data.index && this.data.currentTab <3 ) {
          this.setData({
            currentTab:this.data.currentTab + 1,
            index:this.data.index +1
          })
        }
       
    },
  
    last:function(e){
      if (this.data.currentTab === this.data.index && this.data.currentTab > 0 ) {
        this.setData({
          currentTab:this.data.currentTab - 1,
          index:this.data.index -1
        })
      }
    }
    
  })
