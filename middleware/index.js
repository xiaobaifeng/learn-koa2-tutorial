const path = require('path')
const bodyParser = require('koa-bodyparser')
const nunjucks = require('koa-nunjucks-2')
const staticFiles = require('koa-static')
const ip = require('ip')
const miSend = require('./mi-send')
// 引入日志中间件
const miLog = require('./mi-log')

module.exports = (app) => {
    // 注册中间件
    // 将配置中间件的参数在注册中间件时作为参数传入
    app.use(miLog({
        env: app.env,  // koa 提供的环境变量
        projectName: 'koa2-tutorial',
        appLogLevel: 'debug',
        dir: 'logs',
        serverIp: ip.address()
    }))

    // 指定 public目录为静态资源目录，用来存放 js css images 等
    app.use(staticFiles(path.resolve(__dirname, "../public")))

    app.use(nunjucks({
        ext: 'html',
        path: path.join(__dirname, '../views'),// 指定视图目录
        nunjucksConfig: {
            trimBlocks: true // 开启转义 防Xss
        }
    }));

    app.use(bodyParser())
    app.use(miSend())
}
