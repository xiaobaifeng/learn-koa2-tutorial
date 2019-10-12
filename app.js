const Koa = require('koa')
const app = new Koa()

app.use(async (ctx, next) => {
	await next()
	ctx.response.type = 'text/html'
	ctx.response.body = '<h1>Hello World</h1>'
})

app.listen(3000, () => {
	console.log('server is running at ', '\033[36;4mhttp://localhost:3000\033[36;4m')
})
