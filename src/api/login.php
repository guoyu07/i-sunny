<?php
	include 'connect.php';
	
	$email = isset($_GET['email']) ? $_GET['email'] : '';
	$password = isset($_GET['password']) ? $_GET['password'] : '';

	// 密码md5加密
	$password = md5($password);

	$sql = "select * from reg where email='$email' and password='$password'";

	//echo $password;

	// 获取查询结果
	$result = $conn->query($sql);

	$row = $result->fetch_row();

	//print_r($row);

	if($row[0]){
		echo 'ok';
	}else{
		echo 'fail';
	}
	

	//释放查询内存(销毁)
	//$result->free();

	//关闭连接
	$conn->close();
?>