{% extends 'cf:page/layout.tpl'%}
{% block content %}
{% widget 'cf:widget/common/header.tpl'%}
	<div class="register users">
		<div class="inner">
			<div class="form" >
				<div class="form-inn">
					<div class="form-title"><h3>注册</h3></div>
					<div class="form-content">
						<div>
							<p class="item-til">账&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp号：</p>
							<div class="item-ipt"><input id="username" type="text"></div>
						</div>
						<div>
							<p class="item-til">密&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp码：</p>
							<div class="item-ipt"><input id="password" type="password"></div>
						</div>
						<div class="avatar">
							<p class="item-til">头&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp像：</p>
							<div class="item-ipt"><img id="avatar_show" src="/client/static/images/avatar.png" alt=""><input id="avatar" type="file"></div>
						</div>
						<div class="submit">
							<button id="reg_btn">注册</button>
						</div>
					</div>
				</div>
			</div>
		</div>
	</div>
{% widget 'cf:widget/common/footer.tpl'%}

{% require "cf:static/js/jquery-1.10.2.js" %}
{% require "cf:static/common/reg.js" %}

{% endblock %}