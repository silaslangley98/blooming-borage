
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
			footnote: '<i>Tao Te Ching</i>, translated by J.H. McDonald.'.link("http://www.wright-house.com/religions/taoism/tao-te-ching.html")
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

});
