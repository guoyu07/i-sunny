jQuery(function(){

    $('#pagefooter').load('footer.html');
    /*------------注册页判断--------*/
    $(document).on('keydown','input',function(e){
            var target = e.target;
            //console.log(target);
            //邮箱判断
            if(target.id==='emali'){
                var res = target.value;
                target.classList.add('active');
                
                if(!/^[a-z\d]{2,}@[a-z0-9]+\.[a-z]{2,}$/.test(res)){
                    target.parentNode.children[2].style.display = 'block';

                } 
                if(/^$/.test(res)){
                    target.parentNode.children[2].style.display = 'none';
                    console.log(999);
                }
                
                console.log(888);
                
            }
            //密码判断
            if(target.id==='password'){
                var res_ps = target.value;

                $(target).on('blur',function(){

                    if(/\s/.test(res_ps)){
                        target.parentNode.children[2].style.display = 'block';
                    }else{
                        target.parentNode.children[2].style.display = 'none';
                    }

                })
                
            }
    })
})