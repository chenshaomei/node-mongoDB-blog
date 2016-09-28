module.exports = function(req, res){
  
	var data={};
	data.title='发布文章';

	// 需要登陆才能访问
	if(!req.getLoginUser()){
        res.redirect('/user/login');
        res.end();
        return;
    }
    // 返回用户信息
    if(req.getLoginUser()){
    	data.user=req.getLoginUser();
    }

    // 有id的即为修改状态
    var id=req.params.id;
    if(id){
    	Model('Article').findById({'_id':id},function(err,article){
    		if(article){
    			data.article=article;
    		}
    		res.render('cf/page/article/add.tpl',data); 
    	})
    
    }else{
    	res.render('cf/page/article/add.tpl',data); 
    }
	
};