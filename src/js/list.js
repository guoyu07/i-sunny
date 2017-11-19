require(['config'],function(){
    require(['jquery'],function($){
        jQuery(function(){
            /*------------连接首尾--------*/
            $('#pageheader').load('../html/header.html',function(){
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
            $('#pagefooter').load('../html/footer.html');
            /*---------location---------*/
            var zf = location.search;
            zf = zf.slice(1);
            var arr = zf.split('=');
            var cary = arr[1]
            //请求ajax
            var xhr = new XMLHttpRequest();
            var qty = 12;
            //最后执行
            xhr.onload = function(){
                        var res  = JSON.parse(xhr.responseText);
                        var total = res.total;
                        var html = res.data.map(function(item,idx){
                            return`<ul><li id=${item.id}>
                                        <img src="../images/${item.imgurl}.jpg" height="220" width="220" alt="" /> 
                                        <p><a href="#">¥${item.details}</a></p>
                                        <div><span class='price'>${item.price}</span><span class='oldprice'>¥${item.oldprice}</span>
                                        </div>
                                    </li></ul>`

                        }).join('');
                        //生成页面
                        var page = Math.ceil(total/qty);
                        var page_html = '';
                        for(var i=0;i<page;i++){
                            page_html+=`<li>${i+1}</li>`;
                        }
                        page_html+=`<li id='next'>下一页</li>`
                $('#cont_list').html(html);
                $('#pageNo').html(page_html);
                $('#pageNo').on('click','li',function(){
                    var pageNo = $(this)[0].innerText
                    xhr.open('get','http://localhost:39/src/api/list.php?category='+cary+'&pageNo='+pageNo+'&qty='+qty,true);
                    xhr.send();
                })

            }
            xhr.open('get','http://localhost:39/src/api/list.php?category='+cary,true);
            xhr.send();
        })
    })
})