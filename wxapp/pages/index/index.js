const app = getApp();

Page({
  data:{
    slides: [],
    entities:[]
  },
  onLoad(){
    this.setData({
      slides:app.globalData.slides,
      entities:app.globalData.vehicles
    })
    console.log(app.globalData.motto);
    
  },
  testDrive(){
    console.log('test drive');
  },
  readMore(event){
    // 小程序js api
    wx.navigateTo({
      url:`/pages/vehicles/show?id=${event.target.dataset.id}`
    })
  }
})