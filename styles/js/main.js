$(document).ready(function() {
    $('#nav').onePageNav({
         currentClass: 'active',
         changeHash: true,
         scrollSpeed: 1200
    });

	// Init Skrollr
	var s = skrollr.init();

	$("img.lazy").lazyload({
        event : "sporty"
    });

	$(window).bind("load", function() { 
   		 var timeout = setTimeout(function() { $("img.lazy").trigger("sporty") }, 500);
	});
	 
	// Refresh Skrollr after resizing our sections
	//s.refresh($('#landing'));
 });

