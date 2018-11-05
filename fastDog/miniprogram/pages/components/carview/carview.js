// components/carview.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {

  },

  /**
   * 组件的初始数据
   */
  data: {
    carName:[
      {
        name:"小型面包",
      },
      {
        name:"中型面包",
      },
      {
        name:"小型货车",
      },
      {
        name:"大型货车",
      },
  ],
    cars:[
    {
      image:"../../../images/sm-minibus.jpg",
    },
    {
      image:"../../../images/mid-minibus.jpg",
    },
    {
      image:"../../../images/sm-truck.jpg",
    },
    {
      image:"../../../images/big-truck.jpg",
    },
  ],
  index:0,
  currentTab:0
  },


  /**
   * 组件的方法列表
   */
  methods: {
    switchTab:function(e){
      if (this.data.currentTab === e.target.dataset.index) {
        return;
    } else {
        this.setData({
            currentTab: e.currentTarget.dataset.index,
            index:e.currentTarget.dataset.index
        })
    }
  },
  
  
  swiperChange:function(e){
    // console.log( e.detail)
    if(e.detail.source == 'touch'){
      this.setData({
        currentTab: e.detail.current,
        index:e.detail.current
    })
    }
   
  },
    next:function(e){
      // console.log(this.data.currentTab,this.data.currentTab)
       if (this.data.currentTab === this.data.index && this.data.currentTab <3 ) {
          this.setData({
            currentTab:this.data.currentTab + 1,
            index:this.data.index +1
          })
        }
       
    },
  
    last:function(e){
      if (this.data.currentTab === this.data.index && this.data.currentTab > 0 ) {
        this.setData({
          currentTab:this.data.currentTab - 1,
          index:this.data.index -1
        })
      }
    }
  },
})
