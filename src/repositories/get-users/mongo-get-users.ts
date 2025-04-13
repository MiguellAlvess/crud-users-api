import { MongoClient } from "../../database/mongo";
import { IGetUsersRepository } from "../../controllers/get-users/protocols";
import { User } from "../../models/user";

export class MongoGetUsersRepository implements IGetUsersRepository {
  async getUsers(): Promise<User[]> {
    const users = await MongoClient.db
      .collection<User>("users")
      .find()
      .toArray();
    return [
      {
        id: users[0].id,
        firstName: users[0].firstName,
        lastName: users[0].lastName,
        email: users[0].email,
        password: users[0].password,
      },
    ];
  }
}
