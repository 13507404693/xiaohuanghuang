
$(function () {
	$('.liyao').hover(function(){
		$(this).stop(true,true).animate({
			"top":"-26px"
		})
	},function(){
		$(this).stop(true,true).animate({
			"top":"0px"
		})
	});
    $('#dowebok').fullpage({
        'navigation': false,
        'scrollingSpeed': 500,
        'scrollOverflow': true,
		menu: '#menu',
         //verticalCentered: false,
        anchors: ['page1', 'page2', 'page3', 'page4', 'page5', 'page6','page7','page8','page9','page10'],
        onLeave: function (index, nextIndex, direction) {

        	if(nextIndex == '1'){
        		$('#slideshow').css({'top':'0px'});
        	}

            if (nextIndex == '2'){
               $(".jqing").css({
                	'opacity':'0.2',
                	"filter":"alpha(opacity=20)",
					'width':'36px',
					'height':'56px',
					'left':'220px',
					'top':'380px'
                });
               $('.eigt').css({'opacity':'0',"filter":"alpha(opacity=0)",'top':'-500px'});
               $('.box-d').css({'opacity':'0',"filter":"alpha(opacity=0)"});
			}

			if(nextIndex=='3'){
				$(".phc").css({
                	'opacity':'0',
                	"filter":"alpha(opacity=0)",
					'left':'150px',
					'top':'220px'
                });
               $('.phctitle').css({'opacity':'0',"filter":"alpha(opacity=0)",'top':'-500px'});
               $('.phcbiao').css({'opacity':'0',"filter":"alpha(opacity=0)"});
				
			}

			if(nextIndex=='4'){
				$(".phcyz").css({
                	'opacity':'0',
                	"filter":"alpha(opacity=0)",
					'left':'350px',
					'top':'220px'
                });
               $('.phctitleyz').css({'opacity':'0',"filter":"alpha(opacity=0)",'top':'-500px'});
               $('.phcbiaoyz').css({'opacity':'0',"filter":"alpha(opacity=0)"});
				
			}

			if(nextIndex=='5'){
				$('.tip').css({'top':'50%','left':'50%'});
			}
			
			if (nextIndex == '6') {
				$('.liantitle').css({ "left": "-150%" });
				// $('.bottom-y').css({ "marginTop": "1520px" });
				// $('.top-y').css({ "marginTop": "-520px" });
				// $('.lcpng').css({ "marginLeft": "-1000px" });
			} 
			
			if(nextIndex=='7'){
				$('.fivetitle').css({ "left": "-150%" });
				$('.mos').css({ "right": "-150%" });
				$('.yyu').css({'opacity':'0',"filter":"alpha(opacity=0)"});
				
			}

		    if(nextIndex==8){
		    	$('.fivetitle').css({'right':'30px','bottom':'100px'})
		    }
			
        },
        afterLoad: function (anchorLink, index) {
            if (index == '2') {
                $(".jqing").animate({
                	'opacity':'1',
                	"filter":"alpha(opacity=100)",
					'width':'479px',
					'height':'685px',
					'left':'0px',
					'top':'100px'
                },800);
                 $('.eigt').animate({
                 	'opacity':'1',
                	"filter":"alpha(opacity=100)",
                	'top':'226px'
                },1200,'easeOutBounce');
                 $(".box-d").delay(800).animate({
                	'opacity':'1',
                	"filter":"alpha(opacity=100)",
                },1000);
			}
			if (index == '3') {
				$(".phc").animate({
                	'opacity':'1',
                	"filter":"alpha(opacity=100)",
					'left':'150px',
					'top':'360px'
                },800);
                 $('.phctitle').animate({
                 	'opacity':'1',
                	"filter":"alpha(opacity=100)",
                	'top':'100px'
                },1200,'easeOutBounce');
                 $(".phcbiao").delay(800).animate({
                	'opacity':'1',
                	"filter":"alpha(opacity=100)",
                },1000);
			}

			if (index == '4') {
				$(".phcyz").animate({
                	'opacity':'1',
                	"filter":"alpha(opacity=100)",
					'left':'700px',
					'top':'80px'
                },800);
                 $('.phctitleyz').animate({
                 	'opacity':'1',
                	"filter":"alpha(opacity=100)",
                	'top':'215px'
                },1200,'easeOutBounce');
                 $(".phcbiaoyz").delay(800).animate({
                	'opacity':'1',
                	"filter":"alpha(opacity=100)",
                },1000);
			}
			if(index=='5'){
				$('.tip1').delay(0).animate({'top':'-6px','left':'198px'},400);
				$('.tip2').delay(100).animate({'top':'-210px','left':'200px'},400);
				$('.tip3').delay(200).animate({'top':'-256px','left':'472px'},400);
				$('.tip4').delay(300).animate({'top':'-278px','left':'668px'},400);
				$('.tip5').delay(400).animate({'top':'-232px','left':'876px'},400);
				$('.tip6').delay(500).animate({'top':'-6px','left':'1022px'},400);
			}
			
			if (index == '6') {
				$('.liantitle').animate({ "left": "50%" });
				// $('.top-y').delay(100).animate({ "marginTop": "212px" });
				// $('.bottom-y').delay(100).animate({ "marginTop": "512px" });
				// $('.lcpng').delay(500).animate({ "marginLeft": "0" });
			}
		
			if(index=='7'){				
				$('.fivetitle').animate({ "left": "50%" });
				$('.mos').delay(900).animate({ "right": "50px" });
				$(".y1").delay(100).animate({'opacity':'1',"filter":"alpha(opacity=100)"},1000);
				$(".y2").delay(220).animate({'opacity':'1',"filter":"alpha(opacity=100)"},1000);
				$(".y3").delay(460).animate({'opacity':'1',"filter":"alpha(opacity=100)"},1000);
				$(".y4").delay(400).animate({'opacity':'1',"filter":"alpha(opacity=100)"},1000);
				$(".y5").delay(600).animate({'opacity':'1',"filter":"alpha(opacity=100)"},1000);
				$(".y6").delay(360).animate({'opacity':'1',"filter":"alpha(opacity=100)"},1000);
			}
    
        }

    });

setInterval(function () {
		    $.fn.fullpage.moveSlideRight();
		}, 6000);
});


