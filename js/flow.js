$(function(){
	var item_num = $('div.item').length;
	var deg = 360.0/item_num;
	var red = (deg*Math.PI/180.0);
	var circle_r = $("div.item").width() * 1.3;
	$('div.item').each(function(i, elem) {
		var x = Math.cos(red * i - Math.PI/2) * circle_r + circle_r;
		var y = Math.sin(red * i - Math.PI/2) * circle_r + circle_r;
		$(elem).css('left', x);
		$(elem).css('top', y);
	});
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


