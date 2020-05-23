import koaRouter from 'koa-router'

import { Generic } from "../generic.class";
import { AuthService } from '../models/auth/auth.service'
import { IAuthUserAuthentication } from '../models/auth/auth.interfaces';


class AuthController extends Generic {

    api: string
    private authService: AuthService
    constructor() {
        super()
        this.api = 'auth'
        this.authService = new AuthService()
    }

    startRoute(koaRouter: koaRouter) {
        koaRouter.post(`/${this.api}`, async (ctx: any, next: any) => {

            await this.authService.store(ctx.request.body as IAuthUserAuthentication)
                .then(validResponse => ctx.body = this.validResponse(validResponse))
                .catch(error => {
                    ctx.status = 401
                    ctx.body = this.invalidResponse(error)
                })
        })
    }
}

export default new AuthController()