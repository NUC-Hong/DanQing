const app = getApp()
Page({
  data:{
    isExamine: "false",
    img:"https://guhua-buc-1324634892.cos.ap-shanghai.myqcloud.com/static1/wordtotext.png",//表示变换后的图像展示
    text:"",
    img2:"https://guhua-buc-1324634892.cos.ap-shanghai.myqcloud.com/static1/compress1.jpg",//变换前的
    img3:"https://guhua-buc-1324634892.cos.ap-shanghai.myqcloud.com/static1/compress2.jpg"//表示变换后的图像展示
  },
  game(){
    let that = this;                                                                                           
    function getPathImg(fileID){
      var filename=fileID.substring(fileID.lastIndexOf("/")+1)
      console.log(filename);
     var rootpath="https://6c71-lqh-9gzqo5ya9b626824-1325302638.tcb.qcloud.la/game/"//lqh

      console.log(rootpath+filename)
      return rootpath+filename
    }
    console.log(that.data.text)
    wx.showLoading({//加载动画
      title: '创作中，请等待',
    })
     wx.request({//发出请求
        url:'https://www.guhua.online/TextToImg',
       method:'post', 
       data:{
        text: that.data.text
       },
       header: {
        'content-type': 'application/json' // 默认值
       },
       success (res) {
        wx.hideLoading();//停止加载动画
        console.log(res.data)
        wx.showToast({
          title:'AI创作成功',
          icon:'success',
          duration:3000
        })
        that.setData({
          img:res.data
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

  onInputText: function(e) {
    this.setData({
      text: e.detail.value
    });
    console.log(this.data.text)
  },

  inputText(){
    const { img } = this.data;
    this.uploadImg(img);
    this.game();
  },
  //上传图片
  uploadImg(fileUrl){
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