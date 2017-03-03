define(['jquery','nprogress','common','util','template','datepicker','datepickerLanguage'], function($,nprogress,undefined,util,template,datepicker,undefined) {
	// 该页所有的js加载完毕，进度条结束。
	nprogress.done();

	//获取tc_id查询字符串,如果有则认为当前是编辑页面,没有则认为是新增界面
	//编辑讲师:
	//1.先获取讲师,展示到表单中
	//2.监听表单提交事件,转为ajax方式提交到讲师修改接口.

	//添加讲师:
	//1.监听提交表单事件,转为ajax方式提交到讲师添加接口

	//根据判断的编辑和添加,对弈的渲染html
	var tcId = util.getQueryString('tc_id');
	//能获取到id的是编辑
	if(tcId){
		//获取该讲师之前的信息,填充到表单中
		$.get('/v6/teacher/edit',{tc_id:tcId}, function (data) {
			if(data.code == 200){
				var html = template('teacher-form-tpl',data.result);
				$('.teacher-add').html(html);
				$('#datepicker_t').datepicker({
					language:'zh-CN',
					endDate:new Date(),
					format:'yyyy-mm-dd'
				});
			}
		});
	}

	//没有id的话视为添加
	else{
		var html = template('teacher-form-tpl',{});
		$('.teacher-add').html(html);
		$('#datepicker_t').datepicker({
			language:'zh-CN',
			endDate:new Date(),
			format:'yyyy-mm-dd'
		});
	}

	//监听表单提交事件,转换为ajax请求
	//如果是编辑,那么请求/v6/teacher/update, 此时需要id参数
	//添加请求/v6/teacher/add

	$('.teacher-add').on('submit','#teacher-add-form', function () {
		$.ajax({
			url:'/v6/teacher/'+(tcId? 'update':'add'),
			type:'post',
			data:$(this).serialize()+(tcId? '&tc_id='+tcId:''),
			success: function (data) {
				if(data.code==200){
					location.href ='/html/teacher/list.html';
				}
			}
		});
		return false;
	});
});
