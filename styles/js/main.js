$(document).ready(function() {
    $('#nav').onePageNav({
         currentClass: 'active',
         changeHash: true,
         scrollSpeed: 1200
    });

	// Init Skrollr
	var s = skrollr.init();
	 
	// Refresh Skrollr after resizing our sections
	//s.refresh($('#landing'));
 });

