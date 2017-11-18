require(['config'],function(){
    require(['jquery'],function($){
        jQuery(function(){
            /*------------连接首尾--------*/
            $('#pageheader').load('../html/header.html');
            $('#pagefooter').load('../html/footer.html');
            /*---------location---------*/
            var zf = location.search;
            zf = zf.slice(1);
            var arr = zf.split('=');
            var cary = arr[1]
            //请求ajax
            var xhr = new XMLHttpRequest();
            var qty = 12;
            xhr.onload = function(){
                var res  = JSON.parse(xhr.responseText);
                var total = res.total;
                var html = res.data.map(function(item,idx){
                    return`<ul><li id=${item.id}>
                                <img src="../images/${item.imgurl}.jpg" height="220" width="220" alt="" />
                                <p><a href="#">${item.details}</a></p>
                                <div><span class='price'>${item.price}</span><span class='oldprice'>${item.oldprice}</span>
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

                console.log(page_html);

                $('#cont_list').html(html);
                $('#pageNo').html(page_html);
                $('#pageNo').on('click','li',function(){
                    
                })

            }
            xhr.open('get','http://localhost:39/src/api/list.php?category='+cary,true);
            xhr.send();
        })
    })
})