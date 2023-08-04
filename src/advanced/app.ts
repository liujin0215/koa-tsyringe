import "reflect-metadata";
import { container, inject, injectable } from 'tsyringe';
import { UserService } from './user-service';
import Koa from 'koa';
import Router from "@koa/router"

@injectable()
class App {
    constructor(
        @inject(UserService)
        private userService: UserService,
    ) { }

    serve() {
        const { userService } = this
        const app = new Koa();
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
    const app = container.resolve(App)
    app.serve()
}

main()