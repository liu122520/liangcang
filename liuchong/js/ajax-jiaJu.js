$.ajax({
	type:"get",
   "url": "http://h6.duchengjiu.top/shop/api_goods.php?page=4&pagesize=19&cat_id=45",
	"success":function(res){
		console.log(res)
		for(var i=0;i<res.data.length-1;i++){
		$("#liangPin").append(
			'<div class="liangPin-one"><div class="liangPin-one-top"><a href="" class="liangPin-one-top-hd"><p class="qian">￥'
			+res.data[i].price+
			'</p><p class="jieShao">'
			+res.data[i].goods_desc+
			'</p><p class="gongXiao">'
			+res.data[i].goods_name+
			'</p></a><a href="" class="liangPin-one-top-img"><img src="'
			+res.data[i].goods_thumb+
			'" style="width:316px;height: 316px;"/></a></div><div class="liangPin-one-btm"><a href="" class="liangPin-one-btm-x"><img src="../img/928.jpg"style="width: 40px;height: 40px;vertical-align:middle;box-shadow: 3px 3px #ccc;"/><span>'
				+res.data[i].goods_id+
			'</span></a><a href="" class="liangPin-one-btm-y">'
			+res.data[i].goods_name+
		'</a></div></div>'
			)
		}
	}
});

$("#buttom-one-dh").mouseenter(function(){
		function handMove(){
			$(".finger").animate({"left": -20},600,"linear",function(){
				$(".finger").animate({"left": -0},600,"linear",function(){
					handMove();
				});
			});
		}
		handMove();
	});

// 给按钮绑定点击事件处理函数
$("#fh").click(function() {
	// 滚动到顶部， 通过设置
	//    "body,html" 兼容写法，确保所有浏览器都可以正常设置滚动条
	$("body,html").animate({scrollTop: 0});
});

// 到达一定位置才显示“回到顶部”按钮
//   思路：
//       1. 获取滚动条的位置
//       2. 根据位置判断，是否显示“回到顶部” 按钮
$(document).scroll(function() {
	
	var top = $(document).scrollTop();
	
	if (top > 100) {
		$("#fh").show();
	} else {
		$("#fh").hide();
	}
})