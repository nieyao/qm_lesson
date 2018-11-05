// miniprogram/pages/login/login.js
const app = getApp();
const globalData = app.globalData;
Page({
  data: {
    islogin:0,
  },
   
  onShow() {
    // 用户的授权有很多方面 scope.userInfo 
    this.getScope(this.getUserInfo, 
      ()=> {
        this.setData({
          islogin: 0
        });    
      }
    );
  },

  onHide: function () {
    scope.userInfo= null
  },
  // 高阶函数， success 参数也是一个函数，
  getScope (success, fail, name = 'scope.userInfo') {
   
      // 函数体
      wx.getSetting({
        success: (res) => {
          console.log(res)
          
          if (res.authSetting[name]) {
            success();
            res.authSetting={};
          } else {
            fail();
          }
        }
      })
  },

  getUserInfo () {
    if (!globalData.nickname || !globalData.avatarUrl) {
      // 1. wx.getUserInfo(nickname, avatar) 函数 success 
      // 2. 放到全局 函数
      this._getUserInfo((res) => {
        console.log(res);
        globalData.nickname = res.nickName;
        // console.log(this.data.nickName,"聂尧",globalData.nickname);
        globalData.avatarUrl = res.avatarUrl;
        globalData.islogin = 1
      });  
    }  
  },

  _getUserInfo (cb = () => {}) {
    wx.getUserInfo({
      //成功的回调函数
      //res返回的参数
      success: (res) => {
        //获取用户数据存在
        cb(res.userInfo);
      wx.navigateBack({
          delta: 1
      })
      },
      fail:res=>{
        wx.navigateTo({
            url:"../../pages/otherlogin/otherlogin"
        })
      } 
    })
  },
})