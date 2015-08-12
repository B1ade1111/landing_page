
$(document).ready(function() {
	// $(window).resize(function() {
	// 	console.log(window.innerWidth);
	// })
	// $(window).resize();

	$(".top-carousel").owlCarousel({ 
 		autoPlay : true,
 		navigationText : false,
      	slideSpeed : 300,
     	paginationSpeed : 400,
     	singleItem:true
	});
	var owl = $(".top-carousel").data('owlCarousel');
	$(".top-carousel-content .prev").click(function() {
		owl.prev();
	});
	$(".top-carousel-content .next").click(function() {
		owl.next();
	});


	$('.projects .content .animated').hover(function() {
			var $this = $(this);
			var i = 1;
		function myLoop() {
			setTimeout(function() {
				$('.line-strip' + i, $this).css({"opacity": "0.5",
								 "background-color": "#6f9ccb"});
				i++;
				if (i <= 5) {
					myLoop();
				}
			}, 80);
		}
		myLoop();
		$('a:not(.wrapper):nth-child(2)', $this).css({left: "-46%"});
		$('a:not(.wrapper):nth-child(3)', $this).css({right: "100%"});
		$('a:not(.wrapper):nth-child(2)', $this).animate({left: "24%"});
		$('a:not(.wrapper):nth-child(3)', $this).animate({right: "24%"});

	}, function() {
		var $this = $(this);
		var i = 1;
		function myLoop() {
			setTimeout(function() {
				$('.line-strip' + i, $this).css("background-color", "");
				i++;
				if (i <= 5) {
					myLoop();
				}
			}, 80);
		}
		myLoop();
		$('a:not(.wrapper):nth-child(2)', $this).animate({left: "100%"});
		$('a:not(.wrapper):nth-child(3)', $this).animate({right: "-52%"});	
	});

	//плавный якорь
  	$('a[href*=#]').bind("click", function(e) {
	    var anchor = $(this);
	    $('html, body').stop().animate({
	   		scrollTop: $(anchor.attr('href')).offset().top
	    }, 1000);
	    e.preventDefault();
	});
	


});

	// var temp; // 1 --->,  2 <--- for unhover
	// var count = true;
	// $('.projects .content .animated').hover(function() {
	// 		var $this_a = $(this);
	// 		var i;

	// 		$('.line-strip', this).hover(function() {
	// 			var $this_div = $(this);

	// 			if ( (($this_div).is('.line-strip1') === true && count === true) ||
	// 			     (($this_div).is('.line-strip2') === true && count === true) ||
	// 			     (($this_div).is('.line-strip3') === true && count === true) ) {
	// 				i = 1;
	// 				temp = 1; // --->
	// 				count = false;
	// 				function LoopNext() {
	// 					setTimeout(function() {
	// 						$('.line-strip' + i, $this_a).css({"opacity": "0.5",
	// 										  "background-color": "#6f9ccb"});
	// 						i++;
	// 						if (i <= 5) {
	// 							LoopNext();
	// 						}								
	// 					}, 100);	
	// 				}
	// 				LoopNext();
	// 			} else if ( (($this_div).is('.line-strip4') === true && count === true) ||
	// 					    (($this_div).is('.line-strip5') === true && count === true) ) {
	// 				i = 5;
	// 				temp = 2; // <---
	// 				count = false;
	// 				function LoopPrev() {
	// 					setTimeout(function() {
	// 						$('.line-strip' + i, $this_a).css({"opacity": "0.5",
	// 										  "background-color": "#6f9ccb"});
	// 						i--;
	// 						if (i >= 0) {
	// 							LoopPrev();
	// 						}								
	// 					}, 100);	
	// 				}
	// 				LoopPrev();
	// 			}				
	// 		});
	// 		count = true;
	// }, function() {
	// 	$this_a = $(this);
	// 	var i;
	// 	if (temp === 1) { // --->
	// 		i = 1;
	// 		function LoopNextReverse() {
	// 			setTimeout(function () {
	// 				$('.line-strip' + i, $this_a).css("background-color", "");
	// 				i++;
	// 				if(i <= 5) {
	// 					LoopNextReverse();
	// 				}
	// 			}, 100);
	// 		}
	// 		LoopNextReverse();
	// 	}
	// 	if (temp === 2) { // <---
	// 		i = 5;
	// 		function LoopPrevReverse() {
	// 			setTimeout(function () {
	// 				$('.line-strip' + i, $this_a).css("background-color", "");
	// 				i--;
	// 				if(i >= 0) {
	// 					LoopPrevReverse();
	// 				}
	// 			}, 100);
	// 		}
	// 		LoopPrevReverse();
	// 	}	
	// });


	


	


