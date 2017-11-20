require(['config'],function(){
    require(['jquery'],function($){

        jQuery(function(){
            /*-------------连接尾页---------*/
            $('#pagefooter').load('../html/footer.html');

            $('.login').on('click','button',function(){
                
                var xhr = new XMLHttpRequest();
                var _username = $('#name')[0].value;
                var _password = $('#password')[0].value;
                //获取用户名与密码
                xhr.onload = function(){
                    var res = xhr.responseText;
                    console.log(res);

                    //处理返回数据
                    if(res==='fail'){
                        alert('密码有误');  
                    }else if(res==='ok'){
                        alert('登录成功');
                        location.href = '../index.html?email='+_username;
                    }
                }

                xhr.open('get','http://localhost:39/src/api/login.php?email='+_username+'&password='+_password,true);
                xhr.send();
            })
        })
    })
})