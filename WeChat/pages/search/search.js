Page({
  /**
   * 页面的初始数据
   */
  data: {
  
  },
  // 取消搜索,返回主页面
  hideInput: function () {
  wx.switchTab({
  //跳转，返回主页面路径
      url: '/pages/show/show'   
    })
  }
});
