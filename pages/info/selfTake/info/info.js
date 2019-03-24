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
  onLoad: function (options) {
    var that = this
    this.data.id = options.id
    let id = options.id
    wx.request({
      url: 'https://www.gocaffrey.xyz/PriceTagManager/servlet/GetTakeList',  //服务器地址
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