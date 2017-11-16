<?php
//定义母婴专区
$arr_muyi = array(

            array('name'=>'尿裤湿巾',"imgurl"=>"images/goodlist_nk_",'detalist'=>'维E系列 拉拉裤 学步裤训练裤 女 XL38片(12-20kg) 包邮包税',"category" => array('NB','S','M','L','XL ','XXL','拉拉裤','婴儿湿巾')),
            array('name'=>'婴幼用品 ',"imgurl"=>"images/goodlist_yy_",'detalist'=>'德国贝娜婷Penaten 面部与身体二合一霜 抗过敏100ml',"category" => array('宝宝小药','洗漱护肤 ','喂养工具 ','宝宝出行 ','清洁消毒  ','益智玩具')),
            array('name'=>'品牌奶粉',"imgurl"=>"images/goodlist_pb_",'detalist'=>'德国 爱他美 Aptamil 1段 奶粉 800g',"category" => array('特福芬 ','喜宝 ','爱他美')),
            array('name'=>'营养辅食 ',"imgurl"=>"images/goodlist_fs_",'detalist'=>'德国 喜宝婴幼儿玉米圈米饼 12个月后 30g 14袋装',"category" => array('米粉/米糊 ','辅食泥 ','婴儿营养品 ','其他零食 ','调味品  ','饼干 ','肉松 ')),
            array('name'=>'阶段奶粉 ',"imgurl"=>"images/goodlist_nf_",'detalist'=>'德国米路米Milumil pre婴儿奶粉 800g',"category" => array('pre段 ','1段 ','2段 ','3段 ','4段  ','1+段 ','2+段 ','特殊配方 ')),
            
    );
//定义空数组
$arr= array();
//循环初始化条件

//根据判断进行while循环
$arrlen = count($arr_muyi);
for($x=0;$x<$arrlen;$x++){
    $i=0;
    while($i<=10){
        //递增
        $i++;
        //创建对象
        $arr[]= array(
             "id "=> $i,
             "name" =>$arr_muyi[$x]['name'],
             "category" =>'母婴专区',
             "detalist" => $arr_muyi[$x]['detalist'],
             "imgurl" =>$arr_muyi[$x]['imgurl'].$i,
             "brand" =>'日本大王(GOO.N) ',
             "price" => '99.00',
            );
           
        //写入数组
    };
};
var_dump($arr);
$data = $arr;
$json_string = json_encode($data,JSON_UNESCAPED_UNICODE);
//转成json
file_put_contents('data/goodslist_my.json',$json_string)
//写入文件
?>