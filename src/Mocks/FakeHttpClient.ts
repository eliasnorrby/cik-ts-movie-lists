import { readFileSync } from "fs";
import { IHttpClient } from "../ConsumerApi/HttpClient/IHttpClient";

export class FakeHttpClient implements IHttpClient {
    get(url: string): Promise<string> {
        // let response = '{"this":"is some json"}';

        // tslint:disable-next-line:max-line-length
        const response = readFileSync("/Users/elias.norrby/Dropbox (FFCG)/folders/dev/CodeIsKing/MovieLists/src/Mocks/exampleResponse.txt", "utf8");
        // console.log(response);

        return Promise.resolve(response);
    }
}
