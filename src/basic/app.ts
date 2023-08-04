import "reflect-metadata";
import { container } from 'tsyringe';
import { UserService } from './user-service';
import Koa from 'koa';
import Router from "@koa/router"

class App {
    constructor() { }

    serve() {
        const app = new Koa();

        const userService = container.resolve(UserService)
        const router = new Router()
        router.get('/api/users', ctx => {
            const users = userService.getUsers()
            ctx.body = {
                data: users
            }
        })
        app.use(router.routes())

        const port = 3000;
        app.listen(port, () => {
            console.log(`Now listening on: ${port}. Press CTRL+C to shut down.`)
        });
    }
}

function main() {
    const app = new App()
    app.serve()
}

main()