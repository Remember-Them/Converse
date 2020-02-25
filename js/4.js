	 var box = document.getElementById("boxer");
        //获取小盒子
        var small = box.children[0];
        //获取mask
        var mask = small.children[1];
        //获取大盒子
        var big = box.children[1];
        glassScaleImgs(small,big);
        //放大镜效果封装；
        function glassScaleImgs(small,big){
            //设置小盒子的移入事件  移入显示，移出隐藏
            small.onmouseover = function(){
                mask.style.display = "block";
                big.style.display = "block";
            };
            small.onmouseout = function(){
                mask.style.display = "none";
                big.style.display = "none";
            };
            //要得到鼠标在 small 内的坐标
            small.onmousemove = function(event){
                event = event || window.event;
                var pagex = event.pageX || scroll().left + event.clientX;
                var pagey = event.pageY || scroll().top + event.clientY;
                //x,y表示mask的位置
                var x = pagex - box.offsetLeft - mask.offsetWidth/2;
                var y = pagey - box.offsetTop - mask.offsetHeight/2;
                //限制盒子的移动范围
                if (x<0){
                    x = 0;
                }else if(x > small.offsetWidth - mask.offsetWidth){
                    x = small.offsetWidth - mask.offsetWidth;
                }
 
                if (y<0){
                    y = 0;
                }else if(y > small.offsetHeight - mask.offsetHeight){
                    y = small.offsetHeight - mask.offsetHeight;
                }
 
                //移动黄盒子
                mask.style.left = x + "px";
                mask.style.top = y + "px";
 
                //等比例移动右边的盒子
                //获取大图片
                var bigImg = big.children[0];
                //大盒子走的距离/mask走的距离 = (大图片 - 大盒子)/(小图片 - 黄盒子)
                //比例公式  大图片宽度 - 大盒子宽度/ 小盒子宽度 - mask宽度
                //  var eqs = big.offsetWidth - bigImg.offsetWidth / small.offsetWidth - mask.offsetWidth;
                var eqs = (bigImg.offsetWidth - big.offsetWidth) / (small.offsetWidth - mask.offsetWidth);
                //大图片移动
                bigImg.style.marginLeft = -x*eqs + "px";
                bigImg.style.marginTop = -y*eqs + "px";
            }
            function scroll(){
                return {
                    "top": window.pageYOffset || document.body.scrollTop || document.documentElement.scrollTop,
                    "left":  window.pageXOffset || document.body.scrollLeft || document.documentElement.scrollLeft
                }
            }
}
        
        
        	function YYYYMMDDstart() {
     MonHead = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];

     //先给年下拉框赋内容   
     var y = new Date().getFullYear();
     for (var i = (y - 100); i <(y+1); i++) //以今年为准，前30年，后30年   
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
 
 $(document).ready(function(){
 	$(".leftone").hover(function(){
 		$(".leftone dd").css("color","#B7B7B7")
 		$(".leftone dd").css("text-decoration","underline")
 		$(".leftone img").attr("src","img/fenxiang1.png")
 	},function(){
 		$(".leftone dd").css("color","black")
 		$(".leftone img").attr("src","img/fenxiang.png")
 		$(".leftone dd").css("text-decoration","none")
 	})
 	$(".lefttwo").hover(function(){
 		$(".lefttwo dd").css("color","#B7B7B7")
 		$(".lefttwo dd").css("text-decoration","underline")
 		$(".lefttwo img").attr("src","img/aixin1.png")
 	},function(){
 		$(".lefttwo dd").css("color","black")
 		$(".lefttwo dd").css("text-decoration","none")
 		$(".lefttwo img").attr("src","img/aixin.png")
 	})
 	$(".dl").hover(function(){
		$(".dl").css("background","white")
		$(".p2").css("color","black")
		$(".change2").attr("src","img/2.png")
	},function(){
		$(".dl").css("background","black")
		$(".p2").css("color","white")
		$(".change2").attr("src","img/1.png")
	})
		$(".change").hover(function(){
		$(".change").css("background","white")
		$(".p1").css("color","black")
		$(".change1").attr("src","img/2.png")
	},function(){
		$(".change").css("background","black")
		$(".p1").css("color","white")
		$(".change1").attr("src","img/1.png")
	})
	
	$(".gogo").hover(function(){
		$(".gogo").css("background","white")
		$(".pp").css("color","black")
		$(".gogogo").attr("src","img/2.png")
	},function(){
		$(".gogo").css("background","black")
		$(".pp").css("color","white")
		$(".gogogo").attr("src","img/1.png")
	})
 	
 	$(".con1").click(function(){
				$(".con1").css("border","solid 1px #B7B7B7")
				$(".con2,.con3,.con4,.con5,.con6").css("border","none")
				$(".imgg").attr("src","img/conm0.png")
				$(".imggg").attr("src","img/conm00.png")
			})
			$(".con2").click(function(){
				$(".con2").css("border","solid 1px #B7B7B7")
				$(".con1,.con3,.con4,.con5,.con6").css("border","none")
				$(".imgg").attr("src","img/conm1.png")
				$(".imggg").attr("src","img/conm11.png")
			})
			$(".con3").click(function(){
				$(".con3").css("border","solid 1px #B7B7B7")
				$(".con2,.con1,.con4,.con5,.con6").css("border","none")
				$(".imgg").attr("src","img/conm2.png")
				$(".imggg").attr("src","img/conm22.png")
			})
			$(".con4").click(function(){
				$(".con4").css("border","solid 1px #B7B7B7")
				$(".con2,.con3,.con1,.con5,.con6").css("border","none")
				$(".imgg").attr("src","img/conm3.png")
				$(".imggg").attr("src","img/conm33.png")
			})
			$(".con5").click(function(){
				$(".con5").css("border","solid 1px #B7B7B7")
				$(".con2,.con3,.con4,.con1,.con6").css("border","none")
				$(".imgg").attr("src","img/conm4.png")
				$(".imggg").attr("src","img/conm44.png")
			})
			$(".con6").click(function(){
				$(".con6").css("border","solid 1px #B7B7B7")
				$(".con2,.con3,.con4,.con1,.con5").css("border","none")
				$(".imgg").attr("src","img/conm5.png")
				$(".imggg").attr("src","img/conm55.png")
			})
					$(".landregistra_hid").click(function(){
						
		$("#LandRegistration").slideToggle(1000,function(){
			if ($("#auto").css("display")=="none") {
				$("#auto").fadeIn(500);
				$("#black").fadeIn(500);
				$("#LandRegistrations").css("display","none")
			}
		})
	})
					
$(".first").click(function(){
			$("#autoo").fadeOut(100)
			$("#LandRegistration").slideToggle(1000,function(){
				$("#black").fadeIn(500);
			$("#auto").fadeIn(500)
		})
		})
		
		$(".second").click(function(){
			$("#auto").fadeOut(100)
			$("#LandRegistration").slideToggle(1000,function(){
				$("#black").fadeIn(500);
			$("#autoo").fadeIn(500)
		})
		})
		
		
	$(".change").click(function(){
		$("#auto").fadeOut(500);
		$("#black").fadeOut(100)
		$("#autoo").fadeIn();
		$("#black").fadeIn(500)
	})
	
	
	$(".man").hover(function(){
		$("#man").fadeIn(1000)
		$("#man").css("display","block")
		
	},function(){
		$("#man").css("display","none")
	})
	$(".woman,.smallwoman").hover(function(){
		$("#woman").fadeIn(1000)
		$("#smallwoman").fadeIn(1000)
		$("#woman,#smallwoman").css("display","block")
	},function(){
		$("#woman,#smallwoman").css("display","none")
	})
	$(".son,.smallson").hover(function(){
		$("#son").fadeIn(1000)
		$("#smallson").fadeIn(1000)
		$("#son,#smallson").css("display","block")
	},function(){
		$("#son,#smallson").css("display","none")
	})
	

	
	$(".manshoes").hover(function(){
		$("#manshoes").fadeIn(300)
		$("#womanshoes,#worn,#Dai").css("display","none")	
		$("#manshoes").css("display","block")
		$(".left").animate({
			"left":"90px"
		},200)
	})
	
	
	
	$(".womanshoes").hover(function(){
		$("#womanshoes").fadeIn(300)
		$("#manshoes,#worn,#Dai").css("display","none")	
		$("#womanshoes").css("display","block")
		$(".left").animate({
			"left":"340px"
		},200)
	})
	
	
	
	$(".worn").hover(function(){
		$("#worn").fadeIn(300)
		$("#womanshoes,#manshoes,#Dai").css("display","none")
		$("#worn").css("display","block")
		$(".left").animate({
			"left":"580px"
		},200)
	})
	
	$(".Dai").hover(function(){
		$("#Dai").fadeIn(300)
		$("#womanshoes,#manshoes,#worn").css("display","none")
		$("#Dai").css("display","block")
		$(".left").animate({
			"left":"830px"
		},200)
	})

$(".converse").click(function(){
	$("#suprice").css("animation", "mymove 2s infinite linear")
})
$(".converses").click(function(){
	$("#suprices").css("animation", "mymove 2s infinite linear")
})
	
	$(window).scroll(function(){
		if($(window).scrollTop()>100){
			$("#header").css("height","50px")
			$("#right").css("height","50px")
			$("#right").css("margin-top","-15px")
			$("#header-title").css("height","30px")
			$(".top").css("margin-top","8px")
			$("#header-title dl dd a").css("font-size","14px")
			$("#header-title dl dd a").css("line-height","30px")
			$("#header-title dl dd a").css("height","30px")
			$("#header-title dl.header>dd").css("background","url(img/jt2.png) no-repeat 108px 10px")

			}else{
			$("#header").css("height","80px")
			$("#right").css("margin-top","0px")
			$("#header-title").css("height","50px")
			$(".top").css("margin-top","25px")
			$("#header-title dl dd a").css("height","50px")
			$("#header-title dl dd a").css("font-size","18px")
			$("#header-title dl dd a").css("line-height","35px")
			$("#header-title dl.header>dd").css("background","url(img/jt2.png) no-repeat 60px 31px")
		}		
 })
	$(".converse").click(function(){
	$("#suprice").css("animation", "mymove 2s infinite linear")
})
$(".converses").click(function(){
	$("#suprices").css("animation", "mymove 2s infinite linear")
})



	})

