//logs.js
const util = require('../../utils/util.js')

Page({
  data: {
    active_height:280,
    last_active:0,
    page_data:{
      img_top: "http://m.guilinlongre.com/static/img/IELTS-01.png",
      yasi_course: [{
        "color_last": "",
        "height":280,
        "students_num": "6-12人小班",
        "hour": "518课/316小时",
        "title": "雅思入门六分课程",
        "color": "#E69A9E",
        "words": "词汇量1000左右",
        "suite": "初一/初二或同等英语水平学员",
        "imgURL": "http://m.guilinlongre.com/static/img/rumen.png"
      }, {

        "color_last": "",
        "height": 0,
        "students_num": "6-12人小班",
        "hour": "434课时/324小时",
        "title": "雅思起步六分课程",
        "color": "#F3E4A4",
        "words": "词汇量1500-2000左右",
        "suite": "初三或同等英语水平学员",
          "imgURL": "http://m.guilinlongre.com/static/img/qibu.png"
      }, {
          "color_last": "#F3E4A4",
          "height": 0,
        "students_num": "10-15人小班",
        "hour": "252课时/264小时",
        "title": "雅思预备六分课程",
        "color": "#AFDCF0",
        "words": "词汇量2000-2500左右",
        "suite": "高一/高二或同等英语水平学员",
          "imgURL": "http://m.guilinlongre.com/static/img/yubei.png"
      }, {
          "color_last": "#AFDCF0",
          "height": 0,
        "students_num": "6-12人小班",
        "hour": "272课时/204小时",
        "title": "雅思基础六分课程",
        "color": "#DBE6BA",
        "words": "词汇量2500-3500左右",
        "suite": "高三\/大一或同等英语水平学员",
          "imgURL": "http://m.guilinlongre.com/static/img/jichu2.png"
      }, {
          "color_last": "#DBE6BA",
          "height": 0,
        "students_num": "6-12人小班",
        "hour": "192课时\/144小时",
        "title": "雅思突破六分课程",
        "color": "#E9B4D0",
        "words": "词汇量3500-4000左右",
        "suite": "大二/大三或英语四级英语水平学员",
          "imgURL": "http://m.guilinlongre.com/static/img/tupo.png"
      }, {
          "color_last": "#E9B4D0",
          "height": 0,
        "students_num": "6-12人小班",
        "hour": "128课时\/96小时",
        "title": "雅思精品六分课程",
        "color": "#EACEBD",
        "words": "词汇量4000-5000左右",
        "suite": "大四或英语六级英语水平学员",
          "imgURL": "http://m.guilinlongre.com/static/img/jingping.png"
      }],
    },
   
  
  },
  clickCourse(e){

    var now = e.currentTarget.dataset.index
    var last = this.data.last_active
    if(last == now){
      return;
    }
    var active = "page_data.yasi_course[" + now + "].height"
    //设置当前高度
    this.setData({
      [active]: this.data.active_height
    })
   
    //当前色为上一个颜色
    if(now != 0){
      var active_color = "page_data.yasi_course[" + now + "].color_last"
      this.setData({
        [active_color]: this.data.page_data.yasi_course[now-1].color
      })
    }
   
    var last_active = "page_data.yasi_course[" + last + "].height"
  
   
    //恢复上一个的高度
    this.setData({
      [last_active]: 0
    })
    
  //恢复最后一个背景色
    if (last != 0) {
      var last_background = "page_data.yasi_course[" + last + "].color_last"
      this.setData({
        [last_background]: this.data.page_data.yasi_course[last-1].color
      })
    }

    //恢复最后一个的下个颜色
    if (last != this.data.page_data.yasi_course.length - 1) {
      var last_background = "page_data.yasi_course[" + (last+1) + "].color_last"
      this.setData({
        [last_background]: this.data.page_data.yasi_course[last].color
      })
    }


    //设置下一个的背景色为白色
    if (now != this.data.page_data.yasi_course.length - 1) {
      var active_color = "page_data.yasi_course[" + (now + 1) + "].color_last"
      this.setData({
        [active_color]: "#fff"
      })

    }
    //设置当前为最后一个操作的
    this.setData({
      last_active: now
    })
   
  }
})
