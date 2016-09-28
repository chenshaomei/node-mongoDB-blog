var cf_conf = require(yog.ROOT_PATH+'/conf/cf-config.js');

module.exports.session = {
    secret: 'yog',
    resave: false,
    saveUninitialized: true,
    cookie:{maxAge:cf_conf.timeoutConf.sessionTimeout*1000}//session有效时间
};

if(cf_conf.miscConf.domain) {
	module.exports.session.cookie.domain = cf_conf.miscConf.domain;
}

module.exports.cookieParser = {
    secret: 'yog'
};
