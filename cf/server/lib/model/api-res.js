
var apiConf=require('./api-conf.js')();

module.exports = function(){

	return function(req, res, next){

		var urlReq=req.path;//经过路由后的请求的路径
		res.setHeader('content-type',"application/json");
		if(apiConf[urlReq].handleMethod){
			apiConf[urlReq].handleMethod(req,res,function(ret){

				if(urlReq=='/addArticle'){
					console.log(ret)
					if(ret.id){
						res.redirect('/article/detail/'+ret.id);
					}else{

						res.redirect('/');
					}
				}else{
					res.send({data:ret});
					res.end();
				}

			},next);
		}
	}
}