var code;
function createCode() 
{
 code = "";
 var codeLength = 6; //验证码的长度
 var checkCode = document.getElementById("checkCode");
 var codeChars = new Array(0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 
      'a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z',
      'A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'); //所有候选组成验证码的字符，当然也可以用中文的
 for(var i = 0; i < codeLength; i++) 
 {
  var charNum = Math.floor(Math.random() * 52);
  code += codeChars[charNum];
 }
 if(checkCode) 
 {
  checkCode.className = "code";
  checkCode.innerHTML = code;
 }
}


function isPhone(phone) {
	var myreg = /^[1][3,4,5,7,8][0-9]{9}$/;
	if(!myreg.test(phone)) {
		return false;
	} else {
		return true;
	}

}
 
function isture(){
	var goemail =window.localStorage.getItem("email");
	var callphone=document.getElementById("Regisphone").value;
    var phone=document.getElementById("Regisphone");
	if (isPhone(callphone)&&goemail==callphone) {
		phone.style.border="1px solid green"
	}else if(callphone.value==null){
		phone.style.border="1px solid red"
	}
		$("#Regisphone").click(function(){
		$("#Regisphone").css("border","1px #999999 solid")
	})
}
function istures(){
	var passes= window.localStorage.getItem("passone");
	var passwords=document.getElementById("Password").value;
    var Password=document.getElementById("Password");
		if(passwords=="") {
		Password.style.border="1px solid red"
	}else if(passes==passwords){
		Password.style.border="1px solid green"
	}
	$("#Password").click(function(){
		$("#Password").css("border","1px #999999 solid")
	})
}

