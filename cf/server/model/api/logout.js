module.exports=function(req,res,cb,next){
	
	req.setLoginUser(null);
	cb({trans:{isErr:false, errorCode: null},data: null})
}