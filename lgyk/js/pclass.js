
$(function () {
	var $url = window.location.href;
	var $id = $url.split('=')[1];

	$('.hover').hover(function(){
		$('.hover').animate({
			'opacity':'1',
			"filter":"alpha(opacity=100)",
			"top": "300px",
  			"left": "-68px"
		});
	},function(){
		$('.hover').animate({
			'opacity':'0',
			"filter":"alpha(opacity=0)",
			"top": "280px",
  			"left": "0px"
		});
	});
	$('.pc').delay(100).animate({
		'opacity':'1',
		"filter":"alpha(opacity=100)",
		'top':'366px'
	},1000);
	$('.mob').delay(300).animate({
		'opacity':'1',
		"filter":"alpha(opacity=100)",
		'top':'506px'
	},1000);
	$('.ipo').delay(500).animate({
		'opacity':'1',
		"filter":"alpha(opacity=100)",
		'top':'620px'
	},800);
	$('.green').animate({
		'opacity':'1',
		"filter":"alpha(opacity=100)",
		'right':'338px',
		'bottom':'52px'
	},1200);
	$('.bai').delay(500).animate({
		'opacity':'1',
		"filter":"alpha(opacity=100)",
		'right':'44px',
		'bottom':'0px'
	},1200);
	$('.phcb').animate({
		'opacity':'1',
		"filter":"alpha(opacity=100)",
		'top':'100px'
	},1200);
	$(".pclassp").css({
		'opacity':'0.2',
    	"filter":"alpha(opacity=20)",
		'width':'36px',
		'height':'56px',
		'left':'586px',
		'top':'450px'
	}).animate({
		'opacity':'1',
		"filter":"alpha(opacity=100)",
		'width':'849px',
		'height':'538px',
		'left':'200px',
		'top':'336px'
	},800);
	$(".phcbg").css({
		'opacity':'0',
    	"filter":"alpha(opacity=0)",
		'left':'86px',
		'top':'170px'
	}).animate({
		'opacity':'1',
		"filter":"alpha(opacity=100)",
		'left':'86px',
		'top':'88px'
	},1200);
	$(".phcbgs").css({
		'opacity':'0',
    	"filter":"alpha(opacity=0)",
		'left':'86px',
		'top':'170px'
	}).animate({
		'opacity':'1',
		"filter":"alpha(opacity=100)",
		'left':'580px',
		'top':'88px'
	},1200);

	 $('.eigt').animate({
	 	'opacity':'1',
		"filter":"alpha(opacity=100)",
		'top':'226px'
	},1200,'easeOutBounce');
	 $(".box-d").delay(800).animate({
		'opacity':'1',
		"filter":"alpha(opacity=100)",
	},1000);
	$(document).scroll(function(){
		var $dtop = $(document).scrollTop();
		if($dtop>=4860){
			$('.p6-1').delay(900).animate({
				'opacity':"1",
				"filter":"alpha(opacity=100)",
				"top": "388px",
  				"left": "218px"
			},1000);
			$('.p6-2').delay(600).animate({
				'opacity':"1",
				"filter":"alpha(opacity=100)",
				"top": "330px",
  				"left": "430px"
			},1000);
			$('.p6-3').delay(300).animate({
				'opacity':"1",
				"filter":"alpha(opacity=100)",
				"top": "270px",
  				"left": "606px"
			},1000);
		}
	});


	$('.rli').hover(function(){
		$(this).find('.zz').stop(true,true).animate({
			'top':'6px'
		});
		$(this).find('.pt').stop(true,true).animate({
			'top':'6px'
		});
	},function(){
		$(this).find('.zz').stop(true,true).animate({
			'top':'350px'
		});
		$(this).find('.pt').stop(true,true).animate({
			'top':'362px'
		});
	});
	function tab(i){
        $('.bli').click(function(){
            $(this).addClass('nav').siblings('li').removeClass('nav');
            $('.dy').eq($(this).index()).show().siblings().hide();
        });
        $('.bli').eq(i).addClass('nav').siblings('li').removeClass('nav');
        $('.dy').eq(i).show().siblings().hide();
    }
    tab($id);

    $(".xli").hover(function(){
    	$(this).addClass('xli'+parseInt($(this).index()+1));
    },function(){
    	$(this).removeClass('xli'+parseInt($(this).index()+1))
    });
});


