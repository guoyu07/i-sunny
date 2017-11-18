require(['config'],function(){
    require(['jquery','common'],function($){  

        $('#pageheader').load('../html/header.html');
        $('#pagefooter').load('../html/footer.html');
        /*----------获取Cookie里面的数据----------*/
        var car_cookie = Cookie.get('car');
        //生成页面
        var res = JSON.parse(car_cookie);
        console.log(res);
        var total = 0; 
        var html = res.map(function(item,idx){
            //console.log(idx*item.qty);
            total += item.price * item.qty;
            return `<ul class='clearfix' id='$(res.id)'>
                            <li class='clearfix'>
                                <input type="checkbox" class='fl'/>
                                <img src="../${item.imgurl}.jpg" alt="" class='fl'/>
                                
                            </li>
                            <li>
                                    <a href="#">${item.detalist}</a>
                                    <div id='zt'>
                                        <span>支持自提</span>
                                    </div>
                            </li>
                            <li>
                                 <span>${item.price}</span>
                            </li>
                            <li class='length'>
                         
                                <span>-</span>
                                <input type="text"  value = ${item.qty}>
                                <span>+</span>
                              
                            </li>
                            <li>
                                <a href="#">删除</a>
                            </li>
                    </ul>`
        }).join("");

        $(html).appendTo($('#carlist'));
        console.log(total);
        $('#total').html(total);
        /*---- 委托点击事件-----*/
        $('#carlist').on('click','span',function(e){
            var currentUL = e.target.parentNode.parentNode;
            var curindex = $(currentUL).index();
            if($(this).html()==='-'){

            //减的时候
                $(this).siblings('input')[0].value--;
                res[curindex].qty--;
                if($(this).siblings('input')[0].value<=0){
                        $(this).siblings('input')[0].value=0;
                        res[curindex].qty=0;
                }

                var move = JSON.stringify(res);
                Cookie.set('car',move);
            }
            //增加的时候
            if($(this).html()==='+'){
                $(this).siblings('input')[0].value++;
                res[curindex].qty++;
                var add = JSON.stringify(res);
                Cookie.set('car',add);
            }
            
        });
        $('#carlist').on('click','a',function(e){
            var target = e.target;
            var current = e.target.parentNode;
            var curindex = $(current.parentNode).index();
            //寻找子父集的关系
            console.log(curindex);
            if(target.tagName.toLowerCase()==='a'&&target.innerText==='删除'){

                current.parentNode.remove(current);
                res.splice(curindex,1);
                var remove = JSON.stringify(res);
                Cookie.set('car',remove);
            }
        })
    })
})