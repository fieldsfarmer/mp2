$(document).ready(function(){
    $(window).scroll(function(){
    var a = $(window).scrollTop();
      if(a > 0){
        $("#nav-bar").animate({height: "60px"}, 30);
        $(".title").animate({ fontSize: "16px" }, 30);
        // $("#pingyao").animate({ fontSize: "24px" }, 30);
      } else {
        $("#nav-bar").animate({height: "80px"}, 30);
        $(".title").animate({fontSize: "24px"}, 30);
        // $("#pingyao").animate({ fontSize: "36px" }, 30);
      }
    });

    // $(window).scroll(function(){    
    //     var scroll_top = $(window).scrollTop();
    //     if(scroll_top>100){
    //         $('header').removeClass('large-header').addClass('small-header');
    //     } else{
    //         $('header').removeClass('small-header').addClass('large-header');
    //     }
    // });

    $(document).foundation({
        orbit: {
            animation: 'fade',
        }
    });

});

