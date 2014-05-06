$(document).ready(function() {

  window.mobilecheck = function() {
    if( navigator.userAgent.match(/Android/i) || navigator.userAgent.match(/webOS/i) || navigator.userAgent.match(/iPhone/i) || navigator.userAgent.match(/iPad/i) || navigator.userAgent.match(/iPod/i) || navigator.userAgent.match(/BlackBerry/i) || navigator.userAgent.match(/Windows Phone/i))
      {
        return true;
      }
     else {
        return false;
      }
  };

    $('#nav').onePageNav({
         currentClass: 'active',
         changeHash: true,
         scrollSpeed: 1200
    });

  if(!window.mobilecheck()) {
    // Init Skrollr
    skrollr.init({forceHeight: false});
  }

  $("img.lazy").lazyload({
        event : "sporty"
    });

  $(window).bind("load", function() {
       var timeout = setTimeout(function() {
        $("img.lazy").trigger("sporty");
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

