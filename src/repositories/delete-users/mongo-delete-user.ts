import { ObjectId } from "mongodb";
import { MongoClient } from "../../database/mongo";
import { IDeleteUserRepository } from "../../controllers/delete-user/protocols";
import { User } from "../../models/user";
import { MongoUser } from "../mongo-protocols";

export class MongoDeleteUserRepository implements IDeleteUserRepository {
  async deleteUser(id: string): Promise<User> {
    const user = await MongoClient.db
      .collection<MongoUser>("users")
      .findOne({ _id: new ObjectId(id) });

    if (!user) {
      throw new Error("Usuário nao encontrado");
    }

    const { deletedCount } = await MongoClient.db
      .collection("users")
      .deleteOne({
        _id: new ObjectId(id),
      });

    if (!deletedCount) {
      throw new Error("Usuário nao deletado");
    }

    const { _id, ...rest } = user;

    return { id: _id.toHexString(), ...rest };
  }
}
