$(document).ready(function(){

	/* prepend menu icon */
	$('#nav-wrap').prepend('<div id="menu-icon">Menu</div>');
	
	/* toggle nav */
	$("#menu-icon").on("click", function(){
		$("#nav").toggle();
		$(this).toggleClass("active");
	});

});



/*
var ww = document.body.clientWidth;
$(document).ready(function() {
    $(".toggleMenu").on("click",function(e) {
        e.preventDefault();
        $(".nav").toggle();
    });
    $(".nav li a").each(function() {
        if ($(this).next().length > 0) {
            $(this).addClass("parent");
        };
    })
    adjustMenu();
});
function adjustMenu() {
    if (ww < 800) {
        $(".toggleMenu").css("display", "inline-block");
        $(".nav").hide();
        $(".nav li a.parent").on("click",function(e) {
            e.preventDefault();
            $(this).parent("li").toggleClass('hover');
        });
    } else {
        $(".toggleMenu").css("display", "none");
        $(".nav li").on("hover",function() {
                $(this).addClass('hover');
            }, function() {
                $(this).removeClass('hover');
        });
    }
}
*/

/*
$(document).ready(function() {
    var ww = document.body.clientWidth;
    $(".nav li a").each(function() {
        if ($(this).next().length > 0) {
            $(this).addClass("parent");
        };
    });
    $(".toggleMenu").on("click",function(e) {
    	e.preventDefault();
    	$(".nav").toggle();
	});
    if (ww < 800) {
        $(".toggleMenu").css("display", "inline-block");
        $(".nav li a.parent").on("click",function(e) {
        	e.preventDefault();
            $(this).parent("li").toggleClass('hover');
        });
    } else {
        $(".toggleMenu").css("display", "none");
        $(".nav li").on("hover",function() {
            $(this).addClass('hover');
        }, function() {
            $(this).removeClass('hover');
        });
    }
});
*/



/*
$(document).ready(function() {
    $(".toggleMenu").css("display", "none");
    $(".nav li").on("hover",function() {
        $(this).addClass('hover');
    }, function() {
        $(this).removeClass('hover');
    });
});
*/