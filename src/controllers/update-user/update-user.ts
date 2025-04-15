import { User } from "../../models/user";
import { badRequest, ok, serverError } from "../helpers";

import { HttpRequest, HTTPResponse, IController } from "../protocols";
import { IUpdateUserRepository, UpdateUserParams } from "./protocols";

export class UpdateUserController implements IController {
  constructor(private readonly updateUserRepository: IUpdateUserRepository) {}
  async handle(
    httpRequest: HttpRequest<UpdateUserParams>
  ): Promise<HTTPResponse<User | string>> {
    try {
      const id = httpRequest?.params?.id;
      const body = httpRequest?.body;

      if (!body) {
        return badRequest("O body é obrigatório");
      }

      if (!id) {
        return badRequest("O id é obrigatório");
      }

      const allowedFieldsToUpdate: (keyof UpdateUserParams)[] = [
        "name",
        "password",
      ];
      const someFieldIsNotAllowedUpdate = Object.keys(body).some(
        (key) => !allowedFieldsToUpdate.includes(key as keyof UpdateUserParams)
      );

      if (someFieldIsNotAllowedUpdate) {
        return badRequest("Alguns campos nao podem ser atualizados");
      }

      const user = await this.updateUserRepository.updateUser(id, body);

      return ok<User>(user);
    } catch (error) {
      console.error("Erro no UpdateUserController:", error);
      return serverError();
    }
  }
}
