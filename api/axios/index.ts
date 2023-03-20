import { get } from "./base";

interface IApiBase {
  get(path: string, query: object, headers: object): any;
  // post(path: string, query: object, headers: object, data: object): any;
  // put(path: string, query: object, headers: object, data: object): any;
  // patch(path: string, query: object, headers: object, data: object): any;
  // delete(path: string, query: object, headers: object): any;
}

export abstract class ApiController implements IApiBase {
  protected abstract readonly urlPath: string;
  get() {
    return get();
  }
  // post(path: string, query: object, headers: object, data: object) {
  //   return post(path, query, headers, data);
  // }
  // patch(path: string, query: object, headers: object, data: object) {
  //   return patch(path, query, headers, data);
  // }
  // put(path: string, query: object, headers: object, data: object) {
  //   return put(path, query, headers, data);
  // }
  // delete(path: string, query: object, headers: object) {
  //   return _delete(path, query, headers);
  // }
}
