var yjli = document.getElementsByClassName("yjli");
var wntjmax = document.getElementsByClassName("wntj-max")[0];
var yjlip1 = document.getElementsByClassName("yjlip1");
var yjlip2 = document.getElementsByClassName("yjlip2");
yjlip1[0].style.color = "white";
yjlip1[0].style.backgroundColor = "#DC143C";
yjlip2[0].style.color = "#DC143C";
for (let tjm = 0; tjm < yjli.length; tjm++) {
	yjli[tjm].onclick = function() {
		let y = -100 * tjm + "%";
		wntjmax.style.left = y;
		yjlip1[tjm].style.color = "white";
		yjlip1[tjm].style.backgroundColor = "#DC143C";
		yjlip2[tjm].style.color = "#DC143C";
		for (let jj = 0; jj < yjli.length; jj++) {
			if (jj != tjm) {
				yjlip1[jj].style.color = "#333333";
				yjlip1[jj].style.backgroundColor = "white";
				yjlip2[jj].style.color = "#333333";
			}
		}
	}
}

var c354bm = document.getElementsByClassName("c354bm");
var sbb = document.getElementsByClassName("sbb");
var c354mr = document.getElementsByClassName("c354mr");
for (let nn = 0; nn < 3; nn++) {
	c354bm[nn].onmousemove = function() {
		sbb[nn].style.opacity = ".8";
		c354mr[nn].style.color = "#DC143C";
	}
	c354bm[nn].onmouseout = function() {
		sbb[nn].style.opacity = "1";
		c354mr[nn].style.color = "#4D4D4D";
	}
}
var c353m = document.getElementsByClassName("c353m")[0];
var c353m2 = document.getElementsByClassName("c353m2")[0];
var c353img = document.getElementsByClassName("c353img");
var c353l1 = document.getElementsByClassName("c353l1");
c353m.onmousemove = function() {
	c353img[0].style.opacity = ".8";
	c353l1[0].style.color = "#DC143C";
}
c353m.onmouseout = function() {
	c353img[0].style.opacity = "1";
	c353l1[0].style.color = "#333333";
}
c353m2.onmousemove = function() {
	c353img[1].style.opacity = ".8";
	c353l1[1].style.color = "#DC143C";
}
c353m2.onmouseout = function() {
	c353img[1].style.opacity = "1";
	c353l1[1].style.color = "#333333";
}
setInterval(function() {
	var lwd = document.getElementsByClassName("lw31");
	var getdate = new Date();
	var h = 20 - getdate.getHours() - 1;
	var m = 60 - getdate.getMinutes() - 1;
	var s = 60 - getdate.getSeconds();

	function checkTime(i) {
		if (i < 10) {
			i = "0" + i;
		}
		return i;
	}
	h = checkTime(h);
	m = checkTime(m);
	s = checkTime(s);
	lwd[0].innerHTML = h;
	lwd[1].innerHTML = m;
	lwd[2].innerHTML = s;
}, 1000);
var c34img = document.getElementById("c34img");
var con34l = document.getElementsByClassName("con34l")[0];
con34l.onmousemove = function() {
	c34img.src = "../img/con33tb2.png";
}
con34l.onmouseout = function() {
	c34img.src = "../img/con33tb3.png";
}
var placelogp = document.getElementById("ploge");
var locTop = document.getElementById("loc-top");
var locBot = document.getElementById("loc-bot");
var topshowa = document.getElementsByClassName("topshow-a");
var arrow = document.getElementsByClassName("arrow");
var topshowd = document.getElementsByClassName("topshow-div");
topshowd[3].style.display = "none";
topshowd[4].style.display = "none";
for (let i = 0; i < topshowa.length; i++) {
	topshowa[i].onmousemove = function() {
		topshowa[i].style.backgroundColor = "white"
		topshowd[i].style.display = "block";
		arrow[i].classList.add("arrowr");
		arrow[i].style.transform = ("rotate(-90deg)");
	}
	topshowa[i].onmouseout = function() {
		topshowd[i].style.display = "none";
		topshowa[i].style.backgroundColor = "#E3E4E5";
		arrow[i].classList.remove("arrowr");
		arrow[i].style.transform = ("rotate(0deg)");
	}
	topshowd[i].onmousemove = function() {
		topshowd[i].style.display = "block";
		topshowa[i].style.backgroundColor = "white";
		arrow[i].classList.add("arrowr");
		arrow[i].style.transform = ("rotate(-90deg)");
	}
	topshowd[i].onmouseout = function() {
		topshowd[i].style.display = "none";
		topshowa[i].style.backgroundColor = "#E3E4E5";
		arrow[i].classList.remove("arrowr");
		arrow[i].style.transform = ("rotate(0deg)");
	}
}
// var show2=document.getElementsByClassName("show2");
var show2a = document.getElementsByClassName("show2-a");
var show2bot = document.getElementsByClassName("show2-bot");
for (let j = 0; j < show2a.length; j++) {
	show2a[j].onmousemove = function() {
		show2bot[j].style.display = "block";
		show2a[j].style.backgroundColor = " #E3E4E5";
	}
	show2a[j].onmouseout = function() {
		show2bot[j].style.display = "none";
		show2a[j].style.backgroundColor = "white";
	}
	show2bot[j].onmousemove = function() {
		show2bot[j].style.display = "block";
		show2a[j].style.backgroundColor = " #E3E4E5";
	}
	show2bot[j].onmouseout = function() {
		show2bot[j].style.display = "none";
		show2a[j].style.backgroundColor = "white";
	}
}
locTop.onmousemove = function() {
	locBot.style.display = "block";
	locTop.style.backgroundColor = "white";
	placelogp.src = "../img/plogo2.png";
}
locTop.onmouseout = function() {
	locBot.style.display = "none";
	locTop.style.backgroundColor = "#E3E4E5";
	placelogp.src = "../img/placelogo.png";
}
locBot.onmousemove = function() {
	locBot.style.display = "block";
	locTop.style.backgroundColor = "white";
	placelogp.src = "../img/plogo2.png";
}
locBot.onmouseout = function() {
	locBot.style.display = "none";
	locTop.style.backgroundColor = "#E3E4E5";
	placelogp.src = "../img/placelogo.png";
}
var rightgga = document.getElementsByClassName("rightgga");
rightgga[1].onmousemove = function() {
	rightgga[1].style.backgroundImage = "url(../img/nhj2.jpg)";

}
rightgga[1].onmouseout = function() {
	rightgga[1].style.backgroundImage = "url(../img/nhj.gif)";

}
var con35div = document.getElementsByClassName("con35div")[0];
con35div.style.backgroundImage = "url(../img/xpfbback.png)";
window.addEventListener("scroll", function() {
	var rightgga = document.getElementsByClassName("rightgga");
	var showA = document.getElementById("show-amazing");
	var showA = document.getElementsByClassName("con31")[0];
	var rightgg = document.getElementById("rightgg");
	var showA1 = document.getElementById("jdmss");
	var showA2 = document.getElementById("nhjs");
	var showA3 = document.getElementById("mrtjs");
	var showA4 = document.getElementById("pdgcs");
	var showA5 = document.getElementById("wntjs");
	var topp1 = showA1.getBoundingClientRect().top;
	var topp2 = showA2.getBoundingClientRect().top;
	var topp3 = showA3.getBoundingClientRect().top;
	var topp4 = showA4.getBoundingClientRect().top;
	var topp5 = showA5.getBoundingClientRect().top;
	var jdfind = document.getElementById("jdfind");
	var jdlogo2 = document.getElementById("jdlogo2");
	// function keep(){
	for (let n = 0; n < 8; n++) {
		rightgga[n].onmousemove = function() {
			rightgga[n].style.color = "white";
			rightgga[n].style.backgroundColor = "#B22222";
		}
		rightgga[n].onmouseout = function() {
			rightgga[n].style.color = "#333333";
			rightgga[n].style.backgroundColor = "white";
		}
	}
	rightgga[1].onmousemove = function() {
		rightgga[1].style.backgroundImage = "url(../img/nhj2.jpg)";

	}
	rightgga[1].onmouseout = function() {
		rightgga[1].style.backgroundImage = "url(../img/nhj.gif)";

	}
	rightgga[7].onmouseout = function() {
		rightgga[7].style.color = "#DC143C";;
		rightgga[7].style.backgroundColor = "white";
	}
	// }

	rightgg.style.position = "absolute";
	rightgg.style.top = "500px";
	rightgg.style.left = "50%";
	var jjn = 0;
	if (topp1 <= 0) {
		rightgg.style.position = "fixed";
		rightgg.style.top = "-400px";
		rightgg.style.right = "-70px";
		jdfind.style.position = "fixed";
		jdfind.classList.add("down");
		jdfind.classList.add("jdfind2");
		jdlogo2.style.display = "block";
		jdfind.style.boxShadow = "0px 1px 3px #888888";
		rightgga[0].style.color = "red";

		jjn = 0;
		for (let n = 0; n < 5; n++) {
			if (jjn == n) {
				rightgga[n].style.color = "red";
				rightgga[1].style.backgroundImage = "url(../img/nhj.gif)";
			} else {
				rightgga[n].style.color = "#333333";
			}


		}
	} else {
		rightgg.style.position = "absolute";
		rightgg.style.top = "10px";
		rightgg.style.left = "50%";
		jdfind.style.position = "absolute";
		jdfind.classList.remove("down");
		jdfind.classList.remove("jdfind2");
		jdlogo2.style.display = "none";
		jdfind.style.boxShadow = "none";
	}
	if (topp2 <= 0) {
		jjn = 1;
		for (let n = 0; n < 5; n++) {
			if (jjn == n) {
				rightgga[n].style.backgroundImage = "url(../img/nhj2.jpg)";
			} else {
				rightgga[n].style.color = "#333333";
			}
		}
		// rightgga[1].style.backgroundImage="url(../img/nhj2.gif)";
		// rightgga[1].style.color="red";
	}
	if (topp3 <= 0) {
		jjn = 2;
		for (let n = 0; n < 5; n++) {
			if (jjn == n) {
				rightgga[n].style.color = "red";
				rightgga[1].style.backgroundImage = "url(../img/nhj.gif)";
			} else {
				rightgga[n].style.color = "#333333";
			}
		}

	}
	if (topp4 <= 0) {
		jjn = 3;
		for (let n = 0; n < 5; n++) {
			if (jjn == n) {
				rightgga[n].style.color = "red";
				rightgga[1].style.backgroundImage = "url(../img/nhj.gif)";
			} else {
				rightgga[n].style.color = "#333333";
			}
		}

	}
	if (topp5 <= 0) {
		jjn = 4;
		for (let n = 0; n < 5; n++) {
			if (jjn == n) {
				rightgga[n].style.color = "red";
				rightgga[1].style.backgroundImage = "url(../img/nhj.gif)";
			} else {
				rightgga[n].style.color = "#333333";
			}
		}

	}
	var con4 = document.getElementsByClassName("con4")[0];
	var wntjtop = document.getElementsByClassName("wntj-top")[0];
	var c4top = con4.getBoundingClientRect().top;
	if (topp5 <= 0) {
		wntjtop.classList.remove("container");
		wntjtop.style.position = "fixed";
		wntjtop.classList.add("downs");
		wntjtop.style.top = "60px";
		wntjtop.style.boxShadow = "0px 1px 3px #888888";
		rightgg.style.top = "-340px";
	} else {
		wntjtop.style.position = "relative";
		wntjtop.style.top = "0px";
		wntjtop.classList.remove("downs");
		wntjtop.classList.add("container");
		wntjtop.style.boxShadow = "none";

	}
})

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
var dian = document.getElementsByClassName("dian");
var c31rmax = document.getElementById("c31r-max");
// moveright(c31rmax,170,5);
dian[1].style.backgroundColor = "#808080";
dian[0].style.backgroundColor = "#C81623";
let timejg = 0;
var m1time1 = setInterval(function() {
	timejg++;
	if (timejg % 2 != 0) {
		c31rmax.classList.remove("moveright");
		c31rmax.style.left="-170px";
		dian[0].style.backgroundColor = "#808080"
		dian[1].style.backgroundColor = "#C81623";
		c31rmax.classList.add("moveleft");
	}
}, 3000)
var m1time2 = setInterval(function() {
	c31rmax.style.left="0px";
	c31rmax.classList.remove("moveleft");
	dian[1].style.backgroundColor = "#808080";
	dian[0].style.backgroundColor = "#C81623";
	c31rmax.classList.add("moveright");
}, 6000)
var c31r1 = document.getElementsByClassName("c31r1")[0];
var c31r2 = document.getElementsByClassName("c31r2")[0];
dian[0].onmousemove = function() {
	clearInterval(m1time1);
	clearInterval(m1time2);
	c31rmax.classList.remove("moveleft");
	c31rmax.classList.remove("moveright");
	c31rmax.style.left = "0px";
	dian[1].style.backgroundColor = "#808080"
	dian[0].style.backgroundColor = "#C81623";
}
dian[0].onmouseout = function() {
	timejg = 0;
	m1time1 = setInterval(function() {
		timejg++;
		if (timejg % 2 != 0) {
			c31rmax.classList.remove("moveright");
			c31rmax.classList.add("moveleft");
			c31rmax.style.left="-170px";
			dian[0].style.backgroundColor = "#808080"
			dian[1].style.backgroundColor = "#C81623";
		}
	}, 3000)
	m1time2 = setInterval(function() {
		c31rmax.classList.remove("moveleft");
		c31rmax.style.left="0px";
		c31rmax.classList.add("moveright");
		dian[1].style.backgroundColor = "#808080";
		dian[0].style.backgroundColor = "#C81623";
	}, 6000)
}
c31r2.onmousemove = function() {
	clearInterval(m1time1);
	clearInterval(m1time2);
	c31rmax.classList.remove("moveright");
	c31rmax.classList.remove("moveleft");
}
c31r2.onmouseout = function() {
	timejg = 0;
	m1time1 = setInterval(function() {
		timejg++;
		if (timejg % 2 != 0) {
			c31rmax.classList.remove("moveleft");
			c31rmax.style.left="0px";
			c31rmax.classList.add("moveright");
			dian[1].style.backgroundColor = "#808080";
			dian[0].style.backgroundColor = "#C81623";
		}
	}, 3000)
	m1time2 = setInterval(function() {
		c31rmax.classList.remove("moveright");
		c31rmax.classList.add("moveleft");
		c31rmax.style.left="-170px";
		dian[0].style.backgroundColor = "#808080"
		dian[1].style.backgroundColor = "#C81623";
	}, 6000)
}
dian[1].onmousemove = function() {
	clearInterval(m1time1);
	clearInterval(m1time2);
	c31rmax.style.left = "-170px";
	c31rmax.classList.remove("moveright");
	c31rmax.classList.remove("moveleft");
	dian[0].style.backgroundColor = "#808080";
	dian[1].style.backgroundColor = "#C81623";
}
dian[1].onmouseout = function() {
	timejg = 0;
	m1time1 = setInterval(function() {
		timejg++;
		if (timejg % 2 != 0) {
			c31rmax.classList.remove("moveleft");
		c31rmax.style.left="0px";
		c31rmax.classList.add("moveright");
			dian[1].style.backgroundColor = "#808080";
			dian[0].style.backgroundColor = "#C81623";
		}
	}, 3000)
	m1time2 = setInterval(function() {
		c31rmax.classList.remove("moveright");
		c31rmax.classList.add("moveleft");
		c31rmax.style.left="-170px";
		dian[0].style.backgroundColor = "#808080"
		dian[1].style.backgroundColor = "#C81623";
	}, 6000)
}
c31r1.onmousemove = function() {
	clearInterval(m1time1);
	clearInterval(m1time2);
	c31rmax.classList.remove("moveright");
	c31rmax.classList.remove("moveleft");
}
c31r1.onmouseout = function() {
	timejg = 0;
	m1time1 = setInterval(function() {
		timejg++;
		if (timejg % 2 != 0) {
			c31rmax.classList.remove("moveright");
			c31rmax.classList.add("moveleft");
			c31rmax.style.left="-170px";
			dian[0].style.backgroundColor = "#808080"
			dian[1].style.backgroundColor = "#C81623";
		}
	}, 3000)
	m1time2 = setInterval(function() {
		c31rmax.classList.remove("moveleft");
		c31rmax.style.left="0px";
		c31rmax.classList.add("moveright");
		dian[1].style.backgroundColor = "#808080";
		dian[0].style.backgroundColor = "#C81623";
	}, 6000)
}
var c31ml = document.getElementById("c31m-left");
var c31mr = document.getElementById("c31m-right");
var c31mmax = document.getElementsByClassName("c31m-max")[0];
var c31mrn = 1;
c31mr.onclick = function() {
	c31mrn++;
	if (c31mrn == 4) {
		c31mmax.style.left = "0px";
		c31mrn = 1;
	} else {
		moveright(c31mmax, -620, 1);
	}

}
c31ml.onclick = function() {
	c31mrn--;
	if (c31mrn == 0) {
		c31mmax.style.left = "-1240px";
		c31mrn = 3;
	} else {
		moveleft(c31mmax, 620, 1);
	}
}
var ycl = document.getElementById("yc-left");
var ycr = document.getElementById("yc-right");
var ycmax = document.getElementsByClassName("c3yc-max")[0];
var ycm1 = document.getElementsByClassName("ycm1")[0];
var ycm2 = document.getElementsByClassName("ycm1")[1];
var ycn = 1;
ycr.onclick = function() {

	ycn++;
	if (ycn == 3) {
		ycmax.style.left = "0px";
		ycm1.classList.add("fade");
		ycm2.classList.remove("fade");
		ycn = 1;
	} else {
		ycmax.style.left = "-190px";
		ycm2.classList.add("fade");
		ycm1.classList.remove("fade");
	}

}
ycl.onclick = function() {


	ycn--;
	if (ycn == 0) {
		ycmax.style.left = "-190px";
		ycm2.classList.add("fade");
		ycm1.classList.remove("fade");
		ycn = 2;
	} else {
		ycmax.style.left = "0px";
		ycm1.classList.add("fade");
		ycm2.classList.remove("fade");
	}

}
var con32ma = document.getElementsByClassName("con32ma");
var con32mimg = document.getElementsByClassName("con32mimg");
for (let j = 0; j < con32ma.length; j++) {
	con32ma[j].onmousemove = function() {
		con32mimg[j].style.opacity = "0.8";
	}
	con32ma[j].onmouseout = function() {
		con32mimg[j].style.opacity = "1";
	}
}
var con33li = document.getElementsByClassName("con33li");
var con33lmax = document.getElementsByClassName("con33lmax")[0];
var con33ll = document.getElementsByClassName("con33ll");
var llimg = document.getElementsByClassName("llimg");
var lra = document.getElementsByClassName("lra");
var lrarp = document.getElementsByClassName("lrarp1");
for (let nm = 0; nm < lra.length; nm++) {
	lra[nm].onmousemove = function() {
		lrarp[nm].style.color = "#B22222";
	}
	lra[nm].onmouseout = function() {
		lrarp[nm].style.color = "#333333";
	}
}
for (let nm = 0; nm < llimg.length; nm++) {
	con33ll[nm].onmousemove = function() {
		llimg[nm].style.opacity = "0.8";
	}
	con33ll[nm].onmouseout = function() {
		llimg[nm].style.opacity = "1";
	}
}
con33li[0].style.color = "#E1251B";
con33li[0].style.borderBottom = "2px #E1251B solid";
for (let mn = 0; mn < con33li.length; mn++) {
	con33li[mn].onmousemove = function() {
		let y = -100 * mn + "%";
		con33lmax.style.left = y;
		con33li[mn].style.color = "#E1251B";
		con33li[mn].style.borderBottom = "2px #E1251B solid";
		for (let jj = 0; jj < 5; jj++) {
			if (jj != mn) {
				con33li[jj].style.color = "#808080";
				con33li[jj].style.borderBottom = "none";
			}
		}
	}
}
var c35b = document.getElementsByClassName("c35b");
var c35max = document.getElementsByClassName("c35max")[0];
c35b[0].style.backgroundColor = "crimson";
c35b[0].style.color = "white";
for (let mnm = 0; mnm < c35b.length; mnm++) {
	c35b[mnm].onmousemove = function() {
		let y = -100 * mnm + "%";
		c35max.style.left = y;
		for (let jjj = 0; jjj < 4; jjj++) {
			if (jjj != mnm) {
				c35b[jjj].style.backgroundColor = "#DCDCDC";
				c35b[jjj].style.color = "#808080";
			} else {
				c35b[jjj].style.backgroundColor = "crimson";
				c35b[jjj].style.color = "white";
			}
		}
	}
}
var htmax = document.getElementsByClassName("ht-max")[0];
var htm = document.getElementsByClassName("htm");
var con34r = document.getElementsByClassName("con34r")[0];
var htimg = document.getElementsByClassName("htimg");
var htx = document.getElementsByClassName("htx")[0];
var jshttmax = document.getElementsByClassName("httmax")[0];
var htt = document.getElementsByClassName("htt")[0];
var httww = getComputedStyle(htt, null).width;
var httw = parseInt(httww);
htx.onmousedown = function(event) {
	var httleft = htt.offsetLeft;
	var jl = event.clientX - htx.offsetLeft;
	var httww = getComputedStyle(htt, null).width;
	var httw = parseInt(httww);
	document.onmousemove = function(event) {
		var left = event.clientX - jl;
		var httright = httleft + httw - 80;

		var httmaxw = parseInt(httww) - 80;
		var htxrr = getComputedStyle(htx, null).left;
		var htxr = parseInt(htxrr);

		var txs = htxr - httleft;
		var sbfb = -txs / httmaxw * 200 + "%";

		htmax.style.left = sbfb;
		if (httleft < left && left < httright) {

			htx.style.left = left + "px";
		}
	}
	document.onmouseup = function() {
		document.onmousemove = null;


	}
}
for (let nm = 0; nm < htm.length; nm++) {
	htm[nm].onmousemove = function() {
		htimg[nm].style.opacity = "0.8";
		htm[nm].style.color = "#B22222";
		clearInterval(httime);
		timen = 1;
	}
	htm[nm].onmouseout = function() {
		htimg[nm].style.opacity = "1";
		htm[nm].style.color = "#333333";
		clearInterval(httime);
		timen = 1;
	}
}

