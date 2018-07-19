var mySwiper = new Swiper ('.swiper-container', {
    direction: 'vertical',
//  loop: true,

    keyboardControl: true,//使用键盘方向键控制slide滑动
    mousewheelControl: true,//使用鼠标滚轮控制slide滑动
    
    paginationClickable: true,//点击分页器的指示点分页器会控制Swiper切换
    
    pagination: '.swiper-pagination',//如果需要分页器
    
})  
mySwiper.slideTo(2);
