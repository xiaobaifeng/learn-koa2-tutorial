const Koa = require('koa')
const app = new Koa()

const address = require('address')
const opn = require('opn')

app.use(async (ctx, next) => {
	await next()
	ctx.response.type = 'text/html'
	ctx.response.body = '<h1>Hello World</h1>'
})

app.listen(3000, () => {
	let localhost = address.ip();
	let url = 'http://' + (localhost || 'localhost') + ':' + '3000'
	console.log('server is running at ', '\033[36;4m' + url + '\033[0m')
	opn(url)
})
