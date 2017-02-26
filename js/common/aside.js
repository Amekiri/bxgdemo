/**
 * Created by Administrator on 2017/2/26 0026.
 */
define(['jquery'], function ($) {
    $('.navs a').on('click', function () {
        $(this).next().slideToggle();
    })


    $.ajax({
        type:'post',
        url:'/v6/login',
        data:{
            tc_name:123456,
            tc_pass:123456
        },
        success: function (){
            //location.href = 'http://www.baidu.com';
            console.log('成了');
        },
        error: function () {
            console.log('败了');
        }
    })
});