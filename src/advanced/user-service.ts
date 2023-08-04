import { inject, injectable, registry, singleton } from 'tsyringe';

const UsersToken = Symbol('Users')

@injectable()
@singleton()
@registry([
    {
        token: UsersToken,
        useValue: ['Alice', 'Bob', 'Charlie'],
    },
])
export class UserService {
    constructor(
        @inject(UsersToken)
        private users: Array<string>
    ) { }
    getUsers() {
        const { users } = this
        return users
    }
}