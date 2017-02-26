/**
 * Created by Administrator on 2017/2/26 0026.
 */
define(['jqueryCookie'], function (undefined) {
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
})