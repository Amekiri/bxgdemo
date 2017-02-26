define(['jquery'], function($) {
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
