const app = getApp()
const globalData = app.globalData

Page({
  data: {
    auth: -1
  },
  onLoad (options) {
    // 高阶函数 scope 
    // 用户之前就已前同意了， success this.getUserInfo
    // fail ()=>{}  还未同意即为授权
    this.getScope(this.getUserInfo, () => {
      console.log("fail");
      this.setData({
        auth: 0
      });
    });
  },
  //getUserInfo有
      //授权或曾经授权就调用最外面的success
          //授权成功的success包含一个获取openid的success回调函数和获取openid的fail回调函数
      //拒绝授权就调用最外面的fail
  getUserInfo (data) {
    console.log(data);
    // 两种情况来到这  未授权点击了按钮的， data里应该有userInfo, 之前已经授权， globalData 
    console.log("getUserInfo",globalData.nickname,globalData.avatarUrl,!globalData.nickname,!globalData.avatarUrl);
    if (!globalData.nickname || globalData.avatarUrl) {
      wx.getUserInfo({
        success: (res) => {
          // success
          console.log(res);
          this.setData({
            nickname: res.userInfo.nickName,
            avatarUrl: res.userInfo.avatarUrl
          })
          globalData.nickname = res.nickname
          globalData.avatarUrl = res.avatarUrl
          let openid = wx.getStorageSync('openid');
          console.log(!openid,"openid")
          if (openid) {
          } else {
            this.getUserOpenId(() => {
              //获取openid成功

            }, () => {
              //获取openid失败
              // 再登录一次
              this.setData({
                auth: 0
              })
            })
          }
          
        },
        fail: ()=> {
          console.log("拒绝授权")
        }
      })
    } else {
      console.log("名字为空")
    }

  },
  getUserOpenId (success, fail) {
    console.log('getUserOpenId');
    wx.login({
      success: (res) => {
        console.log(res);
        wx.cloud.callFunction({
          name: 'jscode2session', 
          data: {
            code: res.code
          },
          success: (res) => {
            console.log(res);
            let { openid = '', session_key = '' }  = res.result

            wx.setStorage({
              key: 'openid',
              data: openid,
            })
          }
        })
        
      }
    })
  },
  // 获取用户许可范围, 得到范围 该干嘛干嘛
  // success type function fail function 失败
  // es6 
  getScope (success, fail, name = 'scope.userInfo') {
    // success('admin');
    
    wx.getSetting({
      success: (res) => {
        console.log(res);
        if (res.authSetting[name]) {
          console.log(res.authSetting[name])
          // 用户允许获取基本信息
          typeof success === 'function' && success(); // success 为getUserInfo
        } else {
          typeof fail === 'function' && fail()
        }
      }
    })
  }
})
