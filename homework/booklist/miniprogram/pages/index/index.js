//index.js
const app = getApp()

Page({
  data: {
    books:[],
  },

  goSet:function(){
    wx.navigateTo({
      url:"../set/set"
    })
  },

  onLoad:function(options){
    this.getbooks();
  },

  onShow:function(options){
    // 页面显示
  },

  getbooks:function(e){
    const db = wx.cloud.database()
    db.collection("books").get({
      success: res => {
        this.setData({
          books:res.data
        });

      },
      fail: err => {
        wx.showToast({
          icon:none,
          title:"查询书籍失败"
        })
      }
    })
    
  },

  onDel:function(e){
    const db = wx.cloud.database();
    let id = e.currentTarget.dataset.id
    db.collection("books").doc(id).remove({
      success: res => {
        wx.showToast({
          title:"删除成功"
        })
        this.getbooks();
      },
      fail: res => {
        wx.showToast({
          title:"删除失败"
        })
      }
    })
  },

  onUpdate:function(e){
    let id = e.currentTarget.dataset.id
    wx.navigateTo({ 
      url: `../set/set?id=${id}`
    })
  }
})
