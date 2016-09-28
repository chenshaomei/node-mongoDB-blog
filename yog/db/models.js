var mongoose = require('mongoose');
var ObjectId = mongoose.Schema.Types.ObjectId;
module.exports = {
    User:{ //设置User的数据模型 
        username:{type:String,required:true},//用户名
        password:{type:String,required:true},//密码
        avatar:String //头像
    },
    Article: { //设置文章的数据模型
        user:{type:ObjectId,ref:'User'}, //用户
        direction:String,
        type:String,
        title: String, //标题
        poster:String,
        intro:String,
        content: String, //内容
        createDat:String,
        createAt:{type: Date, default: Date.now} //创建时间
    }
}