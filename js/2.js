	$(document).ready(function(){
		$(".landregistra_hid").click(function(){
		$("#LandRegistration").slideToggle(1000,function(){
			if ($("#auto").css("display")=="none") {
				$("#auto").fadeIn(500);
				$("#black").fadeIn(500);
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
	$(".click").click(function(){
		$("#Pointout").css("display","none")
	})
		
	
	$(".change").click(function(){
		$("#auto").fadeOut(500);
		$("#black").fadeOut(100)
		$("#autoo").fadeIn();
		$("#black").fadeIn(500)
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
	
	$(".dl").hover(function(){
		$(".dl").css("background","white")
		$(".p2").css("color","black")
		$(".change2").attr("src","img/2.png")
	},function(){
		$(".dl").css("background","black")
		$(".p2").css("color","white")
		$(".change2").attr("src","img/1.png")
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
	
	$(window).scroll(function(){
		if($(window).scrollTop()>50){
			$("#header").css("height","50px")
			$("#right").css("height","50px")
			$("#right").css("margin-top","-15px")
			$(".top").css("margin-top","8px")
			}else{
			$("#header").css("height","80px")
			$("#right").css("margin-top","0px")
			$(".top").css("margin-top","25px")
		}
	})
	$(".go").click(function(){
		window.location.href='index.html'
	})
	$(".delect").click(function(){
		$("#center").css("display","none");
		$("#centeral").css("display","block");
	})
})
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
var minus = document.getElementsByClassName("combo-minus");//减号
	var plus = document.getElementsByClassName("combo-plus");//加号
	var goods_num = document.getElementsByClassName("combo-value");//商品数量
	var goods_ele = document.getElementsByClassName("price");//商品单价
	var goods_amount = document.getElementsByClassName("amount");//商品总价

	for(let i = 0; i < plus.length; i++) {
		plus[i].onclick = function() {
			goods_num[i].value = parseInt(goods_num[i].value) + 1;
			good_price(i);
			totall(i);
		}
	}

	function good_price(i) {
		var num = goods_num[i].value;
		var good_price = goods_ele[i].getElementsByTagName("em")[0].innerText;
		var price = num * good_price;
		goods_amount[i].getElementsByTagName("em")[0].innerText = price;
	}

	for(let i = 0; i < minus.length; i++) {
		minus[i].onclick = function() {
			if(goods_num[i].value > 1) {
				goods_num[i].value = parseInt(goods_num[i].value) - 1;
				good_price(i);
				totall(i);
			}
		}
	}
	for(let i = 0; i < goods_num.length; i++) {
		goods_num[i].onblur = function() {
			goods_num[i].value = parseInt(goods_num[i].value);
			good_price(i);
			totall(i);
		}
	}
	
	//获取每个商品前面单选按钮的节点
	var check = document.getElementsByName("id");
	//获取全选按钮节点
	var checkall = document.getElementById("all");
	checkall.onclick = function() {
		if(checkall.checked == true) {
			for(var i = 0; i < check.length; i++) {
				check[i].checked = "checked";
				totall(i);
			}
		} else {
			for(var i = 0; i < check.length; i++) {
				check[i].checked = "";
				totall(i);
			}
		}
	}
	
	//点击购物车列表下复选框全选
	for(var i = 0; i < check.length; i++) {
		check[i].onclick = function() {
			var count = 0;
			for(var t = 0; t < check.length; t++) {
				if(check[t].checked == true) {
					count++;
				}
			}
			if(count == check.length) {
				checkall.checked = "checked";
				totall(i);
			} else {
				checkall.checked = "";
				totall(i);
			}
		}
	}
	//删除商品
	var catbtn = document.getElementById("cart-delete");
	var list = document.getElementById("cart-goods-list");
	catbtn.onclick = function() {
		var carts = [];
		for(var i = 0; i < check.length; i++) {
			if(check[i].checked == true) {
				carts.push(check[i].parentNode.parentNode);

			}
		}
		for(var j = 0; j < carts.length; j++) {
			list.removeChild(carts[j]);
			checkall.checked = "";
			totall(i);
			for(let i = 0; i < plus.length; i++) {
				plus[i].onclick = function() {
					goods_num[i].value = parseInt(goods_num[i].value) + 1;
					good_price(i);
					totall(i);
				}
			}
			//统计每个商品的金额
			function good_price(i) {
				var num = goods_num[i].value;
				var good_price = goods_ele[i].getElementsByTagName("em")[0].innerText;
				var price = num * good_price;
				goods_amount[i].getElementsByTagName("em")[0].innerText = price;
			}
			var minus = document.getElementsByClassName("combo-minus");
			for(let i = 0; i < minus.length; i++) {
				minus[i].onclick = function() {
					if(goods_num[i].value > 1) {
						goods_num[i].value = parseInt(goods_num[i].value) - 1;
						good_price(i);
						totall(i);

					}
				}
			}
			for(let i = 0; i < goods_num.length; i++) {
				goods_num[i].onblur = function() {
					goods_num[i].value = parseInt(goods_num[i].value);
					good_price(i);
					totall(i);
				}
			}
		}
	}
	//结算总价
	var total_amount = document.getElementById("total-amount");
	function totall(i) {
		var t = 0;
		for(var i = 0; i < check.length; i++) {
			if(check[i].checked == true) {
				var num = goods_num[i].value;
				var total_price = goods_ele[i].getElementsByTagName("em")[0].innerText;
				var prices = num * total_price;
				t = t + prices;

			}
		}
		total_amount.getElementsByTagName("em")[0].innerText = t;
	}
	$(".del1").click(function(){
		$(".delete1").css("display","none")
	})
	$(".del2").click(function(){
		$(".delete2").css("display","none")
	})
	$(".inputs").click(function(){
		if($(".delete1").css("display")=="none"||$(".delete2").css("display")=="none"){
	$(".allmoney")[0].innerText="0.00";
}
	})
$(".deall").click(function(){
	$("#center").css("display","none");
	$("#centeral").css("display","block");
})
	 carobject = JSON.parse(localStorage.getItem('carobject'));
	 parseInt(carobject.price)
	
	document.getElementsByClassName("carname")[0].innerText=carobject[0].name;
	document.getElementsByClassName("carmodel")[0].innerText=carobject[0].model;
	document.getElementsByClassName("carprice")[0].innerText=carobject[0].price
	document.getElementsByClassName("carsex")[0].innerText=carobject[0].sex;
	document.getElementsByClassName("carcolor")[0].innerText=carobject[0].color;
	document.getElementsByClassName("carimg1")[0].src="img/con00000.png"
	
    document.getElementsByClassName("carname")[1].innerText=carobject[1].name;
	document.getElementsByClassName("carmodel")[1].innerText=carobject[1].model;
	document.getElementsByClassName("carprice")[1].innerText=carobject[1].price
	document.getElementsByClassName("carsex")[1].innerText=carobject[1].sex;
	document.getElementsByClassName("carcolor")[1].innerText=carobject[1].color;
	document.getElementsByClassName("carimg1")[1].src="img/conm0000.png"
