{% extends 'cf:page/layout.tpl' %}

{% block content %}
{% widget "cf:widget/common/header.tpl"%}
<div class="article-list">
	<div class="inner">
		
<!-- 		<ol class="breadcrumb">
	        <li><a href="/">首页 /</a></li>
	        <li class="active">文章列表</li>
	    </ol> -->
		
		<div class="filter">
			<ul class="direction-ul" id="direction_ul">
				<li><span>方向：</span></li>
				<li class="cdt {% if searchCondition.direction==''%}active{% endif %}"><a href="/article/list">全部</a></li>
				{% for drt in directionList %}
				<li class="cdt {% if searchCondition.direction==drt%}active{% endif %}"><a href="/article/list?direction={{drt}}">{{drt}}</a></li>
				{% endfor %}
			</ul> 
			<ul class="type-ul">
				<li><span>分类：</span></li>
				<li class="type-all" id="type_all"><a href="/article/list{% if searchCondition.direction %}?direction={{searchCondition.direction}}{% endif %}">全部</a></li>
				{% for typ in typeList %}
				<li><a href="/article/list?{% if searchCondition.direction%}direction={{searchCondition.direction}}&{% endif %}type={{typ}}&index={{ loop.index+1 }}">{{typ}}</a></li>
				{% endfor %}
			</ul>
		</div>
		<input type="hidden" id="activeValue" value="{{searchCondition.conditionValue}}">
		<input type="hidden" id="activeKey" value="{{searchCondition.conditionKey}}">
		<div class="article-list">
			<div class="left">
				<h3 class="">文章列表</h3>
				<ul class="list">
					{% if articles %}
					 {% for article in articles%}
				
					<li>
						<a href="/article/detail/{{article.id}}">
							<div class="item-img"><img src="{{article.poster}}" alt=""></div>
							<h6 class="item-til">{{article.title}}</h6>
							<span class="item-date">{{article.createDat}}</span>
						</a>
					</li>
					 {% endfor %}
					 {% else %}
					 <li class="nodata">
						暂无相关记录哦~
					</li>
					 {% endif %}
				</ul>
			</div>
			<div class="cl"></div>
		</div>
		<div class="pages">                 
			<ul>
				<li class="{% if pageNum<=1 %}no-page{% endif %}"><a href="{% if pageNum<=1 %}javascript:;{% else %}/article/list/?{% if searchCondition.direction%}direction={{searchCondition.direction}}{% endif %}&{% if searchCondition.type%}type={{searchCondition.type}}&{% endif %}page={{pageNum-1}}{% endif %}">prev</a></li>
				

				{% for page in pageList %}

				<li><a class="{% if loop.index==pageNum %}active{% endif %} " href="/article/list/?{% if searchCondition.direction%}direction={{searchCondition.direction}}{% endif %}&{% if searchCondition.type%}type={{searchCondition.type}}{% endif %}&page={{loop.index}}">{{loop.index}}</a></li>
				{% endfor %}

				
				<li class="{% if pageNum>=totalPage %}no-page{% endif %}"><a href="{% if pageNum>=totalPage %}javascript:;{% else %} /article/list/?{% if searchCondition.direction%}direction={{searchCondition.direction}}{% endif %}{% if searchCondition.type%}type={{searchCondition.type}}&{% endif %}page={{pageNum*1 + 1}}{% endif %}">next</a></li>
			</ul>
		</div>
	</div>
</div>

{% require "cf:static/common/list.js" %}

{% endblock %}