document.getElementById('ww').addEventListener('click', ww);
String.prototype.shuffle = function () {
	let a = this.split(""),
		n = a.length;

	for(let i = n - 1; i > 0; i--) {
		let j = Math.floor(Math.random() * (i + 1));
		let tmp = a[i];
		a[i] = a[j];
		a[j] = tmp;
	}
	return a.join("");
}
document.getElementById('shuffle').innerHTML = 'Cookiemonster'.shuffle();
function ww(e){
	
	let juistpass = "Cookiemonster";
	let aantalClicks = 1;

	let message = prompt('Geef het wachtwoord in');

	while(message !==juistpass){
		message = prompt('Geef het juiste wachtwoord in');
		aantalClicks++;
	}
	document.getElementById('correct').innerHTML = '\<br>Hallo\<br> u heeft ' + aantalClicks + ' keer het wachtwoord gegokt';
}