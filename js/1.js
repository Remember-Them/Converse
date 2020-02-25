$(document).ready(function () {

	$(".registration").hover(function () {
		$(".user").css("color", "black")
		$(".registration").css("background", "white")
		$(".img1").attr("src", "img/2.png")
	}, function () {
		$(".user").css("color", "white")
		$(".registration").css("background", "black")
		$(".img1").attr("src", "img/1.png")
	})
	$("#more,#more1,#more2,#more3").hover(function () {
		$("h3").css("color", "black")
		$("h3").css("background", "white")
		$(".img2").attr("src", "img/morejt2.png")
	}, function () {
		$("h3").css("color", "white")
		$("h3").css("background", "black")
		$(".img2").attr("src", "img/morejt1.png")
	})
	$(".change").hover(function () {
		$(".change").css("background", "white")
		$(".p1").css("color", "black")
		$(".change1").attr("src", "img/2.png")
	}, function () {
		$(".change").css("background", "black")
		$(".p1").css("color", "white")
		$(".change1").attr("src", "img/1.png")
	})

	$(".dl").hover(function () {
		$(".dl").css("background", "white")
		$(".p2").css("color", "black")
		$(".change2").attr("src", "img/2.png")
	}, function () {
		$(".dl").css("background", "black")
		$(".p2").css("color", "white")
		$(".change2").attr("src", "img/1.png")
	})

	$(".gogo").hover(function () {
		$(".gogo").css("background", "white")
		$(".pp").css("color", "black")
		$(".gogogo").attr("src", "img/2.png")
	}, function () {
		$(".gogo").css("background", "black")
		$(".pp").css("color", "white")
		$(".gogogo").attr("src", "img/1.png")
	})

	$(".Fimg1").hover(function () {
		$(".Fimg1").attr("src", "img/Follow11.png")
	}, function () {
		$(".Fimg1").attr("src", "img/Follow1.png")
	})
	$(".Fimg2").hover(function () {
		$(".Fimg2").attr("src", "img/Follow22.png")
	}, function () {
		$(".Fimg2").attr("src", "img/Follow2.png")
	})
	$(".Fimg3").hover(function () {
		$(".Fimg3").attr("src", "img/Follow33.png")
	}, function () {
		$(".Fimg3").attr("src", "img/Follow3.png")
	})
	$(".Fimg4").hover(function () {
		$(".Fimg4").attr("src", "img/Follow44.png")
	}, function () {
		$(".Fimg4").attr("src", "img/Follow4.png")

	})
	$(".Fimg5").hover(function () {

		$(".Fimg5").attr("src", "img/Follow55.png")
	}, function () {

		$(".Fimg5").attr("src", "img/Follow5.png")
	})

	$(".fashon1").hover(function () {
		$(".fashons1").attr("src", "img/fashonleft1.png")
	}, function () {
		$(".fashons1").attr("src", "img/fashonleft.png")
	})
	$(".fashon2").hover(function () {
		$(".fashons2").attr("src", "img/fashonright1.png")
	}, function () {
		$(".fashons2").attr("src", "img/fashonright.png")
	})

	$(".fashones1").hover(function () {
		$(".fashones1 img").attr("src", "img/fashonnone1.png")
	}, function () {
		$(".fashones1 img").attr("src", "img/fashonnone.png")
	})

	$(".fashones2").hover(function () {
		$(".fashones2 img").attr("src", "img/fashonntwo1.png")
	}, function () {
		$(".fashones2 img").attr("src", "img/fashontwo.png")
	})
	$(".fashones3").hover(function () {
		$(".fashones3 img").attr("src", "img/fashonnthree1.png")
	}, function () {
		$(".fashones3 img").attr("src", "img/fashonthree.png")
	})
	$(".leftermany").hover(function () {
		$(".leftermany").css("background", "white")
		$(".lefterh6").css("color", "black")
		$(".img3").attr("src", "img/fashonjt11.png")
	}, function () {
		$(".leftermany").css("background", "black")
		$(".lefterh6").css("color", "white")
		$(".img3").attr("src", "img/fashonjt1.png")
	})
	$(".rightmany").hover(function () {
		$(".rightmany").css("background", "white")
		$(".righterh6").css("color", "black")
		$(".img4").attr("src", "img/fashonjt11.png")
	}, function () {
		$(".rightmany").css("background", "black")
		$(".righterh6").css("color", "white")
		$(".img4").attr("src", "img/fashonjt1.png")
	})



	$(".landregistra_hid").click(function () {
		$("#LandRegistration").slideToggle(1000, function () {
			if ($("#auto").css("display") == "none") {
				$("#auto").fadeIn(500);
				$("#black").fadeIn(500);
			}
		})
	})

	$(".first").click(function () {
		$("#autoo").fadeOut(1000)
		$("#LandRegistration").slideToggle(1000, function () {
			$("#black").fadeIn(500);
			$("#auto").fadeIn(500)
		})
	})

	$(".second").click(function () {
		$("#auto").fadeOut(1000)
		$("#LandRegistration").slideToggle(1000, function () {
			$("#black").fadeIn(500);
			$("#autoo").fadeIn(500)
		})
	})


	$(".change").click(function () {
		$("#auto").fadeOut(500);
		$("#black").fadeOut(100)
		$("#autoo").fadeIn();
		$("#black").fadeIn(500)
	})


	$(".man").hover(function () {
		$("#man").fadeIn(1000)
		$("#man").css("display", "block")

	}, function () {
		$("#man").css("display", "none")
	})
	$(".woman").hover(function () {
		$("#woman").fadeIn(1000)

		$("#woman").css("display", "block")
	}, function () {
		$("#woman").css("display", "none")
	})
	$(".son").hover(function () {
		$("#son").fadeIn(1000)
		$("#son").css("display", "block")
	}, function () {
		$("#son").css("display", "none")
	})



	$(".manshoes").hover(function () {
		$("#manshoes").fadeIn(300)
		$("#womanshoes,#worn,#Dai").css("display", "none")
		$("#manshoes").css("display", "block")
		$(".left").animate({
			"left": "90px"
		}, 200)
	})



	$(".womanshoes").hover(function () {
		$("#womanshoes").fadeIn(300)
		$("#manshoes,#worn,#Dai").css("display", "none")
		$("#womanshoes").css("display", "block")
		$(".left").animate({
			"left": "340px"
		}, 200)
	})



	$(".worn").hover(function () {
		$("#worn").fadeIn(300)
		$("#womanshoes,#manshoes,#Dai").css("display", "none")
		$("#worn").css("display", "block")
		$(".left").animate({
			"left": "580px"
		}, 200)
	})

	$(".Dai").hover(function () {
		$("#Dai").fadeIn(300)
		$("#womanshoes,#manshoes,#worn").css("display", "none")
		$("#Dai").css("display", "block")
		$(".left").animate({
			"left": "830px"
		}, 200)
	})

	$(".converse").click(function () {
		$("#suprice").css("animation", "mymove 2s infinite linear")
	})
	$(".converses").click(function () {
		$("#suprices").css("animation", "mymove 2s infinite linear")
	})

	$(window).scroll(function () {
		if ($(window).scrollTop() > 100) {
			$("#header").css("height", "50px")
			$("#right").css("height", "50px")
			$("#right").css("margin-top", "-15px")
			$("#header-title").css("height", "30px")
			$(".top").css("margin-top", "8px")
			$("#header-title dl dd a").css("font-size", "14px")
			$("#header-title dl dd a").css("line-height", "30px")
			$("#header-title dl dd a").css("height", "30px")
			$("#header-title dl.header>dd").css("background", "url(img/jt2.png) no-repeat 108px 10px")

		} else {
			$("#header").css("height", "80px")
			$("#right").css("margin-top", "0px")
			$("#header-title").css("height", "50px")
			$(".top").css("margin-top", "25px")
			$("#header-title dl dd a").css("height", "50px")
			$("#header-title dl dd a").css("font-size", "18px")
			$("#header-title dl dd a").css("line-height", "35px")
			$("#header-title dl.header>dd").css("background", "url(img/jt2.png) no-repeat 60px 31px")
		}
	})
	$(".con1").click(function () {
		$(".con1").css("border", "solid 1px #B7B7B7")
		$(".con2,.con3,.con4,.con5").css("border", "none")
		$(".imgg").attr("src", "img/con0.png")
		$(".imggg").attr("src", "img/con00.png")
	})
	$(".con2").click(function () {
		$(".con2").css("border", "solid 1px #B7B7B7")
		$(".con1,.con3,.con4,.con5").css("border", "none")
		$(".imgg").attr("src", "img/con1.png")
		$(".imggg").attr("src", "img/con11.png")
	})
	$(".con3").click(function () {
		$(".con3").css("border", "solid 1px #B7B7B7")
		$(".con2,.con1,.con4,.con5").css("border", "none")
		$(".imgg").attr("src", "img/con2.png")
		$(".imggg").attr("src", "img/con22.png")
	})
	$(".con4").click(function () {
		$(".con4").css("border", "solid 1px #B7B7B7")
		$(".con2,.con3,.con1,.con5").css("border", "none")
		$(".imgg").attr("src", "img/con3.png")
		$(".imggg").attr("src", "img/con33.png")
	})
	$(".con5").click(function () {
		$(".con5").css("border", "solid 1px #B7B7B7")
		$(".con2,.con3,.con4,.con1").css("border", "none")
		$(".imgg").attr("src", "img/con4.png")
		$(".imggg").attr("src", "img/con44.png")
	})

	$(".change3").hover(function () {
		$(".change3").css("background", "white")
		$(".change33").css("color", "black")
	}, function () {
		$(".change3").css("background", "black")
		$(".change33").css("color", "white")
	})


	//			$(".big1").mousemove(function(){
	//				$(".little1").css("color","#B7B7B7")	
	//				
	//				setInterval(function(){
	//				$(".big1").css("color","#B7B7B7")
	//				$(".big1").css("text-decoration","underline")
	//				},1000)
	//			})
	//			$(".big1").mouseout(function(){
	//				$(".big1").css("color","#000000")
	//				$(".little1").css("color","#000000")
	//			})
})

