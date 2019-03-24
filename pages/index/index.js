var app = getApp();
Page({

  /**
   * 页面的初始数据
   */
  data: {
    current: 0,
    max: 120,
  },
  onSendPage: function() {
    wx.navigateTo({
      url: '/pages/send/send',
    })
  },
  onHelpSend: function () {
    wx.navigateTo({
      url: '/pages/helpSend/helpSend',
    })
  },
  onHelpTake: function () {
    wx.navigateTo({
      url: '/pages/helpTake/helpTake',
    })
  },
  onTakePage: function () {
    wx.navigateTo({
      url: '/pages/take/take',
    })
  },
  onInfoTap: function() {
    wx.navigateTo({
      url: '/pages/info/info',
    })
  },
  onLoad: function (options) {
    this.setData({
      username:app.globalData.username
    })
  }

})