function istext(){
	var inputphone=document.getElementById("Landphone").value;
 	var phones=document.getElementById("Landphone");
     var show=document.getElementsByClassName("show");
	if(inputphone==""){
		show[0].innerHTML="请输入手机号码！"
		show[0].style.color="red"
		show[0].style.fontSize="12px"
		phones.style.border="1px solid red"
	}else if(isPhone!=(inputphone)){
		show[0].innerHTML="请输入正确的手机号码！"
		show[0].style.color="red"
		show[0].style.fontSize="12px"
		phones.style.border="1px solid red"
	}
	if(isPhone(inputphone)){
		show[0].innerHTML=""
		phones.style.border="1px solid #999999"
	}
}
	function istext_one(){
	var inputemail=document.getElementById("Email").value;
    var email=document.getElementById("Email");
     var show=document.getElementsByClassName("show")
	if (inputemail=="") {
		show[1].innerHTML="请输入电子邮箱地址！"
		show[1].style.color="red"
		show[1].style.fontSize="12px"
		email.style.border="1px solid red"
	}
	if(inputemail.length<11){
		show[1].innerHTML="请输入有效的电子邮箱地址！"
		show[1].style.color="red"
		show[1].style.fontSize="12px"
		email.style.border="1px solid red"
	}else{
		show[1].innerHTML=""
		email.style.border="1px solid #999999"
	}
}
function istext_two(){
	var inputpassone=document.getElementById("Passone").value;
	var pas=document.getElementById("Passone");
  	var show=document.getElementsByClassName("show")
	if(inputpassone=="") {
		show[2].innerHTML="请输入密码！"
		show[2].style.color="red"
		show[2].style.fontSize="12px"
		pas.style.border="1px solid red"
	}else{
		show[2].innerHTML=""
		pas.style.border="1px solid #999999"
	}
}
function istext_three(){
	var inputpassone=document.getElementById("Passone").value;
	var inputpasstwo=document.getElementById("Passtwo").value;
    var pass=document.getElementById("Passtwo");
     var show=document.getElementsByClassName("show")
	if (inputpasstwo=="") {
		show[3].innerHTML="请再次输入密码！"
		show[3].style.color="red"
		show[3].style.fontSize="12px"
		pass.style.border="1px solid red"
	}
	if(inputpassone!=inputpasstwo){
		show[3].innerHTML="抱歉，两次输入的密码不匹配！"
		show[3].style.color="red"
		show[3].style.fontSize="12px"
		pass.style.border="1px solid red"
	}else{
		show[3].innerHTML=""
		pass.style.border="1px solid #999999"
	}
	
}
function istext_four(){
	var coded=document.getElementById("inputCode")
	var inputcode=document.getElementById("inputCode").value;
     var show=document.getElementsByClassName("show");
    if(inputcode==""){
    	show[4].style.color="red"
		show[4].style.fontSize="12px"
		coded.style.border="1px solid red"
		show[4].innerHTML="请输入验证码！"
    }
	if(inputcode.toUpperCase()!=code.toUpperCase()){
		show[4].style.color="red"
		show[4].style.fontSize="12px"
		coded.style.border="1px solid red"
		show[4].innerHTML="验证码有误！"
	}else if(inputcode.toUpperCase()==code.toUpperCase()){
		show[4].innerHTML=""
		coded.style.border="1px solid #999999"
	}
}
	
