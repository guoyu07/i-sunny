 require(['config'],function(){
    require(['jquery'],function($){               

    jQuery(function($){
        /*----连接footer和header-----*/
        $('#pageheader').load('html/header.html',function(){

            $('.header_b').on('mouseenter','dd',function(e){
                $(this).find('.shopcont').css({'display':'block'})
                console.log($(this).find('.shopcont'));
            });
            $('.header_b').on('mouseleave','dd',function(e){
                $(this).find('.shopcont').css({'display':'none'})
            })
        });

        $('#pagefooter').load('html/footer.html');
        /*------轮播------*/
        clearInterval(timer);
        //清除定时器的影响
        $ul = $('.banner_content').find('ul');
        //找到ul
        var index = 0;
        //设置默认值
        
        //无缝滚动障眼法
        var img = document.createElement('img');
        img.src='images/banner1.png';
        var li = document.createElement('li');
        li.appendChild(img);
        $ul[0].appendChild(li);
        //创建第一张图片在最后面
        var len = $('.banner_content').find('li').length;
        var imgWidth = $('.banner_content').find('img').width();
        //获取长度及高度
        
        var $dot = $('.dot')
        for(var i=0 ;i<len-1;i++){
            $("<span>").appendTo($dot);
        }
        var spanwidth = $dot.find('span').width();
        var spanlen = $dot.find('span').length;
        var total = (spanwidth+10)*spanlen;
        $dot.width(total);
        //添加滚动圆点
        
        var $span =$dot.find('span')
        //获取span的index值
        $span[index].classList.add('active')
        //默认高亮
        $ul.width(imgWidth*len);
        //设置ul宽度
        var timer = setInterval(function($){
            index++;
            
            if(index>=len){
                $ul[0].style.left = 0;
                console.log($span[0]);
                index=1;
            }else if(index<0){
                index=len;
            }
            //判断index值
            
            for(var i=0;i<spanlen;i++){
                $span[i].classList.remove('active');
                if(i==index){
                    $span[index].classList.add('active')
                    console.log($span[index],$span)
                }
                
            };
            //高亮
            
            if(index>=spanlen){
                $span[0].classList.add('active')
            };      
            //关键点 当index大于span的长度
            $ul.animate({left:-imgWidth*index},2000)
            //执行动画
        },4000)
        /*------轮播------*/
        /*------传参------*/
        var xhr = new XMLHttpRequest();
        var $cont = $("#container")
        xhr.onload =function(){
            //获取后台数据
            var res = JSON.parse(xhr.responseText)
            console.log(res);
            //生成页面
            
            html = res.data.map(function(item,idx){
                var li = item.map(function(val,idx){

                    return`<li>
                            <a href="#"><img src="${val.imgurl}.jpg" height="180" width="180" alt="" /></a>
                            <p><a href="#">${val.detalist}</a></p>
                            <div><span class='price'>¥${val.price}</span><span class='oldprice'>¥${val.price-30}</span></div>
                            </li>`

                }).slice(0,6).join("");
                return `<div class="datalist clearfix">
                        <h3>
                        <i><img src="images/floor-T.jpg" alt="" /></i>
                        <span>${item[0].name}</span></h3>
                        <div class="datalist_l fl">
                        <img src="images/bigimgs${idx-1}.png" height="600" width="220" alt="" />
                        </div>
                        <ul class='fl clearfix'>
                            ${li}
                        </ul>
                        <div class="datalist_r fr">
                                <h4>销量排行榜</h4>
                                <ul>
                                    <li>
                                        <em>1</em>
                                        <img src="images/60_201706061342371184160.png" alt="" />
                                        <div class='data_p'>
                                            <p>德国奶粉 喜宝 Hipp 有机Pre段 600g</p>
                                            <span>已售<span></span>件</span>
                                        </div>
                                    </li>
                                    <li>
                                         <em>2</em>
                                        <img src="images/60_201706061342371184160.png" alt="" />
                                        <div class='data_p'>
                                            <p>德国奶粉 喜宝 Hipp 有机Pre段 600g</p>
                                            <span>已售<span></span>件</span>
                                        </div>
                                    </li>
                                    <li>
                                         <em>3</em>
                                        <img src="images/60_201706061342371184160.png" alt="" />
                                        <div class='data_p'>
                                            <p>德国奶粉 喜宝 Hipp 有机Pre段 600g</p>
                                            <span>已售<span></span>件</span>
                                        </div>
                                    </li>
                                    <li>
                                         <em>4</em>
                                        <div class='data_p'>
                                            <p>德国奶粉 喜宝 Hipp 有机Pre段 600g</p>
                                            <span>已售<span></span>件</span>
                                        </div>
                                    </li>
                                    <li>
                                         <em>5</em>
                                        <div class='data_p'>
                                            <p>德国奶粉 喜宝 Hipp 有机Pre段 600g</p>
                                            <span>已售<span></span>件</span>
                                        </div>
                                    </li>
                                    <li>
                                         <em>6</em>
                                        <div class='data_p'>
                                            <p>德国奶粉 喜宝 Hipp 有机Pre段 600g</p>
                                            <span>已售<span></span>件</span>
                                        </div>
                                    </li>
                                </ul>
                            </div>
                            <div class="brand">
                                <img src="images/20170613105424_6564.png" alt="" />
                            </div>
                        </div>
                        </div>`
            }).slice(2,6).join("");
            //console.log(html)
            //console.log($cont)
            $(html).appendTo($cont);
        }
        xhr.open('get','http://localhost:39/src/api/index.php',true);
        xhr.send();
        
        })
     })
 })
