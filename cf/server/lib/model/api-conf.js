var sendNum = require('../../model/api/sendNum.js');
var addArticle = require('../../model/api/addArticle.js');
var logout = require('../../model/api/logout.js');
var deleteArticle = require('../../model/api/deleteArticle.js');

module.exports = function() {
	return {
		'/addArticle':{
			handleMethod:addArticle
		},
		'/logout':{
			handleMethod:logout
		},
		'/deleteArticle':{
			handleMethod:deleteArticle
		}
	}
}