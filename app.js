const Koa = require('koa')
// 注意 require('koa-router')返回的是函数:
const router = require('koa-router')();
const app = new Koa()

const address = require('address')
const opn = require('opn')

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

app.listen(3000, () => {
	let localhost = address.ip();
	let url = 'http://' + (localhost || 'localhost') + ':' + '3000'
	console.log('server is running at ', '\033[36;4m' + url + '\033[0m')
	opn(url)
})
