// miniprogram/pages/cancelOrder/cancelOrder.js
wx.cloud.init();
const app = getApp();
const globalData = app.globalData;
const db = wx.cloud.database();
const cancelOrder = db.collection('orders')
Page({

  /**
   * 页面的初始数据
   */
  data: {
    reasons:[
      {
        reason:'计划有变，已不需要服务',
        id:0
      },
      {
        reason:'信息填写有误，需重新下单',
        id:1
      },
      {
        reason:'需要指定司机服务',
        id:2
      },
      {
        reason:'我已经找到其他车了',
        id:3
      },
    ]
      
    
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

  cancel:function(){
    //添加取消订单数据
    cancelOrder.add({
      data:{
        time:globalData.time,
        shipAddr:globalData.address,
        receiveAdrr:globalData.receiveAdrr,
        price:globalData.price,
        isdone:false
      }
    })
    app.init();
    wx.navigateTo({
      url:'../index/index'
    })
    
    // console.log(globalData.time,globalData.address,globalData.receiveAdrr,globalData.price)
  }
})