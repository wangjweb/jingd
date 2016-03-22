$(function(){
	String.prototype.formate=function(){
			var str=this;
			for(var i=0;i<arguments.length;i++){
				str=str.replace(new RegExp("\\{"+i+"\\}","gm"),arguments[i]);
			}
			return str;
		}
		$.get("server.php",function(data){
			var dataTr='<tr class="trOrder">'+
							'<td colspan="6">'+
								'<span>订单编号: {0}</span>'+
								'<span><a href="{1}" target="_blank">{2}</a>'+
								'</span>'+
							'</td>'+
						'</tr>'+
						'<tr class="trProd">'+
							'<td>'+
								'<div class="imgList">'+
									'<a href="{3}" target="_blank">'+
										'<img src="{3}" width="50" height="50" />'+
									'</a>'+
								'</div>'+
							'</td>'+
							'<td>{4}</td>'+
							'<td>￥{5}<br/>{6}</td>'+
							'<td>{7}<br/>{8}</td>'+
							'<td>{9}</td>'+
							'<td>'+
								'<a href="#">查看</a>|<a href="#">删除</a><br/>'+
								'<a href="#">评价晒单</a><br/>'+
								'<a class="btn_buy_again" href="#">还要买</a>'+
							'</td>'+
						'</tr>';
			var html="";
			for(var i=0;i<data.length;i++){
				var order=data[i];
				var datetime=order.payTime;
				var arr=datetime.split(" ");
				var date=arr[0];
				var time=arr[1];
				var orderString=dataTr.formate(order.orderId,
									    order.shopAddr,
										order.shopName,
										order.imgLink,
										order.userName,
										order.payMoney,
										order.payMode,
										date,
										time,
										order.payState);
				html+=orderString;
			}
			$("#orderList").append($(html));
		},"json");
});