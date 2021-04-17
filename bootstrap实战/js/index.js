$(function () {
    // /***************手机端导航栏的实现***************/
    $('.nav-btn').on('click',function () {
        if ($('.mini-nav').css('left')<= '0'){
            $('.mini-nav').animate({left:'0'},1000)
        } else{
            $('.mini-nav').animate({left:'-60%'},1000)
        }
    });


    $('.li-time').click(function () {
        $('.mini-nav').animate({left:'-60%'},1000);
    })  ;
    $('.li-treat').click(function () {
        $('.mini-nav').animate({left:'-60%'},1000);
    })  ;
    $('.li-team').click(function () {
        $('.mini-nav').animate({left:'-60%'},1000);
    });



    // /*************电脑端吸顶*************/
  $(document).scroll(function () {
      if ($(document).scrollTop() >= $('#carousel-example-generic').height()){
          $('#suction').css({
              'position':'fixed',
              'top':'0',
              'background':'#ffffff',
              'z-index':'999',
              'width':'120%',
              'margin-left':'-20px'
          })
      }else{
          $('#suction').css({
              'position':'static',
              'background':'transparent',
              'width':'100%',
              'margin-left':'0px'
          })
      }
  });

    // /**/ 点击我想预约
    $('.order input').click(function () {
        $('.want').show(500);
        $('.text p').html('治疗*');
        $('.btns').html('发送请求');
    });

    $('.question input').click(function () {
        $('.want').hide(500);
        $('.text p').html('信息*');
        $('.btns').html('问你的问题');
    });


    //右边图标
   $('.right-side p').map(function () {
       // console.log($(this));
       $(this).click(function () {
           if ($(this).css('left') == '0px'){
               $(this).animate({'left':'-54px'},100).siblings().animate({'left':'0'},100);
           }else{
               $(this).animate({'left':'0'},100)
           }

       })
   })



});