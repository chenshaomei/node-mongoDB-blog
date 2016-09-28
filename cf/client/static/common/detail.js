$(function(){
	var oDelete=$('#delete_art'),
		oSuccessTip=$('.success-tip');
		oErrTip=$('.err-tip');

	var id=$('#art_id').val();
	console.log(id)
	var deleteArticle=function(){

		$.ajax({
			url: '/api/deleteArticle',
			type: "POST",
			data: {'id':id},
			success:function(data) {
				console.log(data);
				oSuccessTip.show();
				setTimeout(function(){
					oSuccessTip.hide();
					location.href='/';
				}, 1000)
				
			},
			error:function() {
				console.log("error");
				oErrTip.show();
				setTimeout(function(){
					oErrTip.hide();
					location.href='/article/detail';
				}, 1000)
				
			}
		})
	}

	oDelete.on('click',deleteArticle)
})