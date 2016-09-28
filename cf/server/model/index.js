module.exports.getData = function(option,cb){

		Model('Article').count({},function(err,count){//获取总条数	
    	    var totalPage=Math.ceil(count/option.pageSize);//总页数 
    	    option.pageNum=option.pageNum>=totalPage?totalPage:option.pageNum;
    	    Model('Article').find({}).sort({'createDat':-1}).skip((option.pageNum-1)*option.pageSize).limit(option.pageSize).exec(function(err,articles){
    	    	var data={
    		        totalPage:totalPage,
    		        pageNum:option.pageNum,
    		        pageSize:option.pageSize,
    		        articles:articles
    		    };
    	    	cb(err,data)
    	    });
	    }) 
	
};