var items = document.getElementsByClassName("item");
var points = document.getElementsByClassName("Point");
var goprebtn = document.getElementById("goPre");
var gonextbtn = document.getElementById("goNext");

var time = 0; //定时器

var index = 0; //计数器
var clearactive = function () {
	for (i = 0; i < items.length; i++) {
		items[i].className = "item";
	}
	for (i = 0; i < points.length; i++) {
		points[i].className = "Point";
	}
}

var goIndex = function () {
	clearactive();
	console.log(index);
	points[index].className = "Point active";
	items[index].className = "item active";
}
var gonext = function () {
	if (index < 4) {
		index++;
	} else {
		index = 0;
	}

	goIndex();
}
var gopre = function () {
	if (index == 0) {
		index = 4;
	} else {
		index--;
	}

	goIndex();
}

gonextbtn.addEventListener("click", function () {
	gonext();
})
goprebtn.addEventListener("click", function () {
	gopre();
})

for (i = 0; i < points.length; i++) {
	points[i].addEventListener("mousemove", function () {

		var pointIndex = this.getAttribute("data-index")
		index = pointIndex;
		goIndex();
		time = 0;
	})
}



setInterval(function () {
	time++;
	if (time == 70) {
		gonext();
		time = 0;
	}

}, 100)

var code;

