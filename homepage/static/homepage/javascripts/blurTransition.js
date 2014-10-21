$(document).ready(function() {
	
	var backgrounds = $('#backgrounds').children('.background');
	fadeOut(0, backgrounds);
});

function fadeOut(currNum, backgrounds) {
	newCurrNum = currNum % backgrounds.length + 1;
	$('#b' + newCurrNum).animate({opacity: 0}, {
		duration: 6000,
		complete: function() {
			for (var i=0; i<backgrounds.length; i++) {
				$(backgrounds[i]).css('z-index', '+=1' );
			}
			console.log(backgrounds.length);
			$(this).css('opacity', '1');
			$(this).css('z-index', '-' + backgrounds.length);
			fadeOut(newCurrNum, backgrounds);
		}
	});
}

