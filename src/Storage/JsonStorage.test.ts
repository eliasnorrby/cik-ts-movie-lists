import { Settings } from "../Settings";
import { JsonStorage } from "./JsonStorage";

describe("JsonStorage", () => {
  let jsonStorage: JsonStorage;

  beforeEach(() => {
    const settings = new Settings("settings.local.txt");
    jsonStorage = new JsonStorage(settings);
  });

  it("Should read all movies from database", async done => {
    jsonStorage.all().then(movies => {
      // tslint:disable-next-line:no-console
      console.log(movies);
      expect(movies.length).toBe(1);
      done();
    });
  });
});