function createCode() {
	code = "";
	var codeLength = 6; //验证码的长度
	var checkCode = document.getElementById("checkCode");
	var codeChars = new Array(0, 1, 2, 3, 4, 5, 6, 7, 8, 9,
		'a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z',
		'A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'); //所有候选组成验证码的字符，当然也可以用中文的
	for (var i = 0; i < codeLength; i++) {
		var charNum = Math.floor(Math.random() * 52);
		code += codeChars[charNum];
	}
	if (checkCode) {
		checkCode.className = "code";
		checkCode.innerHTML = code;
	}
}

function YYYYMMDDstart() {
	MonHead = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];

	//先给年下拉框赋内容   
	var y = new Date().getFullYear();
	for (var i = (y - 100); i < (y + 1); i++) //以今年为准，前30年，后30年   
		document.reg_testdate.YYYY.options.add(new Option(" " + i + " 年", i));

	//赋月份的下拉框   
	for (var i = 1; i < 13; i++)
		document.reg_testdate.MM.options.add(new Option(" " + i + " 月", i));

	document.reg_testdate.YYYY.value = y;
	document.reg_testdate.MM.value = new Date().getMonth() + 1;
	var n = MonHead[new Date().getMonth()];
	if (new Date().getMonth() == 1 && IsPinYear(YYYYvalue)) n++;
	writeDay(n); //赋日期下拉框Author:meizz   
	document.reg_testdate.DD.value = new Date().getDate();
}
if (document.attachEvent)
	window.attachEvent("onload", YYYYMMDDstart);
else
	window.addEventListener('load', YYYYMMDDstart, false);

