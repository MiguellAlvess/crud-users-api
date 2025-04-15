export interface HTTPResponse<T> {
  statusCode: HttStatusCode;
  body: T;
}

export interface HttpRequest<B> {
  params?: any;
  headers?: any;
  body?: B;
}

export enum HttStatusCode {
  ok = 200,
  BAD_REQUEST = 400,
  SERVER_ERROR = 500,
  CREATED = 201,
}

export interface IController {
  handle(httpRequest: HttpRequest<unknown>): Promise<HTTPResponse<unknown>>;
}
