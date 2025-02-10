Page({
  data: {
    email: '',
    password: '',
    code: '',
    usePassword: false,  // 默认使用验证码登录
    canGetCode: true,    // 是否可以获取验证码
    countdown: 60,        // 倒计时60秒
    countdownText: '获取验证码', // 按钮显示文本
    isRegister: false    // 是否为注册页面
  },

  // 切换到密码登录
  switchToPassword() {
    this.setData({
      usePassword: true
    });
  },

  // 切换到验证码登录
  switchToCode() {
    this.setData({
      usePassword: false
    });
  },

  // 切换到注册页面
  switchToRegister() {
    this.setData({
      isRegister: true
    });
  },

  // 切换到登录页面
  switchToLogin() {
    this.setData({
      isRegister: false
    });
  },

  // 获取邮箱输入
  onEmailInput(e) {
    this.setData({
      email: e.detail.value
    });
  },

  // 获取密码输入
  onPasswordInput(e) {
    this.setData({
      password: e.detail.value
    });
  },

  // 获取验证码输入
  onCodeInput(e) {
    this.setData({
      code: e.detail.value
    });
  },

  // 验证邮箱格式
  isEmailValid(email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  },

  // 获取验证码
  getVerifyCode() {
    if (this.data.email) {
      if (!this.isEmailValid(this.data.email)) {
        wx.showToast({
          title: '邮箱格式不合法',
          icon: 'none'
        });
        return;
      }

      if (!this.data.canGetCode) {
        wx.showToast({
          title: '请稍后再试',
          icon: 'none'
        });
        return;
      }

      // 发送验证码请求
      wx.request({
        url: 'http://127.0.0.1:5000/send_verification_code',
        method: 'POST',
        data: {
          email: this.data.email
        },
        success: (res) => {
          if (res.data.success) {
            wx.showToast({
              title: '验证码已发送',
              icon: 'success'
            });
            this.startCountdown();
          } else {
            wx.showToast({
              title: res.data.message || '发送失败，请重试',
              icon: 'none'
            });
          }
        },
        fail: () => {
          wx.showToast({
            title: '网络错误',
            icon: 'none'
          });
        }
      });
    } else {
      wx.showToast({
        title: '请输入邮箱',
        icon: 'none'
      });
    }
  },

  // 开始倒计时
  startCountdown() {
    this.setData({
      canGetCode: false,
      countdownText: `${this.data.countdown}秒后重试`
    });

    const countdownInterval = setInterval(() => {
      if (this.data.countdown > 0) {
        this.setData({
          countdown: this.data.countdown - 1,
          countdownText: `${this.data.countdown}秒后重试`
        });
      } else {
        clearInterval(countdownInterval);
        this.setData({
          canGetCode: true,
          countdown: 60, // Reset countdown
          countdownText: '获取验证码' // Reset button text
        });
      }
    }, 1000);
  },

  // 登录函数
  onLogin() {
    if (!this.data.email) {
      wx.showToast({
        title: '请输入邮箱',
        icon: 'none'
      });
      return;
    }

    if (this.data.usePassword) {
      // 密码登录
      if (this.data.password) {
        // 调用后端API进行密码登录验证
        wx.request({
          url: 'http://127.0.0.1:5000/login_with_password',
          method: 'POST',
          data: {
            email: this.data.email,
            password: this.data.password
          },
          success: (res) => {
            if (res.data.success) {
              wx.showToast({
                title: '登录成功',
                icon: 'success'
              });
              // 登录成功后的处理逻辑
            } else {
              wx.showToast({
                title: '登录失败，检查邮箱或密码',
                icon: 'none'
              });
            }
          },
          fail: () => {
            wx.showToast({
              title: '网络错误',
              icon: 'none'
            });
          }
        });
      } else {
        wx.showToast({
          title: '请输入密码',
          icon: 'none'
        });
      }
    } else {
      // 验证码登录
      if (this.data.code) {
        // 调用后端API进行验证码验证
        wx.request({
          url: 'http://127.0.0.1:5000/verify_code',
          method: 'POST',
          data: {
            email: this.data.email,
            verification_code: this.data.code
          },
          success: (res) => {
            if (res.data.success) {
              wx.showToast({
                title: '登录成功',
                icon: 'success'
              });
              // 登录成功后的处理逻辑
            } else {
              wx.showToast({
                title: '验证码错误',
                icon: 'none'
              });
            }
          },
          fail: () => {
            wx.showToast({
              title: '网络错误',
              icon: 'none'
            });
          }
        });
      } else {
        wx.showToast({
          title: '请输入验证码',
          icon: 'none'
        });
      }
    }
  },

  // 注册函数
  onRegister() {
    if (!this.data.email) {
      wx.showToast({
        title: '请输入邮箱',
        icon: 'none'
      });
      return;
    }

    if (!this.data.code) {
      wx.showToast({
        title: '请输入验证码',
        icon: 'none'
      });
      return;
    }

    if (!this.data.password) {
      wx.showToast({
        title: '请输入密码',
        icon: 'none'
      });
      return;
    }

    // 调用后端API进行注册
    wx.request({
      url: 'http://127.0.0.1:5000/register',
      method: 'POST',
      data: {
        email: this.data.email,
        verification_code: this.data.code,
        password: this.data.password
      },
      success: (res) => {
        if (res.data.success) {
          wx.showToast({
            title: '注册成功',
            icon: 'success'
          });
          // 注册成功后的处理逻辑，例如跳转到登录页面
          this.setData({
            isRegister: false,
            email: '',
            password: '',
            code: ''
          });
        } else {
          wx.showToast({
            title: '注册失败，' + res.data.message,
            icon: 'none'
          });
        }
      },
      fail: () => {
        wx.showToast({
          title: '网络错误',
          icon: 'none'
        });
      }
    });
  },

  chooseAvatar(e) {

    const avatarUrl = e.detail.avatarUrl;
    this.setData({
      avatar: avatarUrl
    });
  
    // 上传头像到服务器
    wx.uploadFile({
      url: 'https://www.guhua.online/base/upload-avatar', // 替换为实际上传接口
      filePath: avatarUrl,
      name: 'avatar',
      success: (res) => {
        const data = JSON.parse(res.data);
        if (data.success) {
          const uploadedAvatarUrl = data.avatarUrl; // 从服务器返回的数据中获取头像URL
          this.setData({
            avatar: uploadedAvatarUrl // 将URL存储在data中以便注册时使用
          });
          wx.showToast({
            title: '头像上传成功',
            icon: 'success'
          });
        } else {
          wx.showToast({
            title: '头像上传失败',
            icon: 'none'
          });
        }
      },
      fail: (err) => {
        console.error('头像上传失败:', err);
        wx.showToast({
          title: '头像上传失败',
          icon: 'none'
        });
      }
    });
  }
});
