$(function () {
    //***********************************�жϹ��ﳵ�Ƿ��л���firstMoney****
    function firstMoney(){
        var storage = window.localStorage;
        if (storage.getItem('firstMoney')){
            $('.huancun').css('display','block');
        } else{
            $('.huancun').css('display','none');
        }
    }
    firstMoney();

    //***********************************�жϹ��ﳵ�Ƿ��л���money*********
    function barMoney(){
        var storage = window.localStorage;
        if (storage.getItem('money')){
            $('.join').css('display','block');
        } else{
            $('.join').css('display','none');
        }
    }
    barMoney();

    //******************************����Ƴ���Ʒ�������****************************************/
    $('.wp-romove').click(function () {
        var storage = window.localStorage;
        storage.removeItem('money');
    })
});