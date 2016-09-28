{% extends 'cf:page/layout.tpl' %}

{% block content %}
     
     	{% widget "cf:widget/common/header.tpl"%}
        <div class="wrap home">
            <div class="banner">
                <ul>
                    <li><a href="#"><img src="../static/images/b1.png" alt=""></a></li>
                </ul>
            </div>
            <div class="inner index-article">
                <div class="new-artl"><span class="new-til">最新文章</span> <a class="more" href="/article/list">更多>></a></div>
                <ul class="article-ul">
                    {% for article in articles%}
                    <li><a href="/article/detail/{{article.id}}">
                        <div class="item-img"><img src="{{article.poster}}" alt=""></div>
                        <div class="item-txt">
                            <h3>{{article.title}}</h3>
                            <p>{{article.intro}}</p>
                        </div>
                        <span class="date">{{article.createDat}}</span>
                    </a></li>
                    {% endfor %}
                </ul>
            </div>
        </div>

        {% widget "cf:widget/common/footer.tpl"%}
     
     

     {% require "cf:static/js/jquery-1.10.2.js" %}
     {% require "cf:static/js/index.js" %}
{% endblock %}