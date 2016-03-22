$(function(){
	var canvas=document.getElementById("recordCvs");
	var context=canvas.getContext("2d");

	var datas=[1200,2000,3000,500,200,800,1800,2200,2600,1000,600,300];

	var maxValue=Math.max.apply(Math,datas);

	const WIDTH=canvas.width;
	const HEIGHT=canvas.height;

	var padding={
		top:20,
		left:60,
		bottom:60,
		right:20,
	}
	
	context.beginPath();
	context.moveTo(padding.left,padding.top);
	context.lineTo(padding.left,HEIGHT-padding.bottom);
	context.lineTo(WIDTH-padding.right,HEIGHT-padding.bottom);
	context.stroke();

	context.beginPath();
	context.moveTo(padding.left-10,padding.top+10);
	context.lineTo(padding.left,padding.top);
	context.lineTo(padding.left+10,padding.top+10);
	context.stroke();

	context.beginPath();
	context.moveTo(WIDTH-padding.right-10,HEIGHT-padding.bottom-10);
	context.lineTo(WIDTH-padding.right,HEIGHT-padding.bottom);
	context.lineTo(WIDTH-padding.right-10,HEIGHT-padding.bottom+10);
	context.stroke();

	var meterWidth=(WIDTH-padding.right-padding.left)/12;

	for(var i=1;i<12;i++){
		context.beginPath();
		context.moveTo(padding.left+meterWidth*i,HEIGHT-padding.bottom);
		context.lineTo(padding.left+meterWidth*i,HEIGHT-padding.bottom+10);
		context.stroke();
	}
	for(var x=1;x<=12;x++){
		context.font="15px 微软雅黑";
		context.textAlign="center";
		context.textBaseLine="top";
		context.fillText(x+"月",padding.left+meterWidth*(x-1),HEIGHT-padding.bottom+25);
	}
	
	var yWidth=(HEIGHT-padding.bottom-padding.top)/5;

	for(var i=1;i<5;i++){
		context.beginPath();
		context.moveTo(padding.left,padding.top+yWidth*i);
		context.lineTo(padding.left-10,padding.top+yWidth*i);
		context.stroke();
	
		context.font="16px 微软雅黑";
		context.textAlign="right";
		context.textBaseLine="middle";
		context.fillText(maxValue-750*(i-1),padding.left-10,padding.top+yWidth*i+8);
	}

	var length=(HEIGHT-padding.bottom-padding.top-yWidth)/3000;
	//公式 HEIGHT-200*length-padding.bottom
	context.beginPath();
	for(var i=0;i<datas.length;i++){
		if(i==0){
			context.moveTo(padding.left,HEIGHT-datas[i]*length-padding.bottom);
		}else{
			context.lineTo(padding.left+meterWidth*i,HEIGHT-datas[i]*length-padding.bottom);
		}
	}
	context.stroke();

	context.beginPath();
	context.fillStyle="#000";
	for(var i=0;i<datas.length;i++){
			context.arc(padding.left+meterWidth*i,HEIGHT-datas[i]*length-padding.bottom,4,0,Math.PI*2);
			context.closePath();

			context.font="14px 微软雅黑";
			context.textBaseLine="top";
		if(i==0){
			context.textAlign="left";
			context.fillText(datas[i],padding.left+meterWidth*i+6,HEIGHT-datas[i]*length-padding.bottom+4);
		}else{
			context.textAlign="center";
			context.fillText(datas[i],padding.left+meterWidth*i,HEIGHT-datas[i]*length-padding.bottom-8);
		}
	}
	context.fill();
			
});