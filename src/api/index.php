<?php

 
    $f_url = './data/index.json';
    //获取JSON文件
    $myfile = fopen($f_url,'r');
    //读取
    $content = fread($myfile,filesize($f_url));
    //保存json文件的内容
    $arr = json_decode($content);
    //把json_decode转成数组
    $res = array(
        "data" => $arr,
        "total" => count($arr)
    );
    //var_dump(json_encode($res));
    //echo $res;
    echo json_encode($res,JSON_UNESCAPED_UNICODE)



?>