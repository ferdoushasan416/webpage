(function ($) {
"use strict";

const hamburger = document.querySelector(".hamburger");
const navMenu = document.querySelector(".main-menu ul");

hamburger.addEventListener("click", () => {
   hamburger.classList.toggle("active");
   navMenu.classList.toggle("active");
});




$(function() {
    
  var $filter = $('.filter-item-list');
  var $tab = $('.filter-item-list li');
  var $offers = $('.filter-item-box .post-box')
  
  $filter.on('click touch', '.créations',  function(e) {
    e.preventDefault();
    $tab.removeClass('active');
    $(this).addClass('active');
    
    $offers.hide();
    $offers.fadeIn( 700 );
    
  });

  $filter.on('click touch', '.reprises',  function(e) {
    e.preventDefault();
    $tab.removeClass('active');
    $(this).addClass('active');
    
    $offers.show();
    $offers.fadeOut( 400 );
    $offers.filter('.reprises').fadeIn( 400 );
  
  });

  $filter.on('click touch', '.spectacles',  function(e) {
    e.preventDefault();
    $tab.removeClass('active');
    $(this).addClass('active');
    
    $offers.show();
    $offers.fadeOut( 400 );
    $offers.filter('.spectacles').fadeIn( 400 );
   
  });

  $filter.on('click touch', '.artistes',  function(e) {
    e.preventDefault();
    $tab.removeClass('active');
    $(this).addClass('active');
    
    $offers.show();
    $offers.fadeOut( 400 );
    $offers.filter('.artistes').fadeIn( 400 );
   
  });

  $filter.on('click touch', '.compagnies',  function(e) {
    e.preventDefault();
    $tab.removeClass('active');
    $(this).addClass('active');
    
    $offers.show();
    $offers.fadeOut( 400 );
    $offers.filter('.compagnies').fadeIn( 400 );
   
  });

  $filter.on('click touch', '.théâtre',  function(e) {
    e.preventDefault();
    $tab.removeClass('active');
    $(this).addClass('active');
    
    $offers.show();
    $offers.fadeOut( 400 );
    $offers.filter('.théâtre').fadeIn( 400 );
   
  });
  
});



  $(document).ready(function(){
      $('.slider-active').slick({
        prevArrow: '<button type="button" class="slick-prev"><svg width="30px" class="icon flat-color" data-name="Flat Color" viewBox="0 0 24 24"><path d="M21 11H5.41l1.3-1.29a1 1 0 0 0-1.42-1.42l-3 3a1 1 0 0 0 0 1.42l3 3a1 1 0 0 0 1.42 0 1 1 0 0 0 0-1.42L5.41 13H21a1 1 0 0 0 0-2Z" style="fill:currentColor"/></svg></button>',
        nextArrow: '<button type="button" class="slick-next"><svg  width="30px" class="icon flat-color" data-name="Flat Color" viewBox="0 0 24 24"><path d="m21.71 11.29-3-3a1 1 0 0 0-1.42 1.42l1.3 1.29H3a1 1 0 0 0 0 2h15.59l-1.3 1.29a1 1 0 0 0 0 1.42 1 1 0 0 0 1.42 0l3-3a1 1 0 0 0 0-1.42Z" style="fill:currentColor"/></svg></button>',
        autoplay:false,
        loop:true,
        dots:true,
      });
     
  });


    


/* magnificPopup img view */
$('.popup-image').magnificPopup({
	type: 'image',
	gallery: {
	  enabled: true
	}
});



// WOW active
new WOW().init();


})(jQuery);