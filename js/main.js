/**
 * Created by Administrator on 2017/2/25 0025.
 */
requirejs.config({
    baseUrl: '/',
    paths : {
        //引用的库文件路径配置
        jquery : 'lib/jquery/jquery',
        bootstrap:'lib/bootstrap/js/bootstrap',
        echarts:'lib/echarts/echarts.common.min',
        jqueryCookie:'lib/jquery-cookie/jquery.cookie',
        nprogress:'lib/nprogress/nprogress',
        template:'lib/artTemplate/template',
        datepicker:'lib/bootstrap-datepicker/js/bootstrap-datepicker',
        datepickerLanguage:'lib/bootstrap-datepicker/locales/bootstrap-datepicker.zh-CN.min',
        region:'lib/region/jquery.region',
        ckeditor:'lib/ckeditor/ckeditor',
        uploadify:'lib/uploadify/jquery.uploadify',

        index:'js/index',

        aside:'js/common/aside',
        header:'js/common/header',
        common:'js/common/common',
        util:'js/common/util',
        //自己的文件路径配置

        userList:'js/user/list',
        userProfile:'js/user/profile',
        teacherAdd:'js/teacher/add',
        teacherList:'js/teacher/list',
        homeLogin:'js/home/login',
        homeRepass:'js/home/repass',
        homeSettings:'js/home/settings',
        courseAdd:'js/course/add',
        courseAddStep1:'js/course/add_step1',
        courseAddStep2:'js/course/add_step2',
        courseAddStep3:'js/course/add_step3',
        courseCategory:'js/course/category',
        courseCategoryAdd:'js/course/category_add',
        courseList:'js/course/list',
        courseTopic:'js/course/topic',
        advertAdd:'js/advert/add',
        advertList:'js/advert/list'
    },
    shim:{
        bootstrap:{
            deps:['jquery']
        },
        echarts:{
            deps:['jquery']
        },
        jqueryCookie:{
            deps:['jquery']
        },
        datepickerLanguage:{
            deps:['jquery','datepicker']
        },
        ckeditor:{
            exports: 'CKEDITOR'
        },
        uploadify:{
            deps:['jquery']
        }
    }
});

//在js加载前开启进度条显示
require(['nprogress'], function (nprogress) {
    nprogress.start();
});

//所有的页面都有bootstrap和jq的支持,先把他们加载
require(['jquery','bootstrap','aside','header','common']);


//获取页面的pathname,即路径名，根据页面加载对应的js
(function (window) {
    var pathname = window.location.pathname;

    /*
    * 增加判断登录状态的方法
    * 1.登录页
    * 1.1 没有SESSID，不用管
    * 1.2 有SESSID，跳转到首页
    *
    * 2其他页
    * 2.1 没有SESSID，跳转到登录页
    * 2.2 有SESSID 不用管
    * */
    
    require(['jqueryCookie'], function (undefined) {
        var sessID = $.cookie('PHPSESSID');

        //登录状态前端校验
        if(pathname == '/html/home/login.html' && sessID){
            location.href = '/';
        }else if(pathname !== '/html/home/login.html' && !sessID){
            location.href = '/html/home/login.html';
        }
        //如果没有跳转则可以执行后面的模块
        switch (pathname){
            case '/':
                require(['echarts']);
                require(['index']);
                break;
            case '/html/user/list.html':
                require(['userList']);
                break;
            case '/html/user/profile.html':
                require(['userProfile']);
                break;
            case '/html/teacher/list.html':
                require(['teacherList']);
                break;
            case '/html/teacher/add.html':
                require(['teacherAdd']);
                break;
            case '/html/home/login.html':
                require(['homeLogin']);
                break;
            case '/html/home/repass.html':
                require(['homeRepass']);
                break;
            case '/html/home/settings.html':
                require(['homeSettings']);
                break;
            case '/html/course/add.html':
                require(['courseAdd']);
                break;
            case '/html/course/add_step1.html':
                require(['courseAddStep1']);
                break;
            case '/html/course/add_step2.html':
                require(['courseAddStep2']);
                break;
            case '/html/course/add_step3.html':
                require(['courseAddStep3']);
                break;
            case '/html/course/category.html':
                require(['courseCategory']);
                break;
            case '/html/course/category_add.html':
                require(['courseCategoryAdd']);
                break;
            case '/html/course/list.html':
                require(['courseList']);
                break;
            case '/html/course/topic.html':
                require(['courseTopic']);
                break;
            case'/html/advert/add.html':
                require(['advertAdd']);
                break;
            case'/html/advert/list.html':
                require(['advertList']);
                break;
        }
    })

})(window);


