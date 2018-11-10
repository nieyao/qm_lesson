// miniprogram/pages/ReceiveAddr/ReceiveAddr.js
const app = getApp();
const globalData = app.globalData;

const QQMapWX = require('../../wxSDK/qqmap-wx-jssdk.min.js')
 
// 实例化API核心类
const fdMap = new QQMapWX({
    key: 'GB5BZ-UARAF-YCIJK-NB67C-ZOD52-P3BRR' // 必填
})
 
Page({

  /**
   * 页面的初始数据
   */
  data: {
    keyword:"",
    searchresult:[],
    scrollheight:0,
    city:""
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.onGetSuggestion();
    this.getscrollheight();
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
      city:globalData.city
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

  onGetSuggestion:function(){
    // 调用接口
  fdMap.getSuggestion({
  region:this.data.city,
  keyword: this.data.keyword,
  region_fix:1,
  success:res=> {
      // console.log(res.data);
      this.setData({
        searchresult:res.data
      })
  },
  fail: function(res) {
      // console.log(res);
  },
  complete: function(res) {
      // console.log(res);
  }
});
  },

  toindex:function(){
    wx.navigateBack({
      delta: 1
  })
  },
  
  toswitchcity:function(){
    wx.navigateTo({
      url:'../switchcity/switchcity'
    })
  },
  //实时取到搜索框的值传给keyword
  search:function(e){
    // console.log(e.detail.value)
    const keyword = e.detail.value;
    this.setData({
      keyword
    });
    this.onGetSuggestion();
  },

  getscrollheight:function(){
    wx.getSystemInfo({
      success:res=> {
        // console.log(res.windowHeight) // 获取可使用窗口高度
        const windowHeight = (res.windowHeight * (750 / res.windowWidth)); //将高度乘以换算后的该设备的rpx与px的比例
        const scrollheight = windowHeight - 106
        this.setData({
          scrollheight
        })
      }
    }) 
  },

  getlistvalue:function(e){
    // console.log(e.currentTarget.dataset.title)
    globalData.receiveAdrr = e.currentTarget.dataset.title;
    globalData.recLocation = e.currentTarget.dataset.location
    if(!globalData.shipLocation){
      globalData.shipLocation = {
        lat: globalData.currentLat,
        lng: globalData.currentLng 
      }
    }
    wx.navigateBack({
      delta: 1
  })
  }
})