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

    // ---------------------------------------------

    // 인스타 인피니티 슬라이드
    $('.main-insta-section >.main-insta >.insta_l >.slider').slick({
        autoplay : true ,
        autoplaySpeed : 0 ,
        speed: 10000 ,
        cssEase: "linear" ,
        arrows : false ,
        pauseOnHover : true ,
      })
    
    
    // 업버튼 
    $('.up-btn-area >.up-btn').click(function(){
    
        // $('html, body').scrollTop(0)
        $('html, body').animate({
          'scrollTop' : 0 ,
        } , 800)
        
      });

});

$(window).scroll(function(){
  
    let scrollTop = $(this).scrollTop()
    // 내가 선택한 위치가 어딘지 알려주는 메서드
  
    if( scrollTop > 100 ){
      $('.up-btn-area >.up-btn').addClass('active')
    }
    if( scrollTop < 100 ){
      $('.up-btn-area >.up-btn').removeClass('active')
    }
    
  });