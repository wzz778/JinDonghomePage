var c43show = document.getElementsByClassName("c43show")[0];
var bx = document.getElementById("bx");
var sm2s = document.getElementsByClassName("sm2s")[0];
var m1 = document.getElementsByClassName("m1")[0];
var m2 = document.getElementsByClassName("m2")[0];
var m3 = document.getElementsByClassName("m3")[0];
bx.onclick = function() {
	c43show.style.height = "0px";
}
c43show.onmousemove = function() {
	document.onclick = null;
}
c43show.onmouseout = function() {
	document.onclick = function() {
		c43show.style.height = "0px";
	}
}

m1.onmousemove = function() {
	c43show.style.height = "240px";
	showta[0].style.color = " #C81623";
	showta[0].style.borderBottom = " 1.5px #C81623 solid";
	showta[1].style.color = " #4D4D4D";
	showta[1].style.borderBottom = "none";
	showta[2].style.color = " #4D4D4D";
	showta[2].style.borderBottom = "none";
	sm1.style.display = "block";
	sm2.style.display = "none";
	sm3.style.display = "none";
}
m2.onmousemove = function() {
	c43show.style.height = "240px";
	showta[1].style.color = " #C81623";
	showta[1].style.borderBottom = " 1.5px #C81623 solid";
	showta[0].style.color = " #4D4D4D";
	showta[0].style.borderBottom = "none";
	showta[2].style.color = " #4D4D4D";
	showta[2].style.borderBottom = "none";
	sm2.style.display = "block";
	sm1.style.display = "none";
	sm3.style.display = "none";
}
m3.onmousemove = function() {
	c43show.style.height = "240px";
	showta[2].style.color = " #C81623";
	showta[2].style.borderBottom = " 1.5px #C81623 solid";
	showta[0].style.color = " #4D4D4D";
	showta[0].style.borderBottom = "none";
	showta[1].style.color = " #4D4D4D";
	showta[1].style.borderBottom = "none";
	sm3.style.display = "block";
	sm2.style.display = "none";
	sm1.style.display = "none";
}

function moveleft(name, length, v) {
	var nto = 0;
	var timer = setInterval(function() {
		var left = getComputedStyle(name, null)["left"];
		var nleft = parseInt(left);
		name.style.left = nleft + 5 + "px";
		nto += 5;
		if (nto >= length) {
			clearInterval(timer);
		}
	}, v)
}

function moveright(name, length, v) {
	var nto = 0;
	var timer = setInterval(function() {
		var right = getComputedStyle(name, null)["left"];
		var nright = parseInt(right);
		name.style.left = nright - 5 + "px";
		nto -= 5;
		if (nto <= length) {
			clearInterval(timer);
		}
	}, v)
}
var showta = document.getElementsByClassName("showta");
var sm1a = document.getElementsByClassName("sm1a");
var sm1 = document.getElementsByClassName("sm1")[0];
var sm2 = document.getElementsByClassName("sm2")[0];
var sm3 = document.getElementsByClassName("sm3")[0];
var mzban = document.getElementsByClassName("mzban")[0];
var mz = document.getElementsByClassName("mz")[0];
var sm2s = document.getElementsByClassName("sm2s")[0];
var sm3s = document.getElementsByClassName("sm3s")[0];
var showcz2 = document.getElementsByClassName("showcz2")[0];
var sm2a = document.getElementsByClassName("sm2a");
var sm3a = document.getElementsByClassName("sm3a");

sm3a[0].style.color = " #C81623";
var sss = 0;
sm3a[0].onmousemove = function() {
	if (sss == 1) {
		moveleft(sm3s, 170, 5);
		sss = 0;
	}
	sm3a[0].style.color = " #C81623";
	sm3a[1].style.color = "  #4D4D4D";
}
sm3a[1].onmousemove = function() {
	if (sss == 0) {
		moveright(sm3s, -170, 5);
		sss = 1;
	}
	sm3a[1].style.color = " #C81623";
	sm3a[0].style.color = "  #4D4D4D";
}
var shown = 0;
sm2a[0].style.color = " #C81623";
sm2a[0].onmousemove = function() {
	if (shown == 2) {
		moveleft(sm2s, 340, 5);
		shown = 0;
	}
	if (shown == 1) {
		moveleft(sm2s, 170, 5);
		shown = 0;
	}

	shown = 0;
	sm2a[0].style.color = " #C81623";
	sm2a[1].style.color = "  #4D4D4D";
	sm2a[2].style.color = "  #4D4D4D";
}
sm2a[1].onmousemove = function() {
	if (shown == 0) {
		moveright(sm2s, -170, 5);
		shown = 1;
	}
	if (shown == 2) {
		moveleft(sm2s, 170, 5);
		shown = 1;
	}
	shown = 1;

	sm2a[1].style.color = " #C81623";
	sm2a[0].style.color = "  #4D4D4D";
	sm2a[2].style.color = "  #4D4D4D";
}
sm2a[2].onmousemove = function() {
	if (shown == 0) {
		moveright(sm2s, -340, 5);
		shown = 2;
	}
	if (shown == 1) {
		moveright(sm2s, -170, 5);
		shown = 2;
	}
	shown = 2;
	sm2a[2].style.color = " #C81623";
	sm2a[1].style.color = "  #4D4D4D";
	sm2a[0].style.color = "  #4D4D4D";
}
sm2.style.display = "block";
showta[0].style.color = " #C81623";
showta[0].style.borderBottom = " 1.5px #C81623 solid";
showta[0].onmousemove = function() {
	showta[0].style.color = " #C81623";
	showta[0].style.borderBottom = " 1.5px #C81623 solid";
	showta[1].style.color = " #4D4D4D";
	showta[1].style.borderBottom = "none";
	showta[2].style.color = " #4D4D4D";
	showta[2].style.borderBottom = "none";
	sm1.style.display = "block";
	sm2.style.display = "none";
	sm3.style.display = "none";
}
showta[1].onmousemove = function() {
	showta[1].style.color = " #C81623";
	showta[1].style.borderBottom = " 1.5px #C81623 solid";
	showta[0].style.color = " #4D4D4D";
	showta[0].style.borderBottom = "none";
	showta[2].style.color = " #4D4D4D";
	showta[2].style.borderBottom = "none";
	sm2.style.display = "block";
	sm1.style.display = "none";
	sm3.style.display = "none";
}
showta[2].onmousemove = function() {
	showta[2].style.color = " #C81623";
	showta[2].style.borderBottom = " 1.5px #C81623 solid";
	showta[0].style.color = " #4D4D4D";
	showta[0].style.borderBottom = "none";
	showta[1].style.color = " #4D4D4D";
	showta[1].style.borderBottom = "none";
	sm3.style.display = "block";
	sm2.style.display = "none";
	sm1.style.display = "none";
}
showcz2.style.display = "none";
sm1a[0].style.color = " #C81623";
sm1a[0].onmousemove = function() {
	mz.style.display = "block";
	mzban.style.display = "none";
	showcz2.style.display = "none";
	sm1a[0].style.color = " #C81623";
	sm1a[1].style.color = "  #4D4D4D";
}
sm1a[1].onmousemove = function() {
	showcz2.style.display = "block";
	mzban.style.display = "block";
	mz.style.display = "none";
	sm1a[1].style.color = " #C81623";
	sm1a[0].style.color = "  #4D4D4D";
}
