

//alert('こんにちは！閲覧いただきありがとうございます！')


//スムーススクロール
$(function(){
  $('a[href^="#"]').click(function() {                             // #で始まるリンクをクリックしたら実行
    let speed = 500; 
    let href= $(this).attr("href");                                // 変数hrefに$(this).attr(“href”);という値を代入
    let target = $(href == "#" || href == "" ? 'html' : href);     // ||は’または’の意味 href が#と同じ値であるか、もしくは、 href が “” と同じ値である場合、htmlを変数targetに代入します。
    let position = target.offset().top;                            // 対象先の縦の位置を取得して代入
    $('body,html').animate({scrollTop:position}, speed, 'swing');
    return false;
  });
});

$(function() {
  $('.img1').fadeIn(1500);
});

$(function() {
  $('.menu').fadeIn(1500);
});


$(function(){
  $(window).scroll(function (){
      $('.second, .third, .fourth').each(function(){
          var elemPos = $(this).offset().top;
          var scroll = $(window).scrollTop();
          var windowHeight = $(window).height();
          if (scroll > elemPos - windowHeight + 150){
              $(this).addClass('scrollin');
          }
      });
  });
});




$(function(){
  $(window).scroll(function (){
      $('.h-img1').each(function(){
          var elemPos = $(this).offset().top;
          var scroll = $(window).scrollTop();
          var windowHeight = $(window).height();
          if (scroll > elemPos - windowHeight + 100){
              $(this).addClass('scrollin');
          }
      });
  });
});

$(function(){
  $(window).scroll(function (){
      $('.h-img2').each(function(){
          var elemPos = $(this).offset().top;
          var scroll = $(window).scrollTop();
          var windowHeight = $(window).height();
          if (scroll > elemPos - windowHeight + 200){
              $(this).addClass('scrollin');
          }
      });
  });
});

$(function(){
  $(window).scroll(function (){
      $('.h-img3').each(function(){
          var elemPos = $(this).offset().top;
          var scroll = $(window).scrollTop();
          var windowHeight = $(window).height();
          if (scroll > elemPos - windowHeight + 170){
              $(this).addClass('scrollin');
          }
      });
  });
});

$(function(){
  $(window).scroll(function (){
      $('.m-img1').each(function(){
          var elemPos = $(this).offset().top;
          var scroll = $(window).scrollTop();
          var windowHeight = $(window).height();
          if (scroll > elemPos - windowHeight + 100){
              $(this).addClass('scrollin');
          }
      });
  });
});

$(function(){
  $(window).scroll(function (){
      $('.m-img2').each(function(){
          var elemPos = $(this).offset().top;
          var scroll = $(window).scrollTop();
          var windowHeight = $(window).height();
          if (scroll > elemPos - windowHeight +   105){
              $(this).addClass('scrollin');
          }
      });
  });
});

$(function(){
  $(window).scroll(function (){
      $('.m-img3').each(function(){
          var elemPos = $(this).offset().top;
          var scroll = $(window).scrollTop();
          var windowHeight = $(window).height();
          if (scroll > elemPos - windowHeight + 130){
              $(this).addClass('scrollin');
          }
      });
  });
});
  

$(function(){
  $(window).scroll(function (){
      $('.f-img1').each(function(){
          var elemPos = $(this).offset().top;
          var scroll = $(window).scrollTop();
          var windowHeight = $(window).height();
          if (scroll > elemPos - windowHeight + 200){
              $(this).addClass('fadein');
          }
      });
  });
});

$(function(){
  $(window).scroll(function (){
      $('.copy').each(function(){
          var elemPos = $(this).offset().top;
          var scroll = $(window).scrollTop();
          var windowHeight = $(window).height();
          if (scroll > elemPos - windowHeight + 10){
              $(this).addClass('fadein');
          }
      });
  });
});