$(function () {
    //吸顶效果************************************************************
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
    //轮播图************************************************************
    var num = 0;
    var timer = setInterval(run,2000);
    function run() {
        num++;
        if ( num >  $('#images li').length){
            num = 1;
        }
        //清除样式
        clear();
        //设置样式
        $('#images li').eq(num -1).attr('id','run');
    }
      //右边按钮
    $('#right').click(function () {
        run();
    });
    //左边按钮
    $('#left').click(function () {
       num --;
       if (num < 0){
           num = $('#images li').length -1;
       }
        //清除样式
           clear();
           //设置样式
           $('#images li').eq(num -1).attr('id','run');
    });
    //清除样式
    function clear() {
        $('#images  li').eq(num -1).end().siblings().removeAttr('id');
    }
    //鼠标移入
    $('.b-content').mouseover(function () {
        clearInterval(timer)
    });
    //鼠标移出
    $('.b-content').mouseout(function () {
        timer = setInterval(run,2000);
    });
    //------------------------渐入效果-------------------------
   $(document).scroll(function () {
       if ($(document).scrollTop() >= 800){
           $('.s-content').animate({'top':-300},1000);
           $('.s-content li').fadeIn(3500)
       }
   });
 //-----------------------------两边向中靠拢------------------------
  $(document).scroll(function () {
      if ($(document).scrollTop() >= 950) {
          $('.w-left ').animate({'left':0},2000);
          $('.w-left video').fadeIn(3000);

          $('.w-right').animate({'right':0},2000);
          $('.w-right img').eq(0).fadeIn(3000);
      }
  });
    //----------------------------左边单个向右划入--------------------
    $(document).scroll(function () {
        if ($(document).scrollTop() >= 1350) {
            //遍历数组
            $('.series li').each(function (index,value) {
                $(this).animate({'left':120 * (index)},2000);
                $(this).find('img').fadeIn(3000);
            })
        }
    });
//--------------------------------------------固定栏返回顶部
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

//------------------------------------------点击购物车按钮弹出购物车页面
//固定栏购物车点击事件
//计算购物车出现的位置，位于屏幕正中心！！！！！
$('#f-cart').click(function () {
    var aTop =$(document).scrollTop() ;
    $('.my-all').css({'display':'block','top':aTop});
    unScroll();
})
//导航栏购物车点击事件
;$('#s-cart').click(function () {
    var aTop =$(document).scrollTop() ;
    $('.my-all').css({'display':'block','top':aTop});
    unScroll();
});
//点击结算出现确认收货界面，隐藏购物车界面************************
    $('#settlement').click(function () {
        //判断购物车中是否具有商品
            $('.my-cart').css('display','none');
            $('.receipt').css('display','block');
    });
//点击取消确认收货界面
    $('.re-cancel').click(function () {
        $('.my-all').css({'display':'none'});
        removeUnScroll();
    });
//---------------------------------------------点击取消购物车界面
$('.cancel').click(function () {
    $('.my-all').css({'display':'none'});
    removeUnScroll();
});
$('#back').click(function () {
    $('.my-all').css({'display':'none'});
    removeUnScroll();
});
//----------------------------------------------点击登录弹出登录界面
$('#login').click(function () {
    var aTop =$(document).scrollTop() ;
    $('.signin').css({'display':'block','top':aTop});
    $('.post').css({'display':'none'});
    $('.sing-content').css({'display':'block'});
    unScroll();
});
//----------------------------------------------点击登录弹出注册界面
$('#register').click(function () {
    var aTop =$(document).scrollTop() ;
    $('.signin').css({'display':'block','top':aTop});
    $('.post').css({'display':'block'});
    $('.sing-content').css({'display':'none'});
    unScroll();
});
//---------------------------------------------点击注册弹出注册页面
$('#sign-reg').click(function () {
    var aTop =$(document).scrollTop() ;
    $('.signin').css({'display':'block','top':aTop});
    $('.post').css({'display':'block'});
    $('.sing-content').css({'display':'none'});
    unScroll();
});
//----------------------------------------------点击取消弹出登录界面
$('.s-cancel').click(function () {
    $('.signin').css({'display':'none'});
         removeUnScroll();
});
//----------------------------------------------点击取消登录弹出注册界面
$('.p-cancel').click(function () {
    var aTop =$(document).scrollTop() ;
    $('.signin').css({'display':'none'});
    $('.post').css({'display':'none'});
    $('.sing-content').css({'display':'none'});
    removeUnScroll();
});

//**************************注册界面表单验证*******************************//
// 定义开关变量
var flagPhone=false;
var flagPwd=false;
var flagCpwd=false;
// var flagRadio = false;
// 找到所在标签元素
var $phone = $('#p-phone');
var $pwd = $('#p-password');
var $cpwd = $('#sure');
var $zhuce  = $('#zhuce');
var $submit = $('#myform');
// var $rad = $('#man');
// var $wrad = $('#woman');
// 1.如果失去焦点，则进行检查判断手机号码是否合法
$phone.blur(function () {
    //封装函数，调用函数
    checkPhone();
});
function checkPhone() {
    // 获取用户输入的数据
    var vals = $phone.val();
    // console.log(vals)
    // 正则，正则验证用户输入的数据是否合法
    var res = /^1\d{10}$/;
    if (vals == ''){
        $phone.next().show().html('手机号码不能为空！！！');
        flagPhone = false;
        return
    }
    if (res.test(vals)){
        // 合法 -- 隐藏报错信息
        $phone.next().show().html('手机号码正确！！');
        flagPhone=true;
    }else{
        //不合法
        $phone.next().show().html('手机号码由十一位数字组成！');
        flagPhone = false;
        return
    }
}
//  2.如果密码框失去焦点，则进行检查判断密码是否合法
$pwd.blur(function () {
    //封装函数，调用函数
    checkPwd();
});
function checkPwd() {
    //获取密码框输出入的内容
    var vals = $pwd.val();
    // 密码正则匹配表达式
    var rePass = /^[\w!-@#$%^&*]{6,20}$/i;
    // 如果输入框为空，则提示不能为空并return
    if (vals == ''){
           $pwd.next().show().html('密码不能为空！！！');
         flagPwd=false;
        return
    }
    if (rePass.test(vals)){
        //成功
        $pwd.next().show().html('密码可以使用！！！');
        flagPwd=true;
        return
    }else{
        $pwd.next().show().html('密码是6-20位组成，以数字字母下划线开头！！！');
        flagPwd=false;
        return
    }
}
// 3.判断两次输入的密码是否一致
$cpwd.blur(function () {
   checkCpwd(); 
});
function checkCpwd() {
    // 获取重复密码框输入的数据
    var val =$pwd.val();
    var vals =$cpwd.val();
    if(vals==''){
        $cpwd.next().show().html('重复密码框不能为空!!');
        flagCpwd=false;
        return
    }
    if (val==vals){
        $cpwd.next().show().html('重复密码正确!!');
        flagCpwd=true;
    }
    else{
        $cpwd.next().show().html('两次密码输入不一致，请重新输入');
        flagCpwd=false;
        return
    }
}
// 4.所有输入框验证通过再提交注册
$('#zhuce').click(function(){
    if(flagPhone && flagPwd && flagCpwd){
        alert('恭喜你！注册成功!');
        $('.post').css({'display':'none'});
        $('.sing-content').css({'display':'block'});
        return false;
    }
    else{
        alert("抱歉，注册失败！");
        return false
    }
});
//5.点击注册按钮，清空内容
// 6.设置缓存
var storage = window.localStorage;
$zhuce.click(function () {
    var phoneVal =$phone.val();
    var pwdVal =$pwd.val();
    var cpwdVal =$cpwd.val();
//1、往localStorage插入值或者修改，key-value形式：
    storage.setItem('phoneNum',phoneVal);
    storage.setItem('pwdNum',pwdVal);
    $pwd.val('');
    $pwd.next().show().html('');
    $cpwd.val('');
    $cpwd.next().show().html('');
    $phone.val('');
    $phone.next().show().html('');
  //***************重新加载页面*****************
   location.reload();
    /*判断如果用户没有进行登录,则不显示用户界面*/
    userlogin();
});

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
//**************************登录界面表单验证*******************************//
//当鼠标光标失去焦点是进行正则判断
// 定义开关变量
    var flagTelephone = false;
    var flagPassword = false;
// 找到所在标签元素
    var $telephone = $('#phone');
    var  $password = $('#password');
    $telephone.blur(function () {
        //封装函数，调用函数
        checkTelephone();
    });
    function checkTelephone(){
        // 获取用户输入的数据
        var vals = $telephone.val();
        // console.log(vals)
        // 正则，正则验证用户输入的数据是否合法
        var res = /^1\d{10}$/;
        if (vals == ''){
            $telephone.next().show().html('手机号码不能为空！！！');
            flagTelephone = false;
            return
        }
        if (res.test(vals)){
            // 合法 -- 隐藏报错信息
            $telephone.next().show().html('手机号码正确！！');
            flagTelephone = true;
        }else{
            //不合法
            $phone.next().show().html('手机号码由十一位数字组成！');
            flagTelephone = false;
            return
        }
    }
    $password.blur(function () {
        checkPassword();
    });
    function checkPassword(){
        //获取密码框输出入的内容
        var vals = $password.val();
        // 密码正则匹配表达式
        var rePass = /^[\w!-@#$%^&*]{6,20}$/i;
        // 如果输入框为空，则提示不能为空并return
        if (vals == ''){
            $password.next().show().html('密码不能为空！！！');
            flagPassword=false;
            return
        }
        if (rePass.test(vals)){
            //成功
            $password.next().show().html('密码可以使用！！！');
            flagPassword=true;
            return
        }else{
            $password.next().show().html('密码是6-20位组成，以数字字母下划线开头！！！');
            flagPassword=false;
            return
        }
    }
//****************************判断账号密码是否正确从缓存中取出比较，完全一致即为登录成功！！
     //拿到缓存的电话和密码
    var phoneNum = storage.getItem('phoneNum');
    var passwordNum = storage.getItem('pwdNum');
    // console.log(phoneNum);
    // console.log(passwordNum);
//判断登录的账号和密码是否与注册的账号密码相等
    //创建登录点击事件
    $('#sign-lo').click(function () {
        if ($telephone.val() == phoneNum && $password.val() == passwordNum && flagTelephone &&flagPassword){
            alert('恭喜你！登录成功');
            //清除登录界面
            $('.signin').css({'display':'none'});
            removeUnScroll();
            //展示用户登录的个人信息
            $('#userlogin').attr('class','user-show');
            //将电话号码传入右上角用户信息
            console.log($telephone.val());
            $('#receive').html($telephone.val());
            //将电话号码传入会员中心
            $('#d-back').html($telephone.val());
            //清空所有内容
            $telephone.val('');
            $telephone.next().show().html('');
            $password.val('');
            $password.next().show().html('');
                 return false;
        }else{
            alert('登录失败！！！');
            return false
        }
    });
    //*************************加载页面判断用户是否登录***********************************
/*function  userlogin(){
    var storage = window.localStorage;
    var meres = storage.getItem('phoneNum');
    // console.log( storage.getItem('phoneNum') )
//判断浏览器缓存中是否具有登录用户名，让用户信息一展示，没有则取消
    if (storage.getItem('phoneNum')){
        $('#userlogin').css('display','block');
        //将用户名传给用户信息
        $('#receive').html(meres);
        //将电话号码传入会员中心
        $('#d-back').html(meres);
    }else {
        $('#userlogin').css('display','none');
    }
    //!*****************点击退出********************
    // 清空缓存
     $('#quit').click(function () {
         var storage = window.localStorage;
         storage.removeItem('phoneNum');
         storage.removeItem('pwdNum');
         $('#userlogin').css('display','none');
     });
    //!*********************点击个人中心跳转到会员中心界面************************
    $('.membership').click(function () {
        var aTop =$(document).scrollTop() ;
        $('.home-box').css({'display':'block','top':aTop});
        unScroll();
    });
}*/
   /* userlogin();*/
   //***********点击退出退出登录***********************
    $('#quit').click(function () {
        // $('.userlogin').hide();
        $('#userlogin').removeAttr('class');

    });
    //*******************点击固定栏的个人中心，如果没有登录那么会跳转到登录界面，如果已经登录，则跳转到个人中心界面*********
     $('#f-login').click(function () {
         if ( $('#userlogin').hasClass('user-show')){
             //跳转到个人信息界面
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
    //------------------------------点击取消个人中心界面-----------------------------
    $('.h-cancel').click(function () {
        $('.home-box').css({'display':'none'});
        removeUnScroll();
    });

   //*********************************会员中心效果*****************************************************
    //遍历左边数组
   $('.nav-con ul li').each(function (index,value) {
       //给每一个li绑定鼠标点击事件
       $(value).click(function () {
           var $love = $(value).index();
           $(value).siblings().removeAttr('id');
           $(value).attr('id','li-bg');
           //拿到当前选项的索引$love
           $('#my-ul>li').eq($love).show().siblings().hide();
       })
   });
//*******************禁止滚动条滚动********************
function unScroll() {
    var top = $(document).scrollTop();
    $(document).on('scroll.unable',function () {
        $(document).scrollTop(top);
    })
}
//*******************允许滚动条滚动********************
function removeUnScroll() {
    $(document).unbind("scroll.unable");
}


//*********************************commodity页面js文件********************************************
//**************************************轮播图and放大镜效果*****************************************
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
//点击小图片
        $('#little li').each(function (index,value) {
            $(this).click(function () {
                click();
                $('#big li').eq(index).fadeIn(2000);
                $('#mag li').eq(index).fadeIn(2000);
                $('#little li').eq(index).css({'border':'1px solid rgb(0,150,136)'});
            })
        });
//鼠标移入大盒子
        $('#big').mouseenter(function () {
            clearInterval(timer4);
            $('.mask').css({'display':'block'});
            //放大的图片显示
            $('#mag ').css({'display':'block'});
        });
        $('#big').mousemove(function(e){            //首先要给左边大盒子加鼠标移动事件，这样才能一直触发事件，更新盒子位置
            //声明event，用于获取鼠标位置
            var x=e.clientX- $('#big').offset().left-$('.mask').width()/2;    //这里x=鼠标位置减去左边大盒子距离网页边框的距离，这一步获得了鼠标相对于盒子内部的位置，之后再减去小盒子的宽/2，就获得了盒子正中间的位置。之后把这个值赋给x
            var y=e.clientY- $('#big').offset().top-$('.mask').height()/2;    //这个是鼠标的纵轴，原理同上
            var maxx= $('#big').width()-$('.mask').width();       //这里声明了一个最大宽度，用于限制小盒子的右边移动范围，利用大盒子的总宽度减去小盒子的总宽度，剩下的就是小盒子的移动范围，这个好理解。
            var maxy= $('#big').height()-$('.mask').height(); //小盒子纵轴移动范围 原理同上
            //这里开始四个if分别用来限制盒子的左上下右的最大移动范围，不能让小盒子超出大盒子
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
            //最后将值通过css方法写入进去
            //这里要注意，不能用attr({top:y,left:x}),因为attr写入的属性是写到元素行内的，尽管css里提前写好了position样式，但行内的top和left还是无法和css里的定位属性进行关联。
            $('.mask').css({top:y,left:x});
            $('#mag li img').css({top:-y*1.7,left:-x*1.7})    //这里是右边图片的移动属性，xy轴分别向反方向移动，做出跟随镜头的效果，乘二是因为右边大图比左边小图大一倍。
        });
//鼠标移出大盒子
        $('#big').mouseleave(function () {
            timer4 = setInterval(run4,4000);
            $('.mask').css({'display':'none'});
            //放大的图片隐藏
            $('#mag').css({'display':'none'});
        });

//***********************************加减商品购买数量********************************
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
//********************************选择商品重量***********************************
        $('#w-li li').each(function (index,value) {
            $(value).click(function () {
                $(value).siblings().removeAttr('class');
                $(value).attr('class','cbg');
            });
            //创建加入购物车和立即购买点击事件，判断有无选择数量
            $('#buy a').each(function (index,value) {
                $(value).click(function () {
                      if ($('#w-li li').hasClass('cbg')){
                          //**加入购物车点击事件**
                              var aTop =$(document).scrollTop() ;
                              $('.my-all').css({'display':'block','top':aTop});
                          $('.my-cart').css('display','block');
                          $('.receipt').css('display','none');
                              unScroll();
                              //*****将该物品信息导入购物车*****
                               $('.join').css({'display':'block'});
                          // console.log($('#input').val());
                         $('#j-input').val($('#input').val());
                         //计算价格
                        var xwres =  $('#input').val() * $('#mon-mon').html();
                          //将价格导入购物车
                          $('#b-mon').html(xwres);
                          //将价格导入总计
                          $('#total-mon').html(xwres);

                      }else{
                          confirm('请选择重量！！！！！！')
                      }
                })
            })
        });
//***********************************购物车加减商品购买数量********************************
      var num5 = 1;
      $('#j-sub').click(function () {
          if (num5 >1){
              num5 --;
              $('#j-input').val(num5);
              //当商品个数减少时计算价格
              // console.log($('#mon-mon').html())
            var subres =  parseInt($('#mon-mon').html()* num5);
            // console.log(subres)
              //将价格导入购物车
              $('#b-mon').html(subres);
              //将价格导入总计
              $('#total-mon').html(subres);
          }
      });
    $('#j-add').click(function () {
        num5 ++;
        if (num5 <=10) {
            $('#j-input').val().html = num5;
            $('#j-input').val(num5);
            //当商品个数增加时计算价格
            var addres = parseInt($('#mon-mon').html()* num5);
            //将价格导入购物车
            $('#b-mon').html(addres);
            //将价格导入总计
            $('#total-mon').html(addres);
        }else{
            confirm('Out of stock !!!!!!!');
        }
    });
    //用户自己输入商品数量进行价格的计算
     //当input失去焦点时进行判断
    $('#j-input').blur(function () {
        // console.log($('#j-input').val());
        //当用户输入负数时！！
        if( $('#j-input').val() < 1){
          confirm('请输入正整数！！！');
            $('#j-input').val(1);
        }
        //当用户输入的数量大于库存时！！！
        if ($('#j-input').val() >10 ) {
            confirm('库存不足！！！');
            $('#j-input').val(1);
            $('#b-mon').html($('#mon-mon').html());
            //将价格导入总计
            $('#total-mon').html($('#mon-mon').html());
        }else{
            var myres =$('#j-input').val() * $('#mon-mon').html();
            //将价格导入购物车
            $('#b-mon').html(myres);
            //将价格导入总计
            $('#total-mon').html(myres);
        }
    });
//********************************移除购物车的商品*******************************************

$('.wp-romove').click(function () {
    $('.join').css('display','none');
    //清空总价
    $('#total-mon').html(0)
});


//****************************************提交订单界面*************************************************
//返回购物车
$('.pay-back').click(function () {
    $('.my-cart').css('display','block');
    $('.receipt').css('display','none');
});
        //**********************************选项卡***********************************
        // console.log($('#ul-ul li'))
        $('#ul-ul li').each(function (index,value) {
            $(value).click(function () {
                $(value).siblings().removeAttr('id');
                $(value).attr('id','show');
                //拿到当前选项的索引that
                var that = $(value).index();
                $('#li-li li').eq(that).fadeIn(300).siblings().fadeOut(300)
            })
        });
});


//***************************************barbel界面*******************************************/
function hunacun(){
    ////////////////////////判断浏览器的缓存firstMoney///////////////////////
    var storage = window.localStorage;
    $('#bb-cart').click(function () {
        //拿到缓存的值
        var myvalue = storage.getItem('firstMoney');
        if (myvalue){
            $('.huancun').css('display','block');
            //点击移除移除盒子，清除缓存
            $('.twp-romove').click(function () {
                $('.huancun').css('display','none');
                storage.removeItem('firstMoney');
            })
        }

    });

////////////////////////点击结算时和继续购物清除缓存///////////////////////
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
//*************如果没有登录，点击提交订单会弹出登录界面*************
$('.sub-pay').click(function () {
    if ( $('#userlogin').hasClass('user-show')){
        //跳转到个人信息界面
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