var inputphone,inputemail,inputcode;
function gotoland(){
	var inputphone=document.getElementById("Landphone").value;
	var inputemail=document.getElementById("Email").value;
	var inputcode=document.getElementById("inputCode").value;
	var inputpassone=document.getElementById("Passone").value;
	var inputpasstwo=document.getElementById("Passtwo").value;
	
	var sames=document.getElementsByName("same");
	var show=document.getElementsByClassName("show")
for (i=0;i<sames.length;i++) {
	if(sames[i].value==""){
//		show[0].innerHTML="请输入手机号码！"
//		show[1].innerHTML="请输入电子邮箱地址！"
//		show[2].innerHTML="请输入密码！"
//		show[3].innerHTML="请再次输入密码！"
//		show[4].innerHTML="验证码有误！"
		show[i].style.color="red"
		show[i].style.fontSize="12px"
		sames[i].style.border="1px solid red"
	}
	if(isPhone(inputphone)){
		if(inputpassone==inputpasstwo&&inputcode.toUpperCase()==code.toUpperCase()&&(inputemail!=""&&inputemail.length>11)){
			CommentAll();
				
			window.localStorage.setItem("phone", inputphone);
			window.localStorage.setItem("email", inputemail);
			window.localStorage.setItem("passone", inputpassone);
			$(function(){
				$("#autoo").fadeOut(1000);
				$("#auto").fadeIn(1000);
			})
			
		}
	}
}	
}
function land(){
	var shows=document.getElementsByClassName("shows")
	var passwords=document.getElementById("Password").value;
	var callphone=document.getElementById("Regisphone").value;
	var gophone =window.localStorage.getItem("phone");
	var gopass =window.localStorage.getItem("passone");
	var goemail =window.localStorage.getItem("email");
	if(callphone==gophone||callphone==goemail){
		if(passwords==gopass){
			alert("登录成功")
			shows[0].innerText=callphone;
			$(".LandRegistration").css("display","none")
			$(".user").css("display","block")
		}else{
			alert("密码错误")
		}
	}else{
		alert("手机号或邮箱错误")
	}
}


