
// 详情页
$('.header_main').mouseover(function(){
	$('.Navigation1_left').css('display','block');
})
$('.Navigation1_left').mouseout(function(){
	$(this).css('display','none');
}).mousemove(function(){
	$(this).css('display','block');
})
$('.header_main').mouseout(function(){
	$('.Navigation1_left').css('display','none');
})


$('.Navigation1_left >ul >li').mouseover(function(){
	$('.Navigation1_left >.pho_details').css('display','block');
})
$('.Navigation1_left >.pho_details').mouseout(function(){
	$(this).css('display','none');
}).mousemove(function(){
	$(this).css('display','block');
})

$('.Navigation1_left >ul >li').mouseout(function(){
	$('.Navigation1_left >.pho_details').css('display','none');
})



// 商品图片放大镜

$(function(){

	$('.details_sml >ul >li').mouseover(function(){
		// $(this).index();
		// console.log(ol);
		// $(this).css('border','2px solid #E53E41');
		$('.details_sml >ul >li').eq($(this).index()).css('border','2px solid #E53E41');
		$('.details_sml >ul >li').eq($(this).index()).siblings().css('border','2px solid #fff');
		$('.details_pic >img').eq($(this).index()).css('display','block');
		$('.details_pic >img').eq($(this).index()).siblings().css('display','none');
		$('.big_pic >img').eq($(this).index()).css('display','block');
		$('.big_pic >img').eq($(this).index()).siblings().css('display','none');
	})

	$('.details_pic').mouseover(function() {
        $('.big_pic').css('display', 'block');
    }).mouseout(function() {
        $('.big_pic').css('display', 'none');
    }).mousemove(function(evn) {

        // 求鼠标相对图像的距离
        var x = evn.clientX - $('.details_pic').position().left;
        var y = evn.clientY - $('.details_pic').position().top;

        // document.title = x + ':' + y;

        // 求比例
        // var blx = 1100 / 440;
        var blx = $('.big_pic > img').width() / $('.details_pic > img').width() ;
        // var bly = 1400 / 560;
        var bly = $('.big_pic > img').height() / $('.details_pic > img').height() ;

        // 让大图出现在中心点
        var resX = x * blx - ($('.details_pic > img').width() /2);
        
        var resY = y * bly - ($('.details_pic > img').height() /2);
      
        // 设置滚动条的位置
        $('.big_pic').scrollLeft(resX).scrollTop(resY);
    });
	
});
// 商品介绍栏
$(function(){
	$(window).scroll(function(){
		if($(this).scrollTop() >$('.main_w').offset().top){
			$('#top_fix').css('display','block');
		}else{
			$('#top_fix').css('display','none');
		}
	})
})

// 右侧滑动栏
$(function(){
	var ji;
	$('.ri_slide >ul >li').mouseover(function(){
		ji =$(this).index();
		move($('.ri_slide >ul >li >div').eq(ji),1254,ji);
		$(this).children().eq(0).css('background','#C81623');
	}).mouseout(function(){
		move($('.ri_slide >ul >li >div').eq(ji),1324,ji);
		$(this).children().eq(0).css('background','#7A6E6E');
	})
	var time=[0,1,2,3,4,5,6,7];
	function move(obj,dis,ji){
		console.log(obj);
		clearInterval(time[ji]);
		time[ji] = setInterval(function(){
			var kl = obj.offset().left;
			var speed = (dis-kl)/8;
			if(speed>0){
				speed = Math.ceil(speed);
			}else{
				speed = Math.floor(speed);
			}
			if(kl+speed == dis){
				clearInterval(time[ji]);
			}else{
				obj.offset({left:kl+speed});
			}
		},30)
	}
})