function YYYYDD(str) //年发生变化时日期发生变化(主要是判断闰平年)   
{
	var MMvalue = document.reg_testdate.MM.options[document.reg_testdate.MM.selectedIndex].value;
	if (MMvalue == "") {
		var e = document.reg_testdate.DD;
		optionsClear(e);
		return;
	}
	var n = MonHead[MMvalue - 1];
	if (MMvalue == 2 && IsPinYear(str)) n++;
	writeDay(n)
}

function MMDD(str) //月发生变化时日期联动   
{
	var YYYYvalue = document.reg_testdate.YYYY.options[document.reg_testdate.YYYY.selectedIndex].value;
	if (YYYYvalue == "") {
		var e = document.reg_testdate.DD;
		optionsClear(e);
		return;
	}
	var n = MonHead[str - 1];
	if (str == 2 && IsPinYear(YYYYvalue)) n++;
	writeDay(n)
}

function writeDay(n) //据条件写日期的下拉框   
{
	var e = document.reg_testdate.DD;
	optionsClear(e);
	for (var i = 1; i < (n + 1); i++)
		e.options.add(new Option(" " + i + " 日", i));
}

function IsPinYear(year) //判断是否闰平年   
{
	return (0 == year % 4 && (year % 100 != 0 || year % 400 == 0));
}

function optionsClear(e) {
	e.options.length = 1;
}





function isPhone(phone) {
	var myreg = /^[1][3,4,5,7,8][0-9]{9}$/;
	if (!myreg.test(phone)) {
		return false;
	} else {
		return true;
	}

}







function isture() {
	var goemail = window.localStorage.getItem("email");
	let callphone = document.getElementById("Regisphone").value;
	var phone = document.getElementById("Regisphone");
	if (isPhone(callphone) || goemail == callphone) {
		phone.style.border = "1px solid green"
	} else if (callphone.value == null) {
		phone.style.border = "1px solid red"
	}
	$("#Regisphone").click(function () {
		$("#Regisphone").css("border", "1px #999999 solid")
	})
}

function istures() {
	var passes = window.localStorage.getItem("passone");
	let passwords = document.getElementById("Password").value;
	var Password = document.getElementById("Password");
	if (passwords == "") {
		Password.style.border = "1px solid red"
	} else if (passes == passwords) {
		Password.style.border = "1px solid green"
	}
	$("#Password").click(function () {
		$("#Password").css("border", "1px #999999 solid")
	})
}

function istext() {
	let inputphone = document.getElementById("Landphone").value;
	var phones = document.getElementById("Landphone");
	var show = document.getElementsByClassName("show");
	if (inputphone == "") {
		show[0].innerHTML = "请输入手机号码！"
		show[0].style.color = "red"
		show[0].style.fontSize = "12px"
		phones.style.border = "1px solid red"
	} else if (isPhone != (inputphone)) {
		show[0].innerHTML = "请输入正确的手机号码！"
		show[0].style.color = "red"
		show[0].style.fontSize = "12px"
		phones.style.border = "1px solid red"
	}
	if (isPhone(inputphone)) {
		show[0].innerHTML = ""
		phones.style.border = "1px solid #999999"
	}
}

function istext_one() {
	let inputemail = document.getElementById("Email").value;
	var email = document.getElementById("Email");
	var show = document.getElementsByClassName("show")
	if (inputemail == "") {
		show[1].innerHTML = "请输入电子邮箱地址！"
		show[1].style.color = "red"
		show[1].style.fontSize = "12px"
		email.style.border = "1px solid red"
	}
	if (inputemail.length < 11) {
		show[1].innerHTML = "请输入有效的电子邮箱地址！"
		show[1].style.color = "red"
		show[1].style.fontSize = "12px"
		email.style.border = "1px solid red"
	} else {
		show[1].innerHTML = ""
		email.style.border = "1px solid #999999"
	}
}

function istext_two() {
	let inputpassone = document.getElementById("Passone").value;
	var pas = document.getElementById("Passone");
	var show = document.getElementsByClassName("show")
	if (inputpassone == "") {
		show[2].innerHTML = "请输入密码！"
		show[2].style.color = "red"
		show[2].style.fontSize = "12px"
		pas.style.border = "1px solid red"
	} else {
		show[2].innerHTML = ""
		pas.style.border = "1px solid #999999"
	}
}

