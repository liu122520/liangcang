$.ajax({
	type:"get",
   "url": "http://h6.duchengjiu.top/shop/api_goods.php",
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