import koaRouter from 'koa-router'
import Application from 'koa'

export class Generic {

    public validResponse<T>(data: T | object){
        return { data }
    }

    public invalidResponse(message: string){
        return { message }
    }
    public startRoute(koaRoute: koaRouter) { }
}