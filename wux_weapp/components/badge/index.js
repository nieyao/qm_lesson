// components/badge/index.js
Component({
  externalClasses:['wux-class-badge'],
  /**
   * 组件的属性列表
   */
  properties: {
    count:{
      type:Number,
      value:0,
      observer(newVal){
        console.log(newVal)
        const {overflowCount} = this.data;
        const finalCount = newVal >= overflowCount ? `${overflowCount}+`:newVal
        this.setData({
          finalCount
        })
      }
    },
    overflowCount:{
      type:Number,
      value:99
    }
  },

  /**
   * 组件的初始数据
   */
  data: {
    // ?内部数据 count外来的 overflowCount外来的 组件内显示的数量
    finalCount:0

  },

  /**
   * 组件的方法列表
   */
  methods: {

  }
})
