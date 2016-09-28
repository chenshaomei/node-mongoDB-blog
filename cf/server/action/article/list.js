var dataList = require('../../model/list.js');

var path = require('path');
var url = require('url');

module.exports = function(req, res){
	var data={};
	

	var urlObj=url.parse(req.url,true);
	var pageSize=8;
	 var pageNum=urlObj.query.page||1;
	// var pageNum=parseInt(req.params.pageNum)||1;//req.params.pageNum获取路由带的参数

	//如果小于等于0 只有一页
    pageNum=pageNum<=0?1:pageNum;
    
    console.log(urlObj);
    var type = urlObj.query.type;//查询字符串
    var direction = urlObj.query.direction;//查询字符串
    // var keywordQuery = new RegExp(type,"i");
    // var directionQuery = new RegExp(direction,"i");
    var key = urlObj.query.type?'type':'direction';
    var query = type||direction;

    console.log(key)
    console.log(query)

    var option=null;

	if(direction && !type){
		option={'$or':[{'type':query},{'direction':query}]};
	     
	 }else if(!direction && type){
	 	option={'type':query};
	 
	 }else if(direction && type){
	 	option={'direction':direction,'type':query};
	 	
	 }else if(!direction && !type){
	 	option={} 
	 }

	 checkModel(option);

	function checkModel(option){
		Model('Article').count(option,function(err,count){//获取总条数	
    	    var totalPage=Math.ceil(count/pageSize);//总页数 
    	    pageNum=pageNum>=totalPage?totalPage:pageNum;
    	    Model('Article').find(option).sort({'createDat':-1}).skip((pageNum-1)*pageSize).limit(pageSize).exec(function(err,articles){
			
			    data={
    		        title:'文章列表',
    		        totalPage:totalPage,
    		        pageNum:pageNum,
    		        pageSize:pageSize,
    		        articles:articles
    		    };
    		    // 返回用户信息
    			if(req.getLoginUser()){
    				data.user=req.getLoginUser();
    			}
    		    var typeList=[],directionList=[],count=0;;
	
			    if(data.articles && data.articles.length>0){

					data.articles.forEach(function(item){
						var date=new Date(parseFloat(item.createDat));
						item.createDat=date.getFullYear()+'-'+(date.getMonth()+1)+'-'+date.getDate();
						
						// 只有方向，没有类型 或 方向、类型同时没有时
						// if(direction && !type||!direction && !type){
						// 	if(typeList.indexOf(item.type)==-1&&item.type){
						// 		typeList.push(item.type);
						// 	}
						// }
					})
					
					// 页数数组
					data.pageList=[];
			    	for(var i=0;i<data.totalPage;i++){
			    		data.pageList.push(i);
			    	}
			    }
			    // 当前查询条件
			    data.searchCondition={'direction':direction,'type':type}
	
			    // 获取方向
			    Model('Article').find({},function(err,atcs){
					
					if(atcs&&atcs.length>0){
						atcs.forEach(function(item){
							
							if(directionList.indexOf(item.direction)==-1&&item.direction){
								console.log(item.direction)
								directionList.push(item.direction);
							}
							// 没有方向，只有类型时 或者 没方向也没类型
							if(!direction && type||!direction && !type){
								if(typeList.indexOf(item.type)==-1&&item.type){
									typeList.push(item.type);
								}
							}
							
						})
					}
	
					data.directionList=directionList;
					data.typeList=typeList;
	
					if(direction && type ||direction && !type){// 方向、类型都有 或者 只有方向，没有类型
						count++;
						if(count==2){
							res.render('cf/page/article/list.tpl',data);
						}
					}else if(!direction && type||!direction && !type){ // 没有方向，只有类型时 或者 没方向也没类型
						res.render('cf/page/article/list.tpl',data);
					}
				
					
				})
				// 方向和类型同时存在时 或者 只有方向，没有类型
			    if(direction && type ||direction && !type){
			    	Model('Article').find({'direction':direction},function(err,atcs){
						
						if(atcs&&atcs.length>0){
							atcs.forEach(function(item){
								if(typeList.indexOf(item.type)==-1&&item.type){
									typeList.push(item.type);
								}
							})
						}
		
						data.typeList=typeList;

			    		count++;
						if(count==2){
							res.render('cf/page/article/list.tpl',data);
						}
						
					})
				}
					
			});
	    }) 
	}
	
};