var httime = setInterval(function() {
	var httww = getComputedStyle(htt, null).width;
	var httmax = parseInt(httww) - 80;
	var httleft = htt.offsetLeft;
	var eleft = getComputedStyle(htmax, null)["left"];
	var nnnleft = parseInt(eleft);
	var tbfb = -nnnleft / 1600;

	var txs = httmax * tbfb;
	htx.style.left = txs + httleft + "px";
	var nleft = getComputedStyle(htmax, null)["left"];
	var nnleft = 1600 + parseInt(nleft);

	if (nnleft <= 0) {
		htmax.style.left = "0";
	}
	var left = getComputedStyle(htmax, null)["left"];
	var nleft = parseInt(left);
	htmax.style.left = nleft - 1 + "px";

}, 20)
var timen = 0;
con34r.onmousemove = function() {
	clearInterval(httime);
	timen = 1;
	jshttmax.style.display = "block";
}
con34r.onmouseout = function() {

	if (timen == 1) {
		httime = setInterval(function() {
			var httww = getComputedStyle(htt, null).width;
			var httmax = parseInt(httww) - 80;
			var httleft = htt.offsetLeft;
			var eleft = getComputedStyle(htmax, null)["left"];
			var nnnleft = parseInt(eleft);
			var tbfb = -nnnleft / 1600;

			var txs = httmax * tbfb;
			htx.style.left = txs + httleft + "px";
			var nleft = getComputedStyle(htmax, null)["left"];
			var nnleft = 1600 + parseInt(nleft);

			if (nnleft <= 0) {
				htmax.style.left = "0";
			}
			var left = getComputedStyle(htmax, null)["left"];
			var nleft = parseInt(left);
			htmax.style.left = nleft - 1 + "px";
		}, 20)
	}
	timen = 2;

}
var tjm = document.getElementsByClassName("tjm");
var tjc = document.getElementsByClassName("tjc");
var xa = document.getElementsByClassName("xa");
// var shown = 0;
for (let tn = 0; tn < tjm.length; tn++) {
	tjm[tn].href = "javascript:;";
	xa[tn].onclick = function() {
		tjc[tn].style.display = "none";
		tjm[tn].onmousemove = null;
	}
	tjm[tn].onmousemove = function() {
		tjc[tn].style.display = "block";

	}
	tjm[tn].onmouseout = function() {
		tjc[tn].style.display = "none";

	}
}
