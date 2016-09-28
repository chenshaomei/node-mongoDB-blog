/**
 * @file YOG2 框架启动入口
 * @author fis@baidu.com
 */

'use strict';

var yog = require('yog2-kernel');

var settings = require('./settings');   
var session = require('express-session');
var MongoStore = require('connect-mongo')(session);

var app = yog.bootstrap({
    rootPath: __dirname
}, function () {
    console.log('plugins load completed');
});
require('./db');//导入db模块

// 连接会话（数据库）
app.use(session({
  secret: settings.cookieSecret,//secret 用来防止篡改 cookie
  key: settings.db,//key 的值为 cookie 的名字
  cookie: {maxAge: 1000 * 60 * 60 * 24 * 30},//设定 cookie 的生存期，这里我们设置 cookie 的生存期为 30 天
  resave:false,
  saveUninitialized:true,
  store: new MongoStore({ //设置它的 store 参数为 MongoStore 实例，把会话信息存储到数据库中，以避免重启服务器时会话丢失
    db: settings.db,
    host: settings.host,
    port: settings.port,
    url: settings.url
  })
}));

app.set('port', process.env.PORT || 8085);
app.disable('x-powered-by');

var server = yog.server = app.listen(app.get('port'), function () {
    console.log('Yog server listening on port ' + server.address().port);
});

server.on('connection', function (socket) {
    // disable nagle
    socket.setNoDelay(true);
    // keep-alive timeout
    socket.setTimeout(60 * 1000);
});
