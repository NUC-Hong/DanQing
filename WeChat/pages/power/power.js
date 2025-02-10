// pages/game/game.js
Page({
  data:{
    img1:"https://guhua-buc-1324634892.cos.ap-shanghai.myqcloud.com/static1/clear1.jpg",//变换前的
    img2:"https://guhua-buc-1324634892.cos.ap-shanghai.myqcloud.com/static1/clear2.png"//表示变换后的图像展示

  },
  game(){
    let that = this;
    function getPathimg1(fileID){
      var filename=fileID.substring(fileID.lastIndexOf("/")+1)
      console.log(filename);
     //var rootpath="https://636c-cloud1-0gjs3867092b42e0-1312009154.tcb.qcloud.la/"//zxf
     //var rootpath="https://7068-photo-9gtvu667cccb0e83-1312078932.tcb.qcloud.la/game/"//zqh
     //var rootpath="https://6761-game2-0gnd7r392dc9d469-1312294862.tcb.qcloud.la/game/"//jjp
    //  var rootpath="https://636c-cloud1-6g092ui0ad1cc375-1324529370.tcb.qcloud.la/game/"//wtt
    var rootpath="https://6c71-lqh-9gzqo5ya9b626824-1325302638.tcb.qcloud.la/game/"//lqh

      console.log(rootpath+filename)
      return rootpath+filename
    }
    console.log(that.data.img1)
    wx.showLoading({//加载动画
      title: '处理中，请等待',
    })
     wx.request({//发出请求
      url:'https://www.guhua.online/part1/clear',

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
          title:'修复成功',
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

})