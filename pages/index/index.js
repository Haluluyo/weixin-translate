//index.js
//获取应用实例
import { translate } from '../../utils/api.js'
const app = getApp()

Page({
  /**
   * 页面的初始数据
   */
  data: {
    query: '',
    hideCloseIcon: true,
    curLanguage: {},
    result: []
  },
  onLoad: function(options){
    console.log(options)
    if (options.query) {
      this.setData({ query: options.query })
    }
  },
  onShow: function () {
    if (this.data.curLanguage.lang !== app.globalData.curLanguage.lang) {
      this.setData({ curLanguage: app.globalData.curLanguage })
      this.onConfirm()
    }
  },
  onInput: function(e){
    this.setData({'query': e.detail.value})
    if(this.data.query.length > 0){
      this.setData({'hideCloseIcon': false})
    }else{
      this.setData({'hideCloseIcon': true})
    }
  },
  onResetInput: function(){
    this.setData({'query':'', 'hideCloseIcon': true})
    this.setData({ 'result': [] })
  },
  onConfirm: function(){
    if(!this.data.query) return
    translate(this.data.query, { from: 'auto', to: this.data.curLanguage.lang}).then(res => {
      this.setData({'result': res.trans_result})

      let history = wx.getStorageSync('history') || []
      history.unshift({ query: this.data.query, result: res.trans_result[0].dst })
      history.length = history.length > 15 ? 15 : history.length
      wx.setStorageSync('history', history)
    }).catch(function () {
      //console.log('test')
    })
  }
})
