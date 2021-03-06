var app = getApp();
const util = require('../../utils/util.js')
Page({
  data: {
    publisher:'',
    embracer: '',
    fromAddr: '',
    toAddr: '',
    reward: '',
    taker: '',
    current: 0,
    max: 120,
  },
  publisherText: function(e) {
    let value = e.detail.value
    this.data.publisher = value
  },
  embracerText: function (e) {
    let value = e.detail.value
    this.data.embracer = value
  },
  rewardText: function (e) {
    let value = e.detail.value
    this.data.reward = value
  },
  fromText: function (e) {
    let value = e.detail.value
    this.data.fromAddr = value
  },
  toText: function (e) {
    let value = e.detail.value
    this.data.toAddr = value
  },
  areaText: function (e) {
    let value = e.detail.value;
    this.data.content = value;
    let length = parseInt(value.length);
    if (length > this.data.max) {
      return;
    }
    this.setData({
      current: length
    });
  },
  onSubmitTap: function() {
    // 红色*必填前台校验
    if (this.data.reward == '' ||this.data.publisher == '' || this.data.embracer == '' || this.data.fromAddr == '' || this.data.toAddr == '') {
      wx.showToast({
        title: '请将寄件表填写完整！',
        icon: 'none',
        duration: 2000
      })
    }else{
      let data = {
        username: app.globalData.username,
        publisher: this.data.publisher,
        embracer: this.data.embracer,
        fromAddr: this.data.fromAddr,
        date: util.formatTime(new Date()),
        toAddr: this.data.toAddr,
        content: this.data.content,
        reward: this.data.reward,
        taker: '',
        status: "发布中",
        type: "寄件"
      }
      wx.request({
        url: 'https://www.gocaffrey.xyz/PriceTagManager/servlet/SendPost',  //服务器地址
        data: data,
        method: 'POST',
        header: {
          'content-type': 'application/x-www-form-urlencoded' //默认值
        },
        success: function (res) {
          if (res.data.success === true) {
            wx.showToast({
              title: '寄件任务发布成功！',
              icon: 'none',
              duration: 2000
            })
          } else {
            wx.showToast({
              title: '寄件任务发布失败！',
              icon: 'none',
              duration: 2000
            })
          }
        }
      })
    }
  }
})