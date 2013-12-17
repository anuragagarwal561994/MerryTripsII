var minWidth = parseInt($('html').css('min-width'));
var fitThings = function(){
	var finalHeight = $(window).width()>=minWidth ? $(window).width() : minWidth;
	$('.container').css('margin-top', ($(window).height()-$('.container').height())/2);
	var condition = $(window).width()>690;
	$('ul#navigation').css('top', condition?($('#header').height() - $('#logo').height()/1.25):0);
	$('ul#navigation li').css('font-size', ((condition?1.4:3)/100) * finalHeight);
	$('.container').css('margin-top', (condition?$('#logo').height()+parseInt($('#navigation').css('top')):$('#header').height())+30);
	$('#footer').css('height', $('#header').height()/4);
	$('.container').css('padding-bottom', $('#footer').height()+30);
}
$(document).ready(function(){
	fitThings();
});
$(window).resize(function(){
	fitThings();				
});