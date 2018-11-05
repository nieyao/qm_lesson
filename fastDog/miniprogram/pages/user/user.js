// miniprogram/pages/user/user.js
const app = getApp();
const globalData = app.globalData;
Page({

  /**
   * 页面的初始数据
   */
  data: {
    nickname:"",
    avatarUrl:"",
    islogin:0
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {
    this.setData({
    nickname:globalData.nickname,
    avatarUrl:globalData.avatarUrl,
    islogin:globalData.islogin
    })
  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  },

  navigatetoOrder:function(){
    wx.navigateTo({
      url:"../order/order"
    })
  },

  navigatetoCoupon:function(){
    wx.navigateTo({
      url:"../coupon/coupon"
    })
  },
  navigatetoDebit:function(){
    wx.navigateTo({
      url:"../debit/debit"
    })
  },
  navigatetoProtocol:function(){
    wx.navigateTo({
      url:"../protocol/protocol"
    })
  },

  calling:function(){
    wx.makePhoneCall({
      phoneNumber:"4008-909-009"
    })
  },

  toDownload:function(){
    wx.showModal({
      title:"如何下载快狗打车",
      showCancel:false,
      confirmColor:"#e5454a",
      confirmText:"我知道了",
      content:"在APP Store或者安卓应用市场搜索\"快狗打车\"即可下载使用"
    })
  },

  login:function(){
    wx.navigateTo({
      url:"../../pages/login/login"
    })
  },

  logOut:function(){
    globalData.islogin = 0;
    this.setData({
      islogin:0,
    })
    globalData.nickname = null;
    globalData.avatarUrl = null;
  }
})