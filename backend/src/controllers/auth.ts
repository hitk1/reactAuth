import koaRouter from 'koa-router'

import { Generic } from "../generic.class";

class Auth extends Generic {

    private koaRoute: koaRouter
    api: string
    constructor(){
        super()
        this.koaRoute = new koaRouter()
        this.api = 'auth'
    }

    startRoute(koaRouter: koaRouter) {
        koaRouter.get(`/${this.api}`, async (ctx) => {
            
            ctx.body = {message: 'acessado!'}
        })
    }
}

export default new Auth()