function  userlogin(){
    var storage = window.localStorage;
    var meres = storage.getItem('phoneNum');
    // console.log( storage.getItem('phoneNum') )
//�ж�������������Ƿ���е�¼�û��������û���Ϣһչʾ��û����ȡ��
    if (storage.getItem('phoneNum')){
        // $('#userlogin').css('display','block');
        /*�ж�����û�û�н��е�¼,����ʾ�û�����*/
            $('#userlogin').attr('class','user-show');
            //���û��������û���Ϣ
            $('#receive').html(meres);
            //���绰���봫���Ա����
            $('#d-back').html(meres);

    }else {
        // $('#userlogin').css('display','none');
        $('#userlogin').removeAttr('class');
    }
    //*****************����˳�********************
    // ��ջ���
    $('#quit').click(function () {
        var storage = window.localStorage;
        storage.removeItem('phoneNum');
        storage.removeItem('pwdNum');
        $('#userlogin').css('display','none');
    });
    //*********************�������������ת����Ա���Ľ���************************
    $('.membership').click(function () {
        var aTop =$(document).scrollTop() ;
        $('.home-box').css({'display':'block','top':aTop});
        unScroll();
    });
}
userlogin();
//*******************��ֹ����������********************
function unScroll() {
    var top = $(document).scrollTop();
    $(document).on('scroll.unable',function () {
        $(document).scrollTop(top);
    })
}
//*******************�������������********************
function removeUnScroll() {
    $(document).unbind("scroll.unable");
}






