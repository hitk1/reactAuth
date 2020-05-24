import koaRouter from 'koa-router'

import { Generic } from "../generic.class";
import { UserService } from '../models/user/user.service';

class UserController extends Generic {

    private userService: UserService
    api: string

    constructor() {
        super()
        this.api = 'user'
        this.userService = new UserService()
    }

    startRoute(koaRouter: koaRouter) {
        koaRouter.post(`/${this.api}`, async (ctx: any) => {

            await this.userService.store(ctx.request.body)
            .then(validResponse => ctx.body = this.validResponse(validResponse))
            .catch(error => {
                ctx.status = 401
                ctx.body = this.invalidResponse(error)
            })


        })
    }

}

export const userController = new UserController()