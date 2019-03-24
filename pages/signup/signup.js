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
  submit: function () {
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
        url: 'https://www.gocaffrey.xyz/PriceTagManager/servlet/SignUp',  //服务器地址
        data: {
          username: username,
          password: password
        },
        method: 'GET',
        header: {
          'content-type': 'application/json' //默认值
        },
        success: function (res) {
          // 注册成功
          if (res.data.success) {
            wx.showToast({
              title: res.data.content,
              icon: 'none',
              duration: 2000
            })
          } else {
            // 用户名重复
            wx.showToast({
              title: res.data.content,
              icon: 'none',
              duration: 2000
            })
          }
        }
      })
    }
  }
}) 