import { IGetUsersRepository } from "../../controllers/get-users/protocols";
import { User } from "../../models/user";

export class MongoGetUsersRepository implements IGetUsersRepository {
  async getUsers(): Promise<User[]> {
    return [
      {
        firstName: "Guilherme",
        lastName: "Silva",
        email: "a@b.com",
        password: "123456",
      },
    ];
  }
}
