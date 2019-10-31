const app = getApp();

Page({
  data: {
    scrollindex: 0,  //当前页面的索引值
    totalnum: 5,  //总共页面数
    starty: 0,  //开始的位置x
    endy: 0, //结束的位置y
    critical: 100, //触发翻页的临界值
    margintop: 0,  //滑动下拉距离

    on: true   // 控制音乐的状态，以及图标是否旋转
  },
  //放在onReady函数中，使在进入页面后，音乐就自动开始
  onReady() {
    //获取BackgroundAudioManager 实例
    this.back = wx.getBackgroundAudioManager();
    //对实例进行设置
    this.back.src = "http://ws.stream.qqmusic.qq.com/M500001VfvsJ21xFqb.mp3?guid=ffffffff82def4af4b12b3cd9337d5e7&uin=346897220&vkey=6292F51E1E384E061FF02C31F716658E5C81F5594D561F2E88B854E81CAAB7806D5E4F103E55D33C16F3FAC506D1AB172DE8600B37E43FAD&fromtag=46"
    this.back.title = 'Tassel';// 标题为必选项
    this.back.epname = '专辑';//专辑名
    this.back.singer = '歌手';//歌手
    this.back.play();// 开始播放
  },
  stop() {
    this.back.pause();// 点击音乐图标后出发的操作
    this.setData({ on: !this.data.on })
    if (this.data.on) {
      this.back.play()
    } else {
      this.back.pause()
    }
  },
  onLoad: function () {
  },
  scrollTouchstart: function (e) {
    let py = e.touches[0].pageY;
    this.setData({
      starty: py
    })
  },
  scrollTouchmove: function (e) {
    let py = e.touches[0].pageY;
    let d = this.data;
    this.setData({
      endy: py,
    })
    if (py - d.starty < 100 && py - d.starty > -100) {
      this.setData({
        margintop: py - d.starty
      })
    }
  },
  scrollTouchend: function (e) {
    let d = this.data;
    if (d.endy - d.starty > 100 && d.scrollindex > 0) {
      this.setData({
        scrollindex: d.scrollindex - 1
      })
    } else if (d.endy - d.starty < -100 && d.scrollindex < this.data.totalnum - 1) {
      this.setData({
        scrollindex: d.scrollindex + 1
      })
    }
    this.setData({
      starty: 0,
      endy: 0,
      margintop: 0
    })
  },
})