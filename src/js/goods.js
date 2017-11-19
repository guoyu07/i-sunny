require(['config'],function(){
    require(['jquery','common'],function($){       

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
            $('.bigimg').find('img')[0].src = '../'+res.imgurl+'.jpg';
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
        /*-------放大镜-----*/

                var move = document.querySelector(".move");
                var img = $(".bigimg")[0];
                var b_move = img.nextElementSibling;
                var bImg = b_move.children[0];
                console.log(img);
                
                //普通写法
                    
                    img.onmousemove = function(e){
                        move.style.display = "block";
                        e = e||window.event;
                        var target = e.target || e.srcElement;                      
                        
                        //e.clientX/Y >遮罩宽高一半加上遮罩offsetWidth/Top
                        
                        var m_left = e.clientX - move.offsetWidth/2;
                        var m_top = e.clientY - move.offsetHeight/2;
                        move.style.left = m_left+"px";
                        move.style.top = m_top+"px";

                        if(e.clientX > img.offsetWidth - move.offsetWidth/2){
                            move.style.left = img.offsetWidth - move.offsetWidth+"px";

                        }
                        if(e.clientY > img.offsetHeight - move.offsetHeight/2){
                            move.style.top = img.offsetHeight - move.offsetHeight +"px";
                        }
                        
                        if(m_left <0){
                            move.style.left = 0;
                        }
                        
                        if(m_top<0){
                            move.style.top = 0;
                        }

                        var percent = 1024/400;
                        b_move.style.display = "block";
                        bImg.style.display = "block";
                        
                        // b_move.style.width = move.offsetWidth*percent+"px";
                        // b_move.style.height = move.offsetHeight*percent+"px";
                        
                        var bImgLeft = move.offsetLeft*percent;
                        var bImgTop = move.offsetTop*percent;
                        
                        bImg.style.left = -bImgLeft+"px";
                        bImg.style.top = -bImgTop+"px";
                    }
                
                img.onmouseleave = function(){
                    move.style.display = "none";
                    b_move.style.display = "none";
                }
    })
})