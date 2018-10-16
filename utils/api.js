import md5 from './md5.min.js'
const appid = '20181009000216812'
const key = 'pEeDVif989wFZ4Xp_TyL'

function translate(q, { from='auto', to='auto' } = { from:'auto', to:'auto' }){
  return new Promise((resolve, reject) => {
    let salt = Date.now()
    let sign = md5(`${appid}${q}${salt}${key}`)
    wx.request({
      url: 'https://fanyi-api.baidu.com/api/trans/vip/translate',
      data: {
        q,
        from,
        to,
        appid,
        salt,
        key,
        sign
      },
      success(res){
        if(res.data && res.data.trans_result){
          resolve(res.data)
        }else{
          reject({status: 'error', message: '翻译失败'})
          wx.showToast({
            title: '翻译失败',
            icon: 'none',
            dutation: 3000
          })
        }
      },
      fail(){
        reject({status: 'error', message: '获取数据失败'})
        wx.showToast({
          title: '获取数据失败',
          icon: 'none',
          dutation: 3000
        })
      }
    })
  })
}
module.exports.translate = translate