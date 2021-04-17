function  userlogin(){
    var storage = window.localStorage;
    var meres = storage.getItem('phoneNum');
    // console.log( storage.getItem('phoneNum') )
//判断浏览器缓存中是否具有登录用户名，让用户信息一展示，没有则取消
    if (storage.getItem('phoneNum')){
        // $('#userlogin').css('display','block');
        /*判断如果用户没有进行登录,则不显示用户界面*/
            $('#userlogin').attr('class','user-show');
            //将用户名传给用户信息
            $('#receive').html(meres);
            //将电话号码传入会员中心
            $('#d-back').html(meres);

    }else {
        // $('#userlogin').css('display','none');
        $('#userlogin').removeAttr('class');
    }
    //*****************点击退出********************
    // 清空缓存
    $('#quit').click(function () {
        var storage = window.localStorage;
        storage.removeItem('phoneNum');
        storage.removeItem('pwdNum');
        $('#userlogin').css('display','none');
    });
    //*********************点击个人中心跳转到会员中心界面************************
    $('.membership').click(function () {
        var aTop =$(document).scrollTop() ;
        $('.home-box').css({'display':'block','top':aTop});
        unScroll();
    });
}
userlogin();
//*******************禁止滚动条滚动********************
function unScroll() {
    var top = $(document).scrollTop();
    $(document).on('scroll.unable',function () {
        $(document).scrollTop(top);
    })
}
//*******************允许滚动条滚动********************
function removeUnScroll() {
    $(document).unbind("scroll.unable");
}






