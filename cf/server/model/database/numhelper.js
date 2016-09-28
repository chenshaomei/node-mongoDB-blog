module.exports = function(req,res){

	var id=req.body.id;
	var data={};
	var dataList =function(){
		Model('Article').findById(id,function(err,article){
			data.title=article.title;
			data.content=article.content;
			data.id=article.id;
			console.log('......................')
			console.log(data)
			console.log('......................')
			
		})
		return data;
	}

	console.log('--======---------------=============')
	console.log(dataList)
	console.log('--======---------------=============')

	return dataList;
}
