import { get } from "http";
import { IGetUsersRepository } from "./protocols";
import { HTTPResponse, IController } from "../protocols";
import { ok, serverError } from "../helpers";
import { User } from "../../models/user";

export class GetUsersController implements IController {
  // sinalizando que vai receber um repository
  constructor(private readonly getUsersRepository: IGetUsersRepository) {}
  async handle(): Promise<HTTPResponse<User[] | string>> {
    try {
      // validar requisição
      // direcionar chamada para o repository
      const users = await this.getUsersRepository.getUsers();

      return ok<User[]>(users);
    } catch (error) {
      return serverError();
    }
  }
}
