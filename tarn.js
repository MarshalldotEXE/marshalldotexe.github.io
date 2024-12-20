var a = Math.floor(Math.random() * 7);
var b = Math.floor(Math.random() * 7);
var c = Math.floor(Math.random() * 5);
var d = Math.floor(Math.random() * 7);
var e = Math.floor(Math.random() * 7);
var f = Math.floor(Math.random() * 7);
var g = Math.floor(Math.random() * 7);
changeBiome();
changeEquipment();
changeMonsters();
changePClass();
changeAffinity();
changeGameplay();
changeAtSign();

function changeAtSign() {
	var x = document.getElementsByClassName("atSign");
	switch (g) {
		case 0:
			x[0].style.color = "#ff8000";
			break;
		case 1:
			x[0].style.color = "#8000ff";
			break;
		case 2:
			x[0].style.color = "#00ff00";
			break;
		case 3:
			x[0].style.color = "#ff0080";
			break;
		case 4:
			x[0].style.color = "#00ffff";
			break;
		case 5:
			x[0].style.color = "#0000ff";
			break;
		default:
			x[0].style.color = "#ffffff";
			break;
	}
	g++;
	if (g >= 7) {g = 0;}
	setTimeout(changeAtSign, 1000);
}

function changeGameplay() {
	var i;
	var x = document.getElementsByClassName("game");
	for (i = 0; i < x.length; i++) {x[i].style.display = "none";}
	x[f].style.display = "block";
	f++;
	if (f >= x.length) {f = 0;}
	setTimeout(changeGameplay, 3000);
}

function changeBiome() {
	var i;
	var x = document.getElementsByClassName("biome");
	for (i = 0; i < x.length; i++) {x[i].style.display = "none";}
	x[a].style.display = "block";
	a++;
	if (a >= x.length) {a = 0;}
	setTimeout(changeBiome, 3000);
}

function changeEquipment() {
	var i;
	var x = document.getElementsByClassName("equipment1");
	var y = document.getElementsByClassName("equipment2");
	for (i = 0; i < x.length; i++) {x[i].style.display = y[i].style.display = "none";}
	x[c].style.display = "block";
	if (c < x.length / 2) {
		y[c + x.length / 2].style.display = "block";
	} else {
		y[c - x.length / 2].style.display = "block";
	}
	c++;
	if (c >= x.length) {c = 0;}
	setTimeout(changeEquipment, 3000);
}

function changeMonsters() {
	var i;
	var x = document.getElementsByClassName("monsters1");
	var y = document.getElementsByClassName("monsters2");
	for (i = 0; i < x.length; i++) {x[i].style.display = y[i].style.display = "none";}
	x[e].style.display = "block";
	if (e < x.length / 2) {
		y[e + x.length / 2].style.display = "block";
	} else {
		y[e - x.length / 2].style.display = "block";
	}
	e++;
	if (e >= x.length) {e = 0;}
	setTimeout(changeMonsters, 3000);
}

function changePClass() {
	var i;
	var x = document.getElementsByClassName("pClass");
	for (i = 0; i < x.length; i++) {x[i].style.display = "none";}
	x[d].style.display = "block";
	d++;
	if (d >= x.length) {d = 0;}
	setTimeout(changePClass, 3000);
}

function changeAffinity() {
	var i;
	var x = document.getElementsByClassName("affinity");
	for (i = 0; i < x.length; i++) {x[i].style.display = "none";}
	x[b].style.display = "block";
	b++;
	if (b >= x.length) {b = 0;}
	setTimeout(changeAffinity, 3000);
}
