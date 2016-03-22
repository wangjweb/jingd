<?php
	//1.建立链接
	$conn=mysqli_connect('127.0.0.1','root','','jd','3306');
	//2.定义SQL
	$sql='SELECT*FROM jd_order';
	//3.发送SQL
	mysqli_query($conn,"SET NAMES utf8");
	$result=mysqli_query($conn,$sql);
	//4.解析结果集
	$jsonArr=array();
	while($arr=mysqli_fetch_array($result,MYSQLI_ASSOC)){
		array_push($jsonArr,$arr);
	}
	$json=json_encode($jsonArr);
	//将数据进行响应
	echo $json;
	//5.关闭连接
	mysqli_close($conn);
?>