var mua = ['windows ce','blackberry','sonyericsson','nokia','webos','iphone','ipod','android','symbian','maemo','opera mini','opera mobile','palm','symbian','smartphone','midp','wap','vodafone','o2','eplus','e-plus','pocket','kindle','mobile','pda','psp'];

module.exports = function(req, res, next){

    req.isMobile = res.locals.isMobile = false;
    var ua = req.header('user-agent');
    if(ua){
        ua = ua.toLowerCase();
        for(var i in mua){
            if(ua.indexOf(mua[i]) !== -1){
                req.isMobile = res.locals.isMobile = true;
                break;
            }
        }
    }

    req.isSSL = res.locals.isSSL = Boolean(req.client.authorized !== undefined);

    req.isAjax = res.locals.isAjax = req.xhr;

    next();
};