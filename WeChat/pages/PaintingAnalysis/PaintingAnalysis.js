Page({
  data: {
    inputValue: '',
    chatList: [],
    userAvatar: '/images/yonghu1.png',
    aiAvatar: '/images/danqing.png',
    showImagePreview: false,
    imagePreviewUrl: '',
    isProcessing: false,
    welcomeMessage: '您好，我是您的古画赏析 AI 管家，我是基于强大的豆包开发的哦 我可以为您提供各种各样的服务呢，包括古画的赏析、答疑，还能帮您解决与古画相关的各种问题，让您轻松开启一场古画的探索之旅，很高兴为您服务!'
  },

  onLoad: function () {
    let newChatList = this.data.chatList;
    newChatList.push({ type: 'ai', content: this.data.welcomeMessage });
    this.setData({
      chatList: newChatList
    });
  },

  bindInput: function (e) {
    this.setData({
      inputValue: e.detail.value
    });
  },

  sendMessage: function () {
    let message = this.data.inputValue;
    if (message.trim() === '') {
      wx.showToast({
        title: '请输入有效的信息',
        icon: 'none'
      });
      return;
    }
    let that = this;
    let newChatList = this.data.chatList;
    newChatList.push({ type: 'user', content: message });
    this.setData({
      chatList: newChatList,
      inputValue: ''
    });
    this.getAIApiResponse(this.data.chatList, 'text');
  },

  uploadImage: function () {
    wx.chooseImage({
      count: 1,
      sizeType: ['original', 'compressed'],
      sourceType: ['album', 'camera'],
      success: (res) => {
        console.log('选择的图片路径：', res.tempFilePaths[0]); // 打印图片路径
        this.setData({
          showImagePreview: true,
          imagePreviewUrl: res.tempFilePaths[0]
        });
      }
    });
  },

  confirmImage: function () {
    let that = this;
    let filePath = this.data.imagePreviewUrl;
    this.setData({
      showImagePreview: false
    });
    this.uploadImageToCloud(filePath);
  },

  cancelImage: function () {
    this.setData({
      showImagePreview: false,
      imagePreviewUrl: ''
    });
  },

  uploadImageToCloud: function (filePath) {
    wx.showLoading({
      title: '正在上传图片，请稍候...'
    });
    wx.cloud.uploadFile({
      cloudPath: 'chat/' + new Date().getTime() + '.png',
      filePath: filePath,
      success: res => {
        wx.hideLoading();
        console.log('图片上传成功', res);
        let fileID = res.fileID;
        let imageUrl = this.getPathImg(fileID);
        let newChatList = this.data.chatList;
        newChatList.push({ type: 'user', content: '', imageUrl: imageUrl });
        this.setData({
          chatList: newChatList
        });
        this.getAIApiResponse(this.data.chatList, 'image');
        wx.showToast({
          title: '图片上传成功',
          icon: 'success',
          duration: 100
        });
      },
      fail: (err) => {
        wx.hideLoading();
        if (err.errMsg.includes('network')) { // 细化网络错误处理
          wx.showToast({
            title: '网络连接失败，请检查网络设置',
            icon: 'none'
          });
        } else {
          wx.showToast({
            title: '图片上传失败，请联系管理员',
            icon: 'none'
          });
        }
      }
    });
  },

  getPathImg: function (fileID) {
    var filename = fileID.substring(fileID.lastIndexOf("/") + 1);
    console.log(filename);
    var rootpath = "https://6c71-lqh-9gzqo5ya9b626824-1325302638.tcb.qcloud.la/chat/"; 
    console.log(rootpath + filename);
    return rootpath + filename;
  },

  getAIApiResponse: function (chatList, type) {
    let that = this;
    this.setData({ isProcessing: true });
    wx.showLoading({
      title: '正在请求 AI，请稍候...'
    });
    wx.request({
      url: 'https://www.guhua.online/chat',
      method: 'POST',
      data: {
        type: type,
        chatList: chatList,
        prompt: "请以纯文本形式回答问题，不要使用特殊字符或复杂的数据结构，仅输出简洁明了的内容，确保内容可以被微信小程序直接解析和显示"
      },
      header: {
        'content-type': 'application/json'
      },
      success: (res) => {
        wx.hideLoading();
        this.setData({ isProcessing: false });
        console.log(res.data);
        let aiResponse = res.data.choices[0].message.content;
        let updatedChatList = that.data.chatList;
        updatedChatList.push({ type: 'ai', content: aiResponse });
        that.setData({
          chatList: updatedChatList
        });
        wx.showToast({
          title: 'AI 回复已收到',
          icon: 'success',
          duration: 2000
        });
      },
      fail: (err) => {
        wx.hideLoading();
        this.setData({ isProcessing: false });
        if (err.errMsg.includes('network')) { // 细化网络错误处理
          wx.showToast({
            title: '网络连接失败，请检查网络设置',
            icon: 'none'
          });
        } else {
          wx.showToast({
            title: '请求失败，请联系管理员',
            icon: 'none'
          });
        }
      }
    });
  }
})