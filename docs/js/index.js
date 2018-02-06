var speedi=80;
var colee2=document.getElementById("colee2");
var colee1=document.getElementById("colee1");
var colee=document.getElementById("colee");
colee2.innerHTML=colee1.innerHTML; //克隆colee1为colee2
function Marquee1(){
//当滚动至colee1与colee2交界时
if(colee2.offsetTop-colee.scrollTop<=0){
colee.scrollTop-=colee1.offsetHeight; //colee跳到最顶端
}else{
colee.scrollTop++
}
}
var MyMar1=setInterval(Marquee1,speedi)//设置定时器
//鼠标移上时清除定时器达到滚动停止的目的
colee.onmouseover=function() {clearInterval(MyMar1)}
//鼠标移开时重设定时器
colee.onmouseout=function(){MyMar1=setInterval(Marquee1,speedi)}
$(function(){
	//fullpage插件方法
	$('#myfullpage').fullpage({
		afterLoad:function(link,index){
			console.log('滚动到第'+index+'屏'+',link:'+link);
			//清除animation class
			$('#myfullpage>.section').removeClass('animation');
			//动画效果使用animation这个class来开启
			//js执行太快，设置延迟
			setTimeout(function(){
				$('#myfullpage>.section').eq(index-1).addClass('animation');
			},200)
		}
	});
	//区域3 a标签 高亮
	$('.section3 .list a').mouseenter(function(){
		$('.section3 .list a').removeClass('active');
		$(this).addClass('active');
		var aIndex=$(this).attr('data-index');
		$('.section3 .lessons li').eq(aIndex).stop().fadeIn().siblings().hide();
	});
	//初始化一个选项
	$('.section3 .list a').first().mouseenter();
	//区域4的 js效果
	var containerWidth=960,
		itemWidth=760,
		col=7,
		initLeft=containerWidth/col,
		margin=(containerWidth-itemWidth)/(col-1);
	//设置给每一个div
	$('.section4 .wind>div').each(function(index,element){
		console.log(index+'||'+element);
		$(element).css({
			left:index*initLeft
		})
	})
	//鼠标移入某个div时 让他前面的往前一次排布，后面的div加多一个元素的宽度
	$('.section4 .wind>div').mouseenter(function(){
		var currentIndex=$(this).index();
		$('.section4 .wind>div').each(function(index,element){
			if(index<=currentIndex){
				$(element).css({
					left:index*margin
				})
			}else{
				$(element).css({
					left:index*margin-margin+itemWidth
				})
			}
		})
	})
	$('.section4 .wind>div').mouseleave(function(){
		$('.section4 .wind>div').each(function(index,element){
			console.log(index+'||'+element);
			$(element).css({
				left:index*initLeft
			})
		})
	})
});