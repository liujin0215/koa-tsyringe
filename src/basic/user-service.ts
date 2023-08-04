import { injectable } from 'tsyringe';

@injectable()
export class UserService {
  getUsers() {
    return ['Alice', 'Bob', 'Charlie'];
  }
}