/**
 * Created by Administrator on 2017/2/26 0026.
 */
define(['jqueryCookie','nprogress'], function (undefined,nprogress) {
    //监听ajax请求,在开始的时候调用
    $(document).ajaxStart(function () {
        $('.overlay').show();
    }).ajaxStop(function () {
        $('.overlay').hide();
    });

    //获取登录返回信息中的用户信息,保存在cookie中，在主页面中展示出来
    var userInfo = null;
    try {
        userInfo = JSON.parse($.cookie('userInfo'));
    }catch(e){
        userInfo = {};
    }

    //提取信息,展示到窗口中
    $('.aside .profile h4').html(userInfo.tc_name? userInfo.tc_name:'dagenimeiminga');
    $('.aside .profile img').attr('src', userInfo.tc_avatar? userInfo.tc_avatar:'/img/default.png');

    // 该页所有的js加载完毕，进度条结束。
    nprogress.done();
})