var xmlHttp = new XMLHttpRequest();
function CommentAll() {
	var have = document.getElementById("Landphone").value;
	var pas = document.getElementById("Passone").value;
    xmlHttp.onreadystatechange =callback1;
    
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

var car=document.getElementById("thecar");
//var godssee=document.getElementsByClassName("godssee")
//var godsname=document.getElementsByClassName("godsname")
//var godsprize=document.getElementsByClassName("godsprize")
//var model=document.getElementsByClassName("Model")
//var color=document.getElementsByClassName("color")
//var godssize=document.getElementsByClassName("godssize")
//var godsnum=document.getElementsByClassName("godsnum")
//var godsmoney=document.getElementsByClassName("godsmoney")
//var tips=document.getElementsByClassName("tips")
 carobject = JSON.parse(localStorage.getItem('carobject'));



car.onclick=function(){
	$("#LandRegistrations").slideDown(1000);
	$("#car").fadeIn(1000)
		$(".gods").css("background","url(img/cat0.png)")
		document.getElementsByClassName("godssee")[0].innerText="已加入购物车"
		document.getElementsByClassName("godsname")[0].innerText=carobject[1].name;
		document.getElementsByClassName("godsprice")[0].innerText=carobject[1].price;
		document.getElementsByClassName("Model")[0].innerText=carobject[1].model;
		document.getElementsByClassName("color")[0].innerText=carobject[1].color;
		document.getElementsByClassName("godssize")[0].innerText=carobject[1].sex;
		document.getElementsByClassName("godsnum")[0].innerText=carobject[1].num;
		$(".close").css("background","url(img/cha.png)")
		document.getElementsByClassName("godsmoney")[0].innerText=carobject[1].price;
		document.getElementsByClassName("tips")[0].innerText="不包含礼品卡消费金额"
	 var movename=setTimeout(function(){
		$("#LandRegistrations").slideUp(1000);
	},3000)
}
//var b;
// var a= document.getElementsByTagName('option');
// for (i=0;i<a.length;i++) {
// 	a[i].onclick=function(){
// 		b=a[i].innerText;
// 		alert('aa');
// 	}
// }
// $("#thecar").click(function(){
// 	alert(b);
// })
