$(function(){
	var oLogin=$('#login_btn');
	var oSuccessTip=$('.success-tip');
	var oErrTip=$('.err-tip');
	var userLogin=function(){
		var username=$('#username').val();
		var password=$('#password').val();
		
		var data={
			username:username,
			password:password
		}
		$.ajax({
			type:'POST',
			url:'/login',
			data:data,
			success:function(data){
				console.log(data);

				if(data.code==0){
					oSuccessTip.show();
					setTimeout(function(){
						oSuccessTip.hide();
						location.href='/';
					}, 1000)
					
				}else{
					oErrTip.show();
					setTimeout(function(){
						oErrTip.hide();
						location.href='/user/login';
					}, 1000)
				}
			},
			error:function(){
				console.log(err);
			}
		})

	}
	oLogin.on('click',userLogin)
})