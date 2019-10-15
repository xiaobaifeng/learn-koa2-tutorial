const Koa = require('koa')

const app = new Koa()
const middleware = require('./middleware')
const router = require('./router')
const listener = require('./listener')

middleware(app)
router(app)
listener(app)