import Koa from 'koa'
import koaRouter from 'koa-router'
import mongoose from 'mongoose'

import { Generic } from './generic.class'
import authController from './controllers/auth'

const bodyParser = require('koa-bodyparser')
const koaBody = require('koa-body')
const koaLogger = require('koa-logger')
const cors = require('@koa/cors')

class KoaServer {

    app: Koa
    router: koaRouter

    constructor() {
        this.app = new Koa()
        this.router = new koaRouter()

        this.app.use(koaBody())
        this.app.use(koaLogger())
        this.app.use(cors())
    }

    private startRoutes(controllers: Generic[]) {
        for (const controller of controllers)
            controller.startRoute(this.router)

        this.app.use(this.router.routes())
        this.app.use(this.router.allowedMethods())

        console.log(this.router.stack.map(route => route.path))
    }

    private startDBConnection() {
        mongoose.connect('mongodb://127.0.0.1:27017/reactAuth', {
            useCreateIndex: true,
            useNewUrlParser: true,
            useUnifiedTopology: true
        })

        mongoose.connection.on('connected', () => {
            console.log(`Conexão com o mongoDB iniciada: ${mongoose.connections[0].name}`)
        }).on('disconnected', () => {
            console.log('Conexão com o banco de dados foi desfeita')
        })
    }

    init() {
        this.startDBConnection()
        this.startRoutes([authController])
        
        this.app.listen(3333)
        console.log(`Server on: http://localhost:3333`)
    }

}

const server = new KoaServer()
server.init()



