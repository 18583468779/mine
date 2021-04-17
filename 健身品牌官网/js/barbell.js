$(function () {
    //����Ч��************************************************************
    $(document).scroll(function () {
        if ($(document).scrollTop() >= $('.picture').height()){
            $('#navbar').css({'position':'fixed','top':0,'z-index':2,});
            $('.banner').css({'margin-top':100});
            $('.c-top').css({'margin-top':100});
        }else{
            $('#navbar').css({'position':'static'});
            $('.banner').css({'margin-top':0});
            $('.c-top').css({'margin-top':0});
        }
    });
    //�ֲ�ͼ************************************************************
    var num = 0;
    var timer = setInterval(run,2000);
    function run() {
        num++;
        if ( num >  $('#images li').length){
            num = 1;
        }
        //�����ʽ
        clear();
        //������ʽ
        $('#images li').eq(num -1).attr('id','run');
    }
    //�ұ߰�ť
    $('#right').click(function () {
        run();
    });
    //��߰�ť
    $('#left').click(function () {
        num --;
        if (num < 0){
            num = $('#images li').length -1;
        }
        //�����ʽ
        clear();
        //������ʽ
        $('#images li').eq(num -1).attr('id','run');
    });
    //�����ʽ
    function clear() {
        $('#images  li').eq(num -1).end().siblings().removeAttr('id');
    }
    //�������
    $('.b-content').mouseover(function () {
        clearInterval(timer)
    });
    //����Ƴ�
    $('.b-content').mouseout(function () {
        timer = setInterval(run,2000);
    });
    //------------------------����Ч��-------------------------
    $(document).scroll(function () {
        if ($(document).scrollTop() >= 800){
            $('.s-content').animate({'top':-300},1000);
            $('.s-content li').fadeIn(3500)
        }
    });
    //-----------------------------�������п�£------------------------
    $(document).scroll(function () {
        if ($(document).scrollTop() >= 950) {
            $('.w-left ').animate({'left':0},2000);
            $('.w-left video').fadeIn(3000);

            $('.w-right').animate({'right':0},2000);
            $('.w-right img').eq(0).fadeIn(3000);
        }
    });
    //----------------------------��ߵ������һ���--------------------
    $(document).scroll(function () {
        if ($(document).scrollTop() >= 1350) {
            //��������
            $('.series li').each(function (index,value) {
                $(this).animate({'left':120 * (index)},2000);
                $(this).find('img').fadeIn(3000);
            })
        }
    });
//--------------------------------------------�̶������ض���
    $(window).scroll(function() {
        if ($(this).scrollTop() >= 657) {
            $('.fixed').fadeIn();
        } else {
            $('.fixed').fadeOut();
        }
    });
    $("#fan-ding").click(function() {
        $("body,html").animate(
            {
                scrollTop: 0
            },
            800
        );
    });

//------------------------------------------������ﳵ��ť�������ﳵҳ��
//�̶������ﳵ����¼�
//���㹺�ﳵ���ֵ�λ�ã�λ����Ļ�����ģ���������
    $('#f-cart').click(function () {
        var aTop =$(document).scrollTop() ;
        $('.my-all').css({'display':'block','top':aTop});
        unScroll();
    })
//���������ﳵ����¼�
    ;$('#s-cart').click(function () {
        var aTop =$(document).scrollTop() ;
        $('.my-all').css({'display':'block','top':aTop});
        unScroll();
    });
//����������ȷ���ջ����棬���ع��ﳵ����************************
    $('#settlement').click(function () {
        //�жϹ��ﳵ���Ƿ������Ʒ
        $('.my-cart').css('display','none');
        $('.receipt').css('display','block');
    });
//���ȡ��ȷ���ջ�����
    $('.re-cancel').click(function () {
        $('.my-all').css({'display':'none'});
        removeUnScroll();
    });
//---------------------------------------------���ȡ�����ﳵ����
    $('.cancel').click(function () {
        $('.my-all').css({'display':'none'});
        removeUnScroll();
    });
    $('#back').click(function () {
        $('.my-all').css({'display':'none'});
        removeUnScroll();
    });
//----------------------------------------------�����¼������¼����
    $('#login').click(function () {
        var aTop =$(document).scrollTop() ;
        $('.signin').css({'display':'block','top':aTop});
        $('.post').css({'display':'none'});
        $('.sing-content').css({'display':'block'});
        unScroll();
    });
//----------------------------------------------�����¼����ע�����
    $('#register').click(function () {
        var aTop =$(document).scrollTop() ;
        $('.signin').css({'display':'block','top':aTop});
        $('.post').css({'display':'block'});
        $('.sing-content').css({'display':'none'});
        unScroll();
    });
//---------------------------------------------���ע�ᵯ��ע��ҳ��
    $('#sign-reg').click(function () {
        var aTop =$(document).scrollTop() ;
        $('.signin').css({'display':'block','top':aTop});
        $('.post').css({'display':'block'});
        $('.sing-content').css({'display':'none'});
        unScroll();
    });
//----------------------------------------------���ȡ��������¼����
    $('.s-cancel').click(function () {
        $('.signin').css({'display':'none'});
        removeUnScroll();
    });
//----------------------------------------------���ȡ����¼����ע�����
    $('.p-cancel').click(function () {
        var aTop =$(document).scrollTop() ;
        $('.signin').css({'display':'none'});
        $('.post').css({'display':'none'});
        $('.sing-content').css({'display':'none'});
        removeUnScroll();
    });
// //**************************��¼�������֤*******************************//
// //�������ʧȥ�����ǽ��������ж�
// // ���忪�ر���
// var flagTelephone = false;
// var flagPassword = false;
// // �ҵ����ڱ�ǩԪ��
// var $telephone = $('#phone');
// var  $password = $('#password');
// $telephone.blur(function () {
//     //��װ���������ú���
//     checkTelephone();
// });
// function checkTelephone(){
//     // ��ȡ�û����������
//     var vals = $telephone.val();
//     // console.log(vals)
//     // ����������֤�û�����������Ƿ�Ϸ�
//     var res = /^1\d{10}$/;
//     if (vals == ''){
//         $telephone.next().show().html('�ֻ����벻��Ϊ�գ�����');
//         flagTelephone = false;
//         return
//     }
//     if (res.test(vals)){
//         // �Ϸ� -- ���ر�����Ϣ
//         $telephone.next().show().html('�ֻ�������ȷ����');
//         flagTelephone = true;
//     }else{
//         //���Ϸ�
//         $phone.next().show().html('�ֻ�������ʮһλ������ɣ�');
//         flagTelephone = false;
//         return
//     }
// }
// $password.blur(function () {
//     checkPassword();
// });
// function checkPassword(){
//     //��ȡ���������������
//     var vals = $password.val();
//     // ��������ƥ����ʽ
//     var rePass = /^[\w!-@#$%^&*]{6,20}$/i;
//     // ��������Ϊ�գ�����ʾ����Ϊ�ղ�return
//     if (vals == ''){
//         $password.next().show().html('���벻��Ϊ�գ�����');
//         flagPassword=false;
//         return
//     }
//     if (rePass.test(vals)){
//         //�ɹ�
//         $password.next().show().html('�������ʹ�ã�����');
//         flagPassword=true;
//         return
//     }else{
//         $password.next().show().html('������6-20λ��ɣ���������ĸ�»��߿�ͷ������');
//         flagPassword=false;
//         return
//     }
// }
// //****************************�ж��˺������Ƿ���ȷ�ӻ�����ȡ���Ƚϣ���ȫһ�¼�Ϊ��¼�ɹ�����
//
//     var names = storage.getItem('name');
// console.log(names)
//

//**************************ע��������֤*******************************//
// ���忪�ر���
    var flagPhone=false;
    var flagPwd=false;
    var flagCpwd=false;
// var flagRadio = false;
// �ҵ����ڱ�ǩԪ��
    var $phone = $('#p-phone');
    var $pwd = $('#p-password');
    var $cpwd = $('#sure');
    var $zhuce  = $('#zhuce');
    var $submit = $('#myform');
// var $rad = $('#man');
// var $wrad = $('#woman');
// 1.���ʧȥ���㣬����м���ж��ֻ������Ƿ�Ϸ�
    $phone.blur(function () {
        //��װ���������ú���
        checkPhone();
    });
    function checkPhone() {
        // ��ȡ�û����������
        var vals = $phone.val();
        // console.log(vals)
        // ����������֤�û�����������Ƿ�Ϸ�
        var res = /^1\d{10}$/;
        if (vals == ''){
            $phone.next().show().html('�ֻ����벻��Ϊ�գ�����');
            flagPhone = false;
            return
        }
        if (res.test(vals)){
            // �Ϸ� -- ���ر�����Ϣ
            $phone.next().show().html('�ֻ�������ȷ����');
            flagPhone=true;
        }else{
            //���Ϸ�
            $phone.next().show().html('�ֻ�������ʮһλ������ɣ�');
            flagPhone = false;
            return
        }
    }
//  2.��������ʧȥ���㣬����м���ж������Ƿ�Ϸ�
    $pwd.blur(function () {
        //��װ���������ú���
        checkPwd();
    });
    function checkPwd() {
        //��ȡ���������������
        var vals = $pwd.val();
        // ��������ƥ����ʽ
        var rePass = /^[\w!-@#$%^&*]{6,20}$/i;
        // ��������Ϊ�գ�����ʾ����Ϊ�ղ�return
        if (vals == ''){
            $pwd.next().show().html('���벻��Ϊ�գ�����');
            flagPwd=false;
            return
        }
        if (rePass.test(vals)){
            //�ɹ�
            $pwd.next().show().html('�������ʹ�ã�����');
            flagPwd=true;
            return
        }else{
            $pwd.next().show().html('������6-20λ��ɣ���������ĸ�»��߿�ͷ������');
            flagPwd=false;
            return
        }
    }
// 3.�ж���������������Ƿ�һ��
    $cpwd.blur(function () {
        checkCpwd();
    });
    function checkCpwd() {
        // ��ȡ�ظ���������������
        var val =$pwd.val();
        var vals =$cpwd.val();
        if(vals==''){
            $cpwd.next().show().html('�ظ��������Ϊ��!!');
            flagCpwd=false;
            return
        }
        if (val==vals){
            $cpwd.next().show().html('�ظ�������ȷ!!');
            flagCpwd=true;
        }
        else{
            $cpwd.next().show().html('�����������벻һ�£�����������');
            flagCpwd=false;
            return
        }
    }
// 4.�����������֤ͨ�����ύע��
    $submit.submit(function(){
        if(flagPhone && flagPwd && flagCpwd){
            alert('��ϲ�㣡ע��ɹ�!');
            $('.post').css({'display':'none'});
            $('.sing-content').css({'display':'block'});
            return false
        }
        else{
            alert("��Ǹ��ע��ʧ�ܣ�");
            return false
        }
    });
//5.���ע�ᰴť���������
// 6.���û���
    var storage = window.localStorage;
    $zhuce.click(function () {
        var phoneVal =$phone.val();
        var pwdVal =$pwd.val();
        var cpwdVal =$cpwd.val();
//1����localStorage����ֵ�����޸ģ�key-value��ʽ��
        storage.setItem('phoneNum',phoneVal);
        storage.setItem('pwdNum',pwdVal);
        $pwd.val('');
        $pwd.next().show().html('');
        $cpwd.val('');
        $cpwd.next().show().html('');
        $phone.val('');
        $phone.next().show().html('');
        //***************���¼���ҳ��*****************
        location.reload();
    });
//**************************��¼�������֤*******************************//
//�������ʧȥ�����ǽ��������ж�
// ���忪�ر���
    var flagTelephone = false;
    var flagPassword = false;
// �ҵ����ڱ�ǩԪ��
    var $telephone = $('#phone');
    var  $password = $('#password');
    $telephone.blur(function () {
        //��װ���������ú���
        checkTelephone();
    });
    function checkTelephone(){
        // ��ȡ�û����������
        var vals = $telephone.val();
        // console.log(vals)
        // ����������֤�û�����������Ƿ�Ϸ�
        var res = /^1\d{10}$/;
        if (vals == ''){
            $telephone.next().show().html('�ֻ����벻��Ϊ�գ�����');
            flagTelephone = false;
            return
        }
        if (res.test(vals)){
            // �Ϸ� -- ���ر�����Ϣ
            $telephone.next().show().html('�ֻ�������ȷ����');
            flagTelephone = true;
        }else{
            //���Ϸ�
            $phone.next().show().html('�ֻ�������ʮһλ������ɣ�');
            flagTelephone = false;
            return
        }
    }
    $password.blur(function () {
        checkPassword();
    });
    function checkPassword(){
        //��ȡ���������������
        var vals = $password.val();
        // ��������ƥ����ʽ
        var rePass = /^[\w!-@#$%^&*]{6,20}$/i;
        // ��������Ϊ�գ�����ʾ����Ϊ�ղ�return
        if (vals == ''){
            $password.next().show().html('���벻��Ϊ�գ�����');
            flagPassword=false;
            return
        }
        if (rePass.test(vals)){
            //�ɹ�
            $password.next().show().html('�������ʹ�ã�����');
            flagPassword=true;
            return
        }else{
            $password.next().show().html('������6-20λ��ɣ���������ĸ�»��߿�ͷ������');
            flagPassword=false;
            return
        }
    }
//****************************�ж��˺������Ƿ���ȷ�ӻ�����ȡ���Ƚϣ���ȫһ�¼�Ϊ��¼�ɹ�����
    //�õ�����ĵ绰������
    var phoneNum = storage.getItem('phoneNum');
    var passwordNum = storage.getItem('pwdNum');
    // console.log(phoneNum);
    // console.log(passwordNum);
//�жϵ�¼���˺ź������Ƿ���ע����˺��������
    //������¼����¼�
    $('#sign-lo').click(function () {
        if ($telephone.val() == phoneNum && $password.val() == passwordNum && flagTelephone &&flagPassword){
            alert('��ϲ�㣡��¼�ɹ�');
            //�����¼����
            $('.signin').css({'display':'none'});
            removeUnScroll();
            //չʾ�û���¼�ĸ�����Ϣ
            $('#userlogin').attr('class','user-show');
            //���绰���봫�����Ͻ��û���Ϣ
            console.log($telephone.val());
            $('#receive').html($telephone.val());
            //���绰���봫���Ա����
            $('#d-back').html($telephone.val());
            //�����������
            $telephone.val('');
            $telephone.next().show().html('');
            $password.val('');
            $password.next().show().html('');
            return false;
        }else{
            alert('��¼ʧ�ܣ�����');
            return false
        }
    });
    //*********************�������������ת����Ա���Ľ���************************
    $('.membership').click(function () {
        var aTop =$(document).scrollTop() ;
        $('.home-box').css({'display':'block','top':aTop});
        unScroll();
    });
    //***********����˳��˳���¼***********************
    $('#quit').click(function () {
        // $('.userlogin').hide();
        $('#userlogin').removeAttr('class');

    });
    //*******************����̶����ĸ������ģ����û�е�¼��ô����ת����¼���棬����Ѿ���¼������ת���������Ľ���*********
    $('#f-login').click(function () {
        if ( $('#userlogin').hasClass('user-show')){
            //��ת��������Ϣ����
            // console.log(123)
            var aTop =$(document).scrollTop() ;
            $('.home-box').css({'display':'block','top':aTop});
            unScroll();
        } else{
            aTop =$(document).scrollTop() ;
            $('.signin').css({'display':'block','top':aTop});
            $('.post').css({'display':'none'});
            $('.sing-content').css({'display':'block'});
            unScroll();
            // console.log(321)
        }
    });
    //------------------------------���ȡ���������Ľ���-----------------------------
    $('.h-cancel').click(function () {
        $('.home-box').css({'display':'none'});
        removeUnScroll();
    });

    //*********************************��Ա����Ч��*****************************************************
    //�����������
    $('.nav-con ul li').each(function (index,value) {
        //��ÿһ��li��������¼�
        $(value).click(function () {
            var $love = $(value).index();
            $(value).siblings().removeAttr('id');
            $(value).attr('id','li-bg');
            //�õ���ǰѡ�������$love
            $('#my-ul>li').eq($love).show().siblings().hide();
        })
    });
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


//*********************************commodityҳ��js�ļ�********************************************
//**************************************�ֲ�ͼand�Ŵ�Ч��*****************************************
    var num4 = 0;
    var timer4 = setInterval(run4,4000);
    function run4(){
        click();
        if ( num4 >= $('#big li').length){
            num4 = 0;
        }
        num4 ++;
        $('#big li').eq(num4 -1).fadeIn(2000);
        $('#little li').eq(num4 - 1).css({'border':'1px solid rgb(0,150,136)'});
        $('#mag li').eq(num4 -1).fadeIn(2000);
    }
    function click() {
        $('#big li').siblings().fadeOut(2000);
        $('#little li').siblings().css({'border':'1px solid transparent'});
        $('#mag li').siblings().fadeOut(2000);
    }
//���СͼƬ
    $('#little li').each(function (index,value) {
        $(this).click(function () {
            click();
            $('#big li').eq(index).fadeIn(2000);
            $('#mag li').eq(index).fadeIn(2000);
            $('#little li').eq(index).css({'border':'1px solid rgb(0,150,136)'});
        })
    });
//�����������
    $('#big').mouseenter(function () {
        clearInterval(timer4);
        $('.mask').css({'display':'block'});
        //�Ŵ��ͼƬ��ʾ
        $('#mag ').css({'display':'block'});
    });
    $('#big').mousemove(function(e){            //����Ҫ����ߴ���Ӽ�����ƶ��¼�����������һֱ�����¼������º���λ��
        //����event�����ڻ�ȡ���λ��
        var x=e.clientX- $('#big').offset().left-$('.mask').width()/2;    //����x=���λ�ü�ȥ��ߴ���Ӿ�����ҳ�߿�ľ��룬��һ��������������ں����ڲ���λ�ã�֮���ټ�ȥС���ӵĿ�/2���ͻ���˺������м��λ�á�֮������ֵ����x
        var y=e.clientY- $('#big').offset().top-$('.mask').height()/2;    //������������ᣬԭ��ͬ��
        var maxx= $('#big').width()-$('.mask').width();       //����������һ������ȣ���������С���ӵ��ұ��ƶ���Χ�����ô���ӵ��ܿ�ȼ�ȥС���ӵ��ܿ�ȣ�ʣ�µľ���С���ӵ��ƶ���Χ���������⡣
        var maxy= $('#big').height()-$('.mask').height(); //С���������ƶ���Χ ԭ��ͬ��
        //���￪ʼ�ĸ�if�ֱ��������ƺ��ӵ��������ҵ�����ƶ���Χ��������С���ӳ��������
        if(x<0){
            x=0
        }
        if(y<0){
            y=0
        }
        if(x>maxx){
            x=maxx;
        }
        if(y>maxy){
            y=maxy
        }
        //���ֵͨ��css����д���ȥ
        //����Ҫע�⣬������attr({top:y,left:x}),��Ϊattrд���������д��Ԫ�����ڵģ�����css����ǰд����position��ʽ�������ڵ�top��left�����޷���css��Ķ�λ���Խ��й�����
        $('.mask').css({top:y,left:x});
        $('#mag li img').css({top:-y*1.7,left:-x*1.7})    //�������ұ�ͼƬ���ƶ����ԣ�xy��ֱ��򷴷����ƶ����������澵ͷ��Ч�����˶�����Ϊ�ұߴ�ͼ�����Сͼ��һ����
    });
//����Ƴ������
    $('#big').mouseleave(function () {
        timer4 = setInterval(run4,4000);
        $('.mask').css({'display':'none'});
        //�Ŵ��ͼƬ����
        $('#mag').css({'display':'none'});
    });

//***********************************�Ӽ���Ʒ��������********************************
    var num1 = 1;
    $('#sub').click(function () {
        if (num1 >1) {
            num1 --;
            $('#input').val(num1);
        }
    });
    $('#add').click(function () {
        num1 ++;
        if (num1 <=10) {
            $('#input').val().html = num1;
            $('#input').val(num1);

        }else{
            confirm('Out of stock !!!!!!!');
        }
    });
//********************************ѡ����Ʒ����***********************************
    $('#w-li li').each(function (index,value) {
        $(value).click(function () {
            $(value).siblings().removeAttr('class');
            $(value).attr('class','cbg');
        });
        //�������빺�ﳵ�������������¼����ж�����ѡ������
        $('#buy a').each(function (index,value) {
            $(value).click(function () {
                if ($('#w-li li').hasClass('cbg')){
                    //**���빺�ﳵ����¼�**
                    var aTop =$(document).scrollTop() ;
                    $('.my-all').css({'display':'block','top':aTop});
                    $('.my-cart').css('display','block');
                    $('.receipt').css('display','none');
                    unScroll();
                    //*****������Ʒ��Ϣ���빺�ﳵ*****
                    $('.join').css({'display':'block'});
                    // console.log($('#input').val());
                    $('#j-input').val($('#input').val());
                    //����۸�
                    var xwres =  $('#input').val() * $('#mon-mon').html();
                    //���۸��빺�ﳵ
                    $('#b-mon').html(xwres);
                    //���۸����ܼ�
                    $('#total-mon').html(xwres);

                }else{
                    confirm('��ѡ��������������������������')
                }
            })
        })
    });
//********************************�Ƴ����ﳵ����Ʒ*******************************************

    $('.wp-romove').click(function () {
        $('.join').css('display','none');
        //����ܼ�
        $('#total-mon').html(0)
    });


//****************************************�ύ��������*************************************************
//���ع��ﳵ
    $('.pay-back').click(function () {
        $('.my-cart').css('display','block');
        $('.receipt').css('display','none');
    });
    //**********************************ѡ�***********************************
    // console.log($('#ul-ul li'))
    $('#ul-ul li').each(function (index,value) {
        $(value).click(function () {
            $(value).siblings().removeAttr('id');
            $(value).attr('id','show');
            //�õ���ǰѡ�������that
            var that = $(value).index();
            $('#li-li li').eq(that).fadeIn(300).siblings().fadeOut(300)
        })
    });
});


//***************************************barbel����*******************************************/
$('#bb-cart').click(function () {
    $('#two-join').css('display','block');
    //���뻺��
    var tStorage = window.localStorage;
    var $tmon = $('#tmon-mon').html() * $('#tj-input').val();
    tStorage.setItem('money',$tmon);
});

//***********************************���ﳵ�Ӽ���Ʒ��������********************************
var num6 = 1;
$('#tj-sub').click(function () {
    if (num6 >1){
        num6 --;
        $('#tj-input').val(num6);
        //����Ʒ��������ʱ����۸�
        // console.log($('#mon-mon').html())
        var subres =  parseInt($('#tmon-mon').html()* num6);
        // console.log(subres)
        //���۸��빺�ﳵ
        $('#tb-mon').html(subres);
        //���۸����ܼ�
        $('#total-mon').html(subres);
    }
});
$('#tj-add').click(function () {
    num6 ++;
    if (num6 <=10) {
        $('#tj-input').val().html = num6;
        $('#tj-input').val(num6);
        //����Ʒ��������ʱ����۸�
        var addres = parseInt($('#tmon-mon').html()* num6);
        //���۸��빺�ﳵ
        $('#tb-mon').html(addres);
        //���۸����ܼ�
        $('#total-mon').html(addres);
    }else{
        confirm('��治�㣡����������������');
    }
});
//�û��Լ�������Ʒ�������м۸�ļ���
//��inputʧȥ����ʱ�����ж�
$('#tj-input').blur(function () {
    // console.log($('#j-input').val());
    //���û����븺��ʱ����
    if( $('#tj-input').val() < 1){
        confirm('��������������������������������������������');
        $('#tj-input').val(1);
    }
    //���û�������������ڿ��ʱ������
    if ($('#tj-input').val() >10 ) {
        confirm('��治�㣡��������������������������');
        $('#tj-input').val(1);
        $('#tb-mon').html($('#tmon-mon').html());
        //���۸����ܼ�
        $('#total-mon').html($('#tmon-mon').html());
    }else{
        var myres =$('#tj-input').val() * $('#tmon-mon').html();
        //���۸��빺�ﳵ
        $('#b-mon').html(myres);
        //���۸����ܼ�
        $('#total-mon').html(myres);
    }
});
function hunacun(){
    ////////////////////////�ж�������Ļ���firstMoney///////////////////////
    var storage = window.localStorage;
    $('#bb-cart').click(function () {
        //�õ������ֵ
        var myvalue = storage.getItem('firstMoney');
        if (myvalue){
            $('.huancun').css('display','block');
            //����Ƴ��Ƴ����ӣ��������
            $('.twp-romove').click(function () {
                $('.huancun').css('display','none');
                storage.removeItem('firstMoney');
            })
        }

    });

////////////////////////�������ʱ�ͼ��������������///////////////////////
    $('#settlement').click(function () {
        storage.removeItem('firstMoney');
    });
    $('#goon').click(function () {
        storage.removeItem('firstMoney');
        var aTop =$(document).scrollTop() ;
        $('.my-all').css({'display':'none','top':aTop});
        removeUnScroll()

    });

}
hunacun();
//*************���û�е�¼������ύ�����ᵯ����¼����*************
$('.sub-pay').click(function () {
    if ( $('#userlogin').hasClass('user-show')){
        //��ת��������Ϣ����
        // console.log(123)
        var aTop =$(document).scrollTop() ;
        $('.home-box').css({'display':'block','top':aTop});
        unScroll();
    } else{
        aTop =$(document).scrollTop() ;
        $('.signin').css({'display':'block','top':aTop});
        $('.post').css({'display':'none'});
        $('.sing-content').css({'display':'block'});
        unScroll();
    }
});
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