<div class="header">
	<div class="header-inner">
	<div class="logo"><a href="#"><img src="../../static/images/logo1.png" alt=""></a></div>
	<ul class="nav">
		<li><a href="/">首页</a></li>
		<li><a href="/article/list">文章</a></li>
		<li><a href="/article/add">发布</a></li>
		{% if !user %}
		<li><a href="/user/login">登陆</a></li>
		<li><a href="/user/register">注册</a></li>
		{% endif %}
		{% if user %}
		<li class="user-info"><span class="avatar"><img src="{{user.avatar}}" alt=""></span><span class="username">{{user.username}}</span></li>
		<li><a href="javascript:;" id="J_out">退出</a></li>
		{% script %}
			$('#J_out').click(function(){
				$.ajax({
					url: '/api/logout',
					type: "POST",
					data: {},
					success:function(data) {
						location.reload();
					},
					error:function() {
						console.log("error");
						window.location.href='/user/login';
					}
				})
			})
		{% endscript %}
		{% endif %}
	</ul>
	<div class="cl"></div>
	</div>
</div>