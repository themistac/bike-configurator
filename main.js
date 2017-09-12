var marvelImages = document.getElementsByClassName("marvel-image");
for (var i = 0; i < marvelImages.length; i++) {
    marvelImages[i].addEventListener('click', function() {
			getClickedImage(this);
    }, false);
};

function getClickedImage(src) {
	var colorThief = new ColorThief();
	var color = colorThief.getColor(src);
	var palettes = colorThief.getPalette(src);

	console.log(color);
	console.log(src);
	document.getElementById('primary-colour').style.backgroundColor = 'rgb(' + color + ')';

	var output = '';
	for (var i = 0; i < palettes.length; i++) {
		output += '<div class="swatch" style="background-color: rgb(' + palettes[i] + ')"></div>';
	};

	document.getElementById('palettes').innerHTML = '<h1>Your colour scheme</h1>' + output;
	document.getElementById('part1').style.fill = 'rgb(' + color + ')';
	document.getElementById('part2').style.fill = 'rgb(' + palettes[0] + ')';
	document.getElementById('part3').style.fill = 'rgb(' + palettes[1] + ')';
	document.getElementById('part4').style.fill = 'rgb(' + palettes[2] + ')';
	document.getElementById('part5').style.fill = 'rgb(' + palettes[3] + ')';
	document.getElementById('part6').style.fill = 'rgb(' + palettes[4] + ')';
	document.getElementById('part7').style.fill = 'rgb(' + palettes[5] + ')';
	document.getElementById('part8').style.fill = 'rgb(' + palettes[6] + ')';
	document.getElementById('part9').style.fill = 'rgb(' + palettes[7] + ')';
	document.getElementById('part10').style.fill = 'rgb(' + palettes[8] + ')';

	document.getElementById('title').classList.add('hidden');
	document.getElementById('palettes').classList.add('show');
	document.getElementById('bike').classList.add('bump');

};
