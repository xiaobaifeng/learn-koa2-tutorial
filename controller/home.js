module.exports = {
    index: async(ctx, next) => {
        await ctx.render('home/index')
    },
    home: async(ctx, next) => {
        console.log(ctx.request.query)
        console.log(ctx.request.querystring)
        ctx.response.body = '<h1>HOME page</h1>'
    },
    homeParams: async(ctx, next) => {
        console.log(ctx.params)
        ctx.response.body = '<h1>HOME page /:id/:name</h1>'
    },
    login: async(ctx, next) => {
        await ctx.render('home/login',{
            btnName: 'GoGoGo'
        })
    },
    register: async(ctx, next) => {
        let {
            name,
            password
        } = ctx.request.body

        let res 
        if(name == 'ikcamp' && password == '123456'){
            res = {
                status: 0,
                data: {
                    title: "个人中心",
                    content: "欢迎进入个人中心"
                }
            }
        }else{
            res = {
                status: -1,
                data: {
                    title: '登录失败',
                    content: "请输入正确的账号信息"
                }
            }
        }

        if(res.status == "-1"){
            await ctx.render("home/login", res.data)
        }else{
            ctx.state.title = "个人中心"
            await ctx.render("home/success", res.data)
        }
    }
}