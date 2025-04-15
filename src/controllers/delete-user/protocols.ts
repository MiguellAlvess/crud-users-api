import { User } from "../../models/user";
import { HTTPResponse } from "../protocols";
import { HttpRequest } from "../protocols";

export interface IDeleteUserController {
  handle(httpRequest: HttpRequest<any>): Promise<HTTPResponse<User>>;
}

export interface IDeleteUserRepository {
  deleteUser(id: string): Promise<User>;
}
