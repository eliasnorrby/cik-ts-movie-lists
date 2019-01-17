import { IHttpClient } from "./IHttpClient";

export class HttpClient implements IHttpClient {
  get(url: string): Promise<string> {
    return Promise.resolve("");
    // Make real API call here
  }
}
