const Koa = require('koa')
const app = new Koa()
const listener = require('./listener')

app.use(async (ctx, next) => {
	await next()
	ctx.response.type = 'text/html'
	ctx.response.body = '<h1>Hello World</h1>'
})

listener(app);