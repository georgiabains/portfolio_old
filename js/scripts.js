// show/hide content
$(document).ready(function(){
    
    /*main tabs*/
    $(".projectclick").click(function(){
        $(".projects").fadeIn("");
        $(".intro").hide("");
        $(".process").hide("");
        $(".about").hide("");
        $(".contact").hide("");
        $(".credits").hide("");
    });
    
    $(".processclick").click(function(){
        $(".process").fadeIn("");
        $(".intro").hide("");
        $(".projects").hide("");
        $(".about").hide("");
        $(".contact").hide("");
        $(".credits").hide("");
    });
    
    $(".aboutclick").click(function(){
        $(".about").fadeIn("");
        $(".intro").hide("");
        $(".process").hide("");
        $(".projects").hide("");
        $(".contact").hide("");
        $(".credits").hide("");
    });
    
    $(".contactclick").click(function(){
        $(".contact").fadeIn("");
        $(".intro").hide("");
        $(".process").hide("");
        $(".about").hide("");
        $(".projects").hide("");
        $(".credits").hide("");
    });
    
    $(".creditclick").click(function(){
        $(".credits").fadeIn("");
        $(".intro").hide("");
        $(".process").hide("");
        $(".about").hide("");
        $(".projects").hide("");
        $(".contact").hide("");
    });
    
    // icons in process
    $(".iconclick").click(function(){
        $(this).next(".step").fadeToggle("average");
    }); 
    
    $(".iconclick_r").click(function(){
        $(this).next(".step_r").fadeToggle("average");
    }); 
        
    // project navigation
    $(".newlantisclick").click(function(){
        $(".newlantis").fadeIn("");
        $(".tse").fadeOut("");
        $(".spotlight").fadeOut("");
    });
    
    $(".tseclick").click(function(){
        $(".tse").fadeIn("");
        $(".newlantis").fadeOut("");
        $(".spotlight").fadeOut("");
    });
    
    $(".spotlightclick").click(function(){
        $(".spotlight").fadeIn("");
        $(".newlantis").fadeOut("");
        $(".tse").fadeOut("");
    });
    
});

/*smooth scroll to target link*/
$(document).ready(function(){
        $('a[href^="#"]').on('click',function (e) {
            e.preventDefault();
 
            var target = this.hash,
            $target = $(target);
 
            $('html, body').stop().animate({
                'scrollTop': $target.offset().top
            }, 900, 'swing', function () {
                window.location.hash = target;
            });
        });
});

/**
 * @name		Shuffle Letters
 * @author		Martin Angelov
 * @version 	1.0
 * @url			http://tutorialzine.com/2011/09/shuffle-letters-effect-jquery/
 * @license		MIT License
 */
$(document).ready(function(){
    var container = $(".welcome");
    
    container.shuffleLetters("");
    
});

// Google Analytics

  (function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){
  (i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),
  m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)
  })(window,document,'script','https://www.google-analytics.com/analytics.js','ga');

  ga('create', 'UA-103131480-1', 'auto');
  ga('send', 'pageview');

    