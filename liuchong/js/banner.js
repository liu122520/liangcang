


$(function(){
	
	var $banner = $("#lunBo");
	var $tuP = $(".tuP");
	var $img = $(".tuP li");
	var $circles = $(".circles ol li");
	var idx = 0;
	var timer = setInterval(rightBtn, 1000);
	$banner.mouseenter(function() {
		clearInterval(timer);
	});
	$banner.mouseleave(function() {
		timer = setInterval(rightBtn, 2000)
	});

	$(".rightBtn").click(rightBtn);

	function rightBtn() {
		if ($tuP.is(":animated")) return;
		idx++;
		$tuP.animate({
			"left": -1016 * idx 
		}, 300, function() {
			if (idx >= 7) {
				idx = 0;
				$tuP.css("left", 0);
			}
		})
		changeCircle()
	}

	$(".leftBtn").click(function() {

		if ($tuP.is(":animated")) return;
		idx--;
		if (idx <= 0) {
			idx = 7;
			$tuP.css("left", 7 * 1000);
		}
		$tuP.animate({
			"left": -1016 * idx
		}, 300)
		changeCircle()
	});
	//设置圆的样式
	$circles.click(function() {
		idx = $(this).index();
		console.log(idx)
		$tuP.animate({
			"left": -1016 * idx
		}, 300);
		changeCircle();
	})
	function changeCircle() {
		var n = idx < 7 ? idx : 0;
		$circles.eq(n).addClass("cur").siblings().removeClass("cur");
	}
	
})

	
	