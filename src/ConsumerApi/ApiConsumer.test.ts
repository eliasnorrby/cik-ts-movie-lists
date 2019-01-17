import { FakeHttpClient } from "../Mocks/FakeHttpClient";
import { FakeStorage } from "../Mocks/FakeStorage";
import { ApiConsumer } from "./ApiConsumer";

describe("ApiConsumer", () => {
    let consumer: ApiConsumer;

    beforeEach(() => {
        const client = new FakeHttpClient();
        const storage = new FakeStorage();
        consumer = new ApiConsumer(client, storage);
    });

    it("should return a list of 20 movies", async done => {
        const list = await consumer.getTopRatedMovies();
        // console.log(list[2])
        expect(list.length).toBe(20);

        done();
    });

    it("should store movies in the db after syncing", async done => {
        await consumer.syncMovies();
        const numberOfMovies = await consumer._storage.all().then( movies => {
          return movies.length;
        });

        expect(numberOfMovies).toBe(20);

        done();
    });

    it("should store movies in the correct format", async done => {
        await consumer.syncMovies();
        expect(consumer._storage.load(238).name).toBe("The Godfather");

        done();
    });
});
