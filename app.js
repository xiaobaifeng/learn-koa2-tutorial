const Koa = require('koa')
// 注意 require('koa-router')返回的是函数:
const router = require('koa-router')();
const app = new Koa()
const listener = require('./listener')

// 为所有请求设置跨域头 *: 通配符
router.all('/*', async (ctx, next) => {
	// *代表允许来自所有域名请求
	ctx.set("Access-Control-Allow", "*");
	// 其他一些设置
	await next();
})
// 添加路由
router.get('/', async (ctx, next) => {
	ctx.response.body = `<h1>Index page</h1>`
})
router.get('/home', async (ctx, next) => {
	ctx.response.body = `<h1>Home page</h1>`
})
router.get('/404', async (ctx, next) => {
	ctx.response.body = `<h1>404 page</h1>`
})

// 调用路由中间件
app.use(router.routes())

listener(app);