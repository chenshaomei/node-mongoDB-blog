var fs = require("fs");
var path = require('path');
var uuid = require('node-uuid');

module.exports=function(req,res,cb,next){

   var form = new yog.multiparty.Form();

   	var paths=yog.ROOT_PATH+'/static/cf/static/uploads/';
    // form.uploadDir=paths;
    form.parse(req, function (err, fields, files) {

    	var article={
    		'direction':fields.direction[0]||'其他',
    		'type':fields.type[0],
    		'title':fields.title[0],
    		'intro':fields.intro[0],
    		'content':fields.content[0]
    	}
    	console.log(fields);
    	console.log(files);
   	
    	// 更改上传文件名（防止重名）
		var fullFilePath=function(filepath){
			var pad = function (value) {
    			return (value < 10 ? '0' : '') + value;
			};
			var now = new Date();
			var year = pad(now.getYear());
			var month = pad(now.getMonth()+1);
			var date = pad(now.getDate());
	
			var id = uuid.v4();
	
			var filePath = year+month+date+"ig"+id+path.extname(filepath);
			return filePath;
		}

 		// 获得文件的临时路径
		var tmp_path = files.poster[0].path;
		// 指定文件上传后的目录 - 示例为"uploads"目录。
		var fileName= fullFilePath(files.poster[0].originalFilename);
		var target_path = paths+ fileName;
		
		article.poster= 'http://' + req.headers.host+'/static/cf/static/uploads/'+fileName;
		article.createDat=Date.now();
		var data={};

		// 复制文件 到上传后的目录
		function copy(src, target) {
		    var fs = require('fs');
		    fs.readFile(src, function (err, data) {
		        if (err) {
		            console.error(err);
		        }
		        fs.writeFile(target, data, function (err) {
		            if (err) {
		                console.error(err);
		            } else {
		                console.log('Copy success.');
		            }
		        });
		    });
		}

		if(files.poster[0].originalFilename){		
			copy(tmp_path, target_path);
		}

		// 更新对象
		var updateObj={
			'direction':fields.direction[0]||'其他',
    		'type':fields.type[0],
    		'title':fields.title[0],
    		'intro':fields.intro[0],
    		'content':fields.content[0]
		}
		if(files.poster[0].originalFilename){
			updateObj.poster=article.poster;
		}

		// 如果有id则是修改更新
		var id=fields.id[0];
		
 		if(id){
 			 //修改更新数据  Model.update(查询条件,更新对象,callback); {_id:id}根据_id查找 修改更新 标题和内容等
 			Model('Article').update({'_id':id},{$set:updateObj},function(err){
 				if(err){
			   	data.msg='提交失败';
			   }else{
			   	data.msg='提交成功';
			   }
			   console.log(id)
			   data.id=fields.id[0];
			   console.log(data)
			   cb(data);
 			})
 		}else{
 			// 保存数据
 			article.user = req.session.user._id;
				new Model('Article')(article).save(function(err,article){
			    if(err){
			    	data.msg='提交失败';
			    }else{
			    	data.msg='提交成功';
			    	
			    }
				data.article=article;
			    cb(data);
			})
		}

    });
}

