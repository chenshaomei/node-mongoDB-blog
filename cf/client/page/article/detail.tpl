{% extends 'cf:page/layout.tpl'%}

{% block content %}
{% require "cf:static/css/tomorrow-night-bright.css" %}
{% require "cf:static/css/markdown.css" %}

{% widget 'cf:widget/common/header.tpl'%}

<div class="article-details">
	<div class="inner">
		<ol class="breadcrumb">
	        <li><a href="/">首页 &nbsp &gt; &nbsp </a></li>
	        <li><a href="/article/list">文章列表 &nbsp &gt; &nbsp </a></li>
	        <li class="active">{{article.title}}</li>
	    </ol>
	    {% if user %}
		<div class="operate-btns"><a href="/article/edit/{{article.id}}">编辑</a><a id="delete_art" href="javascript:;">删除</a></div>
		{% endif %}
	    <div>
	    	<h2 class="article-title">{{article.title}}</h2>
	    	<div class="details-txt">
	    		{% autoescape false %}
					{{article.content}}
				{% endautoescape %}
	    		
			</div>
	    </div>
	</div>
	<div class=" popup-tip success-tip">删除成功！</div>
	<div class=" popup-tip err-tip">删除失败！请重试 </div>

	<input id="art_id" type="hidden" value={{article.id}}>
</div>
{% widget 'cf:widget/common/footer.tpl'%}

{% require "cf:static/common/detail.js" %}
{% require "cf:static/js/highlight.pack.js" %}
{%script%}
 	hljs.initHighlightingOnLoad();
	$(document).ready(function() {

	  $('pre').each(function(i, block) {
	    hljs.highlightBlock(block);
	  });
	});
 {%endscript%}

{% endblock %}



