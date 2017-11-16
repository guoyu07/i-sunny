<?php
//定义母婴专区
$arr_muyi = array(

            array('name'=>'限时抢购',"imgurl"=>"images/index_xs_",'detalist'=>'日本花王(Merries)妙而舒纸尿裤 中号M64片(6-11kg) 包邮包税原装进口'),
            array('name'=>'每日上新 ',"imgurl"=>"images/index_sx_",'detalist'=>'日本大王(GOO.N) 维E系列 拉拉裤 学步裤训练裤 女 XL38片(12-20kg) 包邮包税'),
            array('name'=>'精挑细选',"imgurl"=>"images/index_pb_",'detalist'=>'日本大王(GOO.N) 维E系列 拉拉裤 学步裤训练裤 女 XL38片(12-20kg) 包邮包税',"category" => array('特福芬 ','喜宝 ','爱他美')),
            array('name'=>'美容护肤 ',"imgurl"=>"images/index_fs_",'detalist'=>'德国彩妆 essence 三色修容腮红 粉质细腻 14g',),
            array('name'=>'智能数码 ',"imgurl"=>"images/index_nf_",'detalist'=>'德国Braun博朗 HD 785负离子大功率吹风机',),
            
    );
//定义空数组

$arr_all = array();

//循环初始化条件

//根据判断进行while循环
$arrlen = count($arr_muyi);
for($x=0;$x<$arrlen;$x++){
    $i=0;
    $arr= array();
    while($i<=10){
        //递增
        $i++;
        //创建对象
        $arr[]= array(
             "id "=> $i,
             "name" =>$arr_muyi[$x]['name'],
             "detalist" => $arr_muyi[$x]['detalist'],
             "imgurl" =>$arr_muyi[$x]['imgurl'].$i,
             "price" => '99.00',
            );
           
        //写入数组
    };
    array_push($arr_all,$arr);

};
var_dump($arr_all);
$data = $arr_all;
$json_string = json_encode($data,JSON_UNESCAPED_UNICODE);
//转成json
file_put_contents('data/index.json',$json_string)
//写入文件
?>