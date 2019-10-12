const Koa = require('koa')
const bodyParser = require('koa-bodyparser')
const app = new Koa()

const router = require('./router')
const listener = require('./listener')

app.use(bodyParser())

router(app)
listener(app)