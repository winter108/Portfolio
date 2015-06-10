$(document).ready(function() {

  var appInsights=window.appInsights||function(config){
        function s(config){t[config]=function(){var i=arguments;t.queue.push(function(){t[config].apply(t,i)})}}var t={config:config},r=document,f=window,e="script",o=r.createElement(e),i,u;for(o.src=config.url||"//az416426.vo.msecnd.net/scripts/a/ai.0.js",r.getElementsByTagName(e)[0].parentNode.appendChild(o),t.cookie=r.cookie,t.queue=[],i=["Event","Exception","Metric","PageView","Trace"];i.length;)s("track"+i.pop());return config.disableExceptionTracking||(i="onerror",s(""+i),u=f[i],f[i]=function(config,r,f,e,o){var s=u&&u(config,r,f,e,o);return s!==!0&&t[""+i](config,r,f,e,o),s}),t
    }({
        instrumentationKey:"12ec713d-fd60-46a0-965f-7ceb021787a7"
    });
    
    window.appInsights=appInsights;
    appInsights.trackPageView();

  window.mobilecheck = function() {
    if( navigator.userAgent.match(/Android/i) || navigator.userAgent.match(/webOS/i) || navigator.userAgent.match(/iPhone/i) || navigator.userAgent.match(/iPad/i) || navigator.userAgent.match(/iPod/i) || navigator.userAgent.match(/BlackBerry/i) || navigator.userAgent.match(/Windows Phone/i))
      {
        return true;
      }
     else {
        return false;
      }
  };

    // $('#nav').onePageNav({
    //      currentClass: 'active',
    //      changeHash: true,
    //      scrollSpeed: 1200
    // });

  // if(!window.mobilecheck()) {
  //   // Init Skrollr
  //   skrollr.init({forceHeight: false});
  // }

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
  $("#contact").load("../footer.html");

  //Remove quick links of the same page
  $("#project").load("../section.html", function(){
    var pageId = $("html").data("page-id");
    $("#project").find("#" + pageId).parent().remove();
  });

  //Load project header to the page
  var $landing = $("#landing");
  $landing.load("../project-header.html", function() {
    var bgImgurl = $landing.data("bg-img");
    $landing.data('center', "background-position: 20% -30px;")
            .data('top-bottom', "background-position: 20% 300px;")
            .data('anchor-target', "#landing");

    $landing.find("#page-title").text($landing.data('title'));
    $landing.find("#page-subtitle").text($landing.data('subtitle'));
    
    $landing.css("background-image", 
      "url(" + bgImgurl + ")"); 
  });
 });

