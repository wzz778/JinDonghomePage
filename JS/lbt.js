window.onload = function() {
	var t = document.getElementById("np-t");
	var alla = ["../img/npt1.png", "../img/npt2.png", "../img/npt3.png", "../img/npt4.png", "../img/npt5.png"];
	var num = 0;
	var left = document.getElementById("np-left");
	var right = document.getElementById("np-right");
	var li = document.getElementsByTagName("li");

	function timestop() {
		clearInterval(nptime1);
	}

	function timecon() {
		nptime1 = setInterval(function() {
			npg2();
			num++;
			if (num > 4) {
				num = 0;
			}
			t.src = alla[num];
			npg1();
		}, 2500)
	}
	t.onmousemove = function() {
		li[num].style.backgroundColor = "white";
		timestop();
	}
	t.onmouseout = function() {
		timecon();
	}
	var nptime1 = setInterval(function() {
		npg2();
		num++;
		if (num > 4) {
			num = 0;
		}
		t.src = alla[num];
		npg1();
	}, 2500)
	left.onclick = function() {
		li[num].style.backgroundColor = "rgba(0,0,0,.5)";
		num--;
		if (num < 0) {
			num = 4;
		}
		t.src = alla[num];
		li[num].style.backgroundColor = "white";
	}
	right.onclick = function() {
		li[num].style.backgroundColor = "rgba(0,0,0,.5)";
		num++;
		num = num % 5;
		t.src = alla[num];
		li[num].style.backgroundColor = "white";
	}

	function npli() {
		t.src = alla[num];
	}

	function nplib(obj) {
		obj.style.backgroundColor = "white";
	}

	function npliback(obj) {
		obj.style.backgroundColor = "rgba(0,0,0,.5)";

	}
	for (let i = 0; i < 5; i++) {
		li[i].onmousemove = function() {
			li[num].style.backgroundColor = "rgba(0,0,0,.5)";
			num = i;
			npli();
			nplib(this);
			timestop();
		}
		li[i].onmouseout = function() {
			npliback(this);
			timestop();
			timecon();
		}

	}

	function npg1() {
		li[num].style.backgroundColor = "white";
	}

	function npg2() {
		li[num].style.backgroundColor = "rgba(0,0,0,.5)";
	}

}
