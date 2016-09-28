module.exports.getList=function(option,cb){
	
	var pageSize=4;
	var pageNum=1;
	//如果小于等于0 只有一页
    pageNum=pageNum<=0?1:pageNum;
    // var keyword = req.query.keyword;//查询字符串
    // var query = new RegExp(keyword,"i");

    Model('Article').count({},function(err,count){//获取总条数
    	console.log(count)
        var totalPage=Math.ceil(count/pageSize);//总页数
        console.log(totalPage)
        
        pageNum=pageNum>=totalPage?totalPage:pageNum;
        Model('Article').find({}).skip((pageNum-1)*pageSize).limit(pageSize).exec(cb);
    })

}

