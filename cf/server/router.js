var apiResponse=require('./lib/model/api-res.js')();
var app_user = require('./lib/global/app-user.js');
var html404 = require('./lib/global/html404.js');


// var apiRes=require('./lib/model/api-res.js')();

module.exports = function(router){
    // you can add app common logic here
    // router.use(function(req, res, next){
    // });

    // also you can add custom action
    // require /spa/some/hefangshi
    // router.get('/some/:user', router.action('api'));
    
    // or write action directly
    // router.get('/some/:user', function(res, req){});
    router.use(app_user());
    // api响应
    router.use('/api',apiResponse);
    // router.use(html404());


    // router.use('/apis',apiRes);



    router.route('/article/detail/:id')
        .get(router.action('article/detail'));

    router.route('/article/edit/:id')
        .get(router.action('article/add'));

    // 注册
    router.route('/reg')
        .post(router.action('user/register').post);
    // 登陆
    router.route('/login')
        .post(router.action('user/login').post);

    // router.route('/article/list/:pageNum')
    //     .get(router.action('article/list'));




    // // a restful api example
    // router.route('/book')
    //     // PUT /cf/book
    //     .put(router.action('book').put)
    //     // GET /cf/book
    //     .get(router.action('book'));

    // router.route('/book/:id')
    //     // GET /cf/book/1
    //     .get(router.action('book').get)
    //     // DELETE /cf/book/1
    //     .delete(router.action('book').delete);

    

};