//logs.js
const util = require('../../utils/util.js')
const app = getApp()

Page({
  data: {
    curLanguage:{},
    languageList:app.globalData.languageList
  },
  onShow: function(){
    this.setData({curLanguage: app.globalData.curLanguage})
  },
  onTapItem: function(e){
    let languageObj = e.currentTarget.dataset
    wx.setStorageSync('language', languageObj)
    this.setData({'curLanguage': languageObj})
    app.globalData.curLanguage = languageObj
    wx.switchTab({url: '/pages/index/index'})
  }
})
