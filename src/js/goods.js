require(['config'],function(){
    require(['jq','common'],function(){   
        /*-----加载放大镜插件  注意jq版本不同------*/    
        require(['xzoom.min'],function(){
                    $('#pageheader').load("./header.html",function(){
                         $('.header_b').on('mouseenter','dd',function(e){
                                    $(this).find('.shopcont').css({'display':'block'})
                                //console.log($(this).find('.shopcont'));
                                });
                                $('.header_b').on('mouseleave','dd',function(e){
                                    $(this).find('.shopcont').css({'display':'none'})
                                })
                                $('#nav').on('click','a',function(e){
                                //console.log(666)
                                /*-----点击跳转页面#list---*/
                                    console.log($(this)[0]);
                                    if($(this)[0].innerText ==='首页'){
                                        $(this)[0].href= '../index.html';
                                    }else{
                                        //除首页外跳转list.html
                                        var cary = $(this)[0].innerText;
                                        location.href= './list.html?category='+cary;

                                    }
                                })
                    });
                    $('#pagefooter').load("./footer.html");
                    console.log($(".xzoom")[0]);
                    console.log($('.xzoom-thumbs').find('img'));
                    /*-----连接首尾-----*/
                    var zf  = location.search;
                    zf=zf.slice(1);
                    var arr = zf.split('=');
                    var id = arr[1]
                    //ajax
                    var  xhr = new XMLHttpRequest();
                    var res

                    xhr.onload = function(){
                        res = JSON.parse(xhr.responseText);
                        //console.log(res);
                        //得到数据生成页面
                        $('#cont').find('h3')[0].innerText = res.detalist;
                        $('.xzoom')[0].src = '../'+res.imgurl+'.jpg';
                        for(var i=0;i<4;i++){
                            $('.xzoom-thumbs').find('img')[i].src = '../'+res.imgurl+'.jpg';
                            $('.xzoom-thumbs').find('a')[i].href = '../'+res.imgurl+'.jpg';
                        }

                        $('.cont_m').find("h3")[0].innerText = res.detalist;
                        //console.log($('.bigimg')[0])

                    }

                    xhr.open('get','http://localhost:39/src/api/goods.php?id='+id,true);
                    xhr.send();
                    /*----添加 购物车-----*/
                    $('#cont').on('click','button',function(){

                        var cookie_d = Cookie.get('car');
                        
                        var car;

                        if(!cookie_d){

                             car = [];

                        }else {
                             car = JSON.parse(cookie_d);
                        }
                        console.log(car,res);

                        var curindex;
                        
                        //关键点 some
                        var res_car = car.some(function(item,idx){

                                  curindex = idx;
                           return item.id == res.id
                                   
                        })
                        //如果
                        if(res_car){
                            car[curindex].qty++
                        }else{

                           var good = {
                                id:res.id,
                                qty:1,
                                imgurl:res.imgurl,
                                detalist:res.detalist,
                                price:res.price,
                            }

                            car.push(good); 
                        }
                        // 用对象保存点击的cookies
                        
                        //点一次 car加入一次good对象把商品写入cookie
                        Cookie.set('car',JSON.stringify(car));
                        //设置cookies

                        //location连接shopping_car.html
                        location.href = '../html/car.html?id='+id;
                                
                       
                    })
                /*-----放大镜插件调用------*/
                    $('.xzoom').xzoom();
            
        })
    })
})