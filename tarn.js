var a = Math.floor(Math.random() * 7);
var b = Math.floor(Math.random() * 7);
var c = Math.floor(Math.random() * 5);
var d = Math.floor(Math.random() * 7);
var e = Math.floor(Math.random() * 7);
changeBiome();
changeEquipment();
changeMonsters();
changePClass();
changeAffinity();

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
