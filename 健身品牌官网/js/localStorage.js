$(function () {
    //***********************************�жϹ��ﳵ�Ƿ��л���firstMoney*************
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