App({
  onLaunch(){
    // console.log('应用启动')
    wx.request({
      url:'https://resources.ninghao.net/wxapp-case/db.json',
      success: (response) => {
        Object.assign(this.globalData,response.data);
      }
    })
  },
  // 全局的数据 App.js 是全局的,用户的登录状态
  globalData:{
  }
})