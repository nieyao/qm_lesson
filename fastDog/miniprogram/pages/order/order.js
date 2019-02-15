// miniprogram/pages/order/order.js
wx.cloud.init();
const app = getApp();
const globalData = app.globalData;
const db = wx.cloud.database();
const orders = db.collection('orders')
Page({

  /**
   * 页面的初始数据
   */
  data: {
    orders:[]
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
    wx.showLoading({
      title: '加载中',
    })
    this.queryOrder();
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
  queryOrder:function(){
    orders.where({
      _openid:'o-ywE5s0ZPvFzEPqqKnhaSCgXrvE'
    }).get({
      success: res=> {
        this.setData({
          orders:res.data
        })
        // console.log(res.data)
        wx.hideLoading();
      }
    })
  }
})