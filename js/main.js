// JavaScript Document
var didScroll;
var lastScrollTop = 0;
var delta = 5;
var navbarHeight = $('header').outerHeight();

$(window).scroll(function(event){
	"use strict";
    didScroll = true;
});

setInterval(function() {
	"use strict";
    if (didScroll) {
        hasScrolled();
        didScroll = false;
    }
}, 250);

function hasScrolled() {
	
    var st = $(this).scrollTop();
    
    // Make sure they scroll more than delta
    if(Math.abs(lastScrollTop - st) <= delta)
        return;
    
    // If they scrolled down and are past the navbar, add class .nav-up.
    // This is necessary so you never see what is "behind" the navbar.
    if (st > lastScrollTop && st > navbarHeight){
        // Scroll Down
        $('header').removeClass('nav-down').addClass('nav-up');
    } else {
        // Scroll Up
        if(st + $(window).height() < $(document).height()) {
            $('header').removeClass('nav-up').addClass('nav-down');
        }
    }
    
    lastScrollTop = st;
}
// MENUANITMATION
$(document).ready(function(){
	"use strict";
  $(".hamburger").click(function(){
	  
    $(this).toggleClass("is-active");
  });
});

// FULLSCREEN MENU
$(document).ready(function(){
	"use strict";
    $(".button a").click(function(){
        $(".overlay").fadeToggle(200);
       $(this).toggleClass('btn-open').toggleClass('btn-close');
    });
	
	
	
});


$('.overlay').on('click', function(){
      "use strict";
    $(".button a").toggleClass('btn-open').toggleClass('btn-close');
    open = false;
	
	
});
// HOVER MENU
$('.main-nav a').hover(function() {
 "use strict";
  var dataId = $(this).data('id');
  //console.log(dataId);
  $('.hover-nav').fadeIn().addClass('open').scrollTop(0);
  $('#hover-nav-' + dataId).show().siblings().hide();
  $(this).addClass('active').siblings().removeClass('active');

});

$('.menu-bar').on('mouseleave', function() {
 "use strict";
  if ($('.hover-nav').hasClass('open')) {

    $('.hover-nav').removeClass('.open').fadeOut();
    $('.main-nav a').removeClass('active');

  }

});

$('.newsletter-trigger').on('click', function() {
 "use strict";
  $('.newsletter-fixed').toggleClass('open');

});


$('.newsletter-close').on('click', function() {
 "use strict";
  $('.newsletter-fixed').removeClass('open');

});

// HEART RATE


$('.owl-1').owlCarousel({
    loop:true,
    margin:0,
    nav:false,
	dots:false,
	autoplay:true,
	linked: '.owl-2',
    responsive:{
        0:{
            items:1
        },
        600:{
            items:1
        },
        1000:{
            items:1
        }
    }
});


$('.owl-2').owlCarousel({
    loop:true,
    margin:20,
    nav:false,
	autoplay:true,
	dots:false,
	linked: '.owl-1',
    responsive:{
        0:{
            items:1
        },
        600:{
            items:1
        },
        1000:{
            items:1
        }
    }
});

$('.owl-3').owlCarousel({
    loop:true,
    margin:10,
    nav:true,
	navText: [$('.am-prev'),$('.am-next')],
	autoplay:true,
	dots:false,
    responsive:{
        375:{
            items:3,
        },
        768:{
			nav:false,
            items:6,
        },
        1035:{
            items:8,
        }
    }
});

$('.owl-3').find('.owl-nav').removeClass('disabled');
$('.owl-3').on('changed.owl.carousel', function(event) {
	"use strict";
	$(this).find('.owl-nav').removeClass('disabled');
});


$('.owl-4').owlCarousel({
    loop:true,
    margin:15,
    nav:false,
	navText: [$('.am-prev'),$('.am-next')],
	autoplay:true,
	autoplayTimeout:2500,
	autoplayHoverPause:false,
	dots:false,
    responsive:{
        0:{
            items:2
        },
        600:{
            items:2
        },
        1000:{
            items:3
        }
    }
});

$('.owl-4').find('.owl-nav').removeClass('disabled');
$('.owl-4').on('changed.owl.carousel', function(event) {
	"use strict";
	$(this).find('.owl-nav').removeClass('disabled');
});

// ===== Scroll to Top ==== 
$(window).scroll(function() {
    if ($(this).scrollTop() >= 50) {        // If page is scrolled more than 50px
        $('#return-to-top').fadeIn(200);    // Fade in the arrow
    } else {
        $('#return-to-top').fadeOut(200);   // Else fade out the arrow
    }
});
$('#return-to-top').click(function() {      // When arrow is clicked
    $('body,html').animate({
        scrollTop : 0                       // Scroll to top of body
    }, 500);
});


$('.search-trigger').on('click', function() {

  $('.search-fixed').toggleClass('open');
  $('.search-fixed input').focus();

});

$('.cart-trigger').on('click', function() {

  $('.cart-popup').toggleClass('open');


});

// LOAD MOREE BUTTON 1
$( document ).ready(function () {
		$(".moreBox").slice(0, 3).show();
		if ($(".blogBox:hidden").length !== 0) {
			$("#loadMore1").show();
		}		
		$("#loadMore1").on('click', function (e) {
			e.preventDefault();
			$(".moreBox:hidden").slice(0, 6).slideDown();
			if ($(".moreBox:hidden").length === 0) {
				$("#loadMore1").fadeOut('slow');
			}
		});
	});
// LOAD MOREE BUTTON 2
$( document ).ready(function () {
		$(".moreBox2").slice(0, 3).show();
		if ($(".blogBox2:hidden").length !== 0) {
			$("#loadMore2").show();
		}		
		$("#loadMore2").on('click', function (e) {
			e.preventDefault();
			$(".moreBox2:hidden").slice(0, 6).slideDown();
			if ($(".moreBox2:hidden").length === 0) {
				$("#loadMore2").fadeOut('slow');
			}
		});
	});

