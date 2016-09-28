module.exports = function(req, res){

	if(req.getLoginUser()){
        res.redirect('/');
        res.end();
        return;
    }
	var data={};
    data.title='登陆';
	res.render('cf/page/user/login.tpl',data); 
};

module.exports.post=function(req,res){

	var user=req.body;
     //不需要创建，已有'User'这个表，直接对它操作 调用方法
     var data={};
     Model('User').findOne(user,function(err,user){
         console.log(user)
        if(user){
            req.setLoginUser(user);//将用户信息保存在session中
            data.msg='登陆成功';
	        data.code=0;
            
        }else{
        	data.msg='登陆失败';
	        data.code=1;
        }
        res.send(data);
    })
}