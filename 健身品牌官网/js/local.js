$(function () {
    //***********************************判断购物车是否有缓存firstMoney****
    function firstMoney(){
        var storage = window.localStorage;
        if (storage.getItem('firstMoney')){
            $('.huancun').css('display','block');
        } else{
            $('.huancun').css('display','none');
        }
    }
    firstMoney();

    //***********************************判断购物车是否有缓存money*********
    function barMoney(){
        var storage = window.localStorage;
        if (storage.getItem('money')){
            $('.join').css('display','block');
        } else{
            $('.join').css('display','none');
        }
    }
    barMoney();

    //******************************点击移除商品清除缓存****************************************/
    $('.wp-romove').click(function () {
        var storage = window.localStorage;
        storage.removeItem('money');
    })
});