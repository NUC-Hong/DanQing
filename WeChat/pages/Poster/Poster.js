const app = getApp()
Page({
  data:{
    isExamine: "false",
    img:"https://guhua-buc-1324634892.cos.ap-shanghai.myqcloud.com/static1/Posteryanshi.png",//表示变换后的图像展示
    text1:"",
    text2:"",
    text3:"",
    text4:"",
    text5:"",
    img2:"https://guhua-buc-1324634892.cos.ap-shanghai.myqcloud.com/static1/compress1.jpg",//变换前的
    img3:"https://guhua-buc-1324634892.cos.ap-shanghai.myqcloud.com/static1/compress2.jpg"//表示变换后的图像展示
  },
  game(){
    let that=this;                                                                                         
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
        url:'https://www.guhua.online/Poster',
        // url:'http://127.0.0.1:5000/Poster',
       method:'post', 
       data:{
        text1: that.data.text1,
        text2: that.data.text2,
        text3: that.data.text3,
        text4: that.data.text4,
        text5: that.data.text5
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

  onInputText1: function(e) {
    this.setData({
      text1: e.detail.value
    });
    console.log(this.data.text1)
  },
  onInputText2: function(e) {
    this.setData({
      text2: e.detail.value
    });
    console.log(this.data.text2)
  },
  onInputText3: function(e) {
    this.setData({
      text3: e.detail.value
    });
    console.log(this.data.text3)
  },
  onInputText4: function(e) {
    this.setData({
      text4: e.detail.value
    });
    console.log(this.data.text4)
  },
  onInputText5: function(e) {
    this.setData({
      text5: e.detail.value
    });
    console.log(this.data.text5)
  },

  inputText(){
    this.game();
  },
  onLoad:function(options) {
    this.setData({
      isExamine:app.globalData.isExamine,
    })
  },
})