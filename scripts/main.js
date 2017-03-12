$(function(){
    //展示框效果
    $(".brand-header li a").click(function(){ 
	$(this).parent().addClass("chos").siblings().removeClass("chos");//.siblings()查找<li>标签的同胞元素，因为<a>无同胞元素，所以需要$(this).parent()找到<li>标签;
	var index=$(".brand-header li a").index(this);/*当前元素this相对于第一个li a 标签所在的位置 */
	var idx=$(this).index();/*当前元素this相对于其他同胞元素所在的位置*/
	/*因为<a>标签在<li>标签里面，所以，每次idx的同胞元素只有自己，所以alert(idx);每次输出都是0.*/
	var $rollobj=$(".con-list");
    var rollWidth = $rollobj.find("li").outerWidth();
	rollWidth = rollWidth * 4; //一个版面的宽度
	//也可以用 var rollWidth =$(".brand-con").width();--是<.con-list>的外层<div>--来代替上面两行代码。两种方法都可以
	$rollobj.stop(true,false).animate({ left : -rollWidth*index},1000);
	return false;   
	/*var $width=$(".con-list");
	var $wth=$width.find("li");
   	var width=$width.width();
   	$width.stop(true,false).animate({left:-width},1000);
   	return false;*/
   }).eq(0).click();//DOM页面加载完，在第一个<a>标签（eq(0)）来模拟用户操作鼠标点击click，目的是加上CSS（chos）的样式。

    //中间大屏幕效果
    $(".top a").css("opacity","0.7");
	var $asd=$(".top");
	var $sda=$asd.find("a");
	var len=$sda.length;
	var number=0;
	var adTimer=null;
	$sda.mouseover(function(){
		 number=$(".top a").index(this);
		showImg(number);
	}).eq(0).mouseover();
	//自动执行动画
	$(".img-list").hover(function(){
		if(adTimer){
			clearInterval(adTimer);
			}
		},function(){
			adTimer=setInterval(function(){
				showImg(number);
				number++;
				if (number==len) {number=0;}
			},2000);
	}).trigger("mouseleave");
		//自动执行动画结束
	
	//展示导航栏
   $(".header-nav li").hover(function(){
		$(this).find(".list-show").show();
	},function(){
		$(this).find(".list-show").hide();
	});
   //输入框效果
   $(".search").focus(function(){
		var value=$(this).val();
		if(value==this.defaultValue){
			$(this).val("");
		}
	}).blur(function(){
		if($(this).val()==""){
			$(this).val(this.defaultValue);
		}
	});

	//鼠标移动效果
	var x=10;
	var y=20;

	$(".tooltip").mouseover(function(e){
		this.mytitle=this.title;
		this.title="";
		var tooltip="<div id='tooltip'>"+this.mytitle+"</div>";
		$("body").append(tooltip);
		$("#tooltip").css({
			"top":(e.pageY+y)+"px",
			"left":(e.pageX+x)+"px"
		}).show("fast");
	}).mouseout(function(){
		this.title=this.mytitle;
		$("#tooltip").remove();
	}).mousemove(function(e){
		$("#tooltip")
			.css({
				"top": (e.pageY+y) + "px",
				"left": (e.pageX+x)  + "px"
			});
	});
	//图片鼠标移动效果
	var x=10;
	var y=20;
	$(".src").mouseover(function(e){
		this.mysrc=this.src;
		var src="<div id='src'><img src='"+this.mysrc+"'></div>";
		$("body").append(src);
		$("#src").css({
			top:(e.pageY+y)+"px",
			left:(e.pageX+x)+"px"
		}).show("fast");
	}).mouseout(function(){
			$("#src").remove();
		}).mousemove(function(e){
			$("#src").css({
			top:(e.pageY+y)+"px",
			left:(e.pageX+x)+"px"
		});
	});
});

//显示不同的模块
function showBrandList(index){
	var $rollobj = $(".con-list");
    var rollWidth = $rollobj.find("li").outerWidth();
	rollWidth = rollWidth * 4; //一个版面的宽度
	$rollobj.stop(true,false).animate({ left : -rollWidth*index},1000);
}
function showImg(index){
		var $asd=$(".top");
		var $sda=$asd.find("a");
		var newhref = $sda.eq(index).attr("href");//获取当前划过的连接的href值，
		
		$(".img-list").attr("href",newhref)    //将值设置给大图外面的超链接
						.find("img").eq(index).stop(true,true).fadeIn().siblings().fadeOut();//获取到所有大图，根据number显示当前顺序的图片，并且将同胞的图片隐藏
		
		$sda.removeClass("change").css("opacity","0.7")//取消所有的<a>标签的Css样式，防止触发了下一个<a>标签，上一个<a>标签还有Css样式。
			.eq(index).addClass("change").css("opacity","1");//通过eq();方法给当前focus的<a>标签设置Css样式
}