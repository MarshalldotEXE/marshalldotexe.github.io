var d = Math.floor(Math.random() * 5);

changePClass();

function changePClass() {
	var i;
	var x = document.getElementsByClassName("pClass");
	for (i = 0; i < x.length; i++) {x[i].style.display = "none";}
	x[d].style.display = "inline";
	d++;
	if (d >= x.length) {d = 0;}
	setTimeout(changePClass, 3000);
}