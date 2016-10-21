var index=0;//当前显示的第几张图，默认开始为0；
var mg=$("#imgBox li");//将焦点图储存为一个变量方便调用节省下载调用查询时间。
var imgBox = $("#imgBox");
var len=mg.length;//焦点图图片数量
var imgNum = $("#imgNum a");
 
function play(n){
	imgNum.eq(n).addClass("active").siblings("a").removeClass("active");
	if(n==0){
		imgBox.animate({left: -810*n},0);
	}else{
		imgBox.animate({left: -810*n},2000);
	}
}
 
setInterval(function(){
	play(index);
	index++;
	if(index==len){
		index=0;
	}
},4000);
