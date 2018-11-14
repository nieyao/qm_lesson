// miniprogram/pages/completeOrder/completeOrder.js
wx.cloud.init();
const app = getApp();
const globalData = app.globalData;
const db = wx.cloud.database();
const completeOrder = db.collection('orders')
Page({

  /**
   * 页面的初始数据
   */
  data: {
    reasons:[
      {
        reason:'老司机，技术牛比，速度快',
        id:0
      },
      {
        reason:'稳如老狗不出事',
        id:1
      },
      {
        reason:'服务态度好',
        id:2
      },
      {
        reason:'一般般，不是很满意',
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

  switchTab:function(e){
    console.log(e);
    console.log( e.currentTarget.dataset.index,e.currentTarget.dataset.id);
    this.setData({
      index:e.currentTarget.dataset.index,
      id:e.currentTarget.dataset.id
    })
  },

  complete:function(){
    //添加完成订单数据
    completeOrder.add({
      data:{
        time:globalData.time,
        shipAddr:globalData.address,
        receiveAdrr:globalData.receiveAdrr,
        price:globalData.price,
        isdone:true
      }
    })
    app.init();//返回首页并初始化globalData
    wx.navigateTo({
      url:'../index/index'
    })
  }

})