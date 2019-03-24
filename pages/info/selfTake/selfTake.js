var app = getApp();
Page({

  data: {

  },

  onInfoTap: function (e) {
    let id = e.currentTarget.dataset.id
    wx.navigateTo({
      url: '/pages/info/selfTake/info/info?id=' + id,
    })
  },

  // 编辑返回时刷新页面数据
  changeData: function () {
    this.onLoad();
  },
  onLoad: function (options) {
    var that = this
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
        let mapList = []
        for (let i in list) {
          if (list[i].user === app.globalData.username) {
            mapList.push(list[i])
          }
        }
        that.setData({
          listData: mapList
        })
      }
    })
  }
})