// components/mybox/mybox.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    list:{
      type:String,
      value:"猜猜是什么内容?"
    },
    imagesrc:{
      type:String,
      value:"猜猜是什么内容?"
    },
    imageJiantou1:{
      type:String,
      value:"猜猜是什么内容?"
    },
    imageJiantou2:{
      type:String,
      value:"猜猜是什么内容?"
    }
  },

  /**
   * 组件的初始数据
   */
  data: {
    ishidden:true
    
  },

  /**
   * 组件的方法列表
   */
  methods: {
    change:function(){
      this.setData({
        ishidden:!this.data.ishidden
      })
    }
  }
})
