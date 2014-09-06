$(function() {

// Typing
	function typing(id, callback) {
		$(function(){
		    $('#' + id).typed({
		        strings: ["$('#" + id + "').mouseover"],
		        typeSpeed: 10,
		        onStringTyped: callback
		    });
		});
	}

	typing("photo");


// Main Box
//var photoHover = function() {
	$('#photo').mouseover(function(){
		$(".typed-cursor").remove();
		$("#photoBox").animate({
			height: "190px",
			marginTop: "-=200px"
		});
		$("#photoBox img").css("display", "block");
		$("#photoBox img").css("marginTop", "5px");
		
		
		$("#infoBox").css("borderTop", "none");
		$("#photo").unbind("mouseover");
		
		$("#photo").css("visibility","hidden");
		$("#photo").append("<br>");
		// var lang = "<p id='languages'></p>";
		// $("#infoBox").append(lang);
		$("#languages").show();
		typing("languages", langHover);
		
	
		// $("#infoBox").css("margin","10px auto");
	});
//}

	var langHover = function() {
		$('#languages').mouseover(function(){
			$(".typed-cursor").remove();

			$("#leftBox").animate({
				height: "179px",
				marginLeft: "-=151px"
			});	
			$("#photoBox").css("width", "319px");
			$("#infoBox").css("borderLeft", "none");
			// $("#photoBox").css("width","319px");
			$("#languages").unbind("mouseover");
			$("#languages").css("visibility","hidden");
			$("#languages").append("<br>");
			
			// var frame = "<p id='frameworks'></p>";
			// $("#infoBox").append(frame);
			typing("frameworks", frameHover);
			$("#frameworks").show();
	  		/* $("#langList").css("display","block");
	  		$("#langList").css("borderLeft","5px solid #014EFE"); */
		});
	}

	var frameHover = function() {
		$('#frameworks').mouseover(function(){
			$(".typed-cursor").remove();
			$("#rightBox").animate({
				height: "179px",
				left: "330px"
			});	
			$("#photoBox").css("width", "319px");
			$("#infoBox").css("borderRight", "none");
			/* $("#photoBox").css("width","319px"); */
			$("#frameworks").unbind("mouseover");

			$("#photoBox").css("border", "none");
			$("#leftBox").css("borderTop", "none");
			$("#rightBox").css("borderTop", "none");
			$("#upperBox").fadeIn(4000);
			$("#center").css("marginTop", "0");
			$("#infoBox").css("height", "179px")
			$("#frameworks").hide();
			$("#languages").hide();
			$("#infoBox > br").remove();
			var name_title = "<div id='title'><p class='larger'>Silas Langley</p><p class='larger'>Web Developer</p><p>Software: <span class='italics'>Photoshop, GIMP, WordPress, Microsoft Office Suite, Moodle, CamStudio</span></p></div>";
			$(name_title).hide().appendTo("#infoBox").fadeIn(4000);
		});
	}

// Scroll Down

	$("#firstDown").bind('click', function(){
		// ("#down-button_image").click(function () {
			$('html, body').animate({
			    scrollTop: $("#ecommerce").offset().top
			}, 1000);
		// });

	});

	$("#secondDown").bind('click', function(){
		// ("#down-button_image").click(function () {
			$('html, body').animate({
			    scrollTop: $("#elearning").offset().top
			}, 1000);
		// });

	});

	$("#thirdDown").bind('click', function(){
		// ("#down-button_image").click(function () {
			$('html, body').animate({
			    scrollTop: $("#responsive").offset().top
			}, 1000);
		// });

	});

	$("#fourthDown").bind('click', function(){
		// ("#down-button_image").click(function () {
			$('html, body').animate({
			    scrollTop: $("#socialnetworking").offset().top
			}, 1000);
		// });

	});

	$(window).scroll(function(){
        var scrollTop = 620;
        if($(window).scrollTop() >= scrollTop){
        	$(".socialIcons i").css("color", "#E65500");
        }
        $(".socialIcons i").hover(
            	function() {
            		$(this).css("color","#fff");
            	},
            	function() {
            		$(this).css("color", "#E65500");
            	}
            );
    });


	$(window).scroll(function(){
        var scrollTop = 1290;
        if($(window).scrollTop() >= scrollTop){
            $("h1").css("color", "#000");
            $(".socialIcons i").css("color", "#E6E6E6");
            $(".socialIcons i").hover(
            	function() {
            		$(this).css("color","#000");
            	},
            	function() {
            		$(this).css("color", "#E6E6E6");
            	}
            );
        }
    });

	$(window).scroll(function(){
        var scrollTop = 1980;
        if($(window).scrollTop() >= scrollTop){
            $("h1").css("color", "#fff");
            $(".socialIcons i").css("color", "#E65500");
            $(".socialIcons i").hover(
            	function() {
            		$(this).css("color","#fff");
            	},
            	function() {
            		$(this).css("color", "#E65500");
            	}
            );
        }
    });

    $(window).scroll(function(){
        var scrollTop = 2640;
        if($(window).scrollTop() >= scrollTop){
            $("h1").css("color", "#000");
            $(".socialIcons i").css("color", "#E6E6E6");
            $(".socialIcons i").hover(
            	function() {
            		$(this).css("color","#000");
            	},
            	function() {
            		$(this).css("color", "#E6E6E6");
            	}
            );
        }

    });
});

