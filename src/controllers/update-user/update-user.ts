import { User } from "../../models/user";

import { HttpRequest, HTTPResponse, IController } from "../protocols";
import { IUpdateUserRepository, UpdateUserParams } from "./protocols";

export class UpdateUserController implements IController {
  constructor(private readonly updateUserRepository: IUpdateUserRepository) {}
  async handle(
    httpRequest: HttpRequest<UpdateUserParams>
  ): Promise<HTTPResponse<User>> {
    try {
      const id = httpRequest?.params?.id;
      const body = httpRequest?.body;

      if (!body) {
        return {
          statusCode: 400,
          body: "O corpo da requisição é obrigatório",
        };
      }

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
