// miniprogram/pages/set/set.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    book:[]
  },

  onLoad:function(options){
    if(options.id){
      const db = wx.cloud.database()
      db.collection("books").where({   
        _id:options.id
      }).get({
        success: res => {
          this.setData({
            book:res.data[0]//返回的是一个数组，取第一个
          })
        },
        fail: err => {
          console.log(err)
        }
      })
    }   
  },

  comfirm:function(e){
    const db = wx.cloud.database()
    let book = e.detail.value
    if(book.id == ""){
      this.add(db,book)
    }
    else{
      this.update(db,book)
    }
  },

  add:function(db,book){
    db.collection('books').add({
      data:{
        name:book.name,
        author:book.author,
        price:parseFloat(book.price)
      },
      success:res =>{
        wx.showToast({
          title:"新增记录成功"
        })
        wx.navigateTo({
          url:"../index/index"
        })
      },
      fail: err => {
        wx.showToast({
          title: '新增失败'
        })
      }
    })
  },

  update:function(db,book){
    db.collection("books").doc(book.id).update({
      data:{
        name:book.name,
        author:book.author,
        price:parseFloat(book.price)
      },
      success:res =>{
        wx.showToast({
          title:"修改记录成功"
        })
        wx.navigateTo({
          url:"../index/index"
        })
      },
      fail: err => {
        wx.showToast({
          title: '修改失败'
        })
      }
    })
  }
})
