App({
  globalData: {
    isExamine:true,
  },
  onLaunch: function () {
    wx.cloud.init({
      env:"lqh-9gzqo5ya9b626824"//lqh
    })
    // var nowTime = Date.parse(new Date())
    // var delineTime = Date.parse('2024-6-13')
    const accountInfo = wx.getAccountInfoSync();
    accountInfo.miniProgram.envVersion = 'release';
    // if(nowTime > delineTime) {
      if(accountInfo.miniProgram.envVersion == 'release') {
      this.globalData.isExamine = false
    }
  },
})