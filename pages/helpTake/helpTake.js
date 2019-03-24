// pages/helpSend/helpSend.js
Page({


  data: {

  },

  onInfoTap: function (e) {
    let id = e.currentTarget.dataset.id
    wx.navigateTo({
      url: '/pages/helpTake/takeAction/takeAction?id=' + id,
    })
  },
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
          if (list[i].status === "发布中") {

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