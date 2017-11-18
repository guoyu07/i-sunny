<?php
    $id = $_GET['id'];
    //获取页面传参过来的变量
    isset($id)? $_GET['id'] : 1;
    //判断是否传参
    $f_url = './data/index.json';
    //获取JSON文件
    $myfile = fopen($f_url,'r');
    //读取
    $content = fread($myfile,filesize($f_url));
    //保存json文件的内容
    $arr = json_decode($content,JSON_UNESCAPED_UNICODE);
    //把json_decode转成数组
    $res = $arr;
    $len = count($res);
    for($x=0;$x<$len;$x++){
        //echo $cars[$x] . "<br>";
        $slen = count($res[$x]);
        //循环整个json数据
        for($j=0;$j<$slen;$j++){

            if($id == $res[$x][$j]['id'] ){

                echo json_encode($res[$x][$j],JSON_UNESCAPED_UNICODE);
                 //保存成json字符串输出；
            }
        }
    }
    
    //echo $res;
    //echo json_encode($res)
   

?>