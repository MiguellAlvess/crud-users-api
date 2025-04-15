import { User } from "../../models/user";
import { CreateUserParams } from "../create-user/protocols";
import { HttpRequest, HTTPResponse } from "../protocols";
import {
  IUpdateUserController,
  IUpdateUserRepository,
  UpdateUserParams,
} from "./protocols";

export class UpdateUserController implements IUpdateUserController {
  constructor(private readonly updateUserRepository: IUpdateUserRepository) {}
  async handle(httpRequest: HttpRequest<any>): Promise<HTTPResponse<User>> {
    try {
      const id = httpRequest?.params?.id;
      const body = httpRequest?.body;

      if (!id) {
        return {
          statusCode: 400,
          body: "O id é obrigatório",
        };
      }

      const allowedFieldsToUpdate: (keyof UpdateUserParams)[] = [
        "name",
        "password",
      ];
      const someFieldIsNotAllowedUpdate = Object.keys(body).some(
        (key) => !allowedFieldsToUpdate.includes(key as keyof UpdateUserParams)
      );

      if (someFieldIsNotAllowedUpdate) {
        return {
          statusCode: 400,
          body: "Alguns campos não podem ser atualizados",
        };
      }

      const user = await this.updateUserRepository.updateUser(id, body);

      return {
        statusCode: 200,
        body: user,
      };
    } catch (error) {
      console.error("Erro no UpdateUserController:", error);
      return {
        statusCode: 500,
        body: "Algo deu errado",
      };
    }
  }
}
