import { User } from "../../models/user";
import { HttpRequest, HTTPResponse } from "../protocols";

export interface ICreateUserController {
  handle(
    httpRequest: HttpRequest<CreateUserParams>
  ): Promise<HTTPResponse<User>>;
}

export interface CreateUserParams {
  name: string;
  email: string;
  password: string;
}

export interface ICreateUserRepository {
  createUser(params: CreateUserParams): Promise<User>;
}
