$(document).ready(function () {
    
    // 메인
    $('.main-slider').slick({
        autoplay: true ,
        autoplaySpeed : 1500 , 
        dots: true ,
        pauseOnHover: false ,
        arrows : false ,
    });
    // 메인 슬라이드 버튼
    $('.main-visual>.section01>.main-slider-wrap >.prev-btn').click(function(){
        $('.main-slider').slick('slickPrev')
    });
    $('.main-visual>.section01>.main-slider-wrap >.next-btn').click(function(){
        $('.main-slider').slick('slickNext')
    });

    // ---------------------------------------------

    // 서브
    $('.slider02').slick({
        autoplay: false ,
        dots: true ,
        pauseOnHover: false ,
        arrows : false ,
    });
    // 서브 슬라이드 버튼
    $('.main-visual >.section02 >.sub-slide-wrap >.prev-btn').click(function(){
        $('.slider02').slick('slickPrev')
    });
    $('.main-visual >.section02 >.sub-slide-wrap >.next-btn').click(function(){
        $('.slider02').slick('slickNext')
    });


});