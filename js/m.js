// alert("画像をクリックすると意味が出てきます")

let mySwiper = new Swiper ('.swiper', {
    loop: true, 
    slidesPerView:3, 
    centeredSlides : true,  //アクティブなスライドを中央に表示
    direction: 'horizontal',
    effect: 'coverflow',  //スライドのエフェクトを coverflow に
    spaceabetween: 50,
    
    // autoplay: {
    //     delay: 3000, // スライドが切り替わるまでの表示時間(ミリ秒)
    //     stopOnLast: true, // 最後のスライドまで表示されたら自動再生を中止するか
    //     disableOnInteraction: true // ユーザーのスワイプ操作を検出したら自動再生を中止するか
    // },
    pagination: {  //ページネーションを表示
      el: '.swiper-pagination',
      clickable: true,  //アイコンをクリックすると対応するスライドに移動
    },
   
    navigation: {  //ナビゲーションボタンを表示
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
    coverflowEffect: {
      slideShadows: false,
    },
});
  


// モーダルウィンドウを開く
$('.js-modal-open').on('click', function(){
	var target = $(this).data('target');
	var modal = document.getElementById(target);
	scrollPosition = $(window).scrollTop();
  
	$('body').addClass('fixed').css({'top': -scrollPosition});
	$(modal).fadeIn();
	return false;
});
  
  // モーダルウィンドウを閉じる
  $('.close').on('click', function(){
	$('body').removeClass('fixed');
	window.scrollTo( 0 , scrollPosition );
	$('.js-modal').fadeOut();
	return false;
});