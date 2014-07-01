
$(function() {

	var quoteArray = [
		{
			quote: '"faith seeking understanding. . ." - St. Anselm',
			footnote: "original title for Anselm's <i>Proslogion</i>."
		},
		{
			quote: '"Therefore do not seek to understand in order to believe, but believe that thou mayest understand."- St. Augustine',
			footnote: 'from <i>Ten Homilies on the First Epistle of John Tractate XXIX on John 7:14-18</i>, §6, translated by Phillip Schaff.',
		},
		{
			quote: '"The heart has its reasons which reason does not know." - Pascal',
			footnote: 'from <i>Pensées</i>, Project Gutenberg Translation.'
		},
		{
			quote: '"If God did not exist, it would be necessary to invent him." - Voltaire',
			footnote: "from <i>Epistle to the author of the book, The Three Impostors</i>, translated by Jack Iverson."
		},
		{
			quote: '"The tao that can be described is not the eternal Tao. The name that can be spoken is not the eternal Name."" - Lao-Tzu',
			footnote: '<a href="http://www.wright-house.com/religions/taoism/tao-te-ching.html" style="color: #fff;"><i>Tao Te Ching</i>, translated by J.H. McDonald.</a>'
		},
		{
			quote: '"It is wrong always, everywhere, and for anyone, to believe anything upon insufficient evidence." - W.K. Clifford',
			footnote: 'from <i>The Ethics of Belief</i> (1879).'
		},
		{
			quote: '"I regard [religion] as a disease born of fear and as a source of untold misery to the human race." - Bertrand Russell',
			footnote: 'from <i>Has Religion Made Useful Contributions to Civilization?</i> (1930).'
		},
		{
			quote: '"And that soul is the Self of all that is, this is the Real, this the Self. That thou art" - Chandogya Upanishad 6.8.7',
			footnote: 'as translated by Charles Johnston, (1899)'
		},
		{
			quote: '"No testimony is sufficient to establish a miracle, unless the testimony be of such a kind that its falsehood would be more miraculous than the fact which it endeavours to establish." -- David Hume.',
			footnote: 'from <i>Of Miracles</i>, (1748).'
		},
		{
			quote: '"I do not feel obliged to believe that the same God who has endowed us with senses, reason, and intellect has intended us to forgo their use and by some other means to give us knowledge which we can attain by them." - Galileo',
			footnote: 'as quoted in <i>Aspects of Western Civilization : Problems and Sources in </i> (1988) by Perry McAdow Rogers, p. 53.'
		},
		{	quote: '"We cannot know what God is, but rather what He is not."',
			footnote: '<i>Summa Theologica</i> I.3. Translated by the Fathers of the English Dominican Province.'
		}

	];

	var philosopher = [
		{
			name: 'Lao-Tzu',
			description: 'Ancient Chinese philosopher',
			dates: "uncertain dates, possibly 600's or 500's BCE",
			books: '<i>Tao Te Ching</i>',
			knownFor: 'legendary founder of Taoism -- suggested that the Tao, or the underlying Reality of the universe, is beyond our conception.'
		},
		{
			name: 'ibn Sina, known as Avicenna in the West',
			description: 'Medieval Persian Muslim philosopher',
			dates: '980-1037 CE',
			books: '<i>The Cure</i>',
			knownFor: 'argued from the existence of the world to the conclusion that God must exist.'
		},
		{
			name: 'ibn Rushd, known as Averroes in the West',
			description: "Medieval Spanish Muslim philosopher",
			dates: '1126-1198',
			books: '<i>The Decisive Treatise</i> and <i>The Incoherence of the Incoherence</i>',
			knownFor: "argued that the Qu'ran should be interpreted allegorically when it conflicts with philosophy."
		},
		{
			name: 'Thomas Aquinas',
			description: 'Medieval Catholic Italian philosopher',
			dates: '1225-1274 CE',
			books: '<i>Summa Theologica</i>',
			knownFor: 'developed five arguments for the existence of God and argued that the soul is incomplete when separate from the body.'
		},
		{
			name: 'Renée Descartes',
			description: 'French Catholic Philosopher',
			dates: '1596-1650 CE',
			books: '<i>Meditations on First Philosophy</i>',
			knownFor: 'claimed that we can know with certainty that God exists and the soul can exist separate from the body.'
		},
		{
			name: 'Blaise Pascal',
			description: 'French Catholic Philosopher',
			dates: '1623-1662 CE',
			books: '<i>Pensées</i>',
			knownFor: "argued that it makes practical sense to bet on God's existence."
		},
		{
			name: 'David Hume',
			description: 'Scottish philosopher of skepticism',
			dates: '1711-1776 CE',
			books: '<i>Dialogues Concerning Natural Religion',
			knownFor: "argued that we should we be skeptical of reports of miracels and of design arguments for God's existence."
		},
		{
			name: 'Søren Kierkegaard',
			description: 'Danish Protestant philosopher',
			dates: '1813-1855 CE',
			books: '<i>Concluding Unscientific Postscript</i> and <i>Philosophical Fragments</i>',
			knownFor: 'argued for the importance of taking a leap of faith.'
		},
		{
			name: 'William James',
			description: 'American philosopher of pragmatism',
			dates: '1842-1910 CE',
			books: '<i>Varieties of Religious Experience</i> and "The Will to Believe"',
			knownFor: 'argued that religious belief is justified even without logical argument.'   
	},
		{
			name: 'Alvin Plantinga',
			description: 'contemporary American Protestant Philosopher',
			dates: '1932- CE',
			books: '<i>Warranted Christian Belief</i>',
			knownFor: 'proponent of Reformed epistemology -- argues that religious experience provides proper grounds for belief in God.'
		}
	];
	
	window.setInterval(function(){showQuote()}, 3000);
	
	function showQuote(){
		$("#introQuote").hide();
		var randomQuote = Math.floor(Math.random() * 11);
		var randomX = Math.floor((Math.random() * 910) + 1);
		var randomY = Math.floor((Math.random() * 400) + 1);
		$("#quote").css({"left": randomX, "top": randomY});
		$("#quote").text(quoteArray[randomQuote].quote);
		$("#footnote").addClass("fixBottomRight");
		$("#footnote").html(quoteArray[randomQuote].footnote);
	
	}

	$('.fade-area').children().hover(function() {
		$(this).siblings().stop().fadeTo(500,0.5);
	}, function() {
		$(this).siblings().stop().fadeTo(500,1);
	});



	$("#philosopherCarousel li").mouseover(function () {
	    var index = $(this).index() - 5;
	    $("#PhilosopherInfo").empty();
	    $("#PhilosopherInfo").append("<b>" + philosopher[index].name + " ( " + philosopher[index].dates + " )<hr>" +
	    	philosopher[index].description + "<br>" +
	    	"Writings: " + philosopher[index].books + "<br>" +
	    	"Known for: " + philosopher[index].knownFor) + "</b>";
	   	$("#PhilosopherInfo").css({
	   		backgroundImage: "none",
	   		backgroundColor: "#eee"
	   	});
	});

});
