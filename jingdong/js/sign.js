	// $('#sign_one').css('display','none')
	// 要改.register_sign的高度
	/*密码登陆的情况下是330px*/
	/*height:330px;*/
	/*扫码登陆的情况下是361px*/
	// 密码登陆为.sign_pwd
	// 二维码登陆为.sign_QR
	$('.sign_left').click(function(){
		$('.sign_QR').css('display','block');
		$('.sign_pwd').css('display','none');
		$('.register_sign').css('height','361px');
		$('.sign_left').css('color','red')
		$('.sign_right').css('color','black')
	});
	$('.sign_right').click(function(){
		$('.sign_QR').css('display','none');
		$('.sign_pwd').css('display','block');
		$('.register_sign').css('height','330px');
		$('.sign_left').css('color','black')
		$('.sign_right').css('color','red')
	});
	$('#QR >img').eq(0).mouseover(function(){
		$(this).animate({
            'left': 45,
        }, 200);
        $('#QR >img').eq(1).fadeIn(200);

	}).mouseout(function(){
		$(this).animate({
            'left': 95,
        }, 200);
        $('#QR >img').eq(1).fadeOut(200);
	})
