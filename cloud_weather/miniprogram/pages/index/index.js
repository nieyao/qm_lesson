wx.cloud.init({
  env:'nieyao-064412'
})

const db = wx.cloud.database();
const _ = db.command;
const productsCollection = db.collection('products')
Page({
  onPullDownRefresh:function(){
    productsCollection.get().then(res =>{
      this.setData({
        products:res.data
      },res =>{
        console.log('数据更新完成')
        wx.stopPullDownRefresh();
      })
    })
  },

  onReachBottom:function(){
    console.log('上拉下载更多');
  },

  data:{
    page:1,
    products:[]
  },

  onLoad:function(){
    productsCollection
      .get()
      .then(res =>{
        this.setData({
          products:res.data
        })
      })
  },

  click:function(event){
    // update view + 1 doc 一条记录
    // database<-collection<-document
    productsCollection.doc(event.currentTarget.dataset.id)
    .update({
      data:{
        view:_.inc(1)
      }
    })
  }
})