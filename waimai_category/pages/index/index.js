Page({
  data:{
    category:[
      {
        name:"果味",
        id:"guowei"
      },
      {
        name:"蔬菜",
        id:"shucai"
      },
      {
        name:"炒货",
        id:"chaohuo"
      },
      {
        name:"点心",
        id:"dianxin"
      },
      {
        name:"粗茶",
        id:"cucha"
      },
      {
        name:"淡饭",
        id:"danfan"
      }
    ],
    curIndex:0,
    detail:[],
    isScroll:false,
    toView:''//scrollview toView功能 自动跳到某个子页面去
  },

  onReady(){
    wx.request({
      url:'http://www.gdfengshuo.com/api/wx/cate-detail.txt',
      success: res=> {
        console.log(res)
        this.setData({
          detail: res.data,
        })
      }
    })

  },

  switchTab(e){
    this.setData({
      curIndex:e.target.dataset.index,
      toView:e.target.dataset.id,
      isScroll:true
    })
  }
})