$(function(){
	$('#direction_ul .cdt').on('click',function(){
		$(this).addClass('active');
	})

	var activeKey= $('#activeKey').val();
	var activeValue= $('#activeValue').val();

	if(activeKey=='direction'){

		for(var i=0;i<$('#direction_ul .cdt').length;i++){
			var item = $('#direction_ul .cdt')[i]

			if($('#direction_ul .cdt')[i].attr('data-cdt')==activeValue){
				item.addClass('active')
			}
		}
	}

	// 方向条件 添加选中样式
	$('body').on('click','.type-ul li',function(){
		$(this).addClass('active').siblings().removeClass('active');
	})

	// 分类条件 添加选中样式
	var index = location.search ? location.search.substring(location.search.substring(1).indexOf('index')*1+7) : 1;
	var chooseIndex = location.search.substring(1).indexOf('index') ==-1 ? 1 : index;
	$('body .type-ul li').eq(chooseIndex).addClass('active');

	console.log(activeKey)
	console.log(activeValue)
	var hrefValue=$('#direction_ul').find('active').attr('href');
	$('#type_all').attr('href',hrefValue);
})