$(document).ready(function() {
    $('#nav').onePageNav({
         currentClass: 'active',
         changeHash: true,
         scrollSpeed: 1200
    });

    
	// Init Skrollr
	var s = skrollr.init({forceHeight: false});

	$("img.lazy").lazyload({
        event : "sporty"
    });

	$(window).bind("load", function() {
   		 var timeout = setTimeout(function() {
   		 	$("img.lazy").trigger("sporty")
   		 	$('.lazy-background').each(function() {

		        var lazy = $(this);
		        var src = lazy.attr('data-src');

		        $('<img>').attr('src', src).load(function(){
		            lazy.css('background-image', 'url("'+src+'")');
		        });

		    });
   		 },
   		 	500);
	});

	// Refresh Skrollr after resizing our sections
	//s.refresh($('#landing'));
 });

