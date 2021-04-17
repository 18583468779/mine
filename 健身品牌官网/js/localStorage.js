$(function () {
    //***********************************判断购物车是否有缓存firstMoney*************
    function firstMoney(){
        var storage = window.localStorage;
        if (storage.getItem('firstMoney')){
            $('.join').css('display','block');
        } else{
            $('.join').css('display','none');
        }
    }
    firstMoney();

});