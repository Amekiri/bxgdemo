/**
 * Created by Administrator on 2017/2/26 0026.
 */
define(['jquery'], function ($) {
    $('.navs a').on('click', function () {
        $(this).next().slideToggle();
    });

    //根据页面路径定位左侧导航..
    //获取当前页面的路径
    //先去掉所有a的active，再根据路径给对应的啊添加active
    var pathname = window.location.pathname;
    $('.navs a').removeClass('active').filter('[href="'+ pathname +'"]').addClass('active').parents('ul').show();

    //$.ajax({
    //    type:'post',
    //    url:'/v6/login',
    //    data:{
    //        tc_name:123456,
    //        tc_pass:123456
    //    },
    //    success: function (){
    //        location.href = 'http://www.baidu.com';
    //        console.log('成了');
    //    },
    //    error: function () {
    //        console.log('败了');
    //    }
    //})
});