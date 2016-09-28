
{% extends 'cf:page/layout.tpl'%}

{% block content %}
{% require "cf:static/css/tomorrow-night-bright.css" %}

{% widget 'cf:widget/common/header.tpl'%}

<div class="add-article">
	<div class="inner">
		<form action='/api/addArticle'  method="post" enctype="multipart/form-data" role="form">
			<div class="write-item">
				<p>方向：</p>
				<input class="type" type="text" name="direction" value={{article.direction}}>
			</div>
			<div class="write-item">
				<p>类型：</p>
				<input class="type" type="text" name="type" value={{article.type}}>
			</div>
			<div class="write-item">
				<p>标题：</p>
				<input class="title" type="text" name="title" value={{article.title}}>
			</div>
			<div class="write-item">
				<p>简介：</p>
				<textarea class="intro" name="intro" id="intro" cols="30" rows="10">{{article.intro}}</textarea>
			</div>
			<div class="write-item">
				<p>文章海报：</p>
				<div class="file">上传文章海报<input type="file" name="poster" class="filebtn" id="fileElem" multiple accept="image/*"></div>					
            	<div class="showfile" id="fileList">
            	    <img src="{{ article.poster }}" alt="">
				</div>
			</div>
			<div class="write-item">
				<p>内容：</p>
				<div>
				<div class="txt-area">
					<textarea id="text-input" class="text-input" name="content" oninput="this.editor.update()" rows="6" cols="60">
						{% autoescape false %}
    	    	        {{article.content}}
    	    	    	{% endautoescape %}
    	    		</textarea>
				</div>
    			<div id="preview" class="preview"></div>
    			<div class="cl"></div>
    			</div>
	    	</div>
	    	<input type="hidden" name="id" value="{{ article.id }}"/>
    	    <input class="submit" type="submit" value="提交">
    	    <a class="add-cancel" href="javascript:history.go(-1);">取消</a>
    	</form>
    </div>
</div>

{% widget 'cf:widget/common/footer.tpl'%}

{% require "cf:static/plugin/ueditor/ueditor.config.js" %}
{% require "cf:static/plugin/ueditor/ueditor.all.min.js" %}
{% require "cf:static/plugin/ueditor/lang/zh-cn/zh-cn.js" %}
{% require "cf:static/js/marked.min.js" %}

{% require "cf:static/js/highlight.pack.js" %}

{% require "cf:static/common/add.js" %}


{% endblock %}


