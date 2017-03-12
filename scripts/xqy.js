$(function(){
	//通过修改样式来显示不同的星级
    $("ul.rating li a").click(function(){
	  	alert("您给此商品的评分为："+this.title);
	  	var cl=$(this).parent().attr("class");
	  	$(this).parents().find(".rating").removeClass().addClass("rating "+cl+"star");
	  	return false;
	});
    /*产品属性切换功能*/
	$(".list-info ul li").click(function(){
		var a=$(".list-info ul li").index(this);
		$(this).addClass("selected").siblings().removeClass("selected");
		$(".produce-info div").eq(a).removeClass().siblings().addClass("hide");
	}).hover(function(){
		$(this).addClass("hover");
	},function(){ /*光标移除这个元素时,触发这个函数（leave）*/
		$(this).removeClass("hover");
	});

	//改变总价
	var price=$(".total-price strong").text();
	$(".num-info").change(function(){
		var num=$(this).attr("value");
		$(".total-price strong").text(num*price);
	}).change();

	//选择尺码
	$(".size-change ul li").click(function(){
		var size=$(this).text();
		$(".size-change strong").text(size);
		$(this).addClass("sieze-sleected").siblings().removeClass("sieze-sleected");
	});

	// 衣服颜色字体切换
	$(".color-change ul li img").click(function(){
			// 字体切换
		$(this).parents(".color-change").find("strong").text($(this).attr("alt"));
		 	// 大窗口颜色切换
		var color_src=$(this).attr("src");
		var i=color_src.lastIndexOf(".");//获取src地址中的.字符所在位置的编号，编号从0开始；
			//substring(star,stop);从star字符串的位置开始获取直到stop所在的位置并且不包含stop字符串；
		var jpg=color_src.substring(i);//获取.之后的字符串，即".jpg";
		var src=color_src.substring(0,i);//获取0到i的字符串并且不包含i。即"images/pro_img/blue";
		var c_src=src+"_one_small"+jpg;
		$(".list-img img").attr("src",c_src);			
			//小窗口衣服颜色切换 
		var j=src.replace("images/pro_img/",""); //用空白把src的"images/pro_img/"换掉，只剩下blue or yellow or green;
		$(".color li").hide();
		$(".color").find(".img_"+j).show();
	});

	$(".color li a img").click(function(){
		var herf=$(this).attr("src");
		var i=herf.lastIndexOf(".");
		var jpg=herf.substring(i);
		var src=herf.substring(0,i);
		var newsrc=src+"_small"+jpg;
		$(".list-img img").attr("src",newsrc);
		return false;
	});

	//结算购物车
	$(".card a img").click(function(){
		var name=$(".conten-info h4").text();
		var color=$(".color-change strong").text();
		var size=$(".size-change strong").text();
		var num=$(".num-info").val();
		var price=$(".total-price strong").text();
		alert("您购买的产品是；"+name+" ; \n"+
			"颜色是；"+color+" ; \n"+
			"尺码是；"+size+" ; \n"+
			"数量是；"+num+"件"+" ; \n"+
			"总价是；"+price+"元"+" ; \n"+
			"谢谢您的光临");
	});	
});