function istext_three() {
	let inputpassone = document.getElementById("Passone").value;
	let inputpasstwo = document.getElementById("Passtwo").value;
	var pass = document.getElementById("Passtwo");
	var show = document.getElementsByClassName("show")
	if (inputpasstwo == "") {
		show[3].innerHTML = "请再次输入密码！"
		show[3].style.color = "red"
		show[3].style.fontSize = "12px"
		pass.style.border = "1px solid red"
	}
	if (inputpassone != inputpasstwo) {
		show[3].innerHTML = "抱歉，两次输入的密码不匹配！"
		show[3].style.color = "red"
		show[3].style.fontSize = "12px"
		pass.style.border = "1px solid red"
	} else {
		show[3].innerHTML = ""
		pass.style.border = "1px solid #999999"
	}

}

function istext_four() {
	var coded = document.getElementById("inputCode")
	let inputcode = document.getElementById("inputCode").value;
	var show = document.getElementsByClassName("show");
	if (inputcode == "") {
		show[4].style.color = "red"
		show[4].style.fontSize = "12px"
		coded.style.border = "1px solid red"
		show[4].innerHTML = "请输入验证码！"
	}
	if (inputcode.toUpperCase() != code.toUpperCase()) {
		show[4].style.color = "red"
		show[4].style.fontSize = "12px"
		coded.style.border = "1px solid red"
		show[4].innerHTML = "验证码有误！"
	} else if (inputcode.toUpperCase() == code.toUpperCase()) {
		show[4].innerHTML = ""
		coded.style.border = "1px solid #999999"
	}
}

var inputphone, inputemail, inputcode;

function gotoland() {
	var inputphone = document.getElementById("Landphone").value;
	var inputemail = document.getElementById("Email").value;
	var inputcode = document.getElementById("inputCode").value;
	var inputpassone = document.getElementById("Passone").value;
	var inputpasstwo = document.getElementById("Passtwo").value;

	var sames = document.getElementsByName("same");
	var show = document.getElementsByClassName("show")
	for (i = 0; i < sames.length; i++) {
		if (sames[i].value == "") {
			show[i].style.color = "red"
			show[i].style.fontSize = "12px"
			sames[i].style.border = "1px solid red"
		}
		if (isPhone(inputphone)) {
			if (inputpassone == inputpasstwo && inputcode.toUpperCase() == code.toUpperCase() && (inputemail != "" && inputemail.length > 11)) {
				CommentAll();

				window.localStorage.setItem("phone", inputphone);
				window.localStorage.setItem("email", inputemail);
				window.localStorage.setItem("passone", inputpassone);
				$(function () {
					$("#autoo").fadeOut(1000);
					$("#auto").fadeIn(1000);
				})

			}
		}
	}
}

function land() {
	var shows = document.getElementsByClassName("shows")
	let passwords = document.getElementById("Password").value;
	let callphone = document.getElementById("Regisphone").value;
	var gophone = window.localStorage.getItem("phone");
	var gopass = window.localStorage.getItem("passone");
	var goemail = window.localStorage.getItem("email");
	if (callphone == gophone || callphone == goemail) {
		if (passwords == gopass) {
			alert("登录成功")
			shows[0].innerText = callphone;
			$("#LandRegistration").slideUp(500)
			$(".LandRegistration").css("display", "none")
			$(".landregistra_hid").css("display", "none")
			$(".landregistra_hids").css("display", "block")
			$(".user").css("display", "block")
			localStorage['islogin'] = 1;
		} else {
			alert("密码错误")
		}
	} else {
		alert("手机号或邮箱错误")
	}
}


var xmlHttp = new XMLHttpRequest();

function CommentAll() {
	var have = document.getElementById("Landphone").value;
	var pas = document.getElementById("Passone").value;
	xmlHttp.onreadystatechange = callback1;

	xmlHttp.open("get", "https://www.apiopen.top/createUser?key=00d91e8e0cca2b76f515926a36db68f5&phone='have'&passwd='pas'", true);
	xmlHttp.send();
}

function callback1() {
	if (xmlHttp.readyState == 4)
		if (xmlHttp.status == 200) {
			var data = xmlHttp.responseText;
			alert(data);
		}
}

function shield() {
	var s = document.getElementById("test");
	s.style.display = "block";

	var l = document.getElementById("log_window");
	l.style.display = "block";
}

function cancel_shield() {
	var s = document.getElementById("test");
	s.style.display = "none";

	var l = document.getElementById("log_window");
	l.style.display = "none";
}
$(".shoppCar").click(function () {
	window.location.href = "Car.html";
})