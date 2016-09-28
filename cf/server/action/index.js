var dataIndex = require('../model/index.js');

module.exports = function(req, res){

	var data={};
	

	dataIndex.getData({
        pageNum:1,
        pageSize:5,
	},function(err,data){
		
	    if(data.articles && data.articles.length>0){
			data.articles.forEach(function(item){
				var date=new Date(parseFloat(item.createDat));
				item.createDat=date.getFullYear()+'-'+(date.getMonth()+1)+'-'+date.getDate();
				
			})
			
	    }
	    // 返回用户信息
	    if(req.getLoginUser()){
	    	data.user=req.getLoginUser();
	    }
	    
	    data.title='首页';
	    
	    res.render('cf/page/index.tpl',data);
	
	})   
};








