var fs = require("fs");

module.exports = function(req, res){
	var data={};
	data.title='注册';
	res.render('cf/page/user/register.tpl',data); 
};

module.exports.post = function (req, res) {
	// 解析请求体
	var form = new yog.multiparty.Form();

	form.parse(req,function(err, fields, files){
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
		if(files.avatar){
			var sourceSrc=files.avatar[0].path;
			var targetSrc='/static/cf/static/uploads/'+files.avatar[0].originalFilename
			
			copy(sourceSrc, targetSrc);
		}

		// 保存的用户信息
		var user={
			username:fields.username[0],
			password:fields.password[0],
			avatar:targetSrc|| '/static/cf/static/images/avatar.png'
		};

		var data={};
		new Model('User')(user).save(function(err,user){ 
 		    if(err){
 		      data.msg='注册失败';
 		      data.code=1;
 		    }else{
 		      data.msg='注册成功';
 		      data.code=0;
 		    }
 		    res.send(data);
 		})
		
	})

};
