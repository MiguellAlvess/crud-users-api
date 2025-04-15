import { User } from "../../models/user";
import { HttpRequest, HTTPResponse } from "../protocols";

export interface UpdateUserParams {
  name?: string;
  password?: string;
}

export interface IUpdateUserController {
  handle(httpRequest: HttpRequest<any>): Promise<HTTPResponse<User>>;
}
export interface IUpdateUserRepository {
  updateUser(id: string, params: UpdateUserParams): Promise<User>;
}
