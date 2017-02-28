define(['jquery'], function($) {
	//登录之间读取cook展示用户历史头像
	//设置登陆页的img-src为对象中的tc_avatar属性值，如果没有给一个默认头像的地址
	var userInfo = null;
	try {
		userInfo = JSON.parse($.cookie('userInfo'));
	}catch(e){
		userInfo = {};
	}
	$('.login .avatar img').attr('src',userInfo.tc_avatar? userInfo.tc_avatar: '/img/default.png');

	$('#form-login').on('submit', function () {
		$.ajax({
			type:'post',
			url:'/v6/login',
			//data: {
			//	tc_name:$('input').eq(0).val(),
			//	tc_pass:$('input').eq(1).val()
			//},
			data: $(this).serialize(),
			success: function (data) {
				if(data.code == 200){
					//登录成功的时候保存服务器返回的用户信息至cookie中，方便页面展示用户信息
					//全域保存登录信息
					$.cookie('userInfo',JSON.stringify(data.result),{path:'/'});

					location.href = '/';
				}
			}
		});
		return false;
	});

});
