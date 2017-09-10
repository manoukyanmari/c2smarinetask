
$(document).ready(function() {
        $('#link').click(function(){
            $("html, body").animate({ scrollTop: 0 }, 600);
            return false;
        });
		$(function(){
    /*  SyntaxHighlighter.all();*/
    });
    $(window).load(function(){
	//$('#slider1 .flex-active-slide').find('.flex-caption').delay(1000);
	//$('#slider1 .flex-active-slide').find('.flex-caption').css("display","block");
	
	
      $('#slider1 .flexslider').flexslider({
        animation: "slide",
        start: function(slider){
          $('body').removeClass('loading');
		
		    $('#slider1 .flex-active-slide').find('.flex-caption').delay(100).fadeIn(1000);
        },
		 after: function(slider) {
         // animate your caption ... 
         // find the item that is the current slide's .slidecaption and animate it
		// $('.flex-active-slide').find('.flex-caption').css("display","none");
		//$('#slider1 .flex-active-slide').find('.flex-caption').css("display","none");
	//	$('#slider1 .flex-active-slide').find('.flex-caption').delay(1000);.slideUp(800)
	  $('#slider1').find('.flex-caption').css("display","none");
         $('#slider1 .flex-active-slide').find('.flex-caption').delay(100).fadeIn(1000);
      }
      });
    });
	
	
	$(window).load(function() {
  $('#slider2 .flexslider').flexslider({
    animation: "slide",
    animationLoop: false,
    itemWidth: 250,
    itemMargin: 5
  });
});
});

