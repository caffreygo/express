var app = getApp();
Page({
  data: {

  },
  // 当数据变动后调用此方法重载当前页面数据
  changeParentData: function () {
    var pages = getCurrentPages();//当前页面栈
    if (pages.length > 1) {
      var beforePage = pages[pages.length - 2];//获取上一个页面实例对象
      beforePage.changeData();//触发父页面中的方法
    }
  },
  submit: function () {
    var that = this
    let id = this.data.id
    wx.showModal({
      title: '提示',
      content: '请问您确定接下此单吗？',
      success(res) {
        if (res.confirm) {
          wx.request({
            url: 'https://www.gocaffrey.xyz/PriceTagManager/servlet/PostSend',  //服务器地址
            data: {
              id: id,
              status: "已接单",
              taker: app.globalData.username
            },
            method: 'POST',
            header: {
              'content-type': 'application/x-www-form-urlencoded' //默认值
            },
            success: function (res) {
              if (res.data.success === true) {
                wx.showToast({
                  title: res.data.content,
                  icon: 'none',
                  duration: 2000
                })
                that.changeParentData()
              } else {
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
  },
  onLoad: function (options) {
    var that = this
    this.data.id = options.id
    let id = options.id
    console.log(id)
    wx.request({
      url: 'https://www.gocaffrey.xyz/PriceTagManager/servlet/GetSendList',  //服务器地址
      data: {
      },
      method: 'GET',
      header: {
        'content-type': 'application/json' //默认值
      },
      success: function (res) {
        let list = res.data
        for (let i in list) {
          if (list[i].id === id) {
            that.setData({
              item: list[i]
            })
          }
        }
      }
    })
  }
})