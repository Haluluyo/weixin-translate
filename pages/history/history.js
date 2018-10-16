// pages/history/history.js
const app = getApp()

Page({
  /**
   * 页面的初始数据
   */
  data: {
    history: []
  },
  onShow: function () {
    this.setData({history: wx.getStorageSync('history')})
  },
  onTapItem: function (e) {
    console.log(e.currentTarget.dataset.query)
    wx.reLaunch({
      url: `/pages/index/index?query=${e.currentTarget.dataset.query}`
    })
  },
  onClearItem: function(){
    this.setData({'history': []})
    wx.clearStorage('history', history)
  }
})