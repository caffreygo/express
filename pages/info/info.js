Page({


  data: {

  },
  onSendTap: function() {
    wx.navigateTo({
      url: '/pages/info/selfSend/selfSend',
    })
  },
  onTakeTap: function () {
    wx.navigateTo({
      url: '/pages/info/selfTake/selfTake',
    })
  },
  onHelpSend: function () {
    wx.navigateTo({
      url: '/pages/info/selfHelpSend/selfHelpSend',
    })
  },
  onHelpTake: function () {
    wx.navigateTo({
      url: '/pages/info/selfHelpTake/selfHelpTake',
    })
  },
  onAllSend: function () {
    wx.navigateTo({
      url: '/pages/info/allSend/allSend',
    })
  },
  onAllTake: function () {
    wx.navigateTo({
      url: '/pages/info/allTake/allTake',
    })
  },
  onLoginOut: function() {
    wx.showModal({
      title: '提示',
      content: '您确定要退出登录吗',
      success(res) {
        if (res.confirm) {
          wx.reLaunch({
            url: '/pages/login/login'
          })
        }
      }
    }) 
  },
  onLoad: function (options) {

  },

})