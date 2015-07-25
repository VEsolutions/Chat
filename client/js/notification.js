// @param filename The name of the file WITHOUT ending
function playSound(filename){   
	document.getElementById("sound").innerHTML='<audio autoplay="autoplay"><source src="/assets/' + filename + '.mp3" type="audio/mpeg" /><embed hidden="true" autostart="true" loop="false" src="/assets/' + filename +'.mp3" /></audio>';
}