//index.js
const app = getApp();
const globalData = app.globalData;
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
    newadress:"",
    receiveAdrr:"您的目的地？",
    locationImg:"../../images/location.png",
    originImg:"../../images/origin.png",
    show:false,
    selected1:true,
    selected2:false
    // avatarUrl: './user-unlogin.png',
    // userInfo: {},
    // logged: false,
    // takeSession: false,
    // requestResult: ''
  },

  onLoad: function() {
    this.getLocation()
     
  },

  onShow:function(){
    this.setData({
      receiveAdrr:globalData.receiveAdrr
    })
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
      var shipAdress = globalData.address;
      this.setData({newadress : !shipAdress ?  address : shipAdress}) 
    
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
        const latitude = res.latitude
        const longitude = res.longitude
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
    // console.log(e.type)
    var that =this;
    if(globalData.address) {
      globalData.address = ""
    }
    if(e.type === "end"){
      that.fdMapCtx.getCenterLocation({
        success: res=> {
          // console.log(res.latitude,res.longitude)
          that.setData({
            newlatitude:res.latitude,
            newlongitude:res.longitude,
          })
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
    console.log("ff")
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
  }
  })
