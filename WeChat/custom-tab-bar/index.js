// custom-tab-bar/index.js
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

  },

  /**
   * 组件的方法列表
   */
  methods: {
    goTomenu(){
      wx.switchTab({
        url: '/pages/show/show',
      })
    },
    goTofunction(){
      wx.switchTab({
        url: '/pages/off/off',
      })
    },
    goTomine(){
      wx.switchTab({
        url: '/pages/my/my',
      })
    }
  }
})
