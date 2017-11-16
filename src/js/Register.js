require(['config'],function(){
    require(['jquery'],function($){
        jQuery(function($){
                $('#pagefooter').load('footer.html');
                /*------------注册页判断--------*/
                $(document).on('click','input',function(e){
                        var target = e.target;
                        target.classList.add('active');
                        //高亮
                        target.parentNode.children[2].style.display = 'inline-block';
                })
                $(document).on('blur','input',function(e){
                    var target = e.target;

                    //邮箱
                    if(target.id==='emali'){
                        var res = target.value;
                        
                        if(!/^[a-z\d]{2,}@[a-z0-9]+\.[a-z]{2,}$/.test(res)){
                            target.parentNode.children[2].innerHTML='<i><img src="../images/zcselect.jpg" alt="" /></i>用户名只能用邮箱注册';
                            target.parentNode.children[2].className='error';
                        }else{
                            target.parentNode.children[2].innerHTML='<i><img src="../images/zhuce_1_03.jpg" alt="" /></i>用户名可用';
                            target.parentNode.children[2].classList.add('ture');
                        }
                        
                    }
                    //密码判断
                    if(target.id==='password'){
                        var res_ps = target.value;

                        if(!/^[\w]{6,20}$/.test(res_ps)){
                            target.parentNode.children[2].innerHTML='<i><img src="../images/zcselect.jpg" alt="" /></i>密码格式不正确';
                            target.parentNode.children[2].className='error';
                        }else{
                             target.parentNode.children[2].innerHTML='<i><img src="../images/zhuce_1_03.jpg" alt="" /></i>密码格式正确';
                            target.parentNode.children[2].classList.add('ture');
                        }
                    }
                    //二次密码
                    if(target.id==='password_t'){
                        var res_pst = target.value;
                        var res_ps = document.querySelector('#password').value;
                        if(res_pst!=res_ps){
                            target.parentNode.children[2].innerHTML='<i><img src="../images/zcselect.jpg" alt="" /></i>两次密码不一致';
                            target.parentNode.children[2].className='error';
                            console.log(res_pst);
                            console.log(res_ps);
                        }else{
                            target.parentNode.children[2].innerHTML='<i><img src="../images/zhuce_1_03.jpg" alt="" /></i>两次密码一致';
                            target.parentNode.children[2].classList.add('ture');
                        }
                    }
                    //姓名
                    if(target.id === 'name'){
                        var res = target.value;
                        if(!/^[\u4e00-\u9fa5A-Za-z]{2,20}$/.test(res) ){
                            target.parentNode.children[2].innerHTML='<i><img src="../images/zcselect.jpg" alt="" /></i>请输入正确的姓名';
                            target.parentNode.children[2].className='error';
                        }else{
                            target.parentNode.children[2].innerHTML='<i><img src="../images/zhuce_1_03.jpg" alt="" /></i>真实姓名';
                            target.parentNode.children[2].classList.add('ture');
                        }
                    }
                })
                $(document).on('blur','input',function(e){

                        var target = e.target;
                        target.classList.remove('active');
                        //移除高亮
                })
                //提交注册事件
            //     $('#submit').on('click',function(){

            // })
        })
    })
})

