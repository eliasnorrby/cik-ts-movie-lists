import { Movie } from "./Movie";

describe("Movie", () => {
    let movie: Movie;

    beforeEach(() => {
        movie = new Movie("1", "Harry Potter and The Goblet of Fire");
    });

    it("should be created with an ID and a title", () => {
        const m = new Movie("a123", "Bambi");
        expect([m.name, m.id]).toEqual(["Bambi", "a123"]);
    });
});
