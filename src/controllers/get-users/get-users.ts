import { get } from "http";
import { IGetUsersRepository } from "./protocols";
import { IController } from "../protocols";

export class GetUsersController implements IController {
  // sinalizando que vai receber um repository
  constructor(private readonly getUsersRepository: IGetUsersRepository) {}
  async handle() {
    try {
      // validar requisição
      // direcionar chamada para o repository
      const users = await this.getUsersRepository.getUsers();

      return {
        statusCode: 200,
        body: users,
      };
    } catch (error) {
      return {
        statusCode: 500,
        body: "Algo deu errado",
      };
    }
  }
}
