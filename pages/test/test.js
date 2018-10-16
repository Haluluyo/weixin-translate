Page({
  data: {
    name: 'world',
    array: [{
      message: 'foo',
    }, {
      message: 'bar'
    }]
  },
  showName: function(e){
    wx.showToast({
      title: 'success',
      icon: 'loading',
      duration: 2000
    })
  }
})