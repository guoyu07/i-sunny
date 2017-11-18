<?php
    
    // $pageNo = $_GET['pageNo'];
    // $qty = $_GET['qty'];
    //获取页面传参过来的变量
    

    $pageNo = isset($_GET['pageNo'])? $_GET['pageNo'] : 1;
    $qty = isset($_GET['qty'])? $_GET['qty'] : 12;
    //判断是否传参
    /*
        接口：获取列表数据
     */
    
    $cate = isset($_GET['category']) ? $_GET['category'] : null;
    
    // 连接数据库
    $conn = new mysqli('localhost','root','','sunny');//得到实例对象

    // 检测连接
    if($conn->connect_errno){
        die('连接失败'.$conn->connect_error);
    }

    // 设置编码
    $conn->set_charset('utf8');

    // 编写sql语句
    $sql = "select * from sunny";

    //如果参数有值
    if($cate){
        $sql .= " where category='$cate'";
    }
    // 执行sql语句
    // query()
    // 得到一个：查询结果集
    $result = $conn->query($sql);



    // 使用查询结果集
    // 返回数组
    $row = $result->fetch_all(MYSQLI_ASSOC);
    $val = array(
        "data" => array_slice($row,($pageNo-1)*$qty,$qty),
        "total" => count($row)
    );
    // 把数组转换成json字符串
    $res = json_encode($val,JSON_UNESCAPED_UNICODE);

    echo "$res";
?>