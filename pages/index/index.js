//index.js
//获取应用实例
const app = getApp()

Page({
  data: {
    motto: 'Hello World',
    userInfo: {},
    imageUrl: "http://m.guilinlongre.com/static/img/image01.png",
    youhui:"http://m.guilinlongre.com/static/img/image02.png",
    langge_img:"http://m.guilinlongre.com/static/img/image03.png",
    langge_img_bottom:"http://m.guilinlongre.com/static/img/introduction.png",
    text_content: "英国总领事馆文化教育处管理雅思在中国的考试事项，向中国考生提供来自雅思官方的服务.\n\n朗阁旗下机构拥有“雅思官方合作伙伴”称号。朗阁在师资培训、考情分享、政策分享及中国区考试研究方面与雅思官方紧密联系，同步官方信息，提供给考生最实用的备考指导。",
    hasUserInfo: false,
    canIUse: wx.canIUse('button.open-type.getUserInfo')
  },
  //事件处理函数
  bindViewTap: function() {
    wx.navigateTo({
      url: '../logs/logs'
    })
  },
  goBaidu:function(){
    console.log("--")
    wx.navigateTo({url:"/pages/webview/webview"})
  },
  onLoad: function () {

    if (app.globalData.userInfo) {
      this.setData({
        userInfo: app.globalData.userInfo,
        hasUserInfo: true
      })
    } else if (this.data.canIUse){
      // 由于 getUserInfo 是网络请求，可能会在 Page.onLoad 之后才返回
      // 所以此处加入 callback 以防止这种情况
      app.userInfoReadyCallback = res => {
        this.setData({
          userInfo: res.userInfo,
          hasUserInfo: true
        })
      }
    } else {
      // 在没有 open-type=getUserInfo 版本的兼容处理
      wx.getUserInfo({
        success: res => {
          app.globalData.userInfo = res.userInfo
          this.setData({
            userInfo: res.userInfo,
            hasUserInfo: true
          })
        }
      })
    }
  },
  getUserInfo: function(e) {
    console.log(e)
    app.globalData.userInfo = e.detail.userInfo
    this.setData({
      userInfo: e.detail.userInfo,
      hasUserInfo: true
    })
  }
})
