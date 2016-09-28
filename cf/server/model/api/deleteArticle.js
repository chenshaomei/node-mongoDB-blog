module.exports=function(req,res,cb,next){
	var id=req.body.id;
	console.log(req.body)
	var data={};
	Model('Article').remove({'_id':id},function(err){
		if(err){
			data.msg='删除失败，请重试！';
			data.code=1;
		}else{
			data.msg='删除成功';
			data.code=0;
		}

		cb(data);
	})
}