//logs.js
const util = require('../../utils/util.js')

Page({
  data: {
    page_data: {
      img_top: "http://m.guilinlongre.com/static/img/tuofu.png",
      "tuofu_course": [{
        "color_last": "#fff",
        "short": "基础钻石班",
        "students_num": "3-6人",
        "hour": "288课时\/216小时",
        "title": "新托福基础钻研版",
        "words": "词汇量3500-4000左右",
        "suite": "高三\/大一水平学员",
        "imgURL": "http://m.guilinlongre.com/static/img/jichu.png"
      }, {
        "short": "速达钻石班",
        "students_num": "3-6人",
        "hour": "208课时\/156小时",
        "title": "新托福速达钻研班",
        "words": "词汇量4000-5000左右",
        "suite": "大二\/大三水平学员",
          "imgURL": "http://m.guilinlongre.com/static/img/suda.png"
      }, {
        "color_last": "#F3E4A4",
        "short": "强化钻石班",
        "students_num": "3-6人",
        "hour": "252课时\/264小时",
        "title": "新托福强化精英班",
        "words": "词汇量6000以上",
        "suite": "大四\/专业四级学员",
          "imgURL": "http://m.guilinlongre.com/static/img/qianghua.png"
      }, {
        "color_last": "#AFDCF0",
        "short": "精英百分班",
        "students_num": "3-6人",
        "hour": "272课时\/204小时",
        "title": "新托福精英百分班",
        "words": "词汇量8000以上",
        "suite": "专业八级同等水平学员",
          "imgURL": "http://m.guilinlongre.com/static/img/jinying.png"
      }]
    },
    logs: [],
    info:"扫一扫的内容"
  },
  test_scan:function(){
    var that = this;
    var show;
    wx.scanCode({
      success: (res) => {
        this.show = "结果:" + res.result + "二维码类型:" + res.scanType + "字符集:" + res.charSet + "路径:" + res.path;
        that.setData({
          info: this.show
        })
        wx.showToast({
          title: '成功',
          icon: 'success',
          duration: 2000
        })
      },
      fail: (res) => {
        wx.showToast({
          title: '失败',
          icon: 'success',
          duration: 2000
        })
      },
      complete: (res) => {
      }
    })

  },
  onLoad: function () {
    this.setData({
      logs: (wx.getStorageSync('logs') || []).map(log => {
        return util.formatTime(new Date(log))
      })
    })
  }
})
