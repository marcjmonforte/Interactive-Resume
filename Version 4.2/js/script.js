////////////
// SCRIPT //
////////////

// Events on load

$(document).ready(function() {
    $('#landingPage').delay(10).fadeIn(1500);
    $('#landingPageQuote').delay(950).fadeIn(750);
    $('#landingPageCTA').delay(1450).fadeIn(750);
    $('#whoPage').delay(1451).fadeIn(750);
    $('.aboutColumns').delay(1452).fadeIn(750);
    $('#contactPage').delay(1453).fadeIn(750);
    $(window).scroll(function(e){
        parallax();
    })
    caption();
});

// Scroll-based events

$(window).scroll(function() {   
    if ( $(window).scrollTop() > 300 ) {  
        $('#leftColumn').fadeIn(750);
        $('#middleColumn').delay(300).fadeIn(750);
        $('#rightColumn').delay(800).fadeIn(750);
    }
    if ( $(window).scrollTop() > 1200 ) {  
        $('#form1').fadeIn(750);
    }
});

///////////////
// VARIABLES //
///////////////

function parallax(){
    var scrolled = $(window).scrollTop();
    $('#landingPage').css('top', -(scrolled * 0.2) + 'px');
}

function caption(){
    $("#htmlLogo").hover(
        function(){
            $("#captionPlaceholder").hide();
           $("#htmlCaption").show();
        },
        function(){
            $("#htmlCaption").hide();
            $("#captionPlaceholder").show();
        }
    );

    $("#cssLogo").hover(
        function(){
            $("#captionPlaceholder").hide();
           $("#cssCaption").show();
        },
        function(){
            $("#cssCaption").hide();
            $("#captionPlaceholder").show();
        }
    );

    $("#javascriptLogo").hover(
        function(){
            $("#captionPlaceholder").hide();
           $("#javascriptCaption").show();
        },
        function(){
            $("#javascriptCaption").hide();
            $("#captionPlaceholder").show();
        }
    );

    $("#jqueryLogo").hover(
        function(){
            $("#captionPlaceholder").hide();
           $("#jqueryCaption").show();
        },
        function(){
            $("#jqueryCaption").hide();
            $("#captionPlaceholder").show();
        }
    );

    $("#bootstrapLogo").hover(
        function(){
            $("#captionPlaceholder").hide();
           $("#bootstrapCaption").show();
        },
        function(){
            $("#bootstrapCaption").hide();
            $("#captionPlaceholder").show();
        }
    );

    $("#foundationLogo").hover(
        function(){
            $("#captionPlaceholder").hide();
           $("#foundationCaption").show();
        },
        function(){
            $("#foundationCaption").hide();
            $("#captionPlaceholder").show();
        }
    );

    $("#sublimeLogo").hover(
        function(){
            $("#captionPlaceholder").hide();
           $("#sublimeCaption").show();
        },
        function(){
            $("#sublimeCaption").hide();
            $("#captionPlaceholder").show();
        }
    );

    $("#balsamiqLogo").hover(
        function(){
            $("#captionPlaceholder").hide();
           $("#balsamiqCaption").show();
        },
        function(){
            $("#balsamiqCaption").hide();
            $("#captionPlaceholder").show();
        }
    );

    $("#microsoftLogo").hover(
        function(){
            $("#captionPlaceholder").hide();
           $("#microsoftCaption").show();
        },
        function(){
            $("#microsoftCaption").hide();
            $("#captionPlaceholder").show();
        }
    );

    $("#photoshopLogo").hover(
        function(){
            $("#captionPlaceholder").hide();
           $("#photoshopCaption").show();
        },
        function(){
            $("#photoshopCaption").hide();
            $("#captionPlaceholder").show();
        }
    );

    $("#illustratorLogo").hover(
        function(){
            $("#captionPlaceholder").hide();
           $("#illustratorCaption").show();
        },
        function(){
            $("#illustratorCaption").hide();
            $("#captionPlaceholder").show();
        }
    );

    $("#generalAssemblyLogo").hover(
        function(){
            $("#captionPlaceholder").hide();
           $("#generalAssemblyCaption").show();
        },
        function(){
            $("#generalAssemblyCaption").hide();
            $("#captionPlaceholder").show();
        }
    );

    $("#uciLogo").hover(
        function(){
            $("#captionPlaceholder").hide();
           $("#uciCaption").show();
        },
        function(){
            $("#uciCaption").hide();
            $("#captionPlaceholder").show();
        }
    );

    $("#ticLogo").hover(
        function(){
            $("#captionPlaceholder").hide();
           $("#ticCaption").show();
        },
        function(){
            $("#ticCaption").hide();
            $("#captionPlaceholder").show();
        }
    );

    $("#centerlivingpeaceLogo").hover(
        function(){
            $("#captionPlaceholder").hide();
           $("#centerlivingpeaceCaption").show();
        },
        function(){
            $("#centerlivingpeaceCaption").hide();
            $("#captionPlaceholder").show();
        }
    );

    $("#kumonLogo").hover(
        function(){
            $("#captionPlaceholder").hide();
           $("#kumonCaption").show();
        },
        function(){
            $("#kumonCaption").hide();
            $("#captionPlaceholder").show();
        }
    );
}
