	// 北京
	$(function(){
		// console.log($('#place').html());
		for(var i=0;i<35;i++){
			if($('#place').html() == $('.ul_place >li').eq(i).html()){
				$('.ul_place >li').eq(i).css('background','#f00')
			}else{
				$('.ul_place >li').eq(i).css('background','#fff')
			}
		}
		$('.ul_place >li').click(function(){
			console.log($(this).index());
			var hei = $('.ul_place >li').eq($(this).index()).html()
			$('#place').html(hei);
			for(var i=0;i<35;i++){
			if($('#place').html() == $('.ul_place >li').eq(i).html()){
				$('.ul_place >li').eq(i).css('background','#f00')
			}else{
				$('.ul_place >li').eq(i).css('background','#fff')
			}
		}
		})
		
	})
	






	// jq1为图片 jq2为按钮 cli1为向左按钮，cli2为向右 ,col1为按钮原来的颜色,col2为按钮变换的颜色，time 为定时器的时间
	// 不知道什么原因无法放到$(function(){})里面
	lunbo($('.live_pic >img'),$('#liveli >ul >li'),$('#livele'),$('#liveri'),'#FFFFFF','#FD3131',2000);
	function lunbo(jq1,jq2,cli1,cli2,col1,col2,time){
			jq1.timer =null;
			var showIndex = 0;
			jq1.ele = 0;
			jq1.eq(showIndex).css('display', 'block');
			jq2.eq(showIndex).css('background',col2);
			// console.log(jq2.eq(showIndex));
			// console.log(jq2.index());
			// 鼠标移入按钮定时器停止 移出时再次启动
			
			jq2.mouseover(function(){
				clearInterval(jq1.timer);
				jq1.ele = $(this).index();
				jq1.eq(jq1.ele).fadeIn(200);
				jq2.eq(jq1.ele).css('background',col2);
				jq2.eq(jq1.ele).siblings().css('background',col1);
				jq1.eq(jq1.ele).siblings().fadeOut(200);
			}).mouseout(function(){
				play();
			});
			// 点击向左向右按钮使得图片切换，如果不点击就自动切换，点击一下后如果
			// 不在点击了也一样，自动轮播。
			
			// 对这两个按钮进行了直接的封装
			function cli(obj,num1,num2,num3){
				obj.click(function(){
					clearInterval(jq1.timer);
					jq2.eq(jq1.ele).css('background',col1);
					jq1.eq(jq1.ele).fadeOut(200);
					if(num1>0){
						jq1.ele = jq1.ele + (num1);
						if(jq1.ele > num2){
							jq1.ele = num3;
						}
					}else{
						jq1.ele = jq1.ele + (num1);
						if(jq1.ele < num2){
							jq1.ele = num3;
						}
					}
					jq1.eq(jq1.ele).fadeIn(200);
					jq2.eq(jq1.ele).css('background',col2);
					// 点击后立即启动定时器
					setTimeout(function(){
						play();
					},0);
				});
			}
			cli(cli1,-1,0,jq2.index());
			cli(cli2,1,jq2.index(),0);
			// 用函数把定时器封装一下
			function play(){
				jq1.timer = setInterval(function(){
					jq1.eq(jq1.ele).fadeOut(200);
					jq2.eq(jq1.ele).css('background',col1);
		            // 下一张
		            jq1.ele++;
		            // 下一张显示图，下标为 1
		            jq1.ele > jq2.index() && (jq1.ele = 0);
		            // 淡入
		            jq1.eq(jq1.ele).fadeIn(200);
		            jq2.eq(jq1.ele).css('background',col2);
		            // console.log(ele);
				},time);
			}
			play();
	}

	


	// 利用js封装了一个鼠标移入移出事件函数，同时加一点点的效果
	// co1,co2 就是你自己原来的颜色，用于移出后恢复（有默认颜色）
	// cg1,cg2,就是你要改变的颜色。（有默认颜色）
	function hov(obj1,obj2,co1='#E3E4E5',co2='#E3E4E5',cg1='#fff',cg2='#ccc'){
		obj1.mouseover(function(){
			obj2.css('display','block');
			obj1.css({'background':cg1,'border':'1px solid '+cg2,'border-bottom':'0'});
		});
		obj2.mouseout(function(){
			obj2.css('display','none');
			obj1.css({'background':co1,'border':'1px solid '+co2});
		}).mousemove(function(){
			obj2.css('display','block');
			obj1.css({'background':cg1,'border':'1px solid '+cg2});
		});
		obj1.mouseout(function(){
			obj2.css('display','none');
			obj1.css({'background':co1,'border':'1px solid '+co2});
		});
	}

	hov($('#place'),$('.ul_place'));
	// 标题的我的京东
	hov($('.ul_shortcut_my'),$('.ul_shortcut_my_m'));
	// 标题的客户服务
	hov($('.ul_shortcut_ser'),$('.ul_shortcut_ser_details'));
	// 标题的网站导航
	hov($('.ul_shortcut_web'),$('.ul_shortcut_web_details'));
	// 标题的手机京东
	hov($('.pho_jd'),$('.pho_jd_details'));
	// 我的购物车
	hov($('.car'),$('#car_details'),'#fff');

	// 侧边导航栏淡入淡出
	$('.Navigation_left >ul >li').mouseover(function(){
		$('.pho_details').show();
	}).mouseover(function(){
		$('.pho_details').show();
	});

	$('.pho_details').mouseout(function(){
		$('.pho_details').css('display','none');
	}).mousemove(function(){
		$('.pho_details').css('display','block');
	});

	$('.Navigation_left >ul >li').mouseout(function(){
		$('.pho_details').hide();
	});

	// 轮播图
	lunbo($('#Navigation_mid_au_pic >li'),$('.img_index >li'),$('#turn_left'),$('#turn_right'),'#fff','red',4000);


	// 秒杀的时钟
	$(function(){
		// 检测时间的分秒是否小于10
		function checkNum(num){
			if(num<10){
				num = '0'+num;
			} 
			return num;
		}
		setInterval(function(){
			var newda = new Date(2018,10,1,00,00,00);
			var oldda = new Date();
			var diff = parseInt((newda.getTime() - oldda.getTime())/1000);
			var h = parseInt((diff/3600)%24);
			h = checkNum(h);
			var m = parseInt((diff/60)%60);
			m = checkNum(m);
			
			var s = parseInt(diff%60);
			s = checkNum(s);
			$('#timer_hou').html(h);
			$('#timer_min').html(m);
			$('#timer_sec').html(s);
			// console.log(h,m,s);
		},1000)

	});
	// 红线移动
	$('.Sale_more >a').eq(1).mouseover(function(){
		$('#lines').animate({
			'left':50
		},100);
		$('#Sale_details2').animate({
			'left':0
		},100);
		$('#Sale_details1').animate({
			'left':-180
		},100)
	});
	$('.Sale_more >a').eq(0).mouseover(function(){
		$('#lines').animate({
			'left':10
		},100);
		$('#Sale_details2').animate({
			'left':180
		},100);
		$('#Sale_details1').animate({
			'left':0
		},100);
	});

	// 向左向右的效果
	// obj1为向左按钮，obj2为向右按钮，obj3为要移动的对象，dis为每次移动的距离
	goto($('.to_le'),$('.to_ri'),$('.clothes >ul'),1000)
	function goto(obj1,obj2,obj3,dis){
		obj1.click(function(){
			// var lo = parseInt($('.clothes >ul').eq(i).css('left'));
			for(var j =0;j<3;j++){
				if(parseInt(obj3.eq(j).css('left')) < -dis){
					obj3.eq(j).css('left',dis);
				}
			}
			for(var i= 0;i<3;i++){
				obj3.eq(i).animate({
					'left':parseInt(obj3.eq(i).css('left'))-dis
				})
			}
		})
		obj2.click(function(){
				for(var j =0;j<3;j++){
					if(parseInt(obj3.eq(j).css('left')) > dis){
						obj3.eq(j).css('left',-dis);
					}
				}
				for(var i= 0;i<3;i++){
					obj3.eq(i).animate({
						'left':parseInt(obj3.eq(i).css('left'))+dis
					})
				}
		})
	}
	goto($('#com_bo_le'),$('#com_bo_ri'),$('.com_bottom >ul'),1170)

	// 玩3c
	goto($('#mai_le'),$('#mar_ri'),$('.play_left >.play_main >ul').not('.play_main_ul'),590);
	goto($('#ri_le'),$('#ri_ri'),$('.play_right >.play_main >ul').not('.play_main_ul'),590)






	// $(function(){
	// 	$('.to_le').click(function(){
	// 		// var lo = parseInt($('.clothes >ul').eq(i).css('left'));
	// 		for(var j =0;j<3;j++){
	// 			if(parseInt($('.clothes >ul').eq(j).css('left')) < -1000){
	// 				$('.clothes >ul').eq(j).css('left',1000);
	// 			}
	// 		}
	// 		for(var i= 0;i<3;i++){
	// 			$('.clothes >ul').eq(i).animate({
	// 				'left':parseInt($('.clothes >ul').eq(i).css('left'))-1000
	// 			})
	// 		}
	// 	})
	// 	$('.to_ri').click(function(){
	// 			for(var j =0;j<3;j++){
	// 				if(parseInt($('.clothes >ul').eq(j).css('left')) > 1000){
	// 					$('.clothes >ul').eq(j).css('left',-1000);
	// 				}
	// 			}
	// 			for(var i= 0;i<3;i++){
	// 				$('.clothes >ul').eq(i).animate({
	// 					'left':parseInt($('.clothes >ul').eq(i).css('left'))+1000
	// 				})
	// 			}
	// 	})
	// })




	// 秒杀栏的自动轮播图
	$(function(){
		var mar =1;
		var timer1 =null;
		var lele =0;
		$('.au_clothes >ul >li').eq(0).css('background','#f00');
		plau();
		function plau(){
			timer1=setInterval(function(){
				if(mar >0){
					$('#au_left').css('display','block');
					$('#au_right').css('display','none');
					$('.au_clothes >ul >li').eq(0).css('background','#f00');
					$('.au_clothes >ul >li').eq(1).css('background','#342A2D');
				}else{
					$('#au_left').css('display','none');
					$('#au_right').css('display','block');
					$('.au_clothes >ul >li').eq(1).css('background','#f00');
					$('.au_clothes >ul >li').eq(0).css('background','#342A2D');
				}
				mar = -mar;
			},1000)
		}
		// 停止定时器
		$('.au_clothes').mouseover(function(){
			clearInterval(timer1);
		}).mouseout(function(){
			plau();
		});
		$('.au_clothes >ul >li').mouseover(function(){
			lele = $(this).index();
			// console.log(lele);
			$('.au_clothes >ul >li').eq(lele).css('background','#f00');
			$('.au_clothes >div').eq(lele).css('display','block');
			$('.au_clothes >ul >li').eq(lele).siblings().css('background','#342A2D');
			$('.au_clothes >div').eq(lele).siblings().css('display','none');
			$('.au_clothes >ul').css('display','block');
		})
	})	

	// 移动效果(不知道什么原因，对#com_bot_le没有用，单独又可以使用)
	function mov(obj1, obj2,num){
		var la= 0;
		var ol = parseInt(obj2.css('left'));
		obj1.mouseover(function(){
			la = $(this).index();
			obj2.eq(la).animate({
				'left':ol+num
			},100)
		}).mouseout(function(){
			obj2.eq(la).animate({
				'left':ol
			},100)
		})
	};
	mov($('.find_list >ul >li'),$('.find_list >ul >li >img'),-4);
	mov($('.prize_details >ul >li'),$('.prize_details >ul >li >img'),4);
	mov($('.enjoy_main >ul >li'),$('.enjoy_main >ul >li >img'),-10);
	mov($('.enjoy_main_rig >ul >li'),$('.enjoy_main_rig >ul >li >img'),-4);
	mov($('.com_left >.com_ul >li'),$('.com_left >.com_ul >li >img'),-4);
	mov($('.com_right >.com_ul >li'),$('.com_right >.com_ul >li >img'),-4);
	mov($('.com_left >.com_pic_left'),$('.com_left >.com_pic_left >img'),-4);
	mov($('.com_right >.com_pic_left'),$('.com_right >.com_pic_left >img'),-4);
	mov($('#play_le'),$('#play_le img'),-4);
	mov($('#play_ri'),$('#play_ri img'),-4);
	mov($('.play_main >.play_main_ul >li'),$('.play_main >.play_main_ul >li >img'),-4);
	mov($('.play_right >.play_main > ul >li'),$('.play_right >.play_main > ul >li >img'),-4);

	function mov2(obj1,obj2,num){
		var ol = parseInt(obj2.css('left'));
		obj1.mouseover(function(){
			obj2.animate({
				'left':ol +num
			},100)
		}).mouseout(function(){
			obj2.animate({
				'left':ol
			},100)
		})
	}
	mov2($('#com_bot_le'),$('#com_bot_le >img'),-4);


	// 排行榜的红线
	$('.rank_box_head > ul >li').mouseover(function(){
		// console.log($(this).index());
		var to = $(this).index();
		$('#rank_line').animate({
			'left':to*78
		},100);
		// $('.rank_box_main >ul').eq(to).css('display','block');
		$('.rank_box_main >ul').eq(to).fadeIn(100);
		// $('.rank_box_main >ul').eq(to).siblings().css('display','none');
		$('.rank_box_main >ul').eq(to).siblings().fadeOut(100);		
	})






	// 会买专辑的轮播图
	lunbo($('.buy_list >div'),$('#buy_le >li'),$('#list_left'),$('#list_right'),'#C8C8C8','#E01222',4000);

	//觅me的轮播图
	lunbo($('.live_box >a'),$('#live_ul >li'),$('#live_le'),$('#live_ri'),'#C7C7C7','#E31F2F',2000);
		

	// 左侧滚动栏
	$(function(){
		var floor_list = [];
		for(var xx =4;xx<9;xx++ ){
				floor_list[floor_list.length] = $('.main >div').eq(xx).offset().top;
			}
		var flag = true;
		var timer3 = null;
		// 滚动时颜色发生变化
		$(window).scroll(function(){
			var tl = ($(this).scrollTop());
			for(var fl=0;fl<5;fl++){
				if(tl >= floor_list[fl]){
					for(var ii =0;ii<5;ii++){
						$('.le_slide >ul >li').eq(ii).css('background','#918888');
					}
					$('.le_slide >ul >li').eq(fl).css('background','#D70B1C')
				}
			}
			if(!flag){
				clearInterval(timer3);
			}
			flag =false;
		});
		// 点击时发生滚动
		for(var fl =0;fl<5;fl++){
			$('.le_slide >ul >li').click(function(){
				clearInterval(timer3);
				console.log('1');
				var tol = $('.main >div').eq($(this).index()+4).offset().top;
				var th = $(window).scrollTop();
				var speed = 0;
				timer3 = setInterval(function(){
					flag = true;
					speed = (tol - th)/8;
					console.log(speed);
					speed = speed >0?Math.ceil(speed):Math.floor(speed); 
					document.documentElement.scrollTop = th + speed ;
					th = $(window).scrollTop();
					// console.log(th);
					// console.log(tol);
				},30)
			})
		}
		// 当滚动到某一个位置时左侧栏消失或显示
		$(window).scroll(function(){
			if($(this).scrollTop() >$('.timer_go').offset().top){
				$('.le_slide').fadeIn(100);
				$('.mid_slide').slideDown();
				$('.mid_slide').css('display','block');		
			}else{
				$('.le_slide').fadeOut(100);
				$('.mid_slide').slideUp(1);
			}
		})
	})
	// 回到顶层
	$(function(){
		var timer4 =null;
		$('#di').click(function(){
			clearInterval(timer4);
			var tol =$(window).scrollTop();
			timer4 = setInterval(function(){
					
					var speed = (0-tol)/8;
					speed = speed >0?Math.ceil(speed):Math.floor(speed); 
					document.documentElement.scrollTop = tol + speed;
					tol = $(window).scrollTop();
					if(tol == 0){
						clearInterval(timer4);
					}
				},30)
		})

	})


	// 右侧滑动栏滑动
	$(function(){
		var ji;
		$('.ri_slide >ul >li').mouseover(function(){
			ji =$(this).index();
			move($('.ri_slide >ul >li >div').eq(ji),1254,ji);
			// $('.ri_slide >ul >li ').eq(ji).css('background','#C81623');
			$(this).children().eq(0).css('background','#C81623');
		}).mouseout(function(){
			move($('.ri_slide >ul >li >div').eq(ji),1324,ji);
			// $('.ri_slide >ul >li ').eq(ji).css('background','#7A6E6E');
			$(this).children().eq(0).css('background','#7A6E6E');
		})
		var time=[0,1,2,3,4,5,6,7];
		function move(obj,dis,ji){
			// console.log(obj);
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
	// 右侧底部滑动栏
	$(function(){
		var ji;
		$('.rto_slide >ul >li').mouseover(function(){
			ji =$(this).index();
			move($('.rto_slide >ul >li >div').eq(ji),1254,ji);
			// $('.ri_slide >ul >li ').eq(ji).css('background','#C81623');
			$(this).children().eq(0).css('background','#C81623');
		}).mouseout(function(){
			move($('.rto_slide >ul >li >div').eq(ji),1324,ji);
			// $('.ri_slide >ul >li ').eq(ji).css('background','#7A6E6E');
			$(this).children().eq(0).css('background','#7A6E6E');
		})
		var time=[8,9];
		function move(obj,dis,ji){
			// console.log(obj);
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

