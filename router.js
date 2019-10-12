// 注意 require('koa-router')返回的是函数:
const router = require('koa-router')()
const HomeController = require('./controller/home')

module.exports = (app) => {
    
    /** 为所有请求设置跨域头 *: 通配符 
        router.all('/*', async (ctx, next) => {
            // *代表允许来自所有域名请求
            ctx.set("Access-Control-Allow", "*");
            // 其他一些设置
            await next();
        }) 
    */
    router.get('/', HomeController.index)
    router.get('/home', HomeController.home)
    router.get('/home/:id/:name', HomeController.homeParams)
    router.get('/user', HomeController.use)
    router.post('/user/register', HomeController.register)
  
    // 调用路由中间件
    app.use(router.routes())
        .use(router.allowedMethods())
}