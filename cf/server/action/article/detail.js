var marked = require('marked');
module.exports = function(req, res){

	var data={};

	var id=req.params.id;
	Model('Article').find({_id:id},function(err,article){
		if(article&&article.length>0){
			// marked转换成html
			article[0].content = marked(article[0].content)
			data={
	    	    title:'文章详情',
	    	    article:article[0]
	    	};
		}

		console.log('returnData:................................')
		console.log(data)
		
	    // 返回用户信息
    	if(req.getLoginUser()){
    		data.user=req.getLoginUser();
    	}

	    res.render('cf/page/article/detail.tpl',data);
	})

	 
};

