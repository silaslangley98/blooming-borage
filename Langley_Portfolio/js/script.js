$(function() {

// Typing
	function typing(id, action, callback) {
		$(function(){
		    $('#' + id).typed({
		        strings: ["$('#" + id + "')." + action],
		        typeSpeed: 10,
		        onStringTyped: callback
		    });
		});
	}

//Animate Top View Boxes
	function bringBox(element, tall, up, toTheLeft, toTheRight, id) {
		$(".typed-cursor").remove();
		$(element).animate({
			height: tall,
			marginTop: up,
			marginLeft: toTheLeft,
			left: toTheRight
		});
		$(id).unbind("mouseover");
	}
	
// variables set for matching with meqia queries
	var mq1 = window.matchMedia( "(min-width: 903px)" );
	var mq2 = window.matchMedia( "(min-width: 431px)" );

	if (mq1.matches) {
	
		typing("photo", "mouseover");

// Main Box

		$('#photo').mouseover(function(){
			bringBox("#photoBox", "190px", "-=200px", "0", "0", this);
			$("#photoBox img").css("display", "block");
			$("#photoBox img").css("marginTop", "5px");			
			$("#infoBox").css("borderTop", "none");		
			$(this).css("visibility","hidden");
			$(this).append("<br>");
			$("#languages").show();
			typing("languages", "mouseover", langHover);
		});

		var langHover = function() {
			$('#languages').mouseover(function(){
				bringBox("#leftBox", "179px", "0", "-=151px", "0", this);
				$("#photoBox").css("width", "319px");
				$("#infoBox").css("borderLeft", "none");
				$(this).css("visibility","hidden");
				$(this).append("<br>");
				typing("frameworks", "mouseover", frameHover);
				$("#frameworks").show();	
			});
		}

		var frameHover = function() {
			$('#frameworks').mouseover(function(){
				bringBox("#rightBox", "179px", "0", "0", "330px", this);
				$("#photoBox").css("width", "319px");
				$("#infoBox").css("borderRight", "none");
				$("#photoBox").css("border", "none");
				$("#leftBox").css("borderTop", "none");
				$("#rightBox").css("borderTop", "none");
				$("#upperBox").fadeIn(4000);
				$("#center").css("marginTop", "0");
				$("#infoBox").css("height", "179px")
				$(this).hide();
				$("#languages").hide();
				$("#infoBox > br").remove();
				var name_title = "<div id='title'><p class='larger'>Silas Langley</p><p class='larger'>Web Developer</p><p>Software: <span class='italics'>Photoshop, GIMP, WordPress, Microsoft Office Suite, Moodle, CamStudio</span></p></div>";
				$(name_title).hide().appendTo("#infoBox").fadeIn(4000);
			});
		}

	} else if (mq2.matches) {
		$("#photoBox img").attr("src","images/Stonehenge4.JPG");
		typing("photo", "mouseover (or tap)");
		$('#photo').mouseover(function(){
			bringBox("#photoBox", "90px", "-=100px", "0", "0", this);
			$("#photoBox img").css("display", "block");
			$("#photoBox img").css("marginTop", "2px");
			$("#photoBox img").css("borderBottom", "1px solid #000");
			$("#photoBox img").css("height", "90px");	
			$("#infoBox").css("borderTop", "none");	
			$(this).hide();
			$("#infoBox > br").remove();			
			var name_title = "<div><p>Silas Langley<span class = 'responsiveSocials'><a href='https://github.com/silaslangley98/blooming-borage' target='_blank'><i class='fa fa-github'></i></a><a href='#'><i class='fa fa-linkedin-square'></i></a></span></p><p>Web Developer</p><p><span class='italics'>HTML5, CSS3/SASS, Javascript (including jQuery and AngularJS)</span></p></div>";
			$(name_title).hide().appendTo("#infoBox").fadeIn(4000);
		});

	} else {
		
		typing("photo", "on('tap',...tap here!");
		$("#photo").mouseover(function(){
			bringBox("#photoBox", "190px", "-=160px", "0", "0", this);
			$("#photoBox img").css("display", "block");
			$("#photoBox img").css("marginTop", "2px");		
			$("#infoBox").css("borderTop", "none");		
			$(this).hide();
			$("#infoBox > br").remove();
			var name_title = "<div><p id='name'>Silas Langley</p><span class = 'responsiveSocials'><a href='https://github.com/silaslangley98/blooming-borage' target='_blank'><i class='fa fa-github'></i></a><a href='#'><i class='fa fa-linkedin-square'></i></a></span><p id='webDev'>Web Developer</p><p>Languages:</p><p class='italics'>HTML5, CSS3, Javascript</p><p>Frameworks and Tools:<p class='italics'>jQuery, AngularJS,<br>Bootstrap, Pure CSS</p></div>";
			$(name_title).hide().appendTo("#infoBox").fadeIn(4000);
			var responsiveArrow = "<i id='responsiveDown' class='white fa fa-arrow-circle-down'></i>";
			$("#infoBox").append(responsiveArrow);
		});
	}

// Change location of elearning and socialnetworking screenshots
	if (document.body.clientWidth < 771) {
		var elearningShot = $("#elearning .browserBox").detach();
		$("#elearning").prepend(elearningShot);
		var socialShot = $("#socialnetworking .browserBox").detach();
		$("#socialnetworking").prepend(socialShot);
	}

// Scroll Down
	function scrollDown (item) {
		$('html, body').animate({
		    scrollTop: $(item).offset().top
		}, 1000);
	}

	$("#firstDown").on('click', function (){
		scrollDown("#ecommerce");
	});

	$("#infoBox").on('click', 'i', function(){
		scrollDown("#ecommerce");
	});

	$("#secondDown").on('click', function(){
		scrollDown("#elearning");
	});

	$("#thirdDown").on('click', function(){
		scrollDown("#responsive");
	});

	$("#fourthDown").on('click', function(){
		scrollDown("#socialnetworking");
	});

//Change Header Colors
	function headerChange(id, color1, color2) {
		var idPosition = $(id).offset();
        if($(window).scrollTop() >= idPosition.top){
        	$("h1").css("color", color1);
        	$(".socialIcons i").css("color", color2); 
        	$(".socialIcons i").hover(
            	function() {
            		$(this).css("color", color1);
            	},
            	function() {
            		$(this).css("color", color2);
            	}
            );
    	}
	}

	$(window).scroll(function(){
		headerChange("body", "#fff", "#E6E6E6");
		headerChange("#ecommerce", "#fff", "#E65500");
		headerChange("#elearning", "#000", "#E6E6E6");
		headerChange("#responsive", "#fff", "#E65500");
		headerChange("#socialnetworking", "#000", "#E6E6E6");
	});

	// Refresh browser on browser resize
	$(window).resize(function(){location.reload();});

});