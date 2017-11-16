require(['config'],function(){
    require(['jquery'],function($){
        jQuery(function(){
            $('#pageheader').load('../html/header.html');
            $('#pagefooter').load('../html/footer.html');
        })
    })
})