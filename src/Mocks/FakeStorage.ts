import { IStorage } from "../Core/IStorage";
import { Movie } from "../Core/Movie";

export class FakeStorage implements IStorage<Movie> {
    private _movies = [];

    load(id: string) {
        return this._movies.find(m => m.id === id);
    }

    store(movie: Movie): void {
        this._movies.push(movie);
    }

    delete(movie: Movie): void {
        this._movies = this._movies.filter(m => m.id !== movie.id);
    }

    all() {
        return this._movies;
    }
}
