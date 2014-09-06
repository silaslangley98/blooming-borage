$(function() {

// Typing
	function typing() {
		$(function(){

	      $("#photo").typed({
	        strings: ["First sentence.", "First Second sentence."],
	        typeSpeed: 50,
	        backDelay: 1000
      	  });

  		});
		
	}

	typing();

});