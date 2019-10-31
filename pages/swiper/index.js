var Swiper = require('../components/swiper/index');
const app = getApp();

Page({
  data: {
  },
  
  onLoad: function () {

    //调用show函数，传参
    //注意：查看上面show函数定义查看参数含义
    //第一个参数是当前的页面对象，方便函数setData直接返回数据
    //第二个参数是绑定的数据名,传参给setData，详细见上面
    //第三个参数是上下滑动的px,因为class="init"定义初始该元素向下偏移了200px，所以这里使其上移200px
    //第四个参数是需要修改为的透明度，这里是1，表示从初始的class="init"中定义的透明度0修改到1
    //app.slideupshow(this, 'slide_up1', -200, 1);
    app.slideupshow(this, 'slide_up1', 0, 1);

    var that = this;
    var bannerData = [{
      // url: 'http://img02.tooopen.com/images/20150928/tooopen_sy_143912755726.jpg',
      url: '../../resources/images/01.jpg',
      title: 'slider1'
    }, {
        url: '../../resources/images/02.jpg',
      title: 'slider2'
    }, {
      url: '../../resources/images/01.jpg',
      title: 'slider3'
    }, {
      url: '../../resources/images/02.jpg',
      title: 'slider4'
    }, {
      url: '../../resources/images/01.jpg',
      title: 'slider5'
    }, {
      url: '../../resources/images/02.jpg',
      title: 'slider6'
    }];
    var swiper = this.swiper = new Swiper(that, {
      data: bannerData,
      itemWidth: 600,
      speed:300, //滚动速度 
      autoplay: 2000, //自动滚动间隔时间(秒)
    });
    this.swiperHandlerTouch = function (e) {
      swiper.swiperTouch(e, that);
    }
    this.swiperHandlerMove = function (e) {
      swiper.swiperMove(e, that);
    }
    this.swiperHandlerMoveEnd = function (e) {
      swiper.swiperMoveEnd(e, that);
    }
    this.setData({
      swiper: swiper
    })
  }
});