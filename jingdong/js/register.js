	//得到焦点时将提示信息显示
	$('#reg_name >input').focus(function(){
		$('#reg_name >i').css('opacity','1');
	});
	//当验证账号的地方失去焦点后判断
	$('#reg_name >input').blur(function(){
		var reg=/^[\u4e00-\u9fa5\w\-]$/;
		var str=$(this).val();
		console.log(str);
		console.log(str.length);
		// var str=reg.test(str);
		if(reg.test(str)){
			$('#reg_name >i').html('非法字符');
			$('#reg_name >i').css('opacity','1');
			$('#reg_name >i').css('color','red');	
			$('#reg_name >.fal').css('display','block');
		}else if($(this).val().length <5){
			$('#reg_name >i').html('长度只能在4-20个字符之间');
			$('#reg_name >i').css('opacity','1');
			$('#reg_name >i').css('color','red');	
			$('#reg_name >.fal').css('display','block');
		}else if($(this).val().length >20){
			$('#reg_name >i').html('长度只能在4-20个字符之间');
			$('#reg_name >i').css('opacity','1');
			$('#reg_name >i').css('color','red');	
			$('#reg_name >.fal').css('display','block');
		}else{
			$('#reg_name >i').html('a');
			$('#reg_name >i').css('opacity','0');
			$('#reg_name >i').css('color','#fff');
			$('#reg_name >.Right').css('display','block');
			$('#reg_name >.fal').css('display','none');
		}
	});
	//当验证密码的地方失去焦点后判断
	$('#reg_pass >input').focus(function(){
		$('#reg_pass >i').css('opacity','1')
	});
	$('#reg_pass >input').blur(function(){
		var reg=/^[\w\-\.\?\!]$/;
		var str=$(this).val();
		console.log(str);
		var str=reg.test(str);
		if(reg.test(str)){
			$('#reg_pass >i').html('非法字符');
			$('#reg_pass >i').css('opacity','1');
			$('#reg_pass >i').css('color','red');	
			$('#reg_pass >.fal').css('display','block');
		}else if($(this).val().length <5){
			$('#reg_pass >i').html('长度只能在4-20个字符之间');
			$('#reg_pass >i').css('opacity','1');
			$('#reg_pass >i').css('color','red');	
			$('#reg_pass >.fal').css('display','block');
		}else if($(this).val().length >20){
			$('#reg_pass >i').html('长度只能在4-20个字符之间');
			$('#reg_pass >i').css('opacity','1');
			$('#reg_pass >i').css('color','red');	
			$('#reg_pass >.fal').css('display','block');
		}else{
			$('#reg_pass >i').html('a');
			$('#reg_pass >i').css('opacity','0');
			$('#reg_pass >i').css('color','#fff');
			$('#reg_pass >.Right').css('display','block');
			$('#reg_pass >.fal').css('display','none');
		};
		// if($(this).val() === $('#reg_pass2 >input').val()){
		// 	$('#reg_pass2 >i').html('a');
		// 	$('#reg_pass2 >i').css('opacity','0');
		// 	$('#reg_pass2 >i').css('color','#fff');
		// 	$('#reg_pass2 >.Right').css('display','block');
		// 	$('#reg_pass2 >.fal').css('display','none');
		// }
	});
	$('#reg_pass2 >input').focus(function(){
		$('#reg_pass2 >i').css('opacity','1')
	});
	$('#reg_pass2 >input').blur(function(){
		if($(this).val() == ''){
			$('#reg_pass2 >i').html('密码不能为空');
			$('#reg_pass2 >i').css('opacity','1');
			$('#reg_pass2 >i').css('color','red');	
			$('#reg_pass2 >.fal').css('display','block');
		}else if($(this).val() == $('#reg_pass >input').val()){
			$('#reg_pass2 >i').html('a');
			$('#reg_pass2 >i').css('opacity','0');
			$('#reg_pass2 >i').css('color','#fff');
			$('#reg_pass2 >.Right').css('display','block');
			$('#reg_pass2 >.fal').css('display','none');
		}else{
			$('#reg_pass2 >i').html('两次密码输入不一致');
			$('#reg_pass2 >i').css('opacity','1');
			$('#reg_pass2 >i').css('color','red');	
			$('#reg_pass2 >.fal').css('display','block');
		}
	});
	$('#reg_pho >input').focus(function(){
		$('#reg_pho >i').css('opacity','1');
		$('#reg_pho >.fal').css({'background-position':'0px -100px','display':'block'});
	});
	$('#reg_pho >input').blur(function(){
		var reg = /^1[34578]\d{9}$/;
		var str=$(this).val();
		// console.log(str);
		// console.log(reg.test(str));
		if(!reg.test(str)){
			$('#reg_pho >i').html('格式错误');
			$('#reg_pho >i').css('color','red');	
			$('#reg_pho >.fal').css({'background-position':'-17px -100px','display':'block'});
			// $('#reg_pho >.fal').css({'background-position':'0px -100px','display':'none'});
		}else{
			$('#reg_pho >i').html('a');
			$('#reg_pho >i').css('opacity','0');
			$('#reg_pho >i').css('color','#fff');
			$('#reg_pho >.Right').css('display','block');
			$('#reg_pho >.fal').css('display','none');
		}
	});
	var i=2;
	$('.Verification >img').eq(i).css('display','block');
	$('.Verification').click(function(){
		for(var j=0;j<6;j++){
			$('.Verification >img').eq(j).css('display','none');
		}
		i=(Math.floor(Math.random()*6));
		$('.Verification >img').eq(i).css('display','block');
	});
	$('#reg_pic >input').focus(function(){
		$(this).attr('placeholder','')
		$('#reg_pic >i').css('opacity','1');
		$('#reg_pic >.fal').css({'background-position':'0px -100px','display':'block'});
	});
	$('#reg_pic >input').blur(function(){
		$(this).attr('placeholder','请输入验证码')
		$('#reg_pic >i').css('opacity','0');
		$('#reg_pic >.fal').css({'background-position':'0px -100px','display':'none'});
	});