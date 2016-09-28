
var mongoose = require('mongoose'),
    Schema = mongoose.Schema,
    models = require(yog.ROOT_PATH+'/db/models.js');
var settings = require(yog.ROOT_PATH+'/settings.js');   
 
mongoose.connect(settings.url);
mongoose.model('User', new Schema(models.User));
mongoose.model('Article', new Schema(models.Article));
global.Model = function (type) {
        return mongoose.model(type);;
    }