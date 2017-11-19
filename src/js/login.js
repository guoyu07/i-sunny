require(['config'],function(){
    require(['jquery'],function($){

        jQuery(function(){
            /*-------------连接尾页---------*/
            $('#pagefooter').load('../html/footer.html');

            $('.login').on('click','button',function(){
                
                var xhr = new XMLHttpRequest();
                var _username = $('#name')[0].value;
                var _password = $('#password')[0].value;
                xhr.onload = function(){
                    var res = xhr.responseText;
                    
                    if(res==='fail'){
                        alert('密码有误');
                    }else{
                        alert('登录成功');
                        location.href = '../index.html?username='+_username;
                    }
                }

                xhr.open('get','http://localhost:39/src/api/login.php?username='+_username+'password='+_password,true);
                xhr.send();
            })
        })
    })
})