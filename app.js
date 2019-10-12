const Koa = require('koa')
const app = new Koa()

const address = require('address')
const opn = require('opn')

app.use(async (ctx, next) => {
	let stime = new Date().getTime()
	await next()
	let etime = new Date().getTime()
	ctx.response.type = 'text/html'
	ctx.response.body = '<h1>Hello World</h1>'
	console.log(`请求地址：${ctx.path}，响应时间：${etime - stime}ms`)
})

app.use(async (ctx, next) => {
	console.log('中间件1 doSomething')
	await next()
	console.log('中间件1 end')
})

app.use(async (ctx, next) => {
	console.log('中间件2 doSomething')
	console.log('中间件2 end')
})

app.use(async (ctx, next) => {
	console.log('中间件3 doSomething')
	await next()
	console.log('中间件3 end')
})

app.listen(3000, () => {
	let localhost = address.ip();
	let url = 'http://' + (localhost || 'localhost') + ':' + '3000'
	console.log('server is running at ', '\033[36;4m' + url + '\033[0m')
	opn(url)
})
