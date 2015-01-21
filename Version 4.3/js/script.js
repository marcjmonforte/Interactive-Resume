////////////
// SCRIPT //
////////////

// Events on load

$(document).ready(function() {
    $(window).scroll(function(e){
        var scrolled = $(window).scrollTop();
        $('#landingPage').css('top', -(scrolled * 0.15) + 'px');
    }) 
    $('.contactButton').on('click', function(){
        alert("Thanks - response coming your way ASAP!")
    })  
});


















