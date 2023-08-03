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
var right = document.getElementById("zh-right");
var left = document.getElementById("zh-left");
var zhp = document.getElementById("zhp");
var zhimgm = document.getElementsByClassName("zhimgm")[0];
var zhpm = document.getElementsByClassName("zhpm");
var zhimg = document.getElementsByClassName("zhimg");
var n = 1;
zhimg[2].style.width = "120px";
zhimg[2].style.height = "120px";
zhimg[2].style.margin = "0 12.5px";
right.onclick = function() {
	n++;
	if (n == 4) {
		n = 1;
		zhp.style.left = "0px";
		zhimgm.style.left = "-72.5px";
	};

	for (let i = 0; i < 4; i++) {
		if (n == i) {
			zhpm[i].classList.add("fades");
			zhimg[i + 1].classList.add("fadess");
			zhimg[i + 1].style.width = "120px";
			zhimg[i + 1].style.height = "120px";
			zhimg[i + 1].style.margin = "0 12.5px";
		} else {
			zhpm[i].classList.remove("fades");
			zhimg[i + 1].classList.remove("fadess");
			zhimg[i + 1].style.width = "100px";
			zhimg[i + 1].style.height = "100px";
			zhimg[i + 1].style.margin = "0 22.5px";
		}
	}
	moveright(zhp, -240, 10);
	moveright(zhimgm, -145, 10);
}
left.onclick = function() {
	n--;
	if (n == -1) {
		n = 2;
		zhp.style.left = "-720px";
		zhimgm.style.left = "-507.5px";
	};

	for (let i = 0; i < 4; i++) {
		if (n == i) {
			zhpm[i].classList.add("fades");
			zhimg[i + 1].classList.add("fadess");
			zhimg[i + 1].style.width = "120px";
			zhimg[i + 1].style.height = "120px";
			zhimg[i + 1].style.margin = "0 12.5px";
		} else {
			zhpm[i].classList.remove("fades");
			zhimg[i + 1].classList.remove("fadess");
			zhimg[i + 1].style.width = "100px";
			zhimg[i + 1].style.height = "100px";
			zhimg[i + 1].style.margin = "0 22.5px";
		}
	}
	moveleft(zhp, 240, 10);
	moveleft(zhimgm, 145, 10);
}
