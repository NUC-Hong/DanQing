// pages/game/game.js
const app = getApp()
Page({
  data:{
    isExamine: "false",
    img1:"https://guhua-buc-1324634892.cos.ap-shanghai.myqcloud.com/static1/moreStyle1.jpg",//变换前的
    img2:"https://guhua-buc-1324634892.cos.ap-shanghai.myqcloud.com/static1/moreStyle2.png",//表示变换后的图像展示
    img3:"https://guhua-buc-1324634892.cos.ap-shanghai.myqcloud.com/static1/compress1.jpg",//变换前的
    img4:"https://guhua-buc-1324634892.cos.ap-shanghai.myqcloud.com/static1/compress2.jpg"//表示变换后的图像展示

  },
  gameStar(){
    let that = this;
    function getPathimg1(fileID){
      var filename=fileID.substring(fileID.lastIndexOf("/")+1)
      console.log(filename);
      var rootpath="https://6c71-lqh-9gzqo5ya9b626824-1325302638.tcb.qcloud.la/game/"//lqh
    
      console.log(rootpath+filename)
      return rootpath+filename
    }
    console.log(that.data.img1)
    wx.showLoading({//加载动画
      title: '处理中，请等待',
    })
     wx.request({//发出请求
      url:'https://www.guhua.online/moreStar',
       method:'post',
       data:{
         x:getPathimg1(that.data.img1),
       },
       header: {
        'content-type': 'application/json' // 默认值
       },
       success (res) {
        wx.hideLoading();//停止加载动画
        console.log(res.data)
        wx.showToast({
          title:'风格转换成功',
          icon:'success',
          duration:3000
        })
        that.setData({
          img2:res.data
        })
       },
       fail(err){
         console.log(err)
       }
     })

  },

  gameOcean(){
    let that = this;
    function getPathimg1(fileID){
      var filename=fileID.substring(fileID.lastIndexOf("/")+1)
      console.log(filename);
     var rootpath="https://6c71-lqh-9gzqo5ya9b626824-1325302638.tcb.qcloud.la/game/"//lqh
      console.log(rootpath+filename)
      return rootpath+filename
    }
    console.log(that.data.img1)
    wx.showLoading({//加载动画
      title: '处理中，请等待',
    })
     wx.request({//发出请求
      url:'https://www.guhua.online/moreOcean',
       method:'post',
       data:{
         x:getPathimg1(that.data.img1),
       },
       header: {
        'content-type': 'application/json' // 默认值
       },
       success (res) {
        wx.hideLoading();//停止加载动画
        console.log(res.data)
        wx.showToast({
          title:'风格转换成功',
          icon:'success',
          duration:3000
        })
        that.setData({
          img2:res.data
        })
       },
       fail(err){
         console.log(err)
       }
     })

  },
  
  gameLight(){
    let that = this;
    function getPathimg1(fileID){
      var filename=fileID.substring(fileID.lastIndexOf("/")+1)
      console.log(filename);
     var rootpath="https://6c71-lqh-9gzqo5ya9b626824-1325302638.tcb.qcloud.la/game/"//lqh
      console.log(rootpath+filename)
      return rootpath+filename
    }
    console.log(that.data.img1)
    wx.showLoading({//加载动画
      title: '处理中，请等待',
    })
     wx.request({//发出请求
      url:'https://www.guhua.online/moreLight',
       method:'post',
       data:{
         x:getPathimg1(that.data.img1),
       },
       header: {
        'content-type': 'application/json' // 默认值
       },
       success (res) {
        wx.hideLoading();//停止加载动画
        console.log(res.data)
        wx.showToast({
          title:'风格转换成功',
          icon:'success',
          duration:3000
        })
        that.setData({
          img2:res.data
        })
       },
       fail(err){
         console.log(err)
       }
     })

  },

  gameCirc(){
    let that = this;
    function getPathimg1(fileID){
      var filename=fileID.substring(fileID.lastIndexOf("/")+1)
      console.log(filename);
     var rootpath="https://6c71-lqh-9gzqo5ya9b626824-1325302638.tcb.qcloud.la/game/"//lqh
      console.log(rootpath+filename)
      return rootpath+filename
    }
    console.log(that.data.img1)
    wx.showLoading({//加载动画
      title: '处理中，请等待',
    })
     wx.request({//发出请求
      url:'https://www.guhua.online/moreCirc',
       method:'post',
       data:{
         x:getPathimg1(that.data.img1),
       },
       header: {
        'content-type': 'application/json' // 默认值
       },
       success (res) {
        wx.hideLoading();//停止加载动画
        console.log(res.data)
        wx.showToast({
          title:'风格转换成功',
          icon:'success',
          duration:3000
        })
        that.setData({
          img2:res.data
        })
       },
       fail(err){
         console.log(err)
       }
     })

  },
  onShow: function () {
    wx.hideHomeButton()
    if (typeof this.getTabBar === 'function' &&
      this.getTabBar()) {
      this.getTabBar().setData({
        selected: 2
      })
    }
  },

  img1(){
    let that = this;
    console.log("点击上传")
    wx.chooseImage({
     count: 1,
     sizeType: ['original', 'compressed'],
     sourceType: ['album', 'camera'],
     success (res) {
      console.log("选择成功！",res)
      that.uploadImg1(res.tempFilePaths[0]);
      }
    })
  },
  //上传图片
  uploadImg1(fileUrl){
    wx.showToast({
      title:'上传中',
      icon:'loading',
    })
    wx.cloud.uploadFile({
    //  cloudPath:new Date().getTime()+".png",// 上传至云端的路径
    cloudPath:'game/' + new Date().getTime() +'.png',
     filePath: fileUrl, // 小程序临时文件路径
     success: res => {
      wx.showToast({
        title:'上传成功',
        icon:'success',
      })
      // 返回文件 ID
      console.log("上传成功",res)
      this.setData({
        img1:res.fileID
       })
      },
      fail: console.error
    })
  },
  onLoad:function(options) {
    this.setData({
      isExamine:app.globalData.isExamine,
    })
  },
})