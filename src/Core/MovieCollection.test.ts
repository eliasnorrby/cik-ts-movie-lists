import { FakeStorage } from "../Mocks/FakeStorage";
import { Movie } from "./Movie";
import { MovieCollection } from "./MovieCollection";

describe("Movie collection", () => {
    let movieCollection: MovieCollection;

    beforeEach(() => {
        const fakeStorage = new FakeStorage();
        movieCollection = new MovieCollection(fakeStorage);
    });

    it("should be able to add movie", () => {
        const theLionKing = new Movie("1", "The Lion King");

        movieCollection.addMovie(theLionKing);

        expect(movieCollection.addMovie(theLionKing));
    });
});
