///////////////
// VARIABLES //
///////////////

function parallax(){
    var scrolled = $(window).scrollTop();
    $('#landingPage').css('top', -(scrolled * 0.3) + 'px');
    $('#landingName').css('bottom', -(scrolled * 0.59) + 'px');
    $('#firstRow').css('bottom', -(scrolled * 0.59) + 'px');
    $('#landingTitle').css('bottom', -(scrolled * 0.55) + 'px');
}
////////////
// SCRIPT //
////////////

$(document).ready(function() {
	$(window).scroll(function(e){
    	parallax();
	});
	$(window).load(function(){  
        $('#landingPage').fadeIn('slow', function() {  
            $(this).fadeTo(1500, 1);  
        });  
    }); 
    $(window).load(function(){  
        $('#firstRow').fadeIn('slow', function() {  
            $(this).delay(400*2).fadeTo(2000, 1);  
        });  
    });  
	$(window).load(function(){  
        $('#landingName').fadeIn('slow', function() {  
            $(this).delay(400*4).fadeTo(2000, 1);  
        });  
    });  
    $(window).load(function(){  
        $('#landingTitle').fadeIn('slow', function() {  
            $(this).delay(400*5).fadeTo(2000, 1);  
        });  
    }); 
})
