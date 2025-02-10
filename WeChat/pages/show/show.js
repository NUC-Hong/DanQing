const app = getApp()
Page({
  /**
   * 页面的初始数据
   */
  data: {
    isExamine: "false",
    imgList: ['https://guhua-buc-1324634892.cos.ap-shanghai.myqcloud.com/stylesea.jpg', 'https://guhua-buc-1324634892.cos.ap-shanghai.myqcloud.com/style.jpg', 'https://guhua-buc-1324634892.cos.ap-shanghai.myqcloud.com/styleFG.jpg'],
    navList: [{
        'src': 'https://guhua-buc-1324634892.cos.ap-shanghai.myqcloud.com/beijingyanse.png',
        'title': '图片上色'
      },
      {
        'src': 'https://guhua-buc-1324634892.cos.ap-shanghai.myqcloud.com/huanlian.png',
        'title': '创意换脸'
      },
      {
        'src': 'https://guhua-buc-1324634892.cos.ap-shanghai.myqcloud.com/tupianhuanlian.png',
        'title': 'AI创作图片'
      },
      {
        'src': 'https://guhua-buc-1324634892.cos.ap-shanghai.myqcloud.com/yijianhuanlianicon.png',
        'title': '风格变换'
      },
    ],
    dataList: [
      {
        'coverUrl': 'https://guhua-buc-1324634892.cos.ap-shanghai.myqcloud.com/creation11.jpg',
        'label': '热门',
        'colorClass': 'red-label',
        'title': '文化熟读在我心，照片修复在我行',
        'date': '2024年4月23日',
        'brand': '老照片修复',
      },
      {
        'coverUrl': 'https://guhua-buc-1324634892.cos.ap-shanghai.myqcloud.com/zhanshi1.jpg',
        'label': '热门',
        'colorClass': 'red-label',
        'title': '采用强大的模型进行风格迁移，快来体验吧',
        'date': '2024年4月23日',
        'brand': '多种风格转化',
      },
      {
        'coverUrl': 'https://guhua-buc-1324634892.cos.ap-shanghai.myqcloud.com/yanshi2.jpg',
        'label': '热门',
        'colorClass': 'red-label',
        'title': '将诗中描绘的画面直接展示到您眼前！',
        'date': '2024年4月23日',
        'brand': '诗意画境',
      },
      {
        'coverUrl': 'https://guhua-buc-1324634892.cos.ap-shanghai.myqcloud.com/changface.jpg',
        'label': '推荐',
        'title': '快来体验创意换脸吧~',
        'date': '2024年4月23日',
        'brand': '创意换脸',
      },
      {
        'coverUrl': 'https://guhua-buc-1324634892.cos.ap-shanghai.myqcloud.com/colorize.jpg',
        'label': '经典',
        'title': '点赞收藏加关注，给你的照片上色吧~',
        'date': '2024年4月23日',
        'brand': 'AI图片上色',
      }
    ],
    // demoList: [
    //   {
    //     'coverUrl': 'https://guhua-buc-1324634892.cos.ap-shanghai.myqcloud.com/creation11.jpg',
    //     'label': '热门',
    //     'colorClass': 'red-label',
    //     'title': '文化熟读在我心，照片修复在我行',
    //     'date': '2024年4月23日',
    //     'brand': '老照片修复',
    //   },
    // ],
  },
  // 菜单
  navClick(e) {
    wx.showToast({
      title: '去功能区体验吧~',
    })
  },
  // 详情
  detailClick(e) {
    wx.showToast({
      title: e.currentTarget.dataset.item.title,
    })
  },

  onLoad:function(options) {
    this.setData({
      isExamine:app.globalData.isExamine,
    })
  },
})
