/**
 * Created by Administrator on 2017/2/26 0026.
 */
define(['jquery'], function ($) {
    $('#logout').on('click', function () {
        $.post('/v6/logout', function (data) {
            console.log(data.code);
            if(data.code == 200){
                location.href = '/html/home/login.html';
            }
        })
    })


    //$.ajax({
    //    type:'post',
    //    url:'/v6/login',
    //    data:{
    //        tc_name:123456,
    //        tc_pass:123456
    //    },
    //    success: function (){
    //        location.href = 'http://www.baidu.com';
    //        console.log('≥…¡À');
    //    },
    //    error: function () {
    //        console.log('∞‹¡À');
    //    }
    //})
});