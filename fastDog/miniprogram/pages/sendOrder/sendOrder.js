// miniprogram/pages/sendOrder/sendOrder.js
const app = getApp();
const globalData = app.globalData;
Page({

  /**
   * 页面的初始数据
   */
  data: {
    markers: [],
    latitude: 23.099994,
    longitude: 113.324520
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.setData({
      markers:[
        {
          iconPath: "../../images/origin.png",
          id: 0,
          latitude: globalData.shipLocation.lat,
          longitude: globalData.shipLocation.lng,
          width: 64,
          height: 64,
          callout:{
            display:'ALWAYS',
            content:"已经通知18名司机 \n 查看详情>",
            bgColor:'#555555',
            borderRadius:5,
            color:'#ffffff',
            textAlign:"left"
          }
        }
      ],
      latitude:globalData.shipLocation.lat,
      longitude:globalData.shipLocation.lng
    })
    console.log(globalData.shipLocation.lng,this.data.markers.longitude)
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

  cancelOrder:function(){
    wx.navigateTo({
      url:'../cancelOrder/cancelOrder'
    })
  }
})