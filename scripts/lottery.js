$(function(){
	var canvas=document.getElementById("lotteryCvs");
	var context=canvas.getContext("2d");

	var angle=0,startTime,duration,loop,jiao=0.1,num=0;

	context.translate(canvas.width/2,canvas.height/2);

	var as=new Image();
	as.src="img/as.png";
	as.width=499;
	as.height=499;

	var pin=new Image();
	pin.src="img/pin.png";
	pin.width=358;
	pin.height=301;

	setTimeout(function(){
		context.drawImage(as,-as.width/2,-as.height/2);
		context.drawImage(pin,-pin.width/2+10,-pin.height/2-7);
	},50);
	
	$("#btnLottery").click(function(){
		if(num==3){
			alert("抽奖次数用完，请明天再来");	
			$(this).attr("disabled","disabled");
			return;
		}
		num++;

		$(this).attr("disabled","disabled");
		startTime=new Date().getTime();
		duration=5000;
		loop=setInterval(draw,10);
	});


	function draw(){
		angle+=Math.PI/180*(1+jiao);
		context.rotate(angle);
		context.drawImage(as,-as.width/2,-as.height/2);
		context.rotate(-angle);
		context.drawImage(pin,-pin.width/2+10,-pin.height/2-7);
		var endTime=new Date().getTime();
		if(endTime<=startTime+duration/2){
			jiao+=0.1;
		}else if(endTime<startTime+duration){
			jiao-=0.1
		}else if(endTime>=startTime+duration){
			clearInterval(loop);
			$("#btnLottery").removeAttr("disabled");
		}
	}
});