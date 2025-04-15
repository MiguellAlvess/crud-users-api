import { HTTPResponse, HttStatusCode } from "./protocols";

export const ok = <T>(body: any): HTTPResponse<T> => {
  return {
    statusCode: HttStatusCode.ok,
    body,
  };
};

export const created = <T>(body: any): HTTPResponse<T> => {
  return {
    statusCode: HttStatusCode.CREATED,
    body,
  };
};

export const badRequest = (message: string): HTTPResponse<string> => {
  return {
    statusCode: HttStatusCode.BAD_REQUEST,
    body: message,
  };
};

export const serverError = (): HTTPResponse<string> => {
  return {
    statusCode: HttStatusCode.SERVER_ERROR,
    body: "Algo deu errado",
  };
};
