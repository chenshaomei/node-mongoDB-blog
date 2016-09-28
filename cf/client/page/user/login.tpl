{% extends 'cf:page/layout.tpl'%}
{% block content %}
{% widget 'cf:widget/common/header.tpl'%}

	<div class="login users">
		<div class="inner">
			<div class="form">
				<div class="form-inn">
					<div class="form-title"><h3>登陆</h3><p>还没有注册？请点击此处<a href="/user/register">注册</a></p></div>
					<div class="form-content">
						<div>
							<p class="item-til">账&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp号：</p>
							<div class="item-ipt"><input id="username" type="text"></div>
						</div>
						<div>
							<p class="item-til">密&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp码：</p>
							<div class="item-ipt"><input id="password" type="password"></div>
						</div>
						<div class="submit"><button id="login_btn">登陆</button></div>
					</div>
				</div>
			</div>
		</div>
	</div>
	<div class=" login-tip success-tip">登陆成功！</div>
	<div class=" login-tip err-tip">登陆失败！请重新登录~</div>
	
{% widget 'cf:widget/common/footer.tpl'%}

{% require "cf:static/js/jquery-1.10.2.js" %}
{% require "cf:static/common/login.js" %}

{% endblock %}