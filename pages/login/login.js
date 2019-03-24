var app = getApp();
Page({
  data: {

  },

  onLoad: function (options) {

  },

  accountInput: function ({ detail }) {
    this.data.username = detail.value
  },
  passwordInput: function ({ detail }) {
    this.data.password = detail.value
  },
  onSignUp: function() {
    wx.navigateTo({
      url: '/pages/signup/signup',
    })
  },
  submit: function () {
    var that = this
    let username = this.data.username
    let password = this.data.password
    if (username == undefined || password == undefined) {
      wx.showToast({
        title: '请输入帐号和密码！',
        icon: 'none',
        duration: 2000
      })
    } else {
      wx.request({
        url: 'https://www.gocaffrey.xyz/PriceTagManager/servlet/Login',  //服务器地址
        data: {
          username: username,
          password: password
        },
        method: 'GET',
        header: {
          'content-type': 'application/json' //默认值
        },
        success: function (res) {
          // 帐号密码正确跳转主页
          if (res.data.success) {
            app.globalData.username = that.data.username
            wx.redirectTo({
              url: '/pages/index/index',
            })
          } else {
            // 帐号密码失败提示
            wx.showToast({
              title: '帐号或密码输入错误！',
              icon: 'none',
              duration: 2000
            })
          }
        }
      })
    }
  }
}) 