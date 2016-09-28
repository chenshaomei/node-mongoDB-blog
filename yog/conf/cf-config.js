
// api address configuration
var app_model_conf = {
    useLocalProxy: false,
    urlPrefix: 'portalzserver',
    proxyAddress: '10.1.20.76',
    proxyPort: 8888,

    host: '10.1.20.76',
    port: 27017,
    // host: '10.1.1.55',
    // port: 8082,

    reqAllFromServer: true,
    reqFromServers: [
        // '/ctl/sendVerify',
        // '/ctl/confirmVerify',
        // '/ctl/checkPhoneDuplicate',
        // '/ctl/registZcCust',
        // '/ctl/loginZcCust',
        // '/ctl/inquiryZcMoneyflow',
        //'/ctl/queryZcCustAmount',
        //'/ctl/inqueryZcInv'
        // '/ctl/inquiryZcBannerList',
        // '/ctl/inquiryZcBusiness',
        // '/ctl/inquiryZcNewsList'*/
    ]
};


// log配置参数
var misc_conf = {
    domain: "",
    logLevel: 4 //控制Log输出的日志级别 4: (线上程序正常运行时的配置)
};

// 有效时间（session\api）
var time_out_conf = {
    sessionTimeout: 600, //second
    apiTimeout: 50000 //ms
};

module.exports = {
    timeoutConf: time_out_conf,
    miscConf: misc_conf
};