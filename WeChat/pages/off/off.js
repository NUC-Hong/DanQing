// pages/off/off.js

const app = getApp()
var base64src = require('./base64.js')
const grant_type = 'client_credentials'
const client_id = '6t5agFUK5TwuglOdFczGwFqg'  
const client_secret = '4lw8eE6svgx3tVCoPqpkitNWiifj1YCM'
var token = null
var base64 = null
var apiUrl = null
Page({
  /**
   * 页面的初始数据
   */
   data: {
    isExamine: "false",
    navbar: ['基础', '文娱', '研究'],
    currentTab: 0,
  },
    navbarTap: function(e){
      this.setData({
      currentTab: e.currentTarget.dataset.idx
      })
    },
  //一寸变二寸
  gotochange () {
    wx.navigateTo({
      url: '/pages/change/change',
    })
  },
   //图像增强
   gotopower () {
    wx.navigateTo({
      url: '/pages/power/power',
    })
  },
  //图像压缩
  gotocompress () {
    wx.navigateTo({
      url: '/pages/compress/compress',
    })
  },
  //变换底色
  gotocolor () {
    wx.navigateTo({
      url: '/pages/test/test',
    })
  },
  //老照片修复
  gotoOld(){
    wx.navigateTo({
      url: '/pages/old/old',
    })
  },
  //古画拓展
  gotoExpand(){
    wx.navigateTo({
      url: '/pages/expand/expand',
    })
  },
  //图生视频
  gotoImgToVedio(){
    wx.navigateTo({
      url: '/pages/ImgToVedio/ImgToVedio',
    })
  },
  //国风海报生成
  gotoPoster(){
    wx.navigateTo({
      url: '/pages/Poster/Poster',
    })
  },
  //风格变化
  gotostyle(){
    wx.navigateTo({
      url: '/pages/stylechange/stylechange',
    })
  },
  //画中有话
  gotoDraw(){
    wx.navigateTo({
      url: '/pages/Draw/Draw',
    })
  },
  //话中有画
  gotoDrawToText(){
    wx.navigateTo({
      url: '/pages/DrawToText/DrawToText',
    })
  },
  //名画换脸
  gotofaceChange(){
    wx.navigateTo({
      url: '/pages/faceChange/faceChange',
    })
  },

  gotoPaintingAnalysis(){
    wx.navigateTo({
      url: '/pages/PaintingAnalysis/PaintingAnalysis',
    })
  },

  gotoCartoon(){
    wx.navigateTo({
      url: '/pages/toCartoon/toCartoon',
    })
  },
  gotoMoreStyle(){
    wx.navigateTo({
      url: '/pages/moreStyle/moreStyle',
    })
  },
  gotoVR(){
    wx.navigateTo({
      url: '/pages/VR/VR',
    })
  },
  gotoColorize(){
    wx.navigateTo({
      url: '/pages/colorize/colorize',
    })
  },
  gotoMotion(){
    wx.navigateTo({
      url: '/pages/video/video',
    })
  },
  gotoFaceChangeV(){
    wx.navigateTo({
      url: '/pages/videoChangeFace/videoChangeFace',
    })
  },
  gotoRepairV(){
    wx.navigateTo({
      url: '/pages/videoRepair/videoRepair',
    })
  },

  gotoClearV(){
    wx.navigateTo({
      url: '/pages/videoClear/videoClear',
    })
  },


  onLoad:function(options) {
    this.setData({
      isExamine:app.globalData.isExamine,
    })
  },
})